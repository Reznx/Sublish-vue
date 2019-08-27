<template>
  <div class="row">
    <div class="col s12 m6" >
      <div class="card" v-for="game in games" :key="game.id">
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
  computed: {
    games() {
      return this.$store.getters.getGames;
    }
  }
};
</script>
