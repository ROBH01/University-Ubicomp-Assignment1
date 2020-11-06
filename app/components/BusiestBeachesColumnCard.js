import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import colors from "../assets/styles/colors";

const ColumnCard = (props) => {
  let beachName = props.beachName;
  let imagePath = props.imagePath;

  return (
    <View style={styles.headlineCard}>
      <TouchableHighlight activeOpacity={0.8} underlayColor="#DDD">
        <View>
          <Image
            source={imagePath}
            style={{
              height: 220,
              width: 250,
              alignSelf: "center",
              borderRadius: 15,
              marginLeft: 5,
            }}
          />
          <View
            style={{
              flexDirection: "column",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.headline}>{beachName}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    paddingBottom: 3,
    backgroundColor: colors.redTextStatus,
    borderRadius: 10,
    width: "80%",
    textAlign: "center",
  },
  headlineCard: {
    height: 200,
    marginRight: 10,
    marginTop: 5,
  },
});

export default ColumnCard;
