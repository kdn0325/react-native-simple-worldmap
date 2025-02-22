// src/components/CountryPath.tsx

import React, { useRef } from 'react';
import { PanResponder } from 'react-native';
import { Path } from 'react-native-svg';

interface CountryPathProps {
  id: string;
  d: string;
  fill?: string;
  handleCountryClick: (id: string) => void;
}

const CountryPath: React.FC<CountryPathProps> = ({
  id,
  d,
  fill,
  handleCountryClick,
}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        handleCountryClick(id);
      },
    })
  ).current;

  return <Path d={d} fill={fill} {...panResponder.panHandlers} />;
};

export default CountryPath;
