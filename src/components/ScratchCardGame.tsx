import React, { useEffect, useRef, useState, useCallback } from "react";

const COUPONS = [
  "Free AMH Test",
  "Free AMH Test + 5% Discount on IVF Package",
  "Free AMH Test + 10% Discount on IVF Package",
  "Free Ultrasound / 50% Off on AMH OR Semen Test",
  "20% Off on Blood Test / Medicine",
  "AMH Test Free / 50% off on 2nd Consultation",
  "2nd Consultation free / 20% Off on Medicine",
  "15% off on Medicine / 20% off on Blood Test",
];

interface ScratchCardGameProps {
  name: string;
  email: string;
  phone: string;
  revealThreshold?: number;
}

function useHiDPICanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  width: number,
  height: number
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, [canvasRef, width, height]);
}

const ScratchCardGame: React.FC<ScratchCardGameProps> = ({
  name,
  email,
  phone,
  revealThreshold = 55,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [size, setSize] = useState({ w: 360, h: 200 });
  const [scratching, setScratching] = useState(false);
  const [percent, setPercent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // Pick random coupon for the round
  const pickRandomCoupon = useCallback(() => {
    const shuffled = [...COUPONS].sort(() => Math.random() - 0.5);
    setCouponCode(shuffled[0]);
  }, []);

  // Responsive sizing
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const h = Math.round(w * 0.55);
      setSize({ w, h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useHiDPICanvas(canvasRef, size.w, size.h);

  // Paint top layer
  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, size.w, size.h);
    gradient.addColorStop(0, "#c0c4d6");
    gradient.addColorStop(0.5, "#aeb4c9");
    gradient.addColorStop(1, "#d5d9e6");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size.w, size.h);

    ctx.globalAlpha = 0.2;
    for (let i = -size.h; i < size.w + size.h; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + size.h, size.h);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#2d2f39";
    ctx.font = `600 ${Math.max(14, size.w * 0.05)}px system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("Scratch to Reveal 🎁", size.w / 2, size.h / 2);
  }, [size.w, size.h]);

  useEffect(() => {
    paintCover();
    pickRandomCoupon();
  }, [paintCover, pickRandomCoupon]);

  const getPos = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const clientX =
      (e as TouchEvent).touches?.[0]?.clientX ??
      (e as MouseEvent).clientX;
    const clientY =
      (e as TouchEvent).touches?.[0]?.clientY ??
      (e as MouseEvent).clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const scratchAt = useCallback((x: number, y: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const radius = Math.max(12, size.w * 0.05);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.globalCompositeOperation = "source-over";
  }, [size.w]);

  const saveToGoogleSheet = useCallback(async () => {
    try {
      const res = await fetch("/api/rewards/save-reward", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          coupon: couponCode,
        }),
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }
    } catch (err) {
      console.error("Error saving to sheet", err);
      alert("Something went wrong while claiming your reward. Please reload the page and try again.");
    }
  }, [name, email, phone, couponCode]);

  const calcPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    try {
      const { width, height } = canvas;
      const img = ctx.getImageData(0, 0, width, height).data;
      let clear = 0;
      for (let i = 3; i < img.length; i += 4) {
        if (img[i] === 0) clear++;
      }
      const p = Math.min(100, Math.round((clear / (width * height)) * 100));
      setPercent(p);
      if (p >= revealThreshold && !revealed) {
        setRevealed(true);
        saveToGoogleSheet();
      }
    } catch {}
  }, [revealThreshold, revealed, saveToGoogleSheet]); // ⬅️ FIX 1: saveToGoogleSheet add kiya

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ticking = false;

    const onDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      setScratching(true);
      const { x, y } = getPos(e);
      scratchAt(x, y);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calcPercent();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!scratching) return;
      const { x, y } = getPos(e);
      scratchAt(x, y);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calcPercent();
          ticking = false;
        });
        ticking = true;
      }
    };

    const stop = () => setScratching(false);

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("touchstart", onDown, { passive: false });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);

    return () => {
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [scratching, calcPercent, scratchAt]); // ⬅️ FIX 2: scratchAt add kiya

  return (
    <div className="w-full max-w-md mx-auto px-3">
      <div className="mb-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/70 shadow-sm text-xs sm:text-sm">
          <span className="tracking-wide text-slate-700">Progress</span>
          <span className="font-bold tabular-nums text-slate-900">
            {percent}%
          </span>
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-2"
      >
        <div
          className="relative flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm"
          style={{ height: size.h }}
        >
          <div className="text-center p-3 sm:p-4">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-500">
              Congrats {name || email.split("@")[0]}!
            </p>
            <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-extrabold">
              Your Coupon
            </h3>
            <div
              className={`mt-3 inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-lg sm:text-xl font-mono font-bold tracking-wider ${
                revealed
                  ? "bg-emerald-50 border-emerald-300"
                  : "bg-slate-50 border-slate-300"
              }`}
            >
              {couponCode}
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Scratch {revealThreshold}% to unlock.
            </p>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={size.w}
          height={size.h}
          className={`absolute inset-2 rounded-lg touch-none ${
            revealed
              ? "opacity-0 pointer-events-none transition-opacity duration-500"
              : ""
          }`}
        />
      </div>

      <p className="mt-2 text-center text-[10px] sm:text-xs text-slate-500">
        Tip: Drag with your finger or mouse to scratch.
      </p>
    </div>
  );
};

export default ScratchCardGame;