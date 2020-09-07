import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { Container, Form, Item, Input, Label } from 'native-base';
import { Button } from 'native-base'
import { LoginAction } from '../action'

const { useEffect } = React

const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { user } = useSelector((state) => {
        return {
            user: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (user) navigation.navigate("Tab")
    })

    const handleLogin = () => {
        const body = {
            username: username,
            password: password,
        }
        console.log("form : ", username, password)
        dispatch(LoginAction(body))
        setUsername("")
        setPassword("")

        if (/^([a-zA-Z0-9]+)$/.test(password) && /\d/.test(password) &&
        /[A-Z]/i.test(password)) {
        console.log("Password is correct");
    }
    }


    return (
        <Container>
            <Form style={styles.input}>
        <Image
            style={styles.logo}
            source={{
                uri: 'https://cdn.freelogovectors.net/wp-content/uploads/2016/12/who-logo-world-health-organization-logo.png',
            }} />
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input
                        onChangeText={(value) => setUsername(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry
                        onChangeText={(value) => setPassword(value)} />
                </Item >
                <Button
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text>Login</Text>
                </Button>
                <Text style={{ padding: 5 }}>Don't have an account?</Text>
                <Button
                    onPress={() => navigation.navigate("register")}
                    style={{ padding: 5, marginLeft: 5, backgroundColor: '#2e86de' }}
                >
                    <Text style={styles.button1}>Register</Text>
                </Button>
            </Form>
        </Container>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'black'
    },
    button: {
        alignSelf: 'center',
        padding: 30,
        marginTop:20,
        marginBottom:20,
        // width: 100,
        backgroundColor: '#2e86de'
    },
    button1: {
        alignSelf: 'center',
        padding: 10,
        // marginTop:20,
        // marginBottom:20,
        // width: 100,
        backgroundColor: '#2e86de'
    },
    form: {
        alignSelf: 'center'
    },
    input: {
        padding: 50,
        marginTop: 50,
        width: 400,
        marginVertical: 100,
        borderBottomColor: "#333",
        alignSelf: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 280,
        height: 100,
      },


})

export default Login







// import React from "react"
// import {useSelector, useDispatch} from "react-redux"
// import {View, Text, StyleSheet} from "react-native"
// import {Button, Form, Item, Input, Label} from "native-base"

// import {LoginAction} from '../action'

// const {useEffect} = React

// const Login = ({navigation}) =>{
//     const [username, setUsername] = React.useState("")
//     const [password, setPassword] = React.useState("")

//     const {user} = useSelector((state)=>{
//         return{
//             user: state.userReducer.username
//         }
//     })

//     const dispatch = useDispatch()

//     useEffect(()=>{
//         if(user) navigation.navigate("Tab")
//     })

//     const handleLogin = () =>{
//         const body={
//             username: username,
//             password: password,
//         }
//         console.log("form : ", username, password)
//         dispatch(LoginAction(body))
//         setUsername("")
//         setPassword("")
//     }
//     return(
//         <View style={styles.root}>
//             <Text>LOGIN PAGE</Text>
//             <Form>
//                 <Item floatingLabel style={styles.input}>
//                     <Label>Username</Label>
//                     <Input 
//                         onChangeText={(value)=> setUsername(value)}/>
//                 </Item>

//                 <Item floatingLabel style={styles.input}>
//                     <Label>Password</Label>
//                     <Input  
//                         secureTextEntry
//                         onChangeText={(value)=> setPassword(value)}/>
//                 </Item>
//             </Form>
//             <Button 
//                 light 
//                 rounded 
//                 loading
//                 onPress={handleLogin}
//                 style={styles.button}>
//                  <Text>Login</Text>   
//             </Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     root:{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     button:{
//         alignSelf: "center",
//         padding: 15
//     },
//     input:{
//         padding: 10,
//         width: 300,
//         marginVertical: 20,
//         borderBottomColor: "#333"
//     }
// })

// export default Login