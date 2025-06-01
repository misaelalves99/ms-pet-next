// app/pet/my-pets/page.tsx

'use client';

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../my-pets/MyPets.module.css';
import { useState, useEffect } from 'react';

const MyPets = () => {
  const { myPets, deletePet } = useAuth();
  const router = useRouter();

  const [statusMap, setStatusMap] = useState<Record<number, string>>({});

  useEffect(() => {
    const initialStatus: Record<number, string> = {};
    myPets.forEach((pet) => {
      initialStatus[pet.id] = 'Disponível';
    });
    setStatusMap(initialStatus);
  }, [myPets]);

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este pet?')) {
      deletePet(id);
      setStatusMap((prev) => {
        const newMap = { ...prev };
        delete newMap[id];
        return newMap;
      });
    }
  };

  if (myPets.length === 0) {
    return <div className={styles.empty}>Você ainda não adicionou nenhum pet!</div>;
  }

  return (
    <div className={styles.myPetsContainer}>
      <h1 className={styles.title}>Meus Pets</h1>
      <table className={styles.petTable}>
        <thead>
          <tr>
            <th>Pet</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {myPets.map((pet) => (
            <tr key={pet.id} className={styles.petRow}>
              <td className={styles.petDetails}>
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={100}
                  height={100}
                  className={styles.petImage}
                />
                <div className={styles.petInfo}>
                  <h2 className={styles.petName}>{pet.name}</h2>
                  <p><strong>Categoria:</strong> {pet.category}</p>
                  <p><strong>Peso:</strong> {pet.weight}</p>
                </div>
              </td>

              <td className={styles.status}>
                {statusMap[pet.id] || 'Disponível'}
              </td>

              <td className={styles.actionButtons}>
                <button
                  className={styles.editButton}
                  onClick={() => router.push(`/pet/edit-pet?id=${pet.id}`)}
                >
                  Editar
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(pet.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPets;
