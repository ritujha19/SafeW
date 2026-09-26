import { RightsSection } from "@/components/RightsSection";
import { Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function ProtectionFromViolence() {
  return (
    <Screen>
      <Body tone="ink" className="mb-4">
        Know the laws that protect women from violence, abuse, exploitation, and
        other offences.
      </Body>

      <RightsSection
        icon="alert-circle-outline"
        accent="marigold"
        items={[
          {
            label: "BNS, 2023 — Sections 63–64",
            title: "Rape",
            meaning:
              "Section 63 defines rape and specifies the circumstances in which sexual acts constitute the offence. Section 64 provides punishment for rape.",
            whyItMatters:
              "It provides criminal protection against rape and establishes punishment for the offence.",
          },
          {
            label: "BNS, 2023 — Section 62",
            title: "Attempt to Commit Rape",
            meaning:
              "Section 62 provides punishment for an attempt to commit an offence when the person does an act towards its commission and no specific punishment for that attempt is provided.",
            whyItMatters:
              "It can apply when conduct amounts to an attempt to commit an offence such as rape, even when the completed offence does not occur.",
          },
          {
            label: "BNS, 2023 — Section 75",
            title: "Sexual Harassment",
            meaning:
              "Section 75 covers specified forms of sexual harassment, including unwelcome sexual advances or demands for sexual favours, showing pornography against a woman's will, and sexually coloured remarks.",
            whyItMatters:
              "It recognizes specified forms of unwanted sexual conduct as a criminal offence.",
          },
          {
            label: "BNS, 2023 — Section 78",
            title: "Stalking",
            meaning:
              "Section 78 covers specified repeated following or contacting of a woman despite a clear indication of disinterest, including certain forms of monitoring her internet, email or other electronic communication.",
            whyItMatters:
              "It provides criminal protection against conduct that falls within the legal definition of stalking.",
          },
          {
            label: "BNS, 2023 — Section 77",
            title: "Voyeurism",
            meaning:
              "Section 77 addresses watching, capturing images of a woman engaged in a private act in circumstances where she would ordinarily expect privacy, or disseminating such images.",
            whyItMatters:
              "It provides criminal protection against specified violations of a woman's privacy involving private acts.",
          },
          {
            label: "BNS, 2023 — Section 74",
            title: "Assault or Criminal Force Against a Woman",
            meaning:
              "Section 74 addresses assault or use of criminal force against a woman with intent to outrage, or knowing it is likely to outrage, her modesty.",
            whyItMatters:
              "It provides criminal protection against specified forms of physical assault or criminal force directed at women.",
          },
          {
            label: "Protection of Women from Domestic Violence Act, 2005 — Section 3",
            title: "Domestic Violence",
            meaning:
              "Section 3 defines domestic violence and covers specified forms of physical, sexual, verbal or emotional, and economic abuse within the relationships covered by the Act.",
            whyItMatters:
              "The Act provides protections and remedies for women experiencing domestic violence, including protection and residence orders.",
          },
          {
            label: "BNS, 2023 — Section 80",
            title: "Dowry Death",
            meaning:
              "Section 80 addresses the death of a woman in circumstances covered by the statutory definition of dowry death, including specified cruelty or harassment connected with a dowry demand.",
            whyItMatters:
              "It provides specific criminal protection in cases involving dowry-related deaths.",
          },
          {
            label: "BNS, 2023 — Section 124",
            title: "Acid Attack",
            meaning: "Section 124 addresses voluntarily causing grievous hurt by use of acid or a similar substance.",
            whyItMatters:
              "It provides specific criminal protection against acid attacks and related serious harm.",
          },
          {
            label: "BNS, 2023 — Section 143",
            title: "Trafficking of Persons",
            meaning:
              "Section 143 addresses trafficking of persons through specified acts and means for specified exploitative purposes.",
            whyItMatters: "It provides criminal protection against human trafficking and exploitation.",
          },
        ]}
      />
    </Screen>
  );
}
