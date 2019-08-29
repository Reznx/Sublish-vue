<template>
  <div class="home">
    <div class="parallax-container">
      <div class="parallax" ref="parallax">
        <img src="../assets/images/starwars-home1.jpg" />
      </div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p
          class="grey-text text-darken-3 lighten-3"
        >Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/images/farcry5-home2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    parallax: null
  }),
  mounted() {
    this.parallax = M.Parallax.init(this.$refs.parallax, {});
  }
};
</script>
