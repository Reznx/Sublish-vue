<template>
  <nav class="nav">
    <ul>
      <router-link v-for="link in links" :key="link.title" tag="li" :to="link.url">
        <a href="#">{{link.title}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Главная", url: "/" },
      { title: "Друзья", url: "/friends" },
      { title: "Сообщения", url: "/messages" },
      { title: "Список", url: "/list" }
    ]
  })
};
</script>
