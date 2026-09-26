import { RightsSection } from "@/components/RightsSection";
import { Callout, Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function DigitalRights() {
  return (
    <Screen>
      <Callout tone="dusk" title="Your rights online">
        Digital safety includes privacy, protection from cyberstalking, misuse
        of personal information, identity theft, unwanted sharing of private
        images and other forms of online abuse.
      </Callout>

      <Callout tone="marigold" title="Important legal update">
        Some digital-rights protections come from laws that are already in
        force, such as the Information Technology Act, 2000 and the Bharatiya
        Nyaya Sanhita, 2023. The Digital Personal Data Protection Act, 2023 has
        a phased commencement, so not all of its rights are currently
        operational at the same time.
      </Callout>

      <Callout tone="dusk" title="If something happens online">
        Save relevant evidence, use the platform&asop;s reporting mechanism where
        appropriate, and report cybercrime through the Government&asop;s National
        Cyber Crime Reporting Portal. For an emergency, contact the police
        through 112.
      </Callout>

      <Body tone="ink" className="mb-1 mt-2">
        Understand your rights when using social media, messaging apps,
        websites and other digital services.
      </Body>
      <Body size="sm" className="mb-4">
        These are simplified explanations. The exact legal provision that
        applies depends on the facts and the type of conduct involved.
      </Body>

      <RightsSection
        icon="phone-portrait-outline"
        accent="dusk"
        items={[
          {
            label: "Information Technology Act, 2000 — Section 66E",
            title: "Privacy of Private Images",
            meaning:
              "Capturing, publishing or transmitting an image of a person's private area without consent, in circumstances that violate privacy, can be an offence under Section 66E.",
            whyItMatters:
              "A person cannot simply use or share private-area images of another person without consent.",
          },
          {
            label: "Bharatiya Nyaya Sanhita, 2023 — Section 77",
            title: "Protection from Voyeurism",
            meaning:
              "Watching, capturing or disseminating images of a woman engaged in a private act, in circumstances where she would normally expect privacy, can constitute voyeurism. The law also covers certain situations where an image was captured with consent but later disseminated without consent.",
            whyItMatters:
              "Consent to an image being captured does not automatically mean consent to that image being shared with other people.",
          },
          {
            label: "Bharatiya Nyaya Sanhita, 2023 — Section 78",
            title: "Protection from Cyberstalking",
            meaning:
              "Stalking includes repeatedly contacting or following a woman despite a clear indication of disinterest, and monitoring her use of the internet, email or other electronic communication, subject to the exceptions provided by law.",
            whyItMatters: "Persistent unwanted online monitoring or contact can have legal consequences.",
          },
          {
            label: "Information Technology Act, 2000 — Sections 66C & 66D",
            title: "Protection from Identity Theft & Online Impersonation",
            meaning:
              "Fraudulently or dishonestly using another person's password, electronic signature or unique identification feature can amount to identity theft. Cheating by personation using a computer resource or communication device is also covered.",
            whyItMatters:
              "Someone using your digital identity or pretending to be you online for fraudulent purposes may be committing a cyber offence.",
          },
          {
            label: "Information Technology Act, 2000 — Sections 67 & 67A",
            title: "Protection from Illegal Sexual or Obscene Content",
            meaning:
              "The IT Act contains offences concerning publishing or transmitting obscene material and material containing sexually explicit acts in electronic form. The exact section depends on the content and circumstances.",
            whyItMatters: "Online publication or transmission of prohibited material can have legal consequences.",
          },
          {
            label: "IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
            title: "Right to Report Harmful Online Content",
            meaning:
              "Intermediaries are subject to due-diligence and grievance-redressal requirements. The rules address categories including privacy-invasive content and content that is insulting or harassing on the basis of gender.",
            whyItMatters:
              "You can use a platform's reporting and grievance mechanisms when harmful content or conduct violates its rules or applicable law.",
          },
          {
            label: "Digital Personal Data Protection Act, 2023",
            title: "Protection of Personal Data",
            meaning:
              "The DPDP Act creates a framework for processing digital personal data and provides rights and obligations concerning personal data. Its provisions are being brought into force in phases.",
            whyItMatters:
              "Personal information such as identity and contact details can require legal protection when handled digitally.",
          },
          {
            label: "Digital Personal Data Protection Act, 2023 — phased commencement",
            title: "Control Over Your Personal Data",
            meaning:
              "The Act provides a framework for rights such as access to information about personal data, correction and erasure, grievance redressal and withdrawal of consent. These provisions should be treated according to their notified commencement dates rather than as if every right is already fully operational.",
            whyItMatters:
              "Knowing which data-protection rights are currently in force and which are scheduled to commence helps avoid relying on an outdated privacy rule.",
          },
          {
            label: "National Cyber Crime Reporting Portal",
            title: "Right to Report Cybercrime",
            meaning:
              "Cybercrime can be reported through the Government of India's National Cyber Crime Reporting Portal. The portal includes reporting options for women/children-related cybercrime and other cybercrimes.",
            whyItMatters: "You do not have to rely only on the social-media platform when online abuse or another cybercrime occurs.",
          },
          {
            label: "Applicable cyber and criminal laws",
            title: "Preserve Digital Evidence",
            meaning:
              "When reporting online abuse, keep relevant messages, screenshots, URLs, account details and other available evidence. Avoid deleting important evidence before making a report when it is safe to preserve it.",
            whyItMatters:
              "Digital evidence can help explain what happened and assist a platform, police authority or cybercrime investigator in handling a complaint.",
          },
        ]}
      />
    </Screen>
  );
}
