
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/3600bcd1-540d-44f8-a44b-51a1dbe8d8af.png",
      caption: "Transportation Services",
      description: "Safe and reliable transportation assistance for appointments and errands"
    },
    {
      image: "/lovable-uploads/1e91caf8-562b-44e0-b88a-de8b391a9afe.png",
      caption: "Skilled Nursing",
      description: "Professional medical care in your home"
    },
    {
      image: "/lovable-uploads/ea030fec-429e-4901-a84b-b3e41ab539b4.png",
      caption: "Companionship",
      description: "Emotional support and social engagement"
    },
    {
      image: "/lovable-uploads/6fa0a03b-e067-490d-a537-9e1a7e82a019.png",
      caption: "Nutritional Support",
      description: "Meal preparation and nutritional guidance for healthy living"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{slide.caption}</h3>
              <p className="text-white/90 text-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
