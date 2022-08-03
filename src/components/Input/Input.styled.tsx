import styled, { css } from 'styled-components';

interface MarginProps {
  margin?: string;
}

const InputWrapper = styled.div<MarginProps>`
  display: flex;
  min-width: 320px;
  ${(props) =>
    props.margin && 
    css`
      margin: ${props.margin};
    `};

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      min-width: 450px;
    }
  }
`;

const InputField = styled.input`
  border: none;
  flex-grow: 1;
  font-size: 14px;
  padding: 10px 5px 10px 15px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  &:focus, &:active { 
    outline: none; 
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.darkGrey};
    font-size: ${({ theme }) => theme.font.size.regular};
  }
`;

const Button = styled.button`
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 40px;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #1b1b1b;

  &:focus, &:hover {
    background-color: #2f2f2f;
    cursor: pointer;
  }
`;

export { InputWrapper, InputField, Button };
