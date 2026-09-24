import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type LegalSection = {
  law: string;
  section: string;
  title: string;
  meaning: string;
  important?: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  introBox: {
    backgroundColor: "#f1f7fd",
    borderWidth: 1,
    borderColor: "#b8d5ef",
    borderRadius: 10,
    padding: 15,
    marginBottom: 18,
  },

  introTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#09325f",
    marginBottom: 8,
  },

  introText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 10,
    marginBottom: 8,
  },

  sectionDescription: {
    fontSize: 14,
    color: "#555",
    lineHeight: 21,
    marginBottom: 10,
  },

  accordionButton: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 15,
    minHeight: 60,
  },

  accordionContent: {
    flex: 1,
    paddingRight: 10,
  },

  lawLabel: {
    color: "#dcecff",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 3,
  },

  accordionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  arrow: {
    fontSize: 20,
    color: "#fff",
  },

  expandedContent: {
    backgroundColor: "#e8f4f8",
    padding: 15,
    marginTop: -2,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#67a2e1",
  },

  nestedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#67a2e1",
    marginTop: 8,
    marginBottom: 7,
  },

  expandedText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },

  importantBox: {
    backgroundColor: "#fff8e6",
    borderWidth: 1,
    borderColor: "#e4c66a",
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },

  importantTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#765900",
    marginBottom: 5,
  },

  importantText: {
    fontSize: 13,
    color: "#4f430f",
    lineHeight: 20,
  },

  sourceBox: {
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },

  sourceTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 4,
  },

  sourceText: {
    fontSize: 12,
    color: "#555",
    lineHeight: 18,
  },

  noteBox: {
    backgroundColor: "#eef6ff",
    borderLeftWidth: 4,
    borderLeftColor: "#67a2e1",
    padding: 13,
    marginTop: 8,
    marginBottom: 15,
  },

  noteTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#09325f",
    marginBottom: 5,
  },

  noteText: {
    fontSize: 13,
    color: "#333",
    lineHeight: 20,
  },

  footer: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
    marginTop: 15,
    marginBottom: 20,
  },
});

export default function RightsWithinMarriage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

const legalSections: LegalSection[] = [
  {
    law: "General legal principle",
    section: "Constitution of India",
    title: "Marriage Does Not Remove Your Legal Rights",
    meaning:
      "Marriage does not make a woman lose her separate legal identity or place her outside the protection of law. The specific rights and remedies available in a matrimonial situation depend on the applicable law and the circumstances.",
    important:
      "India does not have one single matrimonial law that applies identically to every marriage. The applicable law can depend on the type of marriage and the circumstances.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 3",
    title: "Protection from Domestic Violence",
    meaning:
      "Section 3 defines domestic violence for the purposes of the Act. It covers physical abuse, sexual abuse, verbal and emotional abuse, and economic abuse when the statutory requirements are satisfied.",
    important:
      "Domestic violence is not limited to physical violence. The Act recognizes several forms of abuse.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 18",
    title: "Protection Orders",
    meaning:
      "When the Magistrate is satisfied that domestic violence has taken place or is likely to take place, the Magistrate may issue a protection order. The order can prohibit specified acts, including committing domestic violence, contacting the aggrieved person in specified ways, or interfering with certain assets or property.",
    important:
      "A protection order is made by the Magistrate according to the facts and requirements of the case.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 21",
    title: "Temporary Child Custody",
    meaning:
      "The Magistrate may grant temporary custody of a child or children to the aggrieved person or make arrangements concerning custody as permitted by the Act.",
    important:
      "This is a temporary remedy under the Domestic Violence Act and depends on the circumstances of the case.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 22",
    title: "Compensation and Damages",
    meaning:
      "The Magistrate may direct the respondent to pay compensation and damages for injuries, including mental torture and emotional distress, caused by domestic violence.",
    important:
      "The amount and grant of compensation depend on the circumstances and the order of the Magistrate.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 23",
    title: "Interim and Ex Parte Orders",
    meaning:
      "The Magistrate may grant interim orders during the proceedings. Where the statutory requirements are satisfied, the Magistrate may also grant an ex parte order on the basis of the application and affidavit.",
    important:
      "An interim or ex parte order provides temporary legal protection while the matter is being considered. It is not necessarily the final decision in the case.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 26",
    title: "Relief in Other Legal Proceedings",
    meaning:
      "Reliefs available under the Domestic Violence Act may also be sought in certain other legal proceedings before a civil court, family court or criminal court, subject to the requirements of the Act.",
    important:
      "The same situation can involve different legal proceedings, so the appropriate remedy depends on the facts and applicable law.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Sections 4–5",
    title: "Information and Duties of Authorities",
    meaning:
      "The Act provides a mechanism for giving information about domestic violence and sets out duties of police officers, service providers and Magistrates when they receive information about domestic violence.",
    important:
      "These provisions concern the response system and duties of authorities; they do not replace the individual remedies available under Sections 18–23.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Sections 8–10",
    title: "Protection Officers and Service Providers",
    meaning:
      "The Act provides for the appointment of Protection Officers and recognizes service providers who can assist women in matters covered by the Act.",
    important:
      "Protection Officers and recognized service providers are part of the statutory support mechanism under the Domestic Violence Act.",
  },

  {
    law: "Protection of Women from Domestic Violence Act, 2005",
    section: "Section 12",
    title: "Application to the Magistrate",
    meaning:
      "An aggrieved person or certain persons acting on her behalf may present an application to the Magistrate seeking one or more of the reliefs provided under the Act.",
    important:
      "The specific relief requested and the facts of the case determine what orders the Magistrate can consider.",
  },
];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.sectionTitle}>💍 Rights Within Marriage</Text>

      <View style={styles.introBox}>
        <Text style={styles.introTitle}>
          Marriage does not mean giving up your rights
        </Text>

        <Text style={styles.introText}>
          Being married does not remove a woman&apos;s protection under the law.
          Depending on the circumstances and the law applicable to the marriage,
          legal remedies can exist for domestic violence, residence, financial
          support, matrimonial disputes, divorce and matters involving children.
        </Text>

        <Text style={[styles.introText, { marginTop: 10 }]}>
          The exact rights and procedure can differ because India has different
          marriage and family-law frameworks.
        </Text>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteTitle}>⚖️ Important</Text>

        <Text style={styles.noteText}>
          The laws below do not all apply to every marriage in the same way. The
          Hindu Marriage Act and Special Marriage Act, for example, apply in
          different legal circumstances. The Domestic Violence Act has its own
          scope and provides protections in qualifying domestic relationships.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>📖 Legal Rights & Protections</Text>

      <Text style={styles.sectionDescription}>
        Open each section to see the legal provision and its meaning in simple
        language.
      </Text>

      {legalSections.map((item, index) => {
        const id = `${item.law}-${item.section}-${index}`;
        const isExpanded = expandedId === id;

        return (
          <View key={id}>
            <Pressable
              accessibilityRole="button"
              style={styles.accordionButton}
              onPress={() => toggleAccordion(id)}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.lawLabel}>{item.title}</Text>

                <Text style={styles.accordionText}>{item.section}</Text>
              </View>

              <Text style={styles.arrow}>{isExpanded ? "▼" : "▶"}</Text>
            </Pressable>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <Text style={styles.nestedTitle}>⚖️ Applicable law</Text>

                <Text style={styles.expandedText}>{item.law}</Text>

                <Text style={styles.nestedTitle}>📖 What the law provides</Text>

                <Text style={styles.expandedText}>{item.meaning}</Text>

                {item.important && (
                  <View style={styles.importantBox}>
                    <Text style={styles.importantTitle}>⚠️ Important</Text>

                    <Text style={styles.importantText}>{item.important}</Text>
                  </View>
                )}

                <View style={styles.sourceBox}>
                  <Text style={styles.sourceTitle}>Source</Text>

                  <Text style={styles.sourceText}>
                    Official legislation / authoritative legal source identified
                    for the provision above.
                  </Text>
                </View>
              </View>
            )}
          </View>
        );
      })}

      <Text style={styles.sectionTitle}>🛡️ If a Marriage Becomes Unsafe</Text>

      <View style={styles.introBox}>
        <Text style={styles.introText}>
          A woman does not have to treat abuse as simply a &quot;marital
          problem.&quot; Where the statutory requirements are met, the
          Protection of Women from Domestic Violence Act provides legal remedies
          including protection orders, residence orders, monetary relief,
          custody orders and compensation.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>📌 Remember</Text>

      <View style={styles.noteBox}>
        <Text style={styles.noteTitle}>
          Your situation determines the applicable law
        </Text>

        <Text style={styles.noteText}>
          Marriage law can depend on the type of marriage, the statute governing
          it, the personal law involved and the facts of the situation. A
          legal-aid service or qualified lawyer can help determine which
          provisions apply to a particular case.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>🛡️ SafeW Legal Information Notice</Text>

      <Text style={styles.footer}>
        This page provides general legal information about selected statutory
        rights and remedies. It is not a substitute for legal advice in an
        individual case. The availability of a particular remedy depends on the
        applicable law and the facts and circumstances of the case.
      </Text>
    </ScrollView>
  );
}
