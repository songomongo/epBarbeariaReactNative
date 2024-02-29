import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function AdmScreen(): JSX.Element {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        const dados = {
            email: email,
            password: password,
        }

        console.log(dados);
        
    }
    return (

        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../assets/images/foto_profissional.png')} />


            <View style={styles.card}>
                <Text style={styles.tittle}>Cliente Adm</Text>


                <TextInput style={styles.input} placeholder="E-mail"
                    placeholderTextColor="#151413"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                    secureTextEntry />


                <TextInput style={styles.input} placeholder="Senha"
                    placeholderTextColor="#151413"
                    onChangeText={(textPassword) => setPassword(textPassword)}
                    secureTextEntry />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui cadastro? Cadastre-se!</Text>
                </TouchableOpacity>



            </View>
        </View>



    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222964'

    },

    logo: {

        width: 80,
        height: 80,
        marginBottom: 30,
        marginTop: -150

    },

    card: {
        backgroundColor: '#2C3582',
        width: 300,
        borderRadius: 11,
        padding: 50,
        elevation: 3,
        shadowColor: '#181D46',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 50,
        textAlign: "center"
    },

    input: {
        backgroundColor: '#C4C4C8',
        height: 50,
        marginBottom: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000'
    },

    button: {
        backgroundColor: '#5382E1',
        marginBottom: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },

    forgotPassword: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 12,

    }



});

export default AdmScreen;