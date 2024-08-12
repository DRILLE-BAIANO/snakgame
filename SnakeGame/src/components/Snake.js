import { Animated} from "react-native";
import { Coordinate } from "../types";
import { colors } from "../styles/theme";
import {
    BORDER,
    BORDER_RADIUS,
    GAP,
    HEADER_HEIGHT,
    PIXEL,
    SPEED,
} from "../consts";

const Snake = ({ snake,top}) => {
   return(
    <>
    {snake.map ((node,index) => {
     const nodeStyle ={
        width: PIXEL,
        height:PIXEL,
        bordeWidth: GAP,
        borderColor:colors.p6,
        borderRadius: BORDER_RADIUS,
        top: node.y * PIXEL + top + HEADER_HEIGHT,
        left: node.y * PIXEL + BORDER ,
        backgroudColor: index === 0 ? 99 : 1,
     }; 
      return (  
        <Animated.View
        style={[{  position: "absolute"}, nodeStyle]}
       key={index}
       />
      );
      })}
      </>
   )
}

export default Snake