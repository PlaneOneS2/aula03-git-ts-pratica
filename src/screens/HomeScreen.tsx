import { useEffect } from 'react';
import { firestoreService } from '../services/firestoreService';
import { Business } from '../types';
import { storageService } from '../services/storage';
import { mockBusinesses } from '../data/mockData';
import { useBusinesses } from '../hooks/useBusinesses';
// Dentro da HomeScreen, substitua o useEffect:
useEffect(() => {
  loadData();
  loadFavorites();

  const { businesses, loading, error, refetch } = useBusinesses();
  // Escutar mudanças em tempo real (opcional)
  const unsubscribe = firestoreService.onBusinessesChange((businesses) => {
    setBusinesses(businesses);
    storageService.saveCache(businesses); // Atualiza cache local
  });
  // Cleanup ao desmontar o componente
  return () => unsubscribe();
}, []);
const loadData = async () => {
  setLoading(true);
  setError(null);
  try {
    // Busca do Firestore em vez da API simulada
    const remoteData = await firestoreService.getBusinesses();
    setBusinesses(remoteData);
    await storageService.saveCache(remoteData);
  } catch (err) {
    setError('Erro ao buscar dados. Mostrando cache local.');
    const cachedData = await storageService.getCache();
    setBusinesses(cachedData.length > 0 ? cachedData : mockBusinesses);
  } finally {
    setLoading(false);
  }
};
function loadFavorites() {
  throw new Error('Function not implemented.');
}

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function setError(arg0: string | null) {
  throw new Error('Function not implemented.');
}

function setBusinesses(remoteData: Business[]) {
  throw new Error('Function not implemented.');
}
