import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { shuffle } from "../utils";

//import components
import Loading from "../components/Loading";
import Title from "../components/Title";

//import lib
import CardFlip from "react-native-card-flip";

const width = Dimensions.get("window").width;

let Game = ({ navigation }) => {
  const [actualPlayer, setActualPlayer] = useState(0);
  const [players, setPlayers] = useState(navigation.getParam("players"));
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let arrCard = [];
    const nbUnkownCard = navigation.getParam("nbUnkown");
    const nbCard = navigation.getParam("nbCard");
    const nbEmptyCard = nbCard - 2 - nbUnkownCard;

    for (let i = 0; i < nbEmptyCard; i++) {
      arrCard.push({ id: i, statut: null, find: false });
    }
    arrCard.push({ id: arrCard.length, statut: "malus", find: false });
    arrCard.push({ id: arrCard.length, statut: "bonus", find: false });

    for (let i = 0; i < nbUnkownCard; i++) {
      let random = Math.floor(Math.random() * Math.floor(nbCard));
      if (randomExists(random, arrCard)) {
        i--;
      } else {
        arrCard.push({ id: arrCard.length, statut: random, find: false });
      }
    }

    setCards(shuffle(arrCard));
  }, []);

  function randomExists(random, arrCard) {
    return arrCard.some(function(el) {
      return el.statut === random;
    });
  }

  function _displayCardGame() {
    const card = cards.map(item => {
      return (
        <CardFlip
          style={{
            width: width - 260,
            height: width - 230,
            justifyContent: "center",
            alignItems: "center"
          }}
          key={item.id}
          ref={card => (item = card)}
        >
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => item.flip()}
          >
            <Text>Try me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <Text>{item.statut}</Text>
          </TouchableOpacity>
        </CardFlip>
      );
    });
    return card;
  }
  if (cards.length !== 0) {
    return (
      <View>
        <Title text={players[actualPlayer].point} />
        <Title text={players[actualPlayer].value} />
        <View style={styles.containerCard}>{_displayCardGame()}</View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

const styles = StyleSheet.create({
  containerCard: {
    width,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  cardContainer: {
    width: width - 280,
    height: width - 260,
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Game;
