import { v4 as uuid } from "uuid";

export default [
  {
    id: uuid(),
    avatarUrl: "/static/images/avatars/avatar_3.png",
    name: "Ekaterina Tankova",
    phone: "9988776655",
    livingStatus: "Alone",
    aadhar: 991025478963,
    member: "Y",
    address: {
      country: "India",
      state: "Maharshtra",
    },
  },
  {
    id: uuid(),
    address: {
      country: "India",
      state: "Uttar Pradesh",
    },
    avatarUrl: "/static/images/avatars/avatar_4.png",
    livingStatus: "Family",
    aadhar: 991025478964,
    member: "Y",
    name: "Cao Yu",
    phone: "9857463210",
  },
  {
    id: uuid(),
    address: {
      country: "India",
      state: "Madhya Pradesh",
    },
    avatarUrl: "/static/images/avatars/avatar_2.png",
    livingStatus: "Institution",
    aadhar: 991025478965,
    member: "Y",
    name: "Alexa Richardson",
    phone: "9874563210",
  },
  {
    id: uuid(),
    address: {
      country: "India",
      state: "Gujarat",
    },
    avatarUrl: "/static/images/avatars/avatar_5.png",
    name: "Anje Keizer",
    livingStatus: "Alone",
    aadhar: 991025478973,
    member: "N",
    phone: "9871236540",
  },
  {
    id: uuid(),
    address: {
      country: "India",
      state: "Haryana",
    },
    avatarUrl: "/static/images/avatars/avatar_6.png",
    name: "Clarke Gillebert",
    phone: "9870231456",
    livingStatus: "Family",
    aadhar: 991025478752,
    member: "N",
  },
  {
    id: uuid(),
    address: {
      country: "India",
      state: "West Bengal",
    },
    avatarUrl: "/static/images/avatars/avatar_1.png",
    livingStatus: "Institution",
    aadhar: 985025478963,
    member: "N",
    name: "Adam Denisov",
    phone: "8586023409",
  },
];
