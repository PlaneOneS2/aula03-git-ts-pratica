import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BusinessCard } from '../components/BusinessCard';
import { borderRadius, colors, spacing } from '../themes/colors';
import { mockBusinesses } from '../data/mockData';


interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const filtered = mockBusinesses.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Vitrine do Bairro</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar no bairro..."
          placeholderTextColor={colors.textlight}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <BusinessCard 
            business={item} 
            onPress={() => navigation.navigate('Details', { businessId: item.id })} 
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum comerciante encontrado 😕</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { backgroundColor: colors.secondary, padding: spacing.medium, paddingTop: spacing.large },
  title: { fontSize: 24, fontWeight: '700', color: colors.white, marginBottom: spacing.medium },
  searchInput: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    padding: spacing.medium,
    fontSize: 16,
    color: colors.text,
  },
  list: { padding: spacing.medium },
  emptyText: { textAlign: 'center', marginTop: 40, color: colors.textlight, fontSize: 16 },
});