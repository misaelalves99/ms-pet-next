// app/page.tsx
"use client";

import { useState } from "react";
import PetList from "../app/components/PetList";
import styles from "../app/Page.module.css";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>ADOTE UM</h1>
          <p className={styles.heroSubtitle}>PET AMOROSO</p>
        </div>
      </div>

      {/* Header Section */}
      <div className={styles.header}>
        <h1>
          Adote um <span className={styles.highlight}>Pet</span>
        </h1>
        <p className={styles.headerSubtitle}>
          Veja os detalhes de cada um, conheça e escolha com amor
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar"
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className={styles.categoriesContainer}>
        <h2 className={styles.title}>Categorias</h2>
        <div className={styles.options}>
          {["Todos", "Cachorro", "Gato"].map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />{" "}
              {category}
            </label>
          ))}
        </div>
      </div>

      <PetList selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </>
  );
};

export default Home;
