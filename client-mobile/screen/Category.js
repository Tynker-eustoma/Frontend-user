import { Text, TouchableOpacity, View, Image } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Category (props) {

   const {level, title, bg} = props

   return (
      
      
      <TouchableOpacity
         onPress={() => {
            console.log('masuk')
         }}

         style={{
            flexDirection: "row", 
            backgroundColor: bg, 
            padding: 20, 
            marginHorizontal: 20, 
            borderRadius: 20, 
            alignItems: "center", 
            marginTop: 10
         }}
      >

         <Image
            style={{
               width: 50, 
               height: 50
            }}
            source={{uri: 'http://getdrawings.com/image/compass-circle-drawing-53.png'}}
         />


         <Text
            style={{
               color:"#345c74",
               fontWeight: "bold", 
               fontSize:17, 
               paddingHorizontal: 20, 
               width: 170
            }}
         >

            {title} level {level}

         </Text>


         <FontAwesome5 name="play-circle" size={35} color="#345c74"
            style={{
               marginLeft:40
            }}
         />

      </TouchableOpacity>
      
      )

}