import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  MediumBlackText,
  MediumGreyText,
  RegularColoredText,
  StyledView,
  TransparentBtn,
  SmallColoredText,
  GreyRoundButton,
  MediumWhiteText,
  LightGreyText,
  WhiteButton,
  StyledButton,
  ProvCard,
  CurvedEdges,
  BoldGreyText,
  SuccessToast,
} from '../../../styles/styledUtils';
import {BackIcon, CancelIcon} from '../../../components/Icons';
import {colors} from '../../../utils/assets';
import {serviceProviders} from '../../../components/dummyData';
import BottomSheet from '@gorhom/bottom-sheet';
import Overlay from '../../../components/Overlay';
import {
  firstSerProv,
  gifLoader,
  StarCheckIcon,
  StarUnCheckIcon,
} from '../../../assets/images';
import Stars from '../../../components/Stars';
import useScreenDimensions from '../../../hooks/useScreenDimensions';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;


const ServiceProviderProfile = ({navigation, route}) => {
  const data = route.params.data;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const {width, height} = useScreenDimensions();

  return (
    <SafeAreaView style={{position: 'relative'}}>
      <ImageBackground
        style={{
          width: width,
          height: height / 3,
        }}
        source={data.coverImg}>
        {isSuccess && (
          <SuccessToast style={{position: 'absolute', top: 0}}>
            {isConfirmed && (
              <View
                style={{flexDirection: 'row', width: '93%', marginBottom: 2}}>
                <MediumWhiteText
                  style={{flex: 1, textAlign: 'center', fontSize: 16}}>
                  Confirmed!
                </MediumWhiteText>
                <MediumWhiteText style={{fontSize: 16}}>14:20</MediumWhiteText>
              </View>
            )}
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <MediumWhiteText style={{fontSize: 16, marginRight: 10}}>
                Your booking was successful, pending confirmation
              </MediumWhiteText>
              <TouchableOpacity
                onPress={() => {
                  setIsSuccess(false);
                  setIsChange(true);
                }}>
                <CancelIcon />
              </TouchableOpacity>
            </View>
          </SuccessToast>
        )}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            marginTop: 60,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon color="white" />
          </TouchableOpacity>
          <BoldText
            style={{
              textAlign: 'center',
              width: '90%',
              color: '#fff',
              fontSize: 30,
            }}>
            Profile
          </BoldText>
        </View>
      </ImageBackground>

      <StyledView
        height={height}
        style={{
          top: 0,
          bottom: 100,
          position: 'absolute',
          top: height / 4,
          flex: 1,
        }}>
          <ScrollView>

        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            marginBottom: 100,
          }}>
          <View style={{flex: 1}}>
            <Stars style={{width: 15, height: 15}} rating={data.rating} />
            <LightGreyText>{`${data.reviews} Reviews`}</LightGreyText>
          </View>
          <View
            style={{
              position: 'absolute',
              top: -100,
              left: 0,
              right: 0,
              alignItems: 'center',
            }}>
            <Image style={{width: 170, height: 170}} source={data.imageUrl} />
            <BoldGreyText style={{fontSize: 30}}>{data.name}</BoldGreyText>
          </View>
          <View>
            <BoldGreyText style={{fontSize: 25}}>{data.jobs}</BoldGreyText>
            <LightGreyText>JOBS</LightGreyText>
          </View>
        </View>
        <View>
          <BoldGreyText style={{fontSize: 20, marginBottom: 10}}>
            Description
          </BoldGreyText>
          <LightGreyText>{data.description}</LightGreyText>
        </View>
        {isChange ? (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <BoldGreyText>Status: On-going</BoldGreyText>
            <WhiteButton
              onPress={()=>navigation.navigate("Chat", {data: data})}
              style={{
                borderColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                width: "50%"
              }}>
              <SmallColoredText style={{fontSize: 17}}>
                Contact
              </SmallColoredText>
            </WhiteButton>
            <TouchableOpacity onPress={() => setIsChange(false)}>
              <SmallColoredText style={{fontSize: 17}}>
                Cancel Appointment
              </SmallColoredText>
            </TouchableOpacity>
          </View>
        ) : (
          <StyledButton
            disabled={isSuccess}
            onPress={() => {
              setTimeout(() => {
                setIsSuccess(true);
              }, 2000);
              setTimeout(() => {
                setIsSuccess(false);
                setIsConfirmed(false);
                setIsChange(true);
              }, 6000);
              setTimeout(() => {
                setIsConfirmed(true);
              }, 3000);
            }}>
            <MediumWhiteText>Confirm booking</MediumWhiteText>
          </StyledButton>
        )}
          </ScrollView>
      </StyledView>
    </SafeAreaView>
  );
};

export default ServiceProviderProfile;
