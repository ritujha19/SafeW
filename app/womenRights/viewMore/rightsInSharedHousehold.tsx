import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
  content: {
    fontSize: 16,
    lineHeight: 23,
    paddingBottom: 10,
  },
  sectionTitle: {
    color: "#09325f",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 14,
  },
  accordionButton: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 14,
    padding: 15,
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
  accordionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow: {
    color: "#fff",
    fontSize: 20,
  },
  expandedContent: {
    backgroundColor: "#e8f4f8",
    borderColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 14,
    marginHorizontal: 14,
    padding: 15,
  },
  nestedTitle: {
    color: "#67a2e1",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 10,
  },
  expandedText: {
    color: "#333",
    fontSize: 14,
    lineHeight: 22,
  },
  importantBox: {
    backgroundColor: "#fff8e8",
    borderColor: "#e8c978",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    padding: 12,
  },
  importantText: {
    color: "#5f4b16",
    fontSize: 13,
    lineHeight: 20,
  },
  lawNote: {
    backgroundColor: "#f1f7fd",
    borderColor: "#b8d5ef",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 18,
    padding: 15,
  },
  lawNoteTitle: {
    color: "#09325f",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
  },
  lawNoteText: {
    color: "#333",
    fontSize: 14,
    lineHeight: 22,
  },
  sourceBox: {
    backgroundColor: "#f8fbff",
    borderColor: "#c7dff5",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 18,
    padding: 12,
  },
  sourceText: {
    color: "#555",
    fontSize: 13,
    lineHeight: 20,
  },
});

export default function SharedHouseholdRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalSections: LegalSection[] = [
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 2(s)",
      title: "What Is a Shared Household?",
      meaning:
        "A shared household is a household where the woman lives or has at any stage lived in a domestic relationship. The statutory definition includes certain jointly owned or rented homes and can also include a household belonging to a joint family of which the respondent is a member.",
      important:
        "The exact facts of the household and domestic relationship matter.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 17",
      title: "Right to Reside in a Shared Household",
      meaning:
        "Every woman in a domestic relationship has a right to reside in the shared household, whether or not she has any right, title or beneficial interest in it.",
      important:
        "A right to reside is not the same thing as ownership of the property.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 17(2)",
      title: "Protection From Being Excluded",
      meaning:
        "The woman cannot be evicted from or excluded from the shared household except according to the procedure established by law.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 18",
      title: "Protection Orders",
      meaning:
        "Where domestic violence is established or threatened within the scope of the Act, a Magistrate may issue a protection order restricting specified acts of domestic violence and contact or interference as provided by the section.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 19",
      title: "Residence Orders",
      meaning:
        "A Magistrate may make residence-related orders, including orders restraining dispossession or disturbance of possession and other arrangements authorised by the Act.",
      important:
        "The available order depends on the circumstances and the statutory conditions.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 19",
      title: "Alternative Accommodation or Rent",
      meaning:
        "In appropriate circumstances, the Magistrate may direct the respondent to secure the same level of alternate accommodation for the woman or to pay rent for it, as provided by the Act.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 23",
      title: "Interim and Ex Parte Orders",
      meaning:
        "The Magistrate may grant interim and, where the statutory requirements are met, ex parte orders during proceedings.",
    },
    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      section: "Section 26",
      title: "Relief in Other Proceedings",
      meaning:
        "Reliefs available under Sections 18 to 22 may also be sought in other legal proceedings before a civil court, family court or criminal court, subject to the Act.",
      important:
        "This provision helps prevent the remedies under the Domestic Violence Act from being treated as limited to only one type of proceeding.",
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
      <Text style={styles.sectionTitle}>
        🏠 Rights in a Shared Household
      </Text>

      <Text style={styles.content}>
        The Protection of Women from Domestic Violence Act provides
        specific protections concerning a woman&asop;s residence in a
        shared household when she is in a domestic relationship.
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          ⚖️ Important distinction
        </Text>

        <Text style={styles.lawNoteText}>
          The right to reside in a shared household is a legal
          protection. It does not automatically make the woman the
          owner of the house.
        </Text>
      </View>

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
                <Text style={styles.articleLabel}>
                  {item.section}
                </Text>
                <Text style={styles.accordionText}>
                  {item.law}
                </Text>
              </View>

              <Text style={styles.arrow}>
                {isExpanded ? "▼" : "▶"}
              </Text>
            </Pressable>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <Text style={styles.nestedTitle}>
                  {item.title}
                </Text>

                <Text style={styles.expandedText}>
                  {item.meaning}
                </Text>

                {item.important && (
                  <>
                    <Text style={styles.nestedTitle}>
                      Important
                    </Text>

                    <View style={styles.importantBox}>
                      <Text style={styles.importantText}>
                        {item.important}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            )}
          </View>
        );
      })}

      <View style={styles.sourceBox}>
        <Text style={styles.sourceText}>
          SafeW provides general legal information for awareness and
          education. Residence rights and court orders depend on the
          facts of the domestic relationship and the applicable law.
        </Text>
      </View>
    </ScrollView>
  );
}
