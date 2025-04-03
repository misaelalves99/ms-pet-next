// app/context/AuthContext.tsx

"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { Pet } from "@/app/types/pet";

// Definição do tipo do contexto
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  myPets: Pet[];
  addPetToMyPets: (pet: Pet) => void;
  deletePet: (id: number) => void;
  updatePet: (id: number, updatedPet: Pet) => void;  // ✅ Adicionado updatePet
}

// Criando o Contexto com valor inicial
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Definição das props do provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provedor de Autenticação
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [myPets, setMyPets] = useState<Pet[]>([]);

  const login = () => setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
    setMyPets([]); // Limpa os pets ao deslogar
  };

  const addPetToMyPets = (pet: Pet) => {
    setMyPets((prevPets) => [...prevPets, pet]);
  };

  const deletePet = (id: number) => {
    setMyPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const updatePet = (id: number, updatedPet: Pet) => {  // ✅ Implementação da função
    setMyPets((prevPets) =>
      prevPets.map((pet) => (pet.id === id ? updatedPet : pet))
    );
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, myPets, addPetToMyPets, deletePet, updatePet }} // ✅ Incluído updatePet
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
