import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Dimensions, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGames } from '../../stores/actions/actionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Games = ({ navigation, route }) => {
  const games = useSelector((state) => state.games.games)
  const {CategoryId, name} = route.params
  const theAnimations = [ "fadeIn", "fadeInUp", "fadeInDown", "fadeInDownBig", "fadeInUpBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "flipInX", "flipInY", "slideInDown", "slideInUp", "slideInLeft", "slideInRight", "zoomIn", "zoomInDown", "zoomInUp", "zoomInLeft", "zoomInRight" ]
  console.log(CategoryId)

  const animation = theAnimations[Math.floor(Math.random() * theAnimations.length)]
  const dispatch = useDispatch()
  const theGames = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token")
      dispatch(getGames(CategoryId, access_token))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    theGames()
  }, [])

  console.log(games)


  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
        <View style={[styles.listContainer,]}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.imgUrl}} style={styles.image} />
          </View>
          <Text style={styles.nameText}>{item.question}</Text>
          <Text style={styles.priceText}>{item.lvl}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              if (item.CategoryId == 1){
                navigation.navigate('Quiz Section', {id: item.id}) //Insert Category ID games as route
              } else if (item.CategoryId == 2){
                navigation.navigate('Guessing', {id: item.id}) //Insert Category ID games as route
              } else if (item.CategoryId == 3){
                navigation.navigate('learning', {id: item.id}) //Insert Category ID games as route
              }
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Play!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Animatable.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello</Text> */}
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>{name}</Text>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: undefined, aspectRatio: 1 },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#62513E',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
