import styled from 'styled-components';
import { Color, Font, FontSize } from 'styles/theme';

export const Page = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: ${FontSize.Huge};
    font-family: ${Font.Title};
  }

  p {
    font-family: ${Font.Caligraphy};
    font-size: ${FontSize.Title};
  }

  svg {
    height: 6rem;
  }

  a {
    padding: 2rem;
    background: ${Color.Primary};

    border-radius: 999px;
    margin-top: 3rem;

    transition: all 200ms ease-out;

    :hover {
      background: ${Color.PrimaryLighter};
    }
  }
`;
