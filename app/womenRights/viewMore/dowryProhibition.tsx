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

export default function DowryProhibition() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalSections: LegalSection[] = [
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 2",
      title: "What Is Dowry?",
      meaning:
        "Dowry means property or valuable security given or agreed to be given, directly or indirectly, by one party to a marriage to the other party, or by the parents or other persons, in connection with the marriage, subject to the statutory definition and exclusions.",
      important:
        "Not every gift exchanged at a marriage is automatically dowry. The statutory definition and circumstances matter.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 3",
      title: "Giving or Taking Dowry",
      meaning:
        "Giving, taking or abetting the giving or taking of dowry is punishable under the Act, subject to the statutory provisions and exceptions concerning certain presents.",
      important:
        "The Act provides an exception for certain presents given without demand when the statutory conditions, including the prescribed list requirements, are satisfied.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 4",
      title: "Demanding Dowry",
      meaning:
        "Directly or indirectly demanding dowry from the parents, relatives or guardian of a bride or bridegroom is punishable under the Act.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 4A",
      title: "Ban on Certain Dowry Advertisements",
      meaning:
        "The Act prohibits advertisements offering money, property or an interest in a business or other property as consideration for the marriage of a son, daughter or other relative.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 5",
      title: "Dowry Agreements Are Void",
      meaning:
        "An agreement for giving or taking dowry is void under the Act.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 6",
      title: "Dowry for the Benefit of the Wife",
      meaning:
        "Where dowry is received by someone other than the woman, the Act provides that it is to be transferred for the benefit of the woman within the statutory framework. The section also contains rules concerning property and the woman's heirs.",
      important:
        "Section 6 should not be confused with a general property or inheritance rule. It specifically deals with dowry received in connection with marriage.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 7",
      title: "Cognizance of Offences",
      meaning:
        "Section 7 sets out who may take cognizance of offences under the Act and the conditions governing complaints.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 8",
      title: "Nature of Certain Offences",
      meaning:
        "The Act provides rules concerning cognizance, bailability and compounding of offences as specified by the section.",
      important:
        "The exact criminal-procedure consequences should be read with the current procedural law and amendments applicable to the case.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Section 8B",
      title: "Dowry Prohibition Officers",
      meaning:
        "State Governments may appoint Dowry Prohibition Officers. Their functions include helping ensure compliance with the Act, preventing dowry practices and demands, collecting evidence and performing other assigned functions.",
    },
    {
      law: "Dowry Prohibition Act, 1961",
      section: "Sections 9–10",
      title: "Rules Under the Act",
      meaning:
        "The Act provides powers for the Central and State Governments to make rules for carrying out its purposes, including matters relating to the maintenance of lists of presents.",
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
        🚫 Dowry Prohibition
      </Text>

      <Text style={styles.content}>
        Indian law prohibits dowry and provides penalties for
        giving, taking and demanding dowry. It also provides
        protections concerning property received as dowry.
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          ⚖️ Important
        </Text>

        <Text style={styles.lawNoteText}>
          Dowry and ordinary voluntary presents are not automatically
          the same thing. Whether something falls within the legal
          definition depends on the statutory definition and the
          circumstances.
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
          education. Criminal procedure and penalties can depend on
          the current law and circumstances of the case.
        </Text>
      </View>
    </ScrollView>
  );
}
