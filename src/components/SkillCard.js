import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillCardWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  &:hover {
    transform: scale(1.03);
  }
  padding: 20px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.21);
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  > * {
    align-self: center;
  }
`

const SkillCard = ({ title, icon }) => (
  <SkillCardWrapper>
    <Header>
      <FontAwesomeIcon icon={icon} />
      <strong>{title}</strong>
    </Header>
  </SkillCardWrapper>
)

export default SkillCard

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
}
