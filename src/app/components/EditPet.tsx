// app/pet/edit-pet/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Pet } from "../types/pet";
import styles from "./EditPet.module.css";

const EditPet = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const { myPets, updatePet } = useAuth();

  const [petDetails, setPetDetails] = useState<Pet>({
    id: 0,
    name: "",
    category: "Cachorro",
    weight: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (!id) return;
    const petId = Number(id);
    const pet = myPets.find((pet) => pet.id === petId);
    if (pet) {
      setPetDetails(pet);
    } else {
      router.push("/pet/my-pets");
    }
  }, [id, myPets, router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPetDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    const petId = Number(id);
    if (!petId || isNaN(petId)) {
      console.error("ID inválido");
      return;
    }

    const updatedPet: Pet = {
      id: petId,
      name: petDetails.name,
      category: petDetails.category,
      weight: petDetails.weight,
      image: petDetails.image,
      description: petDetails.description,
    };

    updatePet(petId, updatedPet);
    router.push("/pet/my-pets");
  };

  const handleCancel = () => {
    router.push("/pet/my-pets");
  };

  return (
    <div className={styles.editPetContainer}>
      <h1 className={styles.title}>Editar Pet</h1>
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <label className={styles.formLabel}>
          Nome:
          <input
            type="text"
            name="name"
            value={petDetails.name}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Categoria:
          <select
            name="category"
            value={petDetails.category}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          >
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </label>
        <label className={styles.formLabel}>
          Peso:
          <input
            type="text"
            name="weight"
            value={petDetails.weight}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          URL da Imagem:
          <input
            type="text"
            name="image"
            value={petDetails.image}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Descrição:
          <textarea
            name="description"
            value={petDetails.description}
            onChange={handleInputChange}
            className={styles.formInput}
            required
          />
        </label>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>
            Salvar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPet;
