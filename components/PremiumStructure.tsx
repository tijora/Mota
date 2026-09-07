"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Lock, Flame, Zap, ShieldAlert, Star } from "lucide-react";

const exercises = [
  {
    id: 1,
    name: "Barbell Bench Press",
    target: "Chest (Pectoralis Major)",
    equipment: "Barbell & Bench",
    movement: "Lie flat on the bench, lower the barbell smoothly to mid-chest, and explode upward.",
    weight: "70-85% 1RM",
    icon: Flame,
    color: "text-crimson",
  },
  {
    id: 2,
    name: "Incline Dumbbell Press",
    target: "Upper Chest & Anterior Deltoids",
    equipment: "Incline Bench & Dumbbells",
    movement: "Set bench to 30 degrees. Press dumbbells upward, focusing on squeezing the upper chest at the top.",
    weight: "Moderate to Heavy",
    icon: Zap,
    color: "text-gold",
  },
  {
    id: 3,
    name: "Weighted Bodyweight Push-Ups",
    target: "Chest, Triceps & Core",
    equipment: "Bodyweight / Weight Plate",
    movement: "Maintain a rigid plank position, lower chest near the floor, and push back up aggressively.",
    weight: "Bodyweight + 10-20kg",
    icon: ShieldAlert,
    color: "text-emerald-400",
  },
];

export default function PremiumStructure() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-onyx text-platinum font-sans selection:bg-gold selection:text-onyx overflow-hidden">
      {/* Glassmorphism Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 inset-x-0 z-50 max-w-6xl mx-auto px-6 py-4 rounded-full bg-onyx/60 backdrop-blur-2xl border border-gold/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
            <Activity className="text-crimson w-8 h-8" />
          </motion.div>
          <span className="text-3xl font-black tracking-tighter text-white">MOTA</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-platinum/70">
          <a href="#vision" className="hover:text-gold transition-colors">VISION</a>
          <a href="#workouts" className="hover:text-gold transition-colors">WORKOUTS</a>
          <a href="#vault" className="hover:text-gold transition-colors flex items-center gap-1">
            <Lock className="w-3 h-3 text-gold" /> VAULT
          </a>
        </div>

        <button className="px-6 py-3 rounded-full bg-gold text-onyx font-black text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.4)]">
          JOIN ELITE
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-crimson/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <span className="text-gold font-mono tracking-[0.4em] uppercase text-sm mb-4 block">
            ULTRA-PREMIUM FITNESS ARCHITECTURE
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none bg-gradient-to-b from-white via-platinum to-gunmetal bg-clip-text text-transparent">
            FORGE YOUR LEGACY
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            High-performance workout protocols, precision movements, and targeted muscle mechanics engineered for elite athletes. No login required.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="#workouts" 
              className="px-10 py-5 rounded-full bg-crimson text-white font-black text-sm tracking-widest hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(255,46,99,0.5)]"
            >
              EXPLORE EXERCISES
            </a>
          </div>
        </motion.div>
      </section>

      {/* Exercises Section */}
      <section id="workouts" className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-platinum/5">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-crimson font-mono tracking-[0.3em] uppercase text-sm">TARGETED PROTOCOLS</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tighter">
              CHEST & UPPER BODY
            </h2>
          </div>
          <Star className="text-gold w-12 h-12 fill-gold/20 animate-premium-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {exercises.map((ex) => {
              const Icon = ex.icon;
              return (
                <motion.div
                  key={ex.id}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedExercise(ex.id)}
                  className="group cursor-pointer bg-gunmetal/20 border border-gold/10 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-gold/40 hover:shadow-[0_0_40px_rgba(197,160,89,0.15)]"
                >
                  <div className="relative flex justify-between items-start mb-8">
                    <div>
                      <span className={`font-mono text-xs tracking-widest uppercase ${ex.color}`}>
                        {ex.target}
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1 group-hover:text-gold transition-colors">
                        {ex.name}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-onyx flex items-center justify-center border border-platinum/10 group-hover:border-gold/50 transition-colors">
                      <Icon className={`w-7 h-7 ${ex.color}`} />
                    </div>
                  </div>
                  
                  <p className="relative text-platinum/60 text-sm leading-relaxed mb-8">
                    {ex.movement}
                  </p>
                  
                  <div className="relative flex flex-col gap-3 pt-6 border-t border-platinum/10 text-xs font-bold tracking-widest uppercase">
                    <div className="flex justify-between">
                      <span className="text-platinum/40">EQUIPMENT:</span>
                      <span className="text-white">{ex.equipment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum/40">LOAD/WEIGHT:</span>
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

