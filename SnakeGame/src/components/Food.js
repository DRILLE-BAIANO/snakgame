import { Text,View} from "react-native";
import {BORDER, HEADER_HEIGHT, PIXEL} from "../const";

const foodemojis = [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🥑",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
];

const Food = ({ coords, top}) => {
    const ranDomFood = foodemojis[Math.floor(Math.random()* foodemojis.length)];
    const foodStyle = {
      width :PIXEL,
      height: PIXEL,
      top: coords.y * PIXEL + HEADER_HEIGHT + top,
      left: coords.x * PIXEL + BORDER,

    };
    return (
        <View style={[{ position: "absolute" }, foodStyle]}>
            <Text>{randDomFood}</Text>
        </View>
    );
}

export default Food