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
            tag: "MASS BUILDER",
            highlightColor: "text-red-500",
            details: "Focuses heavily on core stabilization and full chest engagement. High strain on triceps during lockout."
        },
        {
            name: "Incline Dumbbell Press",
            target: "Upper Pectoralis (Clavicular Head)",
            position: "Incline Bench (30 to 45 Degrees)",
            equipment: "Adjustable Bench & Dumbbells",
            movement: "Set incline to 30°. Keep elbows angled at 45°, lower weights for deep chest stretch, press upward in arc motion.",
            intensity: "Moderate / Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
            tag: "HYPERTROPHY",
            highlightColor: "text-green-500",
            details: "Isolates the upper chest muscles. Excellent for building upper chest volume and shoulder stability."
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
            tag: "POWER",
            highlightColor: "text-red-500",
            details: "Full posterior chain activator. Heavy pressure on lower back, hamstrings, and upper traps."
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
            tag: "LEG CORE",
            highlightColor: "text-green-500",
            details: "Primary compound lower body exercise. High tension on quads and glutes."
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
            tag: "SHOULDERS",
            highlightColor: "text-red-500",
            details: "Builds shoulder strength and core stability."
        }
    ],
    bodyweight: [
        {
            name: "Classic Diamond Pushup",
            target: "Triceps Brachii & Inner Pectoralis",
            position: "Prone Plank Position",
            equipment: "Bodyweight Only",
            movement: "Place hands together forming a diamond under chest. Lower chest down keeping elbows close, press up explosively.",
            intensity: "Bodyweight (4 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80",
            tag: "BODYWEIGHT",
            highlightColor: "text-green-500",
            details: "High triceps activation with intense inner chest contraction."
        }
    ],
    recovery: [
        {
            name: "Percussive Foam Rolling",
            target: "Myofascial Release & Lactic Acid Removal",
            position: "Floor Mat Rest",
            equipment: "Foam Roller / Massage Gun",
            movement: "Slowly roll targeted muscle group back and forth over tight spots for 30-60 seconds to release tension.",
            intensity: "Low Intensity Recovery (10-15 Mins)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
            tag: "RECOVERY",
            highlightColor: "text-green-500",
            details: "Increases blood circulation, reduces muscle soreness, and improves flexibility."
        }
    ]
};

// Render Exercises Cards
function renderCategory(items, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = items.map((ex, index) => `
        <div class="hover-card bg-cardbg/40 rounded-3xl overflow-hidden border border-gold/20 flex flex-col justify-between cursor-pointer" onclick="openModal('${elementId}', ${index})">
            <div>
                <div class="relative h-48 w-full overflow-hidden">
                    <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span class="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-darkbg/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold">
                        ${ex.tag}
                    </span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-black text-white mb-2">${ex.name}</h3>
                    <p class="font-mono text-xs tracking-wider uppercase ${ex.highlightColor} mb-1">
                        TARGET: <span class="text-white/80">${ex.target}</span>
                    </p>
                    <p class="text-xs text-gray-400 mt-2">Click card to view movement & target details &rarr;</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Modal Dialog
function openModal(category, index) {
    const ex = workoutData[category.replace('-grid', '')][index];
    const modal = document.getElementById('exercise-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <span class="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-xs mb-3">${ex.tag}</span>
        <h2 class="text-3xl font-black mb-4">${ex.name}</h2>
        <img src="${ex.image}" class="w-full h-56 object-cover rounded-2xl mb-6 border border-gold/20" />
        
        <div class="space-y-4 text-sm">
            <div>
                <span class="block font-bold text-gold uppercase text-xs">Target Muscle Group:</span>
                <p class="${ex.highlightColor} font-semibold">${ex.target}</p>
            </div>
            <div>
                <span class="block font-bold text-gold uppercase text-xs">Movement Protocol:</span>
                <p class="text-gray-300 leading-relaxed">${ex.movement}</p>
            </div>
            <div>
                <span class="block font-bold text-gold uppercase text-xs">Muscle Pressure & Bio-Mechanics:</span>
                <p class="text-gray-300">${ex.details}</p>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700 text-xs">
                <div>
                    <span class="text-gray-400 block">POSITION:</span>
                    <span>${ex.position}</span>
                </div>
                <div>
                    <span class="text-gray-400 block">INTENSITY:</span>
                    <span>${ex.intensity}</span>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

// Close Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('exercise-modal').classList.add('hidden');
});

// Search Filter
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    Object.keys(workoutData).forEach(key => {
        const filtered = workoutData[key].filter(ex => 
            ex.name.toLowerCase().includes(query) || 
            ex.target.toLowerCase().includes(query)
        );
        renderCategory(filtered, `${key}-grid`);
    });
});

// Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-toggle-icon');

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
    themeIcon.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '☀️';
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderCategory(workoutData.chest, 'chest-grid');
    renderCategory(workoutData.back, 'back-grid');
    renderCategory(workoutData.legs, 'legs-grid');
    renderCategory(workoutData.arms, 'arms-grid');
    renderCategory(workoutData.bodyweight, 'bodyweight-grid');
    renderCategory(workoutData.recovery, 'recovery-grid');
});

