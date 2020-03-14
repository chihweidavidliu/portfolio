import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillCardWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s;
  &:hover {
    transform: scale(1.03);
  }
  padding: 20px;
  box-shadow: 9px 10px 59px -19px rgba(0, 0, 0, 0.21);
`

const Header = styled.div`
  margin-bottom: 10px;
  strong {
    margin-left: 10px;
  }
`

const CategoryWrapper = styled.div`
  font-size: 16px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 15px;
`

const List = styled.span`
  text-align: right;
  justify-self: right;
`

const CategoryList = ({ category, list }) => (
  <CategoryWrapper>
    <strong>{category}:</strong>
    <List>{list}</List>
  </CategoryWrapper>
)

CategoryList.propTypes = {
  category: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
}

const SkillCard = ({ title, icon, categories }) => (
  <SkillCardWrapper>
    <Header>
      <FontAwesomeIcon icon={icon} />
      <strong>{title}</strong>
    </Header>
    <div>
      {categories.map(category => (
        <CategoryList category={category.name} list={category.content} />
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
