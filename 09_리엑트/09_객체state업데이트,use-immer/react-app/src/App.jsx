import './App.css';
import { useImmer } from 'use-immer';
import { useState } from 'react';

export default function Form() {
  // immer사용시 객체불변성을 유지하면서 새로운 객체 데이터 업데이트 가능
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  // 작가명 변경하기
  function handleChangeName(e) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  // 작품명 변경하기
  function handleChangeTitle(e) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  // 제작 도시 변경하기
  function handleChangeCity(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  // 이미지 변경하기
  function handleChangeImage(e) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <div>
        <label>
          Name:
          <input value={person.name} onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label>
          Title:
          <input value={person.artwork.title} onChange={handleChangeTitle} />
        </label>
      </div>
      <div>
        <label>
          City:
          <input value={person.artwork.city} onChange={handleChangeCity} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input value={person.artwork.image} onChange={handleChangeImage} />
        </label>
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
