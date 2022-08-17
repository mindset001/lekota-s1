import { View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackIcon } from '../../components/Icons'
import { BoldText, LightGreyText, NotificationView } from '../../styles/styledUtils'
import { firstSerProv } from '../../assets/images'
import { colors } from '../../utils/assets'
import useScreenDimensions from '../../hooks/useScreenDimensions';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser, updateUserFetching} from '../../features/user/userSlice';
import axios from 'axios';
import {BASE_URL, paths} from '../../config/index'

const Notifications = ({navigation}) => {
    const dispatch = useDispatch();
    const {width, height} = useScreenDimensions();
  const { accessToken, notificationsFetching, notifications} = useSelector(state => state.user);
    // const notifications = [
    //     {
    //         id: 1, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: false
    //     },
    //     {
    //         id: 2, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 3, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 4, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 5, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 6, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 7, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 8, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    //     {
    //         id: 9, 
    //         description: "Your service provider has completed the job, please click “confirm” to verify.",
    //         imageUrl: firstSerProv,
    //         isRead: true
    //     },
    // ]
    const renderItem =({item})=> {
        return (
            <NotificationView isRead={item.isRead}>
                <Image source={item?.imageUrl} style={{width: 50, height: 50}} />
                <LightGreyText style={{color: colors.dark, paddingLeft: 10, width: "86%",}}>{item?.description}</LightGreyText>
            </NotificationView>
        )
    }
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: colors.white,}}>
    
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 60,
          marginBottom: 40,
          padding: 10
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon color="black" />
        </TouchableOpacity>
        <BoldText style={{textAlign: 'center', width: '90%'}}>Notifications</BoldText>

      </View>
      <FlatList 
        data={notifications}
        renderItem={renderItem}
        contentContainerStyle={{height: height * 1.04}}
      />
      </SafeAreaView>
  )
}

export default Notifications