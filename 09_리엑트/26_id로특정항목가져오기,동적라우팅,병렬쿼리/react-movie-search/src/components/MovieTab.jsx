export default function MovieTab({ setType }) {
  const types = ['All', 'Movie', 'Series', 'Episode'];

  function handleChangeType(e) {
    if (e.target.innerText !== 'All') {
      setType(e.target.innerText);
    } else {
      setType('');
    }
  }

  return (
    <div className="movie_tab">
      {types.map((item) => (
        <button type="button" onClick={handleChangeType} key={item}>
          {item}
        </button>
      ))}
    </div>
  );
}
