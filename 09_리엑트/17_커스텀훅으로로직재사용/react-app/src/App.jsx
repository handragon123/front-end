import './App.css';
import { useState, useEffect } from 'react';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log('✅ 진행사항 저장됨');
  }

  return (
    <button type="button" disabled={!isOnline} onClick={handleSave}>
      {isOnline ? '진행사항 저장' : '재연결 중...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <SaveButton />
    </>
  );
}
