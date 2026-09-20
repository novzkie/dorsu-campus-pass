import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { StudentCard } from './components/StudentCard';
import { ScanCounter } from './components/ScanCounter';
import { StudentProfile } from './types/student';

// 1. Instantiate default student data according to the StudentProfile interface
const sampleStudent: StudentProfile = {
  id: '2024-088492-MT',
  name: 'JUAN CARLOS D. DELA CRUZ',
  program: 'BS in Information Technology (BSIT)',
  yearSection: '3rd Year - Section A',
  photoUrl: 'https://picsum.photos/200',
  campus: 'Campus: Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  // 2. Instantiate component state using useState
  const [scanCount, setScanCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  // 3. Connect state handler functions
  const handleIncrement = () => setScanCount((prev) => prev + 1);
  const handleReset = () => setScanCount(0);
  const handleToggleStatus = () => setIsActive((prev) => !prev);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.headerSubtitle}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
          <Text style={styles.headerTagline}>OFFICIAL STUDENT DIGITAL PASS • AY 2026-2027</Text>
        </View>

        {/* 4. Pass state values down to components via props */}
        <StudentCard student={sampleStudent} isActive={isActive} />

        <ScanCounter
          scanCount={scanCount}
          onIncrement={handleIncrement}
          onReset={handleReset}
          onToggleStatus={handleToggleStatus}
          isActive={isActive}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  container: {
    padding: 16,
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#006666',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  headerSubtitle: {
    color: '#E0F2FE',
    fontSize: 8,
    marginTop: 4,
    textAlign: 'center',
  },
  headerTagline: {
    color: '#FDE047',
    fontSize: 8,
    fontWeight: '600',
    marginTop: 6,
  },
});