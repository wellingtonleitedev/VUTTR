import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import AddModal from '../../components/AddModal';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = async id => {
    await api.delete(`/tools/${id}`);
    fetchTools();
  };

  const fetchTools = async () => {
    const tools = await api.get('/tools');
    setTools([...tools.data]);
  };

  const handleSearch = async () => {
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
          value={search}
          checked={checked}
          onChecked={() => setChecked(!checked)}
          onChange={e => setSearch(e.target.value)}
          onClick={handleOpen}
        />
        <List tools={tools} onClick={item => handleRemove(item)}></List>
      </Content>
      <AddModal open={open} onClose={handleClose} />
    </Container>
  );
}
