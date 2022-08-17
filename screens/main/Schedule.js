import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  BoldText,
  CurvedEdges,
  MediumBlackText,
  MediumGreyText,
  MediumWhiteText,
  RegularColoredText,
  SmallColoredText,
  StyledButton,
  TransparentBtn,
  WhiteButton,
} from '../../styles/styledUtils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../utils/assets';
import {BackIcon, ForwardIcon} from '../../components/Icons';
import {SeeCalender} from '../../assets/images';
const screenHeight = Dimensions.get('screen').height;
const Schedule = ({navigation}) => {
  const timeList = [
    {
      id: 1,
      time: '10:00AM',
    },
    {
      id: 2,
      time: '11:00AM',
    },
    {
      id: 3,
      time: '12:00AM',
    },
    {
      id: 4,
      time: '01:00PM',
    },
    {
      id: 5,
      time: '02:00PM',
    },
    {
      id: 6,
      time: '03:00PM',
    },
    {
      id: 7,
      time: '04:00PM',
    },
    {
      id: 8,
      time: '05:00PM',
    },
  ];
  return (
    <SafeAreaView style={{height: screenHeight, padding: 10}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 60,
          marginBottom: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon color="black" />
        </TouchableOpacity>
        <BoldText style={{textAlign: 'center', width: '90%'}}>
          Book Appointment
        </BoldText>
      </View>
      <View>
        <MediumBlackText style={{alignSelf: 'center', marginBottom: 10}}>
          Select a Time
        </MediumBlackText>
        <CurvedEdges
          style={{width: '95%', height: 370, alignSelf: 'center', padding: 20}}>
          <MediumBlackText style={{marginBottom: 10}}>Today</MediumBlackText>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={timeList}
            renderItem={({item}) => {
              return (
                <WhiteButton
                  style={{
                    borderColor: colors.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45%',
                    height: 57,
                    marginRight: 20,
                  }}>
                  <SmallColoredText style={{fontSize: 17}}>
                    {item.time}
                  </SmallColoredText>
                </WhiteButton>
              );
            }}
          />
        </CurvedEdges>

        <StyledButton disabled>
          <MediumWhiteText>Next</MediumWhiteText>
        </StyledButton>

        <MediumBlackText
          style={{alignSelf: 'center', marginBottom: 20, marginTop: 20}}>
          OR
        </MediumBlackText>

        <ImageBackground
          imageStyle={{borderRadius: 20}}
          style={{width: '100%', justifyContent: 'center', height: 150}}
          source={SeeCalender}>
          <View
            style={{justifyContent: 'center', borderRadius: 50, padding: 20}}>
            <MediumWhiteText style={{fontSize: 30}}>
              Select another day
            </MediumWhiteText>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Calendar')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <MediumWhiteText>See calendar</MediumWhiteText>
              <ForwardIcon />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Schedule;
