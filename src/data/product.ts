import { Activity, BatteryCharging, BrainCircuit, Droplets, HeartPulse, ShieldCheck } from 'lucide-react';

// import type { FaqItem, Feature, GalleryImage, Specification, Testimonial } from '../types/product';

export const product = {

  id: 'ai-smart-watch-x-pro',
  name: 'AI Smart Watch X Pro',
  price: 399,
  tagline: 'An AI assistant on your wrist for health, productivity, and modern living.',
  webhookUrl: 'https://jsonplaceholder.typicode.com/posts',

};

export const features = [
  {
    title: 'AI Health Coach',
    description: 'Analyzes heart rate, sleep, and stress to recommend personalized daily habits.',
    icon: BrainCircuit,
  },
  {
    title: 'ECG & SpO2 24/7',
    description: 'Continuously tracks key metrics with early alerts when unusual patterns appear.',
    icon: HeartPulse,
  },
  {
    title: '7-Day Battery',
    description: 'Power-efficient silicon and fast charging from 0 to 80% in 32 minutes.',
    icon: BatteryCharging,
  },
  {
    title: 'Workout Insight',
    description: 'Automatically detects 120+ workouts and measures training load in real time.',
    icon: Activity,
  },
  {
    title: '5 ATM Water Resistance',
    description: 'Ready for swimming, heavy rain, and demanding travel schedules.',
    icon: Droplets,
  },
  {
    title: 'Private by Design',
    description: 'Encrypts health data on-device and syncs securely through the cloud.',
    icon: ShieldCheck,
  },
];
export const specifications = [
  { label: 'Display', value: '1.9-inch LTPO OLED, 2,000 nits' },
  { label: 'Materials', value: 'Grade 5 titanium, sapphire glass' },
  { label: 'Sensors', value: 'ECG, SpO2, skin temperature, dual-band GPS' },
  { label: 'Battery', value: '7 days typical use, 36 hours continuous GPS' },
  { label: 'Connectivity', value: 'Bluetooth 5.4, Wi-Fi, LTE eSIM' },
  { label: 'Operating System', value: 'XOS AI with offline voice assistant' },
];

export const gallery = [
  { src: '/assets/og-watch.svg', alt: 'AI Smart Watch X Pro front view', title: 'Midnight Titanium' },
  { src: '/assets/health-rings.svg', alt: 'AI Smart Watch X Pro health dashboard with colorful health rings', title: 'AI Health Rings' },
  { src: '/assets/sport-loop.svg', alt: 'AI Smart Watch X Pro sport mode with running route loop', title: 'Sport Loop' },
];

export const testimonials = [
  {
    name: 'Minh Anh',
    role: 'Product Designer',
    quote: 'I use X Pro to track stress before deadlines. The breathing prompts and short break suggestions are genuinely useful.',
  },
  {
    name: 'Quang Huy',
    role: 'Founder',
    quote: 'The AI assistant summarizes my schedule, nudges better habits, and filters notifications better than any smartwatch I have used.',
  },
  {
    name: 'Linh Pham',
    role: 'Marathon Runner',
    quote: 'Stable GPS, long battery life, and post-run recovery insights help me train with a better plan.',
  },
];

export const faqs = [
  {
    question: 'Does AI Smart Watch X Pro work with iPhone and Android?',
    answer: 'Yes. The X Pro app supports iOS 16 and later plus Android 11 and later, with health sync, notifications, and AI assistant settings.',
  },
  {
    question: 'Is health data protected?',
    answer: 'Sensitive data is encrypted on-device before syncing. Users can delete history and turn off cloud sync at any time.',
  },
  {
    question: 'Does the demo webhook send real data?',
    answer: 'By default, the app calls a mock endpoint in the service. For production, change the webhook URL in the data file or environment variables.',
  },
];
