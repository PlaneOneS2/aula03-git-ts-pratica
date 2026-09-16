import { firestoreService } from '../services/firestoreService';
import { mockBusinesses } from '../data/mockData';
export const seedFirestore = async () => {
console.log('�� Populando Firestore com dados de teste...');
for (const business of mockBusinesses) {
const { id, ...data } = business;
const docId = await firestoreService.addBusiness(data);
console.log(`✅ Adicionado: ${business.name} (ID: ${docId})`);
}
console.log('✨ Seed concluído!');
};