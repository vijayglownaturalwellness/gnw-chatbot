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
  },
  {
    title: "Clean Hormones Club",
    url: "https://www.glownaturalwellness.com/products/clean-hormones-club",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-clean-hormones-club-1226666122.png?v=1773076297&width=300",
    type: "Group hormone coaching membership",
    bestFor: "Weekly group coaching, live Q&A, private hormone support community, education, accountability, and ongoing guidance.",
    guide: "Best when the user wants affordable expert guidance, community support, education, weekly calls, live Q&A, or help understanding hormones without doing it alone."
  },
  {
    title: "Clean Hormones Complete",
    url: "https://www.glownaturalwellness.com/products/clean-hormones-complete",
    image: "https://www.glownaturalwellness.com/cdn/shop/files/glow-natural-wellness-clean-hormones-complete-1226666123.png?v=1773076270&width=300",
    type: "Personalized 1:1 hormone coaching program",
    bestFor: "Personalized intake, one-on-one consultation, custom hormone protocol, ongoing follow-ups, Hormone Hotline, Healthy Hormone Academy access, and subscription savings.",
    guide: "Best when the user wants deeper personalized help, 1:1 guidance, custom protocol, symptom review, follow-up consultations, hormone testing guidance, or long-term structured support."
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
        This is general wellness guidance, not medical advice. For personal support, contact our team at support@glownaturalwellness.com or call +1 (855) 928-4442.
      </p>
    </div>
  `;
}

function twoProductCards(productOne, productTwo, reason) {
  return `
    <div>
      <p>${escapeHtml(reason)}</p>

      <div class="gnw-product-card">
        <img src="${escapeHtml(productOne.image)}" alt="${escapeHtml(productOne.title)}" loading="lazy">
        <div>
          <strong>${escapeHtml(productOne.title)}</strong>
          <p>${escapeHtml(productOne.bestFor)}</p>
          <a href="${escapeHtml(productOne.url)}" target="_blank" rel="noopener">View Product</a>
        </div>
      </div>

      <div class="gnw-product-card">
        <img src="${escapeHtml(productTwo.image)}" alt="${escapeHtml(productTwo.title)}" loading="lazy">
        <div>
          <strong>${escapeHtml(productTwo.title)}</strong>
          <p>${escapeHtml(productTwo.bestFor)}</p>
          <a href="${escapeHtml(productTwo.url)}" target="_blank" rel="noopener">View Product</a>
        </div>
      </div>

      <p style="margin-top:10px;font-size:12px;line-height:1.35;color:#666;">
        This is general wellness guidance, not medical advice. For personal support, contact our team at support@glownaturalwellness.com or call +1 (855) 928-4442.
      </p>
    </div>
  `;
}

function plainReply(text) {
  return `
    <div>
      <p>${escapeHtml(text)}</p>
      <p style="margin-top:10px;font-size:12px;line-height:1.35;color:#666;">
        This is general wellness guidance, not medical advice. For personal support, contact our team at support@glownaturalwellness.com or call +1 (855) 928-4442.
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
    return { type: "unrelated" };
  }

  if (
    text.includes("complete") ||
    text.includes("1:1") ||
    text.includes("one on one") ||
    text.includes("personalized") ||
    text.includes("custom protocol") ||
    text.includes("consultation") ||
    text.includes("specialist") ||
    text.includes("testing") ||
    text.includes("labs") ||
    text.includes("lab") ||
    text.includes("deeper support") ||
    text.includes("private coaching")
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[7],
      reason: "Clean Hormones Complete may be the best fit if you want personalized guidance, a 1:1 consultation, a custom hormone protocol, and ongoing support instead of guessing on your own."
    };
  }

  if (
    text.includes("club") ||
    text.includes("community") ||
    text.includes("group") ||
    text.includes("weekly call") ||
    text.includes("weekly calls") ||
    text.includes("live q&a") ||
    text.includes("education") ||
    text.includes("accountability") ||
    text.includes("coaching help") ||
    text.includes("expert guidance")
  ) {
    return {
      type: "recommend",
      product: PRODUCT_CATALOG[6],
      reason: "Clean Hormones Club may be the best fit if you want affordable expert guidance, weekly group calls, live Q&A, education, and community support."
    };
  }

  if (
    text.includes("coaching") ||
    text.includes("support program") ||
    text.includes("help me choose") ||
    text.includes("i don't know where to start") ||
    text.includes("dont know where to start") ||
    text.includes("confused") ||
    text.includes("not sure")
  ) {
    return { type: "compare_coaching" };
  }

  if (
    (text.includes("drop") && text.includes("cream")) ||
    text.includes("drops or cream") ||
    text.includes("cream or drops") ||
    text.includes("difference") ||
    text.includes("compare")
  ) {
    return { type: "compare_format" };
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
    return { type: "followup_energy" };
  }

  if (
    text.includes("mood") ||
    text.includes("hormone balance") ||
    text.includes("balance") ||
    text.includes("not feeling good") ||
    text.includes("which product")
  ) {
    return { type: "followup_general" };
  }

  return { type: "ai" };
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
        reply: plainReply("I can help with Glow hormone wellness products and coaching options only. Tell me what you need support with: sleep, mood, energy, hot flashes, libido, drops vs cream, or coaching.")
      });
    }

    if (intent.type === "compare_coaching") {
      return res.status(200).json({
        recommendedProduct: "Clean Hormones Club + Clean Hormones Complete",
        reply: twoProductCards(
          PRODUCT_CATALOG[6],
          PRODUCT_CATALOG[7],
          "If you want support, there are two strong options: Clean Hormones Club for affordable group guidance and community support, or Clean Hormones Complete for deeper personalized 1:1 help and a custom protocol."
        )
      });
    }

    if (intent.type === "compare_format") {
      return res.status(200).json({
        reply: `
          <div>
            <p>Both formats can support hormone wellness. The best choice depends on your preference and goal:</p>
            <p><strong>Drops</strong>: lightweight topical oil format.</p>
            <p><strong>Creams</strong>: transdermal cream texture.</p>
            <p>Which type of support are you looking for: progesterone, estrogen, DHEA/testosterone, or coaching?</p>
          </div>
        `
      });
    }

    if (intent.type === "followup_energy") {
      return res.status(200).json({
        reply: `
          <div>
            <p>Got it. Low energy can point in a few different directions, so I’d ask one quick question first:</p>
            <p>Is it more like <strong>low motivation/tiredness</strong>, <strong>low libido/strength</strong>, <strong>brain fog with hot flashes</strong>, or do you want <strong>coaching to figure it out</strong>?</p>
          </div>
        `
      });
    }

    if (intent.type === "followup_general") {
      return res.status(200).json({
        reply: `
          <div>
            <p>I can help narrow it down. Which sounds closest to your main concern?</p>
            <p>1. Sleep, mood, or progesterone support<br>2. Hot flashes, brain fog, or estrogen support<br>3. Low energy, motivation, or DHEA support<br>4. Low libido, strength, or vitality<br>5. Coaching or personalized guidance</p>
          </div>
        `
      });
    }

    if (intent.type === "recommend") {
      return res.status(200).json({
        recommendedProduct: intent.product.title,
        reply: productCard(intent.product, intent.reason)
      });
    }

    const systemPrompt = `
You are Glow Hormone Assistant for Glow Natural Wellness.

You can recommend ONLY these 8 options:
${PRODUCT_CATALOG.map((p, i) => `${i + 1}. ${p.title}
Type: ${p.type}
Best for: ${p.bestFor}
Guide: ${p.guide}
URL: ${p.url}`).join("\n\n")}

Current product page:
${currentProduct?.title || "Unknown"}
${pageUrl || ""}

Rules:
- Only help with hormone wellness questions and choosing between these 8 options.
- Never recommend anything outside this catalog.
- Do not diagnose medical conditions.
- Do not give dosage advice.
- Do not claim any product cures, treats, or prevents disease.
- If the user's concern is broad, ask one short follow-up question first.
- Recommend Clean Hormones Club when the user wants group support, education, community, weekly calls, accountability, or affordable coaching.
- Recommend Clean Hormones Complete when the user wants 1:1 help, a consultation, custom protocol, symptom review, testing guidance, or deeper personalized support.
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
        answer: aiText || "I can help you choose between hormone products, Clean Hormones Club, and Clean Hormones Complete. What is your main concern?",
        product: ""
      };
    }

    const selectedProduct = PRODUCT_CATALOG.find(
      p => p.title.toLowerCase() === String(parsed.product || "").toLowerCase()
    );

    if (selectedProduct) {
      return res.status(200).json({
        recommendedProduct: selectedProduct.title,
        reply: productCard(selectedProduct, parsed.answer)
      });
    }

    return res.status(200).json({
      reply: plainReply(parsed.answer || "I can help you choose between Pro Drops, ProDerm, E2 Drops, EstraDerm, DHEA Drops, TestaDerm, Clean Hormones Club, and Clean Hormones Complete. What is your main concern?")
    });

  } catch (error) {
    return res.status(500).json({
      reply: plainReply("Sorry, I could not get a reply right now. Please try again."),
      error: error.message
    });
  }
}