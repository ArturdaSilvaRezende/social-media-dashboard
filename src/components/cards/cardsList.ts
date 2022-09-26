import { Cards, CardsOverview } from "../../types/cardsType";
import IconFacebook from "./img/icon-facebook.svg";
import IconTwitter from "./img/icon-twitter.svg";
import IconInstagram from "./img/icon-instagram.svg";
import IconYouTube from "./img/icon-youtube.svg";
import IconCaretUp from "./img/icon-up.svg";
import IconCaretDown from "./img/icon-down.svg";

export const cardsList: Cards[] = [
  {
    id: 1,
    social: `${IconFacebook}`,
    alt: "Icon-Facebook",
    user: "@nathanf",
    followersNumber: 1987,
    followersString: "Followers",
    caret: `${IconCaretUp}`,
    today: "12 Today",
  },
  {
    id: 2,
    social: `${IconTwitter}`,
    alt: "Icon-Twitter",
    user: "@nathanf",
    followersNumber: 1044,
    followersString: "Followers",
    caret: `${IconCaretUp}`,
    today: "99 Today",
  },
  {
    id: 3,
    social: `${IconInstagram}`,
    alt: "Icon-Instagram",
    user: "@realnathanf",
    followersNumber: "11k",
    followersString: "Followers",
    caret: `${IconCaretUp}`,
    today: "1099 Today",
  },
  {
    id: 4,
    social: `${IconYouTube}`,
    alt: "Icon-Youtube",
    user: "Nathan F.",
    followersNumber: 8239,
    followersString: "Subscribers",
    caret: `${IconCaretDown}`,
    today: " 144 Today",
  },
];

export const cardsListOverview: CardsOverview[] = [
  {
    id: 1,
    description: "Page Views",
    icon: `${IconFacebook}`,
    alt: "Icon-Facebook",
    descriptionNumber: 87,
    caret: `${IconCaretUp}`,
    percentage: 3,
  },
  {
    id: 2,
    description: "Likes",
    icon: `${IconFacebook}`,
    alt: "Icon-Facebook",
    descriptionNumber: 52,
    caret: `${IconCaretDown}`,
    percentage: 2,
  },
  {
    id: 3,
    description: "Likes",
    icon: `${IconInstagram}`,
    alt: "Icon-Instagram",
    descriptionNumber: 5462,
    caret: `${IconCaretUp}`,
    percentage: 2257,
  },
  {
    id: 4,
    description: "Profile Views",
    icon: `${IconInstagram}`,
    alt: "Icon-Instagram",
    descriptionNumber: "52k",
    caret: `${IconCaretUp}`,
    percentage: 1375,
  },
  {
    id: 5,
    description: "Retweets",
    icon: `${IconTwitter}`,
    alt: "Icon-Twitter",
    descriptionNumber: 117,
    caret: `${IconCaretUp}`,
    percentage: 303,
  },
  {
    id: 6,
    description: "Likes",
    icon: `${IconTwitter}`,
    alt: "Icon-Twitter",
    descriptionNumber: 507,
    caret: `${IconCaretUp}`,
    percentage: 553,
  },
  {
    id: 7,
    description: "Likes",
    icon: `${IconYouTube}`,
    alt: "Icon-Youtube",
    descriptionNumber: 107,
    caret: `${IconCaretDown}`,
    percentage: 19,
  },
  {
    id: 8,
    description: "Total Views",
    icon: `${IconYouTube}`,
    alt: "Icon-Youtube",
    descriptionNumber: 1407,
    caret: `${IconCaretDown}`,
    percentage: 12,
  },
];
