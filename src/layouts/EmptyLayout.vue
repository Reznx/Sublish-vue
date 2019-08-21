<template>
  <div class="empty">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
