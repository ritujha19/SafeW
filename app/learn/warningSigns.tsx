import { useRouter } from "expo-router";
import { useState } from "react";
import { AccordionItem, Block, Bullets, type Accent } from "@/components/Accordion";
import { Button } from "@/components/Button";
import type { IconName } from "@/components/Media";
import { Callout, Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

type Item = {
  heading: string;
  content: string;
  title2: string;
  content2: string[];
  title3: string;
  content3: string[];
};

const icon: IconName[] = [
  "call-outline", // Repeated unwanted contact
  "eye-outline", // Following & stalking
  "warning-outline", // Threats & intimidation
  "lock-closed-outline", // Blackmail & coercion
  "hand-left-outline", // Sexual boundary violations
  "camera-outline", // Secret recording & privacy violations
  "chatbubble-ellipses-outline", // Online harassment & digital abuse
  "people-outline", // Isolation through coercion
  "alert-outline", // Forced or exploitative situations
  "trending-up-outline", // When behaviour becomes more concerning
];
const accent: Accent[] = [
  "dusk", "dusk", "marigold", "marigold", "marigold", "dusk", "dusk", "marigold", "marigold", "marigold",
];

const accordionItems: Item[] = [
  {
    heading: "Repeated Unwanted Contact",
    content:
      "When someone repeatedly contacts or approaches you even after you have made it clear that you don't want the contact.",
    title2: "What should you notice?",
    content2: [
      "Repeated calls or messages after being asked to stop.",
      "Someone repeatedly approaching you at college, work, home, or other places.",
      "Creating new accounts or using other people to contact you after being blocked.",
    ],
    title3: "What should you do?",
    content3: [
      "Don't feel pressured to keep responding.",
      "Tell someone you trust if the behaviour continues or makes you uncomfortable.",
      "Keep relevant messages or other information safely if you may need it later.",
    ],
  },
  {
    heading: "Following & Stalking",
    content:
      "When someone repeatedly follows, watches, or monitors you in a way that makes you feel unsafe or causes concern for your safety.",
    title2: "What should you notice?",
    content2: [
      "Someone repeatedly follows you while travelling or walking.",
      "The person keeps appearing at places you regularly visit without a reasonable explanation.",
      "Someone repeatedly watches or monitors your movements.",
    ],
    title3: "What should you do?",
    content3: [
      "Avoid going somewhere isolated if you think someone is following you.",
      "Move toward a safe, populated place and contact someone you trust.",
      "Keep a record of repeated incidents when it is safe to do so.",
    ],
  },
  {
    heading: "Threats & Intimidation",
    content:
      "When someone uses threats, aggressive behaviour, or fear to frighten you or make you do something against your wishes.",
    title2: "What should you notice?",
    content2: [
      "Someone threatens to hurt you or someone you care about.",
      "A person becomes threatening when you refuse something or set a boundary.",
      "Someone repeatedly uses frightening statements or behaviour to make you obey.",
    ],
    title3: "What should you do?",
    content3: [
      "Take threats seriously, especially if they are becoming more frequent or serious.",
      "Move toward a safer place and tell someone you trust.",
      "If you believe you are in immediate danger, seek emergency help.",
    ],
  },
  {
    heading: "Blackmail & Coercion",
    content:
      "When someone uses threats, fear, pressure, or private information to force you to do something you do not freely want to do.",
    title2: "What should you notice?",
    content2: [
      "Someone threatens to reveal your private information unless you do what they demand.",
      "A person repeatedly pressures you after you have refused.",
      "Someone uses fear or threats to control your decisions.",
    ],
    title3: "What should you do?",
    content3: [
      "Don't let threats force you into an unsafe situation.",
      "Tell someone you trust about what is happening.",
      "Safely preserve relevant messages or other evidence instead of deleting everything immediately.",
    ],
  },
  {
    heading: "Sexual Boundary Violations",
    content:
      "When someone crosses your sexual or personal boundaries through unwanted comments, advances, touching, pressure, or other behaviour.",
    title2: "What should you notice?",
    content2: [
      "Someone continues making sexual comments or advances after you show discomfort.",
      "A person pressures you for sexual conversations, images, or other content.",
      "Someone ignores your refusal or deliberately crosses your personal boundaries.",
    ],
    title3: "What should you do?",
    content3: [
      "You have the right to set boundaries and say no.",
      "Move away from the situation when possible and get to a safer place.",
      "Tell someone you trust and seek appropriate help if the behaviour continues or becomes threatening.",
    ],
  },
  {
    heading: "Secret Recording & Privacy Violations",
    content:
      "When someone secretly watches, photographs, records, or obtains your private information or images without your knowledge or permission.",
    title2: "What should you notice?",
    content2: [
      "Someone attempts to secretly photograph or record you.",
      "A person tries to access your phone, accounts, messages, or private information without permission.",
      "Someone tries to obtain or share private images or conversations without your permission.",
    ],
    title3: "What should you do?",
    content3: [
      "Protect your accounts and privacy where possible.",
      "Don't share additional private information with someone you don't trust.",
      "Safely keep relevant evidence and tell someone you trust if you feel unsafe.",
    ],
  },
  {
    heading: "Online Harassment and Digital Abuse",
    content:
      "When someone uses social media, messaging apps, websites, gaming platforms, or other digital services to harass, threaten, deceive, or target you.",
    title2: "What should you notice?",
    content2: [
      "Repeated abusive or threatening messages.",
      "Someone creates fake accounts to contact, impersonate, or harass you.",
      "Someone shares your personal information or private content without your permission.",
    ],
    title3: "What should you do?",
    content3: [
      "Use available blocking, privacy, and reporting tools.",
      "Save important messages, screenshots, or account information safely.",
      "Tell someone you trust if the behaviour is threatening, persistent, or escalating.",
    ],
  },
  {
    heading: "Isolation Through Coercion",
    content:
      "When someone deliberately tries to separate you from people who support you by using fear, threats, manipulation, or coercion.",
    title2: "What should you notice?",
    content2: [
      "Someone threatens or frightens you when you contact friends or family.",
      "A person tries to prevent you from asking others for help.",
      "Someone makes you afraid to speak to people you trust.",
    ],
    title3: "What should you do?",
    content3: [
      "Try to maintain contact with a trusted person when it is safe.",
      "Don't allow someone to make you believe that you have to handle everything alone.",
      "If someone is threatening or restricting your freedom, seek help without putting yourself at greater risk.",
    ],
  },
  {
    heading: "Forced or Exploitative Situations",
    content:
      "When someone uses deception, threats, coercion, or abuse of power to exploit or control another person.",
    title2: "What should you notice?",
    content2: [
      "Someone makes important decisions for you through threats or serious pressure.",
      "A person demands secrecy while making promises or offers that seem misleading.",
      "Someone tries to control your movement, money, work, travel, or personal choices through fear or coercion.",
    ],
    title3: "What should you do?",
    content3: [
      "Don't handle a potentially exploitative situation alone.",
      "Tell someone trustworthy who can help you assess the situation safely.",
      "If you are being threatened or are in immediate danger, prioritize getting somewhere safe.",
    ],
  },
  {
    heading: "When Behaviour Becomes More Concerning",
    content:
      "When unwanted or concerning behaviour becomes more frequent, aggressive, threatening, or difficult to avoid over time.",
    title2: "What should you notice?",
    content2: [
      "Messages, calls, or unwanted contact become more frequent.",
      "Behaviour that was previously unwanted becomes threatening or aggressive.",
      "The person begins crossing more boundaries or appears in more places or situations.",
    ],
    title3: "What should you do?",
    content3: [
      "Don't ignore a concerning pattern just because individual incidents seem small.",
      "Tell someone you trust and keep relevant information safely.",
      "If the situation becomes immediately dangerous, focus first on getting to safety and seeking emergency help.",
    ],
  },
];

export default function WarningSigns() {
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Screen>
      <Body tone="ink" className="mb-4">
        Learn to recognize warning signs early so you can stay aware, prepared, and
        safer in potentially harmful situations.
      </Body>

      <Callout icon="information-circle-outline" tone="dusk" title="Context matters">
        Warning signs are not proof that a crime has occurred. Pay closer attention
        when behaviour is repeated, unwanted, threatening, coercive, exploitative,
        or escalating. If you feel unsafe, trust your instincts and consider
        reaching out to someone you trust.
      </Callout>

      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.heading}
          title={item.heading}
          icon={icon[index]}
          accent={accent[index]}
          expanded={openId === index}
          onToggle={() => setOpenId(openId === index ? null : index)}
        >
          <Block tone="plain">{item.content}</Block>
          <Block label={item.title2} tone="story">
            <Bullets items={item.content2} tone="story" />
          </Block>
          <Block label={item.title3} tone="action">
            <Bullets items={item.content3} tone="action" />
          </Block>
        </AccordionItem>
      ))}

      <Button
        variant="danger"
        icon="alert"
        label="In danger now? Go to Emergency"
        className="mt-2"
        onPress={() => router.navigate("/emergency")}
      />
    </Screen>
  );
}
