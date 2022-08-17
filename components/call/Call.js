import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../utils/assets';
import {
  ActiveStatus,
  BoldGreyText,
  BoldText,
  LightGreyText,
  CurvedEdges,
  MediumGreyText,
} from '../../styles/styledUtils';
import {Cancel, PhoneStyle} from '../Icons';
import {EndCallIcon} from '../../assets/images';
import OverLay from '../Overlay';
import Overlay from '../Overlay';
import Stars from '../Stars';

const screenHeight = Dimensions.get('screen').height;

const Call = ({
  navigation,
  route: {
    params: {
      data: {name, imageUrl},
    },
  },
}) => {
  const [show, setShow] = useState(false)
  return (
    <SafeAreaView
      style={{
        height: screenHeight,
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <View style={{alignItems: 'center', marginTop: 100, marginBottom: 20}}>
        <View style={{position: 'relative'}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 50,
            }}
            source={imageUrl}
          />
          <ActiveStatus
            style={{right: 23, width: 20, height: 20}}
            status="active"
          />
        </View>
        <BoldGreyText style={{fontSize: 30}}>{name}</BoldGreyText>
        <LightGreyText>CALLING...</LightGreyText>
      </View>
      <View>
        <BoldText>0:00</BoldText>
      </View>
      <View style={{alignItems: 'center', marginTop: 130, marginBottom: 20}}>
        <PhoneStyle />
        <TouchableOpacity
          onPress={()=>setShow(true)}
          style={{alignItems: 'center', marginTop: 50, marginBottom: 20}}>
          <Image source={EndCallIcon} style={{width: 80, height: 80}} />
        </TouchableOpacity>
      </View>
      <Overlay onPress={()=>setShow(false)} show={show}>
        <CurvedEdges height="38%" width="77%" style={{alignItems: "center"}}>
          <View style={{flexDirection: "row",marginTop: 70, marginBottom: 60}}>
            <BoldGreyText style={{fontSize:30, width: "80%"}}>Please rate the call quality</BoldGreyText>
            <TouchableOpacity onPress={()=>{
              navigation.goBack()
              setShow(false)
              }}>
              <Cancel size={30} color={colors.darkGrey} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: "center"}}>

          <Stars style={{width: 39, height: 39}} rating={4} />
          <MediumGreyText>Rate Call</MediumGreyText>
          </View>
        </CurvedEdges>
      </Overlay>
    </SafeAreaView>
  );
};

export default Call;
