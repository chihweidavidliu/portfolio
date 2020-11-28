import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InformationRow from './InfromationRow'

const SkillCardWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s;
  &:hover {
    transform: scale(1.03);
    border: 1px solid ${props => props.theme.accent1.bg};
  }
  padding: 25px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.21);
`

const Header = styled.div`
  margin-bottom: 15px;
  color: #347c67;
  text-align: center;
  strong {
    margin-left: 10px;
    font-weight: 800;
    font-size: 20px;
  }
`

const SubSection = styled.div`
  display: grid;
  grid-gap: 15px;
`

const SkillCard = ({ title, icon, categories }) => (
  <SkillCardWrapper>
    <Header>
      <FontAwesomeIcon icon={icon} />
      <strong>{title}</strong>
    </Header>
    <SubSection>
      {categories.map(category => (
        <InformationRow
          key={category.name}
          title={category.name}
          values={category.content}
        />
      ))}
    </SubSection>
  </SkillCardWrapper>
)

export default SkillCard

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  categories: PropTypes.array.isRequired,
}
