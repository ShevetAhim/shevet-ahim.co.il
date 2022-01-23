import React, { VFC } from "react";

import { ActivityCardProps } from "../lib/types";
import Card from "./Card";
import ActivityMetadata from "./ActivityMetadata";

const ActivityCard: VFC<ActivityCardProps> = ({ item }) => (
  <Card item={item}>
    <ActivityMetadata
      duration={item.frontmatter.duration}
      price={item.frontmatter.price}
    />
  </Card>
);

export default ActivityCard;
