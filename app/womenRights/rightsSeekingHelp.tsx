 
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

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

type SeekingHelpItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function RightsSeekingHelp() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const seekingHelpRights: SeekingHelpItem[] = [
    {
      law: "Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 173",
      title: "Right to Report a Crime",
      meaning:
        "Information relating to a cognizable offence can be given to the police orally or by electronic communication, subject to the procedure provided by law.",
      whyItMatters:
        "You can approach the police to report a cognizable offence and begin the formal reporting process.",
    },

    {
      law: "BNSS, 2023 — Section 173(2)",
      title: "Right to a Free Copy of the Report",
      meaning:
        "When information is recorded under Section 173, a copy of the information as recorded must be given forthwith and free of cost to the informant or victim.",
      whyItMatters:
        "Keeping a copy of what was reported gives you an important record for follow-up.",
    },

    {
      law: "BNSS, 2023 — Section 173(4)",
      title: "If Police Refuse to Record the Information",
      meaning:
        "If the officer in charge of a police station refuses to record information relating to a cognizable offence, the person can send the substance of the information in writing to the Superintendent of Police. The law also provides a route to approach the Magistrate in the circumstances specified in the Sanhita.",
      whyItMatters:
        "There are legal steps available when a complaint about a cognizable offence is not recorded at the police station.",
    },

    {
      law: "BNSS, 2023 — Section 173",
      title: "Woman Officer for Certain Complaints",
      meaning:
        "For specified offences against women, information given by the woman must be recorded by a woman police officer or woman officer. The provision covers specified offences under the Bharatiya Nyaya Sanhita, including certain sexual offences.",
      whyItMatters:
        "The law provides an additional safeguard when a woman reports specified offences against her.",
    },

    {
      law: "BNSS, 2023 — Section 173",
      title: "Statement at a Suitable Place in Certain Cases",
      meaning:
        "For specified offences involving a woman with a temporary or permanent mental or physical disability, the information is to be recorded at her residence or another place of her choice, with an interpreter or special educator where required. The recording is also to be videographed.",
      whyItMatters:
        "The reporting process can be adapted to the needs and circumstances of the person reporting the offence.",
    },

    {
      law: "Applicable medical and criminal procedure laws",
      title: "Right to Medical Assistance",
      meaning:
        "Victims of sexual offences and other violence may require medical care as well as legal assistance. Applicable laws and procedures provide specific safeguards concerning medical examination and treatment in relevant cases.",
      whyItMatters:
        "Medical care can protect health and, where appropriate, help document injuries or other evidence.",
    },

    {
      law: "Legal Services Authorities Act, 1987 — Section 12",
      title: "Right to Legal Assistance",
      meaning:
        "Women are among the categories entitled to free legal services under Section 12(c) of the Legal Services Authorities Act. NALSA states that a woman is eligible for free legal aid irrespective of her income or financial status.",
      whyItMatters:
        "A woman does not have to rely only on a private lawyer when she needs legal assistance.",
    },

    {
      law: "Women Helpline 181 — Government of India",
      title: "Women Helpline & Support Services",
      meaning:
        "The Women Helpline 181 is a toll-free service for women seeking support or information. It can connect women with emergency response services and One Stop Centres, as appropriate.",
      whyItMatters:
        "Police are not the only route for seeking help. Government support services can also provide information, assistance and connections to other services.",
    },

    {
      law: "Victim Compensation Schemes + NALSA",
      title: "Right to Seek Victim Compensation",
      meaning:
        "Victim compensation schemes can provide financial assistance to eligible victims. NALSA publishes a Compensation Scheme for Women Victims/Survivors of Sexual Assault/Other Crimes and works with State Legal Services Authorities on victim compensation.",
      whyItMatters:
        "Support after a crime can include compensation and rehabilitation, not only criminal proceedings.",
    },

    {
      law: "Applicable privacy and criminal procedure protections",
      title: "Right to Privacy & Dignity",
      meaning:
        "Different laws and procedures provide privacy protections in particular types of cases. The exact protection depends on the nature of the complaint and the stage of the legal process.",
      whyItMatters:
        "Seeking help should be handled with appropriate respect for a person's privacy and dignity.",
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
        🆘 Know Your Rights When Seeking Help
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          You have options when you need help
        </Text>

        <Text style={styles.lawNoteText}>
          If you experience violence, harassment or another offence, you may
          seek help through different routes depending on the situation.
        </Text>

        <Text style={styles.note}>Where can you seek help?</Text>

        <Text style={styles.lawNoteText}>
          👮 Police — for reporting crimes and seeking immediate assistance.
          {"\n\n"}
          🏥 Medical services — for treatment and, where applicable, medical
          examination.
          {"\n\n"}
          ⚖️ Legal services — for legal advice and representation.
          {"\n\n"}
          🏠 Government support services — such as Women Helpline 181 and One
          Stop Centres.
        </Text>

        <Text style={styles.note}>Important</Text>

        <Text style={styles.lawNoteText}>
          The exact procedure depends on the type of incident and the law
          involved. This section provides general information and does not
          replace case-specific legal advice.
        </Text>
      </View>

      <Text style={styles.content}>
        Understand what protections and support may be available when you
        approach the police, medical services, legal services or government
        support systems.
      </Text>

      <Text style={styles.sectionTitle}>🛡️ Your Rights When Seeking Help</Text>

      <Text style={styles.sectionDescription}>
        Tap a card to understand the right and the law or government service
        connected with it.
      </Text>

      {seekingHelpRights.map((item) => {
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
                <Text style={styles.articleLabel}>{item.title}</Text>

                <Text style={styles.accordionText}>{item.law}</Text>
              </View>

              <Text style={styles.arrow}>{isExpanded ? "▼" : "▶"}</Text>
            </Pressable>

            {isExpanded && (
              <View style={styles.expandedContent}>
                <Text style={styles.nestedTitle}>What it means</Text>

                <Text style={styles.expandedText}>{item.meaning}</Text>

                <Text style={styles.nestedTitle}>Why it matters</Text>

                <Text style={styles.expandedText}>{item.whyItMatters}</Text>

                <Pressable
                  accessibilityRole="button"
                  style={styles.viewMoreButton}
                  onPress={() => {
                    // Add navigation to the detailed page later.
                  }}
                >
                  <Text style={styles.viewMoreText}>View More →</Text>
                </Pressable>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}
