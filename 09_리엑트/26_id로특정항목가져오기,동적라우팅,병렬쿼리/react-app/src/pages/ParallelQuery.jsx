import { useQuery } from '@tanstack/react-query';

export default function ParallelQuery() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['getUser'],
    queryFn: () => fetch('./people').then((res) => res.json()),
  });

  const {
    isLoading: productLoading,
    data: productData,
    isError: productIsError,
    error: productError,
  } = useQuery({
    queryKey: ['getProduct'],
    queryFn: () => fetch('./product').then((res) => res.json()),
  });

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <div>
      <h2>Parallel Query page</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} {user.country} {user.lang}
          </li>
        ))}
      </ul>
      <ul>
        {productData?.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
