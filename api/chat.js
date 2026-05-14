const PRODUCT_CATALOG = [
  {
    title: "Pro Drops",
    url: "https://www.glownaturalwellness.com/products/prodrops-bioidentical-progesterone",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-pro-drops-1228240408.png?v=1774027211&width=300",
    type: "Topical progesterone oil drops",
    bestFor: "Progesterone support, estrogen dominance, sleep support, calm mood, perimenopause and menopause support.",
    guide: "Suggest when user mentions sleep issues, mood swings, estrogen dominance, perimenopause, menopause, calm mood, or progesterone support."
  },
  {
    title: "ProDerm",
    url: "https://www.glownaturalwellness.com/products/proderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-proderm-1229399161.png?v=1774538230&width=300",
    type: "Transdermal progesterone cream",
    bestFor: "Progesterone support in a cream format with skin absorption.",
    guide: "Suggest when user wants progesterone support but prefers cream instead of drops."
  },
  {
    title: "E2 Drops",
    url: "https://www.glownaturalwellness.com/products/e2-drops",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-e2-drops-1228240397.png?v=1774027066&width=300",
    type: "Topical estradiol oil drops",
    bestFor: "Estrogen and estradiol support, hormonal fluctuation, mood swings, hot flashes, fatigue, and brain fog.",
    guide: "Suggest when user mentions low estrogen, hot flashes, brain fog, fatigue, mood swings, or wants estrogen support in drop format."
  },
  {
    title: "EstraDerm",
    url: "https://www.glownaturalwellness.com/products/estraderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-estraderm-1229399172.png?v=1774538446&width=300",
    type: "Transdermal estrogen cream",
    bestFor: "Estrogen support with estradiol and estriol in cream format.",
    guide: "Suggest when user wants estrogen support but prefers cream instead of drops."
  },
  {
    title: "DHEA Drops",
    url: "https://www.glownaturalwellness.com/products/dhea-drops",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-dhea-drops-1228240419.png?v=1774026826&width=300",
    type: "Topical DHEA oil drops",
    bestFor: "DHEA support, energy, mood, motivation, hormonal balance, aging support, perimenopause and menopause support.",
    guide: "Suggest when user mentions low energy, low mood, low motivation, tiredness, fatigue, hormonal decline, or wants DHEA in drop format."
  },
  {
    title: "TestaDerm",
    url: "https://www.glownaturalwellness.com/products/testaderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-testaderm-1229399150.png?v=1774538026&width=300",
    type: "Transdermal DHEA cream",
    bestFor: "DHEA and testosterone support, vitality, clarity, strength, and cream-based absorption.",
    guide: "Suggest when user mentions testosterone support, low libido, low vitality, strength, clarity, or wants cream format."
  }
];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function productCard(product, reason) {
  return `
    <div>
      <p>${escapeHtml(reason)}</p>

      <div class="gnw-product-card">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.title)}" loading="lazy">
        <div>
          <strong>${escapeHtml(product.title)}</strong>
          <p>${escapeHtml(product.bestFor)}</p>
          <a href="${escapeHtml(product.url)}" target="_blank" rel="noopener">View Product</a>
        </div>
      </div>

      <p style="margin-top:10px;font-size:12px;color:#666;">
        This is general wellness guidance, not medical advice. Please consult a healthcare professional for personal hormone concerns.
      </p>
    </div>
  `;
}

function matchProductByMessage(message) {
  const text = String(message || "").toLowerCase();

  if (
    text.includes("cream") &&
    (text.includes("progesterone") || text.includes("sleep") || text.includes("mood"))
  ) {
    return {
      product: PRODUCT_CATALOG[1],
      reason: "Based on what you shared, ProDerm may be the better fit because it gives progesterone support in a cream format."
    };
  }

  if (
    text.includes("cream") &&
    (text.includes("estrogen") || text.includes("estradiol") || text.includes("estriol") || text.includes("hot flash"))
  ) {
    return {
      product: PRODUCT_CATALOG[3],
      reason: "Based on what you shared, EstraDerm may be the better fit because it offers estrogen support in a cream format."
    };
  }

  if (
    text.includes("sleep") ||
    text.includes("progesterone") ||
    text.includes("estrogen dominance") ||
    text.includes("calm") ||
    text.includes("mood") ||
    text.includes("perimenopause") ||
    text.includes("menopause")
  ) {
    return {
      product: PRODUCT_CATALOG[0],
      reason: "Based on what you shared, Pro Drops may be the closest fit because it focuses on progesterone support, calm mood, sleep support, and hormone balance."
    };
  }

  if (
    text.includes("hot flash") ||
    text.includes("hot flashes") ||
    text.includes("brain fog") ||
    text.includes("low estrogen") ||
    text.includes("estradiol") ||
    text.includes("estrogen")
  ) {
    return {
      product: PRODUCT_CATALOG[2],
      reason: "Based on what you shared, E2 Drops may be a good fit because it supports estrogen and estradiol-related hormone balance."
    };
  }

  if (
    text.includes("energy") ||
    text.includes("motivation") ||
    text.includes("dhea") ||
    text.includes("aging") ||
    text.includes("tired") ||
    text.includes("fatigue")
  ) {
    return {
      product: PRODUCT_CATALOG[4],
      reason: "Based on what you shared, DHEA Drops may be the closest fit because it supports DHEA, energy, mood, and hormonal balance."
    };
  }

  if (
    text.includes("testosterone") ||
    text.includes("libido") ||
    text.includes("vitality") ||
    text.includes("strength") ||
    text.includes("clarity")
  ) {
    return {
      product: PRODUCT_CATALOG[5],
      reason: "Based on what you shared, TestaDerm may be the closest fit because it supports DHEA and testosterone-related wellness concerns like vitality, clarity, and strength."
    };
  }

  return null;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.glownaturalwellness.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { message, pageUrl, currentProduct } = req.body || {};

    if (!message) {
      return res.status(400).json({
        reply: "Please ask a question so I can help."
      });
    }

    const directMatch = matchProductByMessage(message);

    if (directMatch) {
      return res.status(200).json({
        reply: productCard(directMatch.product, directMatch.reason)
      });
    }

    const systemPrompt = `
You are Glow Hormone Assistant for Glow Natural Wellness.

You can recommend ONLY these 6 products:
${PRODUCT_CATALOG.map((p, i) => `${i + 1}. ${p.title}
Type: ${p.type}
Best for: ${p.bestFor}
Guide: ${p.guide}
URL: ${p.url}`).join("\n\n")}

Current product page:
${currentProduct?.title || "Unknown"}
${pageUrl || ""}

Rules:
- Only help with hormone wellness questions and choosing between these 6 products.
- Never recommend any product outside the 6-product catalog.
- Do not diagnose medical conditions.
- Do not give dosage advice.
- Do not claim any product cures, treats, or prevents disease.
- If the user's concern is unclear, ask one short follow-up question.
- If recommending, recommend max 1 product unless comparison is required.
- Keep answer short and natural.
- Return ONLY valid JSON.
- JSON format:
{
  "answer": "short answer",
  "product": "Exact Product Name or empty string"
}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content || "";

    let parsed;

    try {
      parsed = JSON.parse(aiText);
    } catch (error) {
      parsed = {
        answer: aiText || "I can help you choose between the hormone wellness products. What is your main concern: sleep, mood, energy, hot flashes, libido, or cream vs drops?",
        product: ""
      };
    }

    const selectedProduct = PRODUCT_CATALOG.find(
      p => p.title.toLowerCase() === String(parsed.product || "").toLowerCase()
    );

    if (selectedProduct) {
      return res.status(200).json({
        reply: productCard(selectedProduct, parsed.answer)
      });
    }

    return res.status(200).json({
      reply: `
        <div>
          <p>${escapeHtml(parsed.answer || "I can help you choose between Pro Drops, ProDerm, E2 Drops, EstraDerm, DHEA Drops, and TestaDerm. What is your main concern?")}</p>
          <p style="margin-top:10px;font-size:12px;color:#666;">
            This is general wellness guidance, not medical advice.
          </p>
        </div>
      `
    });

  } catch (error) {
    return res.status(500).json({
      reply: "Sorry, I could not get a reply right now. Please try again.",
      error: error.message
    });
  }
}