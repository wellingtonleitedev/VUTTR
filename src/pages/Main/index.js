import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import api from '../../services/api';
import { Modal } from '../../components/Modal';
import { toast } from 'react-toastify';
import { ToastContentSuccess } from '../../components/ToastContentSuccess';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchTools();
  }, []);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = async tool => {
    await api.delete(`/tools/${tool.id}`);
    fetchTools();
    toast.success(
      <ToastContentSuccess>
        {tool.title} has been successfully removed!
      </ToastContentSuccess>
    );
  };

  const fetchTools = async () => {
    const tools = await api.get('/tools');
    setTools([...tools.data]);
  };

  const handleSearch = async search => {
    if (!search) return fetchTools();
    let tools = undefined;

    if (checked) {
      tools = await api.get(`/tools?tags_like=${search}`);
    } else {
      tools = await api.get(`/tools?q=${search}`);
    }

    setTools([...tools.data]);
  };

  return (
    <Container>
      <Content>
        <Header
          checked={checked}
          onChecked={() => setChecked(!checked)}
          onChange={e => handleSearch(e.target.value)}
          onClick={handleOpen}
        />
        <List tools={tools} onClick={item => handleRemove(item)}></List>
      </Content>
      <Modal open={open} onClose={() => handleClose()} />
    </Container>
  );
}
