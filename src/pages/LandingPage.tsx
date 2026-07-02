// import { useAnalytics } from "../hooks/useAnalytics";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { storageKeys } from "../utils/storageKeys";
import { Navbar } from "../components/Navbar";
import { product } from "../data/product";
import { Hero } from "../components/Hero";
import { toast } from "sonner";
import { FeatureSection } from "../components/FeatureSection";
export function LandingPage() {
  // const { track } = useAnalytics();
  const [isDark, setIsDark] = useLocalStorage(storageKeys.darkMode, false);
  const [cart, setCart] = useLocalStorage<string[]>(storageKeys.cart, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useLocalStorage(
    storageKeys.favorite,
    false,
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const preorder = () => {
    if (cart.length === 0) {
      setCart([product.id]);
    }
    setIsCartOpen(true);
  };

  const addToCart = () => {
    setCart((current) => [...current, product.id]);
    toast.success("Added to cart");
    setIsCartOpen(true);
  };

  const toggleFavorite = () => {
    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);
    toast(nextFavorite ? "Added to favorites" : "Removed from favorites");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 dark:border-slate-950 dark:text-white">
      <Navbar
        isDark={isDark}
        cartCount={cart.length}
        onToggleDark={() => setIsDark((current) => !current)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main>
        <Hero
          isFavorite={isFavorite}
          onPreorder={preorder}
          onToggleFavorite={toggleFavorite}
          onAddToCart={addToCart}
        />
        <FeatureSection />
      </main>
    </div>
  );
}
