<template>
  <nav>
    <div class="nav-wrapper blue lighten-4">
      <router-link href="#" to="/" class="brand-logo black-text">Sublish</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <router-link
          v-for="link in linkItems"
          :key="link.title"
          active-class="active"
          tag="li"
          :exact="link.exact"
          :to="link.url"
        >
          <a href="#" class="black-text">{{link.title}}</a>
        </router-link>
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
            Имя
            <i class="material-icons right">person_pin</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ul class="sidenav" id="mobile-demo" ref="sidenav">
      <router-link v-for="link in linkItems" :key="link.title" tag="li" :to="link.url">
        <a href="#">{{link.title}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    dropdown: null,
    sidenav: null
  }),
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
      coverTrigger: false
    });
    this.sidenav = M.Sidenav.init(this.$refs.sidenav, {});
  },
  destroyed() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
    if (this.sidenav && this.sidenav.destroy) {
      this.sidenav.destroy();
    }
  },
  computed: {
    isUserAuthenticated() {
      this.$store.getters.isUserAuthenticated;
    },
    linkItems() {
      return this.isUserAuthenticated
        ? [
            { title: "Главная", url: "/", exact: true },
            { title: "Друзья", url: "/friends" },
            { title: "Сообщения", url: "/messages" },
            { title: "Список", url: "/list" }
          ]
        : [
            { title: "Главная", url: "/", exact: true },
            { title: "Список", url: "/list" },
            { title: "Войти", url: "/login" }
          ];
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  }
};
</script>
