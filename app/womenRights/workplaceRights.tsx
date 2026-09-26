import { Block } from "@/components/Accordion";
import { RightsSection } from "@/components/RightsSection";
import { Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

export default function WorkplaceRights() {
  return (
    <Screen>
      <Body tone="ink" className="mb-4">
        Know your rights and protections at work, including safeguards against
        sexual harassment and maternity-related protections.
      </Body>

      <RightsSection
        icon="briefcase-outline"
        accent="dusk"
        items={[
          {
            label: "POSH Act, 2013 — Sections 3 & 9",
            title: "Protection from Sexual Harassment at Work",
            meaning:
              "The law protects women from sexual harassment at the workplace and provides a formal process for making a complaint.",
            whyItMatters:
              "It gives women a legal framework for seeking redress for workplace sexual harassment.",
          },
          {
            label: "POSH Act, 2013 — Section 4",
            title: "Internal Committee (IC)",
            meaning:
              "Covered workplaces are required to constitute an Internal Committee to receive and address complaints of sexual harassment.",
            whyItMatters:
              "It provides an internal mechanism for handling workplace sexual-harassment complaints.",
          },
          {
            label: "POSH Act, 2013 — Section 6",
            title: "Local Committee (LC)",
            meaning:
              "A Local Committee is established at the district level to receive complaints in circumstances covered by the Act, including certain workplaces where an Internal Committee is not constituted.",
            whyItMatters:
              "It provides another formal route for making a complaint when the Local Committee has jurisdiction.",
          },
          {
            label: "POSH Act, 2013 — Section 9",
            title: "Who Can File a Complaint",
            meaning:
              "An aggrieved woman may make a written complaint of sexual harassment to the Internal Committee or Local Committee, as applicable, within the period provided by the Act.",
            whyItMatters: "It establishes a formal route for reporting workplace sexual harassment.",
          },
          {
            label: "POSH Act, 2013 — Sections 10–13",
            title: "How a Complaint Is Handled",
            meaning:
              "The Act provides procedures for conciliation, inquiry, completion of the inquiry and submission of recommendations.",
            whyItMatters:
              "It establishes a formal process for examining a workplace sexual-harassment complaint.",
          },
          {
            label: "POSH Act, 2013 — Section 12",
            title: "Interim Protection During an Inquiry",
            meaning:
              "During an inquiry, the Internal Committee or Local Committee may recommend specified interim measures on a written request by the aggrieved woman, as provided by the Act.",
            whyItMatters:
              "It allows certain temporary measures to be considered while the complaint is being examined.",
          },
          {
            label: "POSH Act, 2013 — Sections 16–17",
            title: "Confidentiality of the Complaint",
            meaning:
              "The Act restricts publication or disclosure of the complaint, identities, inquiry proceedings, recommendations and related information covered by Section 16.",
            whyItMatters:
              "It provides legal protection for the confidentiality of the complaint and inquiry process.",
          },
          {
            label: "Maternity Benefit Act, 1961 — Section 5",
            title: "Maternity Leave",
            meaning:
              "An eligible woman with fewer than two surviving children can receive maternity benefit for up to 26 weeks, with not more than 8 weeks taken before the expected delivery date. For a woman with two or more surviving children, the maximum is 12 weeks, with not more than 6 weeks before the expected delivery date.",
            whyItMatters: "It provides statutory maternity benefits and time away from work around childbirth.",
          },
          {
            label: "Maternity Benefit Act, 1961 — Section 5(5)",
            title: "Work From Home After Maternity Leave",
            meaning:
              "Where the nature of the work permits working from home, the employer may allow it after the maternity-benefit period for a mutually agreed period and on mutually agreed conditions.",
            whyItMatters:
              "Work from home may be available after maternity leave when the work allows it and the employer and woman agree on the arrangement.",
          },
          {
            label: "Maternity Benefit Act, 1961 — Sections 4 & 9",
            title: "Other Maternity Protections",
            meaning:
              "The Act provides additional protections, including restrictions on employment during certain periods after delivery or miscarriage and leave for miscarriage or medical termination of pregnancy in the circumstances covered by the Act.",
            whyItMatters:
              "Maternity protection includes more than maternity leave and can cover specific situations related to pregnancy and childbirth.",
          },
        ]}
      />

      <Block label="Remember" tone="remember">
        Maternity leave is available to eligible women, but the amount of leave
        can depend on where they work. Under the Maternity Benefit Act, eligible
        women can get up to 26 weeks of maternity leave. Government employees may
        have different leave rules.
      </Block>
    </Screen>
  );
}
