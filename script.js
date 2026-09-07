const workoutData = {
    chest: [
        {
            name: "Barbell Bench Press",
            target: "Mid & Lower Pectoralis Major",
            position: "Flat Bench (Supine Position)",
            equipment: "Olympic Barbell & Bench",
            movement: "Retract scapula, lower bar controlled to lower sternum, drive feet into floor, and press vertically to lock out.",
            intensity: "75-85% 1RM (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
            tag: "MASS BUILDER"
        },
        {
            name: "Incline Dumbbell Press",
            target: "Upper Pectoralis (Clavicular Head)",
            position: "Incline Bench (30 to 45 Degrees)",
            equipment: "Adjustable Bench & Dumbbells",
            movement: "Set incline to 30°. Keep elbows angled at 45°, lower weights for deep chest stretch, press upward in arc motion.",
            intensity: "Moderate / Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
            tag: "HYPERTROPHY"
        },
        {
            name: "Weighted Chest Dips",
            target: "Lower Chest & Triceps Brachii",
            position: "Suspended Lean Forward",
            equipment: "Dip Station & Weight Belt",
            movement: "Lean torso 30° forward, lower body until upper arms parallel to floor, contract chest hard to press back up.",
            intensity: "Bodyweight + Load (3 Sets x 8-12 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80",
            tag: "STRENGTH"
        }
    ],
    back: [
        {
            name: "Conventional Deadlift",
            target: "Erector Spinae, Latissimus Dorsi, Glutes",
            position: "Standing Hip Hinge",
            equipment: "Olympic Barbell & Bumper Plates",
            movement: "Grip bar shoulder-width, wedge hips, pull slack out of bar, drive through floor maintaining rigid spine.",
            intensity: "80-90% 1RM (3 Sets x 5 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=600&auto=format&fit=crop&q=80",
            tag: "POWER"
        },
        {
            name: "Lat Pulldown",
            target: "Latissimus Dorsi (Width)",
            position: "Seated Vertical Pull",
            equipment: "Cable Pulldown Machine",
            movement: "Grip wide, pull bar down towards upper sternum while driving elbows down and back, squeeze lat muscles.",
            intensity: "Moderate (4 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=80",
            tag: "HYPERTROPHY"
        }
    ],
    legs: [
        {
            name: "Barbell Back Squat",
            target: "Quadriceps, Gluteus Maximus",
            position: "Upright Squat Stance",
            equipment: "Squat Rack & Olympic Barbell",
            movement: "Bar across upper traps, flex hips and knees simultaneously, descend below parallel, drive up through heels.",
            intensity: "75-85% 1RM (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80",
            tag: "LEG CORE"
        },
        {
            name: "Romanian Deadlift (RDL)",
            target: "Hamstrings & Gluteal Complex",
            position: "Soft Knee Hip Hinge",
            equipment: "Barbell or Heavy Dumbbells",
            movement: "Hinge at hips pushing glutes backward, lower weight along shins until hamstring tension peaks, extend hips.",
            intensity: "Moderate Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&auto=format&fit=crop&q=80",
            tag: "POSTERIOR CHAIN"
        }
    ],
    arms: [
        {
            name: "Overhead Barbell Press",
            target: "Anterior & Lateral Deltoids",
            position: "Standing Vertical Press",
            equipment: "Barbell & Power Rack",
            movement: "Bar at upper chest level, brace core, press straight overhead clearing chin, lock out directly over shoulders.",
            intensity: "70-80% 1RM (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80",
            tag: "SHOULDERS"
        },
        {
            name: "Incline Dumbbell Bicep Curl",
            target: "Biceps Brachii (Long Head)",
            position: "Seated Incline (60 Degrees)",
            equipment: "Incline Bench & Dumbbells",
            movement: "Sit back on incline, let arms hang fully extended, curl dumbbells keeping elbows stationary throughout movement.",
            intensity: "Moderate (3 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
            tag: "BICEPS"
        }
    ]
};

function renderCategory(items, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = items.map(ex => `
        <div class="hover-card bg-[#1F2833]/20 rounded-3xl overflow-hidden border border-[#C5A059]/10 bg-opacity-30 flex flex-col justify-between">
            <div>
                <div class="relative h-48 w-full overflow-hidden">
                    <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span class="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-[#0B0C10]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/30 text-[#C5A059]">
                        ${ex.tag}
                    </span>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-black text-white mb-2">${ex.name}</h3>
                    <p class="font-mono text-xs tracking-wider uppercase text-[#FF2E63] mb-1">
                        TARGET: <span class="text-white/80">${ex.target}</span>
                    </p>
                    <p class="font-mono text-xs tracking-wider uppercase text-[#C5A059] mb-4">
                        POSITION: <span class="text-white/80">${ex.position}</span>
                    </p>
                    <p class="text-[#E5E5E5]/70 text-xs leading-relaxed font-light mb-6">
                        ${ex.movement}
                    </p>
                </div>
            </div>
            <div class="p-6 pt-0 border-t border-[#E5E5E5]/10 mt-auto grid grid-cols-2 gap-2 text-[10px] font-bold tracking-widest uppercase">
                <div class="pt-4">
                    <span class="text-[#E5E5E5]/40 block mb-1">EQUIPMENT</span>
                    <span class="text-white">${ex.equipment}</span>
                </div>
                <div class="pt-4">
                    <span class="text-[#E5E5E5]/40 block mb-1">INTENSITY</span>
                    <span class="text-white">${ex.intensity}</span>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategory(workoutData.chest, 'chest-grid');
    renderCategory(workoutData.back, 'back-grid');
    renderCategory(workoutData.legs, 'legs-grid');
    renderCategory(workoutData.arms, 'arms-grid');
});

