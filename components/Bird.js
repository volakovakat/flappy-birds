import React from 'react';
import { View } from 'react-native';

let Bird = ({birdBottom, birdLeft}) => {
    let birdWidth = 50;
    let birdHeight = 60;

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2),
        }}/>
    )
   
}

export default Bird;