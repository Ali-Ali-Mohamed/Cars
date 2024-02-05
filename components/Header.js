// import libraries
import React from "react";
import { Text, View } from 'react-native';

// create component
const Header = props => {
    const { textStyling, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyling}>{props.title}</Text>
      </View>
    );
};

const styles = {
  textStyling: {
    fontSize: 50,
    color: 'yellow',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },

  viewStyle: {
    backgroundColor: 'black',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0
  }
};

// make component avaibalbe to other components
export default Header;