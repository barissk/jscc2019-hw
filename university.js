module.exports = class Uni {
    constructor(name) {
        this.name = name
        this.lecturers = []
        this.students = []
    }

    addLecturer(lect) {
        this.lecturers.push(lect)
    }

    addStudent(stud) {
        this.students.push(stud)
    }

    removeStudent(stud) {
        for (var i = this.students.length - 1; i >= 0; i--) {
            if (this.students[i] === stud) {
                this.students.splice(i, 1);
            }
        }
        stud.uni = null
        for(var j = 0; j < stud.lessons.length; j++){
            stud.lessons[j].removeStudent(stud)
        } 
        stud.lessons = []
        stud.earnedCredits = 0
    }

    removeLecturer(lect) {
        for (var i = this.lecturers.length - 1; i >= 0; i--) {
            if (this.lecturers[i] === lect) {
                this.lecturers.splice(i, 1);
            }
        }
    }

    transferStud(student, newUni) {
        this.removeStudent(student)
        newUni.addStudent(student)
        student.setUni(newUni)
        
    }

    transferLect(lecturer, newUni) {
        this.removeLecturer(lecturer)
        newUni.addLecturer(lecturer)
        lecturer.setUni(newUni)
    }
}