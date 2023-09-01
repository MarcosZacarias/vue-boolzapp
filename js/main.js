const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChat: 0,
    };
  },

  methods: {
    selectChat(index) {
      this.activeChat = index;
    },
  },

  created() {
    console.log(this.contacts);
  },
}).mount("#app");
