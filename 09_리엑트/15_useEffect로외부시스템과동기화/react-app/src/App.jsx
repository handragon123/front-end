import { useState, useRef, useEffect, useId } from 'react';
import './App.css';
import MyInput from './MyInput';
import Counter from './Counter';

export default function App() {
  const [firstName, setFirstName] = useState('테일러');
  const [lastName, setLastName] = useState('스위프트');
  const [toggleForm, setToggleForm] = useState(true);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="app">
      <div className="btn_wrap">
        <button
          className="btn"
          type="button"
          onClick={() => setToggleForm(!toggleForm)}
        >
          Form {toggleForm ? '숨기기' : '보이기'}
        </button>
      </div>
      {toggleForm && (
        <div className="input_area">
          <div>
            <label>이름을 입력하세요: </label>
            <MyInput
              value={firstName}
              shouldFocus={true}
              onChange={handleFirstName}
            />
          </div>
          <div>
            <label>성을 입력하세요: </label>
            <MyInput
              value={lastName}
              shouldFocus={false}
              onChange={handleLastName}
            />
          </div>
          <p>
            안녕하세요, {firstName} {lastName}
          </p>
        </div>
      )}
      <Counter />
    </div>
  );
}
