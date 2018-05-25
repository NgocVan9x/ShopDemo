import React from "react";
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation';
import DetailsScreen from "./components/Product/product-details";
import {YellowBox} from 'react-native';
import LoginContainer from './container/AccountContainer/Login';
import HomeScreen from './container/HomeContainer';
import Sidebar from './container/SidebarContainer';
import RegisterContainer from './container/AccountContainer/Register';
import {Icon} from "react-native-elements";
import AccountContainer from './container/AccountContainer/Account';
import CartScreen from './container/CartContainer';
import ListCarContainer from './container/ProductContainer/ProductListContainer';

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
        Account: {screen: AccountContainer},
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
        Account: {screen: AccountContainer},
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
        Login: {screen: LoginContainer},
        Register: {screen: RegisterContainer},
        ListCar:{screen:ListCarContainer}
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    });
export default AppRouter;

