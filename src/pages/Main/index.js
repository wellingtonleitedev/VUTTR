import React from 'react';
import { Container, Content } from './styles';
import { Header, List } from '../../components';
import AddFormModal from '../../components/AddFormModal';

export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Content>
        <Header onClick={handleModal} />
        <List />
      </Content>
      <AddFormModal onClose={handleModal} open={open} />
    </Container>
  );
}
