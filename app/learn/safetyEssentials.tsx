import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
  },
  accordionButton: {
    alignItems: "center",
    backgroundColor: "#67a2e1",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 14,
    padding: 15,
    minHeight: 50,
  },
  accordionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
  },
  arrow: {
    fontSize: 20,
    color: "#fff",
  },
  expandedContent: {
    backgroundColor: "#e8f4f8",
    padding: 15,
    marginHorizontal: 14,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#67a2e1",
  },
  expandedText: {
    fontSize: 14,
    textAlign: "left",
    color: "#333",
    lineHeight: 22,
  },
  nestedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#67a2e1",
    marginTop: 12,
    marginBottom: 8,
  },
  note: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#09325f",
    marginTop: 12,
    marginBottom: 8,
  },
});

export default function SafetyEssentials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

 const accordionItems = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    heading: "Safety Comes Before Evidence",
    title1: "What should you know?",
    content:
      "Evidence can be useful, but collecting it should never put you in greater danger.",

    title2: "Real-life situation 💡",
    content2:
      "You think someone is following you and consider stopping to take a photograph so you can prove what happened.",

    title3: "Remember",
    content3:
      "Don't put yourself at risk to collect evidence. Get somewhere safer first. If you already have messages, screenshots, or other information, preserve them safely.",
  },

  {
    id: 5,
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
    id: 6,
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
    id: 7,
    heading: "Know Who You Can Turn To",
    title1: "What should you know?",
    content:
      "Knowing who you can contact before something happens can make it easier to ask for help when you actually need it.",

    title2: "Real-life situation 💡",
    content2:
      "You're somewhere unfamiliar and suddenly feel unsafe. Instead of trying to figure everything out yourself, you already know which trusted person you can contact.",

    title3: "Remember",
    content3:
      "Think beforehand about people you trust and keep their contact information accessible.",
  },

  {
    id: 8,
    heading: "Take Escalation Seriously",
    title1: "What should you know?",
    content:
      "A situation can become more concerning when unwanted behaviour becomes more frequent, aggressive, threatening, or difficult to avoid.",

    title2: "Real-life situation 💡",
    content2:
      "Someone has been repeatedly bothering you. Over time, their behaviour becomes more aggressive and they begin appearing in places where you regularly go.",

    title3: "Remember",
    content3:
      "Don't dismiss a growing pattern. Prioritize your safety, tell someone you trust, and seek appropriate help.",
  },
];

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Text style={styles.content}>
        Learn simple safety principles that can help you stay aware, protect your boundaries, and make safer decisions. You can seek help whenever you feel unsafe, uncomfortable, or unsure about a situation.
      </Text>

      {accordionItems.map((item) => (
        <View key={item.id}>
          <Pressable
            style={styles.accordionButton}
            onPress={() => toggleAccordion(item.id)}
          >
            <Text style={styles.accordionText}>{item.heading}</Text>
            <Text style={styles.arrow}>
              {expandedId === item.id ? "▼" : "▶"}
            </Text>
          </Pressable>

          {expandedId === item.id && (
            <View style={styles.expandedContent}>
              <Text style={[styles.expandedText, styles.nestedTitle]}>
                {item.title1}
              </Text>
              <Text style={styles.expandedText}>{item.content}</Text>

              {item.title2 && (
                <>
                  <Text style={[styles.expandedText, styles.nestedTitle]}>
                    {item.title2}
                  </Text>
                  <Text style={styles.expandedText}>{item.content2}</Text>
                </>
              )}
              {item.title3 && (
                <>
                  <Text style={[styles.expandedText, styles.nestedTitle]}>
                    {item.title3}
                  </Text>
                  <Text style={styles.expandedText}>{item.content3}</Text>
                </>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
