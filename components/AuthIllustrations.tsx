import Svg, { Circle, Ellipse, Path, Rect } from "react-native-svg";
import { View } from "react-native";
import { colors } from "@/constants/theme";

const hideFromA11y = {
  accessibilityElementsHidden: true,
  importantForAccessibility: "no-hide-descendants" as const,
};

/**
 * Hand-built in the app's own palette rather than pulled from Storyset:
 * this sandbox has no network access, so a real Storyset download isn't
 * possible here. Swap either component for an <Illustration source={...} />
 * once you've picked and exported PNGs from storyset.com — see
 * constants/media.ts.
 */
export function LoginIllustration({ height = 180 }: { height?: number }) {
  return (
    <View style={{ height, alignItems: "center", justifyContent: "center" }} {...hideFromA11y}>
      <Svg width="100%" height={height} viewBox="0 0 400 260">
        {/* backdrop */}
        <Ellipse cx={200} cy={150} rx={170} ry={95} fill={colors.dusk[50]} />
        <Circle cx={322} cy={58} r={34} fill={colors.marigoldSoft} opacity={0.9} />
        <Circle cx={68} cy={202} r={26} fill={colors.dusk[100]} />
        {/* ground shadow */}
        <Ellipse cx={230} cy={236} rx={82} ry={12} fill={colors.dusk[200]} opacity={0.5} />
        {/* phone */}
        <Rect x={185} y={55} width={100} height={185} rx={22} fill={colors.midnight} />
        <Rect x={195} y={75} width={80} height={145} rx={10} fill={colors.paper} />
        <Circle cx={235} cy={65} r={2.5} fill={colors.dusk[400]} />
        <Circle cx={235} cy={145} r={26} fill={colors.marigold} />
        <Path
          d="M223 145 L232 154 L249 134"
          stroke="#FFFFFF"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* person, reaching toward the phone */}
        <Rect x={55} y={150} width={90} height={110} rx={45} fill={colors.dusk[600]} />
        <Circle cx={100} cy={130} r={34} fill={colors.dusk[700]} />
        <Circle cx={165} cy={175} r={14} fill={colors.dusk[700]} />
        {/* sparkles */}
        <Circle cx={330} cy={182} r={4} fill={colors.marigold} />
        <Rect x={54} y={84} width={10} height={2.4} rx={1.2} fill={colors.marigold} />
        <Rect x={57.8} y={80.2} width={2.4} height={10} rx={1.2} fill={colors.marigold} />
      </Svg>
    </View>
  );
}

export function SignupIllustration({ height = 180 }: { height?: number }) {
  return (
    <View style={{ height, alignItems: "center", justifyContent: "center" }} {...hideFromA11y}>
      <Svg width="100%" height={height} viewBox="0 0 400 260">
        {/* backdrop */}
        <Ellipse cx={200} cy={150} rx={170} ry={95} fill={colors.havenSoft} />
        <Circle cx={92} cy={54} r={30} fill={colors.marigoldSoft} opacity={0.9} />
        <Circle cx={332} cy={206} r={24} fill={colors.dusk[100]} />
        {/* ground shadow */}
        <Ellipse cx={255} cy={236} rx={82} ry={12} fill={colors.dusk[200]} opacity={0.5} />
        {/* clipboard */}
        <Rect x={205} y={55} width={105} height={150} rx={14} fill="#FFFFFF" stroke={colors.dusk[100]} strokeWidth={2} />
        <Rect x={240} y={48} width={35} height={14} rx={6} fill={colors.dusk[300]} />
        <Rect x={222} y={90} width={70} height={8} rx={4} fill={colors.dusk[100]} />
        <Rect x={222} y={112} width={55} height={8} rx={4} fill={colors.dusk[100]} />
        <Rect x={222} y={134} width={62} height={8} rx={4} fill={colors.dusk[100]} />
        {/* checkmark badge */}
        <Circle cx={290} cy={165} r={22} fill={colors.haven} />
        <Path
          d="M280 165 L287 172 L302 152"
          stroke="#FFFFFF"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* person, adding to the list */}
        <Rect x={55} y={150} width={90} height={110} rx={45} fill={colors.dusk[600]} />
        <Circle cx={100} cy={130} r={34} fill={colors.dusk[700]} />
        <Circle cx={175} cy={170} r={14} fill={colors.dusk[700]} />
        {/* plus badge */}
        <Rect x={330} y={68} width={20} height={4} rx={2} fill={colors.marigold} />
        <Rect x={338} y={60} width={4} height={20} rx={2} fill={colors.marigold} />
      </Svg>
    </View>
  );
}
