<script>
    // 1. تمام ایکسرسائزز کا ڈیٹا بیس
    const exercisesData = {
        chest: [
            {
                name: "Barbell Bench Press",
                tag: "MASS BUILDER",
                target: "MID & LOWER PECTORALIS MAJOR",
                movement: "Set shoulders flat, lower bar to sternum with controlled tempo, drive feet to floor and press straight up.",
                pressure: "Isolates chest fibers with maximum force output.",
                position: "FLAT BENCH",
                intensity: "HEAVY (4 SETS x 6-8 REPS)",
                image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
                dos: "Keep shoulder blades retracted and feet planted firmly.",
                donts: "Do not bounce the barbell off your chest or flare elbows excessively."
            },
            {
                name: "Incline Dumbbell Press",
                tag: "HYPERTROPHY",
                target: "UPPER PECTORALIS (CLAVICULAR HEAD)",
                movement: "Set incline to 30°. Keep elbows angled at 45°, lower weights for deep chest stretch, press upward in arc motion.",
                pressure: "Isolates upper chest muscles for balanced volume.",
                position: "INCLINE BENCH (30-45°)",
                intensity: "MODERATE / HEAVY (4 SETS x 8-10 REPS)",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
                dos: "Control the dumbbells throughout the full range of motion.",
                donts: "Avoid setting bench angle too high to prevent shoulder strain."
            }
        ],
        back: [
            {
                name: "Conventional Deadlift",
                tag: "POWER",
                target: "ERECTOR SPINAE, LATISSIMUS DORSI, GLUTES",
                movement: "Hinge at hips, keep bar close to shins, brace core, drive through heels and lock out hips simultaneously.",
                pressure: "Full posterior chain overload and central nervous system stimulus.",
                position: "STANDING PULL",
                intensity: "VERY HEAVY (3 SETS x 5 REPS)",
                image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
                dos: "Maintain a completely neutral spine throughout the lift.",
                donts: "Never round your lower back under heavy tension."
            }
        ],
        shoulders: [
            {
                name: "Overhead Barbell Press",
                tag: "SHOULDERS",
                target: "ANTERIOR & LATERAL DELTOIDS",
                movement: "Rack bar at collarbone level. Brace glutes, press vertically clearing chin, fully extend overhead.",
                pressure: "Builds shoulder mass and upper body vertical push power.",
                position: "STANDING UPRIGHT",
                intensity: "HEAVY (4 SETS x 6-8 REPS)",
                image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
                dos: "Squeeze core and glutes to prevent leaning back.",
                donts: "Do not flare elbows wide or push with knees."
            }
        ],
        legs: [
            {
                name: "Barbell Back Squat",
                tag: "LEG CORE",
                target: "QUADRICEPS, GLUTEUS MAXIMUS",
                movement: "Set bar on upper traps, sit back into hips, descend below parallel, drive up through mid-foot.",
                pressure: "Maximum leg strength, quad mass, and hip stability.",
                position: "UPRIGHT STANCE",
                intensity: "HEAVY (4 SETS x 8 REPS)",
                image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
                dos: "Keep chest proud and knees tracking in line with toes.",
                donts: "Do not allow knees to cave inward or heels to lift."
            }
        ],
        core: [
            {
                name: "Classic Diamond Pushup",
                tag: "BODYWEIGHT",
                target: "TRICEPS BRACHII & INNER PECTORALIS",
                movement: "Place hands together under chest forming a diamond shape. Lower chest to hands, press up steadily.",
                pressure: "Isolates triceps head and inner chest fibers.",
                position: "PLANK POSITION",
                intensity: "BODYWEIGHT (4 SETS x 12-15 REPS)",
                image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
                dos: "Keep body straight from head to heels.",
                donts: "Do not drop hips or arch lower back downwards."
            }
        ],
        recovery: [
            {
                name: "Percussive Foam Rolling",
                tag: "RECOVERY",
                target: "MYOFASCIAL RELEASE & LACTIC ACID REMOVAL",
                movement: "Slowly roll muscle belly over foam roller for 60 seconds per zone to relieve tissue tightness.",
                pressure: "Increases circulation and accelerates recovery rate.",
                position: "FLOOR BASED",
                intensity: "LIGHT (10-15 MINUTES DAILY)",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
                gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
                gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
                dos: "Breathe deeply and pause over sensitive tight spots.",
                donts: "Avoid rolling directly over sharp bony joints."
            }
        ]
    };

    let activeTab = 'correct';
    let currentExercise = null;

    // 2. کارڈز کو اسکرین پر ڈسپلے کرنا
    function renderGrids() {
        Object.keys(exercisesData).forEach(cat => {
            const container = document.getElementById(`${cat}-grid`);
            if(!container) return;
            
            container.innerHTML = exercisesData[cat].map((ex, index) => `
                <div class="hover-card bg-cardbg/60 rounded-3xl overflow-hidden border border-gold/20 flex flex-col justify-between cursor-pointer p-4" onclick="openExerciseModal('${cat}', ${index})">
                    <div>
                        <div class="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                            <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover" />
                            <span class="absolute top-3 left-3 font-mono text-[10px] bg-darkbg/90 px-3 py-1 rounded-full border border-gold/30 text-gold uppercase tracking-widest font-bold">
                                ${ex.tag}
                            </span>
                        </div>
                        <h3 class="text-xl font-black text-white mb-1 brand-font">${ex.name}</h3>
                        <p class="text-xs text-gold font-bold mb-2">TARGET: <span class="text-gray-300 font-normal">${ex.target}</span></p>
                    </div>
                    <p class="text-xs text-gray-400 border-t border-gold/10 pt-3 mt-2">Click card to view movement & target details →</p>
                </div>
            `).join('');
        });
    }

    // 3. پاپ اپ ماڈل ونڈو کھولنا
    function openExerciseModal(cat, index) {
        currentExercise = exercisesData[cat][index];
        activeTab = 'correct';
        updateModalContent();
        document.getElementById('exercise-modal').classList.remove('hidden');
    }

    // 4. پاپ اپ بند کرنا
    function closeModal() {
        document.getElementById('exercise-modal').classList.add('hidden');
    }

    // 5. Correct vs Wrong GIF سوئچ کرنا
    function switchModalTab(tab) {
        activeTab = tab;
        updateModalContent();
    }

    // 6. ماڈل کے مواد کو اپڈیٹ کرنا
    function updateModalContent() {
        if(!currentExercise) return;
        const ex = currentExercise;
        const content = document.getElementById('modal-content');

        content.innerHTML = `
            <span class="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-xs font-bold mb-2">${ex.tag}</span>
            <h2 class="text-2xl md:text-3xl font-black mb-4 brand-font">${ex.name}</h2>

            <div class="flex gap-3 mb-4">
                <button onclick="switchModalTab('correct')" class="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'correct' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-zinc-800 text-gray-400 hover:text-white'}">
                    ✓ Correct Form
                </button>
                <button onclick="switchModalTab('wrong')" class="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'wrong' ? 'bg-rose-600 text-white shadow-lg' : 'bg-zinc-800 text-gray-400 hover:text-white'}">
                    ✕ Wrong Form
                </button>
            </div>

            <div class="relative h-64 w-full rounded-2xl overflow-hidden mb-4 border border-gold/30 bg-black flex items-center justify-center">
                <img src="${activeTab === 'correct' ? ex.gifCorrect : ex.gifWrong}" alt="${ex.name}" class="h-full object-contain" />
            </div>

            <div class="p-3.5 rounded-xl mb-4 text-xs font-medium ${activeTab === 'correct' ? 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-300' : 'bg-rose-950/60 border border-rose-500/30 text-rose-300'}">
                <strong>${activeTab === 'correct' ? 'RECOMMENDED EXECUTION:' : 'COMMON MISTAKE TO AVOID:'}</strong> ${activeTab === 'correct' ? ex.dos : ex.donts}
            </div>

            <div class="space-y-3 text-xs text-gray-300 border-t border-gold/10 pt-4">
                <div>
                    <span class="text-gold font-bold uppercase block mb-0.5">Target Muscle Group:</span>
                    <p class="text-white font-medium">${ex.target}</p>
                </div>
                <div>
                    <span class="text-gold font-bold uppercase block mb-0.5">Movement Protocol:</span>
                    <p class="text-gray-300">${ex.movement}</p>
                </div>
                <div>
                    <span class="text-gold font-bold uppercase block mb-0.5">Muscle Pressure & Bio-Mechanics:</span>
                    <p class="text-gray-300">${ex.pressure}</p>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-2 border-t border-gold/10 text-[11px]">
                    <div><strong class="text-gold uppercase block">Position:</strong> ${ex.position}</div>
                    <div><strong class="text-gold uppercase block">Intensity:</strong> ${ex.intensity}</div>
                </div>
            </div>
        `;
    }

    // 7. تھیم ٹوگل (Light / Dark)
    function toggleTheme() {
        const html = document.documentElement;
        const btn = document.getElementById('theme-toggle');
        if(html.classList.contains('dark')) {
            html.classList.remove('dark');
            btn.innerText = '☀️';
        } else {
            html.classList.add('dark');
            btn.innerText = '🌙';
        }
    }

    // 8. سرچ فلٹر فنکشن
    function filterExercises() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const cards = document.querySelectorAll('.hover-card');
        
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            if(text.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // پیج لوڈ ہوتے ہی فنکشنز کو ایکٹیو کرنا
    document.addEventListener('DOMContentLoaded', renderGrids);
</script>

