// This file contains all the data about each beach

const beaches = [
  {
    id: "0",
    beachName: "Alum Chine",
    beachStatus: "Low congestion",
    latitude: "50.711087",
    longitude: "-1.895755",
    latitudeParking: "50.714850",
    longitudeParking: "-1.890675",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/alumn_chine.png"),
  },
  {
    id: "1",
    beachName: "Avon Beach",
    beachStatus: "Status not available",
    latitude: "50.731404",
    longitude: "-1.731441",
    latitudeParking: "50.728744",
    longitudeParking: "-1.734910",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "67",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/avon.png"),
  },
  {
    id: "2",
    beachName: "Boscombe Beach East",
    latitude: "50.719996",
    longitude: "-1.841179",
    latitudeParking: "50.720522",
    longitudeParking: "-1.842338",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "No",
    cycling: "No",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/boscombe_east.png"),
  },
  {
    id: "3",
    beachName: "Boscombe Beach West",
    latitude: "50.719702",
    longitude: "-1.845608",
    latitudeParking: "50.720522",
    longitudeParking: "-1.842338",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "43",
    dogWalking: "No",
    cycling: "No",
    warningInfo: "",
    bbq: "Permitted in the designated area only",
    imagePath: require("./assets/beaches/boscombe_west.png"),
  },
  {
    id: "4",
    beachName: "Bournemouth Beach East",
    latitude: "50.716826",
    longitude: "-1.870989",
    latitudeParking: "50.717070",
    longitudeParking: "-1.873347",
    beachStatus: "Avoid",
    lifeguarded: "Yes",
    publicToilets: "Yes",
    parkingAvailability: "23",
    dogWalking: "No",
    cycling: "No",
    warningInfo: "",
    bbq: "Permitted in the designated area only",
    imagePath: require("./assets/beaches/bournemouth_east.png"),
  },
  {
    id: "5",
    beachName: "Bournemouth Beach West",
    latitude: "50.715330",
    longitude: "-1.878462",
    latitudeParking: "50.717687",
    longitudeParking: "-1.881558",
    beachStatus: "Avoid",
    lifeguarded: "Yes",
    publicToilets: "Yes",
    parkingAvailability: "26",
    dogWalking: "No",
    cycling: "No",
    warningInfo: "",
    bbq: "Only allowed after 6pm",
    imagePath: require("./assets/beaches/bournemouth_west.png"),
  },
  {
    id: "6",
    beachName: "Branksome Chine",
    latitude: "-1.909293",
    longitude: "-1.909293",
    latitudeParking: "50.706591",
    longitudeParking: "-1.909510",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "56",
    dogWalking: "Yes",
    cycling: "Yes",
    warningInfo: "",
    bbq: "Only allowed after 6pm",
    imagePath: require("./assets/beaches/branksome_chine.png"),
  },
  {
    id: "7",
    beachName: "Branksome Dene Chine",
    latitude: "50.708673",
    longitude: "-1.903423",
    latitudeParking: "50.709793",
    longitudeParking: "-1.903231",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "57",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/branksome_dene_chine.png"),
  },
  {
    id: "8",
    beachName: "Canford Cliffs",
    latitude: "50.701117",
    longitude: "-1.920114",
    latitudeParking: "50.706095",
    longitudeParking: "-1.914312",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo:
      "Cliff stabilisation works are taking place in this area. There may be limited access along the promenade at times.",
    imagePath: require("./assets/beaches/canford_cliffs.png"),
  },
  {
    id: "9",
    beachName: "Durley Chine",
    latitude: "50.713280",
    longitude: "-1.889044",
    latitudeParking: "50.714763",
    longitudeParking: "-1.890673",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "66",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/durley_chine.png"),
  },
  {
    id: "10",
    beachName: "East Cliff",
    latitude: "50.717650",
    longitude: "-1.865269",
    latitudeParking: "50.721464",
    longitudeParking: "-1.864163",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/east_cliff.png"),
  },
  {
    id: "11",
    beachName: "Fishermans Walk",
    latitude: "50.720874",
    longitude: "-1.817272",
    latitudeParking: "50.721915",
    longitudeParking: "-1.819807",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "No",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/fishermans_walk.png"),
  },
  {
    id: "12",
    beachName: "Flaghead Chine",
    latitude: "50.697792",
    longitude: "-1.925335",
    latitudeParking: "50.694871",
    longitudeParking: "-1.931001",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/flaghead_chine.png"),
  },
  {
    id: "13",
    beachName: "Friar's Cliff",
    latitude: "50.733391",
    longitude: "-1.727219",
    latitudeParking: "50.734420",
    longitudeParking: "-1.730390",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "50",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "No",
    warningInfo: "",
    imagePath: require("./assets/beaches/friars_cliff.png"),
  },
  {
    id: "14",
    beachName: "Highcliffe Beach",
    latitude: "50.737042",
    longitude: "-1.695842",
    latitudeParking: "50.738285",
    longitudeParking: "-1.696174",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "90",
    dogWalking: "Yes",
    cycling: "No",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/highcliffe.png"),
  },
  {
    id: "15",
    beachName: "Highcliffe Castle",
    latitude: "50.735906",
    longitude: "-1.715519",
    latitudeParking: "50.737106",
    longitudeParking: "-1.714311",
    beachStatus: "Avoid",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "20",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Permitted in the designated area only",
    warningInfo: "",
    imagePath: require("./assets/beaches/highcliffe_castle.png"),
  },
  {
    id: "16",
    beachName: "Manor Steps",
    latitude: "50.720507",
    longitude: "-1.833951",
    latitudeParking: "50.721605",
    longitudeParking: "-1.832190",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/manor_steps.png"),
  },
  {
    id: "17",
    beachName: "Middle Chine",
    latitude: "50.712306",
    longitude: "-1.892246",
    latitudeParking: "50.714138",
    longitudeParking: "-1.890524",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/middle_chine.png"),
  },
  {
    id: "18",
    beachName: "Mudeford Quay",
    latitude: "50.726982",
    longitude: "-1.736977",
    latitudeParking: "50.725055",
    longitudeParking: "-1.740131",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "70",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "No",
    warningInfo: "",
    imagePath: require("./assets/beaches/mudeford_quay.png"),
  },
  {
    id: "19",
    beachName: "Mudeford Sandspit",
    latitude: "50.716286",
    longitude: "-1.745449",
    latitudeParking: "50.719319",
    longitudeParking: "-1.770699",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "80",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/mudeford_sandspit.png"),
  },
  {
    id: "20",
    beachName: "Sandbanks",
    latitude: "50.688716",
    longitude: "-1.937773",
    latitudeParking: "50.688782",
    longitudeParking: "-1.939079",
    beachStatus: "Avoid",
    lifeguarded: "Yes",
    publicToilets: "Yes",
    parkingAvailability: "40",
    dogWalking: "No",
    cycling: "No",
    bbq: "Permitted in the designated area only",
    warningInfo: "",
    imagePath: require("./assets/beaches/sandbanks.png"),
  },
  {
    id: "21",
    beachName: "Shore Road",
    latitude: "50.698326",
    longitude: "-1.933059",
    latitudeParking: "50.688782",
    longitudeParking: "-1.939079",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "No parking at this beach",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Only allowed after 6pm",
    warningInfo: "",
    imagePath: require("./assets/beaches/shore_road.png"),
  },
  {
    id: "22",
    beachName: "Solent Beach",
    latitude: "50.717803",
    longitude: "-1.778109",
    latitudeParking: "50.719029",
    longitudeParking: "-1.777900",
    beachStatus: "Congested, stay alert",
    lifeguarded: "No",
    publicToilets: "No",
    parkingAvailability: "80",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "No",
    warningInfo: "",
    imagePath: require("./assets/beaches/solent.png"),
  },
  {
    id: "23",
    beachName: "Southbourne Beach",
    latitude: "50.719227",
    longitude: "-1.793017",
    latitudeParking: "50.719846",
    longitudeParking: "-1.794108",
    beachStatus: "Low congestion",
    lifeguarded: "No",
    publicToilets: "Yes",
    parkingAvailability: "20",
    dogWalking: "Yes",
    cycling: "Yes",
    bbq: "Permitted in the designated area only",
    warningInfo: "",
    imagePath: require("./assets/beaches/southbourne.png"),
  },
];

const getBeaches = () => {
  return beaches;
};

export default getBeaches;
