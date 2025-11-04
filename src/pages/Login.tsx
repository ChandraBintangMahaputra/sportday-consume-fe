import { useState } from 'react';
import styles from './Login.module.css';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy authentication
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <div className={styles.logoCircle}>🍜</div>
        </div>
        <h1 className={styles.title}>Kukusan App</h1>
        <p className={styles.subtitle}>Silakan login untuk melanjutkan</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          
          {error && <div className={styles.error}>{error}</div>}
          
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        
        <div className={styles.hint}>
          <p>Hint: username: <strong>admin</strong>, password: <strong>admin</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
