export type IPostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
import { LucideIcon, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type IAuthor = {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

export type IComment = {
    id: string;
    content: string;
    status: string;
    postId: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
};

export type IPost = {
    id: string;
    title: string;
    content: string;
    thumbnail: string | null;
    isFeatured: boolean;
    status: IPostStatus;
    tags: string[];
    views: number;
    isPremium: boolean;
    authorId: string;
    author?: IAuthor;
    comments?: IComment[];
    _count?: {
        comments: number;
    };
    createdAt: string;
    updatedAt: string;
};

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}


export interface ISidebarMenu {
  title: string;
  href: string;
  icon: LucideIcon;
}

export type ISidebarItem = {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export interface PostDetailsProps {
  mode : "news" | "premium"
  post: {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    isFeatured: boolean;
    status: string;
    tags: string[];
    views: number;
    isPremium: boolean;
    createdAt: string;
    updatedAt: string;
    authorId: string;
    comments: unknown[];
    _count: {
      comments: number;
    };
  };
}