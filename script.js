// MOTA Fitness - Complete Exercises Database & Interactive Logic

const exercisesData = {
    chest: [
        {
            name: "Barbell Bench Press",
            tag: "CHEST",
            target: "Mid & Lower Pectoralis Major",
            movement: "Set shoulders flat, lower bar to chest with control, press straight up firmly.",
            pressure: "Maximum horizontal pressing power and chest overall volume.",
            position: "Flat Bench",
            intensity: "Heavy (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep shoulder blades retracted and feet planted firmly on floor.",
            donts: "Do not bounce the barbell off your chest or flare elbows excessively."
        },
        {
            name: "Incline Bench Press",
            tag: "CHEST",
            target: "Upper Pectoralis (Clavicular Head)",
            movement: "Bench at 30-45°. Lower bar to upper chest, drive upward in arc trajectory.",
            pressure: "Fills upper chest density and collarbone junction.",
            position: "Incline Bench",
            intensity: "Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Control the weight on the eccentric path down.",
            donts: "Avoid setting incline too high to prevent front deltoid takeover."
        },
        {
            name: "Decline Bench Press",
            tag: "CHEST",
            target: "Lower Pectoralis Major",
            movement: "Decline bench -15 to -30°. Unrack bar, lower lower chest, press powerfully.",
            pressure: "Targeted lower pectoral isolation and chest border definition.",
            position: "Decline Bench",
            intensity: "Moderate / Heavy (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Maintain controlled press path over lower ribcage.",
            donts: "Do not lift head off bench or arch spine off padding."
        },
        {
            name: "Dumbbell Press",
            tag: "CHEST",
            target: "Pectoralis Major & Stabilizers",
            movement: "Lie flat with dumbbells. Lower with elbows at 45°, squeeze together at top.",
            pressure: "Deeper stretch than barbells with independent arm balance.",
            position: "Flat Bench",
            intensity: "Heavy (4 Sets x 8 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Maintain slight arc squeeze at top without clinking weights.",
            donts: "Do not drop dumbbells abruptly at deep stretch bottom."
        },
        {
            name: "Incline Dumbbell Press",
            tag: "CHEST",
            target: "Upper Pectoralis Major",
            movement: "Set incline 30-45°. Lower dumbbells deep, press up and slightly inward.",
            pressure: "Upper chest hypertrophy and shoulder stability.",
            position: "Incline Bench",
            intensity: "Moderate (4 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep elbows tucked at 45 degree angle.",
            donts: "Do not flare elbows perpendicular to body."
        },
        {
            name: "Dumbbell Fly",
            tag: "CHEST",
            target: "Outer Pectoralis Squeeze",
            movement: "Slight bend in elbows. Open arms wide for deep chest stretch, hug inward.",
            pressure: "Horizontal adduction chest fiber stretch.",
            position: "Flat Bench",
            intensity: "Light / Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Maintain rigid bend in elbows throughout movement.",
            donts: "Do not turn this into a dumbbell bench press by bending elbows."
        },
        {
            name: "Cable Fly",
            tag: "CHEST",
            target: "Inner & Lower Chest Squeeze",
            movement: "Set pulleys high/mid. Step forward, bring handles together in front with chest flex.",
            pressure: "Constant cable tension across entire pectoral contraction.",
            position: "Standing Staggered",
            intensity: "Moderate (3 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Squeeze pectorals hard at peak point for 1 second.",
            donts: "Do not let handles yank arms back past shoulder plane."
        },
        {
            name: "Pec Deck Fly",
            tag: "CHEST",
            target: "Sternal Pectoralis Isolation",
            movement: "Sit machine backed. Forearms/hands on pads, press together in front.",
            pressure: "Pure chest isolation without shoulder stabilizer fatigue.",
            position: "Seated Machine",
            intensity: "Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep back flat against pad and chest proud.",
            donts: "Do not use momentum to swing weights forward."
        },
        {
            name: "Push-ups",
            tag: "CHEST",
            target: "Full Chest, Core & Triceps",
            movement: "Plank stance, hands shoulder-width. Lower body till chest touches floor, press up.",
            pressure: "Bodyweight chest endurance and core integration.",
            position: "Floor Plank Stance",
            intensity: "Bodyweight (4 Sets x 15-20 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep core rigid in straight line from head to heels.",
            donts: "Do not sag lower back or flare elbows."
        },
        {
            name: "Chest Dips",
            tag: "CHEST",
            target: "Lower Chest & Anterior Deltoids",
            movement: "Parallel bars. Lean torso forward 30°, lower until upper arms parallel to floor, press up.",
            pressure: "Bodyweight lower chest overload and tricep stimulus.",
            position: "Parallel Dip Station",
            intensity: "Bodyweight / Weighted (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Lean forward to keep focus on chest rather than triceps.",
            donts: "Do not dip too low to protect shoulder rotator cuff."
        }
    ],
    back: [
        {
            name: "Pull-ups",
            tag: "BACK",
            target: "Latissimus Dorsi & Upper Back",
            movement: "Overhand grip. Pull chest up to bar pulling elbows down, lower under full control.",
            pressure: "Bodyweight back width and upper body pulling power.",
            position: "Hanging Bar Stance",
            intensity: "Bodyweight (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Pull with your lats and squeeze shoulder blades.",
            donts: "Do not swing legs or kipping body up."
        },
        {
            name: "Lat Pulldown",
            tag: "BACK",
            target: "Latissimus Dorsi (Width)",
            movement: "Sit machine, wide grip. Pull bar down to upper chest while driving elbows back.",
            pressure: "Controlled lat isolation and lat width expansion.",
            position: "Seated Lat Machine",
            intensity: "Moderate / Heavy (4 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Keep chest lifted high towards the bar.",
            donts: "Do not pull bar behind neck."
        },
        {
            name: "Barbell Row",
            tag: "BACK",
            target: "Mid-Back, Rhomboids & Lats",
            movement: "Hinge hips 45°, bend knees slightly. Pull barbell to lower abdomen, squeeze back.",
            pressure: "Back thickness and posterior chain endurance.",
            position: "Bent-over Stance",
            intensity: "Heavy (4 Sets x 8 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Keep spine neutral and core tightly braced.",
            donts: "Do not jerk torso up to lift heavy weights."
        },
        {
            name: "Dumbbell Row",
            tag: "BACK",
            target: "Unilateral Lat & Rhomboid",
            movement: "One knee & hand on bench. Pull dumbbell to hip, driving elbow back.",
            pressure: "Unilateral back balance and deep elbow pull range.",
            position: "Bench Supported",
            intensity: "Moderate / Heavy (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Pull dumbbell toward hip rather than shoulder.",
            donts: "Do not twist spine violently at top."
        },
        {
            name: "Seated Cable Row",
            tag: "BACK",
            target: "Middle Trapezius & Rhomboids",
            movement: "Seated facing pulley. Pull V-bar to torso keeping chest upright, stretch forward slowly.",
            pressure: "Consistent tension back thickness and posture correction.",
            position: "Seated Cable Bench",
            intensity: "Moderate (4 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Sit upright with shoulders back at squeeze.",
            donts: "Do not rock excessively back and forth."
        },
        {
            name: "T-Bar Row",
            tag: "BACK",
            target: "Inner Back & Lat Thickness",
            movement: "Straddle bar, bend hips. Pull landmine bar to chest driving elbows back.",
            pressure: "Heavy rowing load with neutral grip mechanical advantage.",
            position: "Bent Over Straddle",
            intensity: "Heavy (4 Sets x 8 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Keep knees bent to relieve low back strain.",
            donts: "Do not round lower back during heavy lift."
        },
        {
            name: "Deadlift",
            tag: "BACK",
            target: "Full Posterior Chain & Erector Spinae",
            movement: "Bar close to shins, hinge hips back. Grip bar, push feet into floor, lockout hips upright.",
            pressure: "Total body strength, spinal density and central nervous system growth.",
            position: "Standing Floor Pull",
            intensity: "Very Heavy (3 Sets x 5 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Brace abs hard and keep bar touching legs.",
            donts: "Never curve lower back under heavy load."
        },
        {
            name: "Straight-Arm Pulldown",
            tag: "BACK",
            target: "Latissimus Dorsi Isolation",
            movement: "Standing cable. Keeping arms straight, pull bar down in arc to thighs.",
            pressure: "Isolates lats without bicep assistance.",
            position: "Standing Cable",
            intensity: "Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Keep soft bend in elbows and focus purely on lats.",
            donts: "Do not bend arms into triceps pushdown."
        },
        {
            name: "Face Pull",
            tag: "BACK",
            target: "Rear Delts, Rotator Cuff & Upper Traps",
            movement: "High pulley rope. Pull towards eyes flaring elbows high and driving thumbs back.",
            pressure: "Shoulder health, posture and rear delt hypertrophy.",
            position: "Standing Cable Stance",
            intensity: "Light / Moderate (4 Sets x 15 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Pull center of rope towards bridge of nose.",
            donts: "Do not use heavy weight that compromises form."
        }
    ],
    shoulders: [
        {
            name: "Overhead Press",
            tag: "SHOULDERS",
            target: "Anterior & Lateral Deltoids",
            movement: "Bar on collarbones. Press overhead vertically clearing face, lockout above head.",
            pressure: "Upper body vertical pushing power and shoulder mass.",
            position: "Standing Upright Stance",
            intensity: "Heavy (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Squeeze glutes and abs to brace core.",
            donts: "Do not lean excessively backward during press."
        },
        {
            name: "Dumbbell Shoulder Press",
            tag: "SHOULDERS",
            target: "Anterior & Side Delts",
            movement: "Seated upright bench. Dumbbells at ear height, press straight up together.",
            pressure: "Controlled shoulder mass building and overhead stability.",
            position: "Seated 90° Bench",
            intensity: "Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Lower dumbbells down to shoulder level.",
            donts: "Do not arch lower back away from back support."
        },
        {
            name: "Arnold Press",
            tag: "SHOULDERS",
            target: "All Three Deltoid Heads",
            movement: "Dumbbells in front facing palms inward. Rotate palms outward as you press overhead.",
            pressure: "Full shoulder rotation and anterior-to-lateral recruitment.",
            position: "Seated Bench Stance",
            intensity: "Moderate (3 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Smoothly rotate wrists in fluid continuous motion.",
            donts: "Do not rush or use momentum."
        },
        {
            name: "Lateral Raise",
            tag: "SHOULDERS",
            target: "Lateral Deltoids (Width)",
            movement: "Standing. Raise dumbbells out to sides with slight elbow bend until parallel with shoulders.",
            pressure: "Isolates side delt for 3D shoulder capped look.",
            position: "Standing Upright",
            intensity: "Light / Moderate (4 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Lead movement with elbows rather than hands.",
            donts: "Do not swing body to throw dumbbells up."
        },
        {
            name: "Front Raise",
            tag: "SHOULDERS",
            target: "Anterior Deltoid Isolation",
            movement: "Dumbbells on thighs. Raise arms forward directly in front of body to eye level.",
            pressure: "Front deltoid hypertrophy.",
            position: "Standing Stance",
            intensity: "Light / Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Keep core tight and control down-phase.",
            donts: "Do not lean back as weight goes up."
        },
        {
            name: "Rear Delt Fly",
            tag: "SHOULDERS",
            target: "Posterior Deltoids",
            movement: "Bent forward 90° or pec deck reverse. Fly dumbbells out to sides, squeeze rear shoulders.",
            pressure: "Rear delt isolation and shoulder balance.",
            position: "Bent-over / Machine",
            intensity: "Light (4 Sets x 15 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Military_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/5/52/Military-press-1.png",
            dos: "Focus squeeze on back of shoulders.",
            donts: "Do not squeeze traps instead of rear delts."
        },
        {
            name: "Upright Row",
            tag: "SHOULDERS",
            target: "Trapezius & Side Deltoids",
            movement: "Barbell held close to thighs. Pull bar straight up to chest keeping elbows high.",
            pressure: "Trapezius and shoulder junction overload.",
            position: "Standing Stance",
            intensity: "Moderate (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Keep bar close to body throughout path.",
            donts: "Do not pull bar above chest height if experiencing joint pinch."
        },
        {
            name: "Shrugs",
            tag: "SHOULDERS",
            target: "Upper Trapezius Muscle",
            movement: "Dumbbells or barbell at sides. Elevate shoulders straight up towards ears, squeeze top.",
            pressure: "Upper trap mass and neck stability.",
            position: "Standing Upright",
            intensity: "Heavy (4 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Elevate straight up and hold peak 1 second.",
            donts: "Do not roll shoulders in circles."
        }
    ],
    biceps: [
        {
            name: "Barbell Curl",
            tag: "ARMS",
            target: "Biceps Brachii (Short & Long Heads)",
            movement: "Underhand shoulder-width grip. Curl bar up to chest keeping elbows fixed at ribs.",
            pressure: "Maximum overall bicep mass building.",
            position: "Standing Upright",
            intensity: "Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep elbows glued to torso sides.",
            donts: "Do not swing hips back and forth to lift."
        },
        {
            name: "Dumbbell Curl",
            tag: "ARMS",
            target: "Biceps Brachii Supination",
            movement: "Dumbbells at sides palms neutral. Curl up while supinating palms facing ceiling.",
            pressure: "Unilateral bicep peak isolation.",
            position: "Standing or Seated",
            intensity: "Moderate (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Fully rotate wrists out at top for peak flex.",
            donts: "Do not allow elbows to drift forward."
        },
        {
            name: "Hammer Curl",
            tag: "ARMS",
            target: "Brachialis & Brachioradialis (Thickness)",
            movement: "Dumbbells neutral grip (thumbs up). Curl up without rotating wrists.",
            pressure: "Forearm and arm thickness build.",
            position: "Standing Upright",
            intensity: "Moderate / Heavy (4 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Squeeze top flex hard.",
            donts: "Do not let weights drop down rapidly."
        },
        {
            name: "Preacher Curl",
            tag: "ARMS",
            target: "Lower Bicep Isolation",
            movement: "Arms supported on incline preacher pad. Lower bar fully, curl up squeeze.",
            pressure: "Eliminates cheating for direct bicep stretch.",
            position: "Seated Preacher Bench",
            intensity: "Moderate (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Extend lower arm fully under control.",
            donts: "Do not lift body off preacher pad."
        },
        {
            name: "Concentration Curl",
            tag: "ARMS",
            target: "Bicep Peak Squeeze",
            movement: "Seated. Elbow braced against inner thigh. Curl dumbbell upward to shoulder.",
            pressure: "Peak concentration flex.",
            position: "Seated Single Arm",
            intensity: "Light / Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep upper arm motionless against inner leg.",
            donts: "Do not move thigh during lift."
        },
        {
            name: "Cable Curl",
            tag: "ARMS",
            target: "Continuous Bicep Tension",
            movement: "Low cable pulley with straight bar. Curl bar up toward shoulders.",
            pressure: "Constant tension throughout whole curve.",
            position: "Standing Low Cable",
            intensity: "Moderate (3 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Keep tension tight even at bottom of rep.",
            donts: "Do not lean back."
        },
        {
            name: "Incline Dumbbell Curl",
            tag: "ARMS",
            target: "Long Head Bicep Stretch",
            movement: "Seated on 45° incline bench. Let arms hang fully back, curl dumbbells up.",
            pressure: "Maximum long head stretch.",
            position: "Incline Bench 45°",
            intensity: "Moderate (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Allow arms to hang completely behind torso.",
            donts: "Do not bring shoulders forward."
        }
    ],
    triceps: [
        {
            name: "Tricep Pushdown",
            tag: "TRICEPS",
            target: "Lateral & Medial Tricep Heads",
            movement: "High pulley cable with bar or rope. Keep elbows pinned to sides, push down fully.",
            pressure: "Triceps isolation squeeze.",
            position: "Standing Cable",
            intensity: "Moderate / Heavy (4 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Lock out elbows completely at bottom.",
            donts: "Do not let elbows flare forward or up."
        },
        {
            name: "Overhead Tricep Extension",
            tag: "TRICEPS",
            target: "Long Head Triceps Stretch",
            movement: "Dumbbell or cable overhead. Lower behind head bending elbows, extend straight up.",
            pressure: "Deep triceps long head stretch.",
            position: "Seated or Standing",
            intensity: "Moderate (3 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep upper arms pointed close to ears.",
            donts: "Do not flare elbows outward."
        },
        {
            name: "Skull Crushers",
            tag: "TRICEPS",
            target: "Triceps Mass & Lockout",
            movement: "Lie flat on bench with EZ bar. Lower bar to forehead bending elbows, extend up.",
            pressure: "Heavy triceps power builder.",
            position: "Flat Bench",
            intensity: "Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep upper arms motionless.",
            donts: "Do not drop bar rapidly onto forehead."
        },
        {
            name: "Close-Grip Bench Press",
            tag: "TRICEPS",
            target: "Triceps Power & Inner Chest",
            movement: "Flat bench, grip hands shoulder-width apart. Lower bar to chest, press up.",
            pressure: "Heavy compound triceps loading.",
            position: "Flat Bench Close Grip",
            intensity: "Heavy (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bench-press-1.png",
            dos: "Tuck elbows tight to ribcage.",
            donts: "Do not grip bar too narrow to save wrists."
        },
        {
            name: "Dips",
            tag: "TRICEPS",
            target: "Triceps & Pectoral Border",
            movement: "Parallel bars, upright torso. Lower until upper arms parallel floor, push back up.",
            pressure: "Bodyweight triceps mass overload.",
            position: "Dip Station Vertical",
            intensity: "Bodyweight / Weighted (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Stay erect vertically to isolate triceps.",
            donts: "Do not bounce at bottom position."
        },
        {
            name: "Dumbbell Kickback",
            tag: "TRICEPS",
            target: "Triceps Peak Lockout",
            movement: "Bent over 90°. Upper arm parallel to body, extend dumbbell straight back.",
            pressure: "Peak triceps contraction isolation.",
            position: "Bent-over Supported",
            intensity: "Light / Moderate (3 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Lock arm straight out parallel to floor.",
            donts: "Do not let upper arm drop down."
        }
    ],
    legs: [
        {
            name: "Squats",
            tag: "LEGS",
            target: "Quadriceps, Gluteus & Core",
            movement: "Bar on upper back. Sit hips back, descend below parallel, drive up through mid-foot.",
            pressure: "King of lower body mass and core foundation.",
            position: "Standing Upright Barbell",
            intensity: "Heavy (4 Sets x 6-8 Reps)",
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Keep chest proud and knees tracking with toes.",
            donts: "Do not let knees buckle inward or heels lift."
        },
        {
            name: "Leg Press",
            tag: "LEGS",
            target: "Quadriceps & Gluteus",
            movement: "Seated sled 45°. Lower weight sled toward chest bending knees 90°, press up.",
            pressure: "Heavy quad volume without spinal load.",
            position: "45° Leg Press Machine",
            intensity: "Heavy (4 Sets x 10-12 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Press through heels and mid-foot.",
            donts: "Do not lock knees out hyper-extended at top."
        },
        {
            name: "Lunges",
            tag: "LEGS",
            target: "Quads, Glutes & Balance",
            movement: "Step forward, lower rear knee toward floor 90°, push back up to standing.",
            pressure: "Unilateral leg strength and hip stability.",
            position: "Walking / Standing",
            intensity: "Moderate (3 Sets x 12 Reps/leg)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Keep front knee aligned above ankle.",
            donts: "Do not let front knee slam forward past toes."
        },
        {
            name: "Bulgarian Split Squat",
            tag: "LEGS",
            target: "Glute Hypertrophy & Single Leg Quad",
            movement: "Rear foot elevated on bench. Lower hips deep on front leg, drive up.",
            pressure: "Extreme glute-quad hypertrophy stretch.",
            position: "Single Leg Bench Elevated",
            intensity: "Moderate (3 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Maintain upright torso and deep stretch.",
            donts: "Do not place front foot too close to bench."
        },
        {
            name: "Leg Extension",
            tag: "LEGS",
            target: "Isolated Quadriceps Rectus Femoris",
            movement: "Seated machine. Extend legs fully straight out flexing quads at peak.",
            pressure: "Pure quad isolation.",
            position: "Seated Machine",
            intensity: "Moderate (3 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Squeeze quads for 1 second at full extension.",
            donts: "Do not kick weights up aggressively."
        },
        {
            name: "Leg Curl",
            tag: "LEGS",
            target: "Hamstring Muscle Isolation",
            movement: "Lying or seated machine. Curl leg pad toward glutes flex hamstrings.",
            pressure: "Hamstring flex and knee flexion strength.",
            position: "Lying / Seated Machine",
            intensity: "Moderate (4 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Keep hips pressed flat against padding.",
            donts: "Do not swing lower back."
        },
        {
            name: "Romanian Deadlift",
            tag: "LEGS",
            target: "Hamstring & Glute Stretch",
            movement: "Hold barbell, slight knee bend. Push hips far back, lower bar down shins stretch hamstrings.",
            pressure: "Posterior chain lengthening overload.",
            position: "Standing Hinge",
            intensity: "Heavy (4 Sets x 8-10 Reps)",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deadlift_animation_loop.gif",
            dos: "Push hips as far back as possible.",
            donts: "Do not round lower back or bend knees too much."
        },
        {
            name: "Calf Raises",
            tag: "LEGS",
            target: "Gastrocnemius & Soleus",
            movement: "Stand on step edge. Lower heels deep, extend up onto toes peak calf flex.",
            pressure: "Calf density and ankle extension.",
            position: "Standing Elevated Edge",
            intensity: "Moderate / High (4 Sets x 15-20 Reps)",
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Pause 2 seconds at peak elevation.",
            donts: "Do not bounce fast at bottom stretch."
        },
        {
            name: "Hack Squat",
            tag: "LEGS",
            target: "Lower Quad Sweep Isolation",
            movement: "Incline hack machine. Descend deep below knees, press back up.",
            pressure: "Guided quad mass building.",
            position: "Hack Machine Angle",
            intensity: "Heavy (4 Sets x 10 Reps)",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Keep back flat against sled pad.",
            donts: "Do not let lower back round at bottom."
        },
        {
            name: "Hip Thrust",
            tag: "LEGS",
            target: "Gluteus Maximus Peak Squeeze",
            movement: "Upper back against bench, bar across hips. Drive hips up towards ceiling, squeeze glutes.",
            pressure: "Maximum glute power hypertrophy.",
            position: "Bench Supported Floor Drive",
            intensity: "Heavy (4 Sets x 8-12 Reps)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.gif",
            dos: "Tuck chin slightly forward at top squeeze.",
            donts: "Do not hyperextend lower spine at top."
        }
    ],
    core: [
        {
            name: "Crunches",
            tag: "CORE",
            target: "Upper Rectus Abdominis",
            movement: "Lie back knees bent. Flex abdominal wall raising shoulder blades off floor.",
            pressure: "Upper ab crunch compression.",
            position: "Floor Back Flat",
            intensity: "Bodyweight (3 Sets x 20 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Exhale sharply at top flex.",
            donts: "Do not pull neck with hands."
        },
        {
            name: "Sit-ups",
            tag: "CORE",
            target: "Abdominals & Hip Flexors",
            movement: "Lie flat knees bent. Raise full torso up until chest meets knees.",
            pressure: "Core strength and hip flexion.",
            position: "Floor Supine",
            intensity: "Bodyweight (3 Sets x 15 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep movement controlled throughout.",
            donts: "Do not slam back onto floor."
        },
        {
            name: "Leg Raises",
            tag: "CORE",
            target: "Lower Rectus Abdominis",
            movement: "Lie flat arms at side. Raise straight legs to 90° vertically, lower slowly.",
            pressure: "Lower ab isolation compression.",
            position: "Floor Supine Flat",
            intensity: "Bodyweight (3 Sets x 15 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep lower spine pressed into floor.",
            donts: "Do not arch lower back off floor."
        },
        {
            name: "Hanging Leg Raises",
            tag: "CORE",
            target: "Lower Abs & Core Stability",
            movement: "Hang from pull-up bar. Flex abs bringing feet straight up parallel to floor.",
            pressure: "Advanced lower abdominal compression.",
            position: "Hanging Bar Stance",
            intensity: "Bodyweight (4 Sets x 12 Reps)",
            image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Control momentum and flex pelvis up.",
            donts: "Do not swing legs back and forth."
        },
        {
            name: "Plank",
            tag: "CORE",
            target: "Transverse Abdominis & Core Bracing",
            movement: "Forearms and toes on floor. Hold body rigid in straight line.",
            pressure: "Isometrics core endurance.",
            position: "Prone Isometric Stance",
            intensity: "Time Based (3 Sets x 60 Secs)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Brace core as if about to be punched.",
            donts: "Do not drop hips or lift glutes high."
        },
        {
            name: "Russian Twist",
            tag: "CORE",
            target: "Obliques Rotational Strength",
            movement: "Seated hips angled 45°. Twist torso side-to-side touching hands or weight to floor.",
            pressure: "Oblique rotational hypertrophy.",
            position: "Seated Angled",
            intensity: "Bodyweight / Weighted (3 Sets x 20 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Rotate entire shoulders and ribcage.",
            donts: "Do not just move arms side to side."
        },
        {
            name: "Bicycle Crunch",
            tag: "CORE",
            target: "Rectus Abdominis & Obliques",
            movement: "Lying back. Alternate elbow to opposite knee in pedaling motion.",
            pressure: "Dynamic rotational ab flex.",
            position: "Floor Supine Alternating",
            intensity: "Bodyweight (3 Sets x 20 Reps)",
            image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Fully extend straight leg out on each turn.",
            donts: "Do not rush or jerk head."
        },
        {
            name: "Cable Crunch",
            tag: "CORE",
            target: "Heavy Abdominal Hypertrophy",
            movement: "Kneeling low facing cable rope. Hold rope at ears, crunch downward pulling elbows to knees.",
            pressure: "Weighted abdominal strength build.",
            position: "Kneeling Cable Stance",
            intensity: "Heavy (4 Sets x 12-15 Reps)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Flex spine flex abs rather than sitting back.",
            donts: "Do not pull rope with arms."
        },
        {
            name: "Mountain Climbers",
            tag: "CORE",
            target: "Dynamic Core & Cardio Endurance",
            movement: "Push-up plank position. Drive knees rapidly forward alternating toward chest.",
            pressure: "Core endurance and heart rate acceleration.",
            position: "Dynamic Plank Stance",
            intensity: "Timed (3 Sets x 45 Secs)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hanging_leg_raise_animation.gif",
            dos: "Keep shoulders locked directly over hands.",
            donts: "Do not bounce hips high up in air."
        }
    ],
    recovery: [
        {
            name: "Treadmill",
            tag: "CARDIO",
            target: "Cardiovascular Stamina & Calorie Burn",
            movement: "Walk or run at steady incline and pace.",
            pressure: "Aerobic conditioning and metabolic rate elevation.",
            position: "Standing Treadmill Machine",
            intensity: "Moderate (20-30 Mins)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Maintain natural stride length.",
            donts: "Do not hold onto handrails while running."
        },
        {
            name: "Cycling",
            tag: "CARDIO",
            target: "Lower Body Aerobic & Low-Impact Cardio",
            movement: "Pedal stationary bike at constant cadence.",
            pressure: "Leg endurance without joint impact.",
            position: "Seated Stationary Bike",
            intensity: "Moderate (20-30 Mins)",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Adjust seat height for slight knee bend at bottom.",
            donts: "Do not slouch upper back."
        },
        {
            name: "Elliptical",
            tag: "CARDIO",
            target: "Full Body Low-Impact Cardio",
            movement: "Grasp handles, stride smoothly in continuous elliptical path.",
            pressure: "Full body aerobic endurance.",
            position: "Standing Elliptical Machine",
            intensity: "Moderate (20 Mins)",
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Push and pull handles actively.",
            donts: "Do not rely solely on legs."
        },
        {
            name: "Rowing Machine",
            tag: "CARDIO",
            target: "Full Body Power & Aerobic Base",
            movement: "Push through legs, lean back slightly and pull handle to abdomen.",
            pressure: "Total body conditioning and fat burn.",
            position: "Seated Rower Machine",
            intensity: "High Intensity (15-20 Mins)",
            image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Initiate pull drive with legs first.",
            donts: "Do not pull with arms before leg drive."
        },
        {
            name: "Stair Climber",
            tag: "CARDIO",
            target: "Glutes, Quads & Heart Rate",
            movement: "Step upward continuously maintaining upright posture.",
            pressure: "Lower body muscular endurance and cardio output.",
            position: "Vertical Stair Machine",
            intensity: "Moderate / High (15 Mins)",
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Take full steps pressing through heels.",
            donts: "Do not lean forward on handles."
        },
        {
            name: "Jump Rope",
            tag: "CARDIO",
            target: "Calves, Coordination & High Cardio",
            movement: "Swing rope smoothly, hop light on balls of feet.",
            pressure: "Calf spring agility and rapid calorie burn.",
            position: "Standing Agility",
            intensity: "High Intensity Interval (10-15 Mins)",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
            gifCorrect: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            gifWrong: "https://upload.wikimedia.org/wikipedia/commons/1/13/Shrugs.gif",
            dos: "Keep elbows close to sides, turn rope with wrists.",
            donts: "Do not jump too high off ground."
        }
    ]
};

let activeTab = 'correct';
let currentExercise = null;

// Render Grid Cards
function renderGrids() {
    Object.keys(exercisesData).forEach(cat => {
        const container = document.getElementById(`${cat}-grid`);
        if (!container) return;
        
        container.innerHTML = exercisesData[cat].map((ex, index) => `
            <div class="hover-card bg-cardbg/60 rounded-3xl overflow-hidden border border-gold/20 flex flex-col justify-between cursor-pointer p-4" onclick="openExerciseModal('${cat}', ${index})">
                <div>
                    <div class="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                        <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'" />
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

// Modal Popup Controls
function openExerciseModal(cat, index) {
    currentExercise = exercisesData[cat][index];
    activeTab = 'correct';
    updateModalContent();
    const modal = document.getElementById('exercise-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('exercise-modal');
    if (modal) modal.classList.add('hidden');
}

function switchModalTab(tab) {
    activeTab = tab;
    updateModalContent();
}

function updateModalContent() {
    if (!currentExercise) return;
    const ex = currentExercise;
    const content = document.getElementById('modal-content');
    if (!content) return;

    content.innerHTML = `
        <span class="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold font-mono text-xs font-bold mb-2">${ex.tag}</span>
        <h2 class="text-2xl md:text-3xl font-black mb-4 brand-font text-white">${ex.name}</h2>

        <div class="flex gap-3 mb-4">
            <button onclick="switchModalTab('correct')" class="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'correct' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-zinc-800 text-gray-400 hover:text-white'}">
                ✓ Correct Form
            </button>
            <button onclick="switchModalTab('wrong')" class="flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'wrong' ? 'bg-rose-600 text-white shadow-lg' : 'bg-zinc-800 text-gray-400 hover:text-white'}">
                ✕ Wrong Form
            </button>
        </div>

        <div class="relative h-64 w-full rounded-2xl overflow-hidden mb-4 border border-gold/30 bg-black flex items-center justify-center">
            <img src="${activeTab === 'correct' ? ex.gifCorrect : ex.gifWrong}" alt="${ex.name}" class="h-full object-contain" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/9/91/Bench_press_animation.gif'" />
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

// Theme Toggle Functionality
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        if (btn) btn.innerText = '☀️';
    } else {
        html.classList.add('dark');
        if (btn) btn.innerText = '🌙';
    }
}

// Real-Time Search Filter Functionality
function filterExercises() {
    const query = document.getElementById('search-input')?.value.toLowerCase() || '';
    const cards = document.querySelectorAll('.hover-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
    });
}

// Run on Page Load
document.addEventListener('DOMContentLoaded', renderGrids);

