// App.jsx
import './App.css';
import { getImageUrl } from './utils';

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'l',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        // src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        src={getImageUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>화상전화 개선</li>
        <li>항공학 강의 준비</li>
        <li>알코올 연료 엔진 작업</li>
      </ul>
    </div>
  );
}
