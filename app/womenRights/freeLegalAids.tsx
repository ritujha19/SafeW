import { RightsSection } from "@/components/RightsSection";
import { Callout, Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function FreeLegalAid() {
  return (
    <Screen>
      <Callout tone="dusk" title="Legal help can be available at no cost">
        India has a legal-services system that provides free legal assistance
        to eligible people through Legal Services Authorities.
      </Callout>

      <Callout tone="dusk" title="👩 Women and children">
        Women and children are specifically included as eligible categories
        under Section 12 of the Legal Services Authorities Act, 1987.
      </Callout>

      <Callout tone="dusk" title="📍 Where can you go?">
        You can approach a Legal Services Authority or Committee at the
        appropriate level, including State, District and Taluka levels.
      </Callout>

      <Callout tone="marigold" title="Important">
        Free legal aid does not mean that every legal dispute is automatically
        decided in your favour. The legal-services authority assesses the
        matter according to the applicable law and procedure.
      </Callout>

      <Body tone="ink" className="mb-1 mt-2">
        Understand who can receive free legal aid, what help may be available
        and where to seek it.
      </Body>
      <Body size="sm" className="mb-4">
        Tap a card to understand the legal-aid right and the system through
        which it is provided.
      </Body>

      <RightsSection
        heading="🏛️ Free Legal Aid & Legal Services"
        icon="scale-outline"
        accent="marigold"
        items={[
          {
            label: "Legal Services Authorities Act, 1987 — Section 12",
            title: "Who Can Get Free Legal Aid",
            meaning:
              "The Act provides legal services to specified categories of people, including women and children, members of Scheduled Castes and Scheduled Tribes, persons with disabilities, victims of trafficking, persons in custody and other categories specified by law.",
            whyItMatters:
              "You may qualify for legal assistance through the Legal Services Authorities without having to meet a general income test if you fall within an eligible category.",
          },
          {
            label: "Legal Services Authorities Act, 1987 — Section 12(c)",
            title: "Women & Children Are Eligible",
            meaning:
              "Women and children are specifically included among the categories entitled to legal services under Section 12(c). NALSA states that a woman is eligible for free legal aid irrespective of her income or financial status.",
            whyItMatters: "A woman does not have to prove that she is poor before she can apply for legal aid on the basis of being a woman.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "What Free Legal Services Include",
            meaning:
              "Legal services can include legal advice and assistance and, where applicable, representation through the Legal Services Institutions. The exact assistance provided depends on the case and applicable rules.",
            whyItMatters:
              "Free legal aid is broader than simply receiving a lawyer's name. It can include legal guidance and assistance with a legal matter.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "Where to Apply",
            meaning:
              "A person can approach Legal Services Institutions established at different levels, including State Legal Services Authorities, District Legal Services Authorities and Taluka or equivalent Legal Services Committees.",
            whyItMatters: "You do not necessarily have to start at a High Court or Supreme Court to ask for legal aid.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "NALSA & State Legal Services Authorities",
            meaning:
              "NALSA works at the national level, while State Legal Services Authorities implement legal-services programmes within their respective States. District and Taluka-level institutions provide access closer to where people live.",
            whyItMatters:
              "The legal-aid system has local institutions that can help people access legal services without dealing directly with the national authority.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "District & Taluka Legal Services",
            meaning:
              "District Legal Services Authorities and Taluka or equivalent Legal Services Committees help provide legal services and organize legal-awareness and dispute-resolution activities at local levels.",
            whyItMatters: "Local legal-services offices can be a practical first point of contact for someone seeking legal assistance.",
          },
          {
            label: "Legal Services Institutions",
            title: "Legal Advice Before Going to Court",
            meaning:
              "Legal Services Institutions can provide legal advice and assistance. A person can seek information about available legal remedies before deciding what legal step to take.",
            whyItMatters: "Getting legal information early can help a person understand the available options before starting a case.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "Free Legal Representation",
            meaning:
              "Where legal representation is provided through the legal-services system, an eligible person may receive assistance from a legal practitioner in accordance with the Act and applicable rules.",
            whyItMatters: "An eligible person may be able to obtain representation without paying the lawyer's normal private fee.",
          },
          {
            label: "Legal Services Authorities Act, 1987",
            title: "Lok Adalat & Settlement",
            meaning:
              "Lok Adalats provide a mechanism for amicable settlement of certain disputes at pre-litigation or pending-case stages. Settlements made through a Lok Adalat have the legal effect provided by the Act.",
            whyItMatters: "Some disputes can be resolved through a settlement process rather than continuing through a full court trial.",
          },
          {
            label: "NALSA / Legal Services Institutions",
            title: "How to Apply for Legal Aid",
            meaning:
              "A person can approach the nearest Legal Services Institution or use the legal-aid channels provided by NALSA and the relevant State Legal Services Authority. The authority considers the application under the applicable legal-services framework.",
            whyItMatters: "Knowing where to apply makes free legal assistance easier to access when you need it.",
          },
        ]}
      />
    </Screen>
  );
}
