import { StyleSheet, Text, View, FlatList, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getUser } from '../stores/actions/actionCreator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Games = ({ navigation, route }) => {
  const categories = useSelector((state) => state.categories.categories)
  const allState = useSelector((state) => state)
  const theAnimations = [ "fadeIn", "fadeInUp", "fadeInDown", "fadeInDownBig", "fadeInUpBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight",  "fadeInRightBig", "flipInX", "flipInY", "slideInDown", "slideInUp", "slideInLeft", "slideInRight", "zoomIn", "zoomInDown", "zoomInUp", "zoomInLeft", "zoomInRight"]
  const animation = theAnimations[Math.floor(Math.random() * theAnimations.length)]
  const dispatch = useDispatch()
  const theCategories = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token")
      dispatch(getCategories(access_token))
      dispatch(getUser(access_token))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    theCategories()
  }, [])
  console.log(allState)
  const renderItem = ({ item, index }) => {
    return (
      <Animatable.View
        animation={animation}
        duration={1000}
        delay={index * 300}
      >
        <View style={styles.listContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri: 'https://media.tenor.com/akBy6qWGjs4AAAAi/peach-cat-mochi-peach-cat.gif'}} style={styles.image} />
          </View>
          <Text style={styles.nameText}>{item.name}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Ini games ", index)
              navigation.navigate('games', {CategoryId: item.id, name:item.name}) //Insert Category ID games as route
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
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    width: Dimensions.get('window').width,
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
