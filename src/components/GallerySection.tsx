import { motion } from "framer-motion";
import { gallery } from "../data/product";
import { ProductVisual } from "./ProductVisual";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-500">
              Gallery
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Refined from every angle.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600 dark:text-slate-300">
            The gallery uses lazy loading and is ready for WebP production
            assets when final imagery is available.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {gallery.map((image, index) => (
            <motion.figure
              key={`${image.title}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid aspect-4/5 place-items-center overflow-hidden rounded-24 bg-linear-to-br from-slate-100 to-white transition duration-500 group-hover:scale-[1.02] dark:from-slate-900 dark:to-slate-800">
                {index === 0 ? (
                  <div className="grid h-full w-full -translate-x-3 translate-y-2 place-items-center">
                    <ProductVisual compact />
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 opacity-95 transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <figcaption className="mt-4 text-lg font-bold text-slate-950 dark:text-white ">
                {image.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
