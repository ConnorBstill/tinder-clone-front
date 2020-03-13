import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { Icon } from 'react-native-elements';

const ActionButton = ({ style, bigButton, iconName, iconType, iconColor, iconSize }) => {

  return (
    <TouchableHighlight style={[style, styles.containerStyle, bigButton ? styles.bigButtonStyle : styles.smallButtonStyle]}>
      <Icon
        name={iconName}
        type={iconType}
        color={iconColor}
        size={bigButton ? 45 : 25} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 75,
    borderWidth: 10,
    borderColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigButtonStyle: {
    width: 112,
    height: 112
  },
  smallButtonStyle: {
    width: 80,
    height: 80
  }
});

export { ActionButton }
