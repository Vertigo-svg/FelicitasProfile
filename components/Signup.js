import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const SignupPage = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Add signup logic here
        alert('Signed Up Successfully!');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image source={require('../assets/bg1.jpg')} style={styles.logo} />
            </View>

            {/* Title and Subtitle */}
            <Text style={styles.title}>Create new account</Text>
            <Text style={styles.subtitle}>Please fill in the form to continue</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#aaa"
                    value={fullName}
                    onChangeText={setFullName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#aaa"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signinText}>
                        Have an Account? <Text style={styles.signinLink}>Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1C1B29',
        paddingHorizontal: 16,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,  // Optional, if you want a circular logo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 20,
    },
    formContainer: {
        backgroundColor: '#2A2A40',
        padding: 20,
        borderRadius: 16,
    },
    input: {
        height: 50,
        backgroundColor: '#33334A',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        color: '#fff',
    },
    signupButton: {
        backgroundColor: '#5D5FEF',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signinText: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 14,
    },
    signinLink: {
        color: '#5D5FEF',
        fontWeight: 'bold',
    },
});

export default SignupPage;
