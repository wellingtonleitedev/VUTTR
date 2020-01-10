/* eslint-disable no-undef */
import React, { useRef, useState, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Button, InitialPage, List, Item, LastPage } from './styles';

export function Pagination({ pages }) {
  const ulRef = useRef();
  const [page, setPage] = useState(100);
  const [limit, setLimit] = useState(
    pages - 8 < page ? 8 : page <= 10 ? 10 : 6
  );
  console.log(pages - 8 < page ? 8 : page <= 10 ? 10 : 6);

  useMemo(() => {
    setLimit(pages - 8 < page ? 8 : page <= 10 ? 10 : 6);
  }, [page, pages]);

  const calculateLastValue = () => {
    let value = page;

    if (page % 10 !== 0 && page - (page % 10) + limit > pages) value = pages;

    if (page % 10 !== 0 && page - (page % 10) + limit < pages)
      value = page - (page % 10) + limit;

    return value;
  };
  const [lastValues, setLastValues] = useState(calculateLastValue());

  const paginationItemsRender = () => {
    const items = [];
    for (let number = 1; number <= pages; number += 1) {
      items.push(
        <Item key={number} actived={number === Number(page)}>
          <span>{number}</span>
        </Item>
      );
    }

    return items.slice(lastValues - limit, lastValues);
  };

  const backwardWithActived = value => {
    const firstOption = Number(ulRef.current.firstChild.firstChild.innerHTML);
    const lastOption = Number(ulRef.current.lastChild.firstChild.innerHTML);
    const subtraction = page <= 10 ? 10 : lastValues - limit;
    const diferent = lastValues % 10;

    if (value < firstOption) {
      setLastValues(subtraction);
    } else if (lastValues === lastOption && value === lastValues - diferent) {
      setLastValues(lastValues - diferent);
    }
  };

  const forwardWithActived = value => {
    const sum = lastValues + limit;
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
      <List ref={ulRef}>{paginationItemsRender(page, pages)}</List>
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
