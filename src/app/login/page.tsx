// app/login/page.tsx

"use client";

import { useAuth } from "../context/AuthContext";
import styles from "../login/Login.module.css";
import { FormEvent } from "react";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Faça seu login</p>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seunome@email.com"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
