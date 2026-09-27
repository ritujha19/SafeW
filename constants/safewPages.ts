export interface SafewPageResource {
  route: string;
  title: string;
  section: "Women's Rights" | "Learn & Prepare" | "Emergency Support";
  summary: string;
  keyDetails: string[];
  keywords: string[];
  icon: string;
}

export const SAFEW_PAGES: SafewPageResource[] = [
  // Learn & Prepare Pages
  {
    route: "/learn",
    title: "Learn & Prepare (Notice → Move → Tell)",
    section: "Learn & Prepare",
    summary:
      "Core SAFE-W safety guide: 1. Notice something concerning, 2. Move toward safety and away from danger, 3. Tell someone you trust.",
    keyDetails: [
      "Notice → Move → Tell: A simple 3-step sequence you can remember under stress.",
      "Prioritize creating distance and moving toward populated, well-lit places rather than confronting or fighting.",
      "Includes guides on warning signs, what counts as harassment or abuse, safety essentials, and 15 practice scenarios.",
    ],
    keywords: [
      "learn and prepare",
      "learn & prepare",
      "notice move tell",
      "prepare",
      "safety guide",
    ],
    icon: "school-outline",
  },
  {
    route: "/learn/safetyEssentials",
    title: "Safety Essentials",
    section: "Learn & Prepare",
    summary:
      "Why safety comes before evidence, trusting your instincts, setting boundaries, and escaping safely without confrontation.",
    keyDetails: [
      "Trust Your Instincts: You do not need proof that something is dangerous before creating distance and moving toward people.",
      "Safety Comes Before Evidence: Never stop or put yourself in danger just to take a photo or prove what happened—get somewhere safe first.",
      "Your Boundaries Matter: 'No' is enough; you never owe anyone access to your personal space, passwords, or private photos.",
      "You Don't Have to Handle It Alone: Reach out to a trusted person early instead of carrying fear in silence.",
    ],
    keywords: [
      "safety essentials",
      "instinct",
      "instincts",
      "boundary",
      "boundaries",
      "safety before evidence",
      "uneasy",
      "uncomfortable",
      "escape safely",
      "cab",
      "taxi",
      "driver",
    ],
    icon: "shield-checkmark-outline",
  },
  {
    route: "/learn/warningSigns",
    title: "Know the Warning Signs",
    section: "Learn & Prepare",
    summary:
      "Spot concerning patterns early—like following, repeated unwanted contact, threats, coercion, or isolation—before they escalate.",
    keyDetails: [
      "Following & Stalking: Avoid isolated shortcuts; move toward a populated, visible place and call someone you trust.",
      "Repeated Unwanted Contact: Do not feel pressured to keep replying after setting a boundary.",
      "Blackmail, Coercion & Isolation: Recognize when someone uses fear, guilt, or secrecy ('don't tell anyone') to control your choices.",
      "Take Escalation Seriously: Look at the overall pattern of behavior rather than dismissing individual incidents.",
    ],
    keywords: [
      "warning sign",
      "warning signs",
      "red flag",
      "following me",
      "being followed",
      "followed",
      "stalking",
      "unwanted contact",
      "coercion",
      "isolation",
      "escalat",
    ],
    icon: "eye-outline",
  },
  {
    route: "/learn/whatCounts",
    title: "Know What Counts",
    section: "Learn & Prepare",
    summary:
      "Understand what harassment, stalking, voyeurism, domestic abuse, cyber abuse, and assault look like—and what to do safely.",
    keyDetails: [
      "Covers Harassment, Sexual Harassment, Stalking & Voyeurism, Sexual Assault, Domestic & Dowry Abuse, Cyber Abuse, Acid Attacks, and Trafficking.",
      "Not Sure If It Counts?: You never need to know the exact legal term before asking for help—if behavior makes you feel unsafe or controlled, take it seriously.",
      "Move away from danger without confronting the person if confrontation could increase your risk, tell someone you trust, and preserve evidence only when safe.",
    ],
    keywords: [
      "what counts",
      "does this count",
      "is this harassment",
      "is this abuse",
      "types of abuse",
      "voyeurism",
      "unwanted touch",
      "acid attack",
      "trafficking",
    ],
    icon: "alert-circle-outline",
  },
  {
    route: "/learn/prepareYourself",
    title: "Prepare Yourself (Practice Scenarios)",
    section: "Learn & Prepare",
    summary:
      "Practice 15 real-life situations—like being followed, someone blocking your path, or pressure for private photos—to build safe escape instincts.",
    keyDetails: [
      "Scenario practice: Being followed, someone blocking your path, isolated shortcuts, pressure for secrecy, and digital boundary violations.",
      "Key takeaway: 'Your priority is getting to safety, not winning a confrontation.'",
      "Helps you rehearse choosing visibility, people, and safe exit options ahead of time.",
    ],
    keywords: [
      "prepare yourself",
      "practice scenario",
      "scenarios",
      "blocking my path",
      "block my way",
      "shortcut",
      "how to react",
      "what should i do if",
    ],
    icon: "play-circle-outline",
  },

  // Women's Rights Main Pages
  {
    route: "/womenRights",
    title: "Women's Rights Hub",
    section: "Women's Rights",
    summary:
      "Overview of all legal protections for women in India across violence protection, marriage & family, workplace, digital safety, police reporting, and free legal aid.",
    keyDetails: [
      "Covers Constitutional Rights, Protection from Violence (BNS 2023 & DV Act), Workplace Rights (POSH), Family & Marriage Rights, Digital Rights, Rights When Seeking Help, and Free Legal Aid.",
      "Explains what each law means in simple language and why it matters to your safety.",
    ],
    keywords: [
      "women's rights",
      "womens rights",
      "all rights",
      "legal rights in india",
    ],
    icon: "scale-outline",
  },
  {
    route: "/womenRights/protectionFromViolence",
    title: "Protection from Violence",
    section: "Women's Rights",
    summary:
      "Laws protecting women from physical, sexual, emotional, and domestic violence under BNS 2023 (Sections 62–80, 124, 143) and the Domestic Violence Act, 2005.",
    keyDetails: [
      "BNS 2023 Section 75 (Sexual Harassment), Section 78 (Stalking — physical & electronic), Section 77 (Voyeurism), Section 74 (Assault/Criminal Force).",
      "Protection of Women from Domestic Violence Act, 2005 (Section 3): Covers physical, sexual, verbal/emotional, and economic abuse; provides Protection Orders and Residence Orders.",
      "BNS 2023 Sections 63–64 (Rape), Section 80 (Dowry Death), Section 124 (Acid Attack), Section 143 (Trafficking).",
    ],
    keywords: [
      "protection from violence",
      "domestic violence",
      "physical abuse",
      "hitting",
      "beating",
      "bns 75",
      "bns 78",
      "sexual assault",
      "stalking law",
      "violence against women",
    ],
    icon: "shield-checkmark-outline",
  },
  {
    route: "/womenRights/rightsSeekingHelp",
    title: "Rights When Seeking Help",
    section: "Women's Rights",
    summary:
      "Your rights when reporting to police under BNSS 2023 Section 173: Zero FIR, free FIR copy, recording by a woman officer, medical care & Helpline 181.",
    keyDetails: [
      "BNSS 2023 Section 173: Right to report an offence orally or by electronic communication, including filing a Zero FIR at any police station regardless of area.",
      "BNSS Section 173(2): Right to receive a free copy of the FIR immediately.",
      "BNSS Section 173: For specified offences against women, your statement must be recorded by a woman police officer.",
      "BNSS Section 173(4): If police refuse to record your FIR, you can send the complaint in writing to the Superintendent of Police (SP) or approach the Magistrate.",
    ],
    keywords: [
      "seeking help",
      "police",
      "fir",
      "zero fir",
      "police station",
      "file a complaint",
      "report to police",
      "woman officer",
      "refuse to file",
      "181",
      "one stop centre",
    ],
    icon: "help-buoy-outline",
  },
  {
    route: "/womenRights/workplaceRights",
    title: "Workplace Rights (POSH & Maternity)",
    section: "Women's Rights",
    summary:
      "POSH Act 2013 protections against workplace sexual harassment (Internal & Local Committees, interim relief, confidentiality) & Maternity Benefit Act.",
    keyDetails: [
      "POSH Act, 2013 (Sections 3, 4, 6, 9): Protects women from sexual harassment at work via the Internal Committee (IC) or District Local Committee (LC).",
      "POSH Section 12: Right to request interim relief (transfer, leave, or restraining the respondent from supervising you) during the inquiry.",
      "POSH Sections 16–17: Strict confidentiality of your identity and complaint proceedings.",
      "Maternity Benefit Act, 1961 (Section 5): Up to 26 weeks of paid maternity benefit and protection against unlawful dismissal during maternity leave.",
    ],
    keywords: [
      "workplace",
      "office",
      "work harassment",
      "boss",
      "manager",
      "colleague",
      "posh",
      "internal committee",
      "maternity",
      "pregnant",
      "maternity leave",
    ],
    icon: "briefcase-outline",
  },
  {
    route: "/womenRights/digitalRights",
    title: "Digital Rights & Cyber Safety",
    section: "Women's Rights",
    summary:
      "Legal protections against non-consensual sharing of private images (IT Act 66E, BNS 77), cyberstalking (BNS 78), impersonation, and reporting via 1930.",
    keyDetails: [
      "IT Act 2000 Section 66E & BNS 2023 Section 77: Capturing or sharing private images without consent is a criminal offence—even if captured with consent, sharing without consent is illegal.",
      "BNS 2023 Section 78: Protects against cyberstalking and persistent unwanted monitoring of electronic communications.",
      "IT Act Sections 66C & 66D: Protects against identity theft and fake-profile online impersonation.",
      "Report online abuse at cybercrime.gov.in or call Helpline 1930.",
    ],
    keywords: [
      "digital rights",
      "cyber",
      "online",
      "private photo",
      "private image",
      "leaked photo",
      "morphed",
      "blackmail online",
      "fake profile",
      "impersonation",
      "cyberstalking",
      "instagram",
      "whatsapp",
      "1930",
    ],
    icon: "phone-portrait-outline",
  },
  {
    route: "/womenRights/familyMarriageRights",
    title: "Family & Marriage Rights",
    section: "Women's Rights",
    summary:
      "Overview of family and marriage laws in India covering rights within marriage, shared household residence, maintenance, divorce, dowry prohibition, and inheritance.",
    keyDetails: [
      "Explains how personal laws (Hindu, Muslim, Christian, Parsi) and the Special Marriage Act apply.",
      "Covers 10 key areas: Legal Age of Marriage, Marriage Registration, Rights Within Marriage, Divorce Rights, Maintenance, Property & Inheritance, Equal Coparcenary Rights, Dowry Prohibition, Shared Household Rights, and Rights After Divorce.",
    ],
    keywords: [
      "family and marriage",
      "family & marriage",
      "family law",
      "marriage law",
      "marriage rights",
      "rights in marriage",
      "married woman rights",
      "matrimonial",
    ],
    icon: "heart-outline",
  },

  // Detailed Family & Marriage Subpages (/womenRights/viewMore/*)
  {
    route: "/womenRights/viewMore/rightsWithinMarriage",
    title: "Rights Within Marriage",
    section: "Women's Rights",
    summary:
      "Your legal identity, dignity, and statutory protections inside marriage—including Protection Orders (Sec 18), Temporary Custody (Sec 21), and Compensation (Sec 22) under the DV Act 2005.",
    keyDetails: [
      "Marriage does not remove your separate legal identity or basic rights under the Constitution of India.",
      "Domestic Violence Act, 2005 (Section 3): Protects married women from physical, sexual, verbal/emotional, and economic abuse.",
      "Sections 18, 21, 22 & 23 (DV Act): Right to seek Protection Orders, Temporary Child Custody, Compensation for injuries/emotional distress, and Interim Orders from a Magistrate.",
      "Sections 4–10 & 12 (DV Act): Access to Protection Officers, recognized service providers, and direct application to a Magistrate.",
    ],
    keywords: [
      "rights within marriage",
      "rights in marriage",
      "have in marriage",
      "married rights",
      "wife rights",
      "rights as a wife",
      "in marriage",
      "marital rights",
      "husband",
      "married life",
    ],
    icon: "heart-outline",
  },
  {
    route: "/womenRights/viewMore/rightsInSharedHousehold",
    title: "Rights in a Shared Household",
    section: "Women's Rights",
    summary:
      "Your legal right under Section 17 & 19 of the Domestic Violence Act, 2005 to reside in the shared matrimonial home and protection against unlawful eviction.",
    keyDetails: [
      "DV Act Section 17: Every woman in a domestic relationship has the right to reside in the shared household, whether or not she owns or has a legal title in the property.",
      "DV Act Section 17(2): You cannot be unlawfully evicted or thrown out of the shared household save by procedure established by law.",
      "DV Act Section 19 (Residence Orders): A Magistrate can restrain dispossession or direct the respondent to provide alternate accommodation or pay rent.",
    ],
    keywords: [
      "shared household",
      "residence right",
      "right to reside",
      "kicked out",
      "thrown out of house",
      "evict",
      "in-laws house",
      "matrimonial home",
      "stay in house",
    ],
    icon: "home-outline",
  },
  {
    route: "/womenRights/viewMore/maintenance",
    title: "Maintenance Rights",
    section: "Women's Rights",
    summary:
      "Financial support for wives, children, and dependants under BNSS 2023 Section 144, Hindu Marriage Act Sections 24–25, Special Marriage Act, and DV Act Section 20.",
    keyDetails: [
      "BNSS 2023 Section 144: A Magistrate can order monthly maintenance and interim maintenance for a wife unable to maintain herself and for children.",
      "Matrimonial Maintenance: Interim and permanent alimony provisions under the Hindu Marriage Act (Secs 24–25), Special Marriage Act (Secs 36–37), and Muslim Women Act 1986.",
      "DV Act Section 20 (Monetary Relief): Covers medical expenses, loss of earnings, and maintenance consistent with your accustomed standard of living.",
    ],
    keywords: [
      "maintenance",
      "alimony",
      "financial support",
      "money from husband",
      "interim maintenance",
      "monetary relief",
      "bnss 144",
      "child support",
    ],
    icon: "cash-outline",
  },
  {
    route: "/womenRights/viewMore/divorceRights",
    title: "Divorce Rights",
    section: "Women's Rights",
    summary:
      "Legal grounds and procedures for ending a marriage—including contested divorce, mutual consent divorce, and judicial separation across personal and civil marriage laws.",
    keyDetails: [
      "Covers statutory grounds for divorce (such as cruelty, desertion, etc.) and Mutual Consent Divorce under the Hindu Marriage Act (Sec 13, 13B), Special Marriage Act (Sec 27, 28), Indian Divorce Act (Sec 10, 10A), Parsi Act, and Dissolution of Muslim Marriages Act, 1939.",
      "Muslim Women (Protection of Rights on Marriage) Act, 2019: Declares instant triple talaq void and illegal.",
      "Explains judicial separation, the one-year filing rule (and hardship exceptions), and remarriage rules.",
    ],
    keywords: [
      "divorce",
      "divorce rights",
      "end marriage",
      "mutual consent",
      "judicial separation",
      "separate from husband",
      "talaq",
      "khula",
    ],
    icon: "document-text-outline",
  },
  {
    route: "/womenRights/viewMore/rightsAfterDivorce",
    title: "Rights After Divorce",
    section: "Women's Rights",
    summary:
      "Continuing legal rights and matters after divorce, including child custody, child education/maintenance orders, and keeping court decrees safe.",
    keyDetails: [
      "Child Custody & Welfare (HMA Sec 26 / SMA Sec 38): Courts can make and modify orders for the custody, maintenance, and education of minor children even after a divorce decree.",
      "Divorce does not end parental responsibilities toward children.",
      "Explains the distinction between maintenance, separate property ownership, and enforcing divorce decrees.",
    ],
    keywords: [
      "after divorce",
      "rights after divorce",
      "post divorce",
      "child custody",
      "custody of child",
      "divorce decree",
    ],
    icon: "heart-dislike-outline",
  },
  {
    route: "/womenRights/viewMore/dowryProhibition",
    title: "Dowry Prohibition",
    section: "Women's Rights",
    summary:
      "Protections under the Dowry Prohibition Act, 1961 against demanding, giving, or taking dowry, and a wife's legal right to property given in connection with marriage.",
    keyDetails: [
      "Dowry Prohibition Act, 1961 (Sections 3 & 4): Giving, taking, or directly/indirectly demanding dowry is a punishable criminal offence.",
      "Section 5 & 6: Agreements for dowry are void, and any dowry received by another person must be transferred for the benefit of the wife.",
      "Section 8B: Dowry Prohibition Officers can assist in preventing dowry demands and collecting evidence.",
    ],
    keywords: [
      "dowry",
      "dowry prohibition",
      "demanding dowry",
      "dowry harassment",
      "streedhan",
      "gifts in marriage",
    ],
    icon: "close-circle-outline",
  },
  {
    route: "/womenRights/viewMore/propertyInheritance",
    title: "Property & Inheritance Rights",
    section: "Women's Rights",
    summary:
      "A woman's rights to own property, inherit from parents or a husband's estate, full ownership under Hindu Succession Act Section 14, and joint ownership rules.",
    keyDetails: [
      "Her Own Property: Marriage does not transfer ownership of a woman's property to her husband; under HSA Section 14, property possessed by a Hindu woman is held as full owner.",
      "Inheritance from Father/Parents & Husband: Daughters and widows are Class I heirs under the Hindu Succession Act (Sections 8–10); other communities are governed by their applicable succession laws or wills.",
      "Clarifies the difference between ownership, inheritance, and maintenance.",
    ],
    keywords: [
      "property",
      "inheritance",
      "inherit",
      " ancestral property",
      "father's property",
      "husband's property",
      "streedhan",
      "will",
      "succession",
    ],
    icon: "home-outline",
  },
  {
    route: "/womenRights/viewMore/coparcenaryRights",
    title: "Equal Coparcenary Rights for Daughters",
    section: "Women's Rights",
    summary:
      "Under Section 6 of the Hindu Succession Act, 1956 (as amended in 2005), daughters are coparceners by birth with the exact same rights as sons.",
    keyDetails: [
      "Hindu Succession Act Section 6(1): In a Mitakshara joint Hindu family, a daughter is a coparcener by birth in the same manner as a son.",
      "Vineeta Sharma v. Rakesh Sharma (Supreme Court): A daughter's coparcenary right is by birth, even if the father passed away before the 2005 amendment.",
      "Gives daughters the equal right to claim partition and a share in coparcenary property.",
    ],
    keywords: [
      "coparcenary",
      "coparcener",
      "daughter property",
      "equal share as son",
      "daughter right in father property",
      "hindu succession act section 6",
    ],
    icon: "people-outline",
  },
  {
    route: "/womenRights/viewMore/legalAgeOfMarriage",
    title: "Legal Age of Marriage",
    section: "Women's Rights",
    summary:
      "Protections under the Prohibition of Child Marriage Act, 2006 (minimum age 18 for women, 21 for men), annulment options, maintenance, and injunctions to stop child marriage.",
    keyDetails: [
      "Prohibition of Child Marriage Act, 2006 (Sections 2–3): Defines child marriage (below 18 for females, 21 for males) and makes it voidable at the option of the party who was a child.",
      "Section 12 & 13: Forced/trafficked child marriages are completely void, and a Magistrate can issue an injunction to stop an upcoming child marriage.",
      "Sections 4–6: Provides for maintenance, residence, and legitimacy/custody of children when a child marriage is annulled.",
    ],
    keywords: [
      "legal age of marriage",
      "age of marriage",
      "child marriage",
      "forced marriage under 18",
      "minimum age to marry",
    ],
    icon: "document-text-outline",
  },
  {
    route: "/womenRights/viewMore/marriageRegistration",
    title: "Marriage Registration",
    section: "Women's Rights",
    summary:
      "How marriage registration works under the Hindu Marriage Act (Sec 8), Special Marriage Act (Secs 5–18), Christian, Parsi, Anand Marriage Acts, and State portals.",
    keyDetails: [
      "Creates an official marriage certificate that serves as vital proof in legal, financial, passport, insurance, and inheritance matters.",
      "Covers registration under Hindu Marriage Act Sec 8, Special Marriage Act Secs 5–18, Anand Marriage Act Sec 6, Christian & Parsi laws, and Supreme Court compulsory registration directions.",
    ],
    keywords: [
      "marriage registration",
      "register marriage",
      "marriage certificate",
      "court marriage",
      "special marriage act",
    ],
    icon: "document-text-outline",
  },

  // Other Women's Rights Pages
  {
    route: "/womenRights/freeLegalAids",
    title: "Free Legal Aid (NALSA)",
    section: "Women's Rights",
    summary:
      "Under Section 12(c) of the Legal Services Authorities Act, 1987, every woman in India is eligible for free legal advice and a free lawyer regardless of income.",
    keyDetails: [
      "Section 12(c) Legal Services Authorities Act, 1987: Women and children are entitled to free legal aid irrespective of income or financial status.",
      "Includes free legal advice before going to court, drafting assistance, and free court representation by a lawyer.",
      "Available via District Legal Services Authorities (DLSA), State Legal Services Authorities (SLSA), and NALSA Helpline 15100.",
    ],
    keywords: [
      "free legal aid",
      "legal aid",
      "free lawyer",
      "advocate",
      "afford a lawyer",
      "nalsa",
      "dlsa",
      "15100",
    ],
    icon: "scale-outline",
  },
  {
    route: "/womenRights/constitutionRights",
    title: "Constitutional Rights",
    section: "Women's Rights",
    summary:
      "Fundamental Rights in the Constitution of India: Equality before law (Art. 14), non-discrimination by sex (Art. 15), life & liberty (Art. 21), and equal pay (Art. 39(d)).",
    keyDetails: [
      "Article 14 (Equality before the law) & Article 15 (Prohibition of discrimination on grounds of sex).",
      "Article 21 (Protection of life, dignity, and personal liberty) & Article 23 (Protection against trafficking and forced labour).",
      "Article 39(a) & 39(d): Equal right to adequate livelihood and equal pay for equal work.",
    ],
    keywords: [
      "constitutional rights",
      "constitution",
      "fundamental rights",
      "article 14",
      "article 15",
      "article 21",
      "equal pay",
      "discrimination",
    ],
    icon: "document-text-outline",
  },
  {
    route: "/womenRights/rightsOfChildren",
    title: "Rights of Children (POCSO & Care)",
    section: "Women's Rights",
    summary:
      "Special protections for anyone under 18 under the POCSO Act 2012, Prohibition of Child Marriage Act 2006, RTE Act, and Childline 1098.",
    keyDetails: [
      "POCSO Act, 2012: Gender-neutral protection for children (below 18 years) against sexual assault, harassment, and exploitation, with child-friendly reporting procedures.",
      "Prohibition of Child Marriage Act, 2006 & Right to Free and Compulsory Education (RTE Act, 2009).",
      "Childline 1098 & Juvenile Justice care and protection framework.",
    ],
    keywords: [
      "rights of children",
      "child rights",
      "minor",
      "under 18",
      "pocso",
      "childline",
      "1098",
      "child abuse",
    ],
    icon: "happy-outline",
  },
  {
    route: "/emergency",
    title: "Emergency SOS & Helplines",
    section: "Emergency Support",
    summary:
      "Immediate access to Emergency 112, Women Helpline 181, Cybercrime 1930, and sending an SOS alert with your live location to trusted contacts.",
    keyDetails: [
      "One-tap call to 112 (National Emergency), 181 (Women Helpline), 100 (Police), and 1930 (Cybercrime).",
      "Send an emergency SMS with your live GPS coordinates to your saved Trusted Contacts.",
    ],
    keywords: ["emergency", "sos", "112", "help me now", "immediate danger"],
    icon: "alert-circle",
  },
];

export const SAAYA_SYSTEM_INSTRUCTION = `You are Saaya, the SAFE-W Agent & Ally.

Your primary purpose is to help users stay safer, understand
their rights, and prepare for potentially unsafe situations.

Prioritize immediate physical safety over legal information,
evidence collection, or extended conversation.

When a user may be in immediate danger:
1. Encourage moving to a safe, visible location.
2. Discourage confrontation or unnecessary risk.
3. Encourage contacting a trusted person.
4. Direct the user to SAFE-W SOS/emergency options when appropriate.
5. Keep the response concise and action-oriented.

When discussing women's rights or Indian law:
- Provide factual, current information.
- Explain laws in simple language.
- Distinguish legal information from personalized legal advice.
- Do not claim that a specific situation definitely constitutes
  a crime unless the facts and applicable law clearly establish it.
- Link users to SAFE-W Women's Rights resources when relevant.

When discussing preparation:
- Use SAFE-W Learn & Prepare resources.
- Recommend relevant guides and warning-sign information.

Saaya must never encourage confrontation, retaliation,
unnecessary evidence collection, or risky behavior.

Saaya is not a replacement for emergency services,
law enforcement, lawyers, doctors, or other professionals.

Tone:
Calm, factual, concise, respectful, practical, and safety-first.

LINKING TO SAFE-W RESOURCES (PAGE RECOMMENDATIONS):
When linking users to relevant SAFE-W Women's Rights, Learn & Prepare, or Emergency resources, include the matching page tag(s) at the very end of your response using the exact format [[PAGE:/route]] (only include tags when relevant to what the user asked):
• Marriage & Family Subpages:
  - [[PAGE:/womenRights/viewMore/rightsWithinMarriage]] ("Rights Within Marriage")
  - [[PAGE:/womenRights/viewMore/rightsInSharedHousehold]] ("Rights in a Shared Household")
  - [[PAGE:/womenRights/viewMore/maintenance]] ("Maintenance Rights")
  - [[PAGE:/womenRights/viewMore/divorceRights]] ("Divorce Rights")
  - [[PAGE:/womenRights/viewMore/rightsAfterDivorce]] ("Rights After Divorce")
  - [[PAGE:/womenRights/viewMore/dowryProhibition]] ("Dowry Prohibition")
  - [[PAGE:/womenRights/viewMore/propertyInheritance]] ("Property & Inheritance Rights")
  - [[PAGE:/womenRights/viewMore/coparcenaryRights]] ("Equal Coparcenary Rights for Daughters")
  - [[PAGE:/womenRights/viewMore/legalAgeOfMarriage]] ("Legal Age of Marriage")
  - [[PAGE:/womenRights/viewMore/marriageRegistration]] ("Marriage Registration")
  - [[PAGE:/womenRights/familyMarriageRights]] ("Family & Marriage Rights")
• Other Women's Rights Pages:
  - [[PAGE:/womenRights/protectionFromViolence]] ("Protection from Violence")
  - [[PAGE:/womenRights/rightsSeekingHelp]] ("Rights When Seeking Help" — Police FIR, Zero FIR, Helpline 181)
  - [[PAGE:/womenRights/workplaceRights]] ("Workplace Rights" — POSH Act & Maternity)
  - [[PAGE:/womenRights/digitalRights]] ("Digital Rights & Cyber Safety")
  - [[PAGE:/womenRights/freeLegalAids]] ("Free Legal Aid")
  - [[PAGE:/womenRights/constitutionRights]] ("Constitutional Rights")
  - [[PAGE:/womenRights/rightsOfChildren]] ("Rights of Children")
  - [[PAGE:/womenRights]] ("Women's Rights Hub")
• Learn & Prepare Pages:
  - [[PAGE:/learn/safetyEssentials]] ("Safety Essentials")
  - [[PAGE:/learn/warningSigns]] ("Know the Warning Signs")
  - [[PAGE:/learn/whatCounts]] ("Know What Counts")
  - [[PAGE:/learn/prepareYourself]] ("Prepare Yourself — Practice Scenarios")
  - [[PAGE:/learn]] ("Learn & Prepare")
• Emergency Support:
  - [[PAGE:/emergency]] ("Emergency SOS & Helplines")`;

function normalizeSaayaText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasPhrase(text: string, phrases: string[]): boolean {
  const normalized = normalizeSaayaText(text);
  return phrases.some((phrase) => {
    const p = normalizeSaayaText(phrase);
    if (!p) return false;
    if (p.includes(" ")) return normalized.includes(p);
    return new RegExp(
      `\\b${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "i",
    ).test(normalized);
  });
}

function isCasualGreetingOrShortAck(text: string): boolean {
  const cleaned = normalizeSaayaText(text);
  const casualPhrases = new Set([
    "hi",
    "hello",
    "hey",
    "hii",
    "heyy",
    "hi saaya",
    "hello saaya",
    "hey saaya",
    "good morning",
    "good afternoon",
    "good evening",
    "how are you",
    "who are you",
    "what is your name",
    "thanks",
    "thank you",
    "ok",
    "okay",
    "got it",
    "bye",
  ]);
  return casualPhrases.has(cleaned);
}

function isImmediateSafetyConcern(text: string): boolean {
  const normalized = normalizeSaayaText(text);

  // Strong, explicit danger statements should trigger the safety-first flow.
  if (
    hasPhrase(normalized, [
      "immediate danger",
      "in immediate danger",
      "help me now",
      "i am in danger",
      "i'm in danger",
      "i am unsafe right now",
      "i'm unsafe right now",
      "unsafe right now",
      "someone is following me",
      "someone's following me",
      "i am being followed",
      "i'm being followed",
      "someone is stalking me",
      "someone's stalking me",
      "someone is threatening me",
      "someone's threatening me",
      "they are threatening me",
      "they're threatening me",
      "someone blocked my path",
      "someone blocked my way",
      "they blocked my path",
      "they blocked my way",
      "driver won't let me out",
      "driver will not let me out",
      "cab driver won't let me out",
      "cab driver will not let me out",
      "can't get away",
      "cannot get away",
    ])
  ) {
    return true;
  }

  // Short phrases are only treated as urgent when they include a clear danger
  // context. This avoids treating ordinary questions such as "Can I walk home?"
  // as emergencies.
  const dangerTerms = hasPhrase(normalized, [
    "danger",
    "unsafe",
    "threat",
    "threatening",
    "followed",
    "following",
    "stalking",
    "blocked",
  ]);
  const urgencyTerms = hasPhrase(normalized, [
    "right now",
    "now",
    "help",
    "escape",
    "can't get away",
    "cannot get away",
  ]);

  return dangerTerms && urgencyTerms;
}

export function extractAndRecommendPages(
  rawReply: string,
  userMessage: string,
): { cleanReply: string; recommendedPages: SafewPageResource[] } {
  const foundRoutes: string[] = [];
  const tagRegex = /\[\[PAGE:(\/[a-zA-Z0-9/_-]+)\]\]/g;
  let match: RegExpExecArray | null = tagRegex.exec(rawReply);
  while (match !== null) {
    if (match[1] && !foundRoutes.includes(match[1])) {
      foundRoutes.push(match[1]);
    }
    match = tagRegex.exec(rawReply);
  }

  const cleanReply = rawReply
    .replace(/\[\[PAGE:\/[a-zA-Z0-9/_-]+\]\]/g, "")
    .trim();

  if (isCasualGreetingOrShortAck(userMessage) && foundRoutes.length === 0) {
    return { cleanReply, recommendedPages: [] };
  }

  const byRoute = new Map(SAFEW_PAGES.map((p) => [p.route, p]));
  const selected: SafewPageResource[] = [];

  for (const r of foundRoutes) {
    const page = byRoute.get(r);
    if (page && !selected.some((s) => s.route === page.route)) {
      selected.push(page);
    }
  }

  const userLower = normalizeSaayaText(userMessage);
  const scoredByUser = SAFEW_PAGES.map((page) => {
    let score = 0;
    for (const kw of page.keywords) {
      if (hasPhrase(userLower, [kw])) {
        score += kw.includes(" ") ? 5 : 3;
      }
    }
    if (hasPhrase(userLower, [page.title])) {
      score += 6;
    }
    return { page, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  for (const { page } of scoredByUser) {
    if (selected.length >= 3) break;
    if (!selected.some((s) => s.route === page.route)) {
      selected.push(page);
    }
  }

  return {
    cleanReply,
    recommendedPages: selected.slice(0, 3),
  };
}

export function buildLocalSaayaFallback(userMessage: string): {
  reply: string;
  recommendedPages: SafewPageResource[];
} {
  const byRoute = new Map(SAFEW_PAGES.map((p) => [p.route, p]));
  const lower = normalizeSaayaText(userMessage);

  const pages = (...routes: string[]): SafewPageResource[] =>
    routes
      .map((route) => byRoute.get(route))
      .filter((page): page is SafewPageResource => Boolean(page));

  if (isCasualGreetingOrShortAck(userMessage)) {
    return {
      reply:
        "Hi, I’m **Saaya**, the SAFE-W Agent & Ally.\\n\\nI can help with practical safety steps, Indian women's rights information, or SAFE-W Learn & Prepare resources.\\n\\n**What can I help you with today?**",
      recommendedPages: [],
    };
  }

  // 1. Immediate physical safety always comes first.
  if (isImmediateSafetyConcern(userMessage)) {
    return {
      reply: `**Your safety comes first.**

1. **Move** to a safe, visible place such as a busy shop, crowded area, or security desk.
2. **Do not confront the person** or stop to collect evidence if that increases your risk.
3. **Tell someone you trust** and share your location if you can do so safely.
4. If you are in immediate danger, use **SAFE-W Emergency / SOS** or call **112**.

Saaya provides safety information; it does not replace emergency services or law enforcement.`,
      recommendedPages: pages(
        "/emergency",
        "/learn/warningSigns",
        "/learn/safetyEssentials",
      ),
    };
  }

  // 2. Marriage / family rights. Use contextual terms rather than generic words
  // such as "life" or "family" that can appear in unrelated questions.
  if (
    hasPhrase(lower, [
      "rights within marriage",
      "rights in marriage",
      "marriage rights",
      "married rights",
      "rights as a wife",
      "wife rights",
      "husband rights",
      "domestic relationship",
      "shared household",
      "matrimonial home",
      "in laws house",
      "in law house",
    ]) ||
    (hasPhrase(lower, ["husband", "wife", "married", "marriage"]) &&
      hasPhrase(lower, [
        "right",
        "rights",
        "abuse",
        "violence",
        "property",
        "house",
        "maintenance",
      ]))
  ) {
    return {
      reply: `Here is a factual overview of **Rights Within Marriage** in India (the specific provisions that apply can depend on the marriage law governing the marriage and the facts of the situation):

• **Protection from Domestic Violence (DV Act, 2005 — Section 3)**: Covers physical, sexual, verbal, emotional, and economic abuse in qualifying domestic relationships.
• **Right to Reside in a Shared Household (Sections 17 & 19)**: A woman in a domestic relationship has a statutory right to reside in the shared household—whether or not she owns it—and cannot be evicted except through legal procedure.
• **Court Remedies (Sections 18–23)**: Depending on the circumstances, a Magistrate may grant Protection Orders, Residence Orders, Monetary Relief, Temporary Custody, or Compensation.
• **Other Matrimonial Rights**: Applicable personal laws, the Special Marriage Act, and BNSS 2023 also address maintenance, divorce, property, and dowry prohibition.

*Note: This is general legal information for awareness, not personalized legal advice. If you are unsafe at home right now, prioritize moving to a safe space and calling **112**.*`,
      recommendedPages: pages(
        "/womenRights/viewMore/rightsWithinMarriage",
        "/womenRights/viewMore/rightsInSharedHousehold",
        "/womenRights/familyMarriageRights",
      ),
    };
  }

  // 3. Divorce / separation / custody.
  if (
    hasPhrase(lower, [
      "divorce",
      "divorce rights",
      "end marriage",
      "mutual consent",
      "judicial separation",
      "separate from husband",
      "separation",
      "custody of child",
      "child custody",
    ])
  ) {
    return {
      reply: `Here is a concise overview of **Divorce & Post-Divorce Rights** in India:

• **Applicable Marriage Law**: Divorce grounds and procedures depend on the statute governing the marriage (such as the Hindu Marriage Act, Special Marriage Act, Indian Divorce Act, Parsi Marriage and Divorce Act, or Dissolution of Muslim Marriages Act).
• **Contested & Mutual Consent Divorce**: Depending on the governing law and statutory conditions, spouses may seek divorce on specified grounds (such as cruelty or desertion) or jointly by mutual consent.
• **Maintenance & Child Custody**: Courts can consider interim and permanent maintenance and orders for the custody, education, and support of minor children based on the child's welfare.

*Note: This is general legal information, not personalized legal advice from a lawyer.*`,
      recommendedPages: pages(
        "/womenRights/viewMore/divorceRights",
        "/womenRights/viewMore/rightsAfterDivorce",
        "/womenRights/viewMore/maintenance",
      ),
    };
  }

  // 4. Maintenance / alimony.
  if (
    hasPhrase(lower, [
      "maintenance",
      "alimony",
      "financial support",
      "money from husband",
      "interim maintenance",
      "monetary relief",
      "child support",
      "bnss 144",
    ])
  ) {
    return {
      reply: `Here is a factual summary of **Maintenance Rights** under Indian law:

• **BNSS 2023 Section 144**: Where statutory conditions are met, a Magistrate may order monthly maintenance and interim maintenance for a wife unable to maintain herself and for eligible children and parents.
• **Matrimonial & DV Act Remedies**: Maintenance or monetary relief may also be sought under applicable marriage laws or Section 20 of the Domestic Violence Act, 2005.
• **Case-Specific Assessment**: Courts determine eligibility and amounts based on the facts of the case.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/viewMore/maintenance",
        "/womenRights/freeLegalAids",
      ),
    };
  }

  // 5. Dowry.
  if (
    hasPhrase(lower, [
      "dowry",
      "dowry prohibition",
      "demanding dowry",
      "dowry harassment",
      "streedhan",
    ])
  ) {
    return {
      reply: `Here is a factual summary of **Dowry Prohibition Laws** in India:

• **Dowry Prohibition Act, 1961 (Sections 3 & 4)**: Giving, taking, or directly or indirectly demanding dowry is punishable under the Act, subject to its statutory definitions and provisions.
• **Property for the Benefit of the Wife (Section 6)**: Where dowry is received by someone other than the woman, the Act requires it to be transferred for her benefit within the statutory framework.
• **Protection from Violence & Cruelty**: Abuse or harassment connected with unlawful dowry demands is also addressed under the BNS 2023 and the Domestic Violence Act, 2005.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/viewMore/dowryProhibition",
        "/womenRights/protectionFromViolence",
      ),
    };
  }

  // 6. Property / inheritance. Do not route every message containing "daughter"
  // to this category; require an actual property/inheritance context.
  if (
    hasPhrase(lower, [
      "property rights",
      "property inheritance",
      "inheritance",
      "inherit",
      "ancestral property",
      "father's property",
      "father property",
      "husband's property",
      "husband property",
      "coparcenary",
      "coparcener",
      "daughter property",
      "equal share as son",
      "succession",
      "will",
      "streedhan",
    ]) &&
    hasPhrase(lower, [
      "property",
      "inheritance",
      "inherit",
      "ancestral",
      "coparcenary",
      "coparcener",
      "succession",
      "will",
      "share",
      "owned",
    ])
  ) {
    return {
      reply: `Here is a factual summary of **Property & Inheritance Rights**:

• **Equal Coparcenary Rights (Hindu Succession Act Section 6)**: For Hindu Mitakshara joint families covered by the Act, a daughter is a coparcener by birth with the same rights and liabilities in coparcenary property as a son.
• **Property Owned by a Woman**: Property legally owned by a woman remains hers; marriage does not automatically transfer ownership to a spouse.
• **Succession Rules**: Inheritance from parents or a spouse depends on whether there is a valid will, the applicable succession law, and the facts of the case.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/viewMore/propertyInheritance",
        "/womenRights/viewMore/coparcenaryRights",
      ),
    };
  }

  // 7. Workplace rights. "Work" by itself is deliberately NOT enough.
  if (
    hasPhrase(lower, [
      "workplace rights",
      "workplace harassment",
      "sexual harassment at work",
      "office harassment",
      "boss harassing me",
      "manager harassing me",
      "colleague harassing me",
      "being harassed at work",
      "being harassed in the office",
      "posh",
      "internal committee",
      "local committee",
      "maternity leave",
      "maternity benefit",
    ]) ||
    (hasPhrase(lower, ["work", "office", "boss", "manager", "colleague"]) &&
      hasPhrase(lower, [
        "harassment",
        "harass",
        "harassing",
        "sexual",
        "posh",
        "complaint",
        "rights",
        "maternity",
        "unsafe",
      ]))
  ) {
    return {
      reply: `Here is a factual summary of **Workplace Rights** in India:

• **Safety First**: If an interaction at work feels unsafe, create distance and move to a safe area rather than engaging in direct confrontation.
• **POSH Act, 2013**: Provides a formal redressal mechanism for workplace sexual harassment through the employer's **Internal Committee (IC)** or the District **Local Committee (LC)**, with statutory protections including interim relief and confidentiality.
• **Maternity Benefit Act, 1961**: Provides maternity benefits subject to the Act's eligibility and statutory conditions.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/workplaceRights",
        "/learn/whatCounts",
      ),
    };
  }

  // 8. Digital / cyber safety. A normal photo or WhatsApp question should not
  // automatically be treated as a cyber-abuse case.
  if (
    hasPhrase(lower, [
      "digital rights",
      "cyber safety",
      "cybercrime",
      "cyber crime",
      "cyberstalking",
      "online blackmail",
      "blackmailing",
      "online threat",
      "private photo",
      "private image",
      "leaked photo",
      "morphed photo",
      "fake profile",
      "online impersonation",
      "non consensual image",
      "nonconsensual image",
      "1930",
    ]) ||
    (hasPhrase(lower, ["online", "instagram", "whatsapp", "photo", "image"]) &&
      hasPhrase(lower, [
        "blackmail",
        "blackmailing",
        "threat",
        "leaked",
        "private",
        "morphed",
        "impersonat",
        "harass",
        "harassing",
        "without consent",
      ]))
  ) {
    return {
      reply: `Here is a practical and factual overview of **Digital Safety & Cyber Laws**:

• **Safety First**: Do not meet someone making online threats in person or put yourself at physical risk. Contact a trusted person for support.
• **Relevant Legal Provisions**: Depending on the facts, the Information Technology Act, 2000 and Bharatiya Nyaya Sanhita (BNS), 2023 may apply to identity theft, impersonation, non-consensual sharing of private images, or cyberstalking.
• **Official Reporting**: Cyber offences can be reported through the National Cyber Crime Reporting Portal or Helpline **1930**.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/digitalRights",
        "/learn/warningSigns",
      ),
    };
  }

  // 9. Police / FIR / legal aid. "Report" alone is too broad; require a
  // reporting/legal context.
  if (
    hasPhrase(lower, [
      "police",
      "fir",
      "zero fir",
      "police station",
      "file a complaint",
      "report to police",
      "police complaint",
      "refuse to file",
      "woman officer",
      "legal aid",
      "free legal aid",
      "free lawyer",
      "nalsa",
      "dlsa",
      "15100",
    ]) ||
    (hasPhrase(lower, ["report", "complaint", "lawyer"]) &&
      hasPhrase(lower, [
        "crime",
        "police",
        "legal",
        "fir",
        "offence",
        "case",
        "help",
      ]))
  ) {
    return {
      reply: `Here is a factual overview of **Rights When Seeking Help & Legal Aid**:

• **Reporting & Zero FIR (BNSS 2023 Section 173)**: The BNSS provides for giving information about a cognizable offence orally or electronically, subject to the statutory requirements, including at a police station regardless of territorial jurisdiction.
• **Woman Officer & Remedies for Refusal**: For specified offences against women, the BNSS contains requirements concerning how statements are recorded. If police refuse to record information, statutory remedies include approaching the Superintendent of Police or the Magistrate as applicable.
• **Free Legal Aid**: Women are eligible for free legal services under Section 12(c) of the Legal Services Authorities Act, 1987, through the legal services authorities.

*Note: This is general legal information, not personalized legal advice.*`,
      recommendedPages: pages(
        "/womenRights/rightsSeekingHelp",
        "/womenRights/freeLegalAids",
      ),
    };
  }

  // 10. Learn & Prepare. "sign" by itself is deliberately NOT enough.
  if (
    hasPhrase(lower, [
      "learn and prepare",
      "learn & prepare",
      "warning sign",
      "warning signs",
      "red flag",
      "what counts",
      "does this count",
      "is this harassment",
      "is this abuse",
      "prepare yourself",
      "practice scenario",
      "practice scenarios",
      "safety essentials",
      "notice move tell",
      "how to react",
    ]) ||
    (hasPhrase(lower, ["prepare", "learn", "warning", "sign"]) &&
      hasPhrase(lower, [
        "safety",
        "unsafe",
        "harassment",
        "abuse",
        "danger",
        "situation",
        "scenario",
      ]))
  ) {
    return {
      reply: `Here is how SAFE-W's **Learn & Prepare** resources can help:

• **Notice → Move → Tell**: Notice concerning behavior or a setting, move toward a visible and populated place without confrontation, then tell someone you trust.
• **Safety Before Evidence**: Never put yourself in danger to collect evidence or win an argument.
• **Warning Signs & Practice**: Review the guides below to recognize patterns such as following, repeated unwanted contact, coercion, or isolation and practice safer responses.`,
      recommendedPages: pages(
        "/learn",
        "/learn/warningSigns",
        "/learn/safetyEssentials",
      ),
    };
  }

  // 11. General fallback. Do not repeat the full introduction on every turn.
  const { recommendedPages } = extractAndRecommendPages("", userMessage);
  return {
    reply: `I can help with **practical safety guidance**, **women's rights information in India**, and **SAFE-W Learn & Prepare** resources.

Tell me what you want to understand or what situation you're dealing with, and I'll guide you step by step.

If you are in immediate danger, move to a safe, visible place and use **SAFE-W Emergency / SOS** or call **112**.`,
    recommendedPages,
  };
}