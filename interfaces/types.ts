// this file is contains shared interfaces/types in a separate file
// and then use them in any component by importing them.

export type User = {
  id: number;
  name: string;
};

export type TrendingResult = {
  heading: string;
  description: string;
  img: string;
  tags: string[];
};

export type FollowResult = {
  userImg: string;
  username: string;
  tag: string;
};
