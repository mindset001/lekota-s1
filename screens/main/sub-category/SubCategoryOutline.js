import {
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  MediumBlackText,
  MediumGreyText,
  RegularColoredText,
  StyledView,
  TransparentBtn,
  SmallColoredText,
} from '../../../styles/styledUtils';
import {BackIcon} from '../../../components/Icons';
import useScreenDimensions from '../../../hooks/useScreenDimensions';

const SubCategoryOutline = ({navigation, route}) => {
  
  const data = route.params.data;
  const {width, height} = useScreenDimensions();

  const renderItem = ({item}) => {
    return (
      <TransparentBtn
        onPress={() =>
          navigation.navigate('SubCatOrder', {data: item.outLineDetail})
        }
        style={{marginBottom: 10}}>
        <View style={{flex: 1}}>
          <SmallColoredText>{item.title}</SmallColoredText>
          <SmallColoredText>{item.subTitle}</SmallColoredText>
        </View>

        <SmallColoredText>{item.amount}</SmallColoredText>
      </TransparentBtn>
    );
  };

  return (
    <SafeAreaView style={{position: 'relative'}}>
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
            {data.title}
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
        }}>
        <ScrollView>
          <FlatList
            ListHeaderComponent={item => (
              <View>
                <MediumGreyText style={{fontSize: 22, marginBottom: 20}}>
                  {data.title}
                </MediumGreyText>
                <MediumGreyText style={{fontSize: 18, marginBottom: 20}}>
                  Select Services
                </MediumGreyText>
              </View>
            )}
            renderItem={renderItem}
            data={data.subCatOption}
          />
        </ScrollView>
      </StyledView>
    </SafeAreaView>
  );
};

export default SubCategoryOutline;
