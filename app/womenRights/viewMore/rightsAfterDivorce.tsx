import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function RightsAfterDivorce() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        💙 Rights After Divorce
      </Heading>

      <Body tone="ink" className="mb-4">
        Divorce ends the marriage, but some legal matters can continue
        afterward, especially matters concerning children, court orders and
        financial or property issues.
      </Body>

      <Callout tone="marigold" title="📌 Important">
        Maintenance is covered separately in SAFE-W&apos;s Maintenance
        section. This page focuses mainly on rights and legal matters that
        can continue after the marriage ends.
      </Callout>

      <LawSectionAccordion
        icon="heart-dislike-outline"
        accent="dusk"
        items={[
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 26",
            title: "Custody of Minor Children",
            meaning:
              "In proceedings under the Hindu Marriage Act, the court can make interim orders and provisions concerning the custody, maintenance and education of minor children. Such orders can also be made after the decree.",
            important: "The court considers the circumstances and the wishes of the children wherever possible.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 26",
            title: "Orders Can Continue After Divorce",
            meaning: "After a decree, the court can continue to make, revoke, suspend or vary orders concerning the custody, maintenance and education of minor children.",
          },
          {
            law: "Hindu Marriage Act, 1955",
            section: "Section 26",
            title: "Children's Welfare",
            meaning: "The purpose of custody and related orders is to make arrangements concerning the child's custody, maintenance and education. The court considers the circumstances and the child's wishes wherever possible.",
          },
          {
            law: "Special Marriage Act, 1954",
            section: "Section 38",
            title: "Custody and Maintenance of Children",
            meaning: "The Special Marriage Act contains provisions allowing the court to make orders concerning custody, maintenance and education of minor children in proceedings under the Act.",
            important: "The exact order depends on the circumstances and the court's jurisdiction under the Act.",
          },
          {
            law: "General Family-Law Principle",
            section: "Children",
            title: "Divorce Does Not End Parental Responsibilities",
            meaning: "Ending a marriage does not by itself end the legal responsibilities of parents toward their children. Courts can make appropriate orders concerning custody, education and financial support under the applicable law.",
          },
          {
            law: "General Family-Law Principle",
            section: "Court Orders",
            title: "Existing Orders Can Be Changed",
            meaning: "Where the applicable law permits, courts can modify or vary orders when circumstances change. A previous custody or child-related order is therefore not necessarily permanent in every situation.",
            important: "The procedure and legal test for changing an order depend on the law under which the order was made.",
          },
          {
            law: "General Legal Principle",
            section: "Property",
            title: "Divorce Does Not Automatically Transfer Every Property",
            meaning: "Divorce and property ownership are separate legal questions. Property rights depend on ownership documents, applicable succession or property law, court orders and the circumstances of the property.",
            important: "Maintenance and property ownership should not be treated as the same legal right.",
          },
          {
            law: "General Legal Principle",
            section: "Legal Documents",
            title: "Keep the Divorce Decree and Court Orders",
            meaning: "A person should keep copies of the divorce decree and any orders concerning children, maintenance, property or other legal matters. These documents can be important when enforcing or understanding continuing rights and obligations.",
          },
        ]}
      />

      <Body size="sm" className="mt-4">
        SAFE-W provides general legal information for awareness and
        education. The applicable rights after divorce depend on the law
        governing the marriage and the individual facts.
      </Body>
    </Screen>
  );
}
