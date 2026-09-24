// "Lantern" palette: deep indigo dusk + marigold light. Red is reserved for SOS.
// Keep these in sync with tailwind.config.js (they are the same values).
export const colors = {
  midnight: "#14163B",
  paper: "#F4F5FB",
  mist: "#E3E5F1",
  muted: "#5A5F85",
  dusk: {
    50: "#F0EFFE",
    100: "#E1DFFC",
    200: "#C6C2F8",
    300: "#A29BF1",
    400: "#7F75E8",
    500: "#5F53DE",
    600: "#4A3DCB",
    700: "#3B30A8",
    800: "#2E2683",
    900: "#1F1B5A",
  },
  marigold: "#FFB020",
  marigoldSoft: "#FFF3D6",
  marigoldDark: "#7A4F00",
  beacon: "#E42A40",
  beaconDark: "#B81C33",
  beaconSoft: "#FFE9EC",
  haven: "#12A38A",
  havenSoft: "#DFF5F0",
  havenDark: "#0B6B5B",
} as const;

export const shadow = {
  lift: {
    shadowColor: "#14163B",
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  sos: {
    shadowColor: "#B81C33",
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
} as const;
