import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileOption = ({ title, icon, isDarkMode, rightComponent, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        isDarkMode ? styles.darkOption : styles.lightOption,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left Icon */}
      <View style={styles.leftComponent}>
        {rightComponent ? (
          rightComponent
        ) : (
          <FontAwesome name={icon} size={24} color={isDarkMode ? 'white' : 'black'} />
        )}
      </View>

      {/* Title Text */}
      <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>
        {title}
      </Text>

      {/* Right Chevron removed */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  darkOption: {
    backgroundColor: '#333',
    borderBottomColor: '#555',
  },
  lightOption: {
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#ddd',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 10,
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: '#333',
  },
  leftComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
});

export default ProfileOption;
