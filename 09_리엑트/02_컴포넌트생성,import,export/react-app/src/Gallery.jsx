export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="johns" />;
}

export default function Gallery() {
  return (
    <section>
      <h2>놀라운 과학자들</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
