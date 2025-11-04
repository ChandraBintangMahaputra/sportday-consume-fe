import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Kukusan.module.css';

const Kukusan = () => {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);
  
  // Dummy data
  const coinData = {
    available: 1000,
    used: 350,
    remaining: 650
  };

  const handleScan = () => {
    setShowScanner(true);
    // Simulate barcode scan
    setTimeout(() => {
      alert('Barcode berhasil di-scan! ID: KKS-12345');
      setShowScanner(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/home')} className={styles.backButton}>
          ← Back
        </button>
        <h1 className={styles.title}>Kukusan</h1>
        <div style={{ width: '60px' }}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.coinCards}>
          <div className={styles.coinCard}>
            <div className={styles.coinIcon}>💰</div>
            <div className={styles.coinLabel}>Coin Tersedia</div>
            <div className={styles.coinValue}>{coinData.available}</div>
          </div>
          
          <div className={styles.coinCard}>
            <div className={styles.coinIcon}>💸</div>
            <div className={styles.coinLabel}>Coin Terpakai</div>
            <div className={styles.coinValue}>{coinData.used}</div>
          </div>
          
          <div className={styles.coinCard}>
            <div className={styles.coinIcon}>💵</div>
            <div className={styles.coinLabel}>Coin Sisa</div>
            <div className={styles.coinValue}>{coinData.remaining}</div>
          </div>
        </div>

        <div className={styles.scanSection}>
          <button onClick={handleScan} className={styles.scanButton}>
            <span className={styles.scanIcon}>📷</span>
            <span>Scan Barcode</span>
          </button>
          
          {showScanner && (
            <div className={styles.scannerOverlay}>
              <div className={styles.scannerBox}>
                <div className={styles.scannerLine}></div>
                <p>Scanning...</p>
              </div>
            </div>
          )}
        </div>

        <div className={styles.historySection}>
          <h3 className={styles.historyTitle}>Riwayat Transaksi</h3>
          <div className={styles.historyList}>
            <div className={styles.historyItem}>
              <div className={styles.historyInfo}>
                <div className={styles.historyName}>Kukusan Premium</div>
                <div className={styles.historyDate}>2 Nov 2025, 14:30</div>
              </div>
              <div className={styles.historyAmount}>-50 coin</div>
            </div>
            <div className={styles.historyItem}>
              <div className={styles.historyInfo}>
                <div className={styles.historyName}>Kukusan Standard</div>
                <div className={styles.historyDate}>1 Nov 2025, 10:15</div>
              </div>
              <div className={styles.historyAmount}>-30 coin</div>
            </div>
            <div className={styles.historyItem}>
              <div className={styles.historyInfo}>
                <div className={styles.historyName}>Top Up</div>
                <div className={styles.historyDate}>30 Okt 2025, 09:00</div>
              </div>
              <div className={styles.historyAmount}>+500 coin</div>
            </div>
          </div>
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

export default Kukusan;
