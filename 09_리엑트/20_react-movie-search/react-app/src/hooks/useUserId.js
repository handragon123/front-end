import { useQuery } from '@tanstack/react-query';

export function useUserId(userId) {
  return useQuery({
    // 쿼리키와 동적라우팅에 사용한 변수를 지정
    queryKey: ['userId', userId],
    queryFn: () => fetch(`/people/${userId}`).then((res) => res.json()),
  });
}
