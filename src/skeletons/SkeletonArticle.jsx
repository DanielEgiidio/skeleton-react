import React from "react";
import Skeleton from "../skeletons/Skeleton";
import "./Skeleton.css";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
