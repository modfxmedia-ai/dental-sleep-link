export const ECONOMICS_TITLE = "Illustrative annual operating economics";
export const ECONOMICS_SUBTITLE =
  "Twelve productive months using an existing team with available capacity.";

export const ECONOMICS_DISCLOSURE =
  "These illustrations assume $1,800 actually collected per completed appliance, a $300 lab cost, a 14% DSL fee and $599 monthly software cost. Existing staff must have available capacity. Balances exclude incremental staffing, other practice overhead, other pass-through costs and taxes; they are not take-home income, EBITDA or guaranteed profit. The separate $20,000 implementation fees are shown separately. Twelve productive months are different from the first twelve months after signing. Credentialing, ramp-up and collection delays affect cash flow. The $249 membership belongs to DSL and is excluded from practice revenue. Actual results vary.";

export const ECONOMICS_COLUMNS = [
  {
    volume: "6 appliances/month",
    appliances: "72",
    collections: "$129,600",
    fee: "($18,144)",
    lab: "($21,600)",
    software: "($7,188)",
    beforeOther: "$82,668",
    implementation: "($20,000)",
    afterImplementation: "$62,668",
  },
  {
    volume: "12 appliances/month",
    appliances: "144",
    collections: "$259,200",
    fee: "($36,288)",
    lab: "($43,200)",
    software: "($7,188)",
    beforeOther: "$172,524",
    implementation: "($20,000)",
    afterImplementation: "$152,524",
  },
] as const;

export const ECONOMICS_ROWS: {
  label: string;
  key: keyof (typeof ECONOMICS_COLUMNS)[number];
  emphasis?: boolean;
}[] = [
  { label: "Completed appliances", key: "appliances" },
  { label: "Appliance collections at $1,800 each", key: "collections" },
  { label: "DSL fee at 14%", key: "fee" },
  { label: "Lab cost at $300 each", key: "lab" },
  { label: "Software at $599/month", key: "software" },
  {
    label: "Remaining before other expenses and taxes",
    key: "beforeOther",
    emphasis: true,
  },
  { label: "Separate implementation fees", key: "implementation" },
  {
    label: "Remaining after implementation fees, before other expenses and taxes",
    key: "afterImplementation",
    emphasis: true,
  },
];
