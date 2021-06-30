import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
  const obstaclesWidth = 60;
  const obstaclesHeight = 300;
  const gap = 200;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0 ) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId);
      }
    }
  }, [birdBottom]);
  console.log(birdBottom);

  //start first obstacles
  useEffect(() => {
    if (obstaclesLeft > - obstaclesWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesLeftTimerId)
      }
    } else {
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight( - Math.random() * 100)
    }
  }, [obstaclesLeft])

//start second obstacles
useEffect(() => {
  if (obstaclesLeftTwo > - obstaclesWidth) {
    obstaclesLeftTimerIdTwo = setInterval(() => {
      setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
    }, 30)
    return () => {
      clearInterval(obstaclesLeftTimerIdTwo)
    }
  } else {
    setObstaclesLeftTwo(screenWidth)
    setObstaclesNegHeightTwo( - Math.random() * 100)
  }
}, [obstaclesLeftTwo])




  return (
    <View style={styles.container}>
      <Bird 
      birdBottom={birdBottom}
      birdLeft={birdLeft}
      />
      <Obstacles
      color={'green'}
      obstaclesWidth={obstaclesWidth}
      obstaclesHeight={obstaclesHeight}
      randomBottom={obstaclesNegHeight}
      gap={gap}
      obstaclesLeft={obstaclesLeft}
      />
      <Obstacles
      color={'yellow'}
      obstaclesWidth={obstaclesWidth}
      obstaclesHeight={obstaclesHeight}
      randomBottom={obstaclesNegHeightTwo}
      gap={gap}
      obstaclesLeft={obstaclesLeftTwo}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
