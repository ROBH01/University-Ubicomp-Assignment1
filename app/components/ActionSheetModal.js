import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import ActionSheet from "react-native-action-sheet";

const ActionSheetModal = () => {
  var BUTTONSandroid = ["Option 0", "Option 1", "Option 2"];

  var CANCEL_INDEX = 4;
  var DESTRUCTIVE_INDEX = 3;

  return (
    <View>
      <Text
        onPress={() =>
          ActionSheet.showActionSheetWithOptions({
            options: BUTTONSandroid,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            tintColor: "blue",
          })
        }
      >
        Open ActionSheet
      </Text>
    </View>
  );
};

export default ActionSheetModal;
