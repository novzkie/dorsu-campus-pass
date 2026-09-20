import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface ScanCounterProps {
  scanCount: number;
  onIncrement: () => void;
  onReset: () => void;
  onToggleStatus: () => void;
  isActive: boolean;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  scanCount,
  onIncrement,
  onReset,
  onToggleStatus,
  isActive,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Gate Verification Log</Text>

      <View style={styles.counterRow}>
        <Text style={styles.counterLabel}>Today's Gate Entries:</Text>
        <Text style={styles.counterValue}>{scanCount}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.primaryButton} onPress={onIncrement}>
          <Text style={styles.buttonText}>+1 Scan at Gate</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={onReset}>
          <Text style={styles.secondaryButtonText}>Reset Scans</Text>
        </Pressable>
      </View>

      <Pressable style={styles.warningButton} onPress={onToggleStatus}>
        <Text style={styles.warningButtonText}>
          {isActive ? '⚠️ Simulate Pass Suspension' : '✅ Reactivate Pass'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterLabel: {
    fontSize: 14,
    color: '#4B5563',
  },
  counterValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0284C7',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  primaryButton: {
    flex: 2,
    backgroundColor: '#0284C7',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '600',
  },
  warningButton: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  warningButtonText: {
    color: '#991B1B',
    fontWeight: '600',
  },
});