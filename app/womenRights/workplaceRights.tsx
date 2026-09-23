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

type workplaceRightsItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function workplaceRights() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const workplaceRights = [
    {
      law: "POSH Act, 2013 — Sections 3 & 9",
      title: "Protection from Sexual Harassment at Work",
      meaning:
        "The law protects women from sexual harassment at the workplace and provides a formal process for making a complaint.",
      whyItMatters:
        "It gives women a legal framework for seeking redress for workplace sexual harassment.",
    },

    {
      law: "POSH Act, 2013 — Section 4",
      title: "Internal Committee (IC)",
      meaning:
        "Covered workplaces are required to constitute an Internal Committee to receive and address complaints of sexual harassment.",
      whyItMatters:
        "It provides an internal mechanism for handling workplace sexual-harassment complaints.",
    },

    {
      law: "POSH Act, 2013 — Section 6",
      title: "Local Committee (LC)",
      meaning:
        "A Local Committee is established at the district level to receive complaints in circumstances covered by the Act, including certain workplaces where an Internal Committee is not constituted.",
      whyItMatters:
        "It provides another formal route for making a complaint when the Local Committee has jurisdiction.",
    },

    {
      law: "POSH Act, 2013 — Section 9",
      title: "Who Can File a Complaint",
      meaning:
        "An aggrieved woman may make a written complaint of sexual harassment to the Internal Committee or Local Committee, as applicable, within the period provided by the Act.",
      whyItMatters:
        "It establishes a formal route for reporting workplace sexual harassment.",
    },

    {
      law: "POSH Act, 2013 — Sections 10–13",
      title: "How a Complaint Is Handled",
      meaning:
        "The Act provides procedures for conciliation, inquiry, completion of the inquiry and submission of recommendations.",
      whyItMatters:
        "It establishes a formal process for examining a workplace sexual-harassment complaint.",
    },

    {
      law: "POSH Act, 2013 — Section 12",
      title: "Interim Protection During an Inquiry",
      meaning:
        "During an inquiry, the Internal Committee or Local Committee may recommend specified interim measures on a written request by the aggrieved woman, as provided by the Act.",
      whyItMatters:
        "It allows certain temporary measures to be considered while the complaint is being examined.",
    },

    {
      law: "POSH Act, 2013 — Sections 16–17",
      title: "Confidentiality of the Complaint",
      meaning:
        "The Act restricts publication or disclosure of the complaint, identities, inquiry proceedings, recommendations and related information covered by Section 16.",
      whyItMatters:
        "It provides legal protection for the confidentiality of the complaint and inquiry process.",
    },

    {
      law: "Maternity Benefit Act, 1961 — Section 5",
      title: "Maternity Leave",
      meaning:
        "An eligible woman with fewer than two surviving children can receive maternity benefit for up to 26 weeks, with not more than 8 weeks taken before the expected delivery date. For a woman with two or more surviving children, the maximum is 12 weeks, with not more than 6 weeks before the expected delivery date.",
      whyItMatters:
        "It provides statutory maternity benefits and time away from work around childbirth.",
    },

    {
      law: "Maternity Benefit Act, 1961 — Section 5(5)",
      title: "Work From Home After Maternity Leave",
      meaning:
        "Where the nature of the work permits working from home, the employer may allow it after the maternity-benefit period for a mutually agreed period and on mutually agreed conditions.",
      whyItMatters:
        "Work from home may be available after maternity leave when the work allows it and the employer and woman agree on the arrangement.",
    },

    {
      law: "Maternity Benefit Act, 1961 — Sections 4 & 9",
      title: "Other Maternity Protections",
      meaning:
        "The Act provides additional protections, including restrictions on employment during certain periods after delivery or miscarriage and leave for miscarriage or medical termination of pregnancy in the circumstances covered by the Act.",
      whyItMatters:
        "Maternity protection includes more than maternity leave and can cover specific situations related to pregnancy and childbirth.",
    },
  ];
  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderSection = (
    heading: string,
    items: workplaceRightsItem[],
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
        Know your rights and protections at work, including safeguards against
        sexual harassment and maternity-related protections.
      </Text>

      {renderSection("Know Workplace Protections", workplaceRights)}

      <Text style={styles.note}>REMEMBER:</Text>
      <Text style={styles.content}>
        maternity leave is available to eligible women, but the amount of leave
        can depend on where they work. Under the Maternity Benefit Act, eligible
        women can get up to 26 weeks of maternity leave. Government employees
        may have different leave rules.
      </Text>
    </ScrollView>
  );
}
