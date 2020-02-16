import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, InitialPage, List, Item, LastPage } from './styles';
import { fetchToolsRequest } from '../../store/modules/tools/actions';

export function Pagination() {
  const ulRef = useRef();
  const dispatch = useDispatch();
  const page = useSelector(state => Number(state.tools.page));
  const pages = useSelector(state => Number(state.tools.pages));
  const total = useSelector(state => state.tools.total);
  const limitItens = useSelector(state => state.tools.limit);

  const defineParams = () => {
    let limit = page > 10 ? 6 : 10;
    let initialValue = page - 1 - ((page - 1) % limit);
    const lastValue =
      initialValue + limit > pages ? pages : initialValue + limit;

    limit = lastValue === pages ? 8 : 6;

    initialValue = lastValue === pages ? lastValue - limit : initialValue;

    initialValue = initialValue < 0 ? 0 : initialValue;

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
    const params = defineParams();
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
    <>
      {total > limitItens && (
        <Container>
          <Button
            type="button"
            disabled={page === 1}
            onClick={() => handlePaginate(page - 1)}
          >
            <FaChevronLeft color="#fff" size={13} />
            Anterior
          </Button>
          {page > 10 && (
            <InitialPage onClick={() => handlePaginate(1)}>
              <span>1</span>
              <small>...</small>
            </InitialPage>
          )}
          <List ref={ulRef}>{paginationItemsRender()}</List>
          {page > 10 && defineParams().lastValue < pages && (
            <LastPage onClick={() => handlePaginate(pages)}>
              <small>...</small>
              <span>{pages}</span>
            </LastPage>
          )}
          <Button
            type="button"
            disabled={page === pages}
            onClick={() => handlePaginate(page + 1)}
          >
            Próximo
            <FaChevronRight color="#fff" size={13} />
          </Button>
        </Container>
      )}
    </>
  );
}
