import styled from '@emotion/styled';

export const List = styled.ul`
  padding-left: 20px;
  width: 300px;
  height: 300px;
`;

export const Item = styled.li`
  padding: 5px 10px;
  
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: 4px;
  display: flex;
  align-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
    margin-right: 20px;
`

export const Button = styled.button`
  margin-left: auto;
  background-color: ${({ theme }) => {
    return theme.colors.gainsboro;
}}; 
  outline: 1px solid black;
  border-radius: 4px;
  padding: 3px;
`;
