import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Block } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { LottieAnim } from "@/components/Media";
import { Screen } from "@/components/Screen";
import { Body, Display, Heading, Label } from "@/components/Typography";
import { lottie } from "@/constants/media";
import { colors } from "@/constants/theme";

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
      "You notice the same person following you for several minutes while you are walking home.",
    question: "What is the safest response?",
    choices: [
      "Confront the person and demand an explanation",
      "Move toward a busy, well-lit place and contact someone you trust",
      "Continue walking normally so they do not know you noticed",
      "Take a shortcut through a quiet area",
    ],
    correctAnswer: 1,
    explanation:
      "Moving toward people and getting help can reduce your isolation and give you safer options.",
    remember: "Notice → Move → Tell.",
  },

  {
    title: "Someone blocks your path",
    situation:
      "Someone suddenly blocks your path and refuses to let you pass.",
    question: "What should you focus on first?",
    choices: [
      "Creating distance and looking for a safe way to leave",
      "Arguing until they move",
      "Proving that you are not afraid",
      "Staying there to understand their intention",
    ],
    correctAnswer: 0,
    explanation:
      "Your priority is creating an opportunity to reach safety rather than winning an argument.",
    remember: "Your safety comes before proving a point.",
  },

  {
    title: "An isolated shortcut",
    situation:
      "You are travelling home and someone suggests taking an isolated shortcut because it will save ten minutes.",
    question: "What should you consider?",
    choices: [
      "Take it because reaching home faster is always safer",
      "Follow the person because they know the area",
      "Choose a route with people, lighting, and accessible help",
      "Take the shortcut but avoid using your phone",
    ],
    correctAnswer: 2,
    explanation:
      "A slightly longer route can provide more access to people and help if something goes wrong.",
    remember: "Choose safer surroundings over a shorter route.",
  },

  {
    title: "A secret that feels unsafe",
    situation:
      "Someone tells you to keep a threatening or uncomfortable incident secret from your family and friends.",
    question: "What should you do?",
    choices: [
      "Keep it secret unless the situation becomes serious",
      "Delete all messages so nobody finds out",
      "Promise not to tell anyone",
      "Tell a trusted person and explain what happened",
    ],
    correctAnswer: 3,
    explanation:
      "Pressure to keep a safety-related incident secret can make it harder to get support.",
    remember: "You do not have to handle an unsafe situation alone.",
  },

  {
    title: "Pressure for private photos",
    situation:
      "Someone you know repeatedly pressures you to send private photos and says they will become angry if you refuse.",
    question: "What is the safest response?",
    choices: [
      "Send one photo so they stop asking",
      "Keep negotiating with them",
      "Do not send the photos and seek help from someone you trust",
      "Threaten them with the same thing",
    ],
    correctAnswer: 2,
    explanation:
      "Pressure or threats do not make sharing private material safe. Getting support can help you handle the situation.",
    remember: "Pressure is not consent.",
  },

  {
    title: "A suspicious social-media account",
    situation:
      "A new social-media account uses your name and photos and starts contacting people you know.",
    question: "What should you do first?",
    choices: [
      "Collect evidence, report the account, and tell a trusted person",
      "Create another fake account to confront them",
      "Give the account your personal details to verify who they are",
      "Meet the person behind the account",
    ],
    correctAnswer: 0,
    explanation:
      "Keeping evidence and using platform reporting and trusted support are safer than confronting an unknown person.",
    remember: "Save evidence before blocking or reporting when possible.",
  },

  {
    title: "Someone asks for your password",
    situation:
      "Someone you know asks for your social-media password and says they need it because they care about you.",
    question: "What is the safer choice?",
    choices: [
      "Give it to them temporarily",
      "Share it only if they promise not to change anything",
      "Give them your recovery email instead",
      "Keep your password private and use strong account security",
    ],
    correctAnswer: 3,
    explanation:
      "Passwords should remain private. Account security should not depend on another person's promises.",
    remember: "Keep passwords private.",
  },

  {
    title: "Pressure to share live location",
    situation:
      "Someone you recently met online keeps demanding your live location and becomes angry when you refuse.",
    question: "What should you do?",
    choices: [
      "Send it so they do not become suspicious",
      "Stop sharing your location and seek support if the pressure continues",
      "Share it only when you are outside",
      "Meet them in person to discuss it",
    ],
    correctAnswer: 1,
    explanation:
      "You do not need to share your live location with someone who pressures or intimidates you.",
    remember: "Location sharing should be your choice.",
  },

  {
    title: "Morphed or fake images",
    situation:
      "You discover that an edited or morphed image using your face has been shared online without your permission.",
    question: "What is the safest next step?",
    choices: [
      "Meet the person responsible and demand that they delete it",
      "Share the image publicly to expose them",
      "Preserve relevant evidence and report the account or incident",
      "Ignore it because online posts disappear quickly",
    ],
    correctAnswer: 2,
    explanation:
      "Preserving evidence and reporting the incident can help when dealing with online abuse or impersonation.",
    remember: "Document → Report → Seek support.",
  },

  {
    title: "Threatening online messages",
    situation:
      "A person repeatedly sends threatening messages from different accounts after you stop responding to them.",
    question: "What should you prioritize?",
    choices: [
      "Keep replying so you know what they want",
      "Threaten them back",
      "Arrange a meeting to settle the issue",
      "Preserve the messages and tell a trusted person",
    ],
    correctAnswer: 3,
    explanation:
      "Repeated threats from multiple accounts should not be handled through escalating online arguments.",
    remember: "Do not escalate. Preserve evidence and seek help.",
  },

  {
    title: "An unexpected ride",
    situation:
      "A person you know offers you a ride home, but they suddenly change the route and you become uncomfortable.",
    question: "What should you do?",
    choices: [
      "Stay silent because you know the person",
      "Ask them to stop somewhere safe and contact someone you trust",
      "Wait until you reach the destination",
      "Argue with them while the vehicle is moving",
    ],
    correctAnswer: 1,
    explanation:
      "If you become uncomfortable during a journey, focus on reaching a safer location and getting support.",
    remember: "Trust your warning signs and seek a safer place.",
  },

  {
    title: "Your phone is almost dead",
    situation:
      "You are travelling alone and your phone battery is almost dead while you are still some distance from home.",
    question: "What should you do?",
    choices: [
      "Continue without telling anyone because your phone may last",
      "Turn off your phone immediately and walk through a shortcut",
      "Use the remaining battery to contact someone and plan a safer route",
      "Give your phone to a stranger for charging",
    ],
    correctAnswer: 2,
    explanation:
      "When your battery is low, use the remaining power strategically to communicate and reach safety.",
    remember: "Use limited battery for essential communication.",
  },

  {
    title: "Someone shares your personal details",
    situation:
      "You discover that someone has posted your phone number and other personal details online without your permission.",
    question: "What should you do?",
    choices: [
      "Publicly post their personal details in return",
      "Save evidence, report the content, and tell someone you trust",
      "Contact every person who viewed the post",
      "Ignore it because the information is already public",
    ],
    correctAnswer: 1,
    explanation:
      "Sharing personal details without permission can create safety and privacy risks. Preserve evidence and seek support.",
    remember: "Do not retaliate. Document and report.",
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
      "You notice a situation becoming uncomfortable or unsafe.",
    question: "Which SAFEW approach best matches what you have learned?",
    choices: [
      "Ignore warning signs and wait for the situation to improve",
      "Notice the warning signs, move toward safety, and tell someone you trust",
      "Confront the person immediately to show confidence",
      "Handle everything alone so nobody worries",
    ],
    correctAnswer: 1,
    explanation:
      "SAFEW focuses on recognizing warning signs early, moving toward safer surroundings, and getting support.",
    remember: "Notice → Move → Tell.",
  },
];

const letters = ["A", "B", "C", "D"];

function ProgressBar({ progress }: { progress: number }) {
  const width = useSharedValue(progress);
  useEffect(() => {
    width.value = withTiming(progress, { duration: 320 });
  }, [progress, width]);
  const style = useAnimatedStyle(() => ({ width: `${width.value * 100}%` }));
  return (
    <View className="h-2 overflow-hidden rounded-full bg-dusk-100">
      <Animated.View
        style={style}
        className="h-full rounded-full bg-dusk-600"
      />
    </View>
  );
}

export default function PrepareYourself() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion = questions[questionIndex];
  const isComplete = questionIndex === questions.length;
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setChecked(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectCount((count) => count + 1);
    }
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
    setCorrectCount(0);
  };

  if (isComplete) {
    return (
      <Screen>
        <View className="items-center rounded-[32px] bg-midnight px-6 py-10">
          <View className="mb-3 h-16 w-16 items-center justify-center rounded-full bg-haven-soft">
            <Ionicons
              name="checkmark-circle"
              size={42}
              color={colors.havenDark}
            />
          </View>
          <Label tone="marigold" className="mt-1">
            QUIZ COMPLETE
          </Label>
          <Display size="lg" tone="white" className="mt-2 text-center">
            You completed Prepare Yourself
          </Display>
          <Text className="mt-4 font-display text-[46px] leading-[50px] text-marigold">
            {correctCount}/{questions.length}
          </Text>
          <Body tone="soft" size="sm" className="text-center">
            correct on the first try
          </Body>
        </View>

        <View className="mt-5 rounded-[28px] border border-mist bg-white p-6">
          <Heading size="lg" className="mb-3 text-center">
            🛡️ Notice → Move → Tell
          </Heading>
          <Body size="sm">
            NOTICE — Recognize what is happening.{"\n"}
            MOVE — Move toward safety when possible.{"\n"}
            TELL — Reach out to someone you trust or seek help.
          </Body>
        </View>

        <Button
          label="Start again"
          icon="refresh"
          className="mt-5"
          onPress={restartQuiz}
        />
        <Button
          variant="outline"
          label="Back to Learn & Prepare"
          className="mt-3"
          onPress={() => router.dismissTo("/learn")}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <Label tone="dusk" className="mb-2">
        SAFE-W · PREPARE YOURSELF
      </Label>
      <Body size="sm" weight="bold" tone="ink" className="mb-1">
        Question {questionIndex + 1} of {questions.length}
      </Body>
      <ProgressBar progress={questionIndex / questions.length} />

      <Animated.View
        key={questionIndex}
        entering={FadeInRight.duration(280)}
        className="mt-5"
      >
        <Display size="md" className="mb-3">
          {currentQuestion.title}
        </Display>

        <Block label="Situation" tone="story">
          {currentQuestion.situation}
        </Block>

        <Heading size="lg" className="mb-3 mt-4">
          {currentQuestion.question}
        </Heading>

        <View className="gap-2.5">
          {currentQuestion.choices.map((choice, index) => {
            const isSelected = selectedAnswer === index;
            const isAnswer = checked && index === currentQuestion.correctAnswer;
            const isWrong = checked && isSelected && !isAnswer;
            const rowClass = isAnswer
              ? "border-haven bg-haven-soft"
              : isWrong
                ? "border-beacon bg-beacon-soft"
                : isSelected
                  ? "border-dusk-600 bg-dusk-50"
                  : "border-mist bg-white";
            const badgeClass = isAnswer
              ? "bg-haven"
              : isWrong
                ? "bg-beacon"
                : isSelected
                  ? "bg-dusk-600"
                  : "bg-dusk-50";
            const badgeTextClass =
              isAnswer || isWrong || isSelected
                ? "text-white"
                : "text-dusk-600";

            return (
              <Pressable
                key={choice}
                disabled={checked}
                onPress={() => setSelectedAnswer(index)}
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected, disabled: checked }}
                className={`flex-row items-center rounded-2xl border-[1.5px] p-3.5 ${rowClass}`}
              >
                <View
                  className={`mr-3 h-8 w-8 items-center justify-center rounded-full ${badgeClass}`}
                >
                  <Text
                    className={`font-bodyBold text-[14px] ${badgeTextClass}`}
                  >
                    {letters[index]}
                  </Text>
                </View>
                <Body tone="ink" size="sm" className="flex-1">
                  {choice}
                </Body>
                {isAnswer ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={colors.havenDark}
                  />
                ) : null}
                {isWrong ? (
                  <Ionicons
                    name="close-circle"
                    size={20}
                    color={colors.beaconDark}
                  />
                ) : null}
              </Pressable>
            );
          })}
        </View>

        {!checked ? (
          <Button
            label="Check answer"
            disabled={selectedAnswer === null}
            className="mt-5"
            onPress={checkAnswer}
          />
        ) : (
          <Animated.View
            entering={FadeIn.duration(220)}
            className={`mt-5 rounded-[26px] p-5 ${isCorrect ? "bg-haven-soft" : "bg-marigold-soft"}`}
          >
            <View className="flex-row items-center">
              {isCorrect ? (
                <LottieAnim
                  source={lottie.successCheck}
                  size={30}
                  loop={false}
                />
              ) : (
                <Ionicons
                  name="alert-circle"
                  size={26}
                  color={colors.marigoldDark}
                />
              )}
              <Heading
                size="lg"
                tone={isCorrect ? "haven" : "marigold"}
                className="ml-2 flex-1"
              >
                {isCorrect
                  ? "Correct"
                  : `The safest answer is ${letters[currentQuestion.correctAnswer]}`}
              </Heading>
            </View>
            <Label
              tone={isCorrect ? "haven" : "marigold"}
              className="mb-1 mt-4"
            >
              EXPLANATION
            </Label>
            <Body size="sm" tone="ink">
              {currentQuestion.explanation}
            </Body>
            <Label
              tone={isCorrect ? "haven" : "marigold"}
              className="mb-1 mt-4"
            >
              REMEMBER
            </Label>
            <Body size="sm" tone="ink">
              {currentQuestion.remember}
            </Body>
            <Button
              label={
                questionIndex === questions.length - 1
                  ? "See results"
                  : "Next question"
              }
              icon="arrow-forward"
              className="mt-5"
              onPress={nextQuestion}
            />
          </Animated.View>
        )}
      </Animated.View>
    </Screen>
  );
}
