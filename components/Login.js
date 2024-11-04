import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        if (email === 'gabriel@gmail.com' && password === '12345') {
            await AsyncStorage.setItem('userToken', 'dummy-token');
            navigation.navigate('Profile');
        } else {
            Alert.alert('Invalid Credentials', 'Please check your email and password.');
        }
        setIsLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome to Savage</Text>
                <Text style={styles.arenaText}>Arena</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../assets/bg1.jpg')} style={styles.logo} />
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile number or email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, styles.passwordInput]}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                        <Icon
                            name={showPassword ? "eye-off" : "eye"}
                            size={25}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                    activeOpacity={0.8}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Log in</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.createAccountButton} 
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.createAccountText}>Create new account</Text>
                </TouchableOpacity>
            </View>

            {/* Social Media Icons */}
            <View style={styles.socialMediaContainer}>
                <Icon name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
                <Icon name="instagram" size={30} color="#C13584" style={styles.socialIcon} />
                <Icon name="twitter" size={30} color="#1DA1F2" style={styles.socialIcon} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#6A1E55',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    arenaText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    formContainer: {
        paddingHorizontal: 16,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        color: '#333',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    passwordInput: {
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        padding: 10,
    },
    forgotPasswordButton: {
        alignItems: 'center',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#4a90e2',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#1877f2',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccountButton: {
        borderColor: '#1877f2',
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    createAccountText: {
        color: '#1877f2',
        fontSize: 16,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});

export default LoginPage;
