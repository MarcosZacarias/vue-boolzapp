const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChat: 0,
      searchChat: "",
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

      newMessage.date = this.timeNow();
      this.contacts[this.activeChat].messages.push(newMessage);

      this.newMessage.message = "";

      setTimeout(this.autoMessage, 1000);

      const timeString = this.contacts[0].messages[0].date;
      console.log(timeString);
    },

    autoMessage() {
      if (this.sendNewMessage) {
        const autoMessage = { ...this.newMessage };
        autoMessage.message = "Ok";
        autoMessage.status = "received";
        autoMessage.date = this.timeNow();
        console.log(autoMessage);
        this.contacts[this.activeChat].messages.push(autoMessage);
      }
    },

    timeNow() {
      const d = new Date();
      let hour = d.getHours();
      let minutes = d.getMinutes();
      return hour + ":" + minutes;
    },

    filterChat() {
      console.log(this.searchChat);
      const nameFilter =
        this.searchChat.charAt(0).toUpperCase() + this.searchChat.slice(1);

      // console.log(nameFilter);
      for (const contact of this.contacts) {
        console.log(contact);
        if (!contact.name.includes(nameFilter)) {
          contact.visible = false;
          console.log(contact.visible);
          console.log("Ciao");
        }
      }
    },
  },

  created() {
    // console.log(this.contacts);
    // console.log(this.contacts[0].message[0].date);
  },

  conputed() {
    this.lastMessage();
    this.autoMessage();
  },
}).mount("#app");
