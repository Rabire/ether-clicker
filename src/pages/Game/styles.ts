import styled, { keyframes } from 'styled-components';
import { Color, FontSize } from 'styles/theme';

export const Page = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    background: ${Color.BackgroundLighter};
    min-width: 26rem;
    width: 100%;
    padding: 2rem;
    margin: 5rem;
  }
`;

const coinAnimation = keyframes`
 from { transform: scale(1) }
 to { transform: scale(1.1) }
`;

export const CoinButton = styled.button`
  animation: ${coinAnimation} 3s infinite alternate ease-in-out;

  :active {
    animation: ${coinAnimation} 0.2s ease-in-out;
  }
`;

export const ScoreSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-size: ${FontSize.Big};
  }

  p {
    color: ${Color.UtilityDark};
    font-style: italic;
    font-size: ${FontSize.Small};
    margin-top: 1rem;
  }
`;

export const ClaimButton = styled.button`
  margin-top: 2rem;
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
