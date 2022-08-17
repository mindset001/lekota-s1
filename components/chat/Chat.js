import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useRef, useMemo, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  ChatFooter,
  ChatHeader,
  LightGreyText,
  ActiveStatus,
  ChatInput,
} from '../../styles/styledUtils';
import {colors} from '../../utils/assets';
import {BackIcon, Cancel, Phone} from '../Icons';
import {
  CallIcon,
  MessageIcon,
  RecordIcon,
  FileIcon,
  EmojiIcon,
} from '../../assets/images';
import BottomSheet from '@gorhom/bottom-sheet';

const screenHeight = Dimensions.get('screen').height;

const Chat = ({
  navigation,
  route: {
    params: {data: data},
  },
}) => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%'], []);
  //callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => setShow(false)}>
      <SafeAreaView
        style={{
          position: 'relative',
          height: '100%',
          backgroundColor: colors.bright,
        }}>
        <ChatHeader>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon color={colors.dark} />
            </TouchableOpacity>
            <View style={{position: 'relative'}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginLeft: 15,
                  marginRight: 5,
                }}
                source={data.imageUrl}
              />
              <ActiveStatus status="active" />
            </View>
            <View>
              <BoldText style={{color: colors.darkSecondary}}>
                {data.name}
              </BoldText>
              <LightGreyText style={{color: colors.darkSecondary}}>
                Online
              </LightGreyText>
            </View>
          </View>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Image style={{width: 30, height: 30}} source={CallIcon} />
          </TouchableOpacity>
        </ChatHeader>
        <View style={{height: screenHeight, paddingHorizontal: 10}}>
          <Text>Hi</Text>
        </View>
        <ChatFooter>
          <TouchableOpacity>
            <Image style={{width: 25, height: 25}} source={EmojiIcon} />
          </TouchableOpacity>
          <ChatInput
            value={message}
            onChangeText={text => setMessage(text)}
            placeholder="Write a message..."
            multiline={true}
          />
          <TouchableOpacity>
            <Image style={{width: 25, height: 25}} source={FileIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            {message ? (
              <View
                style={{
                  backgroundColor: colors.lightSecondary,
                  borderRadius: 50,
                  height: 30,
                  width: 30,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image style={{width: 20, height: 20}} source={MessageIcon} />
              </View>
            ) : (
              <Image style={{width: 30, height: 30}} source={RecordIcon} />
            )}
          </TouchableOpacity>
        </ChatFooter>
        {
          show && (

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{display: 'none'}}
          style={{zIndex: 1, padding: 10}}>
          <View style={{flexDirection: "row"}}>
            <BoldText style={{fontSize: 25, flex: 1}}>Contact Options</BoldText>
            <TouchableOpacity onPress={()=>setShow(false)}>
              <Cancel color={colors.primary} size={20} />
            </TouchableOpacity>
          </View>
          <LightGreyText style={{fontSize: 17, marginBottom: 10}}>Carrier rates may apply</LightGreyText>
          <View>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginBottom: 9}} onPress={() => {
              navigation.navigate('Call', {data})
              setShow(false)
              }}>
              <Phone size={24} />
              <BoldText style={{fontSize: 20}}>Call service provider in-app</BoldText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setShow(false)} style={{flexDirection: "row", alignItems: "center"}}>
              <Phone size={24} />
              <BoldText style={{fontSize: 20}}>Call service provider by phone</BoldText>
            </TouchableOpacity>
          </View>
        </BottomSheet>
          )
        }
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
