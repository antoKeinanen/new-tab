const schedule:any = {
    monday: {
        0: {
            subject: "Ge1.3",
            starts: "8:15",
            ends: "9:30",
            room: "BG239"
        },
        1: {
            subject: "Maa2.2",
            starts: "9:45",
            ends: "11:00",
            room: "C2002"
        },
        2: {
            subject: "Hi1.3",
            starts: "11:15",
            ends: "13:00",
            room: "C354"
        },
        3: {
            subject: "Li1.4",
            starts: "13:15",
            ends: "14:30",
            room: ""
        },
        4: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        },

    },
    tuesday: {
        0: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        },
        1: {
            subject: "Fy3.1",
            starts: "9:45",
            ends: "11:00",
            room: "FY235"
        },
        2: {
            subject: "Ena2.5",
            starts: "11:15",
            ends: "13:00",
            room: "A111"
        },
        3: {
            subject: "Ge1.3",
            starts: "13:15",
            ends: "14:30",
            room: "BG239"
        },
        4: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        }
    },
    wednesday: {
        0: {
            subject: "Li1.4",
            starts: "8:15",
            ends: "9:30",
            room: ""
        },
        1: {
            subject: "Ena2.5",
            starts: "9:45",
            ends: "11:00",
            room: "A111"
        },
        2: {
            subject: "Maa2.2",
            starts: "11:15",
            ends: "13:00",
            room: "C2002"
        },
        3: {
            subject: "Ro21D",
            starts: "13:00",
            ends: "13:15",
            room: "C354"
        },
        4: {
            subject: "Hi1.3",
            starts: "13:30",
            ends: "14:45",
            room: "C354"
        }
    },
    thursday: {
        0: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        },
        1: {
            subject: "Fy3.1",
            starts: "9:45",
            ends: "11:00",
            room: "FY235"
        },
        2: {
            subject: "Ge1.3",
            starts: "11:15",
            ends: "13:00",
            room: "BG239"
        },
        3: {
            subject: "Hi1.3",
            starts: "13:15",
            ends: "14:30",
            room: "C354"
        },
        4: {
            subject: "Maa2.2",
            starts: "14:35",
            ends: "15:50",
            room: "C2002"
        }
    },
    friday: {
        0: {
            subject: "Ena2.5",
            starts: "8:15",
            ends: "9:30",
            room: "A111"
        },
        1: {
            subject: "Li1.4",
            starts: "9:45",
            ends: "11:00",
            room: ""
        },
        2: {
            subject: "Fy3.1",
            starts: "11:15",
            ends: "13:00",
            room: "FY235"
        },
        3: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        },
        4: {
            subject: "",
            starts: "",
            ends: "",
            room: ""
        }
    },
    saturday: {},
    sunday: {},
}

const lunch = {
    starts: "12:15",
    ends: "12:45",
};

export default {schedule, lunch};