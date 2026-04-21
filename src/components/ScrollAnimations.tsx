import { useRef, useEffect, useState, ReactNode } from "react";

interface SlideData {
  img: string;
  label: string;
  title: string;
  desc: string;
}

/**
 * ImageShowcase — each slide is a full-viewport section.
 * Text slides in from left/right on alternating slides.
 * Pure CSS transitions, zero scroll listeners. Buttery smooth.
 */
export const ImageShowcase = ({ slides }: { slides: SlideData[] }) => (
  <div>
    {slides.map((slide, i) => (
      <ShowcaseSlide key={i} slide={slide} index={i} fromRight={i % 2 === 1} />
    ))}
  </div>
);

const ShowcaseSlide = ({ slide, index, fromRight }: { slide: SlideData; index: number; fromRight: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] overflow-hidden flex items-center"
    >
      {/* Background image — subtle zoom when visible */}
      <div
        className="absolute inset-0 transition-transform duration-[1.8s] ease-out"
        style={{ transform: visible ? "scale(1)" : "scale(1.08)" }}
      >
        <img
          src={slide.img}
          alt=""
          className="w-full h-full object-cover"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/55" />
        <div className={`absolute inset-0 ${fromRight ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#0a0a0f]/85 via-[#0a0a0f]/40 to-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-[#0a0a0f]/20" />
        {/* Purple ambient tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-indigo-900/5" />
      </div>

      {/* Text — slides in from left or right with staggered children */}
      <div
        className={`relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-16 transition-all duration-[1.2s] ease-out ${fromRight ? "text-right ml-auto" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0) translateY(0)"
            : `translateX(${fromRight ? "80px" : "-80px"}) translateY(20px)`,
        }}
      >
        <div className={`${fromRight ? "ml-auto" : ""} max-w-xl`}>
          <span
            className="text-overline mb-3 block transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transitionDelay: "0.2s",
            }}
          >
            {slide.label}
          </span>
          <h2 className="heading-display text-[40px] md:text-[68px] lg:text-[80px] text-white whitespace-pre-line leading-[0.92] tracking-[-0.04em]">
            {slide.title}
          </h2>
          <p
            className="mt-5 text-base md:text-lg text-white/55 max-w-md leading-relaxed font-body transition-all duration-700"
            style={{
              marginLeft: fromRight ? "auto" : undefined,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transitionDelay: "0.3s",
            }}
          >
            {slide.desc}
          </p>
          <div
            className={`accent-line mt-6 ${fromRight ? "ml-auto" : ""} transition-all duration-700`}
            style={{
              opacity: visible ? 1 : 0,
              width: visible ? "40px" : "0px",
              transitionDelay: "0.5s",
            }}
          />
        </div>
      </div>
    </section>
  );
};

/**
 * Reveal3D — CSS-only entrance. No framer-motion.
 */
export const Reveal3D = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Card3D — CSS entrance with stagger and hover lift.
 */
export const Card3D = ({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} hover:scale-[1.02] transition-all duration-500`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
};
