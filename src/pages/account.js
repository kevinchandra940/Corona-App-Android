import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {Button} from 'native-base'
import {useDispatch} from 'react-redux'
import { LOG_OUT, onUserLogout } from "../action"

const Account = () =>{
    const dispacth = useDispatch()
    return(
        <View style={styles.root}> 
        <Text style={styles.text}>Don't forget to wash your hands mates. Stay Healthy</Text>
            <Button 
            style={styles.button}
            onPress={() => dispacth(onUserLogout())}>
                <Text>Logout</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        alignSelf: "center",
        padding: 80,
    },
    text:{
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 40

    }
})

export default Account