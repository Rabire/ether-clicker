import styled from 'styled-components';
import { Color } from 'styles/theme';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  background: ${Color.UtilityLight};
  color: ${Color.Background};
  text-align: center;
  padding: 2rem;

  p {
    font-style: italic;
  }
`;

export const Exit = styled.button`
  margin-left: auto;
  margin-bottom: 2rem;
  padding: 0.5rem;
`;

export const Form = styled.form`
  margin-top: 2rem;
  text-align: left;

  div {
    display: flex;

    input {
      width: 100%;
      padding: 0.5rem;
    }

    button {
      background: ${Color.Primary};
      padding: 1rem;
      color: ${Color.UtilityLight};
      margin-left: 1rem;

      :hover {
        background: ${Color.PrimaryLighter};
      }
    }
  }
`;
