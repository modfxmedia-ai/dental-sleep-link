export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Clinical" | "Billing" | "Growth" | "Industry";
  date: string;
  read: string;
  image: string;
  imageAlt: string;
  author: { name: string; role: string; initials: string };
  tags: string[];
  body: PostBlock[];
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "what-happens-if-you-ignore-sleep-apnea",
    title: "What Happens If You Ignore Sleep Apnea?",
    excerpt:
      "Sleep apnea isn\u2019t just about snoring. It\u2019s a serious condition that puts your heart, brain, and overall health at risk if left untreated.",
    category: "Clinical",
    date: "May 28, 2026",
    read: "6 min",
    image: "/images/blog/post-1.webp",
    imageAlt:
      "Tired woman lying awake at night next to a snoring partner",
    author: { name: "Dr. R. Alvarez", role: "Clinical Lead", initials: "RA" },
    tags: ["Sleep apnea", "Cardiovascular", "Patient education"],
    featured: true,
    body: [
      {
        type: "p",
        text: "Most patients still think sleep apnea is a snoring problem. It is not. Obstructive sleep apnea (OSA) is a chronic disease that quietly damages the cardiovascular system, the brain, and metabolic health \u2014 and the longer it goes untreated, the steeper the bill becomes.",
      },
      {
        type: "callout",
        title: "The hidden epidemic",
        text: "An estimated 80% of moderate-to-severe OSA cases in the U.S. remain undiagnosed. Dentists are uniquely positioned to find them first.",
      },
      { type: "h2", text: "The cardiovascular risk", id: "cardiovascular" },
      {
        type: "p",
        text: "Each apneic event triggers a surge of cortisol and a spike in blood pressure. Repeat that hundreds of times a night, and the autonomic nervous system never gets to reset. The downstream effects are real and well documented.",
      },
      {
        type: "ul",
        items: [
          "2\u20133\u00d7 higher risk of hypertension",
          "4\u00d7 higher risk of stroke",
          "Significantly elevated risk of atrial fibrillation and heart failure",
          "Higher all-cause mortality in severe, untreated cases",
        ],
      },
      { type: "h2", text: "The cognitive cost", id: "cognitive" },
      {
        type: "p",
        text: "Sleep fragmentation prevents the brain from completing the deep-sleep cycles where memory consolidation and waste clearance happen. Patients report brain fog, slower reaction times, and irritability long before they recognize a sleep problem.",
      },
      {
        type: "quote",
        text: "Patients almost never come in saying they have sleep apnea. They come in saying they\u2019re exhausted, foggy, and short-tempered \u2014 and they blame themselves.",
        cite: "Dr. R. Alvarez, Clinical Lead",
      },
      { type: "h2", text: "Metabolism, mood, and daily life", id: "daily" },
      {
        type: "p",
        text: "Chronic sleep deprivation drives insulin resistance, weight gain, and depression. The patient who can\u2019t lose weight despite trying may be fighting a biological battle they don\u2019t know they\u2019re in.",
      },
      { type: "h2", text: "Why dentists are on the frontline", id: "dentists" },
      {
        type: "p",
        text: "Dentists see their patients more often than any other healthcare provider. The airway, the bite, the bruxism patterns, the scalloped tongue \u2014 all of it is visible in a routine exam. A trained dental team can screen for OSA in under three minutes and refer or treat directly with an oral appliance.",
      },
      {
        type: "ol",
        items: [
          "Add a 6-question screener to every new patient intake",
          "Flag bruxism, scalloping, and retrognathic profiles",
          "Order a home sleep test through your medical billing partner",
          "Deliver an oral appliance \u2014 or refer for CPAP if severe",
        ],
      },
      {
        type: "callout",
        title: "The bottom line",
        text: "Ignoring sleep apnea is not a neutral choice. Every untreated year compounds cardiovascular, cognitive, and metabolic damage \u2014 and your patients are looking at you to catch it.",
      },
    ],
  },
  {
    slug: "from-3-to-20-appliances-a-month",
    title:
      "From 3 to 20+ Appliances a Month: How Dentists Are Scaling Sleep Medicine",
    excerpt:
      "It\u2019s easy to see sleep apnea treatment as a side service. The dentists scaling fastest treat it as a core revenue line \u2014 here\u2019s how.",
    category: "Growth",
    date: "Apr 30, 2026",
    read: "7 min",
    image: "/images/blog/post-3.jpg",
    imageAlt: "Restful woman holding a pillow on a bed \u2014 calm sleep imagery",
    author: { name: "Dr. S. Kim", role: "Practice Coach", initials: "SK" },
    tags: ["Practice growth", "Operations", "Sleep medicine"],
    body: [
      {
        type: "p",
        text: "Most dental practices that offer sleep treatment deliver between two and four appliances a month. The top decile delivers more than twenty. The difference isn\u2019t talent or geography \u2014 it\u2019s system design.",
      },
      { type: "h2", text: "Stop treating it as a side service", id: "side" },
      {
        type: "p",
        text: "If sleep treatment lives in the corner of the schedule, it stays in the corner of the P&L. The scaling practices give it block time, a dedicated team lead, and the same operational discipline they use for crown-and-bridge.",
      },
      {
        type: "callout",
        title: "Mindset shift",
        text: "Sleep is not a service. It\u2019s a program \u2014 with intake, screening, diagnosis, fitting, follow-up, and billing as named, measured steps.",
      },
      { type: "h2", text: "Build a screening engine", id: "screening" },
      {
        type: "p",
        text: "Every new and recall patient should be screened. Use a short validated tool (STOP-BANG works), add airway photos to your standard exam set, and flag every patient with bruxism or known cardiovascular comorbidity.",
      },
      {
        type: "ul",
        items: [
          "STOP-BANG questionnaire at intake",
          "Pharyngeal and tongue photos at exam",
          "Auto-flag bruxism + HTN + BMI > 28",
          "Weekly review of flagged charts",
        ],
      },
      { type: "h2", text: "Systemize the billing", id: "billing" },
      {
        type: "p",
        text: "Medical billing is the single most common reason sleep programs stall. The practices that scale offload it entirely \u2014 to an in-house biller trained on medical, or to a partner with national payer contracts. Either way, you should not be hand-coding D-codes and DME claims yourself.",
      },
      {
        type: "quote",
        text: "We hit 22 appliances a month the quarter we stopped doing our own medical billing. The clinical work didn\u2019t change. The friction did.",
        cite: "Dr. S. Kim, Practice Coach",
      },
      { type: "h2", text: "Add a coach", id: "coach" },
      {
        type: "p",
        text: "Every scaling program has someone above the practice keeping score \u2014 cases per month, gross per case, denial rate, time-to-fit. If nobody is watching the numbers weekly, the program will drift back to a side service. Quarterly business reviews keep it on the rails.",
      },
      {
        type: "ol",
        items: [
          "Weekly scorecard \u2014 case volume + collections",
          "Monthly clinical review of fitted cases",
          "Quarterly business review with growth lead",
          "Annual market expansion plan",
        ],
      },
      {
        type: "callout",
        title: "The pattern",
        text: "Screening engine + outsourced medical billing + an outside coach. Every practice we\u2019ve seen scale past 20 appliances a month has all three.",
      },
    ],
  },
  {
    slug: "why-every-dental-practice-should-offer-sleep-apnea-treatment",
    title:
      "Why Every Dental Practice Should Offer Sleep Apnea Treatment in 2026",
    excerpt:
      "Sleep apnea affects tens of millions of adults in the U.S. \u2014 most undiagnosed. Dentistry is the natural entry point for finding them.",
    category: "Industry",
    date: "Apr 12, 2026",
    read: "5 min",
    image: "/images/blog/post-2.jpg",
    imageAlt: "Woman wearing an anti-snoring chin strap",
    author: { name: "Dr. J. Lee", role: "Founder", initials: "JL" },
    tags: ["Industry", "OSA", "Oral appliance"],
    body: [
      {
        type: "p",
        text: "The U.S. has a sleep apnea problem hiding in plain sight. Roughly 30 million adults have obstructive sleep apnea, and about 80% of moderate-to-severe cases are undiagnosed. The patients are already in your operatories \u2014 they just haven\u2019t been screened.",
      },
      { type: "h2", text: "The undiagnosed millions", id: "undiagnosed" },
      {
        type: "p",
        text: "These are not edge cases. They\u2019re your bruxism patients, your hypertensive patients, your patients with thick necks and scalloped tongues. They\u2019ve been told they snore. They blame their weight, their schedule, or their age \u2014 and they never connect the dots to sleep.",
      },
      {
        type: "callout",
        title: "30M undiagnosed",
        text: "If 80% of moderate-to-severe OSA in the U.S. is undiagnosed, the public-health gap is enormous \u2014 and dentistry is the most over-indexed specialty to close it.",
      },
      { type: "h2", text: "Dental is the natural entry point", id: "entry" },
      {
        type: "p",
        text: "A general dentist sees most patients twice a year. Physicians often don\u2019t. Add in the fact that the entire airway is visible during every exam, and you have the highest-leverage screening surface in healthcare. CPAP-intolerant patients also need an oral appliance \u2014 a device you, and only you, are licensed to deliver.",
      },
      {
        type: "ul",
        items: [
          "You see patients more often than any physician",
          "You can see the airway directly",
          "You can deliver the oral appliance",
          "You can bill medical for it",
        ],
      },
      { type: "h2", text: "The patient outcome", id: "outcome" },
      {
        type: "p",
        text: "Patients who finally get treated for OSA describe it as life-changing \u2014 better mood, better cognition, lower blood pressure, fewer headaches, longer life. These aren\u2019t small wins. They\u2019re the kind of clinical results that make patients refer their entire family to your practice.",
      },
      { type: "h2", text: "The practice outcome", id: "practice" },
      {
        type: "p",
        text: "Sleep treatment is a recurring, medically-billed, high-margin service line. Every appliance delivered creates a 3-year follow-up relationship and a multiplier of word-of-mouth referrals. The economics aren\u2019t just good \u2014 they\u2019re structurally better than most restorative work.",
      },
      {
        type: "quote",
        text: "If you\u2019re a dentist in 2026 and you\u2019re not screening for sleep apnea, you\u2019re leaving both lives and revenue on the table.",
        cite: "Dr. J. Lee, Founder",
      },
      {
        type: "callout",
        title: "Why now",
        text: "Medical reimbursement for oral appliances has never been better. Payer contracts are clearer, devices are more refined, and billing partners can do the heavy lifting. The barriers that existed five years ago are gone.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(slug: string, n = 2): Post[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, n);
}
