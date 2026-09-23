import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
  },
  accordionButton: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 14,
    padding: 15,
    minHeight: 50,
  },
  accordionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  accordionContent: {
    flex: 1,
  },
  articleLabel: {
    color: "#dcecff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  arrow: {
    fontSize: 20,
    color: "#fff",
  },
  expandedContent: {
    backgroundColor: "#e8f4f8",
    padding: 15,
    marginHorizontal: 14,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#67a2e1",
  },
  expandedText: {
    fontSize: 14,
    textAlign: "left",
    color: "#333",
    lineHeight: 22,
  },
  nestedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#67a2e1",
    marginTop: 12,
    marginBottom: 8,
  },
  note: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 12,
    marginBottom: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: "#67a2e1",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f4e92",
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 14,
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
});

type ViolenceProtectionItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function ProtectionFromViolence() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const protectionFromViolence = [
    {
      law: "BNS, 2023 — Sections 63–64",
      title: "Rape",
      meaning:
        "Section 63 defines rape and specifies the circumstances in which sexual acts constitute the offence. Section 64 provides punishment for rape.",
      whyItMatters:
        "It provides criminal protection against rape and establishes punishment for the offence.",
    },

    {
      law: "BNS, 2023 — Section 62",
      title: "Attempt to Commit Rape",
      meaning:
        "Section 62 provides punishment for an attempt to commit an offence when the person does an act towards its commission and no specific punishment for that attempt is provided.",
      whyItMatters:
        "It can apply when conduct amounts to an attempt to commit an offence such as rape, even when the completed offence does not occur.",
    },

    {
      law: "BNS, 2023 — Section 75",
      title: "Sexual Harassment",
      meaning:
        "Section 75 covers specified forms of sexual harassment, including unwelcome sexual advances or demands for sexual favours, showing pornography against a woman's will, and sexually coloured remarks.",
      whyItMatters:
        "It recognizes specified forms of unwanted sexual conduct as a criminal offence.",
    },

    {
      law: "BNS, 2023 — Section 78",
      title: "Stalking",
      meaning:
        "Section 78 covers specified repeated following or contacting of a woman despite a clear indication of disinterest, including certain forms of monitoring her internet, email or other electronic communication.",
      whyItMatters:
        "It provides criminal protection against conduct that falls within the legal definition of stalking.",
    },

    {
      law: "BNS, 2023 — Section 77",
      title: "Voyeurism",
      meaning:
        "Section 77 addresses watching, capturing images of a woman engaged in a private act in circumstances where she would ordinarily expect privacy, or disseminating such images.",
      whyItMatters:
        "It provides criminal protection against specified violations of a woman's privacy involving private acts.",
    },

    {
      law: "BNS, 2023 — Section 74",
      title: "Assault or Criminal Force Against a Woman",
      meaning:
        "Section 74 addresses assault or use of criminal force against a woman with intent to outrage, or knowing it is likely to outrage, her modesty.",
      whyItMatters:
        "It provides criminal protection against specified forms of physical assault or criminal force directed at women.",
    },

    {
      law: "Protection of Women from Domestic Violence Act, 2005 — Section 3",
      title: "Domestic Violence",
      meaning:
        "Section 3 defines domestic violence and covers specified forms of physical, sexual, verbal or emotional, and economic abuse within the relationships covered by the Act.",
      whyItMatters:
        "The Act provides protections and remedies for women experiencing domestic violence, including protection and residence orders.",
    },

    {
      law: "BNS, 2023 — Section 80",
      title: "Dowry Death",
      meaning:
        "Section 80 addresses the death of a woman in circumstances covered by the statutory definition of dowry death, including specified cruelty or harassment connected with a dowry demand.",
      whyItMatters:
        "It provides specific criminal protection in cases involving dowry-related deaths.",
    },

    {
      law: "BNS, 2023 — Section 124",
      title: "Acid Attack",
      meaning:
        "Section 124 addresses voluntarily causing grievous hurt by use of acid or a similar substance.",
      whyItMatters:
        "It provides specific criminal protection against acid attacks and related serious harm.",
    },

    {
      law: "BNS, 2023 — Section 143",
      title: "Trafficking of Persons",
      meaning:
        "Section 143 addresses trafficking of persons through specified acts and means for specified exploitative purposes.",
      whyItMatters:
        "It provides criminal protection against human trafficking and exploitation.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderSection = (
    heading: string,
    items: ViolenceProtectionItem[],
    description?: string,
  ) => (
    <View>
      <Text style={styles.sectionTitle}>{heading}</Text>
      {description && (
        <Text style={styles.sectionDescription}>{description}</Text>
      )}

      {items.map((item) => {
        const isExpanded = expandedId === item.law;

        return (
          <View key={item.law}>
            <Pressable
              accessibilityRole="button"
              style={styles.accordionButton}
              onPress={() => toggleAccordion(item.law)}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.articleLabel}>{item.law}</Text>
                <Text style={styles.accordionText}>{item.title}</Text>
              </View>
              <Text style={styles.arrow}>{isExpanded ? "▼" : "▶"}</Text>
            </Pressable>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <Text style={styles.nestedTitle}>What it means</Text>
                <Text style={styles.expandedText}>{item.meaning}</Text>
                <Text style={styles.nestedTitle}>Why it matters</Text>
                <Text style={styles.expandedText}>{item.whyItMatters}</Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.content}>
        Know the laws that protect women from violence, abuse, exploitation, and
        other offences.
      </Text>

      {renderSection("know the laws", protectionFromViolence)}
    </ScrollView>
  );
}
