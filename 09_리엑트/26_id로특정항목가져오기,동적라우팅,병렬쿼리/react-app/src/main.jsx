// main.jsx 전체적인 react에 환경설정 같은 역할
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';

// 데이터 가져온후 실행될 전역콜백함수 등록
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data) => console.log(data, '===='),
    onError: (error) => console.error(`Something went wrong: ${error.message}`),
  }),
});

async function enableMocking() {
  // 환경변수로 개발중일때만 서비스워커 활성화
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.js');

  // 서비스워커가 동작하여 요청을 가로챌 준비가 되면 완료된 프라미스를 반환
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
