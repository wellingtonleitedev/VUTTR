/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container, Button } from './styles';

export function Pagination({ page, pages }) {
  const ulRef = useRef();
  const [disablePrevious] = useState(Number(page) === 1);
  const [disableNext] = useState(Number(page) === pages);

  const paginationItemsRender = () => {
    const items = [];
    for (let number = 1; number <= pages; number += 1) {
      items.push(
        <li>
          <span>{number}</span>
        </li>
      );
    }
    return items.slice(0, 10);
  };

  useEffect(() => {
    ulRef.current.childNodes.forEach(child => {
      if (child.firstChild.innerHTML === page) {
        child.classList.add('active');
      }
    });
  }, [page]);

  const backwardWithActived = () => {
    const actived = document.querySelector('.active');
    const previous = actived.previousSibling;

    if (previous) {
      actived.classList.remove('active');
      previous.classList.add('active');
    } else if (Number(actived.innerHTML) !== 1) {
      ulRef.current.childNodes.forEach(child => {
        child.firstChild.innerHTML = Number(child.firstChild.innerHTML) - 10;
      });
      actived.classList.remove('active');
      ulRef.current.lastChild.classList.add('active');
    }
  };

  const forwardWithActived = () => {
    const actived = document.querySelector('.active');
    const next = actived.nextSibling;

    if (next) {
      actived.classList.remove('active');
      next.classList.add('active');
    } else {
      ulRef.current.childNodes.forEach(child => {
        child.firstChild.innerHTML = Number(child.firstChild.innerHTML) + 10;
      });
      actived.classList.remove('active');
      ulRef.current.firstChild.classList.add('active');
    }
  };

  const previousPage = () => {
    backwardWithActived();
  };

  const nextPage = () => {
    forwardWithActived();
  };

  return (
    <Container>
      <div className="pagination">
        <Button
          type="button"
          disabled={disablePrevious}
          onClick={() => previousPage()}
        >
          <FaChevronLeft color="#fff" size={13} />
          Anterior
        </Button>
        <ul ref={ulRef}>{paginationItemsRender()}</ul>
        <Button type="button" disabled={disableNext} onClick={() => nextPage()}>
          Próximo
          <FaChevronRight color="#fff" size={13} />
        </Button>
      </div>
    </Container>
  );
}

Pagination.defaultProps = {
  page: '1',
};

Pagination.propTypes = {
  page: PropTypes.string,
  pages: PropTypes.number.isRequired,
};
