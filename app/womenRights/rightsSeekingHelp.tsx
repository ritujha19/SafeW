import { RightsSection } from "@/components/RightsSection";
import { Callout, Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function RightsSeekingHelp() {
  return (
    <Screen>
      <Callout tone="dusk" title="You have options when you need help">
        If you experience violence, harassment or another offence, you may
        seek help through different routes depending on the situation.
      </Callout>

      <Callout tone="dusk" title="Where can you seek help?">
        <Body size="sm" tone="ink">
          👮 Police — for reporting crimes and seeking immediate assistance.
          {"\n\n"}
          🏥 Medical services — for treatment and, where applicable, medical
          examination.{"\n\n"}
          ⚖️ Legal services — for legal advice and representation.{"\n\n"}
          🏠 Government support services — such as Women Helpline 181 and One
          Stop Centres.
        </Body>
      </Callout>

      <Callout tone="marigold" title="Important">
        The exact procedure depends on the type of incident and the law
        involved. This section provides general information and does not
        replace case-specific legal advice.
      </Callout>

      <Body tone="ink" className="mb-1 mt-2">
        Understand what protections and support may be available when you
        approach the police, medical services, legal services or government
        support systems.
      </Body>
      <Body size="sm" className="mb-4">
        Tap a card to understand the right and the law or government service
        connected with it.
      </Body>

      <RightsSection
        icon="help-buoy-outline"
        accent="dusk"
        items={[
          {
            label: "Bharatiya Nagarik Suraksha Sanhita, 2023 — Section 173",
            title: "Right to Report a Crime",
            meaning:
              "Information relating to a cognizable offence can be given to the police orally or by electronic communication, subject to the procedure provided by law.",
            whyItMatters: "You can approach the police to report a cognizable offence and begin the formal reporting process.",
          },
          {
            label: "BNSS, 2023 — Section 173(2)",
            title: "Right to a Free Copy of the Report",
            meaning:
              "When information is recorded under Section 173, a copy of the information as recorded must be given forthwith and free of cost to the informant or victim.",
            whyItMatters: "Keeping a copy of what was reported gives you an important record for follow-up.",
          },
          {
            label: "BNSS, 2023 — Section 173(4)",
            title: "If Police Refuse to Record the Information",
            meaning:
              "If the officer in charge of a police station refuses to record information relating to a cognizable offence, the person can send the substance of the information in writing to the Superintendent of Police. The law also provides a route to approach the Magistrate in the circumstances specified in the Sanhita.",
            whyItMatters: "There are legal steps available when a complaint about a cognizable offence is not recorded at the police station.",
          },
          {
            label: "BNSS, 2023 — Section 173",
            title: "Woman Officer for Certain Complaints",
            meaning:
              "For specified offences against women, information given by the woman must be recorded by a woman police officer or woman officer. The provision covers specified offences under the Bharatiya Nyaya Sanhita, including certain sexual offences.",
            whyItMatters: "The law provides an additional safeguard when a woman reports specified offences against her.",
          },
          {
            label: "BNSS, 2023 — Section 173",
            title: "Statement at a Suitable Place in Certain Cases",
            meaning:
              "For specified offences involving a woman with a temporary or permanent mental or physical disability, the information is to be recorded at her residence or another place of her choice, with an interpreter or special educator where required. The recording is also to be videographed.",
            whyItMatters: "The reporting process can be adapted to the needs and circumstances of the person reporting the offence.",
          },
          {
            label: "Applicable medical and criminal procedure laws",
            title: "Right to Medical Assistance",
            meaning:
              "Victims of sexual offences and other violence may require medical care as well as legal assistance. Applicable laws and procedures provide specific safeguards concerning medical examination and treatment in relevant cases.",
            whyItMatters: "Medical care can protect health and, where appropriate, help document injuries or other evidence.",
          },
          {
            label: "Legal Services Authorities Act, 1987 — Section 12",
            title: "Right to Legal Assistance",
            meaning:
              "Women are among the categories entitled to free legal services under Section 12(c) of the Legal Services Authorities Act. NALSA states that a woman is eligible for free legal aid irrespective of her income or financial status.",
            whyItMatters: "A woman does not have to rely only on a private lawyer when she needs legal assistance.",
          },
          {
            label: "Women Helpline 181 — Government of India",
            title: "Women Helpline & Support Services",
            meaning:
              "The Women Helpline 181 is a toll-free service for women seeking support or information. It can connect women with emergency response services and One Stop Centres, as appropriate.",
            whyItMatters:
              "Police are not the only route for seeking help. Government support services can also provide information, assistance and connections to other services.",
          },
          {
            label: "Victim Compensation Schemes + NALSA",
            title: "Right to Seek Victim Compensation",
            meaning:
              "Victim compensation schemes can provide financial assistance to eligible victims. NALSA publishes a Compensation Scheme for Women Victims/Survivors of Sexual Assault/Other Crimes and works with State Legal Services Authorities on victim compensation.",
            whyItMatters: "Support after a crime can include compensation and rehabilitation, not only criminal proceedings.",
          },
          {
            label: "Applicable privacy and criminal procedure protections",
            title: "Right to Privacy & Dignity",
            meaning:
              "Different laws and procedures provide privacy protections in particular types of cases. The exact protection depends on the nature of the complaint and the stage of the legal process.",
            whyItMatters: "Seeking help should be handled with appropriate respect for a person's privacy and dignity.",
          },
        ]}
      />
    </Screen>
  );
}
