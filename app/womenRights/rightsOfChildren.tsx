/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  content: {
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 10,
    lineHeight: 23,
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 12,
    marginBottom: 8,
    lineHeight: 22,
  },

  lawNote: {
    backgroundColor: "#f1f7fd",
    borderWidth: 1,
    borderColor: "#b8d5ef",
    borderRadius: 10,
    padding: 15,
    marginBottom: 18,
  },

  lawNoteTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#09325f",
    marginBottom: 8,
  },

  lawNoteText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },

  viewMoreButton: {
    alignSelf: "flex-start",
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 2,
  },

  viewMoreText: {
    color: "#0f4e92",
    fontSize: 14,
    fontWeight: "bold",
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
    lineHeight: 21,
  },
});

type ChildRightsItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function rightsOfChildren() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const childRights: ChildRightsItem[] = [
    {
      law: "Right of Children to Free and Compulsory Education Act, 2009",
      title: "Right to Free & Compulsory Education",
      meaning:
        "The RTE Act provides free and compulsory elementary education to children in the age group covered by the Act, generally from six to fourteen years.",
      whyItMatters:
        "A child within the Act's age group has a statutory right to elementary education without being excluded because of an inability to pay tuition or fees covered by the Act.",
    },

    {
      law: "Protection of Children from Sexual Offences Act, 2012",
      title: "Protection from Child Sexual Abuse",
      meaning:
        "POCSO provides special legal protection to children from sexual assault, sexual harassment and pornography-related offences. For the purposes of the Act, a child means any person below eighteen years of age.",
      whyItMatters:
        "Children receive special protections because sexual offences against a child are dealt with under a child-specific legal framework.",
    },

    {
      law: "POCSO Act, 2012",
      title: "Child-Friendly Procedures",
      meaning:
        "POCSO provides safeguards for recording a child's information and evidence and for conducting proceedings in a child-sensitive manner. The Act contains provisions concerning recording statements, medical examination and Special Courts.",
      whyItMatters:
        "A child should not be expected to navigate the ordinary criminal process without the special protections provided by POCSO.",
    },

    {
      law: "Prohibition of Child Marriage Act, 2006",
      title: "Protection from Child Marriage",
      meaning:
        "Under the central Act, a child means a male who has not completed twenty-one years or a female who has not completed eighteen years. The Act provides legal remedies and penalties relating to child marriage.",
      whyItMatters:
        "The law protects children from being subjected to marriage before the legally defined age.",
    },

    {
      law: "Juvenile Justice (Care and Protection of Children) Act, 2015",
      title: "Right to Care & Protection",
      meaning:
        "The Juvenile Justice framework provides care, protection, treatment, development and rehabilitation mechanisms for children who are in need of care and protection or are involved in the child-justice system.",
      whyItMatters:
        "A child who is abandoned, abused, neglected, vulnerable or otherwise in need of protection can come within a dedicated child-protection system.",
    },

    {
      law: "Juvenile Justice (Care and Protection of Children) Act, 2015",
      title: "Right to Be Heard",
      meaning:
        "The child-protection system is based on child-sensitive principles and provides for participation of children in matters affecting them, according to their age and maturity and the applicable procedure.",
      whyItMatters:
        "Children are not simply objects of protection; their views and needs can be considered in decisions concerning them.",
    },

    {
      law: "Child and Adolescent Labour (Prohibition and Regulation) Act, 1986",
      title: "Protection from Child Labour",
      meaning:
        "The law prohibits the employment of children and prohibits adolescents from employment in hazardous occupations and processes, subject to the provisions and exceptions of the Act.",
      whyItMatters:
        "Children are legally protected from being put into work that the law prohibits because of their age.",
    },

    {
      law: "POCSO Act, 2012 — privacy protections",
      title: "Right to Privacy & Identity Protection",
      meaning:
        "POCSO contains restrictions concerning disclosure of information that may reveal the identity of a child involved in proceedings under the Act, subject to the statutory exceptions.",
      whyItMatters:
        "Protecting a child's identity can reduce further harm, stigma and unnecessary exposure after an alleged sexual offence.",
    },

    {
      law: "Juvenile Justice Act, 2015",
      title: "Right to Rehabilitation & Support",
      meaning:
        "The juvenile-justice framework includes rehabilitation and social-reintegration measures for children, using mechanisms such as individual care planning and appropriate institutional or non-institutional services.",
      whyItMatters:
        "Child protection is not limited to removing a child from immediate danger; the legal framework also provides for care, rehabilitation and reintegration.",
    },

    {
      law: "POCSO Act, 2012 — Section 19 and related provisions",
      title: "Right to Report Abuse & Seek Help",
      meaning:
        "POCSO requires information about the commission or apprehended commission of an offence under the Act to be reported in accordance with its reporting provisions. The Act also provides procedures for handling children who are victims or in need of assistance.",
      whyItMatters:
        "A child who experiences or faces sexual abuse should be able to enter a formal protection and reporting system rather than being left without support.",
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
        👧 Know the Rights of Children
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          Children have special legal protections
        </Text>

        <Text style={styles.lawNoteText}>
          Indian law provides children with protections relating to
          education, safety, health, care, sexual abuse, child marriage,
          exploitation and rehabilitation.
        </Text>

        <Text style={styles.note}>
          👶 Who is a child?
        </Text>

        <Text style={styles.lawNoteText}>
          Different laws can use different age definitions for
          particular purposes. For example, POCSO treats a person
          below eighteen as a child, while the Prohibition of Child
          Marriage Act uses different age thresholds for males and
          females.
        </Text>

        <Text style={styles.note}>
          ⚠️ Important
        </Text>

        <Text style={styles.lawNoteText}>
          The exact protection available depends on the situation and
          the law involved. This section gives simplified information
          and does not replace case-specific legal advice.
        </Text>
      </View>

      <Text style={styles.content}>
        Learn about important legal protections available to children
        in India.
      </Text>

      <Text style={styles.sectionTitle}>
        🛡️ Children&asop;s Legal Rights
      </Text>

      <Text style={styles.sectionDescription}>
        Tap a card to understand the right and the law connected with it.
      </Text>

      {childRights.map((item) => {
        const id = item.law + item.title;
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
                  {item.title}
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
                  What it means
                </Text>

                <Text style={styles.expandedText}>
                  {item.meaning}
                </Text>

                <Text style={styles.nestedTitle}>
                  Why it matters
                </Text>

                <Text style={styles.expandedText}>
                  {item.whyItMatters}
                </Text>

                <Pressable
                  accessibilityRole="button"
                  style={styles.viewMoreButton}
                  onPress={() => {
                    // Add navigation to the detailed child-rights page later.
                  }}
                >
                  <Text style={styles.viewMoreText}>
                    View More →
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}