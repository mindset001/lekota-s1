import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { StarCheckIcon, StarUnCheckIcon } from '../assets/images';


const Stars = ({rating, ...rest}) => {
    const [max, setMax] = useState([1, 2, 3, 4, 5]);
    return (
      <View style={{flexDirection: 'row'}}>
        {max.map((num, i) => {
          return (
            <Image
              key={i}
              style={{width: 24, height: 22, padding: 10}}
              source={num <= rating ? StarCheckIcon : StarUnCheckIcon}
              {...rest}
            />
          );
        })}
      </View>
    );
  };

export default Stars