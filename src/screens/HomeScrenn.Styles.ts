import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { backgroundColor: colors.secondary, padding: spacing.md, paddingTop: spacing.lg },
  title: { fontSize: 24, fontWeight: '700', color: colors.white, marginBottom: spacing.md },
  searchInput: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.full,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
  list: { padding: spacing.md },
  emptyText: { textAlign: 'center', marginTop: 40, color: colors.textLight, fontSize: 16 },
});