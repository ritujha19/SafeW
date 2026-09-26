import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function MarriageRegistration() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        💍 Marriage Registration
      </Heading>

      <Callout tone="dusk" title="Why marriage registration matters">
        <Body size="sm" tone="ink">
          Marriage registration creates an official record of a marriage. This
          record can be useful when proving marital status or dealing with
          legal, financial, inheritance, government or family-related
          matters.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          However, the law governing registration is not identical for every
          marriage. It can depend on the religion or personal law involved,
          the form of marriage, the statute under which it was solemnized,
          and the State or Union Territory.
        </Body>
      </Callout>

      <Callout tone="marigold" title="Important">
        Do not assume that Hindu Marriage Act Section 8 applies to every
        marriage in India. Different marriage laws have different
        registration provisions.
      </Callout>

      <Heading size="lg" className="mb-1 mt-2">
        📖 Legal Frameworks
      </Heading>
      <Body size="sm" className="mb-4">
        Open each section to understand which law supports the information
        and what it means in simple language.
      </Body>

      <LawSectionAccordion
        icon="document-text-outline"
        accent="dusk"
        items={[
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 8",
            title: "Registration of Hindu Marriages",
            meaning: "Section 8 allows State Governments to make rules for entering the particulars of Hindu marriages in a Hindu Marriage Register. A State may also make registration compulsory in the State or a particular area.",
            important: "The section specifically says that failure to make the entry does not by itself affect the validity of a Hindu marriage.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 8(4)",
            title: "Marriage Register as Evidence",
            meaning: "The Hindu Marriage Register is open for inspection according to the law, and entries in it can be used as evidence. Certified extracts can also be obtained on payment of the prescribed fee.",
            important: "Registration can therefore provide an official record that helps prove the marriage.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Sections 5–14",
            title: "Marriage Through the Special Marriage Act",
            meaning: "The Special Marriage Act provides a separate legal framework for solemnizing civil marriages. It includes notice of intended marriage, publication of notice, objections, declaration by the parties and witnesses, solemnization and the marriage certificate.",
            important: "A marriage solemnized under this Act is different from simply registering an already solemnized marriage under Chapter III.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 13",
            title: "Certificate of Marriage",
            meaning: "After a marriage has been solemnized under the Special Marriage Act, the Marriage Officer enters the certificate in the Marriage Certificate Book. The parties and three witnesses sign it.",
            important: "The Act provides that the certificate is treated as conclusive evidence of the marriage having been solemnized under the Act and of compliance with the signature formalities.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Sections 15–18",
            title: "Registration of a Marriage Celebrated in Another Form",
            meaning: "Chapter III provides a separate procedure for registering a marriage that was celebrated in another form. Section 15 sets out the conditions for registration, Section 16 provides the registration procedure, Section 17 deals with appeals and Section 18 explains the effect of registration.",
            important: "These provisions should not be confused with the process of solemnizing a new marriage under the Special Marriage Act.",
          },
          {
            law: "Anand Marriage Act, 1909",
            section: "Section 6",
            title: "Registration of Anand Karaj Marriages",
            meaning: "Section 6 provides for State rules allowing the particulars of Anand Karaj marriages to be entered in a Marriage Register kept by an authorized State or local authority officer.",
            important: "The Act states that omission to make an entry in the Marriage Register does not affect the validity of an Anand marriage.",
          },
          {
            law: "Indian Christian Marriage Act, 1872",
            section: "Sections 27–37",
            title: "Registration of Christian Marriages",
            meaning: "The Indian Christian Marriage Act contains specific registration provisions for marriages solemnized under the different Parts of the Act. Section 27 provides that marriages covered by its Part IV registration framework are to be registered in the prescribed manner, subject to the exceptions stated in that section.",
            important: "Christian marriage registration is governed by the provisions applicable to the particular form of marriage under the Act.",
          },
          {
            law: "Indian Christian Marriage Act, 1872",
            section: "Sections 54 and 59",
            title: "Registration of Certain Christian Marriages",
            meaning: "The Act contains specific procedures for registering marriages solemnized under particular Parts of the Act. For example, Section 54 provides for registration by the Marriage Registrar for marriages solemnized under Part V, while Section 59 provides the registration rule for marriages between Indian Christians under Part VI.",
            important: "The exact registration procedure depends on which provisions of the Act govern the marriage.",
          },
          {
            law: "Parsi Marriage and Divorce Act, 1936",
            section: "Sections 6–9",
            title: "Registration of Parsi Marriages",
            meaning: "The Act contains specific provisions for Parsi marriage certificates and registration. Section 6 deals with the certificate and registry of marriage, Section 7 concerns appointment of the Registrar, Section 8 concerns inspection of the marriage register and Section 9 provides for sending a copy of the certificate to the Registrar-General.",
            important: "Parsi marriages therefore have a specific statutory registration framework.",
          },
          {
            law: "Muslim marriages",
            section: "Applicable law and State/UT framework",
            title: "Registration of Muslim Marriages",
            meaning: "There is not one single central marriage-registration section that can safely be described as applying to every Muslim marriage throughout India. Registration requirements and procedures can depend on the applicable State or Union Territory framework and the circumstances of the marriage.",
            important: "SAFE-W should not present the Jammu and Kashmir Muslim Marriages Registration Act, 1981 as an all-India Muslim marriage registration law.",
          },
          {
            law: "Supreme Court — Seema v. Ashwani Kumar",
            section: "2006 and 2007 proceedings",
            title: "Supreme Court Directions on Registration",
            meaning: "The Supreme Court directed States and Union Territories to work out procedures for compulsory registration of marriages. The Court's proceedings recognized the importance of official marriage records and required State-level implementation through appropriate rules or legislation.",
            important: "The practical registration procedure therefore still depends on the applicable State or Union Territory framework.",
          },
          {
            law: "State / Union Territory registration framework",
            section: "Applicable local law and rules",
            title: "The Procedure Can Depend on Your State",
            meaning: "Marriage registration is not always completed through the same office or procedure across India. The responsible authority, forms, documents, fees and online/offline process can depend on the State or Union Territory and the law under which the marriage is being registered.",
            important: "Always check the current official State or Union Territory registration authority before relying on a procedure.",
          },
          {
            law: "Bihar Government — ServicePlus",
            section: "Marriage Registration Service",
            title: "Marriage Registration in Bihar",
            meaning: "Bihar's official ServicePlus portal currently provides an 'Application for Marriage Registration' service under the Prohibition, Excise & Registration Department.",
            important: "The existence of the Bihar online service does not mean that the same procedure or documents apply in every State of India.",
          },
        ]}
      />

      <Heading size="lg" className="mb-2 mt-4">
        🧾 What registration can help prove
      </Heading>
      <Callout tone="dusk">
        <Body size="sm" tone="ink">
          An official marriage record can help establish that a marriage took
          place and can be useful when dealing with matters such as:
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          • Government records and applications{"\n"}• Matrimonial or family
          proceedings{"\n"}• Financial or insurance matters{"\n"}• Inheritance
          and succession matters{"\n"}• Proof of marital status{"\n"}• Other
          situations where proof of marriage is required
        </Body>
      </Callout>

      <Heading size="lg" className="mb-2 mt-2">
        📍 State-specific procedure
      </Heading>
      <Callout tone="dusk">
        <Body size="sm" tone="ink">
          The exact authority, documents, fees, appointment system and online
          procedure can vary by State or Union Territory.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          For example, Bihar currently provides an official online Marriage
          Registration application through its ServicePlus system under the
          Prohibition, Excise & Registration Department.
        </Body>
      </Callout>

      <Callout tone="marigold" title="🔎 Before relying on a procedure">
        Check the current official registration authority for the State or
        Union Territory where the marriage is being registered. Requirements
        and procedures can change.
      </Callout>

      <Heading size="lg" className="mb-2 mt-2">
        🛡️ SAFE-W Legal Information Notice
      </Heading>
      <Body size="sm">
        This page is intended to provide general legal information and help
        users understand the main marriage-registration frameworks in India.
        It is not a substitute for legal advice in an individual case. The
        law applicable to a particular marriage can depend on the personal
        law, marriage statute, place of marriage, State or Union Territory
        rules and the facts of the case.
      </Body>
    </Screen>
  );
}
