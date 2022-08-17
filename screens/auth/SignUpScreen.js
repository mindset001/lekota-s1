import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../../App';
import {
  Container,
  BoldText,
  StyledButton,
  MediumWhiteText,
  SmallColoredText,
  GoogleButton,
  WhiteButton,
  MediumBlackText,
  HelperText,
  CustomSelect,
} from '../../styles/styledUtils';
import Input from '../../components/Input';
import {BackIcon} from '../../components/Icons';
import {GoogleIcon, AppleIcon} from '../../assets/images/index';
import DismissKeyboard from '../../components/DismissKeyboard';
import {CashIcon, ColoredCard} from '../../components/Icons.js';
import {colors} from '../../utils/assets';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import {addAccessToken, addRefreshToken} from '../../features/user/userSlice';
import {BASE_URL, paths} from '../../config/index';
import axios from 'axios';
import {useDispatch} from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  fullName: yup.string().required().label('Full Name'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .label('Phone')
    .required(),
  email: yup.string().required().label('Email').email(),
  password: yup
    .string()
    .required()
    .label('Password')
    .min(8, 'Seems a bit short'),
  confirm_password: yup
    .string()
    .required()
    .label('Confirm Password')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

const SignUpScreen = ({navigation}) => {
  const {width, height} = useScreenDimensions();
  const dispatch = useDispatch()
  const [requestState, setRequestState] = useState({
    isFetching: false,
    errorMessage: ''
  })
  const optionsList = [
    {
      id: 1,
      name: 'Cash',
      Icon: CashIcon,
    },
    {
      id: 2,
      name: 'Card',
      Icon: ColoredCard,
    },
  ];

  const handleSubmit = async person => {
    setRequestState({...requestState, isFetching: true})
    try {
      const response = await axios.post(
        `${BASE_URL}/${paths.signUp}`,
        person,
      );
      console.log(response.data);
      if (response.status === 200) {
        dispatch(addAccessToken(response.data.access));
        dispatch(addRefreshToken(response.data.refresh));
        setRequestState({...requestState, isFetching: false})
      }
      setRequestState({...requestState, isFetching: false})
    } catch (err) {
      console.log(err.message);
      setRequestState({...requestState, isFetching: false, errorMessage: err.message})
      setTimeout(()=>setRequestState({...requestState, errorMessage: ''}), 3000)
    }
  };

  return (
    <DismissKeyboard>
      <ScrollView
        contentContainerStyle={{
          height: height * 1.2,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon color="black" />
          </TouchableOpacity>
          <BoldText
            style={{textAlign: 'center', marginBottom: 30, width: '90%'}}>
            Sign Up
          </BoldText>
        </View>
        <Formik
          initialValues={{
            fullName: '',
            phone: '',
            email: '',
            password: '',
            confirm_password: '',
          }}
          onSubmit={(values, actions) => {
            const person = {
              email: values.email,
              password: values.password,
              re_password: values.confirm_password,
              is_client: true,
              is_serviceProvider: false,
              phone_number: values.phone,
              username: values.fullName,
              
            };
            handleSubmit(person);
          }}
          validationSchema={validationSchema}>
          {formikProps => (
            <View style={{marginBottom: 11}}>
              <Input
                formikKey="fullName"
                formikProps={formikProps}
                label="Full Name"
                value={formikProps.values.fullName}
              />

              <Input
                formikKey="email"
                formikProps={formikProps}
                label="Email address"
                keyboardType="email-address"
                value={formikProps.values.email}
              />
              <Input
                formikKey="phone"
                formikProps={formikProps}
                label="Phone Number"
                keyboardType="phone-pad"
                value={formikProps.values.phone}
              />
              <Input
                label="Password"
                formikProps={formikProps}
                formikKey="password"
                value={formikProps.values.password}
                secureTextEntry={true}
              />
              <Input
                label="Confirm Password"
                formikProps={formikProps}
                formikKey="confirm_password"
                value={formikProps.values.confirm_password}
                secureTextEntry={true}
              />
              <MediumBlackText>Payment method:</MediumBlackText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                {optionsList.map(({id, name, Icon}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 10,
                        backgroundColor: colors.white,
                        width: '48%',
                        height: 60,
                        borderRadius: 30,
                        justifyContent: 'center',
                      }}
                      key={id}>
                      <CustomSelect />
                      <MediumBlackText
                        style={{marginRight: 10, marginLeft: 10}}>
                        {name}
                      </MediumBlackText>
                      <Icon />
                    </View>
                  );
                })}
              </View>
              {requestState.errorMessage !== '' && <MediumBlackText style={{textAlign: 'center', fontSize: 13, color: 'red'}}>{requestState.errorMessage}</MediumBlackText>}
              <StyledButton style={{flexDirection: "row"}} disabled={requestState.isFetching} onPress={formikProps.handleSubmit}>
                <MediumWhiteText>Create Account</MediumWhiteText>
                {requestState.isFetching && <ActivityIndicator size={"small"} color={"white"} />}
              </StyledButton>
            </View>
          )}
        </Formik>

        <View>
          <GoogleButton style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20}}
              source={GoogleIcon}
              alt="googleIcon"
            />
            <MediumWhiteText style={{textAlign: 'center', width: '90%'}}>
              Sign Up with Google
            </MediumWhiteText>
          </GoogleButton>

          <WhiteButton style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20}}
              source={AppleIcon}
              alt="appleIcon"
            />
            <MediumBlackText style={{textAlign: 'center', width: '90%'}}>
              Sign Up with Apple
            </MediumBlackText>
          </WhiteButton>
          <View
            style={{
              textAlign: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <HelperText>Already have an account?</HelperText>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <SmallColoredText style={{fontSize: 17}}>Login</SmallColoredText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </DismissKeyboard>
  );
};

export default SignUpScreen;
