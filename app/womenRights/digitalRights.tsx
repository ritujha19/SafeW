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

type DigitalRightsItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
};

export default function digitalRights() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const digitalRights: DigitalRightsItem[] = [
    {
      law: "Information Technology Act, 2000 — Section 66E",
      title: "Privacy of Private Images",
      meaning:
        "Capturing, publishing or transmitting an image of a person's private area without consent, in circumstances that violate privacy, can be an offence under Section 66E.",
      whyItMatters:
        "A person cannot simply use or share private-area images of another person without consent.",
    },

    {
      law: "Bharatiya Nyaya Sanhita, 2023 — Section 77",
      title: "Protection from Voyeurism",
      meaning:
        "Watching, capturing or disseminating images of a woman engaged in a private act, in circumstances where she would normally expect privacy, can constitute voyeurism. The law also covers certain situations where an image was captured with consent but later disseminated without consent.",
      whyItMatters:
        "Consent to an image being captured does not automatically mean consent to that image being shared with other people.",
    },

    {
      law: "Bharatiya Nyaya Sanhita, 2023 — Section 78",
      title: "Protection from Cyberstalking",
      meaning:
        "Stalking includes repeatedly contacting or following a woman despite a clear indication of disinterest, and monitoring her use of the internet, email or other electronic communication, subject to the exceptions provided by law.",
      whyItMatters:
        "Persistent unwanted online monitoring or contact can have legal consequences.",
    },

    {
      law: "Information Technology Act, 2000 — Sections 66C & 66D",
      title: "Protection from Identity Theft & Online Impersonation",
      meaning:
        "Fraudulently or dishonestly using another person's password, electronic signature or unique identification feature can amount to identity theft. Cheating by personation using a computer resource or communication device is also covered.",
      whyItMatters:
        "Someone using your digital identity or pretending to be you online for fraudulent purposes may be committing a cyber offence.",
    },

    {
      law: "Information Technology Act, 2000 — Sections 67 & 67A",
      title: "Protection from Illegal Sexual or Obscene Content",
      meaning:
        "The IT Act contains offences concerning publishing or transmitting obscene material and material containing sexually explicit acts in electronic form. The exact section depends on the content and circumstances.",
      whyItMatters:
        "Online publication or transmission of prohibited material can have legal consequences.",
    },

    {
      law: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
      title: "Right to Report Harmful Online Content",
      meaning:
        "Intermediaries are subject to due-diligence and grievance-redressal requirements. The rules address categories including privacy-invasive content and content that is insulting or harassing on the basis of gender.",
      whyItMatters:
        "You can use a platform's reporting and grievance mechanisms when harmful content or conduct violates its rules or applicable law.",
    },

    {
      law: "Digital Personal Data Protection Act, 2023",
      title: "Protection of Personal Data",
      meaning:
        "The DPDP Act creates a framework for processing digital personal data and provides rights and obligations concerning personal data. Its provisions are being brought into force in phases.",
      whyItMatters:
        "Personal information such as identity and contact details can require legal protection when handled digitally.",
    },

    {
      law: "Digital Personal Data Protection Act, 2023 — phased commencement",
      title: "Control Over Your Personal Data",
      meaning:
        "The Act provides a framework for rights such as access to information about personal data, correction and erasure, grievance redressal and withdrawal of consent. These provisions should be treated according to their notified commencement dates rather than as if every right is already fully operational.",
      whyItMatters:
        "Knowing which data-protection rights are currently in force and which are scheduled to commence helps avoid relying on an outdated privacy rule.",
    },

    {
      law: "National Cyber Crime Reporting Portal",
      title: "Right to Report Cybercrime",
      meaning:
        "Cybercrime can be reported through the Government of India's National Cyber Crime Reporting Portal. The portal includes reporting options for women/children-related cybercrime and other cybercrimes.",
      whyItMatters:
        "You do not have to rely only on the social-media platform when online abuse or another cybercrime occurs.",
    },

    {
      law: "Applicable cyber and criminal laws",
      title: "Preserve Digital Evidence",
      meaning:
        "When reporting online abuse, keep relevant messages, screenshots, URLs, account details and other available evidence. Avoid deleting important evidence before making a report when it is safe to preserve it.",
      whyItMatters:
        "Digital evidence can help explain what happened and assist a platform, police authority or cybercrime investigator in handling a complaint.",
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
        📱 Know Your Digital Rights
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>
          Your rights online
        </Text>

        <Text style={styles.lawNoteText}>
          Digital safety includes privacy, protection from cyberstalking,
          misuse of personal information, identity theft, unwanted sharing
          of private images and other forms of online abuse.
        </Text>

        <Text style={styles.note}>
          ⚠️ Important legal update
        </Text>

        <Text style={styles.lawNoteText}>
          Some digital-rights protections come from laws that are already
          in force, such as the Information Technology Act, 2000 and the
          Bharatiya Nyaya Sanhita, 2023. The Digital Personal Data
          Protection Act, 2023 has a phased commencement, so not all of
          its rights are currently operational at the same time.
        </Text>

        <Text style={styles.note}>
          If something happens online
        </Text>

        <Text style={styles.lawNoteText}>
          Save relevant evidence, use the platform&asop;s reporting mechanism
          where appropriate, and report cybercrime through the Government&asop;s
          National Cyber Crime Reporting Portal. For an emergency, contact
          the police through 112.
        </Text>
      </View>

      <Text style={styles.content}>
        Understand your rights when using social media, messaging apps,
        websites and other digital services.
      </Text>

      <Text style={styles.sectionTitle}>
        🔐 Digital Safety & Legal Rights
      </Text>

      <Text style={styles.sectionDescription}>
        These are simplified explanations. The exact legal provision that
        applies depends on the facts and the type of conduct involved.
      </Text>

      {digitalRights.map((item) => {
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
                    // Add navigation to the detailed digital-rights page later.
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