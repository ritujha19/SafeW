import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function DowryProhibition() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        🚫 Dowry Prohibition
      </Heading>

      <Body tone="ink" className="mb-4">
        Indian law prohibits dowry and provides penalties for giving, taking
        and demanding dowry. It also provides protections concerning property
        received as dowry.
      </Body>

      <Callout tone="marigold" title="⚖️ Important">
        Dowry and ordinary voluntary presents are not automatically the same
        thing. Whether something falls within the legal definition depends on
        the statutory definition and the circumstances.
      </Callout>

      <LawSectionAccordion
        icon="close-circle-outline"
        accent="marigold"
        items={[
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 2",
            title: "What Is Dowry?",
            meaning:
              "Dowry means property or valuable security given or agreed to be given, directly or indirectly, by one party to a marriage to the other party, or by the parents or other persons, in connection with the marriage, subject to the statutory definition and exclusions.",
            important: "Not every gift exchanged at a marriage is automatically dowry. The statutory definition and circumstances matter.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 3",
            title: "Giving or Taking Dowry",
            meaning: "Giving, taking or abetting the giving or taking of dowry is punishable under the Act, subject to the statutory provisions and exceptions concerning certain presents.",
            important: "The Act provides an exception for certain presents given without demand when the statutory conditions, including the prescribed list requirements, are satisfied.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 4",
            title: "Demanding Dowry",
            meaning: "Directly or indirectly demanding dowry from the parents, relatives or guardian of a bride or bridegroom is punishable under the Act.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 4A",
            title: "Ban on Certain Dowry Advertisements",
            meaning: "The Act prohibits advertisements offering money, property or an interest in a business or other property as consideration for the marriage of a son, daughter or other relative.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 5",
            title: "Dowry Agreements Are Void",
            meaning: "An agreement for giving or taking dowry is void under the Act.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 6",
            title: "Dowry for the Benefit of the Wife",
            meaning:
              "Where dowry is received by someone other than the woman, the Act provides that it is to be transferred for the benefit of the woman within the statutory framework. The section also contains rules concerning property and the woman's heirs.",
            important: "Section 6 should not be confused with a general property or inheritance rule. It specifically deals with dowry received in connection with marriage.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 7",
            title: "Cognizance of Offences",
            meaning: "Section 7 sets out who may take cognizance of offences under the Act and the conditions governing complaints.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 8",
            title: "Nature of Certain Offences",
            meaning: "The Act provides rules concerning cognizance, bailability and compounding of offences as specified by the section.",
            important: "The exact criminal-procedure consequences should be read with the current procedural law and amendments applicable to the case.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Section 8B",
            title: "Dowry Prohibition Officers",
            meaning: "State Governments may appoint Dowry Prohibition Officers. Their functions include helping ensure compliance with the Act, preventing dowry practices and demands, collecting evidence and performing other assigned functions.",
          },
          {
            law: "Dowry Prohibition Act, 1961",
            section: "Sections 9–10",
            title: "Rules Under the Act",
            meaning: "The Act provides powers for the Central and State Governments to make rules for carrying out its purposes, including matters relating to the maintenance of lists of presents.",
          },
        ]}
      />

      <Body size="sm" className="mt-4">
        SAFE-W provides general legal information for awareness and
        education. Criminal procedure and penalties can depend on the current
        law and circumstances of the case.
      </Body>
    </Screen>
  );
}
