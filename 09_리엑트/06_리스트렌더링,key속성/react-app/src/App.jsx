import './App.css';
import { people } from './data';
import { getImageUrl } from './utils';

// people배열데이터에서 직업이 화학자인 요소를 배열로 추출
// people배열데이터에서 직업이 화학자가 아닌 요소를 배열로 추출
// 섹션안쪽에 화학자 리스트와 다른 과학자 리스트를 map메서드로 렌더링하기
export default function App() {
  const chemist = people.filter((person) => person.profession === '화학자');
  const other = people.filter((person) => person.profession !== '화학자');

  return (
    <div className="app">
      <section>
        <h2>과학자</h2>
        <h3>화학자</h3>
        <ul>
          {chemist.map((person) => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}: </b>
                {person.profession}
                <b>업적: </b>
                {person.accomplishment}
              </p>
            </li>
          ))}
        </ul>
        <h3>다른 과학자</h3>
        <ul>
          {other.map((person) => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}: </b>
                {person.profession}
                <b>업적: </b>
                {person.accomplishment}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
