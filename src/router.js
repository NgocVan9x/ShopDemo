import React from "react";
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation';
import DetailsScreen from "./components/details";
import {YellowBox} from 'react-native';
import LoginScreen from './container/LoginContainer';
import HomeScreen from './container/HomeContainer';
import Sidebar from './container/SidebarContainer';
import RegisterScreen from './container/RegisterContainer';
import {Icon} from "react-native-elements";
import AccountScreen from './container/AccountContainer';
import CartScreen from './container/CartContainer';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Drawer = DrawerNavigator(
    {
        Home: {screen: HomeScreen}
    },
    {
        initialRouteName: "Home",
        contentComponent: props => <Sidebar {...props} />,
        headerMode: "none",
    },
);

const HomeStack = StackNavigator({
        Home: {screen: Drawer},
        Details: {screen: DetailsScreen},
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    });

const AccountStack = StackNavigator({
        Account: {screen: AccountScreen},
    },
    {
        headerMode: "none",
    });

const CartStack = StackNavigator({
        Cart: {screen: CartScreen}
    },
    {
        headerMode: "none",
    });

const HomeTab = TabNavigator(
    {
        Home: {screen: HomeStack},
        Cart: {screen: CartStack},
        Account: {screen: AccountStack},
    }
    ,
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if (routeName === 'Account') {
                    iconName = `account`;
                } else if (routeName === 'Cart') {
                    iconName = `cart`
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} type='material-community' size={25} color={tintColor}/>;
            },
        }),

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
        backBehavior: 'initialRoute',
    }
);
const AppRouter = StackNavigator({
        Home: {screen: HomeTab},
        Login: {screen: LoginScreen},
        Register: {screen: RegisterScreen},
        Audi:{screen:RegisterScreen}
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
        // navigationOptions: {
        //     title: 'Home',
        //     headerStyle: {
        //         backgroundColor: 'transparent',
        //         position: 'absolute',
        //         height: 50,
        //         top: 0,
        //         left: 0,
        //         right: 0,
        //         borderBottomWidth: 0
        //     },
        //     headerTintColor: '#fff'
        // }
    });
export default AppRouter;

