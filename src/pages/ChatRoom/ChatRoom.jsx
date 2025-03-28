// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");

// const ChatRoom = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     socket.on("message", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });
//   }, []);

//   const sendMessage = () => {
//     socket.emit("message", message);
//     setMessage("");
//   };

//   return (
//     <div>
//       <h1>Live Chat</h1>
//       <div>
//         {messages.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//       <input value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default ChatRoom;

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { X, MessageCircle } from "lucide-react"; // Icons

const socket = io("http://localhost:5000");

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Toggle Chatbox
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <MessageCircle size={20} />
          Chat2
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Live Chat</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div className={`p-2 max-w-xs text-sm rounded-lg ${index % 2 === 0 ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                  {msg}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Box */}
          <div className="p-2 bg-gray-100 flex items-center rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;

