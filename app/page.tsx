"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Lock, Flame, Zap, ShieldAlert, Star, Dumbbell, Play } from "lucide-react";

const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    target: "Mid & Lower Chest",
    equipment: "Olympic Barbell & Bench",
    movement: "Lie flat on bench, unrack barbell, retract scapula, lower controlled to mid-chest level, and explode upward.",
    weight: "75-85% 1RM",
    icon: Flame,
    color: "text-crimson",
    tag: "MASS BUILDER"
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    target: "Upper Chest & Deltoids",
    equipment: "Adjustable Bench & Dumbbells",
    movement: "Set bench at 30 degrees. Press weights straight up, focusing on deep stretch at bottom and peak contraction.",
    weight: "Moderate / Heavy",
    icon: Zap,
    color: "text-gold",
    tag: "HYPERTROPHY"
  },
  {
    id: 3,
    name: "Weighted Chest Dips",
    target: "Lower Chest & Triceps",
    equipment: "Dip Station & Weight Belt",
    movement: "Lean torso forward 30 degrees, flare elbows slightly out, lower body until upper arms parallel to floor, push up.",
    weight: "Bodyweight + 15-25kg",
    icon: ShieldAlert,
    color: "text-emerald-400",
    tag: "STRENGTH"
  },
  {
    id: 4,
    name: "Low-to-High Cable Flyes",
    target: "Upper Chest Isolation",
    equipment: "Dual Cable Machine",
    movement: "Set cables at lowest setting. Pull handles upward and inward in a sweeping arc to upper chest height.",
    weight: "Moderate Isolation",
    icon: Dumbbell,
    color: "text-cyan-400",
    tag: "SCULPTING"
  }
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-onyx text-platinum font-sans selection:bg-gold selection:text-onyx overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 inset-x-0 z-50 max-w-6xl mx-auto px-6 py-4 rounded-full bg-onyx/70 backdrop-blur-2xl border border-gold/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
            <Activity className="text-crimson w-8 h-8" />
          </motion.div>
          <span className="text-3xl font-black tracking-widest text-white">MOTA</span>
        </div>

        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] text-platinum/70 uppercase">
          <a href="#vision" className="hover:text-gold transition-colors">VISION</a>
          <a href="#workouts" className="hover:text-gold transition-colors">WORKOUTS</a>
          <a href="#vault" className="hover:text-gold transition-colors flex items-center gap-1">
            <Lock className="w-3 h-3 text-gold" /> VAULT
          </a>
        </div>

        <button className="px-6 py-3 rounded-full bg-gold text-onyx font-black text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.4)]">
          EXPLORE NOW
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <span className="text-gold font-mono tracking-[0.4em] uppercase text-xs mb-4 block">
            ULTRA-PREMIUM ATHLETIC ARCHITECTURE
          </span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none bg-gradient-to-b from-white via-platinum to-gunmetal bg-clip-text text-transparent">
            FORGE YOUR LEGACY
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            High-performance movements, muscle execution mechanics, and precision exercise protocols. Built for direct access—no sign-up required.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="#workouts" 
              className="px-10 py-5 rounded-full bg-crimson text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(255,46,99,0.5)] flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" /> VIEW EXERCISES
            </a>
          </div>
        </motion.div>
      </section>

      {/* Exercise Section */}
      <section id="workouts" className="relative z-10 max-w-7xl mx-auto px-6 py-28 border-t border-platinum/5">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-crimson font-mono tracking-[0.3em] uppercase text-xs">TARGETED EXERCISES</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2 tracking-tighter uppercase">
              CHEST & PECTORALS PROTOCOL
            </h2>
          </div>
          <Star className="text-gold w-10 h-10 fill-gold/20 animate-premium-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {exercises.map((ex) => {
              const Icon = ex.icon;
              return (
                <motion.div
                  key={ex.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(ex.id === selected ? null : ex.id)}
                  className={`group cursor-pointer bg-gunmetal/30 border p-8 rounded-3xl backdrop-blur-2xl relative overflow-hidden transition-all shadow-2xl ${
                    selected === ex.id ? "border-gold shadow-[0_0_40px_rgba(197,160,89,0.2)]" : "border-gold/10 hover:border-gold/30"
                  }`}
                >
                  <div className="relative flex justify-between items-start mb-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-onyx px-3 py-1 rounded-full border border-platinum/10 text-gold mb-2 inline-block">
                        {ex.tag}
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1 group-hover:text-gold transition-colors">
                        {ex.name}
                      </h3>
                      <p className={`font-mono text-xs tracking-wider uppercase mt-1 ${ex.color}`}>
                        TARGET: {ex.target}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-onyx flex items-center justify-center border border-platinum/10 group-hover:border-gold/50 transition-colors shrink-0">
                      <Icon className={`w-7 h-7 ${ex.color}`} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-platinum/70 text-sm leading-relaxed font-light">
                      <strong className="text-white font-semibold">Execution Movement:</strong> {ex.movement}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-platinum/10 text-xs font-bold tracking-widest uppercase">
                    <div>
                      <span className="text-platinum/40 block mb-1">EQUIPMENT</span>
                      <span className="text-white">{ex.equipment}</span>
                    </div>
                    <div>
                      <span className="text-platinum/40 block mb-1">LOAD INTENSITY</span>
                      <span className="text-gold">{ex.weight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

