import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileScreen from './pages/ProfileScreen'; // Importing ProfileScreen from the pages folder

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default App;
