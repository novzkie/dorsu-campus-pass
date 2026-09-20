import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StudentProfile } from '../types/student';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <Image source={{ uri: student.photoUrl }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{student.name}</Text>
          <Text style={styles.idText}>ID: {student.id}</Text>
          <Text style={styles.subText}>{student.program}</Text>
          <Text style={styles.subText}>{student.yearSection}</Text>
        </View>
      </View>

      {/* Dynamic Status Badge */}
      <View style={[styles.badgeContainer, isActive ? styles.activeBadge : styles.suspendedBadge]}>
        <Text style={[styles.badgeText, isActive ? styles.activeText : styles.suspendedText]}>
          ● STATUS: {isActive ? 'VERIFIED ACTIVE PASS' : 'SUSPENDED'}
        </Text>
      </View>
      
      <Text style={styles.campusText}>{student.campus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  idText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },
  subText: {
    fontSize: 12,
    color: '#6B7280',
  },
  badgeContainer: {
    marginTop: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  activeBadge: {
    backgroundColor: '#DCFCE7',
  },
  suspendedBadge: {
    backgroundColor: '#FEE2E2',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#166534',
  },
  suspendedText: {
    color: '#991B1B',
  },
  campusText: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 6,
  },
});