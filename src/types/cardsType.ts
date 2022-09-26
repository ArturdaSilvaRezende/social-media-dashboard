export type Cards = {
  id: number;
  social: string;
  alt: string;
  user: string;
  followersNumber: number | string;
  followersString: string;
  caret: string;
  today: string;
};

export type CardsOverview = {
  id: number;
  description: string;
  icon: string;
  alt: string;
  descriptionNumber: number | string;
  caret: string;
  percentage: number;
};
