import './App.css';

// 버튼 클릭시 body 색상 변경하기
let toggle = false;
export default function App() {
  function handleChangeBg() {
    const bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor !== 'black') {
      bodyStyle.backgroundColor = 'black';
    } else {
      bodyStyle.backgroundColor = 'white';
    }
  }

  return (
    <div className="app">
      <button
        className={`btn ${document.body.style.backgroundColor ? 'on' : ''}`}
        type="button"
        onClick={handleChangeBg}
      >
        바디 색상 변경
      </button>
    </div>
  );
}
