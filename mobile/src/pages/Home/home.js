import { Component } from "react";
import React from "react";
import { StyleSheet, View, Text } from 'react-native';


export default class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    render()
    {
        return(
            <View style={styles.container}>
                <Text>home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
});