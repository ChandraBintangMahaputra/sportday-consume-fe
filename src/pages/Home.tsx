import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

interface HomeProps {
  onLogout: () => void;
}

const Home = ({ onLogout }: HomeProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Kukusan App</h1>
        <button onClick={onLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.mainCard} onClick={() => navigate('/kukusan')}>
          <div className={styles.cardIcon}>🍜</div>
          <h2 className={styles.cardTitle}>Kukusan</h2>
          <p className={styles.cardDescription}>Kelola kukusan Anda</p>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <button 
          className={`${styles.navItem} ${styles.active}`}
          onClick={() => navigate('/home')}
        >
          <span className={styles.navIcon}>🏠</span>
          <span className={styles.navLabel}>Home</span>
        </button>
        <button 
          className={styles.navItem}
          onClick={() => navigate('/guide')}
        >
          <span className={styles.navIcon}>📖</span>
          <span className={styles.navLabel}>Guide</span>
        </button>
        <button 
          className={styles.navItem}
          onClick={() => navigate('/notifications')}
        >
          <span className={styles.navIcon}>🔔</span>
          <span className={styles.navLabel}>Notif</span>
        </button>
        <button 
          className={styles.navItem}
          onClick={() => navigate('/profile')}
        >
          <span className={styles.navIcon}>👤</span>
          <span className={styles.navLabel}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
