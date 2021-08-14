module.exports = class Student {
    constructor(name, uni, area, credits = 0) {
        this.name = name
        this.uni = uni
        this.area = area
        this.earnedCredits = credits
        this.lessons =  []

    }

    addLesson(lesson) {
        this.lessons.push(lesson)
    }

    removeLesson(lesson) {
        for (var i = this.lessons.length - 1; i >= 0; i--) {
            if (this.lessons[i] === lesson) {
                this.lessons.splice(i, 1);
            }
        }
    lesson.removeStudent(this)
    }

    setUni(univ) {
        this.uni = univ
    }

    passLesson(lesson) {
        this.removeLesson(lesson)
        this.earnedCredits += lesson.credits
    }
}