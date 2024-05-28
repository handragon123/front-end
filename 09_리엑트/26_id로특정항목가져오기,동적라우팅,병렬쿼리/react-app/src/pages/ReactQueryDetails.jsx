import { useParams } from 'react-router-dom';
import { useUserId } from '../hooks/useUserId';

export default function ReactQueryDetails() {
  // url에서 파라메터 가져오기
  const { userId } = useParams();

  const { isLoading, isError, error, data } = useUserId(userId);

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <>
      {data && (
        <div>
          <p>Id: {data[0].id}</p>
          <p>Name: {data[0].name}</p>
          <p>Country: {data[0].country}</p>
        </div>
      )}
    </>
  );
}
