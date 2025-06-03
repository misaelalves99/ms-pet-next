// app/types/auth.ts

import { Pet } from './pet';
import { ReactNode } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  myPets: Pet[];
  addPetToMyPets: (pet: Pet) => void;
  deletePet: (id: number) => void;
  updatePet: (id: number, updatedPet: Pet) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
