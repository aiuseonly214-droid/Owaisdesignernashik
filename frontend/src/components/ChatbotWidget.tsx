import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Phone,
  Calendar,
  Sparkles,
  ChevronRight,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

interface ChatbotWidgetProps {
  companyPhone?: string;
}

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["rate", "cost", "price", "kitna", "kharcha", "bhav", "charges", "sq ft", "square feet"],
    category: "Pricing & Rates",
    answer:
      "💰 **Rates & Pricing (Nashik Direct Craftsman Rates):**\n\n• **POP False Ceiling:** ₹85 – ₹130 / sq.ft (Designs, Cove LEDs ke anusaar)\n• **PVC Wall Panels:** Starting from ₹75 / sq.ft (100% Waterproof)\n• **Gypsum Ceiling (Saint-Gobain):** Starting from ₹95 / sq.ft\n• **Commercial / Grid Tiles:** Custom quotes according to area\n\n✨ Free site inspection ke baad hum exact itemized estimate provide karte hain!",
    quickReplies: ["Free Site Visit Kaise Book Kare?", "POP vs PVC difference kya hai?", "Call directly"],
  },
  {
    keywords: ["pop", "plaster of paris", "cove", "ceiling", "false ceiling"],
    category: "POP False Ceiling",
    answer:
      "✨ **POP False Ceiling Services:**\n\nHum high-quality Plaster of Paris false ceiling banate hain with:\n- Designer Cove LED Lighting channels\n- Modern geometric, curved & layered patterns\n- Fan & Chandelier heavy-load reinforcement\n- Ultra-smooth paint finish\n\nNashik ke Wadala, Gangapur Rd, College Rd, Indira Nagar sabhi jagah hamara kaam chalu hai!",
    quickReplies: ["POP Ceiling ka rate kya hai?", "Kitna time lagta hai?", "Photos / Gallery dekhni hai"],
  },
  {
    keywords: ["pvc", "waterproof", "damp", "seelan", "nami", "wall panel", "louver", "louvers"],
    category: "PVC Wall Panels",
    answer:
      "🛡️ **PVC Wall Panels & Ceiling (100% Waterproof):**\n\nNashik me deewaro ki nami (moisture/seelan) ke liye PVC best solution hai:\n- 100% Waterproof & Termite-Proof (Deemak nahi lagti)\n- 24–48 hours me fast installation\n- No paint smell or dust\n- Woodgrain, Marble finish & Fluted Louvers available!\n\nLiving Room TV units, Bedroom feature walls, aur Kitchen me bohot popular hai.",
    quickReplies: ["PVC ka rate kya hai?", "POP vs PVC me kaunsa best hai?", "Site visit book karein"],
  },
  {
    keywords: ["time", "duration", "din", "kitne din", "how long", "speed"],
    category: "Timeline",
    answer:
      "⏱️ **Project Completion Timeline:**\n\n• **1BHK Flat:** 3 se 5 working days\n• **2BHK Flat:** 5 se 8 working days\n• **3BHK / Bungalow:** 8 se 14 working days\n• **PVC Wall Paneling (Single Wall):** Sirf 1 din (24-48 ghante)\n\nHamari experienced craftsmen team bina delay ke timeline par kaam pura karti hai.",
    quickReplies: ["Rates kya hain?", "Free Site Visit Kaise Book Kare?"],
  },
  {
    keywords: ["visit", "inspection", "site visit", "nap", "measurement", "estimate", "quotation", "quote", "book"],
    category: "Free Site Visit",
    answer:
      "📐 **Free Site Visit & Measurement in Nashik:**\n\nHanji! Owais Interior Designer Nashik me kisi bhi area me **100% FREE Site Visit & Measurement** provide karta hai.\n\nHum actual material samples lekar aapke ghar/site par aate hain aur exact measurement karke instant estimate dete hain.",
    quickReplies: ["WhatsApp par book karein", "Call karke book karein", "Rates check karein"],
    actionLink: {
      label: "📲 WhatsApp par Book Karein",
      href: "https://wa.me/917756043214?text=Hi%20Owais%20Interior,%20mujhe%20free%20site%20visit%20aur%20estimate%20chahiye",
      isExternal: true,
    },
  },
  {
    keywords: ["area", "location", "kaha", "where", "service area", "nashik", "wadala", "indira nagar", "gangapur", "panchavati"],
    category: "Service Areas",
    answer:
      "📍 **Service Locations (Across Entire Nashik):**\n\nHum poore Nashik me services dete hain:\n• Wadala Naka & Rahmat Nagar\n• Gangapur Road & College Road\n• Indira Nagar & Govind Nagar\n• Panchavati & Nashik Road\n• Pathardi Phata, Ambad MIDC & Satpur MIDC\n• Deolali Camp & Dwarka\n\nNashik me kahin bhi ho, free visit available hai!",
    quickReplies: ["Site visit book karein", "POP ceiling rate?", "Direct Contact Number"],
  },
  {
    keywords: ["contact", "phone", "mobile", "number", "call", "whatsapp", "address", "office"],
    category: "Contact Info",
    answer:
      "📞 **Owais Interior Designer Contact Details:**\n\n• **Founder/Contractor:** Owais Interior\n• **Primary Phone:** [+91 7756043214](tel:+917756043214)\n• **Alternate Phone:** [+91 7721926290](tel:+917721926290)\n• **Address:** Rahmat Nagar, Wadala, Nashik, Maharashtra 422006\n• **Hours:** 9:00 AM – 8:30 PM (Everyday Open)\n\nAap directly call ya WhatsApp message kar sakte hain!",
    quickReplies: ["WhatsApp Message Karein", "POP Ceiling Rates", "Free Site Visit"],
    actionLink: {
      label: "📞 Call +91 7756043214",
      href: "tel:+917756043214",
    },
  },
  {
    keywords: ["qr", "verify", "verification", "bill", "invoice", "receipt", "fake", "original"],
    category: "Authenticity & QR Code",
    answer:
      "🛡️ **Digital Verification & Security:**\n\nOwais Interior Designer ki taraf se issue hone wale har quotation, invoice aur payment receipt par official **QR Code** hota hai.\n\nAap kisi bhi phone camera se scan karke digital portal par document ki authenticity verify kar sakte hain. Zero fraud guarantee!",
    quickReplies: ["Rates dekhein", "Contact details", "Free site visit"],
  },
];

const INITIAL_QUICK_REPLIES = [
  "Rates & Pricing kya hai?",
  "Free Site Visit kaise book kare?",
  "POP vs PVC difference kya hai?",
  "Contact / Phone number?",
];

export function ChatbotWidget({ companyPhone = "7756043214" }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Namaste! Welcome to **Owais Interior Designer Nashik**.\n\nMain aapka virtual assistant hoon. POP False Ceiling, PVC Wall Panels, Pricing, ya Nashik me Free Site Visit ke baare me koi bhi doubt ho, aap yahan puch sakte hain!",
      time: getCurrentTime(),
      quickReplies: INITIAL_QUICK_REPLIES,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const findBestAnswer = (userQuery: string) => {
    const query = userQuery.toLowerCase().trim();

    // Direct greeting check
    if (/^(hi|hello|hey|namaste|salaam|assalam|pranam|ram ram)/i.test(query)) {
      return {
        answer:
          "Hello! Kaise hain aap? Owais Interior Designer me aapka swagat hai. POP False Ceiling, PVC wall panels, ya free site inspection ke baare me aap kya janna chahte hain?",
        quickReplies: INITIAL_QUICK_REPLIES,
      };
    }

    // Direct thank you check
    if (/^(thanks|thank you|shukriya|dhanyawad)/i.test(query)) {
      return {
        answer:
          "Aapka swagat hai! Agar koi aur sawal ho ya site visit book karni ho, toh batayein. Have a great day! 😊",
        quickReplies: ["Free Site Visit Book Karein", "Call Owais Interior"],
      };
    }

    // Match keywords score
    let bestMatch: (typeof FAQ_KNOWLEDGE_BASE)[0] | null = null;
    let highestScore = 0;

    for (const item of FAQ_KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (query.includes(kw)) {
          score += kw.length; // weight longer keywords more
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        answer: bestMatch.answer,
        quickReplies: bestMatch.quickReplies,
        actionLink: bestMatch.actionLink,
      };
    }

    // Default Fallback
    return {
      answer:
        "Dhanyawad aapke question ke liye! Is vishay par hamare master craftsman aapko sabse behtar guide kar sakte hain.\n\nAap directly call kar sakte hain ya WhatsApp par photo/plans bhej kar turant estimation le sakte hain:",
      quickReplies: [
        "Rates & Pricing kya hai?",
        "Free Site Visit kaise book kare?",
        "Contact / Phone number?",
      ],
      actionLink: {
        label: `📲 WhatsApp (+91 ${companyPhone})`,
        href: `https://wa.me/91${companyPhone}?text=Hi%20Owais%20Interior,%20mujhe%20ek%20inquiry%20karni%20hai:%20${encodeURIComponent(userQuery)}`,
        isExternal: true,
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const result = findBestAnswer(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: result.answer,
        time: getCurrentTime(),
        quickReplies: result.quickReplies,
        actionLink: result.actionLink,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: "Conversation reset ho gayi hai. Welcome back! Main aapki kya madad kar sakta hoon?",
        time: getCurrentTime(),
        quickReplies: INITIAL_QUICK_REPLIES,
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-lg border border-slate-200 animate-bounce">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Any Questions? Ask AI
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
          className={`group relative flex size-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 ${
            isOpen
              ? "bg-slate-900 text-white hover:bg-slate-800 rotate-90"
              : "bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 text-white hover:scale-105 hover:shadow-blue-500/50"
          }`}
        >
          {isOpen ? (
            <X className="size-6 transition-transform" />
          ) : (
            <>
              <MessageSquare className="size-6 transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex size-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-4 rounded-full bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">
                  1
                </span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 flex w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-blue-800 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-full bg-blue-700/80 ring-2 ring-blue-400/50">
                <Bot className="size-5 text-amber-300" />
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-blue-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm tracking-tight">Owais Interior AI</h3>
                  <span className="rounded-full bg-amber-400/20 px-1.5 py-0.2 text-[10px] font-bold text-amber-300">
                    Nashik
                  </span>
                </div>
                <p className="text-[11px] text-blue-200 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400" /> Online • 24/7 Assistance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="rounded-lg p-1.5 text-blue-200 hover:bg-blue-700/50 hover:text-white transition-colors"
              >
                <RotateCcw className="size-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-blue-200 hover:bg-blue-700/50 hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="bg-blue-50/80 px-3 py-1.5 border-b border-blue-100 flex items-center justify-between text-[11px] text-blue-900">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="size-3 text-amber-600" /> Free Site Inspection in Nashik
            </span>
            <a
              href={`tel:+91${companyPhone}`}
              className="flex items-center gap-1 font-bold text-blue-700 hover:underline"
            >
              <Phone className="size-3" /> Call: {companyPhone}
            </a>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`flex max-w-[85%] items-end gap-2 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-900 text-amber-300"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
                  </div>

                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-xs shadow-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-xs"
                        : "bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs"
                    }`}
                  >
                    {msg.text}

                    {msg.actionLink && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <a
                          href={msg.actionLink.href}
                          target={msg.actionLink.isExternal ? "_blank" : undefined}
                          rel={msg.actionLink.isExternal ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-colors shadow-xs"
                        >
                          {msg.actionLink.label}
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-8">{msg.time}</span>

                {/* Quick reply suggestions if sent by bot */}
                {msg.sender === "bot" && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-8 max-w-[90%]">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(reply)}
                        className="rounded-full border border-blue-200 bg-blue-50/70 hover:bg-blue-100 px-2.5 py-1 text-[11px] font-medium text-blue-700 transition-colors shadow-2xs flex items-center gap-1"
                      >
                        {reply}
                        <ChevronRight className="size-3 text-blue-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-2">
                <Bot className="size-4 text-blue-600 animate-spin" />
                <span className="animate-pulse">Owais AI soch raha hai...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-slate-200 bg-white p-2.5 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="POP rate, PVC panels, ya koi doubt puche..."
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors shadow-xs"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
