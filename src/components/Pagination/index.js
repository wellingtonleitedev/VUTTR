import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, InitialPage, List, Item, LastPage } from './styles';
import { fetchToolsRequest } from '../../store/modules/tools/actions';

export function Pagination() {
  const ulRef = useRef();
  const dispatch = useDispatch();
  const page = useSelector(state => Number(state.tools.page));
  const pages = useSelector(state => Number(state.tools.pages));
  // const [pages] = useState(11);

  const defineParamsSlice = () => {
    const limit = page > 10 ? 8 : 10;
    let initialValue = page - 1 - ((page - 1) % limit);
    const lastValue =
      initialValue + limit > pages ? pages : initialValue + limit;

    initialValue = page > 10 ? lastValue - (initialValue % limit) - limit : 0;

    const params = {
      initialValue,
      lastValue,
    };

    return params;
  };

  const handlePaginate = value => {
    dispatch(fetchToolsRequest({ page: value }));
  };

  const paginationItemsRender = () => {
    const params = defineParamsSlice();
    const items = [];

    for (let number = 1; number <= pages; number += 1) {
      items.push(
        <Item
          key={number}
          actived={number === page}
          onClick={() => handlePaginate(number)}
        >
          <span>{number}</span>
        </Item>
      );
    }

    return items.slice(params.initialValue, params.lastValue);
  };

  return (
    <Container>
      <Button
        type="button"
        disabled={page === 1}
        onClick={() => handlePaginate(page - 1)}
      >
        <FaChevronLeft color="#fff" size={13} />
        Anterior
      </Button>
      <List ref={ulRef}>{paginationItemsRender()}</List>
      <Button
        type="button"
        disabled={page === pages}
        onClick={() => handlePaginate(page + 1)}
      >
        Próximo
        <FaChevronRight color="#fff" size={13} />
      </Button>
    </Container>
  );
}
