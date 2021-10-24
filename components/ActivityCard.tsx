import React, { VFC } from "react";
import { FaClock, FaShekelSign } from "react-icons/fa";

import { ActivityCardProps } from "../lib/types";
import Card from "./Card";

const ActivityCard: VFC<ActivityCardProps> = ({ item }) => (
  <Card item={item}>
    <ul>
      {item.frontmatter.duration && (
        <li>
          <FaClock /> {item.frontmatter.duration}
        </li>
      )}
      {item.frontmatter.price && (
        <li>
          <FaShekelSign /> {item.frontmatter.price}
        </li>
      )}
    </ul>
  </Card>
);

export default ActivityCard;
