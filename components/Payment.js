import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils/assets';
import {BoldText, MediumWhiteText, StyledButton, CustomSelect, MediumBlackText} from '../styles/styledUtils';
import {BackIcon, CardIcon, CashIcon} from './Icons';
import {Formik} from 'formik';
import * as yup from 'yup';
import Input from './Input';

const validationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required()
    .label('cardNumber')
    .min(14, 'Please enter a valid card number'),
  expiryDate: yup
    .string()
    .required()
    .label('expiryDate')
    .min(4, 'Please enter a valid date in this format MM/YY'),
  cvv: yup.string().required().label('cvv').min(3, 'Please enter a valid cvv'),
});


const Payment = ({navigation}) => {
    const optionsList = [
        {
            id: 1,
            name: "Cash",
            Icon: CashIcon
        },
        {
            id: 2,
            name: "Card",
            Icon: CardIcon
        },
    ]
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: colors.white, padding: 10}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 60,
          marginBottom: 40
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon color="black" />
        </TouchableOpacity>
        <BoldText style={{textAlign: 'center', width: '90%'}}>Payment</BoldText>
      </View>
      <View>
        {optionsList.map(({id, name, Icon})=>{
            return (
                <View style={{flexDirection: 'row', alignItems: "center", marginBottom: 10}} key={id}>
                    <CustomSelect />
                    <MediumBlackText style={{marginRight: 10, marginLeft: 10}}>{name}</MediumBlackText>
                    <Icon />
                </View>
            )
        })}
      </View>
      <Formik
        initialValues={{cardNumber: '', expiryDate: '', cvv: ''}}
        onSubmit={(values, actions) => {
          const person = values;
          Keyboard.dismiss();
        }}
        validationSchema={validationSchema}>
        {formikProps => (
          <View style={{marginBottom: 230}}>
            <Input
              formikKey="cardNumber"
              formikProps={formikProps}
              label="Card Number"
              value={formikProps.values.cardNumber}
            />
            <Input
              formikKey="expiryDate"
              label="Exp. Date"
              formikProps={formikProps}
              value={formikProps.values.expiryDate}
            />
            <Input
              label="CVV"
              formikProps={formikProps}
              formikKey="cvv"
              value={formikProps.values.cvv}
              secureTextEntry={true}
            />

            <StyledButton>
              <MediumWhiteText>Add Card</MediumWhiteText>
            </StyledButton>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Payment;
