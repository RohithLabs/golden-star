"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Golden Star Company product & trade images (Unsplash CDN) ───────────────
const IMG = {
  mangoes:
    "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=75&auto=format&fit=crop",
  ship:
    "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&q=75&auto=format&fit=crop",
  spices:
    "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=75&auto=format&fit=crop",
  petroleum:
    "https://images.unsplash.com/photo-1615935813867-0b7e543b21d2?w=600&q=75&auto=format&fit=crop",
  cargo:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=75&auto=format&fit=crop",
  vegetables:
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=600&q=75&auto=format&fit=crop",
  grains:
    "https://images.unsplash.com/photo-1536304993881-ff86e0c9e45c?w=600&q=75&auto=format&fit=crop",
  globe:
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=75&auto=format&fit=crop",
} as const;

interface StackSpreadItem { src: string; alt?: string; label?: string; }
interface StackSpreadTarget { x: number; y: number; rotate: number; scale?: number; w: number; h: number; }
interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  targetSm?: { x: number; y: number };
  stackRotate?: number;
  stackOffset?: { x: number; y: number };
  z?: number;
}

// per-card rest scale
const SCALE: Record<number, number> = { 1: 0.9, 2: 0.8, 3: 0.9, 4: 0.8, 5: 0.8, 6: 0.9, 7: 0.9, 8: 0.7 };
const s = (i: number) => SCALE[i] ?? 1;

const CARDS: StackSpreadCard[] = [
  { item: { src: IMG.globe,       alt: "Global trade routes",       label: "50+ Countries" },
    stackOffset: { x: -8,  y: -10 }, stackRotate: -18,
    target: { x: -20, y: -34, rotate: 0, scale: s(8), w: 17, h: 22 },
    targetSm: { x: -22, y: -40 }, z: 2 },
  { item: { src: IMG.grains,      alt: "Grains & agro commodities", label: "Grains" },
    stackOffset: { x: 14,  y: -10 }, stackRotate: 20,
    target: { x: 32, y: -30, rotate: 0, scale: s(7), w: 18, h: 32 },
    targetSm: { x: 22, y: -40 }, z: 3 },
  { item: { src: IMG.petroleum,   alt: "Petroleum products",         label: "Petroleum" },
    stackOffset: { x: -16, y:   0 }, stackRotate: -4,
    target: { x: -36, y: -2, rotate: 0, scale: s(6), w: 15, h: 32 },
    targetSm: { x: -22, y: -19 }, z: 4 },
  { item: { src: IMG.mangoes,     alt: "Fresh mangoes export",       label: "Mangoes" },
    stackOffset: { x:  1,  y: -10 }, stackRotate: -2,
    target: { x: 6, y: -32, rotate: 0, scale: s(5), w: 25, h: 30 },
    targetSm: { x: 22, y: -19 }, z: 5 },
  { item: { src: IMG.vegetables,  alt: "Fresh vegetables export",    label: "Vegetables" },
    stackOffset: { x: 18,  y:   1 }, stackRotate: 6,
    target: { x: 37, y: 6, rotate: 0, scale: s(4), w: 18, h: 32 },
    targetSm: { x: -22, y: 20 }, z: 6 },
  { item: { src: IMG.spices,      alt: "Spices & herbs",             label: "Spices" },
    stackOffset: { x: -6,  y:  10 }, stackRotate: 6,
    target: { x: -24, y: 34, rotate: 0, scale: s(3), w: 22, h: 25 },
    targetSm: { x: 22, y: 20 }, z: 7 },
  { item: { src: IMG.ship,        alt: "Cargo ship global shipping",  label: "Shipping" },
    stackOffset: { x:  8,  y:   7 }, stackRotate: 3,
    target: { x: 2, y: 36, rotate: 0, scale: s(2), w: 20, h: 26 },
    targetSm: { x: -22, y: 40 }, z: 8 },
  { item: { src: IMG.cargo,       alt: "Freight cargo containers",    label: "Freight" },
    stackOffset: { x: 20,  y:  12 }, stackRotate: -7,
    target: { x: 30, y: 34, rotate: 0, scale: s(1), w: 16, h: 20 },
    targetSm: { x: 22, y: 40 }, z: 9 },
];

const SCATTER_START = 0.12;
const SCATTER_END  = 0.9;
const PARALLAX_X   = 2.6;
const PARALLAX_Y   = 2.2;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i: number, total: number) =>
  total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75;

const RESPONSIVE = {
  desktop: { scale: null as number | null, small: false, colX: null as number | null, card: null as { w: number; h: number } | null },
  small:   { scale: 0.72, small: true, colX: 22, card: { w: 40, h: 20 } },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  return r;
}

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);
  useEffect(() => {
    if (!enabled) return;
    if (!active) { rawX.set(0); rawY.set(0); return; }
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth) * 2 - 1);
      rawY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => { rawX.set(0); rawY.set(0); };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => { window.removeEventListener("pointermove", onMove); document.removeEventListener("pointerleave", onLeave); };
  }, [active, enabled, rawX, rawY]);
  return { x, y };
}

function CardItem({
  card, progress, reduce, clusterRotation, scaleMul, isSmall, colX, fixedCard,
  stackScale, cardRadius, pointer, depth,
}: {
  card: StackSpreadCard; progress: MotionValue<number>; reduce: boolean | null;
  clusterRotation: boolean; scaleMul: number | null; isSmall: boolean;
  colX: number | null; fixedCard: { w: number; h: number } | null;
  stackScale: number; cardRadius: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  depth: number;
}) {
  const { item, target } = card;
  const flat = reduce === true;
  const stackRotate = flat ? 0 : clusterRotation ? (card.stackRotate ?? 0) : 0;
  const stackOffset = card.stackOffset ?? { x: 0, y: 0 };
  const restScale = scaleMul ?? target.scale ?? 1;
  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm ? (colX != null ? Math.sign(sm.x) * colX : sm.x) : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;

  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      const tx = stackOffset.x + (endX - stackOffset.x) * p;
      const ty = stackOffset.y + (endY - stackOffset.y) * p;
      const drift = depth * p;
      const dx = tx - px * PARALLAX_X * drift;
      const dy = ty - py * PARALLAX_Y * drift;
      return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
    },
  );
  const rotate = useTransform(progress, [0, 1], [stackRotate, endRotate]);
  const scale  = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform group cursor-default"
      style={{
        width:   `${fixedCard ? fixedCard.w : target.w}vw`,
        height:  `${fixedCard ? fixedCard.h : target.h}vh`,
        zIndex:  card.z ?? 1,
        translate, rotate, scale,
      }}
    >
      {/* Card face */}
      <div
        className="relative h-full w-full overflow-hidden shadow-2xl max-md:rounded-[4vw]"
        style={{ borderRadius: `${cardRadius}px` }}
      >
        <img
          src={item.src}
          alt={item.alt ?? ""}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* label overlay */}
        {item.label && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6">
            <span className="text-white text-[clamp(8px,0.9vw,13px)] font-montserrat font-bold uppercase tracking-widest block text-center">
              {item.label}
            </span>
          </div>
        )}
        {/* Gold shimmer border on hover */}
        <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#DF9A28]/60 transition-all duration-300" style={{ borderRadius: `${cardRadius}px` }} />
      </div>
    </motion.div>
  );
}

// ── Main exported component ─────────────────────────────────────────────────

export interface GoldenStackSpreadProps {
  scrollLength?: number;
  bgColor?: string;
  clusterRotation?: boolean;
  stackScale?: number;
  cardRadius?: number;
  textColor?: string;
  textFadeStart?: number;
  showScrollHint?: boolean;
  headlineTop?: string;
  headlineBottom?: string;
  subtitle?: string;
}

export function GoldenStackSpread({
  scrollLength    = 320,
  bgColor         = "#07131F",
  clusterRotation = true,
  stackScale      = 0.82,
  cardRadius      = 10,
  textColor       = "#FFFFFF",
  textFadeStart   = 0.3,
  showScrollHint  = true,
  headlineTop     = "Our World of",
  headlineBottom  = "Trade & Export",
  subtitle        = "From South India to 50+ countries — fresh produce, petroleum, spices and more.",
}: GoldenStackSpreadProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce  = useReducedMotion();
  const { scale: scaleMul, small: isSmall, colX, card: fixedCard } = useResponsive();

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, SCATTER_START, SCATTER_END, 1], [0, 0, 1, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => {
    setSpread((was) => (was ? p > 0.985 : p >= 0.999));
  });

  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);
  const noScale = reduce === true;

  const copyOpacity = useTransform(progress, [textFadeStart, textFadeStart + 0.35], [0, 1]);
  const copyScale   = useTransform(progress, [textFadeStart, 0.9], [0.85, 1]);
  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  return (
    <section
      ref={wrapRef}
      className="relative w-full"
      style={{ height: `${scrollLength}vh`, backgroundColor: bgColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Subtle gold radial glow behind cards */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(223,154,40,0.06) 0%, transparent 80%)" }} />

        {/* Centre headline — fades in as cards spread */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-6 text-center max-md:px-8"
          style={{ opacity: copyOpacity, scale: noScale ? 1 : copyScale }}
        >
          {/* Eyebrow */}
          <span className="text-[#DF9A28] font-raleway uppercase tracking-[0.3em] text-[clamp(9px,1vw,13px)] mb-3 font-bold">
            Golden Star Company
          </span>

          {/* Main headline — two lines, different fonts */}
          <h2
            className="whitespace-pre-line text-[clamp(2rem,5.5vw,5rem)] leading-none tracking-tight"
            style={{ color: textColor }}
          >
            <span className="font-lato font-light italic opacity-80">{headlineTop} </span>
            <br />
            <span className="font-montserrat font-black">{headlineBottom}</span>
          </h2>

          {/* Subtitle */}
          <p
            className="mt-4 max-w-[38ch] text-[clamp(12px,1.1vw,16px)] leading-relaxed font-manrope font-light max-md:text-[3.6vw]"
            style={{ color: textColor, opacity: 0.65 }}
          >
            {subtitle}
          </p>

          {/* Gold decorative line */}
          <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#DF9A28] to-transparent" />
        </motion.div>

        {/* Scattered product cards */}
        <div className="absolute inset-0 z-10">
          {CARDS.map((card, i) => (
            <CardItem
              key={i}
              card={card}
              progress={progress}
              reduce={reduce}
              clusterRotation={clusterRotation}
              scaleMul={scaleMul}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxEnabled ? parallaxDepth(i, CARDS.length) : 0}
            />
          ))}
        </div>

        {/* Scroll hint */}
        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[3vh] z-20 flex flex-col items-center gap-[0.6vh] font-work uppercase tracking-[0.2em] max-md:bottom-6 max-md:gap-1"
            style={{ color: "#DF9A28", opacity: hintOpacity, fontSize: "clamp(9px,0.8vw,12px)" }}
          >
            <span>Scroll to Explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              className="animate-bounce" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default GoldenStackSpread;
