import React, { VFC } from "react"
import { FaClock, FaShekelSign } from "react-icons/fa";

import { ActivityMetadataProps } from "../lib/types";

const ActivityMetadata: VFC<ActivityMetadataProps> = ({ duration, price }) => (
  <ul>
    {duration && (
      <li>
        <FaClock /> {duration}
      </li>
    )}
    {price && (
      <li>
        <FaShekelSign /> {price}
      </li>
    )}
  </ul>
)

export default ActivityMetadata;