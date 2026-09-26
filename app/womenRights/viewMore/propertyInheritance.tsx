import { LawSectionAccordion } from "@/components/LawSectionAccordion";
import { Block } from "@/components/Accordion";
import { Callout, Screen } from "@/components/Screen";
import { Body, Heading } from "@/components/Typography";

export default function PropertyInheritanceRights() {
  return (
    <Screen>
      <Heading size="lg" className="mb-3">
        🏠 Property & Inheritance Rights
      </Heading>

      <Body tone="ink" className="mb-4">
        A woman&apos;s rights in property can arise from ownership,
        inheritance, joint ownership or succession. The exact rules depend on
        the applicable law, the type of property and whether the person who
        owned the property left a valid will.
      </Body>

      <Callout tone="dusk" title="⚖️ Parents' property vs husband's property">
        <Body size="sm" tone="ink">
          A woman can have inheritance rights in her parents&apos; property
          and may also have inheritance rights in her husband&apos;s estate.
          These are separate legal questions.
        </Body>
        <Body size="sm" tone="ink" className="mt-3">
          Marriage does not automatically make a woman a co-owner of every
          property owned by her husband. Likewise, inheritance shares are not
          automatically the same for every family.
        </Body>
      </Callout>

      <LawSectionAccordion
        icon="home-outline"
        accent="dusk"
        items={[
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 6",
            title: "Daughter's Coparcenary Rights",
            meaning: "For Hindu Mitakshara joint families covered by the Act, a daughter is a coparcener in the same way as a son and has the same rights and liabilities in coparcenary property.",
            important: "This is a specific Hindu-law right. SAFE-W has a separate 'Equal Coparcenary Rights for Daughters' card for this provision, so this page does not repeat the full explanation.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Sections 8–10",
            title: "Inheritance From a Father",
            meaning: "When a Hindu man dies without a valid will, his property devolves according to the succession rules in the Act. Daughters are included among the Class I heirs and therefore can inherit along with the other Class I heirs according to the statutory rules.",
            important: "The actual share depends on the surviving heirs and the type of property involved. A daughter does not always receive a fixed one-half or one-fourth share.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Section 14",
            title: "Property Owned by a Hindu Woman",
            meaning: "Property possessed by a female Hindu is generally held by her as her full owner rather than as a limited owner, subject to the exceptions contained in the Act.",
            important: "This can cover property acquired or received by a woman through different legal means. The exact source and circumstances of acquisition matter.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Sections 15–16",
            title: "Who Inherits From a Hindu Woman",
            meaning: "When a Hindu woman dies without a will, the Act provides a statutory order of succession. The order includes her sons and daughters, husband and other specified heirs, with special rules concerning certain property inherited from her parents or husband.",
            important: "Succession to a woman's property is different from succession to a man's property. The source of the property can also matter under Section 15.",
          },
          {
            law: "Applicable Succession Law",
            section: "Inheritance",
            title: "Inheritance From Parents",
            meaning: "A woman's right to inherit from her parents depends on the succession law applicable to her family and on whether the parent left a valid will. Different personal and succession laws can contain different rules.",
            important: "Do not assume that the Hindu Succession Act applies to every family. The applicable legal framework must first be identified.",
          },
          {
            law: "Applicable Succession Law",
            section: "Will / Testamentary Succession",
            title: "Property Left Through a Will",
            meaning: "A parent or spouse may leave property through a valid will. The woman's rights then depend on the terms of the will together with the succession law applicable to that person and property.",
            important: "Inheritance without a will and inheritance through a will are different legal situations.",
          },
          {
            law: "Applicable Property Law",
            section: "Ownership",
            title: "Her Own Property",
            meaning: "Property that a woman legally owns is her property. Marriage by itself does not transfer ownership of her property to her husband.",
            important: "Ownership documents, the way the property was acquired and the applicable law can be important when establishing ownership.",
          },
          {
            law: "Property and Succession Law",
            section: "Joint Ownership",
            title: "Property Jointly Owned With Her Husband",
            meaning: "If property is jointly owned by a woman and her husband, her rights depend on the ownership documents, the form of ownership and the applicable law. Marriage alone does not determine the exact ownership share.",
            important: "A joint property claim is different from a claim to inherit the husband's property after his death.",
          },
          {
            law: "Applicable Succession Law",
            section: "Husband's Estate",
            title: "Inheritance From Her Husband",
            meaning: "When a husband dies, a wife may have inheritance rights under the succession law applicable to the marriage and estate. The exact share depends on the applicable law, whether there is a valid will, and which other heirs survive the deceased.",
            important: "Being a wife does not automatically mean inheriting the entire estate or a fixed percentage in every family.",
          },
          {
            law: "Hindu Succession Act, 1956",
            section: "Sections 8–10",
            title: "Widow as an Heir",
            meaning: "Under the Hindu Succession Act, a widow is included among the Class I heirs when a Hindu man dies intestate. The property is distributed among the Class I heirs according to the statutory rules.",
            important: "The widow's actual share depends on who else survives the deceased. The law does not simply give every widow the entire property.",
          },
          {
            law: "Indian Succession Act, 1925 and Other Applicable Laws",
            section: "Succession",
            title: "Different Communities Can Have Different Rules",
            meaning: "Inheritance rules are not identical for every religious or legal framework. Hindu, Muslim, Christian, Parsi and other succession situations can be governed by different laws and rules.",
            important: "SAFE-W should not use a Hindu succession rule as though it automatically applies to Muslim, Christian or Parsi families.",
          },
          {
            law: "General Legal Principle",
            section: "Three Different Rights",
            title: "Ownership, Inheritance and Maintenance Are Different",
            meaning: "Ownership means a person already has a legal interest in property. Inheritance concerns property received after another person's death. Maintenance is financial support and does not by itself create ownership of the other person's property.",
            important: "A maintenance claim should not be described as an automatic ownership or inheritance share.",
          },
        ]}
      />

      <Block label="Remember" tone="remember">
        A woman&apos;s property rights can be affected by the applicable
        succession law, a valid will, the nature of the property and the
        identity of the surviving heirs. Documents such as sale deeds, gift
        deeds, wills, partition documents and succession documents can be
        important when establishing a claim.
      </Block>

      <Callout tone="dusk" title="Need legal help?" >
        If there is a dispute about property, inheritance or ownership,
        legal-aid services or a qualified lawyer can help determine which law
        and procedure apply.
      </Callout>

      <Body size="sm" className="mt-1">
        SAFE-W provides general legal information for awareness and
        education. Property and succession law can depend heavily on
        individual facts and the applicable legal framework. This information
        is not a substitute for advice from a qualified legal professional.
      </Body>
    </Screen>
  );
}