import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Container, Button, Actions, Inputs } from './styles';
import { Modal } from '@material-ui/core';

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
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </Container>
  );
}
