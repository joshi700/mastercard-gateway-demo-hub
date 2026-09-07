export type Resource = {
  label: string;
  url: string;
};

/** @deprecated use Resource */
export type Guide = Resource;

export type Flow = {
  title: string;
  description: string;
  /** Demo URL. Optional — video-only entries have no live demo. */
  url?: string;
  inDevelopment?: boolean;
  /** Help/implementation guides (.docx) served from /public/guides. */
  guides?: Resource[];
  /** Integration video links (e.g. YouTube). */
  videos?: Resource[];
};

export type FlowGroup = {
  category: string;
  blurb: string;
  flows: Flow[];
};

export const flowGroups: FlowGroup[] = [
  {
    category: "Hosted Checkout",
    blurb: "Redirect Payment Page and merchant-embedded checkout flows.",
    flows: [
      {
        title: "Hosted Checkout — Configurable (Payment Page + Embedded)",
        description:
          "Both Payment Page and Embedded flows in one demo. Toggle integration mode and options live.",
        url: "https://hco-config-payment-page-front-end.vercel.app",
        guides: [
          { label: "Card Payment", url: "/guides/card-payment-hco.docx" },
          { label: "Google Pay", url: "/guides/google-pay-hco.docx" },
          { label: "PayPal", url: "/guides/paypal-hco.docx" },
          { label: "Click to Pay", url: "/guides/click-to-pay-hco.docx" },
        ],
        videos: [
          { label: "HCO for iOS", url: "https://youtu.be/kbTHMvj35Fk" },
        ],
      },
      {
        title: "Embedded Checkout — Configurable",
        description:
          "Merchant-embedded checkout form with configurable session and display options.",
        url: "https://hco-configurable-embedded.vercel.app",
        guides: [
          { label: "Guide", url: "/guides/embedded-checkout-configurable.docx" },
        ],
      },
      {
        title: "Payment Page",
        description: "Standard hosted Payment Page redirect flow — no configuration UI.",
        url: "https://hosted-checkout-indol.vercel.app",
        guides: [
          { label: "Guide", url: "/guides/payment-page.docx" },
        ],
        videos: [
          { label: "Video", url: "https://youtu.be/pmwqaiS2Fkg" },
        ],
      },
      {
        title: "Embedded Checkout",
        description: "Merchant-embedded checkout flow — fixed configuration.",
        url: "https://hosted-checkout-embedded-page.vercel.app",
        guides: [
          { label: "Guide", url: "/guides/embedded-page.docx" },
        ],
        videos: [
          { label: "Video", url: "https://youtu.be/Thj2DqOrLkg" },
        ],
      },
    ],
  },
  {
    category: "Hosted Session & 3DS",
    blurb: "Hosted Session integrations and end-to-end 3-D Secure authentication.",
    flows: [
      {
        title: "3DS End-to-End Flow",
        description:
          "Complete 3-D Secure authentication walkthrough with configurable settings.",
        url: "https://flow-3-ds.vercel.app/settings",
      },
      {
        title: "Hosted Session + 3DS — Configurable",
        description: "Hosted Session integration with 3DS, fully configurable for demos.",
        url: "https://hosted-session-configurable-fronten.vercel.app/config",
        guides: [
          { label: "Guide", url: "/guides/hosted-session-3ds-configurable.docx" },
        ],
        videos: [
          { label: "Video", url: "https://youtu.be/kXeDaTCN-LE" },
        ],
      },
      {
        title: "Hosted Session + 3DS",
        description: "Hosted Session 3DS flow with default configuration.",
        url: "https://frontend-jan25.vercel.app",
        guides: [
          { label: "Guide", url: "/guides/hosted-session-3ds.docx" },
        ],
        videos: [
          { label: "Video", url: "https://youtu.be/kXeDaTCN-LE" },
        ],
      },
      {
        title: "Click to Pay",
        description: "Click to Pay secure remote commerce checkout demo.",
        url: "https://click2pay-web.vercel.app",
        guides: [
          { label: "Guide", url: "/guides/click-to-pay-hosted-session.docx" },
        ],
        videos: [
          { label: "Video", url: "https://youtu.be/c1xk7B9d4i8" },
        ],
      },
    ],
  },
  {
    category: "Tokenization",
    blurb: "Network and gateway tokenization flows.",
    flows: [
      {
        title: "Tokenization Lab",
        description: "Tokenization scenarios and token lifecycle demos.",
        url: "https://tokenization-lab.vercel.app",
        inDevelopment: true,
      },
    ],
  },
  {
    category: "CIT / MIT",
    blurb: "Cardholder-initiated and merchant-initiated transaction patterns.",
    flows: [
      {
        title: "CIT / MIT Transactions",
        description:
          "Demonstrate cardholder-initiated and merchant-initiated transaction sequences.",
        url: "https://cit-mit.vercel.app",
        inDevelopment: true,
      },
    ],
  },
  {
    category: "Integration Videos",
    blurb: "Walkthrough videos for integrations without a live demo here.",
    flows: [
      {
        title: "Mobile SDK",
        description: "Mobile SDK integration walkthrough.",
        inDevelopment: true,
        videos: [
          { label: "Watch video", url: "https://youtu.be/z_E5GMLXu3k" },
        ],
      },
      {
        title: "Apple Pay — Hosted Session",
        description: "Apple Pay for Hosted Session integration walkthrough.",
        inDevelopment: true,
        videos: [
          { label: "Watch video", url: "https://youtu.be/xAFZuSDcmYU" },
        ],
      },
    ],
  },
];
