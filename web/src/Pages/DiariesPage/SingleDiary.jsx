import React from "react";
import { useParams } from "react-router-dom";

import DiaryRegion from "@components/Diaries/DiaryRegion";

const SingleDiary = () => {
  const { region } = useParams();

  return <DiaryRegion region={region} />;
};

export default SingleDiary;
