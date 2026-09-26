import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function MaintenanceRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        💰 Maintenance Rights
      </Heading>

      <Body tone="ink" className="mb-4">
        Maintenance means financial support that may be available under
        certain laws and circumstances. It can arise during a legal
        proceeding, after a decree, after divorce, or in other family
        situations depending on the law that applies.
      </Body>

      <Callout tone="dusk" title="⚖️ Which law applies?">
        <Body size="sm" tone="ink">
          Maintenance is not governed by one single law for every situation.
          The applicable provision can depend on the type of relationship, the
          law governing the marriage, whether domestic violence is involved,
          and the circumstances of the person seeking support.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          Hindu, Muslim, Christian, Parsi and Special Marriage Act cases can
          involve different statutory provisions. The sections below are
          therefore labelled by their specific legal framework.
        </Body>
      </Callout>

      <LawSectionAccordion
        icon="cash-outline"
        accent="dusk"
        items={[
          {
            law: "Bharatiya Nagarik Suraksha Sanhita, 2023",
            section: "Section 144",
            title: "Maintenance for Wife, Children and Parents",
            meaning:
              "A Magistrate may order a person with sufficient means to provide maintenance to a wife who is unable to maintain herself, as well as eligible children and parents who are unable to maintain themselves. The provision also covers interim maintenance and expenses of proceedings.",
            important: "This is a general maintenance remedy and is not limited to divorce cases. The law contains specific conditions and exceptions, so eligibility depends on the circumstances of the case.",
          },
          {
            law: "Bharatiya Nagarik Suraksha Sanhita, 2023",
            section: "Section 144",
            title: "Interim Maintenance",
            meaning: "While a maintenance case is pending, the Magistrate may order interim maintenance and expenses of proceedings where the statutory conditions are satisfied.",
            important: "Interim maintenance is temporary support during the proceedings. It is different from a final maintenance order.",
          },
          {
            law: "Bharatiya Nagarik Suraksha Sanhita, 2023",
            section: "Section 145",
            title: "Where a Maintenance Case Can Be Filed",
            meaning:
              "Section 145 provides rules about where proceedings under Section 144 may be taken. Depending on the circumstances, proceedings may be taken in a district where the person is, where the wife resides, or where the parties last resided together, among other situations specified by the section.",
            important: "The exact jurisdiction depends on the circumstances and the statutory rules.",
          },
          {
            law: "Bharatiya Nagarik Suraksha Sanhita, 2023",
            section: "Section 146",
            title: "Change in Maintenance Amount",
            meaning: "If circumstances change, the Magistrate may alter the maintenance or interim maintenance allowance. A maintenance order may also be affected by a later decision of a competent civil court.",
            important: "A maintenance amount is not necessarily fixed forever.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 24",
            title: "Maintenance During Matrimonial Proceedings",
            meaning:
              "In proceedings under the Hindu Marriage Act, either the wife or the husband may apply for maintenance when they do not have independent income sufficient for their support and the necessary expenses of the proceeding. The court may order payment of proceeding expenses and a monthly amount during the case.",
            important: "Section 24 is gender-neutral and applies during proceedings under the Hindu Marriage Act. It is not a general maintenance provision for every situation.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 25",
            title: "Permanent Alimony and Maintenance",
            meaning:
              "At the time of passing a decree, or later, a court exercising jurisdiction under the Act may order maintenance and support for either the wife or husband. The court may consider the income and property of both parties, their conduct and other circumstances of the case.",
            important: "The court can vary, modify or rescind an order when circumstances change, subject to the Act.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 36",
            title: "Alimony During Proceedings",
            meaning:
              "Where the wife does not have independent income sufficient for her support and the necessary expenses of proceedings under the specified chapters of the Act, the District Court may order the husband to pay proceeding expenses and a weekly or monthly amount during the case.",
            important: "This provision is specific to proceedings covered by the Special Marriage Act.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 37",
            title: "Permanent Alimony and Maintenance",
            meaning: "A court exercising jurisdiction under the specified chapters of the Special Marriage Act may order the husband to secure maintenance and support for the wife by a lump sum or monthly or periodic payments, subject to the statutory conditions.",
            important: "The court may vary, modify or rescind an order if circumstances change.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 20",
            title: "Monetary Relief",
            meaning:
              "In a domestic violence proceeding, the Magistrate may direct the respondent to provide monetary relief for expenses and losses suffered by the aggrieved person or her child because of domestic violence. The relief can include loss of earnings, medical expenses, property loss or damage, and maintenance for the woman and her children.",
            important: "This is broader than ordinary maintenance because monetary relief under Section 20 can cover several losses and expenses caused by domestic violence.",
          },
          {
            law: "Protection of Women from Domestic Violence Act, 2005",
            section: "Section 20",
            title: "How Monetary Relief May Be Paid",
            meaning: "The relief should be adequate, fair and reasonable and consistent with the standard of living to which the aggrieved person is accustomed. The Magistrate may order a lump-sum payment or monthly maintenance depending on the circumstances.",
            important: "Section 20 can operate in addition to maintenance available under other laws, subject to the rules governing overlapping relief.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 18",
            title: "Maintenance of a Hindu Wife",
            meaning:
              "A Hindu wife is entitled to be maintained by her husband during her lifetime, subject to the conditions and limitations contained in the Act. Section 18 also identifies circumstances in which she may live separately while retaining her claim to maintenance.",
            important: "This provision is part of Hindu maintenance law and does not apply universally to women of every religion.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 19",
            title: "Maintenance of a Widowed Daughter-in-Law",
            meaning:
              "Subject to the conditions in the Act, a Hindu widowed daughter-in-law may have a claim for maintenance from her father-in-law when she cannot maintain herself from her own earnings or property and cannot obtain maintenance from the other sources specified by law.",
            important: "This is a specific statutory remedy with conditions. It should not be treated as a general maintenance right against every relative.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 20",
            title: "Maintenance of Children and Aged Parents",
            meaning:
              "A Hindu has an obligation, subject to the Act, to maintain legitimate or illegitimate children and aged or infirm parents. A minor child may claim maintenance from the father or mother, and an unmarried daughter may have a maintenance claim when the statutory conditions are satisfied.",
            important: "This provision covers family maintenance beyond the wife-husband relationship.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 22",
            title: "Maintenance of Dependants",
            meaning: "Subject to the Act, heirs of a deceased Hindu can have an obligation to maintain dependants of the deceased out of the estate inherited from the deceased. The liability is connected to the estate and the share inherited.",
            important: "This provision concerns maintenance of specified dependants and should not be confused with inheritance rights themselves.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 23",
            title: "How the Amount of Maintenance Is Determined",
            meaning:
              "The court has discretion to determine whether maintenance should be awarded and, if so, the amount. For a wife, children or aged or infirm parents, the Act identifies factors such as the position and status of the parties, reasonable needs, property and income of the claimant, and the number of persons entitled to maintenance.",
            important: "There is no single fixed maintenance amount that automatically applies to every case.",
          },
          {
            law: "Hindu Adoptions and Maintenance Act, 1956",
            section: "Section 25",
            title: "Change in Circumstances",
            meaning: "An amount of maintenance fixed by a court decree or agreement may be altered when there is a material change in circumstances that justifies the change.",
            important: "Maintenance can therefore be reconsidered when important financial or personal circumstances change.",
          },
          {
            law: "Muslim Women (Protection of Rights on Divorce) Act, 1986",
            section: "Section 3",
            title: "Rights of a Divorced Muslim Woman",
            meaning:
              "The Act provides for rights of a divorced Muslim woman to receive a reasonable and fair provision and maintenance to be made and paid to her within the statutory framework, along with payment of mahr or dower and delivery of properties or assets to which she is entitled under the Act.",
            important: "This is a specific law concerning divorced Muslim women. It should not be presented as the general maintenance law for all Muslim women.",
          },
          {
            law: "Muslim Women (Protection of Rights on Divorce) Act, 1986",
            section: "Section 4",
            title: "Maintenance Through Magistrate in Certain Cases",
            meaning:
              "Where the statutory conditions are satisfied, a Magistrate may order payment to a divorced Muslim woman who has not remarried and is unable to maintain herself after the period specified by the Act, from relatives who would be entitled to inherit her property according to Muslim law, and in specified circumstances from the State Wakf Board.",
            important: "The section contains specific eligibility and priority rules. The exact application depends on the circumstances.",
          },
          {
            law: "Muslim Women (Protection of Rights on Divorce) Act, 1986",
            section: "Section 5",
            title: "Option Regarding the General Maintenance Procedure",
            meaning: "Section 5 provides an option, subject to its statutory conditions, for the parties to choose to be governed by the provisions relating to maintenance proceedings under the then-applicable general criminal procedure framework.",
            important: "The current procedural law is now the Bharatiya Nagarik Suraksha Sanhita, 2023. This section should therefore be read together with the current legal framework and applicable judicial interpretation.",
          },
          {
            law: "General Maintenance Principle",
            section: "Multiple Laws",
            title: "More Than One Legal Remedy May Exist",
            meaning:
              "A woman may have maintenance or monetary-relief remedies under more than one law depending on her circumstances. For example, matrimonial-law maintenance, general maintenance proceedings and domestic-violence monetary relief can arise under different legal frameworks.",
            important: "Having multiple possible legal provisions does not mean that the person automatically receives the full amount under every provision. Courts consider the circumstances and the relationship between different orders.",
          },
          {
            law: "General Maintenance Principle",
            section: "Court's Assessment",
            title: "There Is No Fixed Amount for Everyone",
            meaning: "Maintenance is generally determined according to the applicable law and the facts of the case. Courts may consider factors such as the parties' income, financial resources, reasonable needs, responsibilities and other circumstances specified by the relevant law.",
            important: "SAFE-W cannot calculate or promise a particular maintenance amount from a person's income alone.",
          },
          {
            law: "General Maintenance Principle",
            section: "Practical Information",
            title: "Maintenance Is Different From Property Rights",
            meaning: "Maintenance is financial support. It is different from ownership, inheritance or a share in property. A woman may have property or inheritance rights separately from any maintenance claim.",
            important: "Property and inheritance are covered separately in SAFE-W.",
          },
        ]}
      />

      <Callout tone="dusk" title="📌 Before seeking maintenance">
        <Body size="sm" tone="ink">
          Keep documents that may help establish the marriage or relationship,
          income and expenses, children or dependants, existing court orders,
          and other relevant financial information. The exact documents
          required depend on the legal proceeding.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          If you are unsure which maintenance provision applies, legal-aid
          services or a qualified lawyer can help identify the appropriate
          legal route.
        </Body>
      </Callout>

      <Body size="sm" className="mt-3">
        SAFE-W provides general legal information for awareness and
        education. Laws, procedures and court decisions can change. This
        information is not a substitute for advice from a qualified legal
        professional.
      </Body>
    </Screen>
  );
}