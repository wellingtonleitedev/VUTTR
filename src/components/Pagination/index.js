/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import { Container } from './styles';

export function Pagination() {
  const ulRef = useRef();

  useEffect(() => {
    const firstChild = ulRef.current.firstElementChild;
    firstChild.classList.add('active');
  }, []);

  const backwardWithActived = () => {
    const actived = document.querySelector('.active');
    const previous = actived.previousSibling;

    if (previous) {
      actived.classList.remove('active');
      previous.classList.add('active');
    } else if (Number(actived.innerHTML) !== 1) {
      ulRef.current.childNodes.forEach(child => {
        child.innerHTML = Number(child.innerHTML) - 10;
      });
      actived.classList.remove('active');
      ulRef.current.lastElementChild.classList.add('active');
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
        child.innerHTML = Number(child.innerHTML) + 10;
      });
      actived.classList.remove('active');
      ulRef.current.firstElementChild.classList.add('active');
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
        <button type="button" onClick={() => previousPage()}>
          Anterior
        </button>
        <ul ref={ulRef}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <button type="button" onClick={() => nextPage()}>
          Próximo
        </button>
      </div>
    </Container>
  );
}
