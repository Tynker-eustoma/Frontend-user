import {StyleSheet, Text, View, Dimensions, TextInput, Pressable} from 'react-native'
import backround from '../assets/login-background.jpg'
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg'
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming} from 'react-native-reanimated'

const {height, width} = Dimensions.get('window')
function LoginRegister(){

   const imagePosition = useSharedValue(1)

   const imageAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [-height/2, 0])
      return {
         transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
      }
   })

   const buttonAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0,1], [250, 0])
      return {
         opacity: withTiming(imagePosition.value, {duration: 500})
      }
   })

   const loginHandler = () => {
      imagePosition.value = 0
   }

   const registerHandler = () => {
      imagePosition.value = 0
   }

   return (
      <View style={styles.container}>

         <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
            <Svg height={height + 100} width={width}>
               <ClipPath id="clipPathId">
                  <Ellipse cx={width/2} rx={height} ry={height + 100}/>
               </ClipPath>
               <Image 
               href={backround} 
               width={width + 100} 
               height={height + 100}
               preserveAspectRatio="xMidYMid slice"
               clipPath='url(#clipPathId)'
               />
            </Svg>

            <View style={styles.closeButtonContainer}>
               <Text>X</Text>
            </View>

         </Animated.View>

         <View style={styles.bottomContainer}>

            <Animated.View style={buttonAnimatedStyle}>
               <Pressable style={styles.button} onPress={loginHandler}>
                  <Text style={styles.buttonText}>LOG IN</Text>
               </Pressable>
            </Animated.View>
            <Animated.View style={buttonAnimatedStyle}>
               <Pressable style={styles.button} onPress={registerHandler}>
                  <Text style={styles.buttonText}>REGISTER</Text>
               </Pressable>
            </Animated.View>

            {/* <View style={styles.formInputContainer}>

               <TextInput placeholder='Username' placeholderTextColor="black" style={styles.textInput}/>
               <TextInput placeholder='Email' placeholderTextColor="black" style={styles.textInput}/>
               <TextInput placeholder='Password' placeholderTextColor="black" style={styles.textInput}/>

               <View style={styles.formButton}>

                  <Text style={styles.buttonText}>LOG IN</Text>

               </View>

            </View> */}

         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-end'
   },
   button: {
      backgroundColor: 'rgba(123,104,238,0.8)',
      height: 55,
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 35, 
      marginHorizontal: 20, 
      marginVertical: 10,
      borderWidth: 1, 
      borderColor: 'white'
   }, 
   buttonText: {
      fontSize: 20, 
      fontWeight: '600', 
      color: 'white', 
      letterSpacing: 0.5
   }, 
   bottomContainer: {
      justifyContent: 'center', 
      height: height / 3
   },
   textInput: {
      height: 50, 
      borderWidth: 1, 
      borderColor: 'rgba(0, 0, 0, 0.2)',
      marginHorizontal: 20,
      marginLeft: 10,
      borderRadius: 25, 
      paddingLeft: 10, 
      marginBottom: 6
   }, 
   formButton: {
      backgroundColor: 'rgba(123,104,238,0.8)',
      height: 55,
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 35, 
      marginHorizontal: 20, 
      marginVertical: 10,
      borderWidth: 1, 
      borderColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
         width: 0, 
         height: 4,
      },
      shadowOpacity: 0.25, 
      shadowRadius: 3.84, 
      elevation: 5
   },
   formInputContainer: {
      marginBottom: 70
   },
   closeButtonContainer: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27, 
      elevation: 1,
      borderColor: 'white',
      alignItems: 'center',
      borderRadius: 20,
      top: -20
   }
});

export default LoginRegister