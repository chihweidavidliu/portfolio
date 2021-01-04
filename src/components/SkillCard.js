import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InformationRow from './InfromationRow'

const SkillCardWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 25px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.21);
  opacity: 0;
  transform: translateY(50%);

  ${props =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateY(0);
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
      &:hover {
        transform: scale(1.03);
        border: 1px solid ${props => props.theme.accent1.bg};
      }
    `}
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

const SkillCard = ({ title, icon, categories }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px 50px 0px',
  })

  return (
    <SkillCardWrapper ref={ref} inView={inView}>
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
}

export default SkillCard

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  categories: PropTypes.array.isRequired,
}
