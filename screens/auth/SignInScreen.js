import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
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
} from '../../styles/styledUtils';
import Input from '../../components/Input';
import {GoogleIcon, AppleIcon} from '../../assets/images/index';
import DismissKeyboard from '../../components/DismissKeyboard';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import {addAccessToken, addRefreshToken} from '../../features/user/userSlice';
import {BASE_URL, paths} from '../../config/index';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {Formik} from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
  email: yup.string().required().label('Email').email(),
  password: yup
    .string()
    .required()
    .label('Password')
    .min(8, 'Seems a bit short'),
});

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [requestState, setRequestState] = useState({
    isFetching: false,
    errorMessage: '',
  });
  const handleSubmit = async person => {
    setRequestState({...requestState, isFetching: true});
    try {
      const response = await axios.post(`${BASE_URL}/${paths.login}`, person);

      console.log(response.data);
      if (response.status === 200) {
        dispatch(addAccessToken(response.data.access));
        dispatch(addRefreshToken(response.data.refresh));
        setRequestState({...requestState, isFetching: false});
      }
      setRequestState({...requestState, isFetching: false});
    } catch (err) {
      console.log(err.message);
      setRequestState({
        ...requestState,
        isFetching: false,
        errorMessage: err.message,
      });
      setTimeout(
        () => setRequestState({...requestState, errorMessage: ''}),
        3000,
      );
    }
  };
  const {width, height} = useScreenDimensions();
  return (
    <DismissKeyboard>
      <ScrollView
        contentContainerStyle={{
          height: height * 1.2,
        }}>
        <Container>
          <BoldText style={{textAlign: 'center', marginBottom: 30}}>
            Login
          </BoldText>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, actions) => {
              const person = {
                email: values.email,
                password: values.password,
              };

              handleSubmit(person);
            }}
            validationSchema={validationSchema}>
            {formikProps => (
              <View style={{marginBottom: 230}}>
                <Input
                  formikKey="email"
                  formikProps={formikProps}
                  label="Email address"
                  keyboardType="email-address"
                  value={formikProps.values.email}
                />
                <Input
                  label="Password"
                  formikProps={formikProps}
                  formikKey="password"
                  value={formikProps.values.password}
                  secureTextEntry={true}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 16,
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  <View style={{flex: 1}}>
                    <SmallColoredText>Remember me</SmallColoredText>
                  </View>
                  <TouchableOpacity>
                    <SmallColoredText>Forgot Password?</SmallColoredText>
                  </TouchableOpacity>
                </View>
                {requestState.errorMessage !== '' && (
                  <MediumBlackText
                    style={{textAlign: 'center', fontSize: 13, color: 'red'}}>
                    {requestState.errorMessage}
                  </MediumBlackText>
                )}
                <StyledButton
                  style={{flexDirection: 'row'}}
                  disabled={requestState.isFetching}
                  onPress={formikProps.handleSubmit}>
                  <MediumWhiteText>Login</MediumWhiteText>
                  {requestState.isFetching && (
                    <ActivityIndicator size={'small'} color={'white'} />
                  )}
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
                Login with Google
              </MediumWhiteText>
            </GoogleButton>

            <WhiteButton style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 20, height: 20}}
                source={AppleIcon}
                alt="appleIcon"
              />
              <MediumBlackText style={{textAlign: 'center', width: '90%'}}>
                Login with Apple
              </MediumBlackText>
            </WhiteButton>
            <View
              style={{
                textAlign: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HelperText>Don't have an account?</HelperText>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <SmallColoredText style={{fontSize: 17}}>
                  Sign Up
                </SmallColoredText>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ScrollView>
    </DismissKeyboard>
  );
};

export default SignInScreen;
