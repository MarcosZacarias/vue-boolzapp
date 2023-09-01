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

    lastMessage(contact, index) {
      let lastMessage = contact.messages[contact.messages.length - 1];
      console.log(lastMessage);
      let lastMessageText = lastMessage.message;
      console.log(lastMessageText);
      return lastMessageText;
    },
  },

  created() {
    // console.log(this.contacts);
  },

  conputed() {
    this.lastMessage();
  },
}).mount("#app");
