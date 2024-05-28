// App.jsx 에서는 라우터 환경설정
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReactQuery from './pages/ReactQuery';
import ReactQueryDetails from './pages/ReactQueryDetails';
import ParallelQuery from './pages/ParallelQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-query" element={<ReactQuery />} />
          <Route path="/react-query/:userId" element={<ReactQueryDetails />} />
          <Route path="/parallel-query" element={<ParallelQuery />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
