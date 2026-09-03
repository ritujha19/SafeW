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

export default function WhatCounts() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((point, index) => (
        <Text key={index} style={styles.expandedText}>
          • {point}
        </Text>
      ));
    }

    return <Text style={styles.expandedText}>{content}</Text>;
  };

  const accordionItems = [
    {
      id: 1,
      heading: "Repeated Unwanted Contact",
      title1: "What does it mean?",
      content:
        "When someone repeatedly contacts or approaches you even after you have made it clear that you don't want the contact.",

      title2: "What should you notice?",
      content2: [
        "Repeated calls or messages after being asked to stop.",
        "Someone repeatedly approaching you at college, work, home, or other places.",
        "Creating new accounts or using other people to contact you after being blocked.",
      ],

      title3: "What should you do?",
      content3:[
        "Don't feel pressured to keep responding.",
        "Tell someone you trust if the behaviour continues or makes you uncomfortable.",
         "Keep relevant messages or other information safely if you may need it later.",
      ]
    },

    {
      id: 2,
      heading: "Following & Stalking",
      title1: "What does it mean?",
      content:
        "When someone repeatedly follows, watches, or monitors you in a way that makes you feel unsafe or causes concern for your safety.",

      title2: "What should you notice?",
      content2:[
        "Someone repeatedly follows you while travelling or walking.",
        "The person keeps appearing at places you regularly visit without a reasonable explanation.",
        "Someone repeatedly watches or monitors your movements.",
      ],    

      title3: "What should you do?",
      content3:[
        "Avoid going somewhere isolated if you think someone is following you." ,
        "        Move toward a safe, populated place and contact someone you trust.",
         "Keep a record of repeated incidents when it is safe to do so.",
      ],
    },

    {
      id: 3,
      heading: "Threats & Intimidation",
      title1: "What does it mean?",
      content:
        "When someone uses threats, aggressive behaviour, or fear to frighten you or make you do something against your wishes.",

      title2: "What should you notice?",
      content2:[
        "Someone threatens to hurt you or someone you care about.",
        "A person becomes threatening when you refuse something or set a boundary.",
        "Someone repeatedly uses frightening statements or behaviour to make you obey.",
      ],

      title3: "What should you do?",
      content3:[
        "Take threats seriously, especially if they are becoming more frequent or serious.",
        "Move toward a safer place and tell someone you trust.",
        "If you believe you are in immediate danger, seek emergency help.",
      ],
    },

    {
      id: 4,
      heading: "Blackmail & Coercion",
      title1: "What does it mean?",
      content:
        "When someone uses threats, fear, pressure, or private information to force you to do something you do not freely want to do.",

      title2: "What should you notice?",
      content2:[
        "Someone threatens to reveal your private information unless you do what they demand.",
        "A person repeatedly pressures you after you have refused.",
        "Someone uses fear or threats to control your decisions.",
      ],

      title3: "What should you do?",
      content3:[
        "Don't let threats force you into an unsafe situation.",
        "Tell someone you trust about what is happening.",
        "Safely preserve relevant messages or other evidence instead of deleting everything immediately.",
      ],
    },

    {
      id: 5,
      heading: "Sexual Boundary Violations",
      title1: "What does it mean?",
      content:
        "When someone crosses your sexual or personal boundaries through unwanted comments, advances, touching, pressure, or other behaviour.",

      title2: "What should you notice?",
      content2:[
        "Someone continues making sexual comments or advances after you show discomfort.",
        "A person pressures you for sexual conversations, images, or other content.",
        "Someone ignores your refusal or deliberately crosses your personal boundaries.",
      ],

      title3: "What should you do?",
      content3:[
        "You have the right to set boundaries and say no.",
        "Move away from the situation when possible and get to a safer place.",
        "Tell someone you trust and seek appropriate help if the behaviour continues or becomes threatening.",
      ],
    },

    {
      id: 6,
      heading: "Secret Recording & Privacy Violations",
      title1: "What does it mean?",
      content:
        "When someone secretly watches, photographs, records, or obtains your private information or images without your knowledge or permission.",

      title2: "What should you notice?",
      content2:[
        "Someone attempts to secretly photograph or record you.",
        "A person tries to access your phone, accounts, messages, or private information without permission.",
        "Someone tries to obtain or share private images or conversations without your permission.",
      ],

      title3: "What should you do?",
      content3:[
        "Protect your accounts and privacy where possible.",
        "Don't share additional private information with someone you don't trust.",
        "Safely keep relevant evidence and tell someone you trust if you feel unsafe.",
      ],
    },

    {
      id: 7,
      heading: "Online Harassment and Digital Abuse",
      title1: "What does it mean?",
      content:
        "When someone uses social media, messaging apps, websites, gaming platforms, or other digital services to harass, threaten, deceive, or target you.",

      title2: "What should you notice?",
      content2:[
        "Repeated abusive or threatening messages.",
        "Someone creates fake accounts to contact, impersonate, or harass you.",
        "Someone shares your personal information or private content without your permission.",
      ],    

      title3: "What should you do?",
      content3:[
        "Use available blocking, privacy, and reporting tools.",
        "Save important messages, screenshots, or account information safely.",
        "Tell someone you trust if the behaviour is threatening, persistent, or escalating.",
      ],
    },

    {
      id: 8,
      heading: "Isolation Through Coercion",
      title1: "What does it mean?",
      content:
        "When someone deliberately tries to separate you from people who support you by using fear, threats, manipulation, or coercion.",

      title2: "What should you notice?",
      content2:[
        "Someone threatens or frightens you when you contact friends or family.",
        "A person tries to prevent you from asking others for help.",
        "Someone makes you afraid to speak to people you trust.",
      ],

      title3: "What should you do?",
      content3:[
        "Try to maintain contact with a trusted person when it is safe.",
        "Don't allow someone to make you believe that you have to handle everything alone.",
        "If someone is threatening or restricting your freedom, seek help without putting yourself at greater risk.",
      ],
    },

    {
      id: 9,
      heading: "Forced or Exploitative Situations",
      title1: "What does it mean?",
      content:
        "When someone uses deception, threats, coercion, or abuse of power to exploit or control another person.",

      title2: "What should you notice?",
      content2:[
        "Someone makes important decisions for you through threats or serious pressure.",
        "A person demands secrecy while making promises or offers that seem misleading.",
        "Someone tries to control your movement, money, work, travel, or personal choices through fear or coercion.",
      ],

      title3: "What should you do?",
      content3:[
        "Don't handle a potentially exploitative situation alone.",
        "Tell someone trustworthy who can help you assess the situation safely.",
        "If you are being threatened or are in immediate danger, prioritize getting somewhere safe.",
      ],
    },

    {
      id: 10,
      heading: "When Behaviour Becomes More Concerning",
      title1: "What does it mean?",
      content:
        "When unwanted or concerning behaviour becomes more frequent, aggressive, threatening, or difficult to avoid over time.",

      title2: "What should you notice?",
      content2:[
        "Messages, calls, or unwanted contact become more frequent.",
        "Behaviour that was previously unwanted becomes threatening or aggressive.",
        "The person begins crossing more boundaries or appears in more places or situations.",
      ],

      title3: "What should you do?",
      content3:[
        "Don't ignore a concerning pattern just because individual incidents seem small.",
        "Tell someone you trust and keep relevant information safely.",
        "If the situation becomes immediately dangerous, focus first on getting to safety and seeking emergency help.",
      ],
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
        Learn to recognize warning signs early so you can stay aware, prepared,
        and safer in potentially harmful situations.
      </Text>

      <Text style={styles.content}>
        <Text style={styles.note}>NOTE:</Text> Warning signs are not proof that
        a crime has occurred. Context matters. Pay closer attention when
        behaviour is repeated, unwanted, threatening, coercive, exploitative, or
        escalating. If you feel unsafe, trust your instincts and consider
        reaching out to someone you trust.
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
                  {renderContent(item.content2)}
                </>
              )}

              {item.title3 && (
                <>
                  <Text style={[styles.expandedText, styles.nestedTitle]}>
                    {item.title3}
                  </Text>
                  {renderContent(item.content3)}
                </>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
