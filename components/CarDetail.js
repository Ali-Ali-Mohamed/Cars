import React from "react";
import { View, Text, Image, Linking } from 'react-native';

import Item from './item';
import ItemSection from "./itemSection";
import Button from "./Button";

const CarDetail = ({ brand }) => {
    const { headerContainer, headerText, imageStyle, headerText2 } = styles;

    return (
        <Item>
            <ItemSection>
                <View style={headerContainer}>
                    <Text style={headerText2}>Brand:</Text>
                    <Text style={headerText}>{brand.brand}</Text>
                    <Text style={headerText2}>Name:</Text>
                    <Text style={headerText}>{brand.model[0].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={imageStyle} source={{ uri: brand.model[0].image }} />
            </ItemSection>
            <ItemSection>
                <Button
                    buttonPress={ () => {
                        Linking.openURL(brand.model[0].url);
                    }}
                />
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    headerText: {
        textTransform: 'uppercase',
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold',
        paddingLeft: 20
    },

    headerText2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10
    },

    imageStyle: {
        height: 200,
        flex: 1,
    }
}

export default CarDetail;