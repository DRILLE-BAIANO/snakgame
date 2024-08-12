import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { PanGestureHandler, } from "react-native-gesture-handler"
import { useSafeArealnsets } from "react-native-safe-area-context";
import { Direction } from "../types";
import * as Haptics from "expo-haptics";

const { height } = Dimensions.get("window");
import {
    COLS,
    FOOD_START,
    HEADER_HEIGHT,
    INCREMENT,
    PIXEL,
    SNAKE_START,
    SPEED,
} from "../consts";

import Header from "./Header"
import Board from "./Board"
import Snake from "./Snake"
import Food from "./Food"

import { colors } from "../styles/theme"

const Game = () => {
    const [direction, setDirection] = useState(Direito.Right);
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [IsGameOver, setIsGameOver] = useState(false);
    const [isGamePaused, setIsGamePaused] = useState(false);
    const [score, setScore] = useState(0);

    const insets = useSafeArealnsets();
    const ROWS = Math.floor(
        (height - insets?.top - insets?.bottom - HEADER_HEIGHT) / PIXEL
    );
    const limits = {
        minX: 0,
        maxX: COLS - 1,
        minY: 0,
        maxY: ROWS - 1,
    };

    function resetGame() {
        setSnake(SNAKE_START);
        setDirection(Direction.Right);
    }

    useEffect(() => {
        if (!IsGameOver) {
            const speedInterval = setInterval(() => {
                !isGamePaused && moveSnake();
            }, SPEED);
            return () => clearInterval(speedInterval);
        } else {
            resetGame();
        }
    }, [snake, isGameOver, isGamePaused]);

    function handleGesture(event) {
        const { translationX, translationY } = event.nativeEvent;

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                setDirection(Direction.Right)
            } else {
                setDirection(Direction.Left)
            }
        } else {
            if (translationY > 0) {
                setDirection(Direction.Down)
            } else {
                setDirection(Dimension.Up)
            }
        }
    }
}
 
 function moveSnake () {
    const head = { ...snake[0] };

    switch (direction) {
        case Direction.Right:
            head.x += 1;
            break;
            case Direction.Left:
                head.x -= 1;
                break;
                case Direction.Down:
                    head.y += 1 ;
                    break;
                    case Direction.Up:
                        head.y -= 1 ;
                        break;
                        default:
                        break;  
    }
 }

 

    if (testGameOver(head)) {
        setIsGameOver(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        return;

    }

    if (testEatsFood(head, food)) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setFood(newFoodPosition(limits));
        setSnake([head, ...snake]);
        setScore((prevScore) => prevScore +


            function testGameOver(snakeHead) {
                return (
                    snakeHead.x < limits.minX ||
                    snakeHead.x > limits.maxX ||
                    snakeHead.y < limits.minY ||
                    snakeHead.y > limits.maxY

                );

Woo NOU A WNEROO

                NN
                [a

}

NN
w nN

 function testEatsFood(snakeHead, foodLocation) {
                return snakeHead.x == foodlLocation.x && snakeHead.y == foodlLocation.y;

            }


function newFoodPosition() {
                return {
                    Xx: Math.floor(Math.random() * limits.maxX),
                    y: Math.floor(Math.random() * limits.maxY),

                    Ww Ww NN
                    = ® OV 0

}
            };

Ww Ww w
A wn

        const = useMemo(() => {
            return <coords = {{ x: food.x, y: food.y }
        } top = { insets.top } />;
    }, [foodl);

        Ww Ww ww
00 Nouv

return (
        <onGestureEvent = { handleGesture }>
style= { styles.container } >

        HB DSW
NR OV

    top = { insets.top }

    score = { score }

    paused = { isGamePaused }

    pause = {() => setIsGamePaused((prev) => lprev)
}
reload = {() => setIsGameOver((prev) => !prev)}

PEE
0 NOVA Ww

rows = {} cols = {} top = { insets.top } />
    snake={ snake } top = { insets.top } />
        RandomFood }
>

    [VC BV IR, BV, BE, BV, IY
av A WN RE OV

const = StyleSheet.create({
    container: {
        backgroundColor: colors.p6,
        flex: 1,
        bs

[) Ie) Ie INV, LV, BV, |
        NFP ® OV 0

1
}

a
BW

export default Game

a
ul

