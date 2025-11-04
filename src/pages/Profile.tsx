import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  
  // Dummy data
  const userData = {
    name: 'Admin User',
    email: 'admin@kukusan.app',
    phone: '+62 812-3456-7890',
    memberSince: 'Oktober 2024',
    totalTransactions: 45,
    totalCoins: 1000
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/home')} className={styles.backButton}>
          ← Back
        </button>
        <h1 className={styles.title}>Profile</h1>
        <div style={{ width: '60px' }}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.profileCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>👤</div>
            <button className={styles.editButton}>Edit Foto</button>
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Nama</div>
              <div className={styles.infoValue}>{userData.name}</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoValue}>{userData.email}</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Telepon</div>
              <div className={styles.infoValue}>{userData.phone}</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Member Sejak</div>
              <div className={styles.infoValue}>{userData.memberSince}</div>
            </div>
          </div>
        </div>

        <div className={styles.statsCards}>
          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>📊</div>
            <div className={styles.statsValue}>{userData.totalTransactions}</div>
            <div className={styles.statsLabel}>Total Transaksi</div>
          </div>
          
          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>💰</div>
            <div className={styles.statsValue}>{userData.totalCoins}</div>
            <div className={styles.statsLabel}>Total Coins</div>
          </div>
        </div>

        <div className={styles.menuSection}>
          <button className={styles.menuItem}>
            <span className={styles.menuIcon}>🔐</span>
            <span className={styles.menuText}>Ubah Password</span>
            <span className={styles.menuArrow}>›</span>
          </button>
          
          <button className={styles.menuItem}>
            <span className={styles.menuIcon}>⚙️</span>
            <span className={styles.menuText}>Pengaturan</span>
            <span className={styles.menuArrow}>›</span>
          </button>
          
          <button className={styles.menuItem}>
            <span className={styles.menuIcon}>ℹ️</span>
            <span className={styles.menuText}>Tentang Aplikasi</span>
            <span className={styles.menuArrow}>›</span>
          </button>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        <button 
          className={styles.navItem}
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
          className={`${styles.navItem} ${styles.active}`}
          onClick={() => navigate('/profile')}
        >
          <span className={styles.navIcon}>👤</span>
          <span className={styles.navLabel}>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Profile;
