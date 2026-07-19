type IUser = {
  success: boolean;
  statusCode?: number;
  message: string;
  data?: {
    user: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updateAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updateAt: string;
      };
    };
  };
};

export type NavbarProps = {
  user: IUser;
};