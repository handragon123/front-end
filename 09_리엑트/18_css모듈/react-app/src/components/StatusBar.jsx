import { useOnlineStatus } from '../hooks/useOnlineStatus';
import styles from './StatusBar.module.css';

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <div className={styles.wrap}>
      <p className={styles.txt}>{isOnline ? '✅ 온라인' : '❌ 연결 안 됨'}</p>
    </div>
  );
}
