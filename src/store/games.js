export default {
  state: {
    games: [
      {
        id: "123sasd123",
        title: "World of Warcraft",
        description:
          "Учим английский по игре World of Warcraft. Инсты, подземелья, итемы, квесты, NPC и другое.",
        imageId: require("../assets/images/wow/wow-bg.jpg")
      },
      {
        id: "123sdf123",
        title: "PUBG",
        description:
          "Учим английский по игре Playerunknown's battlegrounds. Оружие, итемы, локации",
        imageId: require("../assets/images/pubg/pubg-bg.jpg")
      },
      {
        id: "1231hjkg23",
        title: "Dota 2",
        description:
          "Учим английский по игре Dota 2. Итемы, герои, фразы, NPC и другое.",

        imageId: require("../assets/images/dota2/dota2-bg.jpg")
      },
      {
        id: "1231hjkgsd23",
        title: "Counter Strike Global Offensive",
        description:
          "Учим английский по игре CS GO. Итемы, фразы, карты, описание и другое.",
        imageId: require("../assets/images/csgo/csgo-bg.jpg")
      }
    ]
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload;
    }
  },
  getters: {
    getGames: state => state.games
  }
};
