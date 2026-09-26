import { RightsSection } from "@/components/RightsSection";
import { Callout, Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function RightsOfChildren() {
  return (
    <Screen>
      <Callout tone="dusk" title="Children have special legal protections">
        Indian law provides children with protections relating to education,
        safety, health, care, sexual abuse, child marriage, exploitation and
        rehabilitation.
      </Callout>

      <Callout tone="dusk" title="Who is a child?">
        Different laws can use different age definitions for particular
        purposes. For example, POCSO treats a person below eighteen as a
        child, while the Prohibition of Child Marriage Act uses different age
        thresholds for males and females.
      </Callout>

      <Callout tone="marigold" title="Important">
        The exact protection available depends on the situation and the law
        involved. This section gives simplified information and does not
        replace case-specific legal advice.
      </Callout>

      <Body tone="ink" className="mb-1 mt-2">
        Learn about important legal protections available to children in
        India.
      </Body>
      <Body size="sm" className="mb-4">
        Tap a card to understand the right and the law connected with it.
      </Body>

      <RightsSection
        icon="happy-outline"
        accent="haven"
        items={[
          {
            label: "Right of Children to Free and Compulsory Education Act, 2009",
            title: "Right to Free & Compulsory Education",
            meaning:
              "The RTE Act provides free and compulsory elementary education to children in the age group covered by the Act, generally from six to fourteen years.",
            whyItMatters:
              "A child within the Act's age group has a statutory right to elementary education without being excluded because of an inability to pay tuition or fees covered by the Act.",
          },
          {
            label: "Protection of Children from Sexual Offences Act, 2012",
            title: "Protection from Child Sexual Abuse",
            meaning:
              "POCSO provides special legal protection to children from sexual assault, sexual harassment and pornography-related offences. For the purposes of the Act, a child means any person below eighteen years of age.",
            whyItMatters:
              "Children receive special protections because sexual offences against a child are dealt with under a child-specific legal framework.",
          },
          {
            label: "POCSO Act, 2012",
            title: "Child-Friendly Procedures",
            meaning:
              "POCSO provides safeguards for recording a child's information and evidence and for conducting proceedings in a child-sensitive manner. The Act contains provisions concerning recording statements, medical examination and Special Courts.",
            whyItMatters:
              "A child should not be expected to navigate the ordinary criminal process without the special protections provided by POCSO.",
          },
          {
            label: "Prohibition of Child Marriage Act, 2006",
            title: "Protection from Child Marriage",
            meaning:
              "Under the central Act, a child means a male who has not completed twenty-one years or a female who has not completed eighteen years. The Act provides legal remedies and penalties relating to child marriage.",
            whyItMatters: "The law protects children from being subjected to marriage before the legally defined age.",
          },
          {
            label: "Juvenile Justice (Care and Protection of Children) Act, 2015",
            title: "Right to Care & Protection",
            meaning:
              "The Juvenile Justice framework provides care, protection, treatment, development and rehabilitation mechanisms for children who are in need of care and protection or are involved in the child-justice system.",
            whyItMatters:
              "A child who is abandoned, abused, neglected, vulnerable or otherwise in need of protection can come within a dedicated child-protection system.",
          },
          {
            label: "Juvenile Justice (Care and Protection of Children) Act, 2015",
            title: "Right to Be Heard",
            meaning:
              "The child-protection system is based on child-sensitive principles and provides for participation of children in matters affecting them, according to their age and maturity and the applicable procedure.",
            whyItMatters:
              "Children are not simply objects of protection; their views and needs can be considered in decisions concerning them.",
          },
          {
            label: "Child and Adolescent Labour (Prohibition and Regulation) Act, 1986",
            title: "Protection from Child Labour",
            meaning:
              "The law prohibits the employment of children and prohibits adolescents from employment in hazardous occupations and processes, subject to the provisions and exceptions of the Act.",
            whyItMatters: "Children are legally protected from being put into work that the law prohibits because of their age.",
          },
          {
            label: "POCSO Act, 2012 — privacy protections",
            title: "Right to Privacy & Identity Protection",
            meaning:
              "POCSO contains restrictions concerning disclosure of information that may reveal the identity of a child involved in proceedings under the Act, subject to the statutory exceptions.",
            whyItMatters:
              "Protecting a child's identity can reduce further harm, stigma and unnecessary exposure after an alleged sexual offence.",
          },
          {
            label: "Juvenile Justice Act, 2015",
            title: "Right to Rehabilitation & Support",
            meaning:
              "The juvenile-justice framework includes rehabilitation and social-reintegration measures for children, using mechanisms such as individual care planning and appropriate institutional or non-institutional services.",
            whyItMatters:
              "Child protection is not limited to removing a child from immediate danger; the legal framework also provides for care, rehabilitation and reintegration.",
          },
          {
            label: "POCSO Act, 2012 — Section 19 and related provisions",
            title: "Right to Report Abuse & Seek Help",
            meaning:
              "POCSO requires information about the commission or apprehended commission of an offence under the Act to be reported in accordance with its reporting provisions. The Act also provides procedures for handling children who are victims or in need of assistance.",
            whyItMatters:
              "A child who experiences or faces sexual abuse should be able to enter a formal protection and reporting system rather than being left without support.",
          },
        ]}
      />
    </Screen>
  );
}
