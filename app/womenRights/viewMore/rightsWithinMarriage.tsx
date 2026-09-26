import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Block } from "@/components/Accordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function RightsWithinMarriage() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        💍 Rights Within Marriage
      </Heading>

      <Callout tone="dusk" title="Marriage does not mean giving up your rights">
        <Body size="sm" tone="ink">
          Being married does not remove a woman&apos;s protection under the
          law. Depending on the circumstances and the law applicable to the
          marriage, legal remedies can exist for domestic violence, residence,
          financial support, matrimonial disputes, divorce and matters
          involving children.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          The exact rights and procedure can differ because India has
          different marriage and family-law frameworks.
        </Body>
      </Callout>

      <Callout tone="marigold" title="Important">
        The laws below do not all apply to every marriage in the same way. The
        Hindu Marriage Act and Special Marriage Act, for example, apply in
        different legal circumstances. The Domestic Violence Act has its own
        scope and provides protections in qualifying domestic relationships.
      </Callout>

      <Heading size="lg" className="mb-1 mt-2">
        📖 Legal Rights & Protections
      </Heading>
      <Body size="sm" className="mb-4">
        Open each section to see the legal provision and its meaning in simple
        language.
      </Body>

      <LawSectionAccordion
        icon="heart-outline"
        accent="dusk"
        items={[
          {
            law: "General legal principle",
            section: "Constitution of India",
            title: "Marriage Does Not Remove Your Legal Rights",
            meaning:
              "Marriage does not make a woman lose her separate legal identity or place her outside the protection of law. The specific rights and remedies available in a matrimonial situation depend on the applicable law and the circumstances.",
            important:
              "India does not have one single matrimonial law that applies identically to every marriage. The applicable law can depend on the type of marriage and the circumstances.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 3",
            title: "Protection from Domestic Violence",
            meaning:
              "Section 3 defines domestic violence for the purposes of the Act. It covers physical abuse, sexual abuse, verbal and emotional abuse, and economic abuse when the statutory requirements are satisfied.",
            important: "Domestic violence is not limited to physical violence. The Act recognizes several forms of abuse.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 18",
            title: "Protection Orders",
            meaning:
              "When the Magistrate is satisfied that domestic violence has taken place or is likely to take place, the Magistrate may issue a protection order. The order can prohibit specified acts, including committing domestic violence, contacting the aggrieved person in specified ways, or interfering with certain assets or property.",
            important: "A protection order is made by the Magistrate according to the facts and requirements of the case.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 21",
            title: "Temporary Child Custody",
            meaning:
              "The Magistrate may grant temporary custody of a child or children to the aggrieved person or make arrangements concerning custody as permitted by the Act.",
            important: "This is a temporary remedy under the Domestic Violence Act and depends on the circumstances of the case.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 22",
            title: "Compensation and Damages",
            meaning:
              "The Magistrate may direct the respondent to pay compensation and damages for injuries, including mental torture and emotional distress, caused by domestic violence.",
            important: "The amount and grant of compensation depend on the circumstances and the order of the Magistrate.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 23",
            title: "Interim and Ex Parte Orders",
            meaning:
              "The Magistrate may grant interim orders during the proceedings. Where the statutory requirements are satisfied, the Magistrate may also grant an ex parte order on the basis of the application and affidavit.",
            important:
              "An interim or ex parte order provides temporary legal protection while the matter is being considered. It is not necessarily the final decision in the case.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 26",
            title: "Relief in Other Legal Proceedings",
            meaning:
              "Reliefs available under the Domestic Violence Act may also be sought in certain other legal proceedings before a civil court, family court or criminal court, subject to the requirements of the Act.",
            important: "The same situation can involve different legal proceedings, so the appropriate remedy depends on the facts and applicable law.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Sections 4–5",
            title: "Information and Duties of Authorities",
            meaning:
              "The Act provides a mechanism for giving information about domestic violence and sets out duties of police officers, service providers and Magistrates when they receive information about domestic violence.",
            important:
              "These provisions concern the response system and duties of authorities; they do not replace the individual remedies available under Sections 18–23.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Sections 8–10",
            title: "Protection Officers and Service Providers",
            meaning:
              "The Act provides for the appointment of Protection Officers and recognizes service providers who can assist women in matters covered by the Act.",
            important: "Protection Officers and recognized service providers are part of the statutory support mechanism under the Domestic Violence Act.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 12",
            title: "Application to the Magistrate",
            meaning:
              "An aggrieved person or certain persons acting on her behalf may present an application to the Magistrate seeking one or more of the reliefs provided under the Act.",
            important: "The specific relief requested and the facts of the case determine what orders the Magistrate can consider.",
          },
        ]}
      />

      <Heading size="lg" className="mb-2 mt-4">
        🛡️ If a Marriage Becomes Unsafe
      </Heading>
      <Callout tone="dusk">
        A woman does not have to treat abuse as simply a &quot;marital
        problem.&quot; Where the statutory requirements are met, the
        Protection of Women from Domestic Violence Act provides legal remedies
        including protection orders, residence orders, monetary relief,
        custody orders and compensation.
      </Callout>

      <Block label="Remember" tone="remember">
        Marriage law can depend on the type of marriage, the statute governing
        it, the personal law involved and the facts of the situation. A
        legal-aid service or qualified lawyer can help determine which
        provisions apply to a particular case.
      </Block>

      <Body size="sm" className="mt-5">
        This page provides general legal information about selected statutory
        rights and remedies. It is not a substitute for legal advice in an
        individual case. The availability of a particular remedy depends on
        the applicable law and the facts and circumstances of the case.
      </Body>
    </Screen>
  );
}