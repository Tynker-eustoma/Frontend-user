import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import image from "../assets/Image-quiz.jpg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Speech from "expo-speech";
import Voice from "@react-native-voice/voice";
import { getGame, updateLevel } from "../stores/actions/actionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";

function QuizSection({ navigation, route }) {
  // const [choice, setChoice] = useState('A')
  const { id } = route.params;

  const dispatch = useDispatch();

  const game = useSelector((state) => state.games.game);

  const theGame = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      dispatch(getGame(id, access_token, game.lvl));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    theGame();
  }, []);
  console.log(game);

  if (!game) {
    return <Text>Loading bang........</Text>;
  }

  const speak = () => {
    // console.log('masuk')
    const thingToSay =
      "Sebutkan bahasa inggris dari angka satu, sebutkan 2 kali ya";
    Speech.speak(thingToSay);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const submit = () => {
    if (selectedOption == game.answer) {
      //harusnya update level
      console.log("benar");
      const update = async () => {
        try {
          const access_token = await AsyncStorage.getItem("access_token");

          dispatch(
            updateLevel(game.CategoryId, access_token, game.lvl + 1)
          ).then((data) => navigation.replace("Quiz Section", { id: id + 1 }));
        } catch (error) {
          console.log(error);
        }
      };

      update();
    } else {
      Alert.alert("Jawaban salah", "Ulangi sekali lagi", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log("salah");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContaint}>
        <Image source={{ uri: game.imgUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContaint}>
        <Text style={styles.textLevel}>Level {game.lvl}</Text>
        <Text style={styles.question}>{game.question}</Text>
        <TouchableHighlight style={styles.speakerButton} onPress={speak}>
          <Image
            source={{
              uri: "https://media2.giphy.com/media/PBMzWRByLMFNLY1qfS/giphy.gif?cid=6c09b952155a08df80cc5b5eb0c322bdd7b288c12f9a740c&rid=giphy.gif&ct=s",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === game.optionA
                ? styles.buttonPress
                : styles.button,
            ]}
            onPress={() => handleSelectOption(game.optionA)}
          >
            <Text style={styles.textChoice}>{game.optionA}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === game.optionB
                ? styles.buttonPress
                : styles.button,
            ]}
            onPress={() => handleSelectOption(game.optionB)}
          >
            <Text style={styles.textChoice}>{game.optionB}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === game.optionC
                ? styles.buttonPress
                : styles.button,
            ]}
            onPress={() => handleSelectOption(game.optionC)}
          >
            <Text style={styles.textChoice}>{game.optionC}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedOption === game.optionD
                ? styles.buttonPress
                : styles.button,
            ]}
            onPress={() => handleSelectOption(game.optionD)}
          >
            <Text style={styles.textChoice}>{game.optionD}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonSubmitContainer}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => {
              submit();
            }}
          >
            <Text style={styles.textButtonSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContaint: {
    flex: 0.4,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch",
  },
  contentContaint: {
    flex: 0.7,
    alignItems: "center",
  },
  textLevel: {
   fontSize: 21,
   fontWeight: "bold",
   color: "#757573",
   marginTop: 10
  },
  question: {
    fontSize: 21,
    marginVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 5,
    color: "#757573",
    height: "15%",
  },
  speakerButton: {
    position: "absolute",
    top: 110,
  },
  button: {
    width: "42%",
    height: "47%",
    padding: 5,
    backgroundColor: "rgba(123,104,238,0.8)",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPress: {
    width: "42%",
    height: "47%",
    padding: 5,
    backgroundColor: "#EBC7E6",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "100%",
    height: "45%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSubmitContainer: {
    height: "25%",
    backgroundColor: "white",
    width: "100%",
  },
  buttonSubmit: {
    width: "47%",
    height: "47%",
    padding: 5,
    backgroundColor: "#332FD0",
    marginHorizontal: 5,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonSubmit: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  textChoice: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
});

export default QuizSection;
