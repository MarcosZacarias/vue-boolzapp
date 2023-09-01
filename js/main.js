const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChat: 0,
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
    };
  },

  methods: {
    selectChat(index) {
      this.activeChat = index;
    },

    lastMessage(contact, index) {
      let lastMessage = contact.messages[contact.messages.length - 1];
      // console.log(lastMessage);
      let lastMessageText = lastMessage.message;
      // console.log(lastMessageText);
      return lastMessageText;
    },

    sendNewMessage() {
      const newMessage = { ...this.newMessage };
      console.log(newMessage);
      this.contacts[this.activeChat].messages.push(newMessage);

      this.newMessage.message = "";
    },
  },

  created() {
    // console.log(this.contacts);
  },

  conputed() {
    this.lastMessage();
  },
}).mount("#app");
