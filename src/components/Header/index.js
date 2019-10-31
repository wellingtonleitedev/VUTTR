import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import {
  Container,
  Button,
  Actions,
  Inputs,
  ModalContent,
  Form,
} from './styles';
import Modal from '@material-ui/core/Modal';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <button>
            <FaSearch color="#B1ADB9" size={14} />
          </button>
          <input
            id="input-search"
            type="text"
            placeholder="Type what you are looking for"
          />
          <input id="input-check" type="checkbox" />
          <label htmlFor="input-check">search in logs only</label>
        </Inputs>
        <Button onClick={handleOpen}>
          <FaPlus color="#FFF" size={13} />
          Add
        </Button>
      </Actions>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <ModalContent>
          <Form>
            <label>Tool Name</label>
            <input></input>
            <label>Tool Link</label>
            <input></input>
            <label>Tool Tags</label>
            <input></input>
            <label>Tool Description</label>
            <input></input>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  );
}
