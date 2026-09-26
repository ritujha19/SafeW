import { useState } from "react";
import { AccordionItem, Block } from "@/components/Accordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

type LawSection = {
  section: string;
  title: string;
  whatTheLawSays: string;
  whatItMeans: string;
};

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
    whatTheLawSays: "The offences punishable under the Act are cognizable and non-bailable.",
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
    whatItMeans: "The officer has the legal status of a public servant when carrying out duties under this law.",
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
    whatItMeans: "States can create rules explaining how parts of the Act are implemented in practice.",
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

export default function LegalAgeMarriage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <Screen>
      <Heading size="lg" className="mb-1">
        ⚖️ Legal Age of Marriage
      </Heading>
      <Body size="sm" className="mb-4">
        <Body size="sm" weight="bold" tone="ink">
          Law:{" "}
        </Body>
        Prohibition of Child Marriage Act, 2006
      </Body>

      <Callout tone="dusk" title="What is this law about?">
        This Act provides for the prohibition of child marriages and deals
        with their legal consequences, penalties, prevention, court remedies
        and enforcement.
      </Callout>

      {lawSections.map((item) => (
        <AccordionItem
          key={item.section}
          title={item.title}
          subtitle={item.section}
          icon="document-text-outline"
          accent="dusk"
          expanded={openSection === item.section}
          onToggle={() => setOpenSection(openSection === item.section ? null : item.section)}
        >
          <Block label="What the law says" tone="plain">
            {item.whatTheLawSays}
          </Block>
          <Block label="What it means" tone="story">
            {item.whatItMeans}
          </Block>
        </AccordionItem>
      ))}

      <Callout tone="marigold" title="⚠️ Important">
        This page is a simplified legal-information guide. The exact legal
        position can depend on the facts of a case, court orders and
        applicable State rules or amendments. It is not a substitute for
        advice from a qualified legal professional.
      </Callout>

      <Body size="sm" className="mt-1">
        📚 Legal source: Prohibition of Child Marriage Act, 2006 (Act No. 6 of
        2007). Sections covered: 1–21. Official source: India Code.
      </Body>
    </Screen>
  );
}