// app/components/PetList.tsx

"use client";

import styles from "./PetList.module.css";
import { pets } from "../api/pets";
import type { Pet } from "../types/pet";
import PetCard from "./PetCard";

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
        filteredPets.map((pet: Pet) => <PetCard key={pet.id} pet={pet} />)
      ) : (
        <p>Nenhum pet encontrado.</p>
      )}
    </div>
  );
}

export default PetList;
