import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594305/4_yww66y.jpg",
    caption: "Transportation Services",
    description: "Safe and reliable transportation assistance for appointments and errands"
  }, {
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594305/9_ajxv3j.jpg",
    caption: "Skilled Nursing",
    description: "Professional medical care in your home"
  }, {
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594305/10_nawmhr.jpg",
    caption: "Companionship",
    description: "Emotional support and social engagement"
  }, {
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/8_v0vgig.jpg",
    caption: "Nutritional Support",
    description: "Meal preparation and nutritional guidance for healthy living"
  }, {
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/7_kliopj.jpg",
    caption: "Personal Care",
    description: "Bathing, grooming, toileting, and daily living assistance with dignity and respect"
  }, {
    image: "https://res.cloudinary.com/dl3ee8etw/image/upload/v1777594304/1_umffyt.jpg",
    caption: "Around-The-Clock Care",
    description: "24-hour comprehensive care services tailored to your specific needs"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
          
          {/* Caption Overlay - Adjusted for mobile */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pb-16 md:pb-6">
            <div className="text-white my-[30px] bg-transparent">
              <h3 className="text-2xl font-bold mb-2">{slide.caption}</h3>
              <p className="text-white/90 text-lg">{slide.description}</p>
            </div>
          </div>
        </div>)}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
        <ChevronLeft size={24} />
      </button>
      
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator - Positioned above caption on mobile */}
      <div className="absolute bottom-4 right-6 flex space-x-2 z-10">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} />)}
      </div>
    </div>;
};
export default HeroSlider;