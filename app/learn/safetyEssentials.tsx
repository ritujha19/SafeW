import { useState } from "react";
import { AccordionItem, Block } from "@/components/Accordion";
import type { IconName } from "@/components/Media";
import { Screen } from "@/components/Screen";
import { Body } from "@/components/Typography";

type Item = {
  heading: string;
  title1: string;
  content: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
};

const icon: IconName[] = [
  "compass-outline", // Trust your instincts
  "hand-left-outline", // Your boundaries matter
  "people-outline", // You don't have to handle it alone
  "camera-outline", // Safety comes before evidence
  "lock-closed-outline", // Protect your personal information
  "analytics-outline", // Look at the pattern
  "call-outline", // Know who you can turn to
  "trending-up-outline", // Take escalation seriously
];

const accordionItems: Item[] = [
  {
    heading: "Trust Your Instincts",
    title1: "What should you know?",
    content:
      "You don't need to prove that something is dangerous before taking a situation seriously. If something feels wrong, uncomfortable, or unsafe, it's okay to create distance and seek help.",
    title2: "Real-life situation 💡",
    content2:
      "Imagine you're travelling somewhere and someone you don't know keeps trying to get your attention and move closer to you. You aren't sure what they want, so you wonder if you're just overthinking it.",
    title3: "Remember",
    content3:
      "You don't have to wait until something becomes clearly dangerous. If you feel unsafe, move toward people or a safer place and contact someone you trust.",
  },
  {
    heading: "Your Boundaries Matter",
    title1: "What should you know?",
    content:
      "You are allowed to say no to things that make you uncomfortable. A person should respect your boundaries rather than repeatedly pressuring you.",
    title2: "Real-life situation 💡",
    content2:
      "Someone keeps asking you for private photographs or personal information. You say no, but they continue asking and make you feel guilty for refusing.",
    title3: "Remember",
    content3:
      "You don't owe someone access to your private information, conversations, photographs, or personal space.",
  },
  {
    heading: "You Don't Have to Handle It Alone",
    title1: "What should you know?",
    content:
      "When something is worrying, confusing, or threatening, getting another person's support can help you make safer decisions.",
    title2: "Real-life situation 💡",
    content2:
      "Someone has been repeatedly sending you threatening messages. You're unsure whether the situation is serious enough to tell anyone, so you keep it to yourself.",
    title3: "Remember",
    content3:
      "You don't have to decide alone whether something is serious. Talk to someone you trust and let them help you understand what is happening.",
  },
  {
    heading: "Safety Comes Before Evidence",
    title1: "What should you know?",
    content: "Evidence can be useful, but collecting it should never put you in greater danger.",
    title2: "Real-life situation 💡",
    content2:
      "You think someone is following you and consider stopping to take a photograph so you can prove what happened.",
    title3: "Remember",
    content3:
      "Don't put yourself at risk to collect evidence. Get somewhere safer first. If you already have messages, screenshots, or other information, preserve them safely.",
  },
  {
    heading: "Protect Your Personal Information",
    title1: "What should you know?",
    content:
      "Information that seems harmless can sometimes reveal where you are, how to contact you, or other details about your private life.",
    title2: "Real-life situation 💡",
    content2:
      "Someone you've recently met online asks where you live, whether you're home alone, and asks you to share your live location.",
    title3: "Remember",
    content3:
      "You don't have to answer. Be especially careful about sharing your address, live location, passwords, private photographs, or other sensitive information.",
  },
  {
    heading: "Look at the Pattern",
    title1: "What should you know?",
    content:
      "Don't look at every incident separately. Sometimes the pattern of behaviour gives you a better understanding of how concerning a situation is.",
    title2: "Real-life situation 💡",
    content2:
      "Someone sends you one unwanted message. Later, they create another account after you block them, then continue contacting you from different accounts.",
    title3: "Remember",
    content3:
      "Repeated, unwanted, threatening, coercive, or escalating behaviour deserves more attention than an isolated interaction.",
  },
  {
    heading: "Know Who You Can Turn To",
    title1: "What should you know?",
    content:
      "Knowing who you can contact before something happens can make it easier to ask for help when you actually need it.",
    title2: "Real-life situation 💡",
    content2:
      "You're somewhere unfamiliar and suddenly feel unsafe. Instead of trying to figure everything out yourself, you already know which trusted person you can contact.",
    title3: "Remember",
    content3: "Think beforehand about people you trust and keep their contact information accessible.",
  },
  {
    heading: "Take Escalation Seriously",
    title1: "What should you know?",
    content:
      "A situation can become more concerning when unwanted behaviour becomes more frequent, aggressive, threatening, or difficult to avoid.",
    title2: "Real-life situation 💡",
    content2:
      "Someone has been repeatedly bothering you. Over time, their behaviour becomes more aggressive and they begin appearing in places where you regularly go.",
    title3: "Remember",
    content3: "Don't dismiss a growing pattern. Prioritize your safety, tell someone you trust, and seek appropriate help.",
  },
];

export default function SafetyEssentials() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Screen>
      <Body tone="ink" className="mb-5">
        Learn simple safety principles that can help you stay aware, protect your
        boundaries, and make safer decisions. You can seek help whenever you feel
        unsafe, uncomfortable, or unsure about a situation.
      </Body>

      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.heading}
          title={item.heading}
          icon={icon[index]}
          accent="haven"
          expanded={openId === index}
          onToggle={() => setOpenId(openId === index ? null : index)}
        >
          <Block label={item.title1} tone="plain">
            {item.content}
          </Block>
          <Block label={item.title2} tone="story">
            {item.content2}
          </Block>
          <Block label={item.title3} tone="remember">
            {item.content3}
          </Block>
        </AccordionItem>
      ))}
    </Screen>
  );
}
