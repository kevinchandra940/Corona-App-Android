import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'

// import screen
import Home from "../pages/home"
import DrawerNav from "./drawerNav"

const TabNav = ()=>{
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Drawer') {
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              } 
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
         >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Drawer" component={DrawerNav}/>
        </Tab.Navigator>
    )
}

export default TabNav