import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import List from '../../components/List';
import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState(undefined);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const fetchTools = async () => {
    const tools = await api.get('/tools');
    setTools([...tools.data]);
  };

  const handleSearch = async () => {
    if (!search) return fetchTools();

    const tools = await api.get(`/tools?q=${search}`);
    setTools([...tools.data]);
  };

  return (
    <Container>
      <Content>
        <Header value={search} onChange={e => setSearch(e.target.value)} />
        <List tools={tools}></List>
      </Content>
    </Container>
  );
}
