import { RightsSection } from "@/components/RightsSection";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function FamilyMarriageRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        ⚖️ Which family law applies to me?
      </Heading>

      <Callout tone="dusk" title="Family laws can differ">
        The law that applies to you may depend on your religion, the type of
        marriage, and the law under which the marriage was solemnized or
        registered.
      </Callout>

      <Callout tone="dusk" title="Examples">
        <Body size="sm" tone="ink">
          🕉️ Hindu, Buddhist, Jain or Sikh → Hindu marriage laws may apply,
          subject to their legal conditions.{"\n\n"}
          ☪️ Muslim → Muslim personal law and applicable statutes may apply.
          {"\n\n"}
          🤝 Marriage under the Special Marriage Act → the Special Marriage Act
          applies.{"\n\n"}
          ✝️ Christian marriage → applicable Christian marriage law may apply.
          {"\n\n"}
          🧿 Parsi marriage → the Parsi Marriage and Divorce Act may apply.
        </Body>
      </Callout>

      <Callout tone="dusk" title="Not sure which law applies?">
        The exact law can depend on your circumstances. Legal-aid services can
        help you understand which law applies to your situation.
      </Callout>

      <Body tone="ink" className="mb-4 mt-2">
        Understand your legal rights around marriage, divorce, maintenance,
        property and family matters.
      </Body>

      <RightsSection
        heading="💍 Know Your Family & Marriage Rights"
        icon="heart-outline"
        accent="dusk"
        items={[
          {
            label: "Prohibition of Child Marriage Act, 2006",
            title: "Legal Age of Marriage",
            meaning:
              "The law protects children from being married before the legally defined age. A child marriage can have legal consequences and may be challenged in the situations provided by law.",
            whyItMatters:
              "Children have legal protection against being married before the legally defined age.",
            route: "/womenRights/viewMore/legalAgeOfMarriage",
          },
          {
            label: "Applicable marriage registration law",
            title: "Marriage Registration",
            meaning:
              "Registering a marriage creates an official record of the marriage. The law and procedure can depend on how the marriage was solemnized and which law applies.",
            whyItMatters:
              "An official marriage record can help prove that a marriage exists when dealing with legal, financial or government matters.",
            route: "/womenRights/viewMore/marriageRegistration",
          },
          {
            label: "Applicable marriage and family law",
            title: "Rights Within Marriage",
            meaning:
              "Marriage does not mean that a woman loses her legal identity or basic rights. The exact legal rights and responsibilities of spouses can depend on the law governing the marriage.",
            whyItMatters: "Being married does not mean giving up your legal rights.",
            route: "/womenRights/viewMore/rightsWithinMarriage",
          },
          {
            label: "Applicable marriage law",
            title: "Divorce Rights",
            meaning:
              "A marriage can be ended through the legal process provided by the law that governs it. Different marriage laws can have different grounds and procedures for divorce.",
            whyItMatters:
              "There are legal routes for ending a marriage, and the applicable process depends on the law governing that marriage.",
            route: "/womenRights/viewMore/divorceRights",
          },
          {
            label: "Applicable maintenance law",
            title: "Maintenance",
            meaning:
              "In certain situations, a spouse may be able to ask for financial support from the other spouse. The law that applies and the circumstances of the case determine what support may be available.",
            whyItMatters: "Financial support can be important during separation or matrimonial proceedings.",
            route: "/womenRights/viewMore/maintenance",
          },
          {
            label: "Applicable succession and property law",
            title: "Property & Inheritance",
            meaning:
              "Rules about who can inherit property can depend on the law that applies to the family and the type of property involved.",
            whyItMatters:
              "Understanding inheritance rules can help a woman know whether she may have a legal share in family property.",
            route: "/womenRights/viewMore/propertyInheritance",
          },
          {
            label: "Hindu Succession Act, 1956 — Section 6",
            title: "Equal Coparcenary Rights for Daughters",
            meaning:
              "For Hindu Mitakshara joint families covered by the Act, a daughter is a coparcener in the same way as a son and has the same rights and liabilities in coparcenary property.",
            whyItMatters:
              "For families covered by this law, being a daughter does not by itself remove her equal coparcenary rights.",
            route: "/womenRights/viewMore/coparcenaryRights",
          },
          {
            label: "Dowry Prohibition Act, 1961",
            title: "Dowry Prohibition",
            meaning:
              "The law prohibits giving or taking dowry and also provides punishment for demanding dowry, subject to the provisions of the Act.",
            whyItMatters:
              "Women and their families have legal protection against unlawful dowry demands connected with marriage.",
            route: "/womenRights/viewMore/dowryProhibition",
          },
          {
            label: "Protection of Women from Domestic Violence Act, 2005",
            title: "Rights in a Shared Household",
            meaning:
              "The law provides certain protections relating to a shared household and can provide remedies such as protection orders, residence orders and monetary relief.",
            whyItMatters:
              "A woman covered by the Act may have legal protection concerning her home and financial needs during a domestic dispute.",
            route: "/womenRights/viewMore/rightsInSharedHousehold",
          },
          {
            label: "Applicable marriage and family law",
            title: "Rights After Divorce",
            meaning:
              "Ending a marriage can involve other legal matters such as financial support, children and property. The rights and orders available depend on the law and circumstances involved.",
            whyItMatters: "Divorce is not only about ending the marriage. Other important legal matters may also need to be addressed.",
            route: "/womenRights/viewMore/rightsAfterDivorce",
          },
        ]}
      />
    </Screen>
  );
}
