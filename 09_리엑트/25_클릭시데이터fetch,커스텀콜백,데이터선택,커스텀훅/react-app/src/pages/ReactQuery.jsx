import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useUserName } from '../hooks/useUserName';

export default function ReactQuery() {
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error, refetch } = useUserName();

  const { mutate } = useMutation({
    mutationFn: (user) =>
      fetch('/people', {
        method: 'POST',
        body: JSON.stringify(user),
      }),
    onSuccess: () => {
      // userInfo 키에 대한 쿼리를 초기화한후 데이터를 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
  });

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  function handleCreateUser() {
    const user = {
      id: Date.now(),
      name: 'son',
      country: 'kr',
      lang: 'eng',
    };
    mutate(user);
  }

  return (
    <div className="react_query">
      <h2>React Query pages</h2>

      <ul className="list">
        {data?.map((name) => (
          // <li key={person.id}>
          //   이름: {person.name} / 국가: {person.country} / 개발언어:{' '}
          //   {person.lang}
          // </li>
          <li key={name}>이름: {name}</li>
        ))}
      </ul>
      <button type="button" onClick={handleCreateUser}>
        user추가
      </button>
    </div>
  );
}
