<template>
  <div class="wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
export default {
  data:() => ({
    
  }),
  components: {
    Navbar
  }
};
</script>
