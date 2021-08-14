module.exports = class Lesson {
    constructor(name, cred, lecturer) {
        this.name = name
        this.credits = cred
        this.lecturer = lecturer
        this.students = []
    }

    addStudent(stud) {
        this.students.push(stud)
        stud.addLesson(this)
    }

    changeLecturer(lect) {
        this.lecturer = lect
    }

    removeStudent(stud) {
        for (var i = this.students.length - 1; i >= 0; i--) {
            if (this.students[i] === stud) {
                this.students.splice(i, 1);
            }
        }
    }
}