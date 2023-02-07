import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getGame, updateLevel } from "../../../store/actions/actionCreator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


const Guessing = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const game = useSelector((state) => state.games.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(30));
  }, []);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSpeakOption = () => {
    // code to play audio for the selected option
  };

  console.log(game)

  const submit = () => {
    if (selectedOption == game.answer) {
      console.log("benar");
      const update = async () => {
        try {
          const access_token = await AsyncStorage.getItem("access_token");
          dispatch(updateLevel(game.CategoryId, access_token));
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Congrats! this is dialog box success',
            button: 'close',
          })
        } catch (error) {
          console.log(error);
        }
      };
      update();
    } else {
      console.log("salah");
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/Guessing.jpg")}
      style={styles.container}
    >
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{game.question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === game.optionA ? styles.selectedOption : styles.option,
          ]}
          onPress={() => handleSelectOption(game.optionA)}
        >
          <Image
            source={{ uri: game.optionA }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === game.optionB ? styles.selectedOption : styles.option,
          ]}
          onPress={() => handleSelectOption(game.optionB)}
        >
          <Image
            source={{ uri: game.optionB }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>B</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === game.optionC ? styles.selectedOption : styles.option,
          ]}
          onPress={() => handleSelectOption(game.optionC)}
        >
          <Image
            source={{ uri: game.optionC }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === game.optionD ? styles.selectedOption : styles.option,
          ]}
          onPress={() => handleSelectOption(game.optionD)}
        >
          <Image
            source={{ uri: game.optionD }}
            style={{ width: "100%", height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.optionText}>D</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          onPress={() => {
            submit();
          }}
        >
          <Text style={styles.submit}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.speakerContainer}>
        <TouchableOpacity
          style={styles.speakerButton}
          onPress={handleSpeakOption}
        >
          <Image
            source={{
              uri: "https://media2.giphy.com/media/PBMzWRByLMFNLY1qfS/giphy.gif?cid=6c09b952155a08df80cc5b5eb0c322bdd7b288c12f9a740c&rid=giphy.gif&ct=s",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    position: "absolute",
    top: 100,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginVertical: 20,
  },
  option: {
    width: "45%",
    height: 150,
    backgroundColor: `transparent`,
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedOption: {
    backgroundColor: "rgba(52, 52, 52, 0.4)",
    opacity: "",
    borderRadius: 20,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: "#87CEEB",
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  submit: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  speakerContainer: {
    position: "absolute",
    bottom: 50,
  },
  speakerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  speakerText: {
    fontSize: 20,
  },
};

export default Guessing;
