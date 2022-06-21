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

  padding: 2rem;
`;

export const Exit = styled.button`
  background: red;
  margin-left: auto;
  margin-bottom: 2rem;
  padding: 0.5rem;
`;
