// //start working on a custom modal

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableHighlight,
//   FlatList,
// } from "react-native";
// import { Icon } from "react-native-elements";
// import MapView from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import Modal from "react-native-modal";
// import colors from "../assets/styles/colors";
// import ListItem from "../components/CustomRowList";
// //import MapViewP from "./MapView";
// import openMap from "react-native-open-maps";
// //import Icon from "react-native-vector-icons/FontAwesome";
// import ActionSheet from "react-native-actionsheet";
// import ActionSheetModal from "./ActionSheetModal";
// import { TextInput } from "react-native-gesture-handler";
// import getBeaches from "../BeachDetails";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

// // This component is a customised modal, adapted to display the beach data when a beach is clicked
// const FavModal = (props) => {
//   let text = props.text;
//   //   let beachName = props.beachName;
//   //   let beachStatus = props.beachStatus;
//   //   let statusColour = props.statusColour;
//   //   let lifeguarded = props.lifeguarded;
//   //   let publicToilets = props.publicToilets;
//   //   let parkingAvailability = props.parkingAvailability;
//   //   let dogWalking = props.dogWalking;
//   //   let cycling = props.cycling;
//   //   let bbq = props.bbq;
//   //   let imagePath = props.imagePath;
//   //   let latitude = props.latitude;
//   //   let longitude = props.longitude;
//   //   let warningInfo = props.warningInfo;
//   //   let latitudeParking = props.latitudeParking;
//   //   let longitudeParking = props.longitudeParking;

//   function RowCardFavouriteAction(props) {
//     return (
//       <TouchableWithoutFeedback
//         onPress={props.onPress}
//         style={{
//           width: 100,
//           height: "100%",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <View>
//           <Icon name="star" type="font-awesome" size={30} color="gray"></Icon>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }

//   const ListItemSeperator = () => {
//     return <View style={{ width: "100%", height: 2 }} />;
//   };

//   const handleFavourite = (item) => {
//     // HERE I ALSO NEED TO CHECK IF A BEACH IS ALREADY ADDED TO THE LIST. IF NO, ADD, OTHERWISE ALERT SAYING BEACH ALREADY ADDED
//     let newFavBeach = beachData.filter((i) => i.id === item.id);
//     console.log(item.id);
//     console.log(favBeaches.filter((e) => e.id === item.id));

//     // if (favBeaches.filter((e) => e.id === item.id)) {
//     //   console.log("not found");
//     // } else {
//     //   console.log("found");
//     // }

//     let NewFavBeaches = favBeaches.concat(newFavBeach);
//     setFavBeaches(NewFavBeaches);
//     alert(`${item.beachName} added to favourites`);
//   };

//   return (
//     <Modal
//       isVisible={props.modalVisible}
//       onBackdropPress={props.closeModal}
//       onBackButtonPress={props.closeModal}
//       animationIn="fadeInUpBig"
//       animationOut="fadeOutUp"
//       useNativeDriver={true}
//       animationInTiming={500}
//       animationOutTiming={500}
//     >
//       {/* Main modal view */}
//       <View
//         style={{
//           maxHeight: "70%",
//           minHeight: "70%",
//           padding: 2,
//           marginBottom: 10,
//           backgroundColor: colors.lightgray,
//           //marginTop: 10,

//           borderRadius: 15,
//           justifyContent: "flex-start",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: "center",
//             fontWeight: "bold",
//             marginBottom: 10,
//             marginTop: 5,
//             width: "50%",
//           }}
//         >
//           Favourite beaches
//         </Text>
//         <FlatList
//           data={props.data}
//           keyExtractor={(item) => item.id}
//           ItemSeparatorComponent={ListItemSeperator}
//           //   refreshing={refreshing}
//           //   onRefresh={() => {
//           //     setBeachData(getBeaches);
//           //   }}
//           renderItem={({ item }) => (
//             <ListItem
//               articleNumber={item.id}
//               beachName={item.beachName}
//               beachStatus={item.beachStatus}
//               lifeguarded={item.lifeguarded}
//               publicToilets={item.publicToilets}
//               parkingAvailability={item.parkingAvailability}
//               dogWalking={item.dogWalking}
//               cycling={item.cycling}
//               bbq={item.bbq}
//               warningInfo={item.warningInfo}
//               imagePath={item.imagePath}
//               latitude={item.latitude}
//               longitude={item.longitude}
//               latitudeParking={item.latitudeParking}
//               longitudeParking={item.longitudeParking}

//               //   onPress={() => exampleOnPress()}
//               // renderRightActions={() => (
//               //   <RowCardFavouriteAction onPress={() => handleFavourite(item)} />
//               // )}
//             />
//           )}
//         />
//         <View style={{ width: "42%", backgroundColor: "pink" }}>
//           <Button title="CLOSE" onPress={props.closeModal}></Button>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default FavModal;
