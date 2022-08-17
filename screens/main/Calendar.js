import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BoldText,
  LightGreyText,
  MediumBlackText,
  MediumGreyText,
} from '../../styles/styledUtils';
import {ArrowForward, BackIcon, ArrowBack} from '../../components/Icons';
import {Calendar as Calen, CalendarList, Agenda} from 'react-native-calendars';
import {colors, fonts} from '../../utils/assets';

const Calendar = ({navigation}) => {
  const [dateData, setDateData] = useState('');
  const monthList = ['Jan'];
  const d = new Date();
  return (
    <SafeAreaView style={{height: '100%', padding: 10}}>
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
          Make a Schedule
        </BoldText>
      </View>
      <MediumBlackText
        style={{fontSize: 20, alignSelf: 'center', marginBottom: 30}}>
        Choose a Date
      </MediumBlackText>
      <Calen
        markingType={'custom'}
        // markedDates={date => {
        //   date: {
        //     marked: true;
        //   }
        // }}
        // Initially visible month. Default = now
        // current={d.toLocaleDateString()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={d.toLocaleString()}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={direction =>
          direction === 'left' ? (
              <ArrowBack style={{position: 'absolute', left: 300}} color={colors.dark} />
          ) : (
            <ArrowForward color={colors.dark} />
          )
        }
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={false}
        // Replace default month and year title with custom one. the function receive a date as parameter

        // renderHeader={date => {
        //   const d = new Date(date)
        //   console.log(d.getDate())
        //   return <MediumBlackText>{date.month}</MediumBlackText>;
        // }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        // dayComponent={({date, state}) => {
        //   console.log(date, state);
        //   return (
        //     <TouchableOpacity
        //       style={{
        //         backgroundColor: colors.primary,
        //         borderRadius: 50,
        //         height: 40,
        //         width: 40,
        //         alignItems: 'center'
        //       }}>
        //       <MediumBlackText
        //         style={{
        //           textAlign: 'center',
        //           fontSize: 24,
        //           color: state === 'disabled' ? 'gray' : 'black',
        //         }}>
        //         {date.day}
        //       </MediumBlackText>
        //     </TouchableOpacity>
        //   );
        // }}
        style={{borderRadius: 20, height: 350}}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: colors.dark,
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#000000',
          indicatorColor: 'blue',
          textDayFontFamily: fonts.medium,
          textMonthFontFamily: fonts.medium,
          textDayHeaderFontFamily: fonts.medium,
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
          textMonthPosition: 'absolute',
        }}
      />
    </SafeAreaView>
  );
};

export default Calendar;
