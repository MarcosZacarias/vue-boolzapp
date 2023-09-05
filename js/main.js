var DateTime = luxon.DateTime;

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
      if (!lastMessage) {
        return "Nessun messaggio nella chat";
      } else {
        let lastMessageText = lastMessage.message;
        return lastMessageText;
      }
      // console.log(lastMessageText);
    },

    lastMessageTime(contact, index) {
      let lastMessage = contact.messages[contact.messages.length - 1];

      if (!lastMessage) {
        return "";
      } else {
        let lastMessageDate = lastMessage.date;
        let lastMessageTime = this.timeMessage(lastMessageDate);
        return lastMessageTime;
      }
    },

    sendNewMessage() {
      const newMessage = { ...this.newMessage };
      console.log(newMessage);

      newMessage.date = this.printTimeNow();

      this.contacts[this.activeChat].messages.push(newMessage);

      this.newMessage.message = "";

      setTimeout(this.autoMessage, 1000);
    },

    autoMessage() {
      if (this.sendNewMessage) {
        const autoMessage = { ...this.newMessage };
        autoMessage.message = "Ok";
        autoMessage.status = "received";

        autoMessage.date = this.printTimeNow();
        // console.log(autoMessage);
        this.contacts[this.activeChat].messages.push(autoMessage);
      }
    },

    timeMessage(date) {
      const msgDateTime = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss", {
        locale: "it-IT",
      });
      // console.log(msgDateTime);
      return msgDateTime.toLocaleString(DateTime.DATETIME_MED);
    },

    printTimeNow() {
      const dt = DateTime.now();
      const msgTime = dt.toFormat("dd/MM/yyyy HH:mm:ss");
      return msgTime;
    },

    filterChat() {
      console.log(this.searchChat);
      const nameFilter = this.searchChat.toLowerCase();
      console.log(nameFilter);

      for (const contact of this.contacts) {
        const nameContact = contact.name.toLowerCase();
        nameContact.includes(nameFilter)
          ? (contact.visible = true)
          : (contact.visible = false);
      }

      // this.searchChat = "";
    },

    deleteMessage(chat, index) {
      const messageEliminate = chat[index];
      chat.splice(index, 1);
    },
  },

  created() {},

  computed: {},
}).mount("#app");
