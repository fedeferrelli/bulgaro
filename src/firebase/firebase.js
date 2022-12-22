import { app } from "./firebaseInitialize";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const db = getFirestore(app);

// Get a list of platos from the database
export async function getDishes() {
  const dishes = collection(db, "platos");
  const dishesSnapshot = await getDocs(dishes);
  const dishesList = dishesSnapshot.docs.map((doc) => doc.data());
  return dishesList;
}

export async function getCategories() {
  const categories = collection(db, "categorias");
  const categoriesSnapshot = await getDocs(categories);
  const categoriesList = categoriesSnapshot.docs.map((doc) => doc.data());
  return categoriesList;
}
