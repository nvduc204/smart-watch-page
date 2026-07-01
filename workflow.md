QUY TRINH LAM DU AN LANDING PAGE AI SMART WATCH X PRO TRONG 5 NGAY
====================================================================

Muc tieu du an
--------------

Du an la mot landing page gioi thieu va ban san pham AI Smart Watch X Pro.
Cong nghe su dung:

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios
- React Hook Form
- Zod
- Sonner
- Git va GitHub

Yeu cau quan ly ma nguon:

- Su dung Git de quan ly toan bo qua trinh lam du an.
- Day code len GitHub.
- Khong code truc tiep tren nhanh main.
- Moi phan viec lon tao mot nhanh rieng.
- Commit message phai ro rang, co y nghia.
- Moi nhanh feature nen day len GitHub va tao Pull Request de merge vao main.
- Moi commit chi nen dai dien cho mot nhom thay doi hop ly.


PHAN 1: CHUAN BI MOI TRUONG
===========================

Can cai dat truoc:

1. Node.js
   Tai tai: https://nodejs.org

2. Git
   Tai tai: https://git-scm.com

3. Tai khoan GitHub
   Tao tai: https://github.com

4. Visual Studio Code
   Tai tai: https://code.visualstudio.com

Kiem tra phien ban:

```powershell
node -v
npm -v
git --version
```

Neu cac lenh tren hien phien ban thi moi truong da san sang.


PHAN 2: QUY TAC DAT TEN BRANCH VA COMMIT
========================================

1. Nhanh chinh
--------------

Nhanh chinh cua du an:

```text
main
```

Nhanh main chi chua code da on dinh, da build duoc, khong co loi nghiem trong.

2. Nhanh tinh nang
------------------

Dat ten nhanh theo dang:

```text
feature/ten-chuc-nang
fix/ten-loi-can-sua
docs/noi-dung-tai-lieu
```

Trong du an nay co the chia nhanh nhu sau:

```text
feature/project-setup
feature/product-content
feature/landing-layout
feature/user-interactions
feature/forms-api-seo
docs/final-documentation
```

3. Quy tac commit message
-------------------------

Dung kieu Conventional Commits:

```text
feat: them chuc nang moi
fix: sua loi
chore: cau hinh du an, cai thu vien, viec phu tro
style: chinh giao dien, CSS, responsive
docs: viet tai lieu
refactor: sap xep lai code nhung khong doi hanh vi
perf: toi uu hieu nang
```

Vi du commit tot:

```text
chore: initialize Vite React TypeScript project
chore: configure Tailwind CSS
feat: add product data model
feat: build hero and navigation sections
feat: add shopping cart drawer
feat: add preorder modal
feat: add API client and analytics tracking
style: improve responsive landing sections
docs: add project setup instructions
```

Vi du commit khong nen dung:

```text
update
fix
done
final
abc
sua linh tinh
```


PHAN 3: KHOI TAO DU AN TU DAU
=============================

Buoc 1: Tao du an bang Vite
---------------------------

Mo terminal tai thu muc muon tao du an, chay:

```powershell
npm create vite@latest ai-smart-watch-x-pro-landing -- --template react-ts
cd ai-smart-watch-x-pro-landing
```

Buoc 2: Cai thu vien runtime
----------------------------

```powershell
npm install axios framer-motion lucide-react sonner react-hook-form zod @hookform/resolvers
```

Giai thich:

- axios: goi API demo, gui newsletter, gui don preorder.
- framer-motion: tao animation khi hien section, modal, drawer.
- lucide-react: bo icon dung cho menu, gio hang, trai tim, chatbot.
- sonner: hien toast thong bao.
- react-hook-form: quan ly form nhanh va gon.
- zod: validate du lieu form.
- @hookform/resolvers: ket noi zod voi react-hook-form.

Buoc 3: Cai Tailwind CSS
------------------------

```powershell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Lenh nay tao:

```text
tailwind.config.js
postcss.config.js
```

Buoc 4: Cai them cac goi dev neu can
------------------------------------

Thong thuong Vite da cai san TypeScript va plugin React. Neu thieu, chay:

```powershell
npm install -D typescript vite @vitejs/plugin-react @types/react @types/react-dom
```

Buoc 5: Tao Git repository local
--------------------------------

```powershell
git init
```

Tao file `.gitignore`:

```gitignore
node_modules
dist
.env
.env.local
*.tsbuildinfo
```

Commit dau tien:

```powershell
git add .
git commit -m "chore: initialize Vite React TypeScript project"
```

Buoc 6: Tao repository tren GitHub
----------------------------------

Vao GitHub:

```text
https://github.com/new
```

Dat ten repository:

```text
ai-smart-watch-x-pro-landing
```

Sau khi tao repository, lien ket local voi GitHub:

```powershell
git remote add origin https://github.com/<username>/ai-smart-watch-x-pro-landing.git
git branch -M main
git push -u origin main
```

Thay `<username>` bang ten tai khoan GitHub cua minh.


PHAN 4: CAU TRUC THU MUC CAN TAO
================================

Tao cau truc thu muc:

```text
public/
  assets/
src/
  components/
  data/
  hooks/
  pages/
  services/
  styles/
  types/
  utils/
```

Giai thich:

- public: chua favicon, anh og, robots.txt, sitemap.xml.
- public/assets: chua anh san pham hoac asset public.
- src/components: chua cac component UI.
- src/data: chua du lieu san pham, features, FAQ, testimonials.
- src/hooks: chua custom hook nhu localStorage va analytics.
- src/pages: chua trang chinh LandingPage.
- src/services: chua file goi API.
- src/styles: chua CSS global.
- src/types: chua TypeScript type.
- src/utils: chua hang so va helper nho.

Co the tao bang lenh:

```powershell
New-Item -ItemType Directory -Force public/assets
New-Item -ItemType Directory -Force src/components
New-Item -ItemType Directory -Force src/data
New-Item -ItemType Directory -Force src/hooks
New-Item -ItemType Directory -Force src/pages
New-Item -ItemType Directory -Force src/services
New-Item -ItemType Directory -Force src/styles
New-Item -ItemType Directory -Force src/types
New-Item -ItemType Directory -Force src/utils
```


PHAN 5: CAU HINH FILE CO BAN
============================

1. package.json
---------------

Kiem tra scripts:

```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 0.0.0.0"
  }
}
```

Y nghia:

- npm run dev: chay moi truong phat trien.
- npm run build: build production va kiem tra TypeScript.
- npm run preview: xem thu ban production build.

2. tailwind.config.js
---------------------

Noi dung:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(56, 189, 248, 0.22)',
      },
      minHeight: {
        13: '3.25rem',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(circle at 18% 20%, rgba(14,165,233,.16), transparent 28%), radial-gradient(circle at 82% 14%, rgba(168,85,247,.14), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        'mesh-dark':
          'radial-gradient(circle at 18% 20%, rgba(14,165,233,.18), transparent 28%), radial-gradient(circle at 82% 14%, rgba(168,85,247,.16), transparent 30%), linear-gradient(180deg, #030712 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
```

3. postcss.config.js
--------------------

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. vite.config.ts
-----------------

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          forms: ['react-hook-form', 'zod', '@hookform/resolvers'],
        },
      },
    },
  },
});
```

Y nghia:

- Su dung plugin React cho Vite.
- Bat sourcemap de de debug.
- Tach chunk motion va forms de toi uu build.

5. src/styles/index.css
-----------------------

Tao file:

```text
src/styles/index.css
```

Noi dung:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root.dark {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  overflow-x: hidden;
}

button,
input {
  font: inherit;
}

::selection {
  background: rgba(56, 189, 248, 0.28);
}

.glass {
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(22px);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.58);
}

.section-shell {
  width: min(1120px, calc(100% - 32px));
  margin-inline: auto;
}

.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950;
}

.field-input {
  @apply w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-white/10 dark:bg-white/10 dark:text-white;
}
```


PHAN 6: KE HOACH LAM 5 NGAY CO NHANH VA COMMIT
==============================================

NGAY 1: KHOI TAO DU AN VA CAU HINH CO BAN
-----------------------------------------

Muc tieu ngay 1:

- Khoi tao project Vite React TypeScript.
- Cai cac thu vien can thiet.
- Cai Tailwind CSS.
- Tao cau truc thu muc.
- Cau hinh Git va push len GitHub.

Tao nhanh:

```powershell
git checkout -b feature/project-setup
```

Cong viec chi tiet:

1. Tao project Vite.
2. Cai dependencies.
3. Cai Tailwind CSS.
4. Tao cac folder:

```text
src/components
src/data
src/hooks
src/pages
src/services
src/styles
src/types
src/utils
public/assets
```

5. Sua:

```text
package.json
tailwind.config.js
postcss.config.js
vite.config.ts
src/styles/index.css
.gitignore
```

Commit de xuat:

```powershell
git add package.json package-lock.json
git commit -m "chore: install project dependencies"

git add tailwind.config.js postcss.config.js src/styles/index.css
git commit -m "chore: configure Tailwind CSS"

git add src public .gitignore vite.config.ts
git commit -m "chore: add base project structure"
```

Kiem tra:

```powershell
npm run dev
```

Neu chay duoc thi build thu:

```powershell
npm run build
```

Push nhanh:

```powershell
git push -u origin feature/project-setup
```

Len GitHub tao Pull Request:

```text
feature/project-setup -> main
```

Tieu de PR:

```text
Set up React TypeScript landing page project
```

Noi dung PR:

```text
- Initialize Vite React TypeScript project
- Configure Tailwind CSS
- Add base folder structure
- Add initial build configuration
```

Sau khi merge PR:

```powershell
git checkout main
git pull origin main
```


NGAY 2: TAO DU LIEU SAN PHAM, TYPE VA ASSET
-------------------------------------------

Muc tieu ngay 2:

- Dinh nghia type TypeScript cho san pham.
- Tao du lieu product, features, specs, gallery, testimonials, FAQ.
- Tao asset public co ban.
- Them SEO asset ban dau.

Tao nhanh:

```powershell
git checkout -b feature/product-content
```

Tao file:

```text
src/types/product.ts
src/data/product.ts
public/favicon.svg
public/assets/og-watch.svg
```

1. File src/types/product.ts
----------------------------

File nay chua cac type:

```text
Feature
Specification
GalleryImage
Testimonial
FaqItem
AnalyticsEvent
```

Muc dich:

- Giup du lieu trong product.ts co cau truc ro rang.
- Giam loi khi render component.
- De bao tri neu sau nay them truong moi.

2. File src/data/product.ts
---------------------------

File nay chua:

```text
product
features
specifications
gallery
testimonials
faqs
```

Noi dung du lieu:

- Ten san pham: AI Smart Watch X Pro.
- Gia: 399.
- Tagline: dong ho thong minh co tro ly AI.
- Webhook demo: https://jsonplaceholder.typicode.com/posts.
- 6 tinh nang chinh.
- Danh sach thong so ky thuat.
- Gallery san pham.
- 3 danh gia khach hang.
- 3 cau hoi thuong gap.

Commit de xuat:

```powershell
git add src/types/product.ts
git commit -m "feat: add product TypeScript types"

git add src/data/product.ts
git commit -m "feat: add smartwatch product content"

git add public/favicon.svg public/assets/og-watch.svg
git commit -m "chore: add public brand assets"
```

Kiem tra:

```powershell
npm run build
```

Push:

```powershell
git push -u origin feature/product-content
```

Tao Pull Request:

```text
feature/product-content -> main
```

Tieu de PR:

```text
Add product content and public assets
```

Sau khi merge:

```powershell
git checkout main
git pull origin main
```


NGAY 3: XAY DUNG GIAO DIEN LANDING PAGE
---------------------------------------

Muc tieu ngay 3:

- Tao layout landing page day du.
- Chia UI thanh nhieu component rieng.
- Them animation bang Framer Motion.
- Them responsive cho desktop va mobile.

Tao nhanh:

```powershell
git checkout -b feature/landing-layout
```

Tao cac file:

```text
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/ProductVisual.tsx
src/components/FeatureSection.tsx
src/components/SpecificationSection.tsx
src/components/GallerySection.tsx
src/components/TestimonialSection.tsx
src/components/FaqSection.tsx
src/components/Footer.tsx
src/pages/LandingPage.tsx
src/App.tsx
src/main.tsx
```

1. Navbar.tsx
-------------

Chuc nang:

- Hien logo X Pro.
- Link toi cac section:

```text
Features
Specs
Gallery
FAQ
```

- Nut toggle dark mode.
- Nut mo gio hang.
- Menu mobile.

Props can co:

```text
isDark
cartCount
onToggleDark
onCartClick
```

Commit:

```powershell
git add src/components/Navbar.tsx
git commit -m "feat: add responsive navigation bar"
```

2. ProductVisual.tsx
--------------------

Chuc nang:

- Ve hinh dong ho bang Tailwind CSS.
- Co animation nhe bang Framer Motion.
- Co che do compact de dung trong gallery.

Props:

```text
compact?: boolean
```

Commit:

```powershell
git add src/components/ProductVisual.tsx
git commit -m "feat: add animated product visual"
```

3. Hero.tsx
-----------

Chuc nang:

- Hien ten san pham.
- Mo ta ngan.
- Nut Preorder now.
- Nut Add to cart.
- Nut Favorite.
- Hien ProductVisual.

Props:

```text
isFavorite
onPreorder
onToggleFavorite
onAddToCart
```

Commit:

```powershell
git add src/components/Hero.tsx
git commit -m "feat: build hero section"
```

4. FeatureSection.tsx
---------------------

Chuc nang:

- Lay du lieu tu `features`.
- Render danh sach tinh nang.
- Moi feature co icon, title, description.
- Co hover animation.

Commit:

```powershell
git add src/components/FeatureSection.tsx
git commit -m "feat: add product feature section"
```

5. SpecificationSection.tsx
---------------------------

Chuc nang:

- Lay du lieu tu `specifications`.
- Render bang thong so ky thuat.

Commit:

```powershell
git add src/components/SpecificationSection.tsx
git commit -m "feat: add specifications section"
```

6. GallerySection.tsx
---------------------

Chuc nang:

- Render gallery san pham.
- Anh dau dung ProductVisual compact.
- Anh con lai load lazy.

Commit:

```powershell
git add src/components/GallerySection.tsx
git commit -m "feat: add product gallery section"
```

7. TestimonialSection.tsx
-------------------------

Chuc nang:

- Render danh gia khach hang.
- Lay du lieu tu `testimonials`.

Commit:

```powershell
git add src/components/TestimonialSection.tsx
git commit -m "feat: add testimonial section"
```

8. FaqSection.tsx
-----------------

Chuc nang:

- Render FAQ dang accordion.
- Dung useState de biet cau hoi nao dang mo.
- Dung AnimatePresence de tao animation dong/mo.

Commit:

```powershell
git add src/components/FaqSection.tsx
git commit -m "feat: add FAQ accordion section"
```

9. Footer.tsx
-------------

Chuc nang:

- Hien ten san pham.
- Copyright.
- Icon social.

Commit:

```powershell
git add src/components/Footer.tsx
git commit -m "feat: add landing page footer"
```

10. LandingPage.tsx, App.tsx, main.tsx
--------------------------------------

Chuc nang:

- Ghép cac section thanh trang hoan chinh.
- Import global CSS.
- Gan Toaster cua sonner.
- Lazy load App bang React Suspense.

Commit:

```powershell
git add src/pages/LandingPage.tsx src/App.tsx src/main.tsx
git commit -m "feat: compose landing page layout"
```

Kiem tra:

```powershell
npm run dev
npm run build
```

Push:

```powershell
git push -u origin feature/landing-layout
```

Tao Pull Request:

```text
feature/landing-layout -> main
```

Tieu de PR:

```text
Build responsive landing page layout
```


NGAY 4: THEM TUONG TAC NGUOI DUNG
---------------------------------

Muc tieu ngay 4:

- Them dark mode.
- Them favorite.
- Them gio hang.
- Them drawer gio hang.
- Them modal preorder.
- Them chatbot mock.
- Luu du lieu nguoi dung vao localStorage.

Tao nhanh:

```powershell
git checkout main
git pull origin main
git checkout -b feature/user-interactions
```

Tao file:

```text
src/utils/storageKeys.ts
src/hooks/useLocalStorage.ts
src/components/CartDrawer.tsx
src/components/OrderModal.tsx
src/components/ChatbotWidget.tsx
```

Sua file:

```text
src/pages/LandingPage.tsx
```

1. storageKeys.ts
-----------------

Chuc nang:

- Tap trung cac key localStorage.
- Tranh viec viet chuoi lap lai nhieu noi.

Key can co:

```text
xpro:dark-mode
xpro:favorite
xpro:cart
xpro:viewed-products
```

Commit:

```powershell
git add src/utils/storageKeys.ts
git commit -m "chore: add localStorage key constants"
```

2. useLocalStorage.ts
---------------------

Chuc nang:

- Tao custom hook doc/ghi localStorage.
- Dung generic TypeScript de tai su dung cho boolean, string array, object.
- Neu localStorage loi thi fallback ve gia tri ban dau.

Commit:

```powershell
git add src/hooks/useLocalStorage.ts
git commit -m "feat: add localStorage state hook"
```

3. CartDrawer.tsx
-----------------

Chuc nang:

- Hien drawer tu ben phai.
- Hien san pham trong gio.
- Tang/giam so luong.
- Tinh tong tien.
- Nut checkout mo OrderModal.

Props:

```text
isOpen
count
onClose
onDecrease
onIncrease
onCheckout
```

Commit:

```powershell
git add src/components/CartDrawer.tsx
git commit -m "feat: add shopping cart drawer"
```

4. OrderModal.tsx
-----------------

Chuc nang:

- Modal nhap thong tin dat truoc.
- Form gom:

```text
Full name
Phone number
Email
Quantity
Shipping address
Notes
```

- Validate bang zod.
- Submit qua service API.
- Hien toast thanh cong/that bai.

Commit:

```powershell
git add src/components/OrderModal.tsx
git commit -m "feat: add preorder modal form"
```

5. ChatbotWidget.tsx
--------------------

Chuc nang:

- Nut chatbot nam goc phai man hinh.
- Khi click thi mo hop chat.
- Hien san cac tin nhan mau.
- San sang de ket noi OpenAI/Gemini API sau nay.

Commit:

```powershell
git add src/components/ChatbotWidget.tsx
git commit -m "feat: add chatbot widget"
```

6. Cap nhat LandingPage.tsx
---------------------------

Them state:

```text
isDark
isFavorite
cart
viewedProducts
isCartOpen
isOrderOpen
```

Them ham:

```text
toggleFavorite
addToCart
decreaseCart
preorder
```

Gan cac component:

```text
CartDrawer
OrderModal
ChatbotWidget
```

Commit:

```powershell
git add src/pages/LandingPage.tsx
git commit -m "feat: wire landing page user interactions"
```

Kiem tra chuc nang:

```text
1. Bam dark mode, reload trang van giu trang thai.
2. Bam Favorite, toast hien thong bao.
3. Bam Add to cart, gio hang mo ra.
4. Tang/giam so luong san pham.
5. Bam checkout, modal dat hang mo ra.
6. Bam chatbot, hop chat hien ra.
7. Kiem tra mobile menu.
```

Chay build:

```powershell
npm run build
```

Neu co loi, sua va commit:

```powershell
git add .
git commit -m "fix: resolve interaction build errors"
```

Push:

```powershell
git push -u origin feature/user-interactions
```

Tao Pull Request:

```text
feature/user-interactions -> main
```

Tieu de PR:

```text
Add cart preorder dark mode and chatbot interactions
```


NGAY 5: THEM API, ANALYTICS, SEO, README VA BUILD CUOI
------------------------------------------------------

Muc tieu ngay 5:

- Them API client bang axios.
- Them analytics tracking.
- Hoan thien newsletter form.
- Hoan thien SEO.
- Tao robots.txt va sitemap.xml.
- Viet README.
- Build production.

Tao nhanh:

```powershell
git checkout main
git pull origin main
git checkout -b feature/forms-api-seo
```

Tao file:

```text
src/services/api.ts
src/hooks/useAnalytics.ts
public/robots.txt
public/sitemap.xml
README.md
```

Sua file:

```text
src/components/NewsletterSection.tsx
src/components/OrderModal.tsx
src/pages/LandingPage.tsx
index.html
vite.config.ts
```

1. api.ts
---------

Chuc nang:

- Tao axios client.
- Gui analytics event.
- Gui newsletter.
- Gui preorder.

API demo:

```text
https://jsonplaceholder.typicode.com/posts
```

Commit:

```powershell
git add src/services/api.ts
git commit -m "feat: add API client for demo submissions"
```

2. useAnalytics.ts
------------------

Chuc nang:

- Tao ham track event.
- Track cac hanh dong:

```text
cta_click
scroll_depth
newsletter_submit
favorite_toggle
cart_add
chatbot_open
```

- Track scroll depth moi 25%.

Commit:

```powershell
git add src/hooks/useAnalytics.ts
git commit -m "feat: add analytics tracking hook"
```

3. NewsletterSection.tsx
------------------------

Chuc nang:

- Form nhap email.
- Validate email bang zod.
- Submit qua submitNewsletter.
- Toast thanh cong/that bai.

Commit:

```powershell
git add src/components/NewsletterSection.tsx
git commit -m "feat: add validated newsletter form"
```

4. Cap nhat OrderModal.tsx
--------------------------

Chuc nang:

- Dung submitOrder trong api.ts.
- Validate du lieu:

```text
fullName toi thieu 2 ky tu
phone toi thieu 9 ky tu
email dung dinh dang
address toi thieu 8 ky tu
quantity tu 1 den 10
```

Commit:

```powershell
git add src/components/OrderModal.tsx
git commit -m "feat: connect preorder form to API service"
```

5. Cap nhat LandingPage.tsx
---------------------------

Them useAnalytics:

```text
track favorite_toggle
track cart_add
track cta_click
track newsletter_submit
track chatbot_open
```

Commit:

```powershell
git add src/pages/LandingPage.tsx
git commit -m "feat: track landing page user events"
```

6. index.html
-------------

Them SEO:

```html
<title>AI Smart Watch X Pro | Premium AI Smartwatch</title>
<meta name="description" content="AI Smart Watch X Pro is a minimalist smartwatch with 24/7 health tracking, a personal AI assistant, 7-day battery life, and a premium titanium design." />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="AI Smart Watch X Pro" />
<meta property="og:description" content="A premium AI smartwatch for health, productivity, and modern living." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/og-watch.svg" />
<meta property="og:url" content="https://ai-smart-watch-x-pro.local/" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

Them font Inter:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

Commit:

```powershell
git add index.html
git commit -m "chore: add SEO metadata and web font preload"
```

7. robots.txt
-------------

Tao file:

```text
public/robots.txt
```

Noi dung:

```text
User-agent: *
Allow: /

Sitemap: https://ai-smart-watch-x-pro.local/sitemap.xml
```

8. sitemap.xml
--------------

Tao file:

```text
public/sitemap.xml
```

Noi dung mau:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ai-smart-watch-x-pro.local/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

Commit:

```powershell
git add public/robots.txt public/sitemap.xml
git commit -m "chore: add robots and sitemap files"
```

9. README.md
------------

README nen co:

```text
# AI Smart Watch X Pro Landing Page

## Tech stack
- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- React Hook Form
- Zod

## Install
npm install

## Run development
npm run dev

## Build
npm run build

## Preview
npm run preview
```

Commit:

```powershell
git add README.md
git commit -m "docs: add setup and run instructions"
```

10. Build cuoi
--------------

Chay:

```powershell
npm run build
```

Neu thanh cong:

```powershell
git status
```

Neu co file build info hoac dist bi track ngoai y muon thi kiem tra `.gitignore`.

Neu co loi thi sua va commit:

```powershell
git add .
git commit -m "fix: resolve production build issues"
```

Push:

```powershell
git push -u origin feature/forms-api-seo
```

Tao Pull Request:

```text
feature/forms-api-seo -> main
```

Tieu de PR:

```text
Add forms API analytics and SEO polish
```

Sau khi merge:

```powershell
git checkout main
git pull origin main
```


PHAN 7: CAC LENH GIT SU DUNG HANG NGAY
======================================

1. Kiem tra trang thai file
---------------------------

```powershell
git status
```

2. Xem file da thay doi
-----------------------

```powershell
git diff
```

3. Them file vao staging
------------------------

Them tat ca:

```powershell
git add .
```

Them tung file:

```powershell
git add src/components/Hero.tsx
```

4. Tao commit
-------------

```powershell
git commit -m "feat: add hero section"
```

5. Day nhanh len GitHub
-----------------------

```powershell
git push -u origin feature/ten-nhanh
```

6. Chuyen nhanh
---------------

```powershell
git checkout main
git checkout feature/landing-layout
```

7. Tao nhanh moi
----------------

```powershell
git checkout -b feature/ten-nhanh
```

8. Cap nhat main moi nhat
-------------------------

```powershell
git checkout main
git pull origin main
```

9. Xem lich su commit
---------------------

```powershell
git log --oneline --graph --decorate --all
```


PHAN 8: SO LUONG COMMIT HOP LY CHO DU AN
========================================

Du an nay nen co khoang 15 den 25 commit.

Goi y danh sach commit:

```text
chore: initialize Vite React TypeScript project
chore: install project dependencies
chore: configure Tailwind CSS
chore: add base project structure
feat: add product TypeScript types
feat: add smartwatch product content
chore: add public brand assets
feat: add responsive navigation bar
feat: add animated product visual
feat: build hero section
feat: add product feature section
feat: add specifications section
feat: add product gallery section
feat: add testimonial section
feat: add FAQ accordion section
feat: add landing page footer
feat: compose landing page layout
chore: add localStorage key constants
feat: add localStorage state hook
feat: add shopping cart drawer
feat: add preorder modal form
feat: add chatbot widget
feat: wire landing page user interactions
feat: add API client for demo submissions
feat: add analytics tracking hook
feat: add validated newsletter form
feat: connect preorder form to API service
feat: track landing page user events
chore: add SEO metadata and web font preload
chore: add robots and sitemap files
docs: add setup and run instructions
fix: resolve production build issues
```

Khong bat buoc phai co tat ca commit tren, nhung lich su Git nen the hien ro qua trinh lam tung phan.


PHAN 9: QUY TRINH PULL REQUEST TREN GITHUB
==========================================

Moi khi lam xong mot nhanh:

1. Push nhanh len GitHub.

```powershell
git push -u origin feature/ten-nhanh
```

2. Vao GitHub repository.
3. Bam "Compare & pull request".
4. Chon:

```text
base: main
compare: feature/ten-nhanh
```

5. Viet tieu de PR ro rang.

Vi du:

```text
Build responsive landing page layout
```

6. Viet mo ta PR.

Vi du:

```text
Changes:
- Add navbar, hero, product visual, feature, specs, gallery, FAQ and footer sections
- Compose the landing page layout
- Add responsive Tailwind styling
- Add Framer Motion animations

Test:
- npm run build
```

7. Kiem tra tab "Files changed".
8. Neu on thi bam "Merge pull request".
9. Xoa branch tren GitHub neu khong can nua.
10. Ve local cap nhat main:

```powershell
git checkout main
git pull origin main
```


PHAN 10: CHECKLIST TRUOC KHI NOP BAI
====================================

Kiem tra code:

```text
[ ] npm install chay duoc
[ ] npm run dev chay duoc
[ ] npm run build thanh cong
[ ] Khong commit node_modules
[ ] Khong commit file .env
[ ] Cac component duoc chia nho, de doc
[ ] Du lieu san pham nam trong src/data/product.ts
[ ] TypeScript type nam trong src/types/product.ts
[ ] API nam trong src/services/api.ts
[ ] Custom hook nam trong src/hooks
[ ] Style global nam trong src/styles/index.css
```

Kiem tra chuc nang:

```text
[ ] Navbar bam duoc toi cac section
[ ] Menu mobile hoat dong
[ ] Dark mode hoat dong va luu localStorage
[ ] Favorite hoat dong
[ ] Add to cart hoat dong
[ ] Cart drawer tang/giam so luong duoc
[ ] Preorder modal mo duoc
[ ] Form preorder validate du lieu
[ ] Newsletter validate email
[ ] Toast hien khi submit thanh cong/that bai
[ ] Chatbot widget mo/dong duoc
[ ] Responsive tren mobile va desktop
```

Kiem tra GitHub:

```text
[ ] Co repository tren GitHub
[ ] Co nhanh main
[ ] Co cac nhanh feature
[ ] Co commit message ro rang
[ ] Co Pull Request cho cac phan viec lon
[ ] README co huong dan chay du an
[ ] Lich su commit the hien qua trinh lam trong 5 ngay
```


PHAN 11: TOM TAT DE GIAI THICH KHI BAO CAO
==========================================

Co the trinh bay nhu sau:

"Em quan ly ma nguon bang Git va GitHub. Ban dau em khoi tao project bang Vite React TypeScript, sau do tao repository tren GitHub va day code len nhanh main. Trong qua trinh phat trien, em khong code truc tiep tren main ma chia thanh cac nhanh feature nhu project setup, product content, landing layout, user interactions va forms API SEO. Moi nhanh sau khi hoan thanh deu duoc push len GitHub va merge vao main thong qua Pull Request. Commit message duoc viet theo quy tac Conventional Commits, vi du feat de them chuc nang, chore de cau hinh, style de chinh giao dien, docs de viet tai lieu va fix de sua loi. Cach lam nay giup lich su code ro rang, de theo doi qua trinh phat trien va the hien duoc em da lam du an theo tung giai doan trong 5 ngay."


PHAN 12: LENH CHAY DU AN CUOI CUNG
==================================

Sau khi clone project tu GitHub:

```powershell
git clone https://github.com/<username>/ai-smart-watch-x-pro-landing.git
cd ai-smart-watch-x-pro-landing
npm install
npm run dev
```

Build production:

```powershell
npm run build
```

Preview production:

```powershell
npm run preview
```

