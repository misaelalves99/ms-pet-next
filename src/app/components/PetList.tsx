// app/components/PetList.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PetList.module.css";
import { pets } from "../api/pets";
import type { Pet } from "../types/pet";

interface PetListProps {
  selectedCategory: string;
  searchTerm: string;
}

function PetList({ selectedCategory, searchTerm }: PetListProps) {
  const filteredPets: Pet[] = pets.filter(
    (pet: Pet) =>
      (selectedCategory === "Todos" || pet.category === selectedCategory) &&
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.petList}>
      {filteredPets.length > 0 ? (
        filteredPets.map((pet: Pet) => (
          <div key={pet.id} className={styles.card}>
            <Image
              src={pet.image}
              alt={pet.name}
              width={150}
              height={150}
              className={styles.image}
            />
            <h3 className={styles.name}>{pet.name}</h3>
            <p className={styles.weight}>
              <strong>Peso:</strong> {pet.weight}
            </p>
            <Link href={`/pet/${pet.id}`} className={styles.button}>
              Mais detalhes
            </Link>
          </div>
        ))
      ) : (
        <p className={styles.noResults}>Nenhum pet encontrado.</p>
      )}
    </div>
  );
}

export default PetList;
