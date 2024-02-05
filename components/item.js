import React, { Component } from "react";
import { View, Text } from 'react-native';


const Item = props => {
    return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
    viewStyle: {
        borderWidth: 2,
        borderColor: "black",
        shadowColor: "black",
        shadowOffSet: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15
    }
};

export default Item;