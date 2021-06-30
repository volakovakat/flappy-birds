import React from 'react';
import { View } from 'react-native';

const Obstacles = ({obstaclesLeft, obstaclesWidth, obstaclesHeight, gap}) => {

    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: 0 + obstaclesHeight + gap,
            }} />

            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: 0,
            }}
            />
        </>
    )
}


export default Obstacles;