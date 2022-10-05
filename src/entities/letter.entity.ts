import { Post } from "./post.entity";

export interface Order {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
  posts?: Post[] | null
}

export interface Letter {
  Letter: Order[]
}

