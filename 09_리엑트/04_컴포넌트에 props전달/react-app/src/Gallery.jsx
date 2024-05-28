import { getImageUrl } from './utils.js';
import Profile from './Profile.jsx';
import Profile2 from './Profile2.jsx';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
      />
      <Profile2 />
    </div>
  );
}
