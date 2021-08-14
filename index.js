const Uni = require("./university")
const Lesson = require("./lesson")
const Student = require("./student")
const Lecturer = require("./lecturer")
const log = require ('ololog')


itu = new Uni("itu")
bane = new Student("bane", itu, "ceng")
sane = new Student("sane", itu, "ceng")
kane = new Lecturer("kane", "ceng")

itu.addStudent(bane)
itu.addStudent(sane)
itu.addLecturer(kane)

blg299e = new Lesson("introduction to programming", 4, kane)
kane.addLesson(blg299e)
blg299e.addStudent(bane)
blg299e.addStudent(sane)

bane.passLesson(blg299e)



boun = new Uni("boun")
itu.transferStud(sane, boun)

/*
log(boun)
log(itu)
log(sane)
log(blg299e)
*/