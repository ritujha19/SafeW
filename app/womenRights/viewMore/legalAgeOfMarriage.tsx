import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type LawSection = {
  section: string;
  title: string;
  whatTheLawSays: string;
  whatItMeans: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#09325f",
    marginBottom: 8,
  },

  lawName: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 18,
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
    fontSize: 17,
    fontWeight: "bold",
    color: "#09325f",
    marginBottom: 8,
  },

  introText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },

  sectionButton: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 15,
    minHeight: 55,
  },

  sectionButtonContent: {
    flex: 1,
    paddingRight: 10,
  },

  sectionNumber: {
    color: "#dcecff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },

  sectionTitle: {
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
    borderWidth: 1,
    borderColor: "#67a2e1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 14,
  },

  nestedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#67a2e1",
    marginTop: 2,
    marginBottom: 8,
  },

  expandedText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },

  importantBox: {
    backgroundColor: "#fff8e8",
    borderWidth: 1,
    borderColor: "#e5c77a",
    borderRadius: 10,
    padding: 15,
    marginTop: 8,
    marginBottom: 18,
  },

  importantTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#765500",
    marginBottom: 7,
  },

  importantText: {
    fontSize: 14,
    color: "#4a3a00",
    lineHeight: 22,
  },

  sourceBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    marginBottom: 30,
  },

  sourceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 7,
  },

  sourceText: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
  },
});

export default function LegalAgeMarriage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    null,
  );

  const lawSections: LawSection[] = [
    {
      section: "Section 1",
      title: "Short title, extent and commencement",
      whatTheLawSays:
        "This law is called the Prohibition of Child Marriage Act, 2006. It provides the legal framework for prohibiting child marriages and related matters. The Act came into force on 1 November 2007.",
      whatItMeans:
        "This section identifies the Act and establishes when it came into force. The detailed rights, duties, offences and remedies are provided in the following sections.",
    },

    {
      section: "Section 2",
      title: "Definitions",
      whatTheLawSays:
        "The Act defines a child as a male who has not completed 21 years of age or a female who has not completed 18 years of age. A child marriage means a marriage where either of the contracting parties is a child. The section also defines terms such as contracting party, Child Marriage Prohibition Officer, district court and minor.",
      whatItMeans:
        "Under this Act, a person below 21 years if male or below 18 years if female is a child for the purposes of the Act. A marriage involving either person below the applicable age falls within the definition of child marriage.",
    },

    {
      section: "Section 3",
      title: "Child marriage is generally voidable",
      whatTheLawSays:
        "Every child marriage is voidable at the option of the contracting party who was a child at the time of the marriage. A petition for a decree of nullity can be filed by that contracting party in the district court. The petition must generally be filed before the person completes two years after attaining majority.",
      whatItMeans:
        "A child marriage is not automatically void in every case under this section. The person who was a child can ask the court to annul the marriage, subject to the conditions and time limit provided by the Act.",
    },

    {
      section: "Section 4",
      title: "Maintenance and residence",
      whatTheLawSays:
        "When granting a decree under Section 3, the district court may make an order directing the male contracting party, or his parent or guardian where applicable, to pay maintenance to the female contracting party until her remarriage. The court may also make an order regarding her residence.",
      whatItMeans:
        "When a child marriage is annulled under Section 3, the court can provide financial support and make appropriate residence arrangements for the female contracting party, according to the circumstances of the case.",
    },

    {
      section: "Section 5",
      title: "Custody and maintenance of children",
      whatTheLawSays:
        "Where children are born from a child marriage, the district court can make appropriate orders concerning their custody and maintenance. The welfare and best interests of the child are the paramount consideration.",
      whatItMeans:
        "If children are involved, the court can decide who should have custody and how the children should be financially supported. The child's welfare comes first.",
    },

    {
      section: "Section 6",
      title: "Legitimacy of children",
      whatTheLawSays:
        "A child born or conceived from a child marriage is treated as a legitimate child for all purposes, even where the child marriage is later annulled under Section 3.",
      whatItMeans:
        "If a child was born or conceived from a child marriage, annulment of the marriage does not remove the child's legal status as a legitimate child.",
    },

    {
      section: "Section 7",
      title: "District court can modify certain orders",
      whatTheLawSays:
        "The district court can modify orders made under Sections 4 and 5 relating to maintenance, residence, custody or other matters covered by those sections when circumstances require modification.",
      whatItMeans:
        "Orders concerning maintenance, residence or children are not necessarily fixed forever. The court can modify them when the law and circumstances permit.",
    },

    {
      section: "Section 8",
      title: "Court where a petition can be made",
      whatTheLawSays:
        "The Act specifies the district court having jurisdiction for petitions under Sections 3, 4 and 5. Depending on the circumstances, jurisdiction can be connected with where the defendant or child resides, where the marriage was solemnised, where the parties last resided together, or where the petitioner resides when filing the petition.",
      whatItMeans:
        "The Act provides several possible places where the appropriate court can have jurisdiction for these matters. The exact court depends on the circumstances of the case.",
    },

    {
      section: "Section 9",
      title: "Punishment for an adult male marrying a child",
      whatTheLawSays:
        "A male adult above 18 years who contracts a child marriage can be punished with rigorous imprisonment for a term which may extend to two years, or with a fine which may extend to one lakh rupees, or with both.",
      whatItMeans:
        "The Act creates a criminal offence for an adult male who contracts a child marriage and provides imprisonment, fine, or both as possible punishment.",
    },

    {
      section: "Section 10",
      title: "Punishment for solemnising a child marriage",
      whatTheLawSays:
        "A person who performs, conducts, directs or abets a child marriage can be punished with rigorous imprisonment for a term which may extend to two years and can also be liable to a fine which may extend to one lakh rupees, unless the statutory defence applies.",
      whatItMeans:
        "The law can punish people who conduct or help solemnise a child marriage, not only the people getting married.",
    },

    {
      section: "Section 11",
      title: "Promoting or permitting a child marriage",
      whatTheLawSays:
        "A person having charge of a child who promotes the marriage, permits it to be solemnised, or negligently fails to prevent it can face rigorous imprisonment for up to two years and a fine of up to one lakh rupees. The Act specifically provides that a woman cannot be punished with imprisonment under this section.",
      whatItMeans:
        "People responsible for a child can also face legal consequences if they promote, permit or negligently allow a child marriage.",
    },

    {
      section: "Section 12",
      title: "When a child marriage is void",
      whatTheLawSays:
        "A marriage involving a minor child is null and void in specified circumstances. These include situations where the child is taken or enticed from the lawful guardian, is forced or deceived into going from a place, or is sold for marriage or subsequently sold, trafficked or used for immoral purposes.",
      whatItMeans:
        "Section 3 provides the general rule that a child marriage is voidable. Section 12 is different: in the specific circumstances listed here, the marriage is treated as void.",
    },

    {
      section: "Section 13",
      title: "Court can prohibit an upcoming child marriage",
      whatTheLawSays:
        "If a Judicial Magistrate of the first class or a Metropolitan Magistrate is satisfied that a child marriage has been arranged or is about to be solemnised in contravention of the Act, the Magistrate can issue an injunction prohibiting the marriage. The Act allows information or complaints to be provided in the manner described in the section.",
      whatItMeans:
        "The law allows preventive court action before a child marriage takes place. A court can order people not to proceed with the planned marriage.",
    },

    {
      section: "Section 14",
      title: "Marriage violating an injunction is void",
      whatTheLawSays:
        "A child marriage solemnised in contravention of an injunction issued under Section 13 is void from the beginning.",
      whatItMeans:
        "If a court has prohibited a child marriage through an injunction and the marriage is nevertheless solemnised in violation of that order, the Act treats that marriage as void.",
    },

    {
      section: "Section 15",
      title: "Offences are cognizable and non-bailable",
      whatTheLawSays:
        "The offences punishable under the Act are cognizable and non-bailable.",
      whatItMeans:
        "These terms describe the criminal-procedure status of offences under the Act. They indicate that these offences are treated as criminal offences with specific procedural consequences.",
    },

    {
      section: "Section 16",
      title: "Child Marriage Prohibition Officers",
      whatTheLawSays:
        "The State Government appoints Child Marriage Prohibition Officers for specified areas. Their duties include preventing child marriages, collecting evidence for prosecution, advising people, creating awareness and carrying out other functions assigned under the Act.",
      whatItMeans:
        "These are designated officials responsible for helping prevent child marriages and supporting enforcement of the Act.",
    },

    {
      section: "Section 17",
      title: "Officers are public servants",
      whatTheLawSays:
        "A Child Marriage Prohibition Officer appointed under Section 16 is considered a public servant while performing functions under the Act.",
      whatItMeans:
        "The officer has the legal status of a public servant when carrying out duties under this law.",
    },

    {
      section: "Section 18",
      title: "Protection for action taken in good faith",
      whatTheLawSays:
        "The Act provides protection for actions taken or intended to be taken in good faith under the Act or rules made under it, subject to the conditions provided by the section.",
      whatItMeans:
        "The law provides certain legal protection for people acting in good faith while carrying out duties under this Act.",
    },

    {
      section: "Section 19",
      title: "State Government can make rules",
      whatTheLawSays:
        "The State Government may make rules, by notification in the Official Gazette, for carrying out the provisions of the Act. Rules made under this section are to be laid before the State Legislature as provided by the Act.",
      whatItMeans:
        "States can create rules explaining how parts of the Act are implemented in practice.",
    },

    {
      section: "Section 20",
      title: "Amendment to the Hindu Marriage Act",
      whatTheLawSays:
        "This section amended Section 18 of the Hindu Marriage Act, 1955, relating to punishment for contravention of the minimum-age condition for marriage under that Act.",
      whatItMeans:
        "This section connects the child-marriage law with the Hindu Marriage Act by changing the punishment provision in that separate law.",
    },

    {
      section: "Section 21",
      title: "Repeal and savings",
      whatTheLawSays:
        "The Child Marriage Restraint Act, 1929 is repealed. However, cases and other proceedings that were already pending or continued under the earlier Act when the new Act commenced are dealt with according to the savings provision in Section 21.",
      whatItMeans:
        "The 2006 Act replaced the earlier Child Marriage Restraint Act, 1929, while preserving the treatment of certain existing proceedings.",
    },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(
      expandedSection === section ? null : section,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.header}>
        ⚖️ Legal Age of Marriage
      </Text>

      <Text style={styles.lawName}>
        <Text style={{ fontWeight: "bold" }}>Law: </Text>
        Prohibition of Child Marriage Act, 2006
      </Text>

      <View style={styles.introBox}>
        <Text style={styles.introTitle}>
          What is this law about?
        </Text>

        <Text style={styles.introText}>
          This Act provides for the prohibition of child marriages
          and deals with their legal consequences, penalties,
          prevention, court remedies and enforcement.
        </Text>
      </View>

      {lawSections.map((item) => {
        const isExpanded = expandedSection === item.section;

        return (
          <View key={item.section}>
            <Pressable
              accessibilityRole="button"
              style={styles.sectionButton}
              onPress={() => toggleSection(item.section)}
            >
              <View style={styles.sectionButtonContent}>
                <Text style={styles.sectionNumber}>
                  📖 {item.section}
                </Text>

                <Text style={styles.sectionTitle}>
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
                  What the law says
                </Text>

                <Text style={styles.expandedText}>
                  {item.whatTheLawSays}
                </Text>

                <Text style={styles.nestedTitle}>
                  What it means
                </Text>

                <Text style={styles.expandedText}>
                  {item.whatItMeans}
                </Text>
              </View>
            )}
          </View>
        );
      })}

      <View style={styles.importantBox}>
        <Text style={styles.importantTitle}>
          ⚠️ Important
        </Text>

        <Text style={styles.importantText}>
          This page is a simplified legal-information guide.
          The exact legal position can depend on the facts of
          a case, court orders and applicable State rules or
          amendments. It is not a substitute for advice from
          a qualified legal professional.
        </Text>
      </View>

      <View style={styles.sourceBox}>
        <Text style={styles.sourceTitle}>
          📚 Legal Source
        </Text>

        <Text style={styles.sourceText}>
          Prohibition of Child Marriage Act, 2006
          {"\n"}
          Act No. 6 of 2007
          {"\n\n"}
          Sections covered: 1–21
          {"\n\n"}
          Official source: India Code
        </Text>
      </View>
    </ScrollView>
  );
}
