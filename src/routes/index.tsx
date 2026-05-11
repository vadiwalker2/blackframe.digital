import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Zap,
  Crown,
  Palette,
  Layout,
  Compass,
  Instagram,
  Mail,
  Twitter,
  Linkedin,
  Check,
} from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import projBarber from "@/assets/project-barber.jpg";
import projRestaurant from "@/assets/project-restaurant.jpg";
import projClothing from "@/assets/project-clothing.jpg";
import projGym from "@/assets/project-gym.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Nav() {
  const links = ["Work", "Services", "Process", "Contact"];
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1100px)]"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="text-[10px] font-bold text-black">L</span>
          </div>
          <span className="font-semibold tracking-tight">Lumen<span className="text-muted-foreground">.studio</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="text-sm font-medium bg-foreground text-background rounded-full px-4 py-2 hover:opacity-90 transition">
          Start a Project
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden noise pt-32 pb-20">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent blur-3xl animate-pulse-glow" />

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Booking projects for Q3 — 2 spots left
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
        >
          Premium Websites
          <br />
          <span className="gradient-text">for Modern Businesses</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Modern, fast and mobile-first websites crafted for brands, barbershops and businesses.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#work" className="group bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition">
            View Projects
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="#contact" className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden glass glow animate-float">
            <img
              src={heroMockup}
              alt="Premium website mockup on laptop and phone"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Trust() {
  const stats = [
    { icon: Palette, label: "Modern Design" },
    { icon: Smartphone, label: "Mobile Optimized" },
    { icon: Zap, label: "Fast Performance" },
    { icon: Crown, label: "Premium Experience" },
  ];
  return (
    <section className="border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center justify-center gap-3 py-10 border-r last:border-r-0 border-border/50"
          >
            <s.icon className="size-5 text-muted-foreground" />
            <p className="text-sm font-medium tracking-tight">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Layout, title: "Web Design", desc: "Bespoke layouts engineered to convert and impress." },
    { icon: Smartphone, title: "Mobile Optimization", desc: "Pixel-perfect on every screen, blazing fast." },
    { icon: Sparkles, title: "Brand Presence", desc: "A digital identity that elevates your business." },
    { icon: Compass, title: "Modern UI/UX", desc: "Intuitive flows, premium feel, real results." },
  ];
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground mb-3">— Services</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">What I craft.</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group glass rounded-3xl p-8 md:p-10 relative overflow-hidden hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 size-60 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
              <div className="relative">
                <div className="size-12 rounded-2xl glass grid place-items-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="size-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    { img: projBarber, title: "Maison Barber", category: "Barbershop" },
    { img: projRestaurant, title: "Noir Table", category: "Restaurant" },
    { img: projClothing, title: "Atelier 47", category: "Clothing Brand" },
    { img: projGym, title: "Forge Athletics", category: "Gym & Fitness" },
  ];
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-muted-foreground mb-3">— Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">Projects that speak louder than words.</h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition flex items-center gap-1">
            All projects <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.7 }}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">{p.category}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <div className="size-10 rounded-full glass grid place-items-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <p className="text-sm text-muted-foreground mb-3">— Transformation</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">From outdated to outstanding.</h2>
        </motion.div>

        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass select-none">
          <img src={afterImg} alt="After redesign" loading="lazy" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={beforeImg} alt="Before redesign" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full object-cover" style={{ width: `${10000 / pos}%` }} />
          </div>
          <div className="absolute top-5 left-5 glass rounded-full px-3 py-1 text-xs">Before</div>
          <div className="absolute top-5 right-5 glass rounded-full px-3 py-1 text-xs">After</div>
          <div className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full glass grid place-items-center bg-background/60">
              <div className="flex gap-0.5"><div className="w-0.5 h-3 bg-white"/><div className="w-0.5 h-3 bg-white"/></div>
            </div>
          </div>
          <input
            type="range" min={0} max={100} value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            aria-label="Before / after slider"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Bookings doubled within a month. The site feels like a luxury brand.", name: "Marco D.", role: "Owner, Maison Barber" },
    { quote: "Every detail is intentional. Customers comment on the website constantly.", name: "Sara L.", role: "Founder, Atelier 47" },
    { quote: "Fast, beautiful and converts. Worth every euro.", name: "James K.", role: "Owner, Forge Athletics" },
  ];
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 max-w-2xl">
          <p className="text-sm text-muted-foreground mb-3">— Trusted by</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Loved by founders.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col gap-6 hover:bg-white/[0.06] transition"
            >
              <p className="text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discovery", desc: "We map out your goals, brand and audience." },
    { n: "02", title: "Design", desc: "Pixel-perfect mockups with motion and intent." },
    { n: "03", title: "Development", desc: "Lightning-fast build, optimized for every device." },
    { n: "04", title: "Launch", desc: "Deployed, polished and ready to perform." },
  ];
  return (
    <section id="process" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
          <p className="text-sm text-muted-foreground mb-3">— Process</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl">A simple path from idea to launch.</h2>
        </motion.div>
        <div className="relative grid md:grid-cols-4 gap-10">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="size-12 rounded-full glass grid place-items-center mb-5 relative bg-background">
                <Check className="size-4" />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{s.n}</p>
              <h3 className="text-xl font-semibold tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1]">
          Ready to <span className="gradient-text">Upgrade</span>
          <br />Your Business Online?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's craft something your customers will remember. Limited spots open each month.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:hello@lumen.studio" className="group bg-foreground text-background rounded-full px-7 py-4 text-sm font-medium flex items-center gap-2 hover:scale-[1.02] transition">
            Start a Project
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="mailto:hello@lumen.studio" className="glass rounded-full px-7 py-4 text-sm font-medium hover:bg-white/10 transition">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-white to-white/40 grid place-items-center">
            <span className="text-[10px] font-bold text-black">L</span>
          </div>
          <span className="font-semibold tracking-tight">Lumen<span className="text-muted-foreground">.studio</span></span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Instagram, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:hello@lumen.studio" },
          ].map((s, i) => (
            <a key={i} href={s.href} className="size-10 rounded-full glass grid place-items-center hover:bg-white/10 transition" aria-label="Social link">
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Lumen Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}
