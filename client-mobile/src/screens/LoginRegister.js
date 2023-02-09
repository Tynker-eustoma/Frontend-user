import {StyleSheet, Text, View, Dimensions, TextInput, Pressable} from 'react-native'
import backround from '../assets/login-background.jpg'
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg'
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring, log} from 'react-native-reanimated'
import React, {useState} from 'react'
import { login, register } from '../stores/actions/actionCreator'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SyncStorage from 'sync-storage';
import { useNavigation } from '@react-navigation/native'

const {height, width} = Dimensions.get('window')

function LoginRegister(){

   const navigation = useNavigation()
   const imagePosition = useSharedValue(1)
   const formButtonScale = useSharedValue(1)

   const [isRegistering, setIsregistering] = useState(false)

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const imageAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [-height/2, 0])
      return {
         transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
      }
   })

   const buttonAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0,1], [250, 0])
      return {
         opacity: withTiming(imagePosition.value, {duration: 500}),
         transform: [{translateY: withTiming(interpolation, {duration: 1000})}]
      }
   })

   const closeButtonContainerStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0,1], [180, 360])
      return {
         opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}), 
         transform: [{rotate: withTiming(interpolation + "deg", {duration: 1000})}]
      }
   })

   const formAnimatedStyle = useAnimatedStyle(() => {
      return  {
         opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300})
      }
   })

   const formButtonAnimatedStyle = useAnimatedStyle(() => {
      return {
         transform: [{scale: formButtonScale.value}]
      }
   })

   const loginPushHandler = async(email, password) =>{

      try{
   
         const result = await login({email, password})

         await AsyncStorage.setItem('access_token', result.access_token)

         navigation.replace('categories')
         console.log('nyampe')

      } catch(error){
         console.log(error, "Error bang!");
      }
      
   }

   const registerPushHandler = () => {
      
      register({username, email, password, age: 7})
      
   }

   const reset = () => {
      // setUsername('')
      // setEmail('')
      // setPassword('')
   }

   const loginHandler = () => {
      imagePosition.value = 0
      setIsregistering(false)
   }

   const registerHandler = () => {
      imagePosition.value = 0
      setIsregistering(true)
   }

   return (
      <Animated.View style={styles.container}>

         <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle, styles.imageBackroud]}>
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

            <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
               <Text onPress={() =>{
                  reset()
                  imagePosition.value = 1
               }} >X</Text>
            </Animated.View>

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

            {/* Register */}
            {
               isRegistering &&

               <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>

                  <TextInput placeholder='Username' placeholderTextColor="black" style={styles.textInput} onChangeText={setUsername} name='username'/>
                  <TextInput placeholder='Email' placeholderTextColor="black" style={styles.textInput} onChangeText={setEmail} name='email'/>
                  <TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor="black" style={styles.textInput} onChangeText={setPassword} name='password'/>

                  <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                     <Pressable onPress={()=> {
                        formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))
                        registerPushHandler()
                     }}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                     </Pressable>
                  </Animated.View>

               </Animated.View>
            }

            {/* Login */}
            {
               !isRegistering &&

               <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>

                  <TextInput placeholder='Email' placeholderTextColor="black" style={styles.textInput} onChangeText={setEmail} name='email'/>
                  <TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor="black" style={styles.textInput} onChangeText={setPassword} name='password'/>
               
                  <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                     <Pressable onPress={()=>{
                        loginPushHandler(email, password)
                        formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))
                     }}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                     </Pressable>
                  </Animated.View>

               </Animated.View>
            }

            

         </View>

      </Animated.View>
   )
}

const styles = StyleSheet.create({
   imageBackroud: {
      zIndex: -14
   },
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
      borderColor: 'white',
      
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
      marginBottom: 6, 
      backgroundColor: 'white'
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
      marginBottom: 70,
      ...StyleSheet.absoluteFill,
      justifyContent: 'center',
      zIndex:-11,
   },
   closeButtonContainer: {
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 20,
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27, 
      elevation: 1,
      alignItems: 'center',
      top: -5
   }
});

export default LoginRegister