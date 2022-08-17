import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

function getScreenDimensions() {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  return {
    width,
    height
  };
}

const useScreenDimensions = () => {
  const [screenDimension, setScreenDimension] = useState(getScreenDimensions())
  useEffect(()=>{
    setScreenDimension(getScreenDimensions())
  },[])
  
  return screenDimension;
};

export default useScreenDimensions;
