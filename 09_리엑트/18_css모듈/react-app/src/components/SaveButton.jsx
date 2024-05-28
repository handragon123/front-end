import { useOnlineStatus } from '../hooks/useOnlineStatus';
import styles from './SaveButton.module.css';

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ 진행사항 저장됨');
  }

  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.save_btn} ${styles.active}`}
        type="button"
        disabled={!isOnline}
        onClick={handleSaveClick}
      >
        {isOnline ? '진행사항 저장' : '재연결 중...'}
      </button>
      <p>진행사항이 저장중입니다.</p>
    </div>
  );
}
