import './App.css';
import { useState } from 'react';
import { sculptureList } from './data';
import Form from './Form';
import Counter from './Counter';

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleIncreaseIndex() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }
  function handleDecreaseIndex() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleToggleDetails() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <div className="app">
      <button className="btn" type="button" onClick={handleDecreaseIndex}>
        Prev
      </button>
      <button className="btn" type="button" onClick={handleIncreaseIndex}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <div>
        ({index + 1} of {sculptureList.length})
      </div>
      <div>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
      <button onClick={handleToggleDetails} type="button">
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <Form />
      <Counter />
    </div>
  );
}
