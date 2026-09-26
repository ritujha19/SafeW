import { RightsSection } from "@/components/RightsSection";
import { Screen } from "@/components/Screen";
import { Body, Display } from "@/components/Typography";

export default function ConstitutionRights() {
  return (
    <Screen>
      <Body tone="ink" className="mb-4">
        The Constitution of India provides protections for equality, dignity,
        liberty and freedom from exploitation.
      </Body>

      <Display size="md" tone="white" className="mb-5 rounded-[26px] bg-midnight p-6 text-center">
        Equality → Dignity → Liberty → Protection
      </Display>

      <RightsSection
        heading="Fundamental Rights"
        icon="shield-checkmark-outline"
        accent="dusk"
        items={[
          {
            label: "Article 14",
            title: "Equality Before the Law",
            meaning:
              "Every person is equal before the law and is entitled to equal protection of the laws.",
            whyItMatters: "It supports equal treatment and protection under the law.",
          },
          {
            label: "Article 15",
            title: "Protection Against Discrimination",
            meaning:
              "The State cannot discriminate against a person on certain grounds, including sex.",
            whyItMatters:
              "It provides constitutional protection against discrimination based on sex.",
          },
          {
            label: "Article 16",
            title: "Equal Opportunity in Public Employment",
            meaning: "Citizens have equality of opportunity in matters of public employment.",
            whyItMatters: "It protects equal opportunity in government employment.",
          },
          {
            label: "Article 21",
            title: "Life and Personal Liberty",
            meaning:
              "No person can be deprived of life or personal liberty except according to procedure established by law.",
            whyItMatters:
              "It provides constitutional protection for life and personal liberty.",
          },
          {
            label: "Article 23",
            title: "Protection Against Exploitation",
            meaning:
              "Traffic in human beings, begar and other similar forms of forced labour are prohibited.",
            whyItMatters: "It protects people from trafficking and forced labour.",
          },
        ]}
      />

      <RightsSection
        heading="Constitutional Principles"
        icon="compass-outline"
        accent="haven"
        items={[
          {
            label: "Article 39(a)",
            title: "Adequate Means of Livelihood",
            meaning:
              "The State should direct its policy toward securing an adequate means of livelihood for all citizens, both women and men.",
            whyItMatters:
              "It supports the principle that women and men should have access to opportunities for earning a livelihood.",
          },
          {
            label: "Article 39(d)",
            title: "Equal Pay for Equal Work",
            meaning: "The State should work toward equal pay for equal work for both women and men.",
            whyItMatters:
              "It supports the principle of equal pay for women and men performing equal work.",
          },
          {
            label: "Article 39A",
            title: "Equal Justice and Free Legal Aid",
            meaning:
              "The State should ensure that opportunities for securing justice are not denied because of economic or other disabilities and should provide free legal aid where necessary.",
            whyItMatters:
              "It supports access to justice for people who may not be able to afford legal assistance.",
          },
          {
            label: "Article 42",
            title: "Humane Working Conditions and Maternity Relief",
            meaning:
              "The State should make provisions for securing just and humane conditions of work and maternity relief.",
            whyItMatters:
              "It supports protection for women in the workplace, including maternity-related protections.",
          },
        ]}
      />

      <RightsSection
        heading="Know This Too: Fundamental Duty"
        icon="ribbon-outline"
        accent="marigold"
        items={[
          {
            label: "Article 51A(e)",
            title: "Respect for the Dignity of Women",
            meaning:
              "Every citizen has a duty to renounce practices that are derogatory to the dignity of women.",
            whyItMatters:
              "It recognizes respect for the dignity of women as a constitutional responsibility of citizens.",
          },
        ]}
      />
    </Screen>
  );
}
