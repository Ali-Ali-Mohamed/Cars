import React from "react";
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={props.buttonPress} style={buttonStyle}>
            <Text style={textStyle}>Show Now</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        paddingTop: 12,
        paddingBottom: 12,
    },

    buttonStyle: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#36454F",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "gainsboro",
        marginLeft: 80,
        marginRight: 80,
        alignItems: 'center'
    }
}

export default Button;