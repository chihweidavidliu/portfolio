import React, { useState } from 'react'
import Papa from 'papaparse'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import JSZipUtils from 'jszip-utils'
import styled, { css } from 'styled-components'
import { useToasts } from 'react-toast-notifications'
import { dummyText } from '../../../util/speakify/dummyText'
import { languageOptions } from '../../../util/speakify/languageOptions'
import loading from '../../../assets/images/loading.gif'
import { getSynthesisIdForWord, getSynthesisUrlForWord } from './api'
import asyncForEach from '../../../util/speakify/asyncForEach'

const AppWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  background-color: teal;
`

const Background = styled.div`
  text-align: justify !important;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  font-size: 40px;
  font-family: 'Pacifico', cursive;
  color: #5d9e9d;
`

const Card = styled.div`
  z-index: 2;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const InputWrapper = styled.div``

const Header = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 60px;
  margin: 0;
`

const Description = styled.p`
  color: gray;
  margin: 0;
`

const Label = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
`

const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const StyledInput = styled.input`
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid lightgrey;
  &:focus,
  &:hover {
    border: 2px solid teal;
    outline: 0;
  }
`

const LoadingIndicator = styled.img`
  height: 100px;
  width: 100px;
  margin: 15px;
  animation: fadein 0.9s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.doubleColumn ? '1fr min-content 1fr' : '1fr'};
  grid-gap: 30px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-height: 60vh;
    overflow: auto;
    > * {
      justify-self: center;
    }
  }
`

const Divider = styled.div`
  height: 80%;
  width: 2px;
  margin: auto 20px;
  background-color: lightgrey;

  @media (max-width: 767px) {
    width: 100%;
    height: 2px;
    margin: 20px auto;
  }
`

const Results = styled.div`
  display: grid;
  grid-template-rows: min-content max-content 1fr;
  grid-gap: 20px;
  animation: fadein 0.8s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Table = styled.div`
  max-height: 40vh;
  overflow: auto;
  border: 1px solid lightgrey;
  justify-self: center;
  max-width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`
const Select = styled.select``

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 13px;
  margin-top: 20px;
  &:hover,
  &:focus {
    background-color: #cee5e5;
    outline: 0;
  }
`

const CancelButton = styled(Button)`
  border: 2px solid #b50101;
  color: #b50101;
  &:hover {
    background-color: #b50101;
    color: white;
  }
`

const SynthesiseButton = styled(Button)`
  font-size: 20px;
  padding: 15px;
  border: 2px solid ${props => (props.disabled ? 'lightgrey' : 'teal')};
  color: ${props => (props.disabled ? 'lightgrey' : 'teal')};
  margin-top: 40px;
  ${props =>
    props.disabled
      ? css`
          cursor: not-allowed;
          &:hover {
            background-color: white;
          }
        `
      : css`
          animation: activate 0.5s;
        `};

  @keyframes activate {
    0% {
      opacity: 0;
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Instruction = styled.div`
  margin-top: 20px;
  font-weight: bold;
  text-decoration: underline;
`

const Row = styled.div`
  width: 100%;
  display: flex;
`

const Cell = styled.span`
  width: 100px;
  flex-shrink: 0;
  border: 1px solid lightgrey;
  ${props =>
    props.isSelected &&
    css`
      background-color: teal;
      color: white;
      border: 1px solid teal;
    `}
  ${props =>
    props.isHovered &&
    css`
      background-color: lightgrey;
    `}
  cursor: pointer;
`

const toastConfig = {
  autoDismiss: true,
}

const parseCSV = async file =>
  new Promise((resolve, reject) => {
    Papa.parse(file, {
      error: reject,
      complete: resolve,
      skipEmptyLines: true,
    })
  })

const Speakify = () => {
  const [inputEl] = useState(React.createRef())
  const { addToast } = useToasts()
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].value
  )
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)
  const [cells, setCells] = useState([])
  const [hoveredCell, setHoveredCell] = useState(null)
  const [selectedCell, setSelectedCell] = useState(null)
  const [loadingMessage, setLoadingMessage] = useState('')

  const clearState = () => {
    setCells([])
    setHoveredCell(null)
    setSelectedCell(null)
    setLoadingMessage('')
  }

  const normaliseRowLengths = csvArray => {
    let longestRow = csvArray[0]

    // work out longest row
    csvArray.forEach(row => {
      if (row.length > longestRow.length) {
        longestRow = row
      }
    })

    // fill rows with empty cells if need be
    const filledArray = csvArray.map(row => {
      const filled = [...row]
      if (row.length < longestRow.length) {
        for (let i = 0; i < longestRow.length - row.length; i += 1) {
          filled.push('')
        }
      }

      return filled
    })

    return filledArray
  }

  const handleFileUpload = () => {
    if (inputEl && inputEl.current && inputEl.current.files) {
      if (inputEl.current.files.length) {
        const file = inputEl.current.files[0]
        clearState()
        setFile(file)
        // parse csv
        return parseCSV(file).then(parsed => {
          const formatted = normaliseRowLengths(parsed.data)
          setCells(formatted)
        })
      }

      clearState()
    }
  }

  const handleLanguageSelect = e => {
    setSelectedLanguage(e.target.value)
  }

  const getSynthesisData = async selectedWords => {
    const synthesisData = []
    await asyncForEach(selectedWords, async word => {
      const response = await getSynthesisIdForWord(word, selectedLanguage)

      synthesisData.push({ word, synthesisId: response.id })
    })

    return synthesisData
  }

  const downloadSynthesisedWords = async (synthesisData, folder) =>
    asyncForEach(synthesisData, async (wordData, index) => {
      const { synthesisId, word } = wordData

      // get download url for the synthesized mp3 files
      const data = await getSynthesisUrlForWord(synthesisId).catch(error =>
        // dont block other promises from execution if one word is not available - catch here and resolve
        addToast(error.message, { ...toastConfig, appearance: 'error' })
      )

      const url = data.location

      // get the binary content at that url location (get around CORS using cors-anywhere)
      const binaryContent = await JSZipUtils.getBinaryContent(
        `https://cors-anywhere.herokuapp.com/${url}`
      )

      setLoadingMessage(
        `Preparing file ${word}.mp3 (${index + 1}/${synthesisData.length})`
      )

      // add file to the zip folder
      folder.file(`${word}.mp3`, binaryContent, { binary: true })

      return wordData
    })

  const handleSynthesize = async () => {
    try {
      if (!file || !selectedCell) {
        return alert('Please select a file')
      }

      setIsLoading(true)
      setLoadingMessage('Preparing synthesis...')
      // remove .csv extension
      const folderName = file.name.replace('.csv', '')
      const zip = new JSZip()
      const folder = zip.folder(folderName)

      const selectedWords = cells
        .filter((row, index) => index >= selectedCell.rowIndex)
        .map(row => row[selectedCell.columnIndex])

      // get soundOfText api ids for each word and add it to selected word objects
      const synthesisData = await getSynthesisData(selectedWords)

      // download the word mp3s to the zip folder
      await downloadSynthesisedWords(synthesisData, folder)

      // generate a new archive
      const content = await zip.generateAsync({ type: 'blob' })

      addToast('Sound files successfully generated', {
        ...toastConfig,
        appearance: 'success',
      })
      // initiate save dialog box
      saveAs(content, 'sounds.zip')
    } catch (error) {
      addToast(error.message, { ...toastConfig, appearance: 'error' })
    } finally {
      setIsLoading(false)
      setLoadingMessage('')
    }
  }

  const handleCellMouseOver = (rowIndex, columnIndex) => {
    setHoveredCell({ rowIndex, columnIndex })
  }

  const handleCellClick = (rowIndex, columnIndex) => {
    setSelectedCell({ rowIndex, columnIndex })
  }

  const clearCellSelection = () => setSelectedCell(null)

  return (
    <AppWrapper>
      <Background>{dummyText}</Background>
      <Card>
        <Header>Speakify</Header>
        <h3>CSV text to speech synthesizer</h3>
        <Description>
          Speakify uses the soundoftext API to access Google's speech synthesis
          capabilities and rapidly download pronunciations for wordlists.
        </Description>

        <InnerGrid doubleColumn={cells.length > 0}>
          <InputWrapper>
            <Label>Choose a language</Label>
            <Select
              name="languages"
              id="languages"
              onChange={handleLanguageSelect}
              value={selectedLanguage}
            >
              {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

            <Label>Choose a CSV file:</Label>
            <Description>
              Words should be in individual cells in the first column of the CSV
              file.
            </Description>

            <UploadWrapper>
              <StyledInput
                ref={inputEl}
                type="file"
                id="words"
                name="words"
                accept=".csv"
                onChange={handleFileUpload}
              />
            </UploadWrapper>

            {isLoading && (
              <div>
                <LoadingIndicator src={loading} />
                {loadingMessage && <div>{loadingMessage}</div>}
              </div>
            )}
            <SynthesiseButton
              onClick={handleSynthesize}
              disabled={!selectedCell}
            >
              Synthesise
            </SynthesiseButton>

            {isLoading && (
              <div>
                <CancelButton onClick={() => window.location.reload()}>
                  Cancel
                </CancelButton>
              </div>
            )}
          </InputWrapper>

          <Divider />

          {cells.length > 0 && (
            <Results>
              <div>
                <Instruction>
                  Select the column of words to synthesize (click on the first
                  word excluding any column header)
                </Instruction>
                <Button onClick={clearCellSelection}>Clear Selection</Button>
              </div>

              <Table>
                {cells.map((row, rowIndex) => (
                  <Row key={`${row[0]}-${rowIndex}-row`}>
                    {row.map((cell, columnIndex) => {
                      const isSelected =
                        selectedCell &&
                        rowIndex >= selectedCell.rowIndex &&
                        columnIndex === selectedCell.columnIndex

                      const isHovered =
                        hoveredCell &&
                        !isSelected &&
                        rowIndex >= hoveredCell.rowIndex &&
                        columnIndex === hoveredCell.columnIndex

                      return (
                        <Cell
                          key={`${cell}-${columnIndex}-cell`}
                          isHovered={isHovered}
                          isSelected={isSelected}
                          onMouseOver={() =>
                            handleCellMouseOver(rowIndex, columnIndex)
                          }
                          onFocus={() => {
                            handleCellMouseOver(rowIndex, columnIndex)
                          }}
                          onClick={() => handleCellClick(rowIndex, columnIndex)}
                        >
                          {cell}
                        </Cell>
                      )
                    })}
                  </Row>
                ))}
              </Table>
            </Results>
          )}
        </InnerGrid>
      </Card>
    </AppWrapper>
  )
}

export default Speakify
