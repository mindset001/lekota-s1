import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts} from '../../utils/assets';
import HomeScreen from './HomeScreen';
import SubCategoryScreen from './sub-category/SubCategoryScreen';
import BookingsScreen from './BookingsScreen';
import AccountScreen from './AccountScreen';
import {
  HomeClicked,
  HomeUnClicked,
  ProfileClicked,
  ProfileUnClicked,
  BookingsClicked,
  BookingsUnClicked,
} from '../../assets/images/index';
import SubCategoryOutline from './sub-category/SubCategoryOutline';
import SubCategoryOrder from './sub-category/SubCategoryOrder';
import ExploreServiceProviders from './sub-category/ExploreServiceProviders';
import ServiceProviderProfile from './sub-category/SerProvProfile';
import Chat from '../../components/chat/Chat';
import Call from '../../components/call/Call';
import Payment from '../../components/Payment';
import Notifications from './Notifications';
import Schedule from './Schedule';
import Calendar from './Calendar';

const HomeStack = createStackNavigator();

function HomeStackScreen({navigation,route}) {
  
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch (routeName) {
      case 'Home':
         return navigation.setOptions({tabBarStyle: {display: 'flex'}});
        break;
      case 'SubCat':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'SubCatOutline':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'SubCatOrder':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'ExploreProviders':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'SerProvProfile':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'Chat':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
      case 'Call':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'Notifications':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'Schedule':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      case 'Calendar':
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break
      default:
        return navigation.setOptions({tabBarStyle: {display: 'flex', height: 60}});
    }
    // if (routeName === "SubCat" || "SubCatOutline" || "SubCatOrder" || "ExploreProviders"){
    //     navigation.setOptions({tabBarStyle: {display: 'none'}});
    // }else {
    //     navigation.setOptions({tabBarStyle: {display: 'flex'}});
    // }
}, [navigation, route]);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Main" component={HomeScreen} />
      <HomeStack.Screen name="SubCat" component={SubCategoryScreen} />
      <HomeStack.Screen name="SubCatOutline" component={SubCategoryOutline} />
      <HomeStack.Screen name="SubCatOrder" component={SubCategoryOrder} />
      <HomeStack.Screen name="SerProvProfile" component={ServiceProviderProfile} />
      <HomeStack.Screen name="Chat" component={Chat} />
      <HomeStack.Screen name="Call" component={Call} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="Schedule" component={Schedule} />
      <HomeStack.Screen name="Calendar" component={Calendar} />
    </HomeStack.Navigator>
  );
}


const BookingsStack = createStackNavigator();

function BookingsStackScreen() {
  return (
    <BookingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BookingsStack.Screen name="MainBookings" component={BookingsScreen} />
    </BookingsStack.Navigator>
  );
}
const AccountStack = createStackNavigator();

function AccountStackScreen({navigation,route}) {
  const routeName = getFocusedRouteNameFromRoute(route);
  React.useLayoutEffect(() => {
    switch (routeName) {
      case "MainAccount":
         return navigation.setOptions({tabBarStyle: {display: 'flex', height: 60}});
        break;
      case "Payments":
       return navigation.setOptions({tabBarStyle: {display: 'none'}});
       break;
      default:
        return navigation.setOptions({tabBarStyle: {display: 'flex', height: 60}});
    }},[navigation, route]);
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name="MainAccount" component={AccountScreen} />
      <AccountStack.Screen name="Payments" component={Payment} />
    </AccountStack.Navigator>
  );
}

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  switch (routeName) {
    case 'Home':
      return true;
      break;
    case 'SubCat':
      return true;
    default:
      return null;
  }
};

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.dark,
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarStyle: [
          {
            backgroundColor: colors.white,
            height: 60
          },
          null,
        ],
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: fonts.light,
          letterSpacing: 0.5,
          marginBottom: 10
        },
      }}>
      <Tab.Screen
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.imgStyles}
              source={focused ? HomeClicked : HomeUnClicked}
            />
          ),
          tabBarVisible: getTabBarVisibility(route),
        })}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.imgStyles}
              source={focused ? BookingsClicked : BookingsUnClicked}
            />
          ),
        }}
        name="Bookings"
        component={BookingsStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.imgStyles}
              source={focused ? ProfileClicked : ProfileUnClicked}
            />
          ),
        }}
        name="Account"
        component={AccountStackScreen}
      />
      {/* <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <SearchTabIcon
                height={20}
                width={20}
                color={focused ? Colors.secondary : Colors.white}
              />
            ),
          }}
          name="Search"
          component={SearchStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <CategoryTabIcon
                height={20}
                width={20}
                color={focused ? Colors.secondary : Colors.white}
              />
            ),
          }}
          name="Categories"
          component={CategoriesStackScreen}
        />
        <Tab.Screen
          options={({route}) => ({
            tabBarIcon: ({focused}) => (
              <ProfileTabIcon
                height={20}
                width={20}
                color={focused ? Colors.secondary : Colors.white}
              />
            ),
            tabBarVisible: getTabBarVisibility(route)
          })}
          name="History"
          component={ProfileStackScreen}
        /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  imgStyles: {
    width: 25,
    height: 25,
    marginBottom: 0,
  },
});
