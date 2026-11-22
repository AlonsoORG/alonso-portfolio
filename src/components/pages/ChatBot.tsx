"use client";

import { FormEvent, useState } from "react";
import { ArrowUp, Bot, User } from "lucide-react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const quickPrompts = [
  "What projects have you worked on?",
  "What technologies do you use?",
  "How can I contact you?",
];

export const ChatbotSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I’m Alonso’s portfolio assistant. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (content = input) => {
    const trimmedContent = content.trim();

    if (!trimmedContent || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedContent,
    };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
        }),
      });
      const data = (await response.json()) as { content?: string; error?: string };

      if (!response.ok || !data.content) {
        throw new Error(data.error || "Unable to get a response.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { id: Date.now(), role: "assistant", content: data.content! },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to send your message.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-foreground/20 bg-white/80 text-left shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-3 border-b border-foreground/10 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Portfolio Assistant</h2>
            <p className="text-sm text-foreground/60">Ask me anything</p>
          </div>
        </div>

        <div className="flex max-h-[28rem] min-h-80 flex-col gap-4 overflow-y-auto p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <Bot className="mb-2 h-4 w-4 shrink-0 text-foreground/60" aria-hidden="true" />
              )}
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-3 leading-6 ${
                  message.role === "user"
                    ? "rounded-br-sm bg-foreground text-background"
                    : "rounded-bl-sm bg-foreground/10"
                }`}
              >
                {message.content}
              </p>
              {message.role === "user" && (
                <User className="mb-2 h-4 w-4 shrink-0 text-foreground/60" aria-hidden="true" />
              )}
            </div>
          ))}
          {isLoading && (
            <p className="self-start rounded-2xl rounded-bl-sm bg-foreground/10 px-4 py-3 text-foreground/60">
              Thinking...
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-foreground/10 px-6 py-4">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="rounded-full border border-foreground/20 px-3 py-2 text-sm transition-colors hover:bg-foreground/5"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex gap-3 border-t border-foreground/10 p-4"
        >
          <label htmlFor="chat-message" className="sr-only">
            Message
          </label>
          <input
            id="chat-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a message..."
            className="min-w-0 flex-1 rounded-full border border-foreground/20 bg-transparent px-4 outline-none transition-colors placeholder:text-foreground/50 focus:border-foreground"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!input.trim() || isLoading}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
        {error && (
          <p role="alert" className="px-6 pb-4 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};
