import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Akshay from '../../../assets/teams/akshay.jpg'
import Anuj from '../../../assets/teams/anuj.jpeg'

const images = [
    Akshay,
    Anuj
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-md">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-pulse-glow" />

      {/* Image */}
      <img
        src={images[index]}
        alt="Leadership"
        className="relative rounded-2xl w-full object-cover shadow-hover"
      />

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-primary" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
