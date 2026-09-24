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
    fontSize: 21,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 14,
    marginBottom: 6,
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

export default function CoparcenaryRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalSections: LegalSection[] = [
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6(1)",
      title: "Daughter Is a Coparcener by Birth",
      meaning:
        "In a Mitakshara joint Hindu family, a daughter is a coparcener by birth in the same manner as a son. She has the same rights and liabilities in the coparcenary property as a son.",
      important:
        "This is a Hindu-law-specific right. It does not mean that every property owned by every Hindu family is automatically coparcenary property.",
    },
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6(1)",
      title: "Same Rights as a Son",
      meaning:
        "A daughter has the same legal position as a son in the coparcenary. Her status is not reduced simply because she is a daughter.",
    },
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6(1)",
      title: "Same Liabilities as a Son",
      meaning:
        "The amendment gives daughters the same rights and liabilities in coparcenary property as sons.",
    },
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6",
      title: "Father Need Not Be Alive in 2005",
      meaning:
        "The Supreme Court in Vineeta Sharma v. Rakesh Sharma clarified that the daughter can claim coparcenary status by birth even if the father was not alive when the 2005 amendment came into force.",
      important:
        "The existence and nature of the property and any legally recognised earlier partition can still affect an individual claim.",
    },
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6(3)",
      title: "Devolution of a Coparcener's Interest",
      meaning:
        "When a Hindu dies after the commencement of the 2005 amendment, his interest in coparcenary property devolves by testamentary or intestate succession under the Act rather than by the old survivorship rule.",
    },
    {
      law: "Hindu Succession Act, 1956",
      section: "Section 6(5)",
      title: "Earlier Partitions",
      meaning:
        "The Act contains a saving rule for partitions that took place before the statutory date specified in Section 6. The Supreme Court has clarified what qualifies as a legally recognised partition for this purpose.",
      important:
        "A claim cannot be decided simply by saying that a family verbally divided property. The statutory requirements and evidence matter.",
    },
    {
      law: "General Legal Principle",
      section: "Important Distinction",
      title: "Coparcenary Is Not Every Family Property",
      meaning:
        "Coparcenary rights concern property falling within the Hindu Mitakshara coparcenary. A person's separate or self-acquired property is not automatically converted into coparcenary property merely because the person has children.",
    },
    {
      law: "General Legal Principle",
      section: "Practical Point",
      title: "What a Daughter Can Claim",
      meaning:
        "Where Section 6 applies, a daughter can assert the same coparcenary rights as a son, including the legal ability to seek partition according to the applicable law.",
      important:
        "The actual share depends on the family structure, property involved, prior legally recognised transactions and other applicable facts.",
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
        👩‍👧 Equal Coparcenary Rights for Daughters
      </Text>

      <Text style={styles.content}>
        Under Section 6 of the Hindu Succession Act, daughters in
        Mitakshara joint Hindu families have the same coparcenary
        rights and liabilities as sons.
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          ⚖️ Important
        </Text>
        <Text style={styles.lawNoteText}>
          This page concerns a specific Hindu-law concept called
          coparcenary. It does not mean that every daughter
          automatically owns a share in every property owned by
          her parents.
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
          education. The exact property rights in an individual case
          depend on the nature of the property and the applicable law.
        </Text>
      </View>
    </ScrollView>
  );
}