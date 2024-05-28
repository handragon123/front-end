import { useEffect, useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [peopleData, setPeopleData] = useState([]);

  let ignore = useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await fetch('/people');
    //     const data = await response.json(response);
    //     setPeopleData(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchData();

    async function createData() {
      try {
        if (!ignore) {
          const response = await fetch('/people', {
            method: 'POST',
            body: JSON.stringify({
              id: Date.now(),
              name: 'son',
              country: 'kr',
              lang: 'php',
            }),
          });
          const data = await response.json();
          setPeopleData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    createData();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className={styles.app}>
      {peopleData.length > 0 ? (
        peopleData.map((item) => (
          <div key={item.id}>
            <p>이름 : {item.name}</p>
            <p>나라 : {item.country}</p>
            <p>언어 : {item.lang}</p>
          </div>
        ))
      ) : (
        <p>로딩중</p>
      )}
    </div>
  );
}
