import React from 'react';
import { Image } from 'react-native';

const Obstacles = ({ obstaclesLeft, obstaclesWidth, obstaclesHeight, gap, randomBottom}) => {

    return (
        <>
        <Image source={require('../assets/pipe.png')} style={{
                position: 'absolute',
                width: obstaclesWidth,
                height: obstaclesHeight - randomBottom,
                left: obstaclesLeft,
                bottom: randomBottom + obstaclesHeight + gap,
            }}></Image>

            <Image source={require('../assets/pipe.png')} style={{
                position: 'absolute',
                width: obstaclesWidth,
                height: obstaclesHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
                transform: 'rotate(180deg)',
            }}
            />
        </>
    )
}


export default Obstacles;