export interface SetTokensPayload {
  accessToken: string;
  refreshToken: string;
}

export interface ProfileData {
  userId: string;
  profileId: string;
  firstName: string;
  lastName: string;
  surname?: string | null;
  isSuperAdmin: boolean;
}
