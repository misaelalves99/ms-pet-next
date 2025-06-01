// app/components/PetCard.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './PetCard.module.css';
import type { Pet } from '../types/pet';

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={pet.image || '/images/placeholder.png'}
        alt={pet.name}
        width={150}
        height={150}
        className={styles.image}
      />
      <h3 className={styles.name}>{pet.name}</h3>

      <p className={styles.weight}>
        <strong>Peso:</strong> {pet.weight}
      </p>

      <p className={styles.description}>
        {pet.description.length > 60
          ? pet.description.slice(0, 60) + '...'
          : pet.description}
      </p>

      <Link href={`/pet/${pet.id}`} className={styles.button}>
        Mais detalhes
      </Link>
    </div>
  );
};

export default PetCard;
