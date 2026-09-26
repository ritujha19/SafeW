import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function DivorceRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        💔 Divorce Rights
      </Heading>

      <Callout tone="dusk" title="Divorce is governed by the law applicable to the marriage">
        <Body size="sm" tone="ink">
          Indian law does not provide one identical divorce process for every
          marriage. The applicable legal framework can depend on the type of
          marriage and the law governing it.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          Different statutes provide different grounds, procedures and
          requirements for ending a marriage.
        </Body>
      </Callout>

      <Callout tone="marigold" title="Important">
        The sections below are organized by legal framework. A provision
        belonging to the Hindu Marriage Act, for example, should not be
        assumed to apply to a marriage governed by another law.
      </Callout>

      <Heading size="lg" className="mb-1 mt-2">
        📖 Divorce Laws & Rights
      </Heading>
      <Body size="sm" className="mb-4">
        Open each section to understand the applicable law and its meaning in
        simple language.
      </Body>

      <LawSectionAccordion
        icon="document-text-outline"
        accent="marigold"
        items={[
          {
            law: "General legal principle",
            section: "Applicable marriage law",
            title: "Divorce Depends on the Law Governing the Marriage",
            meaning:
              "India does not have one single divorce law that applies identically to every marriage. The applicable law can depend on the marriage statute, personal law and circumstances of the marriage.",
            important: "A person should first identify which legal framework governs the marriage before relying on a particular divorce provision.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 13",
            title: "Divorce on Statutory Grounds",
            meaning:
              "Section 13 provides grounds on which either spouse may seek a decree of divorce. The grounds include matters such as adultery, cruelty, desertion and certain other circumstances specified by the Act.",
            important: "The statutory conditions and exceptions must be satisfied. A marriage does not end simply because the spouses have stopped living together.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 13(1) and 13(2)",
            title: "Grounds Available to Spouses",
            meaning:
              "The Act provides grounds available generally to either spouse and also specifies certain additional grounds on which a wife may present a petition for divorce.",
            important: "The exact ground and its statutory requirements matter when presenting a divorce petition.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 13A",
            title: "Alternative Relief in Divorce Proceedings",
            meaning:
              "In certain divorce proceedings, the court may consider granting judicial separation instead of a decree of divorce when the requirements of the Act are satisfied.",
            important: "Judicial separation does not dissolve the marriage. It is a different legal remedy.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 13B",
            title: "Divorce by Mutual Consent",
            meaning:
              "Both spouses may jointly present a petition for divorce by mutual consent when they have been living separately for at least one year, have not been able to live together and mutually agree that the marriage should be dissolved.",
            important:
              "The Act provides a further motion and court process before a decree is passed. The statutory waiting period can be affected by judicial decisions in appropriate cases.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 14",
            title: "Divorce Petition Within the First Year",
            meaning:
              "Ordinarily, a divorce petition cannot be presented before one year has passed from the date of marriage. The court can allow an earlier petition in cases involving exceptional hardship to the petitioner or exceptional depravity on the part of the respondent.",
            important: "An application to proceed before one year is an exception and is subject to the statutory requirements.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 15",
            title: "When a Divorced Person May Remarry",
            meaning:
              "After a marriage has been dissolved by a decree of divorce, the Act specifies when either party may lawfully marry again, including the situation where the appeal period has expired or an appeal has been dismissed.",
            important: "A person should check the statutory conditions concerning appeal before remarrying.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 27",
            title: "Divorce Under the Special Marriage Act",
            meaning:
              "Section 27 provides statutory grounds on which a spouse may petition the district court for divorce for a marriage governed by the Special Marriage Act.",
            important:
              "These grounds apply to marriages governed by the Special Marriage Act and should not be treated as universal divorce grounds for every marriage in India.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 27A",
            title: "Alternative Relief",
            meaning:
              "In certain divorce proceedings under the Special Marriage Act, the court may grant judicial separation instead of divorce where the statutory requirements are satisfied.",
            important: "Judicial separation does not itself dissolve the marriage.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 28",
            title: "Divorce by Mutual Consent",
            meaning:
              "Both spouses may jointly petition for divorce by mutual consent when they have been living separately for at least one year, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
            important: "The Act requires a further motion and court consideration before the decree of divorce is granted.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 29",
            title: "Divorce Petition Within the First Year",
            meaning:
              "Ordinarily, a divorce petition cannot be presented before one year has passed from the date of entering the marriage certificate. The court may permit an earlier petition in cases of exceptional hardship or exceptional depravity, subject to the Act.",
            important: "The one-year rule has a statutory exception and is not an absolute prohibition in every circumstance.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 30",
            title: "Remarriage After Divorce",
            meaning:
              "After a marriage has been dissolved by a decree of divorce, Section 30 sets out when a divorced person may marry again, including the position concerning appeal rights.",
            important: "The statutory conditions concerning the decree and appeal should be checked before remarriage.",
          },
          {
            law: "Indian Divorce Act, 1869",
            section: "Section 10",
            title: "Divorce for Christian Marriages",
            meaning:
              "The Divorce Act provides grounds for dissolution of marriage for marriages governed by the Act. Section 10 contains the statutory grounds for divorce.",
            important: "This Act applies to marriages to which the Act applies; it should not be presented as the divorce law for every marriage in India.",
          },
          {
            law: "Indian Divorce Act, 1869",
            section: "Section 10A",
            title: "Christian Divorce by Mutual Consent",
            meaning:
              "Section 10A allows both parties to jointly petition for dissolution of marriage by mutual consent when they have been living separately for the period specified by the Act, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
            important: "The statutory requirements and court process must be followed before the marriage is dissolved.",
          },
          {
            law: "Parsi Marriage and Divorce Act, 1936",
            section: "Section 32",
            title: "Grounds for Divorce",
            meaning: "Section 32 provides grounds on which a married person may sue for divorce under the Parsi Marriage and Divorce Act.",
            important: "The Act contains its own statutory grounds and conditions for Parsi marriages.",
          },
          {
            law: "Parsi Marriage and Divorce Act, 1936",
            section: "Section 32A",
            title: "Non-Resumption of Cohabitation",
            meaning:
              "Section 32A provides a ground for divorce where there has been no resumption of cohabitation or restitution of conjugal rights for the period specified by the Act after the relevant decree.",
            important: "This provision applies specifically to marriages governed by the Parsi Marriage and Divorce Act.",
          },
          {
            law: "Parsi Marriage and Divorce Act, 1936",
            section: "Section 32B",
            title: "Parsi Divorce by Mutual Consent",
            meaning:
              "Both parties may jointly sue for divorce by mutual consent when they have lived separately for one year or more, have not been able to live together and have mutually agreed that the marriage should be dissolved.",
            important: "The Act requires the court to be satisfied about the marriage, the statements made in the case and that consent was not obtained through force or fraud.",
          },
          {
            law: "Dissolution of Muslim Marriages Act, 1939",
            section: "Section 2",
            title: "Grounds for a Muslim Woman to Seek Dissolution",
            meaning:
              "Section 2 provides grounds on which a woman married under Muslim law can obtain a decree for dissolution of her marriage. The grounds include circumstances such as the husband's whereabouts being unknown for four years, failure to provide maintenance for two years, certain imprisonment, failure to perform marital obligations, and specified forms of cruelty.",
            important: "The Act provides a court-based remedy for dissolution. The specific statutory conditions must be satisfied.",
          },
          {
            law: "Muslim Personal Law (Shariat) Application Act, 1937",
            section: "Section 2",
            title: "Muslim Personal Law and Dissolution of Marriage",
            meaning:
              "Section 2 provides that Muslim Personal Law is the rule of decision in specified matters involving Muslims, including marriage and dissolution of marriage, including forms such as talaq, khula and mubaraat.",
            important: "This provision identifies the application of Muslim Personal Law; it is not itself a complete procedural divorce code.",
          },
          {
            law: "Muslim Women (Protection of Rights on Marriage) Act, 2019",
            section: "Sections 3–5",
            title: "Legal Protection Against Certain Forms of Talaq",
            meaning:
              "The Act declares pronouncement of talaq of the type covered by the Act to be void and illegal and provides criminal penalties and related protections.",
            important: "This law concerns the prohibited form of talaq covered by the Act. It should not be described as a general law that governs every form of Muslim divorce.",
          },
          {
            law: "Applicable matrimonial law",
            section: "Court process",
            title: "Divorce Requires the Applicable Legal Process",
            meaning:
              "Where a marriage is governed by a statute requiring a court decree, the marriage is not dissolved merely because the spouses decide privately that they are divorced. The applicable petition, court process and decree must be followed.",
            important: "The exact process depends on the law governing the marriage.",
          },
        ]}
      />

      <Heading size="lg" className="mb-2 mt-4">
        🧭 Before Starting a Divorce Case
      </Heading>
      <Callout tone="dusk">
        <Body size="sm" tone="ink">
          First identify the law governing the marriage. The grounds and
          procedure can then be checked under that law.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          Divorce proceedings can also involve separate issues such as
          maintenance, child custody, property and other financial matters.
          Those subjects are covered separately in SAFE-W.
        </Body>
      </Callout>

      <Callout tone="dusk" title="🛡️ SAFE-W Legal Information Notice">
        This page provides general legal information and does not determine
        which law applies to an individual&apos;s marriage. A particular case
        can involve additional rules, procedural requirements and court
        decisions.
      </Callout>

      <Body size="sm" className="mt-3">
        Laws and procedures can change. Users should verify the current
        position with an official government source or qualified legal
        professional before relying on information for an individual case.
      </Body>
    </Screen>
  );
}
