import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Business } from '../types';
import { styles } from './BusinessCard.Styles';

interface BusinessCardProps {
  business: Business;
  onPress: () => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.category}>{business.category}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.rating}>⭐ {business.rating.toFixed(1)}</Text>
          <Text style={styles.distance}>• {business.distance} km</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {business.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

