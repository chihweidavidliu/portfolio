import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
  height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  border: 1px solid transparent;
  transition: border 0.4s;
  &:hover {
    border: 1px solid ${props => props.theme.accent1.bg};
  }
`
