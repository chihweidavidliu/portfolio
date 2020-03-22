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
  margin-bottom: 10px;
  color: #3a8e75;
  text-align: center;
  strong {
    color: #3a8e75;
    margin-left: 10px;
    font-weight: 800;
  }
`

const SkillCard = ({ title, icon, categories }) => (
  <SkillCardWrapper>
    <Header>
      <FontAwesomeIcon icon={icon} />
      <strong>{title}</strong>
    </Header>
    <div>
      {categories.map(category => (
        <InformationRow
          key={category.name}
          title={category.name}
          value={category.content}
        />
      ))}
    </div>
  </SkillCardWrapper>
)

export default SkillCard

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  categories: PropTypes.array.isRequired,
}
