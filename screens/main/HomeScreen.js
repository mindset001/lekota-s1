import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  BoldText,
  StyledButton,
  MediumWhiteText,
  SmallColoredText,
  MediumBlackText,
  HelperText,
  StyledSearchInput,
  ActiveStatus,
} from '../../styles/styledUtils';
import {HandIcon, NotificationIcon, SearchIcon} from '../../assets/images';
import DismissKeyboard from '../../components/DismissKeyboard';
import {categoriesData, adverts} from '../../components/dummyData';
import {colors} from '../../utils/assets';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateUser,
  updateUserFetching,
  updateNotifications,
  updateNotificationFetching,
} from '../../features/user/userSlice';
import axios from 'axios';
import {BASE_URL, paths} from '../../config/index';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    userProfile,
    accessToken,
    userFetching,
    notifications,
    notificationsFetching,
  } = useSelector(state => state.user);
  const isUser = Object.keys(userProfile).length;

  const fetchUser = async token => {
    dispatch(updateUserFetching(true));
    try {
      const response = await axios.get(`${BASE_URL}/${paths.getCurrentUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        dispatch(updateUserFetching(false));
        dispatch(updateUser(response.data));
      }
      return;
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchNotifications = async token => {
    dispatch(updateNotificationFetching(true));
    try {
      const response = await axios.get(
        `${BASE_URL}/${paths.getNotifications}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('note', response.data);

      if (response.status === 200) {
        dispatch(updateNotificationFetching(false));
        dispatch(updateNotifications(response.data));
      }
      return;
    } catch (err) {
      console.log('nit', err.message);
    }
  };

  useEffect(() => {
    if (Object.keys(userProfile).length === 0) {
      fetchUser(accessToken);
    }
    return () => {};
  }, []);
  useEffect(() => {
    fetchNotifications(accessToken);
    return () => {};
  }, []);

  const {width, height} = useScreenDimensions();
  console.log('bot', notifications.length);

  const RenderItem = ({item}) => {
    return (
      <ImageBackground
        style={{
          width: 200,
          height: 120,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          paddingTop: 30,
          position: 'relative',
        }}
        imageStyle={{borderRadius: 20}}
        source={item?.imageUrl}>
        <Image
          style={{
            width: '112%',
            height: 121,

            position: 'absolute',
            top: -1,
            left: -1,
            borderRadius: 20,
          }}
          source={item?.gradient}
        />
        <MediumBlackText>{item?.description}</MediumBlackText>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 20,
          }}>
          <SmallColoredText>Here</SmallColoredText>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  const Item = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SubCat', {data: item})}
        key={item?.id}
        style={{width: width / 2.45, height: height / 10}}>
        <ImageBackground
          style={{
            width: '104%',
            height: '118%',
            padding: 7,
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
          source={item?.imageSrc}>
          <MediumWhiteText style={{fontSize: height / 45, width: '80%'}}>
            {item?.title}
          </MediumWhiteText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <DismissKeyboard>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{height: height}}>
        <Container>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <BoldText>
                Hi,{' '}
                {isUser !== 0
                  ? userProfile.username.charAt(0).toUpperCase() +
                    userProfile.username.split(' ')[0].substring(1)
                  : '--'}{' '}
              </BoldText>
              <TouchableOpacity>
                <Image style={{width: 30, height: 30}} source={HandIcon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <Image
                style={{width: 30, height: 30}}
                source={NotificationIcon}
              />
              {notifications.length !== 0 && (
                <ActiveStatus
                  style={{
                    right: 0,
                    width: 10,
                    height: 10,
                    backgroundColor: colors.red,
                    top: 0,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{position: 'relative'}}>
            <Image
              style={{
                width: 26,
                height: 26,
                position: 'absolute',
                bottom: 30,
                left: 14,
                zIndex: 2,
              }}
              source={SearchIcon}
            />
            <StyledSearchInput
              style={{height: height / 14}}
              placeholder="Search for services"
            />
          </View>
        </Container>
        <FlatList
          horizontal
          data={adverts}
          scrollEnabled={true}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={{width: width * 1.7,}}
        />
        <Container
          style={{
            paddingTop: 0,
            marginTop: 0,
          }}>
          <FlatList
            data={categoriesData}
            ListHeaderComponent={() => (
              <MediumBlackText style={{fontSize: width / 17, marginBottom: 10}}>
                Service Categories
              </MediumBlackText>
            )}
            renderItem={({item}) => <Item item={item} />}
            horizontal={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: height / 29,
            }}
          />
        </Container>
      </ScrollView>
    </DismissKeyboard>
  );
};

export default HomeScreen;
