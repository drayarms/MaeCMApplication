import React, { useMemo, useState, useEffect, useRef } from "react";
import { resolveImagePath } from "../utils/resolveImagePath";

const images = [
  "c5b69340-d7f1-4663-9b4f-c0ad92057ee4-min.jpg",
  "26b8fbe3-ab46-42b0-819c-c087bd34326f-min.jpg",
  "IMG_8244.jpeg",
  "IMG_8234.jpeg",
  "IMG_2087-min.jpeg",
  "IMG_1888-min.jpeg",
  "IMG_1815-min.jpeg",
  "IMG_6441-min-scaled.jpg"
];

export default function ImageCarousel() {
  // rendered track: [last, ...realImages, first]
  const trackImages = useMemo(() => {
    if (!images.length) return [];
    return [images[images.length - 1], ...images, images[0]];
  }, []);

  // index into trackImages (start at 1 = first real image)
  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const trackRef = useRef(null);

  // If images array ever changes size (unlikely here), reset safely.
  useEffect(() => {
    setIndex(1);
    setWithTransition(true);
    setIsAnimating(false);
  }, [trackImages.length]);

  const handlePrev = () => {
    if (isAnimating || trackImages.length < 2) return;
    setIsAnimating(true);
    setWithTransition(true);
    setIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (isAnimating || trackImages.length < 2) return;
    setIsAnimating(true);
    setWithTransition(true);
    setIndex((i) => i + 1);
  };

  const handleTransitionEnd = () => {
    // We slid onto the left clone (index 0) => snap to last real image
    if (index === 0) {
      setWithTransition(false);
      setIndex(images.length); // last real image in track (because track is [cloneLast, ...images, cloneFirst])
      // allow next click immediately after snap
      requestAnimationFrame(() => setIsAnimating(false));
      return;
    }

    // We slid onto the right clone (index images.length + 1) => snap to first real image
    if (index === images.length + 1) {
      setWithTransition(false);
      setIndex(1);
      requestAnimationFrame(() => setIsAnimating(false));
      return;
    }

    // Normal slide finished
    setIsAnimating(false);
  };

  return (
    <div className="carousel-container">
      <div
        ref={trackRef}
        className={`carousel-track ${withTransition ? "is-animating" : "no-anim"}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {trackImages.map((img, i) => (
          <img key={i} src={resolveImagePath(img)} alt="" className="carousel-image" />
        ))}
      </div>

      <button
        className="carousel-control left"
        onClick={handlePrev}
        disabled={isAnimating}
        aria-label="Previous image"
      >
        <i className="fa fa-chevron-left" />
      </button>

      <button
        className="carousel-control right"
        onClick={handleNext}
        disabled={isAnimating}
        aria-label="Next image"
      >
        <i className="fa fa-chevron-right" />
      </button>
    </div>
  );
}



