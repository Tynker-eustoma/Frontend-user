import {
   Text,
   View,
   Image,
   Dimensions
 } from "react-native";

export default function Loading () {

   return(
      <View
         style={{
            backgroundColor: '#FFF',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 15
         }}
      >
         <Image
            source={{uri: 'https://media.tenor.com/HLcwNOIAbXEAAAAi/samifying-cheers.gif'}}
            style={{
               width: 130,
               height: 130,
            }}
         />
         <Text
            style={{
               fontSize: 30,
               color:'grey',
               fontWeight: 'bold',
               marginVertical: 20
            }}
         >
            Loading.....
         </Text>

      </View>
   )

}