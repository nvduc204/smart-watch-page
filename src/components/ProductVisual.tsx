import { motion } from "framer-motion";
type ProductVisualProps = {
  compact?: boolean;
};

//hiển thị hình ảnh sản phẩm (đồng hồ) với các chỉ số sức khỏe và hiệu suất
export function ProductVisual({ compact = false }: ProductVisualProps) {
  const metrics = ["Heart 68 bpm", "Sleep 7h 42m", "Stress Low"];
  return (
    <div
      className={`relative mx-auto ${compact ? "h-64 w-56" : "h-[420px] w-[300px] sm:h-[520px] sm:w-[380px]"}`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-full w-[72%] -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-0 h-[30%] w-[34%] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-700 shadow-inner dark:from-slate-500 dark:via-slate-700 dark:to-slate-950" />
        <div className="absolute bottom-0 left-1/2 h-[30%] w-[34%] -translate-x-1/2 rounded-b-full bg-gradient-to-t from-slate-300 via-slate-400 to-slate-700 shadow-inner dark:from-slate-500 dark:via-slate-700 dark:to-slate-950" />
        <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-200 via-slate-500 to-slate-900 p-3 shadow-2xl ring-1 ring-white/30">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-slate-950 via-slate-900 to-black ring-1 ring-white/10">
            <div className="absolute -right-4 top-1/2 h-14 w-4 -translate-y-1/2 rounded-r-full bg-slate-400 shadow-lg" />
            <div
              className={`absolute left-[18%] right-[18%] top-[13%] flex items-center justify-between font-medium text-slate-400 ${compact ? "text-[9px]" : "text-xs"}`}
            >
              <span>09:41</span>
              <span>AI</span>
            </div>
            <div className="absolute inset-x-0 top-[10%] grid place-items-center">
              <div
                className={`relative h-25 grid aspect-square place-items-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-400 shadow-glow ${compact ? "w-[42%] p-0.5" : "w-[48%] p-1"}`}
              >
                <div className="grid h-20 w-full place-items-center rounded-full bg-slate-950">
                  <span
                    className={`font-black leading-none text-white ${compact ? "text-2xl" : "text-4xl"}`}
                  >
                    87
                  </span>
                  <span
                    className={`font-semibold uppercase text-sky-200 ${compact ? "-mt-2 text-[6px] tracking-[0.18em]" : "-mt-3 text-[9px] tracking-[0.24em]"}`}
                  >
                    Recovery
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-x-[16%] bottom-[13%] ${compact ? "space-y-1" : "space-y-1.5"}`}
            >
              {metrics.map((item) => (
                <div
                  key={item}
                  className={`flex items-center justify-between rounded-full bg-white/[0.08] font-semibold text-slate-100 ${compact ? "px-2 py-1 text-[7px]" : "px-3 py-1.5 text-[10px]"}`}
                >
                  <span>{item}</span>
                  <span
                    className={`rounded-full bg-emerald-300 ${compact ? "h-1 w-1" : "h-1.5 w-1.5"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
