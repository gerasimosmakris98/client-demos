import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat = ({
    brandName = "GM Group",
    botName = "GM Assistant",
    welcomeMessage = null,
    botIcon: BotIcon = Bot,
    accentColor = "blue" // blue, emerald, rose, purple, amber, etc.
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const colorConfig = {
        blue: { from: 'from-blue-600', to: 'to-indigo-600', bg: 'bg-blue-600', border: 'border-blue-500/20', text: 'text-blue-600', ring: 'focus-within:ring-blue-500/20', btn: 'bg-blue-600 hover:bg-blue-700', shadow: 'shadow-blue-500/30' },
        emerald: { from: 'from-emerald-600', to: 'to-teal-600', bg: 'bg-emerald-600', border: 'border-emerald-500/20', text: 'text-emerald-600', ring: 'focus-within:ring-emerald-500/20', btn: 'bg-emerald-600 hover:bg-emerald-700', shadow: 'shadow-emerald-500/30' },
        rose: { from: 'from-rose-600', to: 'to-pink-600', bg: 'bg-rose-600', border: 'border-rose-500/20', text: 'text-rose-600', ring: 'focus-within:ring-rose-500/20', btn: 'bg-rose-600 hover:bg-rose-700', shadow: 'shadow-rose-500/30' },
        purple: { from: 'from-purple-600', to: 'to-violet-600', bg: 'bg-purple-600', border: 'border-purple-500/20', text: 'text-purple-600', ring: 'focus-within:ring-purple-500/20', btn: 'bg-purple-600 hover:bg-purple-700', shadow: 'shadow-purple-500/30' },
        amber: { from: 'from-amber-600', to: 'to-orange-600', bg: 'bg-amber-600', border: 'border-amber-500/20', text: 'text-amber-600', ring: 'focus-within:ring-amber-500/20', btn: 'bg-amber-600 hover:bg-amber-700', shadow: 'shadow-amber-500/30' },
        orange: { from: 'from-orange-600', to: 'to-red-600', bg: 'bg-orange-600', border: 'border-orange-500/20', text: 'text-orange-600', ring: 'focus-within:ring-orange-500/20', btn: 'bg-orange-600 hover:bg-orange-700', shadow: 'shadow-orange-500/30' },
    };

    const c = colorConfig[accentColor] || colorConfig.blue;

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                { type: 'bot', text: welcomeMessage || `Γεια σας! 👋 Καλώς ήρθατε στο ${brandName}. Πώς μπορώ να σας βοηθήσω;` }
            ]);
        }
    }, [brandName, welcomeMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { type: 'user', text: input }]);
        setInput('');

        // Mock AI Response
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: 'Αυτή είναι μια αυτοματοποιημένη απάντηση. Η λειτουργία AI θα συνδεθεί σύντομα!' }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-28 lg:bottom-6 right-4 sm:right-6 z-[60] flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto bg-white/95 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl w-[calc(100vw-32px)] sm:w-[400px] h-[550px] max-h-[70dvh] mb-4 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${c.from} ${c.to} p-4 sm:p-5 flex items-center justify-between text-white shadow-lg`}>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-md shadow-inner border border-white/20">
                                    <BotIcon size={22} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-black text-sm tracking-tight">{botName}</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Live Assistant</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 sm:p-2.5 hover:bg-white/20 rounded-2xl transition-all duration-300 group"
                            >
                                <X size={20} className="group-hover:rotate-90 transition-transform" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    key={i}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${msg.type === 'user'
                                        ? `${c.bg} text-white rounded-tr-sm shadow-md`
                                        : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm glass-morphism'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/80 backdrop-blur-md border-t border-slate-100">
                            <div className={`flex items-center gap-2 bg-slate-50/80 border border-slate-200 rounded-2xl px-4 py-2.5 focus-within:bg-white focus-within:border-${accentColor}-500/50 ${c.ring} transition-all duration-300`}>
                                <Sparkles size={16} className={c.text} />
                                <input
                                    type="text"
                                    className="bg-transparent border-none text-sm text-slate-700 w-full focus:outline-none placeholder:text-slate-400 font-medium"
                                    placeholder="Type your message..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={handleSend}
                                    className={`p-2 ${c.btn} text-white rounded-xl transition-all duration-300 ${c.shadow} hover:scale-105 active:scale-95`}
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`pointer-events-auto p-4 sm:p-5 rounded-3xl shadow-2xl text-white transition-all duration-500 flex items-center justify-center relative z-50 overflow-hidden group ${isOpen ? 'bg-slate-900 rotate-90' : `bg-gradient-to-tr ${c.from} ${c.to}`
                    }`}
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isOpen ? <X size={26} /> : <MessageSquare size={26} />}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white shadow-sm flex items-center justify-center text-[8px] font-black">1</span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default AIChat;
