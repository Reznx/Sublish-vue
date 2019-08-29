<template>
  <div class="row">
    <div class="input-field col s12">
      <input id="text" type="text" v-model="searchField" />
      <label for="text">Поиск</label>
    </div>

    <div class="col s12 m12" v-for="game in filteredGames" :key="game.id">
      <div class="card">
        <div class="card-image">
          <img :src="game.imageId" />
          <span class="card-title">{{game.title}}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">play_arrow</i>
          </a>
        </div>
        <div class="card-content">
          <p>{{game.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchField: null
  }),
  computed: {
    games() {
      return this.$store.getters.getGames;
    },
    filteredGames() {
      let games = this.games;
      if (this.searchField)
        games = games.filter(
          g =>
            g.title.toLowerCase().indexOf(this.searchField.toLowerCase()) >=
              0 ||
            g.description
              .toLowerCase()
              .indexOf(this.searchField.toLowerCase()) >= 0
        );
      return games;
    }
  }
};
</script>
