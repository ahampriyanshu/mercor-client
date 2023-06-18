import {
  Category,
  Message,
  Profile2User,
  Setting2,
  TaskSquare,
} from "iconsax-react";

import card1 from "/card-1.jpg";
import card2 from "/card-2.jpg";
import profile1 from "/profile-1.png";
import profile2 from "/profile-2.png";
import profile3 from "/profile-3.png";
import profile4 from "/profile-4.png";
import profile5 from "/profile-5.png";
import profile6 from "/profile-6.png";

export const linkData = [
  {
    id: 1,
    text: "Home",
    path: "/",
    icon: <Category />,
  },
  {
    id: 2,
    text: "Messages",
    path: "/messages",
    icon: <Message />,
  },
  {
    id: 3,
    text: "Tasks",
    path: "/tasks",
    icon: <TaskSquare />,
  },
  {
    id: 4,
    text: "Members",
    path: "/memebers",
    icon: <Profile2User />,
  },
  {
    id: 5,
    text: "Settings",
    path: "/settings",
    icon: <Setting2 />,
  },
];

export const profileData = [
  {
    id: 1,
    text: "mobile app",
    color: "#7AC555",
  },
  {
    id: 2,
    text: "website redesign",
    color: "#FFA500",
  },
  {
    id: 3,
    text: "design system",
    color: "#E4CCFD",
  },
  {
    id: 4,
    text: "wireframes",
    color: "#76A5EA",
  },
];

export const cardData = [
  {
    id: 1,
    title: "to do",
    identityColor: "#5030E5",
    count: 4,
    tasks: [
      {
        id: 31,
        priority: "low",
        title: "Brainstorming",
        image: null,
        description: `Brainstorming brings team members' diverse experience into play. `,
        comments: 12,
        files: 0,
        users: [
          {
            image: profile5,
          },
          {
            image: profile2,
          },
          {
            image: profile3,
          },
        ],
      },
      {
        id: 32,
        priority: "high",
        title: "Research",
        image: null,
        description: `User research helps you to create an optimal product for users. `,
        comments: 10,
        files: 3,
        users: [
          {
            image: profile4,
          },
          {
            image: profile6,
          },
        ],
      },
      {
        id: 33,
        priority: "high",
        title: "Wireframes",
        image: null,
        description: `Low fidelity wireframes include the most basic content and visuals.. `,
        comments: 12,
        files: 13,
        users: [
          {
            image: profile5,
          },
          {
            image: profile2,
          },
          {
            image: profile3,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "on progress",
    identityColor: "#FFA500",
    count: 3,
    tasks: [
      {
        id: 45,
        priority: "low",
        title: "Onboarding Illustrations ",
        image: card1,
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            image: profile3,
          },
          {
            image: profile2,
          },
          {
            image: profile5,
          },
        ],
      },
      {
        id: 46,
        priority: "low",
        title: "Moodboard",
        image: null,
        description: null,
        comments: 9,
        files: 10,
        users: [
          {
            image: profile3,
          },
        ],
      },
      {
        id: 47,
        priority: "high",
        title: "Onboarding Illustrations ",
        image: null,
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            image: profile5,
          },
          {
            image: profile2,
          },
          {
            image: profile3,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "done",
    identityColor: "#8BC48A",
    count: 2,
    tasks: [
      {
        id: 73,
        priority: "completed",
        title: "Mobile App Design",
        image: card2,
        description: null,
        comments: 12,
        files: 15,
        users: [
          {
            image: profile6,
          },
          {
            image: profile2,
          },
        ],
      },
      {
        id: 74,
        priority: "completed",
        title: "Design System",
        image: null,
        description: `It just needs to adapt the UI from what you did before `,
        comments: 12,
        files: 15,
        users: [
          {
            image: profile5,
          },
          {
            image: profile2,
          },
          {
            image: profile3,
          },
        ],
      },
    ],
  },
];
