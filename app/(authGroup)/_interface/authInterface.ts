

export type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

// register interface
export type Profile = {
  id: string;
  profilePhoto: string;
  bio: string;
  userId: string;
  createdAt: string;
  updateAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  activeStatus: "ACTIVE" | "BLOCKED";
  role: "USER" | "AUTHOR" | "ADMIN";
  createdAt: string;
  updateAt: string;
  profile: Profile;
};

export type RegisterState = {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: {
    user: User;
  };
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    profilePhoto?: string[];
    bio?: string[];
  };
};