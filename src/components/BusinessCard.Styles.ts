import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    padding: spacing.md,
    elevation: 2, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: { 
    flex: 1 
  },
  name: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: colors.text 
  },
  category: { 
    fontSize: 12, 
    color: colors.primary, 
    fontWeight: '600', 
    marginTop: 4 
  },
  infoRow: { 
    flexDirection: 'row', 
    marginTop: spacing.sm, 
    marginBottom: spacing.xs 
  },
  rating: { 
    fontSize: 14, 
    color: colors.text, 
    fontWeight: '500' 
  },
  distance: { 
    fontSize: 14, 
    color: colors.textLight, 
    marginLeft: spacing.xs 
  },
  description: { 
    fontSize: 14, 
    color: colors.textLight, 
    lineHeight: 20 
  },
});