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

type ConstitutionalItem = {
  article: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function ConstitutionRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fundamentalRights = [
    {
      article: "Article 14",
      title: "Equality Before the Law",
      meaning:
        "Every person is equal before the law and is entitled to equal protection of the laws.",
      whyItMatters: "It supports equal treatment and protection under the law.",
    },
    {
      article: "Article 15",
      title: "Protection Against Discrimination",
      meaning:
        "The State cannot discriminate against a person on certain grounds, including sex.",
      whyItMatters:
        "It provides constitutional protection against discrimination based on sex.",
    },
    {
      article: "Article 16",
      title: "Equal Opportunity in Public Employment",
      meaning:
        "Citizens have equality of opportunity in matters of public employment.",
      whyItMatters: "It protects equal opportunity in government employment.",
    },
    {
      article: "Article 21",
      title: "Life and Personal Liberty",
      meaning:
        "No person can be deprived of life or personal liberty except according to procedure established by law.",
      whyItMatters:
        "It provides constitutional protection for life and personal liberty.",
    },
    {
      article: "Article 23",
      title: "Protection Against Exploitation",
      meaning:
        "Traffic in human beings, begar and other similar forms of forced labour are prohibited.",
      whyItMatters: "It protects people from trafficking and forced labour.",
    },
  ];
  const constitutionalPrinciples = [
    {
      article: "Article 39(a)",
      title: "Adequate Means of Livelihood",
      meaning:
        "The State should direct its policy toward securing an adequate means of livelihood for all citizens, both women and men.",
      whyItMatters:
        "It supports the principle that women and men should have access to opportunities for earning a livelihood.",
    },
    {
      article: "Article 39(d)",
      title: "Equal Pay for Equal Work",
      meaning:
        "The State should work toward equal pay for equal work for both women and men.",
      whyItMatters:
        "It supports the principle of equal pay for women and men performing equal work.",
    },
    {
      article: "Article 39A",
      title: "Equal Justice and Free Legal Aid",
      meaning:
        "The State should ensure that opportunities for securing justice are not denied because of economic or other disabilities and should provide free legal aid where necessary.",
      whyItMatters:
        "It supports access to justice for people who may not be able to afford legal assistance.",
    },
    {
      article: "Article 42",
      title: "Humane Working Conditions and Maternity Relief",
      meaning:
        "The State should make provisions for securing just and humane conditions of work and maternity relief.",
      whyItMatters:
        "It supports protection for women in the workplace, including maternity-related protections.",
    },
  ];
  const fundamentalDuty = [
    {
      article: "Article 51A(e)",
      title: "Respect for the Dignity of Women",
      meaning:
        "Every citizen has a duty to renounce practices that are derogatory to the dignity of women.",
      whyItMatters:
        "It recognizes respect for the dignity of women as a constitutional responsibility of citizens.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderSection = (
    heading: string,
    items: ConstitutionalItem[],
    description?: string,
  ) => (
    <View>
      <Text style={styles.sectionTitle}>{heading}</Text>
      {description && (
        <Text style={styles.sectionDescription}>{description}</Text>
      )}

      {items.map((item) => {
        const isExpanded = expandedId === item.article;

        return (
          <View key={item.article}>
            <Pressable
              accessibilityRole="button"
              style={styles.accordionButton}
              onPress={() => toggleAccordion(item.article)}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.articleLabel}>{item.article}</Text>
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
      <Text style={styles.note}>Your rights start with the Constitution.</Text>
      <Text style={styles.content}>
        The Constitution of India provides protections for equality, dignity,
        liberty and freedom from exploitation.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          EQUALITY → DIGNITY → LIBERTY → PROTECTION
        </Text>
      </View>

      {renderSection("Fundamental Rights", fundamentalRights)}
      {renderSection("Constitutional Principles", constitutionalPrinciples)}
      {renderSection("Know This Too: Fundamental Duty", fundamentalDuty)}
    </ScrollView>
  );
}
