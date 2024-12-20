import React, { useState } from 'react';

interface Message {
    sender: 'AI' | 'You';
    text: string;
}

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'AI', text: 'Hi! How can I assist you?' },
    ]);
    const [input, setInput] = useState<string>('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages((prevMessages) => [...prevMessages, { sender: 'You', text: input }]);
            setInput('');
        }
    };

    return (
        <div
            style={{
                borderTop: '2px solid #000',
                padding: '10px',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '150px',
                backgroundColor: '#f9f9f9',
                overflowY: 'auto',
            }}
        >
            <div style={{ marginBottom: '10px' }}>
                {messages.map((msg, index) => (
                    <p key={index} style={{ margin: '5px 0' }}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    style={{ flexGrow: 1, padding: '5px' }}
                />
                <button onClick={handleSend} style={{ padding: '5px 10px' }}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
