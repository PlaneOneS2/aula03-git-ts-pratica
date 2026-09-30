import { StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#F5F5F5',
  },
  categoriesContainer: {
    paddingVertical: spacing.sm || 8,
  },
  categoriesList: {
    paddingHorizontal: spacing.md || 16,
    gap: 8,
  },
  loader: {
    marginTop: 20,
  },
  errorBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    padding: spacing.md || 16,
    marginHorizontal: spacing.md || 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  errorText: {
    color: '#D8000C',
    fontSize: 14,
  },
  retryText: {
    color: colors.primary || '#007AFF',
    fontWeight: 'bold',
  },
  list: {
    padding: spacing.md || 16,
    gap: 12,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
    fontSize: 16,
  },
});
