import React from "react";
import ChatBot, { ChatBotProvider } from "react-chatbotify";
import { useChatWindow } from "react-chatbotify";

const MyNestedComponent = () => {
  const { toggleChatWindow } = useChatWindow();

  return (
    <button
     // style={{ border: "thin", height: "30px", width: "100px" }}
      onClick={toggleChatWindow}
    ></button>
  );
};

const Chatbotify = () => {
  const flow = {
    start: {
      message:
        "👋 Welcome to Dusforty! I’m your real estate assistant. What's your name?",
      path: "question",
    },
    question: {
      message: (params) => `What would you like to know, ${params.userInput}?`,
      options: [
        "services",
        "list property?",
        "fees",
        "Search by location?",
        "Contact owners or agents?",
      ],
      path: "answers",
    },

    answers: {
      message: (params) => {
        switch (params.userInput) {
          case "services":
            return "Dusforty helps you buy, sell, and rent properties across Nepal. We also connect you with verified agents and provide property listings.";
          case "list property?":
            return "You can create an account, log in, and use the ‘List Property’ option to add details, photos, and pricing.";
          case "fees":
            return "Listing properties is free for basic use. Premium features or ads may have charges.";
          case "Search by location?":
            return "Yes! You can filter properties by city, district, or even neighborhood to find the right place.";
          case "Contact owners or agents?":
            return "Each property listing includes the contact details of the owner or agent. You can directly call or send a message.";

          default:
            return "Sorry, I didn’t get that. Please choose a question from the options.";
        }
      },
      options: [
        "services",
        "list property?",
        "fees",
        "Search by location?",
        "Contact owners or agents?",
        "Exit",
      ],
      path: (params) => (params.userInput === "Exit" ? "end" : "answers"),
    },

    end: {
      message:
        "👍 Thanks for visiting Dusforty! Come back anytime if you need help with properties in Nepal.",
      chatDisabled: true,
    },
  };
  const settings = {
    general: {
      primaryColor: "#42b0c5",
      secondaryColor: "#491d8d",
      fontFamily: "Arial, sans-serif",
      //embedded: true,
    },
    audio: {
      disabled: false,
    },

    chatHistory: {
      storageKey: "conversations_summary",
    },
    fileAttachment: {
      disabled: true,
    },
    header: {
      title: "Dusforty",
    },
    footer: {
      text: "Dusforty Chat Assistant",
    },
  };

  const styles = {
    footerStyle: {
      // Your footer styles here
      background: "linear-gradient(135deg, #42b0c5, #491d8d)",
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: "1rem",
      //padding: "12px 16px",
      padding: "0.8rem 1rem",
      textAlign: "center",
    },
  };
  const themes = [
    { id: "minimal_midnight", version: "0.1.0" },
    { id: "simple_blue", version: "0.1.0" },
  ];

  return (
    <ChatBotProvider>
      <MyNestedComponent />
      <ChatBot
        settings={settings}
        flow={flow}
        styles={styles}
        themes={themes}
      />
    </ChatBotProvider>
  );
};

export default Chatbotify;
