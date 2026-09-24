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

type LegalAidItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function freeLegalAid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const legalAidRights: LegalAidItem[] = [
    {
      law: "Legal Services Authorities Act, 1987 — Section 12",
      title: "Who Can Get Free Legal Aid",
      meaning:
        "The Act provides legal services to specified categories of people, including women and children, members of Scheduled Castes and Scheduled Tribes, persons with disabilities, victims of trafficking, persons in custody and other categories specified by law.",
      whyItMatters:
        "You may qualify for legal assistance through the Legal Services Authorities without having to meet a general income test if you fall within an eligible category.",
    },

    {
      law: "Legal Services Authorities Act, 1987 — Section 12(c)",
      title: "Women & Children Are Eligible",
      meaning:
        "Women and children are specifically included among the categories entitled to legal services under Section 12(c). NALSA states that a woman is eligible for free legal aid irrespective of her income or financial status.",
      whyItMatters:
        "A woman does not have to prove that she is poor before she can apply for legal aid on the basis of being a woman.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "What Free Legal Services Include",
      meaning:
        "Legal services can include legal advice and assistance and, where applicable, representation through the Legal Services Institutions. The exact assistance provided depends on the case and applicable rules.",
      whyItMatters:
        "Free legal aid is broader than simply receiving a lawyer's name. It can include legal guidance and assistance with a legal matter.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "Where to Apply",
      meaning:
        "A person can approach Legal Services Institutions established at different levels, including State Legal Services Authorities, District Legal Services Authorities and Taluka or equivalent Legal Services Committees.",
      whyItMatters:
        "You do not necessarily have to start at a High Court or Supreme Court to ask for legal aid.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "NALSA & State Legal Services Authorities",
      meaning:
        "NALSA works at the national level, while State Legal Services Authorities implement legal-services programmes within their respective States. District and Taluka-level institutions provide access closer to where people live.",
      whyItMatters:
        "The legal-aid system has local institutions that can help people access legal services without dealing directly with the national authority.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "District & Taluka Legal Services",
      meaning:
        "District Legal Services Authorities and Taluka or equivalent Legal Services Committees help provide legal services and organize legal-awareness and dispute-resolution activities at local levels.",
      whyItMatters:
        "Local legal-services offices can be a practical first point of contact for someone seeking legal assistance.",
    },

    {
      law: "Legal Services Institutions",
      title: "Legal Advice Before Going to Court",
      meaning:
        "Legal Services Institutions can provide legal advice and assistance. A person can seek information about available legal remedies before deciding what legal step to take.",
      whyItMatters:
        "Getting legal information early can help a person understand the available options before starting a case.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "Free Legal Representation",
      meaning:
        "Where legal representation is provided through the legal-services system, an eligible person may receive assistance from a legal practitioner in accordance with the Act and applicable rules.",
      whyItMatters:
        "An eligible person may be able to obtain representation without paying the lawyer's normal private fee.",
    },

    {
      law: "Legal Services Authorities Act, 1987",
      title: "Lok Adalat & Settlement",
      meaning:
        "Lok Adalats provide a mechanism for amicable settlement of certain disputes at pre-litigation or pending-case stages. Settlements made through a Lok Adalat have the legal effect provided by the Act.",
      whyItMatters:
        "Some disputes can be resolved through a settlement process rather than continuing through a full court trial.",
    },

    {
      law: "NALSA / Legal Services Institutions",
      title: "How to Apply for Legal Aid",
      meaning:
        "A person can approach the nearest Legal Services Institution or use the legal-aid channels provided by NALSA and the relevant State Legal Services Authority. The authority considers the application under the applicable legal-services framework.",
      whyItMatters:
        "Knowing where to apply makes free legal assistance easier to access when you need it.",
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
        ⚖️ Know Your Right to Free Legal Aid
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          Legal help can be available at no cost
        </Text>

        <Text style={styles.lawNoteText}>
          India has a legal-services system that provides free legal
          assistance to eligible people through Legal Services
          Authorities.
        </Text>

        <Text style={styles.note}>
          👩 Women and children
        </Text>

        <Text style={styles.lawNoteText}>
          Women and children are specifically included as eligible
          categories under Section 12 of the Legal Services Authorities
          Act, 1987.
        </Text>

        <Text style={styles.note}>
          📍 Where can you go?
        </Text>

        <Text style={styles.lawNoteText}>
          You can approach a Legal Services Authority or Committee at
          the appropriate level, including State, District and Taluka
          levels.
        </Text>

        <Text style={styles.note}>
          Important
        </Text>

        <Text style={styles.lawNoteText}>
          Free legal aid does not mean that every legal dispute is
          automatically decided in your favour. The legal-services
          authority assesses the matter according to the applicable
          law and procedure.
        </Text>
      </View>

      <Text style={styles.content}>
        Understand who can receive free legal aid, what help may be
        available and where to seek it.
      </Text>

      <Text style={styles.sectionTitle}>
        🏛️ Free Legal Aid & Legal Services
      </Text>

      <Text style={styles.sectionDescription}>
        Tap a card to understand the legal-aid right and the system
        through which it is provided.
      </Text>

      {legalAidRights.map((item) => {
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
                    // Add navigation to the detailed legal-aid page later.
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
