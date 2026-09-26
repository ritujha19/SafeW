import { useState } from "react";
import { AccordionItem, Block, type Accent } from "@/components/Accordion";
import type { IconName } from "@/components/Media";

export type LawSection = {
  law: string;
  section: string;
  title: string;
  meaning: string;
  important?: string;
};

/**
 * Renders a list of {law, section, title, meaning, important?} entries as
 * accordion cards. Used by the "view more" detail pages under
 * womenRights/viewMore/, which all share this exact shape.
 */
export function LawSectionAccordion({
  items,
  icon = "document-text-outline",
  accent = "dusk",
}: {
  items: LawSection[];
  icon?: IconName;
  accent?: Accent;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {items.map((item, index) => {
        const id = `${item.law}-${item.section}-${index}`;
        return (
          <AccordionItem
            key={id}
            title={item.title}
            subtitle={`${item.law} · ${item.section}`}
            icon={icon}
            accent={accent}
            expanded={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
          >
            <Block tone="plain">{item.meaning}</Block>
            {item.important ? (
              <Block label="Important" tone="notice">
                {item.important}
              </Block>
            ) : null}
          </AccordionItem>
        );
      })}
    </>
  );
}
