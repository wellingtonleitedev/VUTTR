import React, { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import List from '../../components/List';
import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchTools();
  }, []);

  async function fetchTools() {
    const tools = await api.get('/tools');
    setTools([...tools.data]);
  }

  return (
    <Container>
      <Content>
        <Header />
        <List tools={tools}></List>
      </Content>
    </Container>
  );
}
