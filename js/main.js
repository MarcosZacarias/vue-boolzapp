const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
    };
  },

  methods: {},

  created() {
    console.log(this.contacts);
  },
}).mount("#app");
