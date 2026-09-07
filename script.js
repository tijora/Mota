const workoutData = {
    shoulders: [
        {
            name: "Overhead Military Press",
            target: "Anterior & Lateral Deltoids",
            position: "Standing Upright",
            equipment: "Barbell / Dumbbells",
            movement: "Keep core locked, press bar directly overhead clearing chin, extend arms without arching lower back.",
            intensity: "75% 1RM (4 Sets x 8 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            tag: "SHOULDER",
            correctFormText: "✓ کمر سیدھی رکھیں، کور ٹائٹ ہو اور بار کو بالکل برابری سے سر کے اوپر لائیں۔",
            wrongFormText: "✕ کمر کو پیچھے زیادہ نہ موڑیں (Over-arching) اور جھٹکے سے وزن اوپر نہ اٹھائیں۔"
        }
    ],
    chest: [
        {
            name: "Barbell Bench Press",
            target: "Pectoralis Major",
            position: "Flat Bench",
            equipment: "Barbell & Bench",
            movement: "Retract shoulder blades, lower bar slowly to mid-chest level, and press up smoothly.",
            intensity: "80% 1RM (4 Sets x 6 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            tag: "CHEST",
            correctFormText: "✓ پاؤں زمین پر جمائے رکھیں اور باربل کو کنٹرولڈ رفتار میں سینے تک لائیں۔",
            wrongFormText: "✕ باربل کو سینے پر نہ اچھالیں اور کوہنیاں بہت زیادہ باہر نہ پھیلاؤ۔"
        }
    ],
    back: [
        {
            name: "Conventional Deadlift",
            target: "Erector Spinae, Glutes, Lats",
            position: "Standing Pull",
            equipment: "Barbell & Heavy Plates",
            movement: "Keep spine neutral, drive hips forward, pull bar along shins until standing erect.",
            intensity: "85% 1RM (3 Sets x 5 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            tag: "DEADLIFT",
            correctFormText: "✓ کمر کو بالکل سیدھا رکھیں، بار کو ٹانگوں کے قریب رکھ کر اوپر کھینچیں۔",
            wrongFormText: "✕ کمر کو گول (Round Back) نہ کریں ورنہ ڈسک انجری ہو سکتی ہے۔"
        }
    ],
    legs: [
        {
            name: "Barbell Back Squat",
            target: "Quadriceps & Glutes",
            position: "Upright Stance",
            equipment: "Barbell & Squat Rack",
            movement: "Sit back into hips, lower thighs below parallel to floor, drive through heels to stand.",
            intensity: "75% 1RM (4 Sets x 8 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            tag: "LEGS",
            correctFormText: "✓ گھٹنوں کو پنجوں کی سمت میں رکھیں اور مکمل نیچے (Parallel) جائیں۔",
            wrongFormText: "✕ گھٹنوں کو اندر کی طرف نہ جھکنے دیں اور ہیلس نہ اٹھائیں۔"
        }
    ],
    core: [
        {
            name: "Hanging Leg Raise",
            target: "Lower Abs & Hip Flexors",
            position: "Hanging Pull-Up Bar",
            equipment: "Pull-Up Bar",
            movement: "Grip bar, flex abs, lift legs up to 90 degrees without swinging body.",
            intensity: "Bodyweight (4 Sets x 12 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            tag: "ABS",
            correctFormText: "✓ جسم کا جھولا (Momentum) نہ بننے دیں، پیٹ کے پٹھوں سے ٹانگیں اوپر اٹھائیں۔",
            wrongFormText: "✕ تیز تیز جھٹکے مت دیں۔"
        }
    ],
    neck: [
        {
            name: "Barbell Shrugs",
            target: "Upper Trapezius & Neck",
            position: "Standing Upright",
            equipment: "Heavy Barbell",
            movement: "Hold barbell at thigh level, raise shoulders straight up toward ears, squeeze traps.",
            intensity: "70% 1RM (4 Sets x 12 Reps)",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            tag: "NECK / TRAPS",
            correctFormText: "✓ کندھوں کو سیدھا اوپر کانوں کی طرف لائیں اور اوپر ایک سیکنڈ ہولڈ کریں۔",
            wrongFormText: "✕ کندھوں کو گول گول نہ گھمائیں (Do not roll shoulders)۔"
        }
    ]
};

function renderCategory(items, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = items.map((ex, index) => `
        <div class="hover-card bg-cardbg/40 rounded-3xl overflow-hidden border border-gold/20 flex flex-col justify-between cursor-pointer p-4" onclick="openModal('${elementId}', ${index})">
            <div class="relative h-44 w-full rounded-2xl overflow-hidden mb-3">
                <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover" />
                <span class="absolute top-2 left-2 font-mono text-[10px] bg-darkbg/90 px-3 py-1 rounded-full border border-gold/30 text-gold">
                    ${ex.tag}
                </span>
            </div>
            <div>
                <h3 class="text-lg font-black text-white mb-1">${ex.name}</h3>
                <p class="text-xs text-gold">Target: <span class="text-white">${ex.target}</span></p>
                <p class="text-[11px] text-gray-400 mt-2">کلک کریں: GIF اور صحیح/غلط فارم دیکھیں &rarr;</p>
            </div>
        </div>
    `).join('');
}

let activeFormTab = 'correct';

function openModal(categoryKey, index) {
    const cat = categoryKey.replace('-grid', '');
    const ex = workoutData[cat][index];
    const modal = document.getElementById('exercise-modal');
    const content = document.getElementById('modal-content');

    window.currentEx = ex;
    activeFormTab = 'correct';
    
    updateModalUI();
    modal.classList.remove('hidden');
}

function updateModalUI() {
    const ex = window.currentEx;
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <span class="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-xs mb-2">${ex.tag}</span>
        <h2 class="text-2xl font-black mb-4">${ex.name}</h2>
        
        <div class="flex gap-2 mb-3">
            <button onclick="switchForm('correct')" class="flex-1 py-2 rounded-xl font-bold text-xs ${activeFormTab === 'correct' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400'}">
                ✓ صحیح طریقہ (Correct Form)
            </button>
            <button onclick="switchForm('wrong')" class="flex-1 py-2 rounded-xl font-bold text-xs ${activeFormTab === 'wrong' ? 'bg-rose-600 text-white' : 'bg-gray-800 text-gray-400'}">
                ✕ غلط طریقہ (Wrong Form)
            </button>
        </div>

        <div class="relative h-60 w-full rounded-2xl overflow-hidden mb-4 border border-gold/20 bg-black flex items-center justify-center">
            <img src="${activeFormTab === 'correct' ? ex.gifCorrect : ex.gifWrong}" class="h-full object-contain" />
        </div>

        <div class="p-3 rounded-xl mb-4 text-xs font-semibold ${activeFormTab === 'correct' ? 'bg-emerald-950/60 border border-emerald-500/30 text-emerald-300' : 'bg-rose-950/60 border border-rose-500/30 text-rose-300'}">
            ${activeFormTab === 'correct' ? ex.correctFormText : ex.wrongFormText}
        </div>

        <div class="space-y-3 text-xs text-gray-300 border-t border-gray-800 pt-3">
            <p><strong class="text-gold uppercase">Target Muscle:</strong> ${ex.target}</p>
            <p><strong class="text-gold uppercase">Movement:</strong> ${ex.movement}</p>
            <div class="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                <div><span class="text-gray-400">POSITION:</span> ${ex.position}</div>
                <div><span class="text-gray-400">INTENSITY:</span> ${ex.intensity}</div>
            </div>
        </div>
    `;
}

function switchForm(type) {
    activeFormTab = type;
    updateModalUI();
}

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('exercise-modal').classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(workoutData).forEach(key => renderCategory(workoutData[key], `${key}-grid`));
});

