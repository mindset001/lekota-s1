import { View, Text, Image } from 'react-native'
import React from 'react'
import { LandingView } from '../../styles/styledUtils'
import { Logo } from '../../assets/images'

const Landing = () => {
  return (
    <LandingView>
        <Image style={{width: 170, height: 90}} source={Logo} />
    </LandingView>
  )
}

export default Landing