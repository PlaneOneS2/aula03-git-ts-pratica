import {
collection,
getDocs,
addDoc,
updateDoc,
deleteDoc,
doc,
onSnapshot,
query,
where,
orderBy,
getDoc
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Business } from '../types';
const COLLECTION_NAME = 'comerciantes';
export const firestoreService = {
// --- LEITURA ---
// Buscar todos os comerciantes
async getBusinesses(): Promise<Business[]> {
const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
return querySnapshot.docs.map(doc => ({
    id: doc.id,
...doc.data()
} as Business));
},
// Buscar comerciante por ID
async getBusinessById(id: string): Promise<Business | null> {
const docRef = doc(db, COLLECTION_NAME, id);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
return { id: docSnap.id, ...docSnap.data() } as Business;
}
return null;
},
// Buscar por categoria
async getBusinessesByCategory(category: string): Promise<Business[]> {
const q = query(
collection(db, COLLECTION_NAME),
where('category', '==', category)
);
const querySnapshot = await getDocs(q);
return querySnapshot.docs.map(doc => ({
id: doc.id,
...doc.data()
} as Business));
},
// --- ESCRITA ---
// Adicionar novo comerciante
async addBusiness(data: Omit<Business, 'id'>): Promise<string> {
const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
return docRef.id;
},
// Atualizar comerciante
async updateBusiness(id: string, data: Partial<Business>): Promise<void> {
const docRef = doc(db, COLLECTION_NAME, id);
await updateDoc(docRef, data);
},
// Remover comerciante
async deleteBusiness(id: string): Promise<void> {
const docRef = doc(db, COLLECTION_NAME, id);
await deleteDoc(docRef);
},
// --- TEMPO REAL ---
// Escutar mudanças em tempo real
onBusinessesChange(callback: (businesses: Business[]) => void) {
const q = query(collection(db, COLLECTION_NAME), orderBy('name'));
return onSnapshot(q, (snapshot) => {
const businesses = snapshot.docs.map(doc => ({
id: doc.id,
...doc.data()
} as Business));
callback(businesses);
});
}
};