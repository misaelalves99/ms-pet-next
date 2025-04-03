// app/register/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/Register.module.css";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    cpf: "",
    genero: "",
    email: "",
    telefone: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    endereco: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do usuário:", formData);

    // Simulação de envio de dados para API
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Redireciona para a página de login
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <p className={styles.subtitle}>faça o seu cadastro</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset className={styles.fieldset}>
            <legend>Dados Pessoais</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="digite seu nome" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} placeholder="digite seu sobrenome" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="___ ___.___-__" />
            </div>
            <div className={styles.genderGroup}>
              <label>Gênero</label>
              <label><input type="radio" name="genero" value="masculino" checked={formData.genero === "masculino"} onChange={handleChange} /> Masculino</label>
              <label><input type="radio" name="genero" value="feminino" checked={formData.genero === "feminino"} onChange={handleChange} /> Feminino</label>
              <label><input type="radio" name="genero" value="outro" checked={formData.genero === "outro"} onChange={handleChange} /> Outro</label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Contato</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="seunome@email.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="( ) _____-____" />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Localização</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} placeholder="_____-___" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="estado">Estado</label>
              <select id="estado" name="estado" value={formData.estado} onChange={handleChange}>
                <option>Selecione o estado</option>
                <option>Minas Gerais</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cidade">Cidade</label>
              <select id="cidade" name="cidade" value={formData.cidade} onChange={handleChange}>
                <option>Selecione a cidade</option>
                <option>Teófilo Otoni</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="digite seu bairro" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="digite seu endereço" />
            </div>
          </fieldset>

          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
        <p className={styles.footer}>
          Já tem uma conta? <Link href="/login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
