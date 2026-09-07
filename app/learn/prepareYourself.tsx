import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Question = {
  title: string;
  situation: string;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
  remember: string;
};

const questions: Question[] = [
  {
    title: "Being followed",
    situation:
      "You are walking home and notice the same person has been behind you for several minutes. You are not sure whether they are actually following you.",
    question: "What is the safest choice?",
    choices: [
      "Continue walking directly home",
      "Move toward a safer, populated or visible place and contact someone you trust",
      "Stop and confront the person",
      "Ignore the feeling completely",
    ],
    correctAnswer: 1,
    explanation:
      "Moving toward people and visibility gives you more options to seek help and reduces the chance of being isolated.",
    remember:
      "You don't need absolute proof before taking a reasonable step toward safety.",
  },

  {
    title: "Someone blocks your path",
    situation:
      "Someone you don't know deliberately stands in your way and makes you uncomfortable.",
    question: "What should you prioritize?",
    choices: [
      "Arguing with them",
      "Staying there until they move",
      "Creating distance and getting toward a safer place or other people",
      "Trying to prove that they are doing something wrong",
    ],
    correctAnswer: 2,
    explanation:
      "If someone is blocking your movement, creating distance and getting toward other people can give you a safer opportunity to leave and seek help.",
    remember:
      "Your priority is getting to safety, not winning a confrontation.",
  },

  {
    title: "The isolated shortcut",
    situation:
      "You are going somewhere familiar. One route is a shortcut but is mostly empty. Another route takes longer but has more people and visibility.",
    question: "Which is the safer choice when you are already uncomfortable?",
    choices: [
      "Always take the shortest route",
      "Choose the route with better visibility and access to help",
      "Take the empty route because it is faster",
      "Stay where you are",
    ],
    correctAnswer: 1,
    explanation:
      "A route with people and visibility can give you more opportunities to get help if something unexpected happens.",
    remember:
      "When choosing between routes, think about visibility, people and access to help, not just distance.",
  },

  {
    title: "Don't tell anyone",
    situation:
      "Someone is making you uncomfortable and tells you: 'Don't tell your parents or anyone else. This stays between us.'",
    question: "What should you do?",
    choices: [
      "Keep it secret",
      "Tell a trusted person anyway",
      "Promise not to tell anyone",
      "Wait until the situation becomes worse",
    ],
    correctAnswer: 1,
    explanation:
      "Pressure to keep a concerning situation secret can make it harder to get support. A trusted person can help you understand the situation and decide what to do next.",
    remember:
      "Someone else's demand for secrecy does not take away your right to seek help.",
  },

  {
    title: "Pressure for private photos",
    situation:
      "Someone repeatedly asks you for private photos even after you have said no.",
    question: "What is the safest response?",
    choices: [
      "Send one so they stop asking",
      "Keep explaining yourself until they understand",
      "Stop engaging if possible, protect your account, and tell someone you trust",
      "Meet them to discuss it",
    ],
    correctAnswer: 2,
    explanation:
      "Repeated requests after you have said no ignore your boundary. You can stop engaging, protect your account, and involve someone you trust.",
    remember: '"No" is enough. You do not owe anyone private images.',
  },

  {
    title: "Someone wants your password",
    situation: 'Someone says: "If you really trust me, give me your password."',
    question: "What should you remember?",
    choices: [
      "People you trust should have your passwords",
      "Sharing passwords proves trust",
      "Your passwords and private accounts should remain protected",
      "Give it to them temporarily",
    ],
    correctAnswer: 2,
    explanation:
      "Giving someone your password can give them access to private information and accounts. Healthy trust does not require giving up account security.",
    remember:
      "Trust does not require giving someone access to your private accounts.",
  },

  {
    title: "Live location request",
    situation:
      "Someone you met online asks you to keep your live location turned on so they can always see where you are.",
    question: "What should you consider?",
    choices: [
      "Give them access immediately",
      "Think carefully about who can see your location and whether sharing it is necessary",
      "Share it because they asked politely",
      "Post your location publicly instead",
    ],
    correctAnswer: 1,
    explanation:
      "Location information can reveal where you are and where you regularly go. Before sharing it, consider who has access and whether they actually need it.",
    remember: "Know who has access to your location before sharing it.",
  },

  {
    title: "New accounts after blocking",
    situation:
      "You block someone because their messages are unwanted. They start contacting you through new accounts.",
    question: "What does this pattern tell you?",
    choices: [
      "It is automatically harmless",
      "It may be a concerning pattern, so keep yourself safe and tell someone you trust",
      "You should meet them and ask why",
      "You should respond to every account",
    ],
    correctAnswer: 1,
    explanation:
      "Continuing unwanted contact through new accounts after being blocked shows that the person's behaviour is not respecting your boundary. The repeated pattern is important.",
    remember:
      "Repeated unwanted contact through different accounts can be a warning sign.",
  },

  {
    title: "Going somewhere unfamiliar",
    situation: "You are going somewhere you have never been before.",
    question: "Which preparation is most useful?",
    choices: [
      "Tell nobody where you are going",
      "Know your route, keep your phone accessible, and know who you can contact",
      "Turn your phone off",
      "Choose the most isolated route",
    ],
    correctAnswer: 1,
    explanation:
      "Knowing your route and having a way to communicate can give you more options if your plans change or you need assistance.",
    remember:
      "A little preparation before leaving can give you more options if something goes wrong.",
  },

  {
    title: "Your phone is almost dead",
    situation:
      "You are going somewhere unfamiliar and notice your phone battery is almost empty.",
    question: "What should you think about?",
    choices: [
      "It doesn't matter",
      "Make sure you have a practical way to communicate or reach help if needed",
      "Turn the phone off immediately",
      "Continue without considering it",
    ],
    correctAnswer: 1,
    explanation:
      "A phone can help you communicate with trusted people or access assistance. A low battery can reduce those options, so it is worth planning ahead.",
    remember: "Communication can be an important part of your safety plan.",
  },

  {
    title: "Nobody knows where you are",
    situation:
      "You are going somewhere unfamiliar, and nobody you trust knows your plans.",
    question: "What is a useful safety habit?",
    choices: [
      "Tell everyone online",
      "Let an appropriate trusted person know where you are going when practical",
      "Keep everything secret",
      "Share your exact location publicly",
    ],
    correctAnswer: 1,
    explanation:
      "Having a trusted person know your general plans can make it easier for them to notice if something is wrong and support you when needed.",
    remember:
      "A trusted person knowing your plans can make it easier to get help if you need it.",
  },

  {
    title: "Something feels wrong",
    situation:
      "You are in a situation that suddenly makes you feel unsafe, but you cannot explain exactly why.",
    question: "What should you do?",
    choices: [
      "Stay because you cannot prove there is danger",
      "Move toward safety if you reasonably can",
      "Ignore your instincts",
      "Wait until something happens",
    ],
    correctAnswer: 1,
    explanation:
      "You do not have to investigate or prove a threat before choosing a safer option. If you can safely move away from a concerning situation, you can do so.",
    remember:
      "You don't need to prove that something is dangerous before choosing a safer option.",
  },

  {
    title: "Safe places are closed",
    situation:
      "You are outside later than expected. The places you normally rely on for help are closed.",
    question: "What should you look for?",
    choices: [
      "A completely empty route home",
      "People, visible buildings, security personnel, traffic, or another accessible source of help",
      "A darker and quieter area",
      "Somewhere completely isolated",
    ],
    correctAnswer: 1,
    explanation:
      "Safety does not depend on one particular shop or location. Look for people, visibility, security, and other accessible sources of assistance.",
    remember: "Look for visibility and people, not just familiar shops.",
  },

  {
    title: "You cannot leave immediately",
    situation:
      "You are in a situation that feels unsafe, but you cannot immediately get away.",
    question: "What should your priority be?",
    choices: [
      "Prove that you are stronger",
      "Focus on creating an opportunity to get to safety and seek help",
      "Stay and argue",
      "Try to win the confrontation",
    ],
    correctAnswer: 1,
    explanation:
      "When you cannot leave immediately, the priority is still safety. Look for an opportunity to reach a safer place or get help rather than trying to win a confrontation.",
    remember: "The goal is to get safe, not to win a fight.",
  },

  {
    title: "The final SAFEW test",
    situation:
      "You are walking home in an unfamiliar area. You notice someone repeatedly following you. Your usual route is becoming quiet and there are fewer people around.",
    question: "What should you think first?",
    choices: [
      "I should continue home because I don't know for certain.",
      "NOTICE -> MOVE -> TELL.",
      "I should confront them and ask why they are following me.",
      "I should ignore it unless they approach me.",
    ],
    correctAnswer: 1,
    explanation:
      "This situation combines several warning signs: repeated following, isolation, and decreasing access to people. You do not need to wait for the situation to become more serious before choosing a safer direction and contacting someone you trust.",
    remember:
      "NOTICE: Recognize a concerning situation. MOVE: Move toward safety when possible. TELL: Contact someone you trust or seek help. You don't have to wait for a situation to become an emergency before taking a safer step.",
  },
];

const letters = ["A", "B", "C", "D"];

export default function PrepareYourself() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const currentQuestion = questions[questionIndex];
  const isComplete = questionIndex === questions.length;
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setChecked(true);
  };

  const nextQuestion = () => {
    setQuestionIndex((value) => value + 1);
    setSelectedAnswer(null);
    setChecked(false);
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setChecked(false);
  };

  if (isComplete) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.eyebrow}>QUIZ COMPLETE</Text>
        <Text style={styles.title}>You completed Prepare Yourself</Text>
        <View style={styles.resultCard}>
          <Text style={styles.resultText}>
            You practiced 15 real-life safety situations.
          </Text>
          <Text style={styles.rememberTitle}>REMEMBER</Text>
          <Text style={styles.rememberIcon}>🛡️ NOTICE → MOVE → TELL</Text>
          <Text style={styles.reminderText}>
            NOTICE — Recognize what is happening.{"\n"}
            MOVE — Move toward safety when possible.{"\n"}
            TELL — Reach out to someone you trust or seek help.
          </Text>
        </View>
        <Pressable style={styles.primaryButton} onPress={restartQuiz}>
          <Text style={styles.primaryButtonText}>Start again</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.eyebrow}>SAFEW | PREPARE YOURSELF</Text>
      <View style={styles.progressRow}>
        <Text style={styles.progress}>
          Question {questionIndex + 1} of {questions.length}
        </Text>
      </View>
      <Text style={styles.title}>{currentQuestion.title}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>SITUATION</Text>
        <Text style={styles.situation}>{currentQuestion.situation}</Text>
      </View>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <View style={styles.choices}>
        {currentQuestion.choices.map((choice, index) => {
          const isSelected = selectedAnswer === index;
          const isAnswer = checked && index === currentQuestion.correctAnswer;
          const isWrong = checked && isSelected && !isAnswer;
          return (
            <Pressable
              key={choice}
              disabled={checked}
              style={[
                styles.choice,
                isSelected && styles.selectedChoice,
                isAnswer && styles.correctChoice,
                isWrong && styles.wrongChoice,
              ]}
              onPress={() => setSelectedAnswer(index)}
            >
              <Text
                style={[
                  styles.choiceLetter,
                  isSelected && styles.selectedChoiceText,
                ]}
              >
                {letters[index]}
              </Text>
              <Text
                style={[
                  styles.choiceText,
                  isSelected && styles.selectedChoiceText,
                ]}
              >
                {choice}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {!checked ? (
        <Pressable
          style={[
            styles.primaryButton,
            selectedAnswer === null && styles.disabledButton,
          ]}
          disabled={selectedAnswer === null}
          onPress={checkAnswer}
        >
          <Text style={styles.primaryButtonText}>Check answer</Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.feedback,
            isCorrect ? styles.correctFeedback : styles.wrongFeedback,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {isCorrect
              ? "Correct"
              : `The safest answer is ${letters[currentQuestion.correctAnswer]}`}
          </Text>
          <Text style={styles.feedbackLabel}>Explanation </Text>
          <Text style={styles.feedbackText}>{currentQuestion.explanation}</Text>
          <Text style={styles.feedbackLabel}>REMEMBER</Text>
          <Text style={styles.feedbackText}>{currentQuestion.remember}</Text>
          <Pressable style={styles.primaryButton} onPress={nextQuestion}>
            <Text style={styles.primaryButtonText}>
              {questionIndex === questions.length - 1
                ? "See results"
                : "Next question"}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8fb" },
  contentContainer: { padding: 20, paddingBottom: 40 },
  eyebrow: {
    color: "#147d92",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 16,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progress: { color: "#527080", fontSize: 14, fontWeight: "700" },
  title: {
    color: "#123044",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    textTransform: "capitalize",
  },
  section: {
    backgroundColor: "#e5f1f3",
    borderLeftColor: "#147d92",
    borderLeftWidth: 4,
    marginBottom: 24,
    padding: 16,
  },
  sectionLabel: {
    color: "#147d92",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 8,
  },
  situation: { color: "#294654", fontSize: 16, lineHeight: 24 },
  question: {
    color: "#123044",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 27,
    marginBottom: 14,
  },
  choices: { gap: 10, marginBottom: 18 },
  choice: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#cbdde3",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 58,
    padding: 12,
  },
  selectedChoice: { backgroundColor: "#147d92", borderColor: "#147d92" },
  correctChoice: { backgroundColor: "#dff3e8", borderColor: "#29965d" },
  wrongChoice: { backgroundColor: "#fce8e7", borderColor: "#c9534f" },
  choiceLetter: {
    backgroundColor: "#e5f1f3",
    borderRadius: 15,
    color: "#147d92",
    fontSize: 15,
    fontWeight: "800",
    marginRight: 12,
    paddingTop: 5,
    textAlign: "center",
    width: 30,
    height: 30,
  },
  selectedChoiceText: { color: "#181616" },
  choiceText: { color: "#294654", flex: 1, fontSize: 15, lineHeight: 21 },
  primaryButton: {
    alignItems: "center",
    backgroundColor: "#123044",
    borderRadius: 8,
    minHeight: 52,
    justifyContent: "center",
    marginTop: 16,
    paddingHorizontal: 20,
  },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "800" },
  disabledButton: { backgroundColor: "#aebfc5" },
  feedback: { borderRadius: 8, padding: 18 },
  correctFeedback: {
    backgroundColor: "#e3f5e9",
    borderColor: "#29965d",
    borderWidth: 1,
  },
  wrongFeedback: {
    backgroundColor: "#fff1e8",
    borderColor: "#d27b43",
    borderWidth: 1,
  },
  feedbackTitle: {
    color: "#123044",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 16,
  },
  feedbackLabel: {
    color: "#147d92",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 8,
    marginBottom: 5,
  },
  feedbackText: { color: "#294654", fontSize: 15, lineHeight: 22 },
  resultCard: {
    alignItems: "center",
    backgroundColor: "#e5f1f3",
    borderRadius: 8,
    padding: 28,
  },
  score: { color: "#147d92", fontSize: 56, fontWeight: "900" },
  resultText: {
    color: "#294654",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    textAlign: "center",
  },
  rememberTitle: {
    color: "#147d92",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 24,
  },
  rememberIcon: {
    color: "#123044",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 12,
    textAlign: "center",
  },
  reminderText: {
    color: "#294654",
    fontSize: 15,
    lineHeight: 25,
    marginTop: 12,
    textAlign: "left",
  },
});
