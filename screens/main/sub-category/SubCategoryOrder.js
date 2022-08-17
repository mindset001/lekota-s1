import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
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
} from '../../../styles/styledUtils';
import {BackIcon} from '../../../components/Icons';
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


const SubCategoryOrder = ({navigation, route}) => {
  const data = route.params.data;
  const [count, setCount] = useState(1);
  const [max, setMax] = useState([1, 2, 3, 4, 5]);
  const {width, height} = useScreenDimensions();
  const [show, setShow] = useState(false);
  const [findingProvider, setFindingProvider] = useState(false);

  useEffect(() => {
    return setShow(false);
  }, []);

  const providerData = {
    id: 1,
    name: 'Fayose Jacob',
    imageUrl: firstSerProv,
    jobs: 34,
    rating: 4,
    reviews: 11,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et viverra duis tempus, velit ante ut senectus tortor pharetra. Arcu amet dolor nunc nibh risus, sit. Ornare maecenas fermentum pellentesque platea. Vulputate sapien eu in convallis in congue euismod felis. Purus tincidunt fermentum, tortor, diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et viverra duis tempus, velit ante ut senectus tortor pharetra.',
    coverImg: data.coverImg,
    phone: '+2348162039510',
  };
  const handleCount = condition => {
    switch (condition) {
      case 'decrement':
        setCount(prevCount => (prevCount === 1 ? prevCount : prevCount - 1));
        break;
      case 'increment':
        setCount(prevCount => prevCount + 1);
        break;
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: width,
          height: height / 3,
        }}
        source={data.coverImg}>
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
          <BoldText style={{textAlign: 'center', width: '90%', color: '#fff'}}>
            {data.mainTitle}
          </BoldText>
        </View>
      </ImageBackground>

      <StyledView
        style={{
          top: 0,
          bottom: 100,
          height: height,
          position: 'absolute',
          top: height / 5,
          flex: 1,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={{fontSize: 20, flex: 1}}>
              <MediumGreyText style={{fontSize: 20, width: '70%'}}>
                {data.title}
              </MediumGreyText>
            </View>
            <MediumBlackText
              style={{
                backgroundColor: colors.bright,
                padding: 10,
                borderRadius: 10,
                fontSize: 20,
              }}>
              {data.price}
            </MediumBlackText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}>
            <GreyRoundButton onPress={() => handleCount('decrement')}>
              <MediumWhiteText style={{fontSize: 25}}>-</MediumWhiteText>
            </GreyRoundButton>
            <MediumBlackText
              style={{marginRight: 4, marginLeft: 4, fontSize: 25}}>
              {count}
            </MediumBlackText>
            <GreyRoundButton onPress={() => handleCount('increment')}>
              <MediumWhiteText style={{fontSize: 25}}>+</MediumWhiteText>
            </GreyRoundButton>
          </View>
          <View>
            <MediumBlackText
              style={{opacity: 0.8, marginBottom: 10, width: '60%'}}>
              Description
            </MediumBlackText>
            <LightGreyText>{data.description}</LightGreyText>
          </View>

          <StyledButton
            onPress={() => {
              setShow(true);
              setFindingProvider(true);
              setTimeout(() => setFindingProvider(false), 5000);
            }}>
            <MediumWhiteText>Get a Service Provider</MediumWhiteText>
          </StyledButton>
          <WhiteButton
            onPress={() => navigation.navigate('Schedule')}
            style={{
              borderColor: colors.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <SmallColoredText style={{fontSize: 17}}>
              Schedule a Service Providers
            </SmallColoredText>
          </WhiteButton>
        </ScrollView>
      </StyledView>
      <Overlay onPress={() => setShow(false)} show={show}>
        {findingProvider ? (
          <CurvedEdges height="30%" width="70%">
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
              }}>
              <Image source={gifLoader} style={{width: 250, height: 150}} />
              <SmallColoredText style={{fontSize: 20, textAlign: 'center'}}>
                Connecting you to a service provider
              </SmallColoredText>
            </View>
          </CurvedEdges>
        ) : (
          <CurvedEdges
            height="43%"
            width="77%"
            style={{padding: 10, position: 'relative'}}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 140, height: 140, borderRadius: 50}}
                source={providerData.imageUrl}
              />
              <View
                style={{
                  alignItems: 'center',
                  borderRadius: 10,
                  height: 80,
                  width: 60,
                  backgroundColor: colors.bright,
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 7,
                }}>
                <BoldGreyText style={{fontSize: 25}}>
                  {providerData.jobs}
                </BoldGreyText>
                <LightGreyText>JOBS</LightGreyText>
              </View>
              <BoldGreyText style={{fontSize: 25}}>
                {providerData.name}
              </BoldGreyText>
              <View
                style={{marginTop: 20, marginBottom: 20, alignItems: 'center'}}>
                <Stars rating={providerData.rating} />
                <LightGreyText>{`${providerData.reviews} reviews`}</LightGreyText>
              </View>
            </View>
            <WhiteButton
              onPress={() => {
                navigation.navigate('SerProvProfile', {data: providerData});
                setShow(false);
              }}
              style={{
                borderColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <SmallColoredText style={{fontSize: 17}}>
                View Profile
              </SmallColoredText>
            </WhiteButton>
          </CurvedEdges>
        )}
      </Overlay>
    </SafeAreaView>
  );
};

export default SubCategoryOrder;
