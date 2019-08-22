<template>
  <div class="empty">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Navbar from "@/components/app/Navbar";

export default {
  components: {
    Header,
    Navbar
  }
};
</script>
