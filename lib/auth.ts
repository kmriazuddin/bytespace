import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { firebaseAuth } from "./firebase";

function requireAuth() {
  if (!firebaseAuth)
    throw new Error(
      "Firebase Authentication is not configured. Add the Firebase values to .env.local.",
    );
  return firebaseAuth;
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const credential = await createUserWithEmailAndPassword(
    requireAuth(),
    email,
    password,
  );
  if (name.trim())
    await updateProfile(credential.user, { displayName: name.trim() });
  return credential.user;
}

export function loginUser(email: string, password: string) {
  return signInWithEmailAndPassword(requireAuth(), email, password);
}

export function logoutUser() {
  return signOut(requireAuth());
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  if (!firebaseAuth) {
    callback(null);
    return () => undefined;
  }
  return onAuthStateChanged(firebaseAuth, callback);
}
