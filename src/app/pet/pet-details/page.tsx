// app/pet/pet-details.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Pet } from "../../types/pet";
import styles from "./PetDetails.module.css";

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPet = async () => {
      try {
        const res = await fetch(`/api/pets/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar pet");
        const data: Pet = await res.json();
        setPet(data);
      } catch {
        setError("Pet não encontrado");
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!pet) return <div className={styles.notFound}>Pet não encontrado!</div>;

  return (
    <div className={styles.detailsContainer}>
      <Image src={pet.image} alt={pet.name} width={300} height={300} className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.name}>{pet.name}</h1>
        <p className={styles.category}><strong>Categoria:</strong> {pet.category}</p>
        <p className={styles.weight}><strong>Peso:</strong> {pet.weight}</p>
        <p className={styles.description}><strong>Descrição:</strong> {pet.description}</p>
        <Link href="/" className={styles.backButton}>Voltar</Link>
      </div>
    </div>
  );
}
