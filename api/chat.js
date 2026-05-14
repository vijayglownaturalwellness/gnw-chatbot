const PRODUCT_CATALOG = [
  {
    title: "Pro Drops",
    url: "https://www.glownaturalwellness.com/products/prodrops-bioidentical-progesterone",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-pro-drops-1228240408.png?v=1774027211&width=300",
    type: "Topical progesterone oil drops",
    bestFor: "Progesterone support, estrogen dominance, sleep support, calm mood, perimenopause and menopause support.",
    guide: "Best when the user mentions sleep issues, mood swings, estrogen dominance, perimenopause, menopause, calm mood, or progesterone support."
  },
  {
    title: "ProDerm",
    url: "https://www.glownaturalwellness.com/products/proderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-proderm-1229399161.png?v=1774538230&width=300",
    type: "Transdermal progesterone cream",
    bestFor: "Progesterone support in a cream format with skin absorption.",
    guide: "Best when the user wants progesterone support but prefers cream instead of drops."
  },
  {
    title: "E2 Drops",
    url: "https://www.glownaturalwellness.com/products/e2-drops",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-e2-drops-1228240397.png?v=1774027066&width=300",
    type: "Topical estradiol oil drops",
    bestFor: "Estrogen and estradiol support, hormonal fluctuation, mood swings, hot flashes, fatigue, and brain fog.",
    guide: "Best when the user mentions low estrogen, hot flashes, brain fog, fatigue, mood swings, or wants estrogen support in drop format."
  },
  {
    title: "EstraDerm",
    url: "https://www.glownaturalwellness.com/products/estraderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-estraderm-1229399172.png?v=1774538446&width=300",
    type: "Transdermal estrogen cream",
    bestFor: "Estrogen support with estradiol and estriol in cream format.",
    guide: "Best when the user wants estrogen support but prefers cream instead of drops."
  },
  {
    title: "DHEA Drops",
    url: "https://www.glownaturalwellness.com/products/dhea-drops",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-dhea-drops-1228240419.png?v=1774026826&width=300",
    type: "Topical DHEA oil drops",
    bestFor: "DHEA support, energy, mood, motivation, hormonal balance, aging support, perimenopause and menopause support.",
    guide: "Best when the user mentions low energy, low mood, low motivation, tiredness, fatigue, hormonal decline, or wants DHEA in drop format."
  },
  {
    title: "TestaDerm",
    url: "https://www.glownaturalwellness.com/products/testaderm",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-testaderm-1229399150.png?v=1774538026&width=300",
    type: "Transdermal DHEA cream",
    bestFor: "DHEA and testosterone support, vitality, clarity, strength, and cream-based absorption.",
    guide: "Best when the user mentions testosterone support, low libido, low vitality, strength, clarity, or wants cream format."
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

      <p style="margin-top:10px;font-size:12px;line-height:1.35;color:#666;">
        This is general wellness guidance, not medical advice. Please consult a healthcare professional for personal hormone concerns.
      </p>
    </div>
  `;
}

function plainReply(text) {
  return `
    <div>
      <p>${escapeHtml(text)}</p>
      <p style="margin-top:10px;font-size:12px;line-height:1.35;color:#666;">
        This is general wellness guidance, not medical advice.
      </p>
    </div>
  `;
}

function getIntent(message) {
  const text = String(message || "").toLowerCase();

  const unrelatedWords = [
    "weather", "bitcoin", "crypto", "football", "shopify code", "wordpress", "visa",
    "movie", "celebrity", "recipe", "joke", "seo", "website design"
  ];

  if (unrelatedWords.some(word => text.includes(word))) {
    return {
      type: "unrelated"
    };
  }

  if (
    text.includes("drop") && text.includes("cream") ||
    text.includes("drops or cream") ||
    text.includes("cream or drops") ||
    text.includes("difference") ||
    text.includes("compare")
  ) {
    return {
      type: "compare_format"
    };
  }

  if (
    text.includes("cream") &&
    (text.includes("progesterone") || text.includes("sleep") || text.includes("mood"))
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[1],
      reason: "ProDerm may be the better fit if you want progesterone support in a cream format instead of drops."
    };
  }

  if (
    text.includes("cream") &&
    (text.includes("estrogen") || text.includes("estradiol") || text.includes("estriol") || text.includes("hot flash"))
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[3],
      reason: "EstraDerm may be the better fit if you want estrogen support in a cream format."
    };
  }

  if (
    text.includes("libido") ||
    text.includes("testosterone") ||
    text.includes("strength") ||
    text.includes("vitality") ||
    text.includes("drive") ||
    text.includes("muscle")
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[5],
      reason: "TestaDerm may be the closest fit because it supports DHEA and testosterone-related wellness concerns like vitality, clarity, and strength."
    };
  }

  if (
    text.includes("hot flash") ||
    text.includes("hot flashes") ||
    text.includes("brain fog") ||
    text.includes("low estrogen") ||
    text.includes("estradiol") ||
    text.includes("estrogen") ||
    text.includes("night sweat")
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[2],
      reason: "E2 Drops may be a good fit because it supports estrogen and estradiol-related hormone balance."
    };
  }

  if (
    text.includes("sleep") ||
    text.includes("progesterone") ||
    text.includes("estrogen dominance") ||
    text.includes("calm") ||
    text.includes("anxious") ||
    text.includes("irritable") ||
    text.includes("perimenopause") ||
    text.includes("menopause")
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[0],
      reason: "Pro Drops may be the closest fit because it focuses on progesterone support, calm mood, sleep support, and hormone balance."
    };
  }

  if (
    text.includes("low energy") ||
    text.includes("energy") ||
    text.includes("motivation") ||
    text.includes("tired") ||
    text.includes("fatigue") ||
    text.includes("exhausted")
  ) {
    return {
      type: "followup_energy"
    };
  }

  if (
    text.includes("mood") ||
    text.includes("hormone balance") ||
    text.includes("balance") ||
    text.includes("not feeling good") ||
    text.includes("help me choose") ||
    text.includes("which product")
  ) {
    return {
      type: "followup_general"
    };
  }

  return {
    type: "ai"
  };
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
        reply: plainReply("Please ask a question so I can help.")
      });
    }

    const intent = getIntent(message);

    if (intent.type === "unrelated") {
      return res.status(200).json({
        reply: plainReply("I can help with Glow hormone wellness products only. Tell me what you need support with: sleep, mood, energy, hot flashes, libido, or drops vs cream.")
      });
    }

    if (intent.type === "compare_format") {
      return res.status(200).json({
        reply: `
          <div>
            <p>Both formats can support hormone wellness, but the best choice depends on preference:</p>
            <p><strong>Drops</strong>: good if you prefer a lightweight topical oil format.</p>
            <p><strong>Creams</strong>: good if you prefer a transdermal cream texture.</p>
            <p>Which hormone support are you looking for: progesterone, estrogen, or DHEA/testosterone support?</p>
          </div>
        `
      });
    }

    if (intent.type === "followup_energy") {
      return res.status(200).json({
        reply: `
          <div>
            <p>Got it. Low energy can point in a few different directions, so I’d ask one quick question first:</p>
            <p>Is it more like <strong>low motivation/tiredness</strong>, <strong>low libido/strength</strong>, or <strong>brain fog with hot flashes</strong>?</p>
          </div>
        `
      });
    }

    if (intent.type === "followup_general") {
      return res.status(200).json({
        reply: `
          <div>
            <p>I can help narrow it down. Which sounds closest to your main concern?</p>
            <p>1. Sleep, mood, or progesterone support<br>2. Hot flashes, brain fog, or estrogen support<br>3. Low energy, motivation, or DHEA support<br>4. Low libido, strength, or vitality</p>
          </div>
        `
      });
    }

    if (intent.type === "recommend") {
      return res.status(200).json({
        reply: productCard(intent.product, intent.reason)
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
- If the user's concern is broad, ask one short follow-up question first.
- If recommending, recommend max 1 product unless the user asks for comparison.
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
        temperature: 0.25,
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: String(message)
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
      reply: plainReply(parsed.answer || "I can help you choose between Pro Drops, ProDerm, E2 Drops, EstraDerm, DHEA Drops, and TestaDerm. What is your main concern?")
    });

  } catch (error) {
    return res.status(500).json({
      reply: plainReply("Sorry, I could not get a reply right now. Please try again."),
      error: error.message
    });
  }
}