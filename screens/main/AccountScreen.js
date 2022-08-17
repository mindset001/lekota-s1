import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  LightGreyText,
  MediumGreyText,
  MediumWhiteText,
  ProfileInput,
  MediumBlackText,
  RegularColoredText,
  StyledButton,
} from '../../styles/styledUtils';
import {
  MenuOpenIcon,
  MenuCloseIcon,
  CardIcon,
  SupportIcon,
  AboutIcon,
} from '../../components/Icons';
import {
  EmergencyIcon,
  FriendsIcon,
  LocationIcon,
  LogoutIcon,
} from '../../assets/images';
import {colors} from '../../utils/assets';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser, updateUserFetching} from '../../features/user/userSlice';
import useScreenDimensions from '../../hooks/useScreenDimensions';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;

const AccountScreen = ({navigation}) => {
  const {width, height} = useScreenDimensions();
  const [user, setUser] = useState({
    firstName: 'Mary',
    lastName: 'Godwin',
    email: 'mary.ojinika@gmail.com',
    phone: '09074105376',
    address: '12, Haut St., Wuye, Abuja.',
    referral: 'https://app.service.com/sig...',
  });
  const {userProfile, accessToken, userFetching} = useSelector(
    state => state.user,
  );
  const [emergency, setEmergency] = useState(false);
  const translation = useRef(new Animated.Value(245)).current;
  const openMenu = () => {
    Animated.timing(translation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  const closeMenu = () => {
    Animated.timing(translation, {
      toValue: 245,
      useNativeDriver: true,
    }).start();
  };

  const menuItems = [
    {
      id: 1,
      name: 'Payments',
      Icon: CardIcon,
      location: 'Payments',
    },
    {
      id: 2,
      name: 'Support',
      Icon: SupportIcon,
    },
    {
      id: 3,
      name: 'About',
      Icon: AboutIcon,
    },
  ];

  return (
    <SafeAreaView style={{padding: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <BoldText>My Profile</BoldText>
        <TouchableOpacity onPress={openMenu}>
          <MenuOpenIcon />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          height: height * 1.2,
        }}>
        <View
          style={{
            marginTop: 20,
            borderBottomColor: colors.darkGrey,
            borderBottomWidth: 1,
            paddingBottom: 50,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ProfileInput
              editable={false}
              style={{width: '45%'}}
              value={
                Object.keys(userProfile).length !== 0
                  ? userProfile?.username.charAt(0).toUpperCase() +
                    userProfile?.username.split(' ')[0].substring(1)
                  : '-----'
              }
            />
            <ProfileInput
              editable={false}
              style={{width: '45%'}}
              value={
                Object.keys(userProfile).length !== 0
                  ? userProfile?.username
                      .charAt(userProfile?.username.split(' ')[1].length + 1)
                      .toUpperCase() +
                    userProfile?.username.split(' ')[1].substring(1)
                  : '-----'
              }
            />
          </View>
          <ProfileInput
            editable={false}
            value={
              Object.keys(userProfile).length !== 0
                ? userProfile?.email
                : '-----'
            }
          />
          <ProfileInput
            editable={false}
            value={
              Object.keys(userProfile).length !== 0
                ? userProfile?.profile?.phone_number
                : '-----'
            }
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ProfileInput
              style={{width: '80%'}}
              editable={false}
              value={
                Object.keys(userProfile).length !== 0 &&
                userProfile?.profile?.address
                  ? userProfile?.profile?.address
                  : '-----------------------------------'
              }
            />
            <TouchableOpacity
              style={{
                width: 60,
                height: 50,
                backgroundColor: colors.white,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Image style={{width: 27, height: 27}} source={LocationIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={
            emergency
              ? [{...styles.inactiveEmergency}, styles.activeEmergency]
              : styles.inactiveEmergency
          }
          onPress={() => setEmergency(!emergency)}>
          <Image style={{width: 50, height: 45}} source={EmergencyIcon} />
          <View style={{marginLeft: 15}}>
            <BoldText>
              {emergency ? 'Help is on the way' : 'Emergency help'}
            </BoldText>
            <LightGreyText>
              {emergency
                ? 'Security personnel has been notified'
                : 'Notify security personnel'}
            </LightGreyText>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: colors.white,
            height: 120,
            padding: 10,
            justifyContent: 'center',
            borderRadius: 20,
            marginBottom: 20,
          }}>
          <BoldText>Invite Friends</BoldText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <ProfileInput
                editable={false}
                value={
                  Object.keys(userProfile).length !== 0 &&
                  userProfile?.invite_link
                    ? userProfile?.invite_link
                    : '-----------------------------------'
                }
                style={{width: '75%', backgroundColor: '#eee'}}
              />
              <TouchableOpacity
                style={{
                  padding: 10,
                  width: 60,
                  height: 45,
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                  position: 'absolute',
                  right: 20,
                  top: 13,
                  justifyContent: 'center',
                }}>
                <MediumWhiteText>Copy</MediumWhiteText>
              </TouchableOpacity>
            </View>
            <Image style={{width: 70, height: 55}} source={FriendsIcon} />
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <MediumGreyText>Terms of Service</MediumGreyText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <MediumGreyText style={{marginRight: 10}}>Logout</MediumGreyText>
            <Image style={{width: 20, height: 20}} source={LogoutIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Animated.View
        style={[
          styles.slidingContainer,
          {
            transform: [
              {
                translateX: translation,
              },
            ],
          },
        ]}>
        <TouchableOpacity style={{padding: 10}} onPress={closeMenu}>
          <MenuCloseIcon />
        </TouchableOpacity>
        <View style={{marginTop: 10, padding: 50}}>
          {menuItems.map(({id, Icon, name, location}) => {
            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  if (location) {
                    navigation.navigate(location);
                    closeMenu();
                  }
                  closeMenu();
                }}
                style={{marginTop: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <MediumBlackText style={{flex: 1}}>{name}</MediumBlackText>
                  <Icon />
                </View>
              </TouchableOpacity>
            );
          })}
          <StyledButton
            style={{height: 47, padding: 5, backgroundColor: colors.primary}}>
            <MediumWhiteText style={{fontSize: 11}}>
              Become a Service Provider
            </MediumWhiteText>
          </StyledButton>
        </View>
        <View style={styles.bottomContainer}>
          <MediumBlackText style={{alignSelf: 'center', marginBottom: 10}}>
            Invite Friends
          </MediumBlackText>
          <MediumGreyText style={{fontSize: 13}}>
            Service provider:
          </MediumGreyText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'relative',
              marginBottom: 10,
            }}>
            <ProfileInput
              editable={false}
              value={user.referral}
              style={{
                width: '69%',
                backgroundColor: '#eee',
                fontSize: 12,
                height: 40,
              }}
            />
            <TouchableOpacity
              style={{
                padding: 10,
                width: 60,
                height: 38,
                backgroundColor: colors.primary,
                borderRadius: 10,
                position: 'absolute',
                right: 20,
                top: 13,
                justifyContent: 'center',
              }}>
              <MediumWhiteText>Copy</MediumWhiteText>
            </TouchableOpacity>
          </View>
          <MediumGreyText style={{fontSize: 13}}>
            Purchase a service:
          </MediumGreyText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'relative',
            }}>
            <ProfileInput
              editable={false}
              value={user.referral}
              style={{
                width: '69%',
                backgroundColor: '#eee',
                fontSize: 12,
                height: 40,
              }}
            />
            <TouchableOpacity
              style={{
                padding: 10,
                width: 60,
                height: 38,
                backgroundColor: colors.primary,
                borderRadius: 10,
                position: 'absolute',
                right: 20,
                top: 13,
                justifyContent: 'center',
              }}>
              <MediumWhiteText>Copy</MediumWhiteText>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inactiveEmergency: {
    borderColor: colors.secondary,
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    height: 100,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  activeEmergency: {
    borderColor: colors.red,
    backgroundColor: colors.pink,
  },
  slidingContainer: {
    backgroundColor: colors.white,
    height: screenHeight,
    width: '65%',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    paddingTop: 45,
  },
  bottomContainer: {
    position: 'absolute',
    borderTopColor: colors.dark,
    borderTopWidth: 1,
    bottom: 0,
    height: 350,
    padding: 10,
    width: '100%',
  },
});

export default AccountScreen;
