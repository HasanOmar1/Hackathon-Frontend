import React, { useState, useEffect } from "react";
import { TextField, IconButton, Container, Paper, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

import "./chatbox.css";

export default function Chatbox() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const currentLoggedUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(currentLoggedUser);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleSubmit = async () => {
    if (userInput.trim() === "") return;
    // Set loading to true to indicate that AI is typing
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://hackathon-backend-biy0.onrender.com/api/v1/chat",
        {
          message: userInput,
          language: selectedLanguage,
        }
      );
      // Update chat history with user input and AI response
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: userInput },
        { role: "assistant", content: response.data },
      ]);
      // Clear user input and set loading to false
      setUserInput("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="whole-container">
      <div style={styles.container} className="big-container">
        <div style={styles.chatContainer}>
          <h1 style={styles.title}>Digital Lawyer</h1>
          <h3 className="logged-user">
            Welcome {parsedUser.name} , How can I help you?
          </h3>

          <div id="chat-history" style={styles.chatHistory}>
            <div className="welcoming">
              Hi! Im the digital lawyer , please start the chat here ✍️
            </div>
            {chatHistory.map((message, index) => (
              <div key={index} style={styles.message}>
                <span
                  className="roles"
                  style={{
                    ...styles.messageRole,
                    color: message.role === "user" ? "#007BFF" : "#333",
                  }}
                >
                  {message.role === "user" ? "User:" : "Assistant:"}
                </span>
                <div className="answer">{message.content}</div>
              </div>
            ))}
            {/* Show loading indicator if AI is typing */}
            {isLoading && (
              <div style={styles.loadingIndicator}>Assistant is typing...</div>
            )}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              className="write-input"
              type="text"
              value={userInput}
              onChange={handleUserInput}
              style={styles.userInput}
            />
            <select
              id="options"
              name="options"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Arabic">Arabic</option>
            </select>
            <button onClick={handleSubmit} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#242628",
  },
  chatContainer: {
    width: "1000px",
    padding: "50px",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    background: "#343839",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#70f6a1",
    fontWeight: "bold",
    paddingTop: "30px",
  },
  chatHistory: {
    height: "500px",
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    background: "#F3F3F3",
    borderRadius: "5px",
    color: "#333",
  },
  message: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "1.5px",
    padding: "5px",
    lineHeight: "1.5",
  },
  messageRole: {
    fontWeight: "bold",
    marginRight: "5px",
    fontSize: "14px",
  },
  userInput: {
    flex: "1",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  sendButton: {
    padding: "8px",
    cursor: "pointer",
    background: "#70f6a1",
    color: "black",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  loadingIndicator: {
    textAlign: "right",
    color: "#aaa",
    fontStyle: "italic",
  },
};
