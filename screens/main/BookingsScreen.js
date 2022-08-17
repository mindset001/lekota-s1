import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  LightGreyText,
  MediumGreyText,
  RegularColoredText,
  SubCatCard,
  Fade,
} from '../../styles/styledUtils';
import {
  pendingAppointments,
  completedAppointments,
  cancelledAppointments,
} from '../../components/dummyData';
import Stars from '../../components/Stars';
import {colors} from '../../utils/assets';
import {Gradient} from '../../components/Icons';

const BookingsScreen = () => {
  const [pending, setPending] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const appointments = [
    {
      name: 'Pending',
      status: pending,
    },
    {
      name: 'Completed',
      status: completed,
    },
    {
      name: 'Cancelled',
      status: cancelled,
    },
  ];
  const handlePress = ({name}) => {
    switch (name) {
      case 'Pending':
        setPending(true);
        setCompleted(false);
        setCancelled(false);
        break;
      case 'Completed':
        setCompleted(true);
        setPending(false);
        setCancelled(false);
        break;
      default:
        setCancelled(true);
        setCompleted(false);
        setPending(false);
    }
  };
  const renderItem = ({item}) => {
    return (
      <SubCatCard style={{position: 'relative', height: 151}} key={item.id}>
        <View>
          <Image
            style={{
              height: '100%',
              width: 150,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
            source={item.coverImage}
          />
          <Fade>
            <Gradient />
          </Fade>
        </View>
        <View style={{alignSelf: 'flex-start', flex: 1, marginTop: 20}}>
          <RegularColoredText style={{fontSize: 25, color: colors.dark}}>
            {item.name}
          </RegularColoredText>
          <Stars style={{width: 15, height: 15}} rating={item.rating} />
        </View>
        <View
          style={{alignSelf: 'flex-start', marginTop: 20, paddingBottom: 20}}>
          <View style={{alignSelf: 'flex-end', flex: 1}}>
            <RegularColoredText style={{fontSize: 25, color: colors.dark}}>
              {item.jobs}
            </RegularColoredText>
            <LightGreyText style={{fontSize: 12, alignSelf: 'flex-end'}}>
              JOBS
            </LightGreyText>
          </View>
          <MediumGreyText>{`${item.reviews} Reviews`}</MediumGreyText>
        </View>
      </SubCatCard>
    );
  };
  return (
    <SafeAreaView style={{padding: 15}}>
      <View style={{marginTop: 50}}>
        <BoldText style={{fontSize: 25, marginBottom: 15}}>
          My appointments
        </BoldText>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {appointments.map((appointment, i) => {
            return (
              <TouchableOpacity
                onPress={() => handlePress(appointment)}
                key={i}>
                <MediumGreyText
                  style={
                    appointment.status ? styles.activeText : styles.regularText
                  }>
                  {appointment.name}
                </MediumGreyText>
                {appointment.status && <View style={styles.activeBar} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {pending && (
        <FlatList
          data={pendingAppointments}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 200}}
          showsVerticalScrollIndicator={false}
        />
      )}
      {completed && (
        <FlatList
          data={completedAppointments}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 200}}
          showsVerticalScrollIndicator={false}
        />
      )}
      {cancelled && (
        <FlatList
          data={cancelledAppointments}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 200}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeBar: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    width: 30,
    height: 4,
    alignSelf: 'center',
  },
  activeText: {
    color: colors.secondary,
    paddingBottom: 3,
    fontSize: 20,
  },
  regularText: {
    fontSize: 20,
  },
});

export default BookingsScreen;
