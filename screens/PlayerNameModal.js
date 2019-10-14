import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";

const width = Math.round(Dimensions.get("window").width);

let PlayerName = ({ nbPlayer, navigation, nbUnkown, nbCard }) => {
  const [onePlayer, setOnePlayer] = useState("");
  const [players, setPlayers] = useState([]);
  let [iSet, setI] = useState(0);
  let arrInput = [];
  let [goToPlay, setGoToPlay] = useState(false);
  console.log(nbUnkown, nbCard, players);

  _renderInput = () => {
    for (i = 0; i < nbPlayer; i++) arrInput.push(i);
  };

  _goToPlay = () => {
    if (players.length === nbPlayer - 1) {
      setGoToPlay(true);
    }
  };

  _pressBtnOk = value => {
    setPlayers([...players, { value, point: 0 }]);
    _goToPlay();
    setI(iSet + 1);
  };

  _renderInput();

  return (
    <View style={styles.container}>
      <Title text="Player Name" />

      {arrInput.map(idx => {
        return (
          <View key={idx}>
            <Text>Name Player {idx + 1}</Text>
            <View style={styles.containerRow}>
              <Input
                width={width - 160}
                setValue={setOnePlayer}
                disable={idx === iSet ? true : false}
              />
              <TouchableOpacity
                style={idx === iSet ? styles.btnOk : styles.disableBtn}
                onPress={() => {
                  iSet === idx ? _pressBtnOk(onePlayer) : null;
                }}
              >
                <Text style={styles.text}>OK ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      <Button
        goTo={goToPlay}
        text="Ready to play"
        onPress={() => {
          goToPlay
            ? navigation.navigate("Game", {
                nbCard: nbCard,
                nbUnkown: nbUnkown,
                players: players
              })
            : null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  btnOk: {
    backgroundColor: "#1BA8F0",
    padding: 5,
    width: 60
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  disableInput: {
    borderColor: "#C3C3C3"
  },
  disableBtn: {
    backgroundColor: "#C3C3C3",
    padding: 5,
    width: 60
  }
});

export default PlayerName;
