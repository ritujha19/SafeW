import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function SharedHouseholdRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        🏠 Rights in a Shared Household
      </Heading>

      <Body tone="ink" className="mb-4">
        The Protection of Women from Domestic Violence Act provides specific
        protections concerning a woman&apos;s residence in a shared household
        when she is in a domestic relationship.
      </Body>

      <Callout tone="marigold" title="⚖️ Important distinction">
        The right to reside in a shared household is a legal protection. It
        does not automatically make the woman the owner of the house.
      </Callout>

      <LawSectionAccordion
        icon="home-outline"
        accent="dusk"
        items={[
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 2(s)",
            title: "What Is a Shared Household?",
            meaning:
              "A shared household is a household where the woman lives or has at any stage lived in a domestic relationship. The statutory definition includes certain jointly owned or rented homes and can also include a household belonging to a joint family of which the respondent is a member.",
            important: "The exact facts of the household and domestic relationship matter.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 17",
            title: "Right to Reside in a Shared Household",
            meaning: "Every woman in a domestic relationship has a right to reside in the shared household, whether or not she has any right, title or beneficial interest in it.",
            important: "A right to reside is not the same thing as ownership of the property.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 17(2)",
            title: "Protection From Being Excluded",
            meaning: "The woman cannot be evicted from or excluded from the shared household except according to the procedure established by law.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 18",
            title: "Protection Orders",
            meaning: "Where domestic violence is established or threatened within the scope of the Act, a Magistrate may issue a protection order restricting specified acts of domestic violence and contact or interference as provided by the section.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 19",
            title: "Residence Orders",
            meaning: "A Magistrate may make residence-related orders, including orders restraining dispossession or disturbance of possession and other arrangements authorised by the Act.",
            important: "The available order depends on the circumstances and the statutory conditions.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 19",
            title: "Alternative Accommodation or Rent",
            meaning: "In appropriate circumstances, the Magistrate may direct the respondent to secure the same level of alternate accommodation for the woman or to pay rent for it, as provided by the Act.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 23",
            title: "Interim and Ex Parte Orders",
            meaning: "The Magistrate may grant interim and, where the statutory requirements are met, ex parte orders during proceedings.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 26",
            title: "Relief in Other Proceedings",
            meaning: "Reliefs available under Sections 18 to 22 may also be sought in other legal proceedings before a civil court, family court or criminal court, subject to the Act.",
            important: "This provision helps prevent the remedies under the Domestic Violence Act from being treated as limited to only one type of proceeding.",
          },
        ]}
      />

      <Body size="sm" className="mt-4">
        SAFE-W provides general legal information for awareness and
        education. Residence rights and court orders depend on the facts of
        the domestic relationship and the applicable law.
      </Body>
    </Screen>
  );
}
