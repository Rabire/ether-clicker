import { Background, Modal, Exit, Form } from './styles';

type ClaimModalProps = {
  closeModal: () => void;
};

export function ClaimModal({ closeModal }: ClaimModalProps) {
  return (
    <Background>
      <Modal>
        <Exit onClick={closeModal}>X</Exit>
        <h1>Withdraw your Coins</h1>
        <p>1 coin = 1 Wei</p>

        <Form>
          Enter your wallet address:
          <div>
            <input type="text" placeholder="0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" />
            <button type="submit">OK</button>
          </div>
        </Form>
      </Modal>
    </Background>
  );
}
