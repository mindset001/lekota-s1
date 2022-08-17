import styled from 'styled-components';
import {fonts, colors} from '../utils/assets';

const StyledTextInput = styled.TextInput`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 50px;
  height: 60px;
  font-family: ${fonts.regular};
  color: #000;
  padding: 10px;
  padding-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledSearchInput = styled.TextInput`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 20px;
  height: 60px;
  font-family: ${fonts.regular};
  color: #000;
  padding: 10px;
  padding-left: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Container = styled.View`
  background-color: ${colors.bright};
  padding: 20px;
  padding-top: 50px;
`;

const BoldText = styled.Text`
  color: ${colors.dark};
  font-size: 22px;
  font-family: ${fonts.semiBold};
`;

const BoldGreyText = styled(BoldText)`
  font-size: 18px;
  opacity: 0.7;
`;

const ForwardSlash = styled.View`
  transform: translateY(20px) translateX(-37px) rotate(26deg);
  background-color: #c4c4c4;
  height: 143px;
  width: 10px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  height: 60px;
  opacity: ${props=>props.disabled ? .5 : 1};
  width: 100%;
  color: #ffffff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const GoogleButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 60px;
  width: 100%;
  color: #ffffff;
  border-radius: 50px;
  padding: 20px;
  margin-bottom: 20px;
`;
const WhiteButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  height: 60px;
  text-alingn: center;
  width: 100%;
  color: #ffffff;
  border-radius: 50px;
  border: 1px solid ${colors.lightGrey};
  padding: 20px;
  margin-bottom: 20px;
`;

const MediumWhiteText = styled.Text`
  color: #fff;
  font-family: ${fonts.medium};
  font-size: 17px;
`;

const MediumBlackText = styled.Text`
  color: ${colors.dark};
  font-family: ${fonts.medium};
  font-size: 17px;
`;

const MediumGreyText = styled(MediumBlackText)`
  font-size: 16px;
  color: ${colors.lightGrey};
`;

const LightGreyText = styled(MediumGreyText)`
  font-family: ${fonts.light};
`;

const SmallColoredText = styled.Text`
  color: ${colors.secondary};
  font-family: ${fonts.medium};
  font-size: 13px;
`;

const RegularColoredText = styled(SmallColoredText)`
  font-family: ${fonts.regular};
`;

const HelperText = styled.Text`
  color: ${colors.dark};
  font-family: ${fonts.light};
  font-size: 17px;
  margin-right: 5px;
`;

const LandingView = styled.View`
  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SubCatCard = styled.TouchableOpacity`
  background-color: ${colors.white};
  width: 100%;
  height: 130px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  margin-top: 30px;
  elevation: 3;
  padding-right: 20px;
`;

const StyledView = styled.View`
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  height: ${props => (props.height ? `${props.height}px` : '700px')}
  width: 100%;
`;

const TransparentBtn = styled.TouchableOpacity`
  height: 90px;
  width: 100%;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${colors.secondary};
  border-radius: 20px;
  position: relative;
  opacity: 0.5;
`;

const GreyRoundButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${colors.lightGrey};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const ProvCard = styled.TouchableOpacity`
  width: 200px;
  height: 220px;
  background-color: ${colors.white};
  elevation: 7;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  box-shadow: 10px 10px 10px ${colors.lightGrey};
`;

const CurvedEdges = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  border-radius: 20px;
  background-color: ${colors.white};
`;

const SuccessToast = styled.View`
  background-color: ${colors.lightGreen};
  padding: 20px;
  width: 100%;
  height: 75px;
  align-items: center;
`;

const ChatHeader = styled.View`
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.bright};
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: ${colors.white}
  height: 100px;
  flex-direction: row;
  z-index: 1;
  box-shadow: 10px 10px 10px ${colors.lightGrey};
  elevation: 10;
`;

const ChatFooter = styled.View`
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${colors.bright};
  padding: 10px;
  background-color: ${colors.white}
  height: 70px;
  flex-direction: row;
  box-shadow: 10px 10px 10px ${colors.lightGrey};
  elevation: 10;
  width: 100%;
`;

const ActiveStatus = styled.View`
  background-color: ${props =>
    props.status === 'active' ? colors.lightGreen : colors.darkGrey};
  border-radius: 50px;
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: 2px;
  right: 6px;
`;

const ChatInput = styled.TextInput`
  background-color: ${colors.white};
  margin-right: 10px;
  margin-left: 10px;
  font-family: ${fonts.regular};
  width: 74%;
  color: ${colors.dark};
`;

const Fade = styled.View`
  width: 30px;
  height: 100%;
  position: absolute;
  right: 60px;
`;

const ProfileInput = styled.TextInput`
  width: 100%;
  height: 50px;
  font-family: ${fonts.medium};
  border-radius: 13px;
  background-color: ${colors.white};
  padding: 10px;
  color: ${colors.lightGrey};
  margin-top: 10px;
  font-size: 15px;
`;

const CustomSelect = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: 2px; solid ${colors.dark};
    background-color: ${colors.white};
`;

const NotificationView = styled.TouchableOpacity`
    border: 1px solid ${colors.lightGrey};
    padding: 10px;
    opacity: ${props=> props.isRead ? '.5' : '1'};
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export {
  LandingView,
  HelperText,
  StyledTextInput,
  Container,
  BoldText,
  StyledButton,
  MediumWhiteText,
  MediumBlackText,
  SmallColoredText,
  MediumGreyText,
  BoldGreyText,
  GoogleButton,
  WhiteButton,
  StyledSearchInput,
  SubCatCard,
  ForwardSlash,
  StyledView,
  RegularColoredText,
  TransparentBtn,
  GreyRoundButton,
  LightGreyText,
  ProvCard,
  CurvedEdges,
  SuccessToast,
  ChatFooter,
  ChatHeader,
  ActiveStatus,
  ChatInput,
  Fade,
  ProfileInput,
  CustomSelect,
  NotificationView
};
