import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

let Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 80;
    const birdHeight = 60;

    const styles = StyleSheet.create({
        birdimage: {
            position: 'absolute',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2),
        }
    })

    return (
        <Image source={require('../assets/birdimage.png')} style={styles.birdimage}>

        </Image>  
    )
}



export default Bird;