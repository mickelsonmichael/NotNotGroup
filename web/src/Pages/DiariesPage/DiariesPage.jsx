import React from "react";
import { Routes, Route } from "react-router-dom";

import SingleDiary from "./SingleDiary";
import DiaryList from "./DiaryList";

const DiariesPage = () => (
  <Routes>
    <Route path=":region/:playerName" element={<SingleDiary />} />
    <Route path="" element={<DiaryList />} />
  </Routes>
);

export default DiariesPage;
