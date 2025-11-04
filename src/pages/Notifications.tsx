import { useNavigate } from 'react-router-dom';
import styles from './Notifications.module.css';

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      icon: '🎉',
      title: 'Selamat!',
      message: 'Anda mendapatkan bonus 50 coin',
      time: '2 jam yang lalu',
      unread: true
    },
    {
      id: 2,
      icon: '✅',
      title: 'Transaksi Berhasil',
      message: 'Penggunaan kukusan sebesar 30 coin telah berhasil',
      time: '5 jam yang lalu',
      unread: true
    },
    {
      id: 3,
      icon: '💰',
      title: 'Top Up Berhasil',
      message: 'Top up 500 coin telah berhasil ditambahkan ke akun Anda',
      time: '1 hari yang lalu',
      unread: false
    },
    {
      id: 4,
      icon: '📢',
      title: 'Promo Spesial',
      message: 'Dapatkan diskon 20% untuk penggunaan kukusan premium!',
      time: '2 hari yang lalu',
      unread: false
    },
    {
      id: 5,
      icon: '🔔',
      title: 'Pengingat',
      message: 'Jangan lupa untuk top up coin Anda',
      time: '3 hari yang lalu',
      unread: false
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/home')} className={styles.backButton}>
          ← Back
        </button>
        <h1 className={styles.title}>Notifikasi</h1>
        <button className={styles.markAllButton}>
          Tandai Semua
        </button>
      </div>

      <div className={styles.content}>
        {notifications.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔔</div>
            <h3 className={styles.emptyTitle}>Tidak Ada Notifikasi</h3>
            <p className={styles.emptyText}>
              Semua notifikasi Anda akan muncul di sini
            </p>
          </div>
        ) : (
          <div className={styles.notificationsList}>
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`${styles.notificationCard} ${notification.unread ? styles.unread : ''}`}
              >
                {notification.unread && <div className={styles.unreadBadge}></div>}
                
                <div className={styles.notificationIcon}>
                  {notification.icon}
                </div>
                
                <div className={styles.notificationContent}>
                  <h3 className={styles.notificationTitle}>
                    {notification.title}
                  </h3>
                  <p className={styles.notificationMessage}>
                    {notification.message}
                  </p>
                  <span className={styles.notificationTime}>
                    {notification.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
          className={`${styles.navItem} ${styles.active}`}
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

export default Notifications;
