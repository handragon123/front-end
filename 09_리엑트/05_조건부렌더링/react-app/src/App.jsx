import './App.css';

function Item({ name, isPacked }) {
  return (
    <li className={`item ${isPacked ? 'checked' : ''}`}>
      {isPacked ? name + '✔' : name + '❌'}
    </li>
  );
}

export default function App() {
  return (
    <div className="app">
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item name="우주복" isPacked={true} />
          <Item name="황금잎이 달린 헬멧" isPacked={true} />
          <Item name="가족사진" isPacked={false} />
        </ul>
      </section>
    </div>
  );
}
