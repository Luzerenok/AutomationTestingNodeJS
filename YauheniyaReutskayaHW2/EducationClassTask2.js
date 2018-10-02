class EducationClass{
    constructor(typeOfEducation, theme) {
        this.typeOfEducation = typeOfEducation;
        this.theme = theme;
    }

    selectingEducation(){
        console.log('Hi! I\'m selected ' + this.theme + '  theme.');
    }
}

class HighEducationClass extends EducationClass{
    constructor(theme, exam1, exam2, exam3) {
        super('High',theme);
        this.exams = {exam1, exam2, exam3};
    }

    about(){
        console.log('Hi! I\'m selected ' + this.typeOfEducation + ' by ' + this.theme + ' and need to be examed by the following subjects: ' + this.exams.exam1 + ', ' + this.exams.exam2 + ', ' + this.exams.exam3 + '.');
    }
}

class University extends HighEducationClass{
    constructor(theme, typeOfUniversity, exam1, exam2, exam3) {
        super('High', theme, exam1, exam2, exam3);
        this.typeOfUniversity = typeOfUniversity;
    }

    about(){
        console.log('Hi! I\'m selected ' + this.typeOfEducation + ' in '+ this.typeOfUniversity+ ' by ' + this.theme + ' and need to be examed by the following subjects: ' + this.exams.exam1 + ', ' + this.exams.exam2 + ', ' + this.exams.exam3 + '.');
    }
}

let selectedEducation = new EducationClass('High','Biology');
selectedEducation.selectingEducation();

let degreeOfEducation = new HighEducationClass('Math','Math','Physic','English');
degreeOfEducation.about();

let typeOfUniversity = new University('Language','High','English','Russian','Italian');
typeOfUniversity.about();


