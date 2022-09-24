import { Light } from "@mui/icons-material";
import React, { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import Images from "./Images";

const CaptionPattern = new RegExp(/(?:.*)?[\/\\](.+)\..+/, "i");
const getCaption = (path) => {
  if (!path) return "";

  const [_, name] = CaptionPattern.exec(path);

  return name.charAt(0).toUpperCase() + name.replace(/_/g, " ").substr(1);
};

const AchievementGallery = () => {
  const [i, setI] = useState(-1);

  const currentImage = useMemo(() => Images[i], [i]);
  const currentCaption = useMemo(
    () => (currentImage == null ? "" : getCaption(currentImage.src)),
    [currentImage]
  );
  const next = useMemo(() => (i + 1) % Images.length, [i]);
  const nextImg = useMemo(() => Images[next] || currentImage, [i]);
  const prev = useMemo(() => (i + Images.length - 1) % Images.length, [i]);
  const prevImg = useMemo(() => Images[prev] || currentImage, [i]);

  const handleClick = useCallback((i) => setI(i), [setI]);
  const handleClose = () => setI(-1);
  const handlePrev = useCallback(() => setI(prev), [prev]);
  const handleNext = useCallback(() => setI(next), [next]);

  return (
    <div>
      <Gallery
        images={Images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {currentImage != null && (
        <Lightbox
          mainSrc={currentImage.src}
          nextSrc={nextImg.src}
          prevSrc={prevImg.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handlePrev}
          onMoveNextRequest={handleNext}
          imageCaption={currentCaption}
        />
      )}
    </div>
  );
};

export default AchievementGallery;
