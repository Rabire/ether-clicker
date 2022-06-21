import styled from 'styled-components';
import { Color, FontSize } from 'styles/theme';

export const Page = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  background: ${Color.BackgroundLighter};
  height: calc(100% - 10rem);
  margin-top: 5rem;
  width: 100%;
  padding: 5rem;
  margin: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: ${FontSize.Big};
  }
`;

export const ClaimButton = styled.button`
  margin-top: auto;
  padding: 1rem;
  width: 100%;
  background: ${Color.Primary};
  border-radius: 999px;
  text-align: center;

  transition: all 200ms ease-out;

  :hover {
    background: ${Color.PrimaryLighter};
  }
`;
