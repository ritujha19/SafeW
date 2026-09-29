import { getAuth } from "firebase/auth";
import { app } from "./firebaseApp";

export { app };
export const auth = getAuth(app);
