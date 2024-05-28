import './App.css';
import { useState, useEffect } from 'react';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import StatusBar from './components/StatusBar';
import SaveButton from './components/SaveButton';

export default function App() {
  return (
    <>
      <StatusBar />
      <SaveButton />
    </>
  );
}
