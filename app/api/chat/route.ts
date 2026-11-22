import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const PINECONE_URL =
  "https://prod-1-data.ke.pinecone.io/assistant/chat/pc-assistant";

export async function POST(request: Request) {
  const apiKey = process.env.PINECONE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "PINECONE_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as { messages?: ChatMessage[] };

  if (
    !Array.isArray(body.messages) ||
    body.messages.length === 0 ||
    body.messages.some(
      (message) =>
        !message ||
        !["user", "assistant"].includes(message.role) ||
        typeof message.content !== "string" ||
        !message.content.trim(),
    )
  ) {
    return NextResponse.json(
      { error: "A non-empty messages array is required." },
      { status: 400 },
    );
  }

  const response = await fetch(PINECONE_URL, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: body.messages,
      stream: false,
      model: "gpt-4o",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json(
      { error: `Pinecone request failed: ${error}` },
      { status: response.status },
    );
  }

  const data = (await response.json()) as {
    message?: { content?: string };
  };
  const content = data.message?.content;

  if (!content) {
    return NextResponse.json(
      { error: "Pinecone returned an empty assistant response." },
      { status: 502 },
    );
  }

  return NextResponse.json({ content });
}
