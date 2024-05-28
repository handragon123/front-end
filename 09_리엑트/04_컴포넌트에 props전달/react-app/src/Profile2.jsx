function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile2() {
  return (
    <div className="profile2">
      <Card>
        <h3>Photo</h3>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h3>About</h3>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
