/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Button, List, Item } from './styles';

export function Pagination({ pages }) {
  const ulRef = useRef();
  const [page, setPage] = useState(25);
  const [lastValues, setLastValues] = useState(
    page - (page % 10) + 10 > pages ? pages : page - (page % 10) + 10
  );

  const paginationItemsRender = () => {
    const items = [];
    for (let number = 1; number <= pages; number += 1) {
      items.push(
        <Item key={number} actived={number === Number(page)}>
          <span>{number}</span>
        </Item>
      );
    }

    return items.slice(lastValues - 10, lastValues);
  };

  const backwardWithActived = value => {
    const firstOption = Number(ulRef.current.firstChild.firstChild.innerHTML);
    const lastOption = Number(ulRef.current.lastChild.firstChild.innerHTML);
    const diferent = lastValues % 10;

    if (value < firstOption) {
      setLastValues(lastValues - 10);
    } else if (lastValues === lastOption && value === lastValues - diferent) {
      setLastValues(lastValues - diferent);
    }
  };

  const forwardWithActived = value => {
    const sum = lastValues + 10;
    const lastOption = Number(ulRef.current.lastChild.firstChild.innerHTML);

    if (value > lastOption && sum <= pages) {
      setLastValues(sum);
    } else if (value > lastOption) {
      const diferent = pages - lastOption;
      setLastValues(lastValues + diferent);
    }
  };

  const previousPage = () => {
    setPage(page - 1);
    backwardWithActived(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
    forwardWithActived(page + 1);
  };

  return (
    <Container>
      <Button
        type="button"
        disabled={Number(page) === 1}
        onClick={() => previousPage()}
      >
        <FaChevronLeft color="#fff" size={13} />
        Anterior
      </Button>
      <List ref={ulRef}>{paginationItemsRender(page, pages)}</List>
      <Button
        type="button"
        disabled={Number(page) === pages}
        onClick={() => nextPage()}
      >
        Próximo
        <FaChevronRight color="#fff" size={13} />
      </Button>
    </Container>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
};
