// app/pet/edit-pet/page.tsx
import { Suspense } from "react";
import EditPet from "./EditPet";

export default function EditPetPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <EditPet />
    </Suspense>
  );
}
