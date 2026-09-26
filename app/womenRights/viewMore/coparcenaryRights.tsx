import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function CoparcenaryRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        👩‍👧 Equal Coparcenary Rights for Daughters
      </Heading>

      <Body tone="ink" className="mb-4">
        Under Section 6 of the Hindu Succession Act, daughters in Mitakshara
        joint Hindu families have the same coparcenary rights and liabilities
        as sons.
      </Body>

      <Callout tone="marigold" title="⚖️ Important">
        This page concerns a specific Hindu-law concept called coparcenary. It
        does not mean that every daughter automatically owns a share in every
        property owned by her parents.
      </Callout>

      <LawSectionAccordion
        icon="people-outline"
        accent="dusk"
        items={[
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6(1)",
            title: "Daughter Is a Coparcener by Birth",
            meaning:
              "In a Mitakshara joint Hindu family, a daughter is a coparcener by birth in the same manner as a son. She has the same rights and liabilities in the coparcenary property as a son.",
            important: "This is a Hindu-law-specific right. It does not mean that every property owned by every Hindu family is automatically coparcenary property.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6(1)",
            title: "Same Rights as a Son",
            meaning: "A daughter has the same legal position as a son in the coparcenary. Her status is not reduced simply because she is a daughter.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6(1)",
            title: "Same Liabilities as a Son",
            meaning: "The amendment gives daughters the same rights and liabilities in coparcenary property as sons.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6",
            title: "Father Need Not Be Alive in 2005",
            meaning:
              "The Supreme Court in Vineeta Sharma v. Rakesh Sharma clarified that the daughter can claim coparcenary status by birth even if the father was not alive when the 2005 amendment came into force.",
            important: "The existence and nature of the property and any legally recognised earlier partition can still affect an individual claim.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6(3)",
            title: "Devolution of a Coparcener's Interest",
            meaning: "When a Hindu dies after the commencement of the 2005 amendment, his interest in coparcenary property devolves by testamentary or intestate succession under the Act rather than by the old survivorship rule.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6(5)",
            title: "Earlier Partitions",
            meaning:
              "The Act contains a saving rule for partitions that took place before the statutory date specified in Section 6. The Supreme Court has clarified what qualifies as a legally recognised partition for this purpose.",
            important: "A claim cannot be decided simply by saying that a family verbally divided property. The statutory requirements and evidence matter.",
          },
          {
            law: "General Legal Principle",
            section: "Important Distinction",
            title: "Coparcenary Is Not Every Family Property",
            meaning: "Coparcenary rights concern property falling within the Hindu Mitakshara coparcenary. A person's separate or self-acquired property is not automatically converted into coparcenary property merely because the person has children.",
          },
          {
            law: "General Legal Principle",
            section: "Practical Point",
            title: "What a Daughter Can Claim",
            meaning: "Where Section 6 applies, a daughter can assert the same coparcenary rights as a son, including the legal ability to seek partition according to the applicable law.",
            important: "The actual share depends on the family structure, property involved, prior legally recognised transactions and other applicable facts.",
          },
        ]}
      />

      <Body size="sm" className="mt-4">
        SAFE-W provides general legal information for awareness and
        education. The exact property rights in an individual case depend on
        the nature of the property and the applicable law.
      </Body>
    </Screen>
  );
}
