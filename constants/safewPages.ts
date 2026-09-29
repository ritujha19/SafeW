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

export const SAAYA_SYSTEM_INSTRUCTION = `You are Saaya, the SAFE-W Agent & Ally — a compassionate, empathetic, and safety-first companion for women and their allies.

CORE MISSION & AUTONOMY:
- You must thoughtfully and directly answer ANY question a user asks about women's safety, feeling unsure or uneasy in a situation, boundaries, harassment, stalking, domestic or relationship concerns, digital safety, workplace discomfort, travel/commute safety, helping another woman in distress, or women's legal rights.
- Users will often describe unfamiliar, subtle, or messy real-life situations that are not pre-scripted. NEVER say "Sorry, Saaya doesn't know this" or give a generic menu of topics. Always reason through the user's specific situation on your own while strictly following every instruction below.

EMPATHY, VALIDATION & SYMPATHY FOR WOMEN:
1. When a woman feels unsure, confused, anxious, or unsafe (e.g., "Am I overthinking?", "Something feels off", "I don't know if this counts"):
   - Start with warm empathy and validation. Reassure her immediately that her instincts and feelings are completely valid and that she never needs 100% proof of danger before choosing her comfort and safety.
   - Never judge, blame, or dismiss her concern. Speak like a calm, caring, protective sister or ally.
2. When a user asks about or wants to help another woman in that condition (e.g., seeing a girl being stalked/followed, supporting a friend/sister/colleague facing abuse, coercion, or fear):
   - Express genuine empathy and sympathy for the woman going through that frightening or isolating situation, and appreciate the user's care in wanting to help her.
   - Help the user understand how overwhelmed, frozen, or scared the woman may feel so the user can offer gentle, non-startling, survivor-centered support.

NON-NEGOTIABLE SAFETY INSTRUCTIONS TO FOLLOW IN EVERY REPLY:
1. Immediate Physical Safety First:
   - Always prioritize immediate physical safety over legal details, collecting evidence, or extended debate.
   - Remind users: "Safety comes before evidence—never put yourself in danger just to take a photo, record, or prove what happened."
2. Never Encourage Confrontation or Risky Behavior:
   - Strictly discourage direct physical or verbal confrontation with a stalker, harasser, abuser, or aggressor, as confrontation can rapidly escalate into violence.
3. Follow the SAFE-W "Notice → Move → Tell" Framework:
   - Notice: Trust your gut early when someone's behavior or a setting feels wrong.
   - Move: Calmly create distance and move toward a well-lit, visible, populated area (an open shop, security guard desk, reception counter, metro/bus staff, or crowd)—avoid isolated shortcuts or leading a follower to an empty home.
   - Tell: Call or message a trusted contact, alert nearby staff/security, or use emergency helplines (**112** National Emergency, **181** Women Helpline, **1091** Women in Distress, **1930** Cybercrime, **15100** Free Legal Aid).
4. Safe Bystander / Ally Intervention (When Helping Another Woman):
   - Advise calm, indirect support focused on the woman at risk—NOT confronting or fighting the stalker/harasser.
   - Suggest calmly approaching her in a visible area, speaking gently (or greeting her like an acquaintance/friend so the stalker sees she is not alone), walking together toward a well-lit shop/crowd/security guard, respecting her comfort, and calling **112** or **181** if danger persists.
5. Discussing Women's Rights & Indian Law:
   - Provide factual, current information in simple, reassuring language (e.g., BNS 2023 Sections 74–80, BNSS 2023 Section 173 Zero FIR & free FIR copy, Domestic Violence Act 2005, POSH Act 2013, IT Act Section 66E, Marriage & Family rights, NALSA Free Legal Aid Section 12(c)).
   - Clearly distinguish general legal awareness from personalized legal advice from a lawyer, and do not claim a specific situation definitely constitutes a crime unless facts and law clearly establish it.
6. Scope Reminder:
   - Include a brief note when appropriate that Saaya is an AI safety & awareness companion, not a replacement for emergency services (112), law enforcement, lawyers, or doctors.

TONE:
Warm, empathetic, sympathetic, calm, validating, practical, concise, and safety-first.

LINKING TO SAFE-W RESOURCES (PAGE RECOMMENDATIONS):
When relevant to the user's question, include 1 to 3 matching page tag(s) at the very end of your response using the exact format [[PAGE:/route]]:
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

function isCasualGreetingOrShortAck(text: string): boolean {
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
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

export function extractAndRecommendPages(
  rawReply: string,
  userMessage: string,
): { cleanReply: string; recommendedPages: SafewPageResource[] } {
  const foundRoutes: string[] = [];
  const tagRegex = /\[\[PAGE:(\/[a-zA-Z0-9/_-]+)\]\]/g;
  let match: RegExpExecArray | null = tagRegex.exec(rawReply);

  while (match !== null) {
    if (match[1] && !foundRoutes.includes(match[1])) foundRoutes.push(match[1]);
    match = tagRegex.exec(rawReply);
  }

  const cleanReply = rawReply
    .replace(/\[\[PAGE:\/[a-zA-Z0-9/_-]+\]\]/g, "")
    .trim();

  if (isCasualGreetingOrShortAck(userMessage) && foundRoutes.length === 0) {
    return { cleanReply, recommendedPages: [] };
  }

  const byRoute = new Map(SAFEW_PAGES.map((page) => [page.route, page]));
  const selected: SafewPageResource[] = [];
  const userLower = userMessage.toLowerCase();

  // Detect active danger without using overly broad phrases such as
  // standalone "right now" or "scared".
  const immediateDangerPatterns = [
    "hurting me",
    "is hurting me",
    "hitting me",
    "is hitting me",
    "beating me",
    "is beating me",
    "attacking me",
    "is attacking me",
    "assaulting me",
    "is assaulting me",
    "trying to hurt me",
    "trying to attack me",
    "threatening me",
    "is threatening me",
    "following me",
    "is following me",
    "chasing me",
    "is chasing me",
    "blocking my way",
    "blocking me",
    "won't let me leave",
    "wont let me leave",
    "trapped",
    "in danger",
    "immediate danger",
    "danger right now",
    "need help now",
    "help me now",
    "happening right now",
    "happening now",
    "sos",
    "emergency",
  ];

  const activeBystanderViolencePatterns = [
    "is beating her",
    "is beating his wife",
    "is beating a woman",
    "is beating someone",
    "is hitting her",
    "is hitting his wife",
    "is hitting a woman",
    "is hitting someone",
    "is attacking her",
    "is attacking his wife",
    "is attacking a woman",
    "is attacking someone",
    "someone is beating",
    "someone is hitting",
    "someone is attacking",
    "person is beating",
    "person is hitting",
    "being physically attacked",
    "being attacked",
    "physically attacked",
    "woman is being attacked",
    "woman is being assaulted",
    "domestic violence is happening",
    "being abused",
    "getting abused",
    "abuse is happening",
    "violence is happening",
    "right now it is happening",
    "currently happening",
    "ongoing abuse",
    "ongoing domestic violence",
  ];

  const isImmediateDanger = immediateDangerPatterns.some((p) =>
    userLower.includes(p),
  );
  const isActiveBystanderViolence = activeBystanderViolencePatterns.some((p) =>
    userLower.includes(p),
  );
  const needsEmergencyPage = isImmediateDanger || isActiveBystanderViolence;

  // Emergency is always first when the message describes active danger.
  if (needsEmergencyPage) {
    const emergencyPage = byRoute.get("/emergency");
    if (emergencyPage) selected.push(emergencyPage);
  }

  // Score the user's actual situation before considering Gemini's tags.
  const scoredByUser = SAFEW_PAGES.map((page) => {
    let score = 0;

    for (const keyword of page.keywords) {
      if (userLower.includes(keyword.toLowerCase())) {
        score += keyword.includes(" ") ? 5 : 3;
      }
    }

    if (userLower.includes(page.title.toLowerCase())) score += 6;

    if (
      page.route === "/womenRights/protectionFromViolence" &&
      (userLower.includes("beating") ||
        userLower.includes("hitting") ||
        userLower.includes("hurt") ||
        userLower.includes("physical abuse") ||
        userLower.includes("attacking") ||
        userLower.includes("attacked") ||
        userLower.includes("violence") ||
        userLower.includes("rape") ||
        userLower.includes("rapist") ||
        userLower.includes("sexual assault") ||
        userLower.includes("sexually assaulted") ||
        userLower.includes("sexual violence") ||
        userLower.includes("forced") ||
        userLower.includes("forced humiliation"))
    ) {
      score += 10;
    }

    if (page.route === "/womenRights/rightsSeekingHelp" && needsEmergencyPage) {
      score += 6;
    }

    // "husband" / "wife" alone must NOT select Rights Within Marriage.
    if (
      page.route === "/womenRights/viewMore/rightsWithinMarriage" &&
      (userLower.includes("what rights") ||
        userLower.includes("my rights") ||
        userLower.includes("rights as a wife") ||
        userLower.includes("rights in marriage") ||
        userLower.includes("rights within marriage") ||
        userLower.includes("legal rights") ||
        userLower.includes("what are my rights"))
    ) {
      score += 8;
    }

    return { page, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Situation-based matches get priority.
  for (const { page } of scoredByUser) {
    if (selected.length >= 3) break;
    if (!selected.some((p) => p.route === page.route)) selected.push(page);
  }

  // Gemini tags only fill remaining slots.
  for (const route of foundRoutes) {
    if (selected.length >= 3) break;
    const page = byRoute.get(route);
    if (page && !selected.some((p) => p.route === page.route))
      selected.push(page);
  }

  return { cleanReply, recommendedPages: selected.slice(0, 3) };
}

export function buildLocalSaayaFallback(_userMessage: string): {
  reply: string;
  recommendedPages: SafewPageResource[];
} {
  return {
    reply:
      "I’m having trouble connecting to Saaya right now. Please try sending your message again. If there is an immediate safety risk, move to a safer public place and contact a trusted person or emergency support.",
    recommendedPages: [],
  };
}
