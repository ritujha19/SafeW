import { useRouter } from "expo-router";
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

type FamilyMarriageRightsItem = {
  law: string;
  title: string;
  meaning: string;
  whyItMatters: string;
  route?: string; // Optional route for detailed law page
};

export default function FamilyMarriageRights() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const familyMarriageRights: FamilyMarriageRightsItem[] = [
    {
      law: "Prohibition of Child Marriage Act, 2006",
      title: "Legal Age of Marriage",
      meaning:
        "The law protects children from being married before the legally defined age. A child marriage can have legal consequences and may be challenged in the situations provided by law.",
      whyItMatters:
        "Children have legal protection against being married before the legally defined age.",
      route: "/womenRights/viewMore/legalAgeOfMarriage",
    },

    {
      law: "Applicable marriage registration law",
      title: "Marriage Registration",
      meaning:
        "Registering a marriage creates an official record of the marriage. The law and procedure can depend on how the marriage was solemnized and which law applies.",
      whyItMatters:
        "An official marriage record can help prove that a marriage exists when dealing with legal, financial or government matters.",
        route: "/womenRights/viewMore/marriageRegistration",
    },

    {
      law: "Applicable marriage and family law",
      title: "Rights Within Marriage",
      meaning:
        "Marriage does not mean that a woman loses her legal identity or basic rights. The exact legal rights and responsibilities of spouses can depend on the law governing the marriage.",
      whyItMatters: "Being married does not mean giving up your legal rights.",
      route: "/womenRights/viewMore/rightsWithinMarriage",
    },

    {
      law: "Applicable marriage law",
      title: "Divorce Rights",
      meaning:
        "A marriage can be ended through the legal process provided by the law that governs it. Different marriage laws can have different grounds and procedures for divorce.",
      whyItMatters:
        "There are legal routes for ending a marriage, and the applicable process depends on the law governing that marriage.",
        route: "/womenRights/viewMore/divorceRights",
    },

    {
      law: "Applicable maintenance law",
      title: "Maintenance",
      meaning:
        "In certain situations, a spouse may be able to ask for financial support from the other spouse. The law that applies and the circumstances of the case determine what support may be available.",
      whyItMatters:
        "Financial support can be important during separation or matrimonial proceedings.",
        route: "/womenRights/viewMore/maintenance",
    },

    {
      law: "Applicable succession and property law",
      title: "Property & Inheritance",
      meaning:
        "Rules about who can inherit property can depend on the law that applies to the family and the type of property involved.",
      whyItMatters:
        "Understanding inheritance rules can help a woman know whether she may have a legal share in family property.",
        route: "/womenRights/viewMore/propertyInheritance",
    },

    {
      law: "Hindu Succession Act, 1956 — Section 6",
      title: "Equal Coparcenary Rights for Daughters",
      meaning:
        "For Hindu Mitakshara joint families covered by the Act, a daughter is a coparcener in the same way as a son and has the same rights and liabilities in coparcenary property.",
      whyItMatters:
        "For families covered by this law, being a daughter does not by itself remove her equal coparcenary rights.",
        route: "/womenRights/viewMore/coparcenaryRights",
    },

    {
      law: "Dowry Prohibition Act, 1961",
      title: "Dowry Prohibition",
      meaning:
        "The law prohibits giving or taking dowry and also provides punishment for demanding dowry, subject to the provisions of the Act.",
      whyItMatters:
        "Women and their families have legal protection against unlawful dowry demands connected with marriage.",
        route: "/womenRights/viewMore/dowryProhibition",
    },

    {
      law: "Protection of Women from Domestic Violence Act, 2005",
      title: "Rights in a Shared Household",
      meaning:
        "The law provides certain protections relating to a shared household and can provide remedies such as protection orders, residence orders and monetary relief.",
      whyItMatters:
        "A woman covered by the Act may have legal protection concerning her home and financial needs during a domestic dispute.",
        route: "/womenRights/viewMore/rightsInSharedHousehold",
    },

    {
      law: "Applicable marriage and family law",
      title: "Rights After Divorce",
      meaning:
        "Ending a marriage can involve other legal matters such as financial support, children and property. The rights and orders available depend on the law and circumstances involved.",
      whyItMatters:
        "Divorce is not only about ending the marriage. Other important legal matters may also need to be addressed.",
        route: "/womenRights/viewMore/rightsAfterDivorce",
    },
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderSection = (
    heading: string,
    items: FamilyMarriageRightsItem[],
    description?: string,
  ) => (
    <View>
      <Text style={styles.sectionTitle}>{heading}</Text>

      {description && (
        <Text style={styles.sectionDescription}>{description}</Text>
      )}

      {items.map((item) => {
        const isExpanded = expandedId === item.law + item.title;

        return (
          <View key={item.law + item.title}>
            <Pressable
              accessibilityRole="button"
              style={styles.accordionButton}
              onPress={() => toggleAccordion(item.law + item.title)}
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
                    if (item.route) {
                      const target = item.route as Parameters<
                        typeof router.navigate
                      >[0];
                      router.navigate(target);
                    }
                  }}
                >
                  <Text style={styles.viewMoreText}>View More →</Text>
                </Pressable>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.sectionTitle}>
        ⚖️ Which family law applies to me?
      </Text>

      <View style={styles.lawNote}>
        <Text style={styles.lawNoteTitle}>Family laws can differ</Text>

        <Text style={styles.lawNoteText}>
          The law that applies to you may depend on your religion, the type of
          marriage, and the law under which the marriage was solemnized or
          registered.
        </Text>

        <Text style={styles.note}>Examples</Text>

        <Text style={styles.lawNoteText}>
          🕉️ Hindu, Buddhist, Jain or Sikh → Hindu marriage laws may apply,
          subject to their legal conditions.
          {"\n\n"}
          ☪️ Muslim → Muslim personal law and applicable statutes may apply.
          {"\n\n"}
          🤝 Marriage under the Special Marriage Act → the Special Marriage Act
          applies.
          {"\n\n"}
          ✝️ Christian marriage → applicable Christian marriage law may apply.
          {"\n\n"}
          🧿 Parsi marriage → the Parsi Marriage and Divorce Act may apply.
        </Text>

        <Text style={styles.note}>Not sure which law applies?</Text>

        <Text style={styles.lawNoteText}>
          The exact law can depend on your circumstances. Legal-aid services can
          help you understand which law applies to your situation.
        </Text>
      </View>

      <Text style={styles.content}>
        Understand your legal rights around marriage, divorce, maintenance,
        property and family matters.
      </Text>

      {renderSection(
        "💍 Know Your Family & Marriage Rights",
        familyMarriageRights,
      )}
    </ScrollView>
  );
}
