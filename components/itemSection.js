import React, { Component } from "react";
import { View, Text } from 'react-native';

const ItemSection = props => {
    return <View style={styles.viewStyle}>{props.children}</View>
}

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
};

export default ItemSection;