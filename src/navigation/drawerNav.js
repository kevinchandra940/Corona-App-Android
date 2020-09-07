import React from 'react'
import {Button, Text} from 'native-base'
import {createDrawerNavigator} from "@react-navigation/drawer"

// import screen
import Account from "../pages/account"
import Info from "../pages/info"
// import Profile from "../screen/profile"

const DrawerNav = () =>{
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Info" component={Info}/>
            <Drawer.Screen name="Account" component={Account}/>
            {/* <Drawer.Screen name="Profile" component={Profile}/> */}
            {/* <Button><Text>Log out</Text></Button> */}
        </Drawer.Navigator>
    )
}

export default DrawerNav