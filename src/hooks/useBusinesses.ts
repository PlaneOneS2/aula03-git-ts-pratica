import { useState, useEffect } from 'react';
import { firestoreService } from '../services/firestoreService';
import { storageService } from '../services/storage';
import { Business } from '../types';

export const useBusinesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await firestoreService.getBusinesses();
      setBusinesses(data);
      await storageService.saveCache(data);
    } catch (err) {
      setError('Erro ao carregar dados');
      const cached = await storageService.getCache();
      setBusinesses(cached);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { businesses, loading, error, refetch: loadData };
};
