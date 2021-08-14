module.exports = class Lecturer {
    constructor(name, area) {
        this.name = name
        this.area = area
        this.lessons =  []
    }

    addLesson(lesson) {
        this.lessons.push(lesson)
    }

    setUni(univ) {
        this.uni = univ
    }
}