import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { AccordionItem, Block, type Accent } from "./Accordion";
import { Button } from "./Button";
import type { IconName } from "./Media";
import { Callout } from "./Screen";
import { Body, Heading } from "./Typography";

export type RightsItem = {
  /** Article / Act / Section, shown under the title. */
  label: string;
  title: string;
  meaning: string;
  whyItMatters: string;
  /** Optional detail page. */
  route?: string;
};

type Route = Parameters<ReturnType<typeof useRouter>["navigate"]>[0];

export function RightsSection({
  heading,
  description,
  items,
  icon,
  accent = "dusk",
}: {
  heading?: string;
  description?: string;
  items: RightsItem[];
  icon: IconName;
  accent?: Accent;
}) {
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <View className="mb-2">
      {heading ? (
        <Heading size="lg" className="mb-1 mt-2">
          {heading}
        </Heading>
      ) : null}
      {description ? <Body size="sm" className="mb-3">{description}</Body> : null}
      {!description && heading ? <View className="mb-2" /> : null}

      {items.map((item) => {
        const id = item.label + item.title;
        return (
          <AccordionItem
            key={id}
            title={item.title}
            subtitle={item.label}
            icon={icon}
            accent={accent}
            expanded={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
          >
            <Block label="What it means">{item.meaning}</Block>
            <Block label="Why it matters" tone="story">
              {item.whyItMatters}
            </Block>
            {item.route ? (
              <Button
                variant="soft"
                label="View more"
                icon="reader-outline"
                className="mt-4"
                onPress={() => router.navigate(item.route as Route)}
              />
            ) : null}
          </AccordionItem>
        );
      })}
    </View>
  );
}

/** Bottom-of-page reminder + route to free legal help. */
export function LegalNote() {
  const router = useRouter();
  return (
    <View className="mt-4">
      <Callout icon="scale-outline" tone="dusk" title="General information, not legal advice">
        Laws change and every situation is different. A legal-aid service can tell you
        what applies to you.
      </Callout>
      <Button
        variant="outline"
        icon="call-outline"
        label="Find free legal aid"
        onPress={() => router.navigate("/womenRights/freeLegalAids" as Route)}
      />
    </View>
  );
}
