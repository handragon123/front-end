import useStore from './stores/store';
import useNumberBaseStore from './stores/numberBaseStore';

export default function App() {
  const { bears, increasePopulation, removeAllBears } = useStore();
  const { numberA, numberB, increaseNumberA, increaseNumberB } =
    useNumberBaseStore();
  console.log(bears);

  return (
    <>
      <div>
        <h1>{bears} around here ...</h1>
        <button type="button" onClick={increasePopulation}>
          one up
        </button>
        <button type="button" onClick={removeAllBears}>
          remove all
        </button>
      </div>
      <div>
        <p>numberA: {numberA}</p>
        <button onClick={increaseNumberA}>A증가</button>
        <p>numberB: {numberB}</p>
        <button onClick={() => increaseNumberB(3)}>B증가</button>
      </div>
    </>
  );
}
