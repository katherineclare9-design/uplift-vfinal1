// UpLift Daily Workout Schedule

const dailyWorkouts = {

    Sunday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility",
            "Grow with Jo 20-Min Low-Impact Cardio"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Full Backspot Strength workout",
            "Hourglass Finisher - Shoulders & Upper Back"
        ]
    },

    Monday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility",
            "Grow with Jo 20-Min Low-Impact Cardio"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Lower body workout",
            "Upper body workout",
            "Hourglass Finisher - Glutes"
        ]
    },

    Tuesday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Full Backspot Strength workout",
            "Hourglass Finisher - Shoulders & Upper Back"
        ]
    },

    Wednesday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility",
            "Grow with Jo 20-Min Low-Impact Cardio"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Lower body workout",
            "Upper body workout",
            "Hourglass Finisher - Glutes"
        ]
    },

    Thursday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Full Backspot Strength workout",
            "Hourglass Finisher - Shoulders & Upper Back"
        ]
    },

    Friday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility",
            "Grow with Jo 20-Min Low-Impact Cardio"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Upper body workout",
            "Full Backspot Strength workout",
            "Hourglass Finisher - Glutes"
        ]
    },

    Saturday: {
        morning: [
            "Lilly Sabri 15-Min Hourglass Pilates Sculpt",
            "Deep core activation",
            "Jumps and flexibility"
        ],
        nighttime: [
            "Lilly Sabri 6-Min Glutes",
            "Full Backspot Strength workout"
        ]
    }

};


const workoutTypes = {

    // =====================
    // CORE
    // =====================

    "Lilly Sabri 15-Min Hourglass Pilates Sculpt": {
        xp: 30,
        category: "core"
    },

    "Deep core activation": {
        xp: 20,
        category: "core"
    },

    // =====================
    // CARDIO
    // =====================

    "Grow with Jo 20-Min Low-Impact Cardio": {
        xp: 25,
        category: "cardio"
    },

    // =====================
    // FLEXIBILITY
    // =====================

    "Jumps and flexibility": {
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

    "Lower body workout": {
        xp: 30,
        category: "lowerBody"
    },

    "Hourglass Finisher - Glutes": {
        xp: 15,
        category: "lowerBody"
    },

    // =====================
    // UPPER BODY
    // =====================

    "Upper body workout": {
        xp: 30,
        category: "upperBody"
    },

    "Hourglass Finisher - Shoulders & Upper Back": {
        xp: 15,
        category: "upperBody"
    },

    // =====================
    // BACKSPOT
    // =====================

    "Full Backspot Strength workout": {
        xp: 35,
        category: "backspot"
    }

};





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
