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
  author: { name: string; role: string; initials: string; pending: boolean };
  tags: string[];
  body: PostBlock[];
  featured?: boolean;
  pendingReview: boolean;
};

const PENDING_AUTHOR = {
  name: "Authorship pending review",
  role: "Not attributed to a named clinician",
  initials: "TBA",
  pending: true,
};

export const POSTS: Post[] = [
  {
    slug: "what-happens-if-you-ignore-sleep-apnea",
    title: "What Happens If You Ignore Sleep Apnea?",
    excerpt:
      "Untreated obstructive sleep apnea can affect daytime function and cardiovascular health. A dental screening does not diagnose it or authorize an appliance.",
    category: "Clinical",
    date: "Unpublished draft",
    read: "6 min",
    image: "/images/blog/post-1.webp",
    imageAlt: "Person awake at night, used as a general illustration",
    author: PENDING_AUTHOR,
    tags: ["Sleep apnea", "Evaluation", "Patient education"],
    featured: true,
    pendingReview: true,
    body: [
      {
        type: "p",
        text: "Obstructive sleep apnea is a medical condition, not only a snoring complaint. Leaving moderate or severe disease untreated is associated with daytime sleepiness and with cardiovascular concerns. How much risk any one person carries depends on severity and the rest of their health. This draft does not state a universal multiplier, and it does not promise that treatment will prevent disease or lengthen life.",
      },
      {
        type: "callout",
        title: "Held for clinical review",
        text: "Specific prevalence, hypertension, and stroke figures are withheld until they are sourced and reviewed by the clinical lead. Do not treat this draft as patient education that is ready to publish.",
      },
      { type: "h2", text: "Why a screen is not a diagnosis", id: "screen" },
      {
        type: "p",
        text: "A questionnaire or a conversation in the dental chair can flag people who should be evaluated. It does not establish obstructive sleep apnea, and a positive screen alone does not authorize an oral appliance. Diagnosis and the decision to prescribe therapy belong in a physician-coordinated evaluation.",
      },
      { type: "h2", text: "A coordinated path", id: "path" },
      {
        type: "ol",
        items: [
          "Notice symptoms or exam findings and discuss them with the patient",
          "Refer for an appropriate medical evaluation and diagnosis",
          "If an oral appliance is prescribed, a qualified dentist selects, fits, adjusts, and oversees it",
          "Plan physician follow-up testing and periodic dental follow-up for side effects and occlusal change",
        ],
      },
      {
        type: "p",
        text: "The AASM and AADSM joint guideline on oral appliance therapy supports qualified-dentist oversight of dental side effects and occlusal changes, physician follow-up testing, and periodic follow-up visits. It does not support skipping that care.",
      },
      {
        type: "callout",
        title: "Balanced language",
        text: "Patients should hear that evaluation matters and that results vary. They should not hear that an appliance is automatic, that every untreated case has the same outcome, or that a coaching membership replaces visits.",
      },
    ],
  },
  {
    slug: "building-a-repeatable-dental-sleep-workflow",
    title: "Building a Repeatable Dental Sleep Workflow",
    excerpt:
      "A workable sleep program needs team ownership, protected time, billing follow-through, and measurement. Volume targets are not cohort results.",
    category: "Growth",
    date: "Unpublished draft",
    read: "7 min",
    image: "/images/blog/post-3.jpg",
    imageAlt: "Restful sleep imagery used as a general illustration",
    author: PENDING_AUTHOR,
    tags: ["Workflow", "Operations", "Planning"],
    pendingReview: true,
    body: [
      {
        type: "p",
        text: "Adding dental sleep medicine is an implementation project. It needs a dentist who remains responsible for care, someone on the team who owns the nonclinical steps, time that is actually protected on the schedule, and a way to see whether billing follow-through is happening. This article does not describe a typical monthly volume, and it does not present 20 appliances a month as a Dental Sleep Link result.",
      },
      { type: "h2", text: "Give the work an owner and a block of time", id: "owner" },
      {
        type: "p",
        text: "If sleep visits have no owner and no protected time, they compete with the rest of the day and stall. Capacity should be assessed before cases are promised. An existing team can carry the work only where that capacity exists. Extra staffing is a planning question, not something this draft rules out.",
      },
      { type: "h2", text: "Screening needs a clinical review", id: "screening" },
      {
        type: "p",
        text: "Practices often start with a short questionnaire and findings already visible in a dental exam. Any screening protocol, including a body-mass threshold, should be reviewed by the clinical lead before it is adopted. Marketing copy should not invent a clinical rule. A positive screen is a reason to coordinate a medical evaluation, not a reason to deliver an appliance.",
      },
      { type: "h2", text: "Follow the billing through", id: "billing" },
      {
        type: "p",
        text: "Billing follow-through means claims are submitted, pending items are watched, and collections are recorded as money actually received. Dental Sleep Link supports this as part of a continuing relationship: ongoing medical billing, remote support, credentialing coordination, and in-office team training as the program grows. Collections vary with payer contracts, coverage, documentation, and patient responsibility.",
      },
      {
        type: "ul",
        items: [
          "Count completed appliances, not inquiries",
          "Record collections, not billed charges",
          "Track staff time against the capacity assumption",
          "Review claims status without treating a target as a result",
        ],
      },
      {
        type: "callout",
        title: "What this is not",
        text: "It is not evidence that practices commonly move from 3 to 20 appliances, and it is not an approved high scenario. Service levels such as coaching cadence are unpublished until confirmed.",
      },
    ],
  },
  {
    slug: "adding-dental-sleep-medicine-to-a-general-practice",
    title: "Adding Dental Sleep Medicine to a General Practice",
    excerpt:
      "Suitability, diagnosis, treatment, and reimbursement depend on the individual patient and the individual practice.",
    category: "Industry",
    date: "Unpublished draft",
    read: "5 min",
    image: "/images/blog/post-2.jpg",
    imageAlt: "Person wearing a chin strap, used as a general illustration",
    author: PENDING_AUTHOR,
    tags: ["General practice", "Oral appliance", "Follow-up"],
    pendingReview: true,
    body: [
      {
        type: "p",
        text: "A general practice can be a place where sleep symptoms are noticed. Whether dental sleep medicine belongs in that practice depends on the dentist’s readiness, the team’s capacity, and the patients who are actually candidates. It is not an automatic service for every adult who snores, and it is not a guarantee of better margins.",
      },
      { type: "h2", text: "Suitability is individual", id: "suitability" },
      {
        type: "p",
        text: "Diagnosis, appliance therapy, and reimbursement each depend on the patient and on the practice’s payer relationships. A prevalence figure is not used here until it is substantiated. An undiagnosed-population badge is not a substitute for that source. CPAP intolerance does not by itself mean every patient needs an oral appliance.",
      },
      { type: "h2", text: "What the dentist is positioned to do", id: "dentist" },
      {
        type: "ul",
        items: [
          "See patients often enough to notice symptoms and dental findings",
          "Refer for physician-coordinated evaluation and diagnosis",
          "When an appliance is prescribed, select, fit, adjust, and oversee it",
          "Bill medical claims with support, knowing payment is not guaranteed",
        ],
      },
      {
        type: "p",
        text: "A dental exam does not display the entire airway, and a dentist is not the only clinician involved in care. Oral appliance therapy sits alongside medical diagnosis and follow-up testing.",
      },
      { type: "h2", text: "Follow-up is clinical", id: "follow-up" },
      {
        type: "p",
        text: "The AASM and AADSM joint clinical practice guideline supports qualified-dentist oversight for dental side effects and occlusal changes, physician follow-up testing, and periodic follow-up visits. Support services cannot substitute for clinically necessary follow-up, and they cannot promise that teeth will not move or that office visits will be unnecessary.",
      },
      {
        type: "p",
        text: "Guideline reference for clinical review: https://aasm.org/aasm-and-aadsm-issue-new-joint-clinical-practice-guideline-for-oral-appliance-therapy/",
      },
      {
        type: "callout",
        title: "Held for review",
        text: "This draft has no named author. It should not be published until authorship, credentials, and the clinical wording are approved. It is not a founder quotation.",
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
