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

    lastMessageTime(contact, index) {
      let lastMessage = contact.messages[contact.messages.length - 1];
      // console.log(lastMessage);
      let lastMessageDate = lastMessage.date;
      console.log(lastMessageDate);
      let lastMessageTime = this.timeMessage(lastMessageDate);
      return lastMessageTime;
    },

    sendNewMessage() {
      const newMessage = { ...this.newMessage };
      console.log(newMessage);

      const dateNow = new Date();
      console.log(dateNow);
      newMessage.date = this.timeMessage(dateNow);

      this.contacts[this.activeChat].messages.push(newMessage);

      this.newMessage.message = "";

      setTimeout(this.autoMessage, 1000);
    },

    autoMessage() {
      if (this.sendNewMessage) {
        const autoMessage = { ...this.newMessage };
        autoMessage.message = "Ok";
        autoMessage.status = "received";
        autoMessage.date = this.timeMessage(Date());
        console.log(autoMessage);
        this.contacts[this.activeChat].messages.push(autoMessage);
      }
    },

    timeMessage(date) {
      const d = new Date(date);
      console.log(d);

      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      let hour = d.getHours();
      let minutes = d.getMinutes();

      return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
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
