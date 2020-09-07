import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Account from "../pages/account"
import Info from "../pages/info"

// import component
import Login from "../pages/login"
import TabNav from "./tabNav"
import SplashScreen from "../pages/splash"
import { keepLogin } from "../action"
import DrawerNav from "./drawerNav"
// import Register from "../pages/register"

const StackNav = () => {
    const { username, loading } = useSelector((state) => {
        return {
            username: state.userReducer.username,
            loading: state.userReducer.authloading
        }
    })

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(keepLogin())
    }, [])

    if (loading) {
        return <SplashScreen />
    }
    const Stack = createStackNavigator()
    // const Drawer = createDrawerNavigator()
    return (
        <Stack.Navigator>
            {username ? (
                <Stack.Screen name="Tab" component={TabNav} />
            ) : (
                    <Stack.Screen name="Login" component={Login} />
                )
            }
            <Stack.Screen name="Drawer" component={DrawerNav} />

        </Stack.Navigator>

        // <Drawer.Navigator>
        //     <Stack.Navigator>
        //          {username ? (
        //         <Stack.Screen name="Tab" component={TabNav} />
        //     ) : (
        //             <Stack.Screen name="Login" component={Login} />
        //         )
        //     }
        //     <Stack.Screen name="Drawer" component={DrawerNav} />

        //     <Drawer.Screen name="Info" component={Info} />
        //     <Drawer.Screen name="Account" component={Account} />
        //     {/* <Drawer.Screen name="Profile" component={Profile}/> */}
        //     {/* <Button><Text>Log out</Text></Button> */}
        //     </Stack.Navigator>
        // </Drawer.Navigator>
    )
}

export default StackNav