import React from "react";
import { AppRegistry, View } from 'react-native';

import Header from "./components/Header.js";
import CarList from "./components/CarList.js";

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header title={"Available Cars"} />
            <CarList />
        </View>
    );
    
};

AppRegistry.registerComponent("Cars", () => App);