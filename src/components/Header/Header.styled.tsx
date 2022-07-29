import styled from 'styled-components';

import backgroundImage from 'assets/images/pattern-bg.png';

const Container = styled.header`
  width: 100%;
  height: 250px;
  display: flex; flex-direction: column;
  align-items: center;
  background: -moz-linear-gradient(45deg, rgba(25,110,179,0.3) 30%, rgba(255,255,255,0.3) 100%), url(${backgroundImage});
  background: linear-gradient(45deg, rgba(25,110,179,0.3) 30%, rgba(255,255,255,0.3) 100%), url(${backgroundImage});
`;

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.white};
  font-size: 25px;
  margin-top: 25px;

  @media screen and (min-width: ${({ theme }) => theme.size.tablet }) {
    & {
      font-size: 30px;
    }
  }
`;

export { Container, Title };
