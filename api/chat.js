export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { message, pageUrl } = req.body;

    const systemPrompt = `
You are a helpful chatbot for Glow Natural Wellness.

You help users on hormone replacement pages.
Ask simple questions and recommend products only from this collection:
https://www.glownaturalwellness.com/collections/hormone-replacement

Do not diagnose medical conditions.
Do not give dosage advice.
Do not say products cure or treat disease.
Keep answers short, helpful, and conversational.
Always suggest consulting a licensed healthcare provider for medical concerns.
`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: `Page URL: ${pageUrl || ""}\nUser message: ${message}`
          }
        ]
      })
    });

    const data = await response.json();

    return res.status(200).json({
      reply: data.output_text || "Sorry, I could not answer right now."
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}