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
    remember: "You don't need absolute proof before taking a reasonable step toward safety.",
  },
  {
    title: "Someone blocks your path",
    situation: "Someone you don't know deliberately stands in your way and makes you uncomfortable.",
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
    remember: "Your priority is getting to safety, not winning a confrontation.",
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
    remember: "When choosing between routes, think about visibility, people and access to help, not just distance.",
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
    remember: "Someone else's demand for secrecy does not take away your right to seek help.",
  },
  {
    title: "Pressure for private photos",
    situation: "Someone repeatedly asks you for private photos even after you have said no.",
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
    remember: "Trust does not require giving someone access to your private accounts.",
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
    situation: "You block someone because their messages are unwanted. They start contacting you through new accounts.",
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
    remember: "Repeated unwanted contact through different accounts can be a warning sign.",
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
    remember: "A little preparation before leaving can give you more options if something goes wrong.",
  },
  {
    title: "Your phone is almost dead",
    situation: "You are going somewhere unfamiliar and notice your phone battery is almost empty.",
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
    situation: "You are going somewhere unfamiliar, and nobody you trust knows your plans.",
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
    remember: "A trusted person knowing your plans can make it easier to get help if you need it.",
  },
  {
    title: "Something feels wrong",
    situation: "You are in a situation that suddenly makes you feel unsafe, but you cannot explain exactly why.",
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
    remember: "You don't need to prove that something is dangerous before choosing a safer option.",
  },
  {
    title: "Safe places are closed",
    situation: "You are outside later than expected. The places you normally rely on for help are closed.",
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
    situation: "You are in a situation that feels unsafe, but you cannot immediately get away.",
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

function ProgressBar({ progress }: { progress: number }) {
  const width = useSharedValue(progress);
  useEffect(() => {
    width.value = withTiming(progress, { duration: 320 });
  }, [progress, width]);
  const style = useAnimatedStyle(() => ({ width: `${width.value * 100}%` }));
  return (
    <View className="h-2 overflow-hidden rounded-full bg-dusk-100">
      <Animated.View style={style} className="h-full rounded-full bg-dusk-600" />
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
          <LottieAnim source={lottie.successCheck} size={84} loop={false} />
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

        <Button label="Start again" icon="refresh" className="mt-5" onPress={restartQuiz} />
        <Button
          variant="outline"
          label="Back to Learn & Prepare"
          className="mt-3"
          onPress={() => router.navigate("/learn")}
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

      <Animated.View key={questionIndex} entering={FadeInRight.duration(280)} className="mt-5">
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
            const badgeTextClass = isAnswer || isWrong || isSelected ? "text-white" : "text-dusk-600";

            return (
              <Pressable
                key={choice}
                disabled={checked}
                onPress={() => setSelectedAnswer(index)}
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected, disabled: checked }}
                className={`flex-row items-center rounded-2xl border-[1.5px] p-3.5 ${rowClass}`}
              >
                <View className={`mr-3 h-8 w-8 items-center justify-center rounded-full ${badgeClass}`}>
                  <Text className={`font-bodyBold text-[14px] ${badgeTextClass}`}>{letters[index]}</Text>
                </View>
                <Body tone="ink" size="sm" className="flex-1">
                  {choice}
                </Body>
                {isAnswer ? (
                  <Ionicons name="checkmark-circle" size={20} color={colors.havenDark} />
                ) : null}
                {isWrong ? <Ionicons name="close-circle" size={20} color={colors.beaconDark} /> : null}
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
                <LottieAnim source={lottie.successCheck} size={30} loop={false} />
              ) : (
                <Ionicons name="alert-circle" size={26} color={colors.marigoldDark} />
              )}
              <Heading size="lg" tone={isCorrect ? "haven" : "marigold"} className="ml-2 flex-1">
                {isCorrect ? "Correct" : `The safest answer is ${letters[currentQuestion.correctAnswer]}`}
              </Heading>
            </View>
            <Label tone={isCorrect ? "haven" : "marigold"} className="mb-1 mt-4">
              EXPLANATION
            </Label>
            <Body size="sm" tone="ink">
              {currentQuestion.explanation}
            </Body>
            <Label tone={isCorrect ? "haven" : "marigold"} className="mb-1 mt-4">
              REMEMBER
            </Label>
            <Body size="sm" tone="ink">
              {currentQuestion.remember}
            </Body>
            <Button
              label={questionIndex === questions.length - 1 ? "See results" : "Next question"}
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
