import { useNavigate } from 'react-router-dom';
import styles from './Guide.module.css';

const Guide = () => {
  const navigate = useNavigate();

  const guides = [
    {
      id: 1,
      title: 'Cara Menggunakan Kukusan',
      icon: '📱',
      steps: [
        'Buka aplikasi Kukusan',
        'Pilih menu Kukusan dari halaman utama',
        'Scan barcode pada mesin kukusan',
        'Tunggu proses verifikasi',
        'Kukusan siap digunakan'
      ]
    },
    {
      id: 2,
      title: 'Cara Top Up Coin',
      icon: '💰',
      steps: [
        'Masuk ke menu Profile',
        'Pilih "Top Up Coin"',
        'Pilih nominal yang diinginkan',
        'Pilih metode pembayaran',
        'Selesaikan pembayaran'
      ]
    },
    {
      id: 3,
      title: 'Cara Melihat Riwayat',
      icon: '📊',
      steps: [
        'Buka menu Kukusan',
        'Scroll ke bawah',
        'Lihat riwayat transaksi Anda',
        'Klik untuk melihat detail'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => navigate('/home')} className={styles.backButton}>
          ← Back
        </button>
        <h1 className={styles.title}>Panduan</h1>
        <div style={{ width: '60px' }}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.introCard}>
          <h2 className={styles.introTitle}>Selamat Datang!</h2>
          <p className={styles.introText}>
            Panduan ini akan membantu Anda memahami cara menggunakan aplikasi Kukusan dengan mudah.
          </p>
        </div>

        <div className={styles.guidesList}>
          {guides.map((guide) => (
            <div key={guide.id} className={styles.guideCard}>
              <div className={styles.guideHeader}>
                <div className={styles.guideIcon}>{guide.icon}</div>
                <h3 className={styles.guideTitle}>{guide.title}</h3>
              </div>
              
              <ol className={styles.stepsList}>
                {guide.steps.map((step, index) => (
                  <li key={index} className={styles.stepItem}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className={styles.helpCard}>
          <h3 className={styles.helpTitle}>Butuh Bantuan?</h3>
          <p className={styles.helpText}>
            Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi customer service kami.
          </p>
          <button className={styles.helpButton}>Hubungi CS</button>
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
          className={`${styles.navItem} ${styles.active}`}
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

export default Guide;
