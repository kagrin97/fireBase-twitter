import { User } from "firebase/auth";

export type FirebaseUser = User;

export interface Comments {
  attachmentUrl: string;
  createdAt: number;
  creatorId: string;
  id: number;
  nickname: string;
  photoUrl: string;
  text: string;
}
