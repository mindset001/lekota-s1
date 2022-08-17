import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BoldText,
  StyledSearchInput,
  Container,
  SubCatCard,
  MediumGreyText,
  BoldGreyText,
  ForwardSlash,
} from '../../../styles/styledUtils';
import {SearchIcon} from '../../../assets/images/index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackIcon, SlashIcon} from '../../../components/Icons';
import useScreenDimensions from '../../../hooks/useScreenDimensions';

const SubCategoryScreen = ({route, navigation}) => {
  const categoryData = route.params.data;
  const subCatData = categoryData.subCat;

  const [data, setData] = useState(subCatData);
  const [textSearch, setTextSearch] = useState('');
  const [inMemoryData, setInMemoryData] = useState(subCatData);
  const {width, height} = useScreenDimensions();

  const renderItem = ({item}) => {
    return (
      <SubCatCard onPress={()=>navigation.navigate('SubCatOutline', {data: item.subCatOutline})} style={{position: 'relative'}} key={item.id}>
        <Image
          style={{
            height: '100%',
            width: '55%',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={item?.imgSrc}
        />
        <View style={{position: 'absolute', left: width /3.7}}>
          <SlashIcon />
        </View>
        <View style={{width: '45%', height: '100%', justifyContent: 'center'}}>
          <BoldGreyText>{item?.title}</BoldGreyText>
          <MediumGreyText>{item?.subTitle}</MediumGreyText>
        </View>
      </SubCatCard>
    );
  };

  const filterList = text => {
    if (text) {
      const filteredItem = inMemoryData?.filter(item => {
        let itemLowerCase = item.title
          ? item.title.toLowerCase()
          : ''.toUpperCase();
        let searchTerm = text.toLowerCase();
        return itemLowerCase.includes(searchTerm);
      });
      console.log(filteredItem);
      setData(filteredItem);
      setTextSearch(text);
    } else {
      setData(inMemoryData);
      setTextSearch('');
    }
  };
  return (
    <SafeAreaView>
      <Container>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon color="black" />
          </TouchableOpacity>
          <BoldText style={{textAlign: 'center', width: '90%'}}>
            {categoryData.title}
          </BoldText>
        </View>
        <View style={{position: 'relative'}}>
          <Image
            style={{
              width: 26,
              height: 26,
              position: 'absolute',
              bottom: 26,
              left: 14,
              zIndex: 2,
            }}
            source={SearchIcon}
          />
          <StyledSearchInput
            value={textSearch}
            onChangeText={text => filterList(text)}
            placeholder="Search for services in sub-category"
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 200}}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SubCategoryScreen;
