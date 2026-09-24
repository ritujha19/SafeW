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

export default function RightsAfterDivorce() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalSections: LegalSection[] = [
    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 26",
      title: "Custody of Minor Children",
      meaning:
        "In proceedings under the Hindu Marriage Act, the court can make interim orders and provisions concerning the custody, maintenance and education of minor children. Such orders can also be made after the decree.",
      important:
        "The court considers the circumstances and the wishes of the children wherever possible.",
    },
    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 26",
      title: "Orders Can Continue After Divorce",
      meaning:
        "After a decree, the court can continue to make, revoke, suspend or vary orders concerning the custody, maintenance and education of minor children.",
    },
    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 26",
      title: "Children's Welfare",
      meaning:
        "The purpose of custody and related orders is to make arrangements concerning the child's custody, maintenance and education. The court considers the circumstances and the child's wishes wherever possible.",
    },
    {
      law: "Special Marriage Act, 1954",
      section: "Section 38",
      title: "Custody and Maintenance of Children",
      meaning:
        "The Special Marriage Act contains provisions allowing the court to make orders concerning custody, maintenance and education of minor children in proceedings under the Act.",
      important:
        "The exact order depends on the circumstances and the court's jurisdiction under the Act.",
    },
    {
      law: "General Family-Law Principle",
      section: "Children",
      title: "Divorce Does Not End Parental Responsibilities",
      meaning:
        "Ending a marriage does not by itself end the legal responsibilities of parents toward their children. Courts can make appropriate orders concerning custody, education and financial support under the applicable law.",
    },
    {
      law: "General Family-Law Principle",
      section: "Court Orders",
      title: "Existing Orders Can Be Changed",
      meaning:
        "Where the applicable law permits, courts can modify or vary orders when circumstances change. A previous custody or child-related order is therefore not necessarily permanent in every situation.",
      important:
        "The procedure and legal test for changing an order depend on the law under which the order was made.",
    },
    {
      law: "General Legal Principle",
      section: "Property",
      title: "Divorce Does Not Automatically Transfer Every Property",
      meaning:
        "Divorce and property ownership are separate legal questions. Property rights depend on ownership documents, applicable succession or property law, court orders and the circumstances of the property.",
      important:
        "Maintenance and property ownership should not be treated as the same legal right.",
    },
    {
      law: "General Legal Principle",
      section: "Legal Documents",
      title: "Keep the Divorce Decree and Court Orders",
      meaning:
        "A person should keep copies of the divorce decree and any orders concerning children, maintenance, property or other legal matters. These documents can be important when enforcing or understanding continuing rights and obligations.",
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
        💙 Rights After Divorce
      </Text>

      <Text style={styles.content}>
        Divorce ends the marriage, but some legal matters can
        continue afterward, especially matters concerning children,
        court orders and financial or property issues.
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          📌 Important
        </Text>

        <Text style={styles.lawNoteText}>
          Maintenance is covered separately in SafeW&asop;s Maintenance
          section. This page focuses mainly on rights and legal
          matters that can continue after the marriage ends.
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
          education. The applicable rights after divorce depend on
          the law governing the marriage and the individual facts.
        </Text>
      </View>
    </ScrollView>
  );
}
