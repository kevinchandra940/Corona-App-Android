import React from "react"
import {View, Text, StyleSheet, Image} from "react-native"

const Splash = () =>{
    return(
        <View style={styles.root}> 
            {/* <Text>SPLASH SCREEN</Text> */}
            <Image
            style={styles.logo}
            source={{
                uri: 'https://lh3.googleusercontent.com/proxy/z91hcTd9INKa03ME9SjBZNC4zKA9Jq4rTPniPmlatQW8H-pm3WnywOK7zl74w8c11DW45TrGtD1XS9mivGezVtOyn8ChODjXCjQ',
              }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "pink"
    },
    button:{
        alignSelf: "center",
        padding: 15
    },
    logo: {
        width: 100,
        height: 100,
      },
})

export default Splash