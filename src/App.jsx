import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, Check, X, Plus, Lock, Rocket, ShieldCheck, TrendingUp, Zap, Diamond, Layers, Crown, Sparkles, Smartphone, MessageCircle, Heart, Star, Bot } from 'lucide-react';
import { slides } from './slidesData';
import './index.css';

// --- ANIMATION VARIANTS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

// --- LAYOUT COMPONENTS (LIGHT MODE) ---

const Header = ({ title, subtitle, slideIndex, totalSlides }) => (
  <div className="w-full flex justify-between items-start mb-6 md:mb-10 border-b border-gray-200 pb-4 md:pb-6">
    <div>
      <motion.h4
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-2 font-body"
      >
        {subtitle}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[0.9] font-heading uppercase"
      >
        {title}
      </motion.h2>
    </div>
    <div className="text-right hidden md:block">
      <div className="text-gray-300 font-black text-xl tracking-tighter font-heading">
        ASPIRI<span className="text-accent">.</span>
      </div>
      <div className="text-gray-400 text-xs font-mono mt-1">
        {slideIndex + 1} / {totalSlides}
      </div>
    </div>
  </div>
);

const TitleSlide = ({ slide }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 p-4">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="p-6 bg-accent/10 rounded-full mb-4 ring-1 ring-accent/30"
    >
      <slide.icon size={64} className="text-accent" />
    </motion.div>

    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-gray-900 leading-[0.9] uppercase tracking-tight"
    >
      {slide.title}
    </motion.h1>

    <motion.h3
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-2xl text-gray-600 font-body font-light tracking-widest uppercase"
    >
      {slide.subtitle}
    </motion.h3>

    <div className="h-px w-24 bg-accent my-8" />

    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-base md:text-xl max-w-2xl text-gray-500 font-body"
    >
      {slide.tagline}
    </motion.p>

    {slide.points && (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
        {slide.points.map((p, i) => (
          <motion.div
            key={i}
            custom={i + 4}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-sm md:text-base font-bold text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm"
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            {p}
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const ListSlide = ({ slide }) => (
  <div className="h-full w-full overflow-y-auto custom-scrollbar">
    <div className="min-h-full flex flex-col justify-center max-w-5xl mx-auto w-full p-4 md:p-8">
      <div className="flex-shrink-0 w-full">
        {slide.mainIdea && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-heading font-medium text-gray-800 mb-8 md:mb-10 text-center leading-tight"
          >
            {slide.mainIdea}
          </motion.div>
        )}

        <div className="grid gap-4 md:gap-5">
          {slide.points.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-6 p-5 md:p-6 bg-white border border-gray-100 rounded-2xl hover:border-accent/40 hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                {slide.type === 'checklist' ? <Check size={20} /> : <ArrowRight size={20} />}
              </div>
              <span className="text-lg md:text-xl text-gray-700 font-medium">{point}</span>
            </motion.div>
          ))}
        </div>

        {slide.highlight && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-8 md:mt-10 p-5 bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent rounded-r-xl"
          >
            <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">Key Takeaway</div>
            <div className="text-gray-900 font-medium text-lg">{slide.highlight}</div>
          </motion.div>
        )}

        {slide.footer && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-8 md:mt-12 text-center pb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-accent font-bold tracking-widest uppercase text-xs shadow-sm">
              {slide.footer}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  </div>
);

const ComparisonSlide = ({ slide }) => (
  <div className="flex flex-col h-full">
    {/* Header */}
    <div className="text-xl md:text-2xl text-gray-400 mb-8 font-light hidden md:block text-center max-w-4xl mx-auto">{slide.mainIdea}</div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 flex-1 overflow-visible">

      {/* Left Column: The Problem / Current State */}
      <motion.div
        initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
        className="bg-gray-50 rounded-[32px] p-8 border border-gray-200 flex flex-col relative overflow-hidden group hover:bg-white hover:shadow-lg transition-all"
      >
        <div className="inline-block px-3 py-1 bg-gray-200 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-8 self-start">
          {slide.col1Title}
        </div>

        <ul className="space-y-4 flex-1 relative z-10">
          {slide.col1.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-500 text-lg font-medium flex items-start gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Column: The Solution / Future State */}
      <motion.div
        initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="bg-white rounded-[32px] p-8 border border-accent/20 flex flex-col relative overflow-hidden group shadow-xl shadow-accent/5"
      >
        <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="inline-block px-3 py-1 bg-accent/10 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-8 self-start">
          {slide.col2Title}
        </div>

        <ul className="space-y-4 relative z-10 flex-1">
          {slide.col2.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="text-gray-900 text-xl font-medium flex items-start gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Expanded Footer / Conclusion */}
    {slide.conclusion && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-block bg-white border border-gray-100 rounded-xl px-8 py-4 text-gray-600 text-base md:text-lg leading-relaxed shadow-lg">
          {slide.conclusion}
        </div>
      </motion.div>
    )}
  </div>
);

const FeatureSlide = ({ slide }) => (
  <div className="h-full flex flex-col items-center justify-center">
    {slide.mainIdea && <div className="text-2xl text-gray-800 font-medium mb-10 text-center max-w-3xl">{slide.mainIdea}</div>}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {slide.features.map((feature, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
            {feature.icon ? <feature.icon size={20} /> : <Zap size={20} />}
          </div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">{feature.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>

    {slide.mantra && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-12 text-center font-heading font-black text-2xl md:text-3xl text-gray-200 uppercase tracking-widest"
      >
        {slide.mantra}
      </motion.div>
    )}
  </div>
);

const AppShowcaseSlide = ({ slide }) => (
  <div className="h-full flex flex-col justify-center">
    <div className="text-2xl text-gray-800 font-medium mb-10 text-center">{slide.mainIdea}</div>
    <div className="grid md:grid-cols-3 gap-6">
      {slide.features.map((feature, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="bg-white border border-gray-100 p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:border-accent/20 transition-all"
        >
          <div className="absolute top-0 right-0 p-20 bg-accent/5 blur-3xl rounded-full translate-x-10 -translate-y-10" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              {feature.icon ? <feature.icon size={24} /> : <Sparkles size={24} />}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    {slide.note && <div className="text-gray-400 text-sm text-center mt-10 font-mono uppercase tracking-wide">{slide.note}</div>}
  </div>
);

const GridSlide = ({ slide }) => (
  <div className="h-full flex flex-col justify-center">
    {slide.mainIdea && <div className="text-xl text-gray-500 mb-8 text-center">{slide.mainIdea}</div>}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
      {slide.items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="w-full bg-white border border-gray-100 p-6 rounded-xl flex items-start gap-4 hover:shadow-lg hover:border-accent/20 transition-all"
        >
          <div className="p-3 bg-accent/10 rounded-lg text-accent">
            {item.icon ? <item.icon size={24} /> : <Check size={24} />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {slide.note && <div className="mt-8 text-center text-accent font-bold uppercase tracking-widest text-xs">{slide.note}</div>}
  </div>
);

const PricingSlide = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center">
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-4xl bg-white border border-gray-100 rounded-[40px] p-12 relative overflow-hidden shadow-2xl"
    >
      {/* Ambient Backlight */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="text-center md:text-left flex-1">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
            Launch Partnership
          </div>
          <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
            <span className="text-6xl lg:text-7xl font-black text-gray-900 font-heading tracking-tighter">{slide.price}</span>
            <span className="text-xl text-gray-400">{slide.priceSuffix}</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed mb-6">
            A comprehensive initiation phase to position Aspiri for market leadership.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-gray-400 text-xs font-mono uppercase">Includes</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 gap-3">
            {slide.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
              >
                <Check size={16} className="text-accent" />
                <span className="text-gray-700 font-medium text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
          {slide.note && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20 text-xs md:text-sm text-gray-600 leading-relaxed italic"
            >
              <span className="font-bold text-accent not-italic">Justification: </span>
              {slide.note}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  </div>
);

const FinalCtaSlide = ({ slide }) => (
  <div className="h-full flex flex-col items-center justify-center text-center">
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-8 p-8 bg-accent/10 rounded-full text-accent ring-1 ring-accent/30">
      {slide.icon ? <slide.icon size={80} /> : <Check size={80} />}
    </motion.div>

    <h2 className="text-5xl md:text-7xl font-black text-gray-900 font-heading uppercase tracking-tight mb-6">{slide.title}</h2>

    <div className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl leading-relaxed">
      {slide.tagline}
    </div>

    <div className="flex flex-col gap-4 items-center">
      {slide.points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + (i * 0.1) }}
          className="text-gray-500 font-mono text-sm tracking-widest uppercase"
        >
          {p}
        </motion.div>
      ))}
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-16 px-12 py-5 bg-accent text-white font-black uppercase tracking-widest text-lg rounded-full shadow-gold hover:shadow-lg transition-all"
    >
      {slide.ctaText}
    </motion.button>
  </div>
);

// --- MAIN APP ---

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="w-screen h-screen bg-bg text-primary overflow-hidden relative selection:bg-accent selection:text-white">
      {/* Background Ambience (Light Mode) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.03]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto">
        <Header
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
          slideIndex={currentSlideIndex}
          totalSlides={slides.length}
        />

        <div className="flex-1 w-full relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              {currentSlide.type === 'title' && <TitleSlide slide={currentSlide} />}
              {currentSlide.type === 'comparison' && <ComparisonSlide slide={currentSlide} />}
              {currentSlide.type === 'list' && <ListSlide slide={currentSlide} />}
              {currentSlide.type === 'feature' && <FeatureSlide slide={currentSlide} />}
              {currentSlide.type === 'app-showcase' && <AppShowcaseSlide slide={currentSlide} />}
              {currentSlide.type === 'grid-cards' && <GridSlide slide={currentSlide} />}
              {currentSlide.type === 'pricing' && <PricingSlide slide={currentSlide} />}
              {currentSlide.type === 'final-cta' && <FinalCtaSlide slide={currentSlide} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 right-8 flex gap-4 z-50">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="p-3 rounded-full bg-accent text-white hover:bg-accent/90 shadow-gold transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
