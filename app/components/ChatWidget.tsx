"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "👋 Hello! How can we help you today?",
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue.toLowerCase();
    let response = "🤖 I'm not sure I understand. Could you clarify?";

    if (
      ["feature", "service", "work", "things"].some((k) =>
        userInput.includes(k)
      )
    ) {
      response = `
🔧 Our Services:
Heat Treatment: A process of heating and cooling metals to alter their physical and mechanical properties without changing their shape.
CNC Machining: A computer-controlled manufacturing method used to produce highly precise and complex parts from metal or plastic.
Cold Forging: A metal forming technique where materials are shaped at room temperature, increasing strength through strain hardening.
`;
    } else if (
      ["company", "branch", "sub branch", "category"].some((k) =>
        userInput.includes(k)
      )
    ) {
      response = `🏢 Companies: Globe Tech, Fortune Indocorp, Precitech`;
    } else if (
      [
        "contact",
        "email",
        "phone",
        "number",
        "address",
        "map",
        "location",
        "meet",
        "enquiry",
        "ask",
      ].some((k) => userInput.includes(k))
    ) {
      response = `📍 Our Location:
4th Phase, 438, 12th Cross Rd,
Ganapathy Nagar, Phase 3, Peenya,
Bangaluru, Karnataka 560058

📞 Phone: (+91) 9611960984
📧 Email: admin@fortuneindocorp.com`;
    }

    setMessages((prev) => [...prev, `🧑‍💬 ${inputValue}`, response]);
    setInputValue("");
  };

  return (
    <>
      {/* Button + Label */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm shadow-md">
          Chat with us!
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:bg-orange-600 transition"
        >
          🔥
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-orange-400">
          {/* Header */}
          <div className="bg-orange-500 text-white px-4 py-2 flex items-center justify-between font-semibold text-sm">
            <span>🔥 Chat with Us</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-800 bg-orange-50 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 text-sm border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
