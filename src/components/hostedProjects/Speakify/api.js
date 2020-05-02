import axios from 'axios'

export const getSynthesisIdForWord = async (word, selectedLanguage) => {
  const response = await axios.post('https://api.soundoftext.com/sounds', {
    engine: 'Google',
    data: { text: word, voice: selectedLanguage },
  })

  return response.data
}

export const getSynthesisUrlForWord = async synthesisId => {
  const response = await axios.get(
    `https://api.soundoftext.com/sounds/${synthesisId}`
  )
  return response.data
}
