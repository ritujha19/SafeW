import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
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
});

export default function WhatCounts() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const accordionItems = [
    {
      id: 1,

      title1: "What is Harassment?",
      content:
        "Harassment is unwanted behavior, words, or actions that make someone feel threatened, intimidated, humiliated, or unsafe. It can happen in person, in public places, or online. Harassment can take many forms, including repeated unwanted contact, threats, insults, or other unwanted behavior.",

      title2: "How to know if you are being harassed?",
      content2:
        "Repeated unwanted contact, threatening behavior, insulting or sexual comments, unwanted touching, or messages that make you feel unsafe may be signs of harassment.",

      title3: "What to do if you are being harassed?",
      content3:
        "Prioritize your safety and move away from the situation if possible. Tell someone you trust, keep useful evidence such as messages or screenshots, and seek help from the appropriate authority.",
    },
    {
      id: 2,

      title1: "What is Sexual Harassment?",
      content:
        "Sexual harassment is a form of harassment involving unwanted behavior of a sexual nature, such as sexual comments, advances, touching, requests, or messages that make a person uncomfortable, threatened, or unsafe.",

      title2: "How to know if you are being sexually harassed?",
      content2:
        "Unwanted sexual comments, advances, touching, requests for sexual favors, showing sexual material, or sexually inappropriate messages may be signs of sexual harassment.",

      title3: "What to do if you are being sexually harassed?",
      content3:
        "Get to a safe place and tell someone you trust. If it happens at work or an institution, you can use its complaint mechanism. Keep relevant messages or other evidence if it is safe to do so.",
    },
    {
      id: 3,

      title1: "What are Stalking and Voyeurism?",
      content:
        "Stalking involves repeatedly following, contacting, monitoring, or trying to track a woman despite her lack of interest or refusal. Voyeurism involves secretly watching, photographing, or recording someone during a private activity without consent.",

      title2: "How to know if you are being stalked or secretly recorded?",
      content2:
        "Someone repeatedly follows you, calls or messages you despite being told to stop, monitors your activities, or secretly photographs or records you during a private activity.",

      title3: "What to do if this happens?",
      content3:
        "Prioritize your safety and avoid confronting the person if it could put you at risk. Tell someone you trust, preserve useful evidence, and report the incident to the appropriate authority.",
    },
    {
      id: 4,

      title1: "What are Rape and Sexual Assault?",
      content:
        "Rape and other sexual assaults are serious sexual offences involving sexual acts or contact without valid consent, or in circumstances where the law does not recognize consent.",

      title2: "How to know if it may be sexual assault?",
      content2:
        "Forced or unwanted sexual activity, unwanted sexual contact, or sexual activity involving force, threats, coercion, or a person who cannot legally consent may constitute a serious sexual offence.",

      title3: "What to do if you experience sexual assault?",
      content3:
        "Get somewhere safe and seek support from someone you trust. If you are in immediate danger, contact emergency services. You can also seek medical care, legal assistance, and report the offence to the police.",
    },
    {
      id: 5,

      title1: "What are Domestic Violence and Dowry-Related Abuse?",
      content:
        "Domestic violence can include physical, sexual, emotional, verbal, and economic abuse within a domestic relationship. Dowry-related cruelty involves harassment connected with unlawful demands for dowry or property.",

      title2: "How to know if you are experiencing domestic or dowry abuse?",
      content2:
        "Hitting, threats, insults, controlling money, preventing access to resources, sexual abuse, or repeated demands for money or property accompanied by harassment or abuse can be warning signs.",

      title3: "What to do if you are experiencing abuse?",
      content3:
        "If you are in immediate danger, move to a safer place and seek emergency help. Tell someone you trust, preserve useful evidence if safe, and seek police, legal, or support services.",
    },
    {
      id: 6,

      title1: "What is Cyber Abuse?",
      content:
        "Cyber abuse is harmful, threatening, or unlawful behavior carried out through phones, social media, messaging platforms, or other digital services.",

      title2: "How to know if you are being abused online?",
      content2:
        "Threatening messages, repeated unwanted contact, fake accounts, impersonation, cyberstalking, or sharing private information or images without permission can be signs of online abuse.",

      title3: "What to do if you are being abused online?",
      content3:
        "If it is safe, save screenshots, messages, usernames, links, and other useful evidence. Avoid engaging with the harasser if it could increase the risk. You can block or report the account and report serious cyber offences.",
    },
    {
      id: 7,

      title1: "What are Acid Attacks and Serious Violence?",
      content:
        "An acid attack involves using acid or another corrosive substance to cause serious injury or disfigurement. Serious violence also includes acts that threaten a person's life or cause severe physical harm.",

      title2: "How to know if you may be at serious risk?",
      content2:
        "Threats involving acid or other serious violence, repeated attempts to harm you, or threats to your life should be taken seriously, especially when you believe the threat may be carried out.",

      title3: "What to do if you are in serious danger?",
      content3:
        "Move toward a safe place or trusted person if you can do so safely. In an emergency, contact emergency services immediately. After an attack, seek urgent medical care and report the incident to the police.",
    },
    {
      id: 8,

      title1: "What are Trafficking and Child Protection Offences?",
      content:
        "Human trafficking involves recruiting, transporting, transferring, harbouring, or receiving people for exploitation through force, coercion, deception, or other unlawful means. Children have additional legal protections against sexual abuse and exploitation.",

      title2: "How to know if someone may be at risk?",
      content2:
        "Forced work, threats, deception about employment, being controlled by another person, being prevented from leaving, or involving a child in sexual activity or exploitation can be serious warning signs.",

      title3: "What to do if someone is at risk?",
      content3:
        "Do not confront a suspected trafficker if doing so could increase the danger. Move toward safety where possible and contact the police or appropriate child or women’s support services.",
    },
    {
      id: 9,

      title1: "Not Sure If It Counts?",
      content:
        "You do not need to know the exact legal name of an offence before asking for help. If someone's behavior makes you feel unsafe, threatened, or controlled, your concern is worth taking seriously.",

      title2: "What information can help?",
      content2:
        "If it is safe to do so, note what happened, when and where it happened, who was involved, and keep relevant messages, photographs, or other evidence.",

      title3: "Where can you get help?",
      content3:
        "For an immediate emergency in India, call 112. You can also seek help from the police, women’s support services, legal aid, or appropriate government reporting portals.",
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
        Not every harmful situation looks the same. Learn how to recognize
        common forms of harassment, abuse, violence, and exploitation, what
        warning signs to notice, and where to seek help.
      </Text>

      {accordionItems.map((item) => (
        <View key={item.id}>
          <Pressable
            style={styles.accordionButton}
            onPress={() => toggleAccordion(item.id)}
          >
            <Text style={styles.accordionText}>{item.title1}</Text>
            <Text style={styles.arrow}>
              {expandedId === item.id ? "▼" : "▶"}
            </Text>
          </Pressable>

          {expandedId === item.id && (
            <View style={styles.expandedContent}>
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
