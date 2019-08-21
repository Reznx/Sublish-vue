<template>
  <div class="wrapper">
    <Header />
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
export default {
  components: {
    Header,
    Navbar,
    Footer
  }
};
</script>
