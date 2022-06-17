import React from "react";
import Skeleton from "./Skeleton";

const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <Skeleton type="avatar" />
        </div>
        <div>
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
