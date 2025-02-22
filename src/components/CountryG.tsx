// src/components/Country.tsx

import React, { useRef } from 'react';
import { PanResponder } from 'react-native';
import { G } from 'react-native-svg';

interface CountryProps {
  id: string;
  children: React.ReactNode;
  fill?: string;
  handleCountryClick: (id: string) => void;
}

const CountryG: React.FC<CountryProps> = ({
  id,
  children,
  fill,
  handleCountryClick,
}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        handleCountryClick(id);
      },
    })
  ).current;

  return (
    <G id={id} {...panResponder.panHandlers} fill={fill}>
      {children}
    </G>
  );
};

export default CountryG;
