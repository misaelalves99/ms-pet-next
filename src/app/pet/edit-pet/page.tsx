// app/pet/edit-pet/page.tsx

import { Suspense } from "react";
import EditPet from "../../components/EditPet";
import styles from "./EditPetPage.module.css";

export default function EditPetPage() {
  return (
    <div className={styles.pageContainer}>
      <Suspense fallback={<div className={styles.loading}>Carregando...</div>}>
        <EditPet />
      </Suspense>
    </div>
  );
}
