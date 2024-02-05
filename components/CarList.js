import React, { Component } from "react";
import { ScrollView } from 'react-native';

import List from './carlist.json';
import CarDetail from "./CarDetail";



class CarList extends Component {

    constructor() {
        super();

        this.state = { carList: [] };
    }


    componentDidMount() {
        this.setState({carList: List});
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return (
                <CarDetail key={brand.model[0].name} brand={brand} />
            );
        })
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default CarList;