// app/pet/[id]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { pets } from '@/app/api/pets';
import styles from './PetDetails.module.css';
import { useAuth } from '@/app/context/AuthContext';
import { Pet } from '@/app/types/pet';

interface PetDetailsPageProps {
  params: {
    id: string;
  };
}

export default function PetDetailsPage({ params }: PetDetailsPageProps) {
  const { id } = params;
  const petId = Number(id);
  const router = useRouter();
  const { addPetToMyPets } = useAuth();

  const [foundPet, setFoundPet] = useState<Pet | undefined>(undefined);

  useEffect(() => {
    const pet = pets.find((p) => p.id === petId) as Pet | undefined;
    setFoundPet(pet);
  }, [petId]);

  if (!foundPet) {
    return (
      <div className={styles.notFound}>
        Pet não encontrado. <Link href="/">Voltar à página inicial</Link>
      </div>
    );
  }

  const handleScheduleVisit = () => {
    addPetToMyPets(foundPet);
    router.push('/pet/my-pets');
  };

  return (
    <div className={styles.detailsContainer}>
      <Image
        src={foundPet.image || '/placeholder.png'}
        alt={foundPet.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.info}>
        <h1 className={styles.name}>{foundPet.name}</h1>
        <p className={styles.category}><strong>Categoria:</strong> {foundPet.category}</p>
        <p className={styles.weight}><strong>Peso:</strong> {foundPet.weight}</p>
        <p className={styles.description}><strong>Descrição:</strong> {foundPet.description}</p>

        <div>
          <Link href="/" className={styles.backButton}>Voltar</Link>
          <button className={styles.visitationButton} onClick={handleScheduleVisit}>
            Agendar Visita
          </button>
        </div>
      </div>
    </div>
  );
}
