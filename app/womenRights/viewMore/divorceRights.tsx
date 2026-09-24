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

export default function DivorceRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalSections: LegalSection[] = [
    {
      law: "General legal principle",
      section: "Applicable marriage law",
      title: "Divorce Depends on the Law Governing the Marriage",
      meaning:
        "India does not have one single divorce law that applies identically to every marriage. The applicable law can depend on the marriage statute, personal law and circumstances of the marriage.",
      important:
        "A person should first identify which legal framework governs the marriage before relying on a particular divorce provision.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 13",
      title: "Divorce on Statutory Grounds",
      meaning:
        "Section 13 provides grounds on which either spouse may seek a decree of divorce. The grounds include matters such as adultery, cruelty, desertion and certain other circumstances specified by the Act.",
      important:
        "The statutory conditions and exceptions must be satisfied. A marriage does not end simply because the spouses have stopped living together.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 13(1) and 13(2)",
      title: "Grounds Available to Spouses",
      meaning:
        "The Act provides grounds available generally to either spouse and also specifies certain additional grounds on which a wife may present a petition for divorce.",
      important:
        "The exact ground and its statutory requirements matter when presenting a divorce petition.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 13A",
      title: "Alternative Relief in Divorce Proceedings",
      meaning:
        "In certain divorce proceedings, the court may consider granting judicial separation instead of a decree of divorce when the requirements of the Act are satisfied.",
      important:
        "Judicial separation does not dissolve the marriage. It is a different legal remedy.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 13B",
      title: "Divorce by Mutual Consent",
      meaning:
        "Both spouses may jointly present a petition for divorce by mutual consent when they have been living separately for at least one year, have not been able to live together and mutually agree that the marriage should be dissolved.",
      important:
        "The Act provides a further motion and court process before a decree is passed. The statutory waiting period can be affected by judicial decisions in appropriate cases.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 14",
      title: "Divorce Petition Within the First Year",
      meaning:
        "Ordinarily, a divorce petition cannot be presented before one year has passed from the date of marriage. The court can allow an earlier petition in cases involving exceptional hardship to the petitioner or exceptional depravity on the part of the respondent.",
      important:
        "An application to proceed before one year is an exception and is subject to the statutory requirements.",
    },

    {
      law: "Hindu Marriage Act, 1955",
      section: "Section 15",
      title: "When a Divorced Person May Remarry",
      meaning:
        "After a marriage has been dissolved by a decree of divorce, the Act specifies when either party may lawfully marry again, including the situation where the appeal period has expired or an appeal has been dismissed.",
      important:
        "A person should check the statutory conditions concerning appeal before remarrying.",
    },

    {
      law: "Special Marriage Act, 1954",
      section: "Section 27",
      title: "Divorce Under the Special Marriage Act",
      meaning:
        "Section 27 provides statutory grounds on which a spouse may petition the district court for divorce for a marriage governed by the Special Marriage Act.",
      important:
        "These grounds apply to marriages governed by the Special Marriage Act and should not be treated as universal divorce grounds for every marriage in India.",
    },

    {
      law: "Special Marriage Act, 1954",
      section: "Section 27A",
      title: "Alternative Relief",
      meaning:
        "In certain divorce proceedings under the Special Marriage Act, the court may grant judicial separation instead of divorce where the statutory requirements are satisfied.",
      important:
        "Judicial separation does not itself dissolve the marriage.",
    },

    {
      law: "Special Marriage Act, 1954",
      section: "Section 28",
      title: "Divorce by Mutual Consent",
      meaning:
        "Both spouses may jointly petition for divorce by mutual consent when they have been living separately for at least one year, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
      important:
        "The Act requires a further motion and court consideration before the decree of divorce is granted.",
    },

    {
      law: "Special Marriage Act, 1954",
      section: "Section 29",
      title: "Divorce Petition Within the First Year",
      meaning:
        "Ordinarily, a divorce petition cannot be presented before one year has passed from the date of entering the marriage certificate. The court may permit an earlier petition in cases of exceptional hardship or exceptional depravity, subject to the Act.",
      important:
        "The one-year rule has a statutory exception and is not an absolute prohibition in every circumstance.",
    },

    {
      law: "Special Marriage Act, 1954",
      section: "Section 30",
      title: "Remarriage After Divorce",
      meaning:
        "After a marriage has been dissolved by a decree of divorce, Section 30 sets out when a divorced person may marry again, including the position concerning appeal rights.",
      important:
        "The statutory conditions concerning the decree and appeal should be checked before remarriage.",
    },

    {
      law: "Indian Divorce Act, 1869",
      section: "Section 10",
      title: "Divorce for Christian Marriages",
      meaning:
        "The Divorce Act provides grounds for dissolution of marriage for marriages governed by the Act. Section 10 contains the statutory grounds for divorce.",
      important:
        "This Act applies to marriages to which the Act applies; it should not be presented as the divorce law for every marriage in India.",
    },

    {
      law: "Indian Divorce Act, 1869",
      section: "Section 10A",
      title: "Christian Divorce by Mutual Consent",
      meaning:
        "Section 10A allows both parties to jointly petition for dissolution of marriage by mutual consent when they have been living separately for the period specified by the Act, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
      important:
        "The statutory requirements and court process must be followed before the marriage is dissolved.",
    },

    {
      law: "Parsi Marriage and Divorce Act, 1936",
      section: "Section 32",
      title: "Grounds for Divorce",
      meaning:
        "Section 32 provides grounds on which a married person may sue for divorce under the Parsi Marriage and Divorce Act.",
      important:
        "The Act contains its own statutory grounds and conditions for Parsi marriages.",
    },

    {
      law: "Parsi Marriage and Divorce Act, 1936",
      section: "Section 32A",
      title: "Non-Resumption of Cohabitation",
      meaning:
        "Section 32A provides a ground for divorce where there has been no resumption of cohabitation or restitution of conjugal rights for the period specified by the Act after the relevant decree.",
      important:
        "This provision applies specifically to marriages governed by the Parsi Marriage and Divorce Act.",
    },

    {
      law: "Parsi Marriage and Divorce Act, 1936",
      section: "Section 32B",
      title: "Parsi Divorce by Mutual Consent",
      meaning:
        "Both parties may jointly sue for divorce by mutual consent when they have lived separately for one year or more, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
      important:
        "The Act requires the court to be satisfied about the marriage, the statements made in the case and that consent was not obtained through force or fraud.",
    },

    {
      law: "Dissolution of Muslim Marriages Act, 1939",
      section: "Section 2",
      title: "Grounds for a Muslim Woman to Seek Dissolution",
      meaning:
        "Section 2 provides grounds on which a woman married under Muslim law can obtain a decree for dissolution of her marriage. The grounds include circumstances such as the husband's whereabouts being unknown for four years, failure to provide maintenance for two years, certain imprisonment, failure to perform marital obligations, and specified forms of cruelty.",
      important:
        "The Act provides a court-based remedy for dissolution. The specific statutory conditions must be satisfied.",
    },

    {
      law: "Muslim Personal Law (Shariat) Application Act, 1937",
      section: "Section 2",
      title: "Muslim Personal Law and Dissolution of Marriage",
      meaning:
        "Section 2 provides that Muslim Personal Law is the rule of decision in specified matters involving Muslims, including marriage and dissolution of marriage, including forms such as talaq, khula and mubaraat.",
      important:
        "This provision identifies the application of Muslim Personal Law; it is not itself a complete procedural divorce code.",
    },

    {
      law: "Muslim Women (Protection of Rights on Marriage) Act, 2019",
      section: "Sections 3–5",
      title: "Legal Protection Against Certain Forms of Talaq",
      meaning:
        "The Act declares pronouncement of talaq of the type covered by the Act to be void and illegal and provides criminal penalties and related protections.",
      important:
        "This law concerns the prohibited form of talaq covered by the Act. It should not be described as a general law that governs every form of Muslim divorce.",
    },

    {
      law: "Applicable matrimonial law",
      section: "Court process",
      title: "Divorce Requires the Applicable Legal Process",
      meaning:
        "Where a marriage is governed by a statute requiring a court decree, the marriage is not dissolved merely because the spouses decide privately that they are divorced. The applicable petition, court process and decree must be followed.",
      important:
        "The exact process depends on the law governing the marriage.",
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
        💔 Divorce Rights
      </Text>

      <View style={styles.introBox}>
        <Text style={styles.introTitle}>
          Divorce is governed by the law applicable to the marriage
        </Text>

        <Text style={styles.introText}>
          Indian law does not provide one identical divorce process
          for every marriage. The applicable legal framework can
          depend on the type of marriage and the law governing it.
        </Text>

        <Text style={[styles.introText, { marginTop: 10 }]}>
          Different statutes provide different grounds, procedures
          and requirements for ending a marriage.
        </Text>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteTitle}>
          ⚖️ Important
        </Text>

        <Text style={styles.noteText}>
          The sections below are organized by legal framework.
          A provision belonging to the Hindu Marriage Act, for
          example, should not be assumed to apply to a marriage
          governed by another law.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        📖 Divorce Laws & Rights
      </Text>

      <Text style={styles.sectionDescription}>
        Open each section to understand the applicable law and its
        meaning in simple language.
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
                <Text style={styles.lawLabel}>
                  {item.section}
                </Text>

                <Text style={styles.accordionText}>
                  {item.title}
                </Text>
              </View>

              <Text style={styles.arrow}>
                {isExpanded ? "▼" : "▶"}
              </Text>
            </Pressable>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <Text style={styles.nestedTitle}>
                  ⚖️ Applicable law
                </Text>

                <Text style={styles.expandedText}>
                  {item.law}
                </Text>

                <Text style={styles.nestedTitle}>
                  📖 What the law provides
                </Text>

                <Text style={styles.expandedText}>
                  {item.meaning}
                </Text>

                {item.important && (
                  <View style={styles.importantBox}>
                    <Text style={styles.importantTitle}>
                      ⚠️ Important
                    </Text>

                    <Text style={styles.importantText}>
                      {item.important}
                    </Text>
                  </View>
                )}

                <View style={styles.sourceBox}>
                  <Text style={styles.sourceTitle}>
                    Source
                  </Text>

                  <Text style={styles.sourceText}>
                    Official legislation / authoritative legal
                    source identified for the provision above.
                  </Text>
                </View>
              </View>
            )}
          </View>
        );
      })}

      <Text style={styles.sectionTitle}>
        🧭 Before Starting a Divorce Case
      </Text>

      <View style={styles.introBox}>
        <Text style={styles.introText}>
          First identify the law governing the marriage. The grounds
          and procedure can then be checked under that law.
        </Text>

        <Text style={[styles.introText, { marginTop: 10 }]}>
          Divorce proceedings can also involve separate issues such
          as maintenance, child custody, property and other financial
          matters. Those subjects are covered separately in SafeW.
        </Text>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteTitle}>
          🛡️ SafeW Legal Information Notice
        </Text>

        <Text style={styles.noteText}>
          This page provides general legal information and does not
          determine which law applies to an individual&apos;s marriage.
          A particular case can involve additional rules,
          procedural requirements and court decisions.
        </Text>
      </View>

      <Text style={styles.footer}>
        Laws and procedures can change. Users should verify the
        current position with an official government source or
        qualified legal professional before relying on information
        for an individual case.
      </Text>
    </ScrollView>
  );
}