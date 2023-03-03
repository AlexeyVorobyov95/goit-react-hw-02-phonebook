import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  border-radius: 4px;
  border-color: inherit;
  border-style: none;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  font-weight: 700;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;
