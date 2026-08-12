// UpLift Daily Workout Schedule


const dailyWorkouts = {

    Sunday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Cheer Jump & Flexibility",
            "Grow with Jo — 10-Min Low-Impact Cardio"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Backspot Strength",
            "Hourglass Finisher — Shoulders & Upper Back"
        ]
    },


    Monday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Cheer Jump & Flexibility",
            "Grow with Jo — 10-Min Low-Impact Cardio"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Lower Body Workout",
            "Upper Body Workout",
            "Hourglass Finisher — Glutes"
        ]
    },


    Tuesday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Backspot Strength",
            "Hourglass Finisher — Shoulders & Upper Back"
        ]
    },


    Wednesday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Cheer Jump & Flexibility",
            "Grow with Jo — 10-Min Low-Impact Cardio"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Lower Body Workout",
            "Upper Body Workout",
            "Hourglass Finisher — Glutes"
        ]
    },


    Thursday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Cheer Jump & Flexibility"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Backspot Strength",
            "Hourglass Finisher — Shoulders & Upper Back"
        ]
    },


    Friday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Grow with Jo — 10-Min Low-Impact Cardio"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Upper Body Workout",
            "Backspot Strength",
            "Hourglass Finisher — Glutes"
        ]
    },


    Saturday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep Core Activation",
            "Cheer Jump & Flexibility",
            "Grow with Jo — 10-Min Low-Impact Cardio"
        ],

        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Backspot Strength",
            "Lower Body Workout"
        ]
    }

};


// =====================
// WORKOUT TYPES
// =====================

const workoutTypes = {

    // =====================
    // CORE
    // =====================

    "Lilly Sabri 15-Min Hourglass Pilates Sculpt": {
        xp: 30,
        category: "core"
    },

    "Deep Core Activation": {
        xp: 20,
        category: "core"
    },


    // =====================
    // CARDIO
    // =====================

    "Grow with Jo — 10-Min Low-Impact Cardio": {
        xp: 25,
        category: "cardio"
    },


    // =====================
    // FLEXIBILITY
    // =====================

    "Cheer Jump & Flexibility": {
        xp: 20,
        category: "flexibility"
    },


    // =====================
    // GLUTES / LOWER BODY
    // =====================

    "Lilly Sabri 6-Min Glutes": {
        xp: 20,
        category: "lowerBody"
    },

    "Lower Body Workout": {
        xp: 30,
        category: "lowerBody"
    },

    "Hourglass Finisher — Glutes": {
        xp: 15,
        category: "lowerBody"
    },


    // =====================
    // UPPER BODY
    // =====================

    "Upper Body Workout": {
        xp: 30,
        category: "upperBody"
    },

    "Hourglass Finisher — Shoulders & Upper Back": {
        xp: 15,
        category: "upperBody"
    },


    // =====================
    // BACKSPOT
    // =====================

    "Backspot Strength": {
        xp: 35,
        category: "backspot"
    }

};


// =====================
// VACATION WORKOUTS
// =====================

const vacationWorkouts = {

    workout: [
        "25 Pushups",
        "In and outs (45 seconds x2)",
        "Plank (1 minute x2)"
    ]

};


// Vacation workout categories

workoutTypes["25 Pushups"] = {
    xp: 15,
    category: "strength"
};


workoutTypes["In and outs (45 seconds x2)"] = {
    xp: 15,
    category: "core"
};


workoutTypes["Plank (1 minute x2)"] = {
    xp: 15,
    category: "core"
};
