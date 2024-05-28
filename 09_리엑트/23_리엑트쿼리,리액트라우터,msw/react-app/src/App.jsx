// App.jsx 에서는 라우터 환경설정
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ReactQuery from './pages/ReactQuery';
import Layout from './components/Layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-query" element={<ReactQuery />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
