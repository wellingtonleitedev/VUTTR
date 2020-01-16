/* eslint-disable no-undef */
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
  const [lastValues, setLastValues] = useState(
    page - (page % 10) + 10 > pages ? pages : page - (page % 10) + 10
  );

  const defineLastValues = value => {
    const firstOption = Number(ulRef.current.firstChild.firstChild.innerHTML);
    const lastOption = Number(ulRef.current.lastChild.firstChild.innerHTML);
    const sum = lastValues + 10;
    const diferent = lastValues % 10;

    if (value < firstOption) {
      setLastValues(lastValues - 10);
    } else if (lastValues === lastOption && value === lastValues - diferent) {
      setLastValues(lastValues - diferent);
    } else if (value > lastOption && sum <= pages) {
      setLastValues(sum);
    } else if (value > lastOption) {
      const subtration = pages - lastOption;
      setLastValues(lastValues + subtration);
    }
  };

  const handlePaginate = value => {
    dispatch(fetchToolsRequest({ page: value }));
    defineLastValues(value);
  };

  const paginationItemsRender = () => {
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

    if (pages > 10) return items.slice(lastValues - 10, lastValues);

    return items.slice(0, 10);
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
      {page > 10 && (
        <>
          <InitialPage>
            <span>1</span>
          </InitialPage>
          <InitialPage>
            <span>...</span>
          </InitialPage>
        </>
      )}
      <List ref={ulRef}>{paginationItemsRender()}</List>
      {lastValues && lastValues !== pages && page > 10 && (
        <>
          <LastPage>
            <span>...</span>
          </LastPage>
          <LastPage>
            <span>{pages}</span>
          </LastPage>
        </>
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
  );
}
