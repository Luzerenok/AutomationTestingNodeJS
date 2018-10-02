function EducationPrototype(typeOfEducation, theme) {
    this.typeOfEducation = typeOfEducation;
    this.theme = theme;
};

EducationPrototype.prototype.selectingEducation = function() {
    console.log('Hi! I\'m selected ' + this.theme + '  theme.');
};


function HighEducation(theme, exam1, exam2, exam3) {
    EducationPrototype.call(this, "High", theme);
    this.exams = {exam1, exam2, exam3}
};

HighEducation.prototype = Object.create(EducationPrototype.prototype);
HighEducation.prototype.constructor = HighEducation;

HighEducation.prototype.about = function() {
    console.log('Hi! I\'m selected ' + this.typeOfEducation + ' by ' + this.theme + ' and need to be examed by the following subjects: ' + this.exams.exam1 + ', ' + this.exams.exam2 + ', ' + this.exams.exam3 + '.');
};

function University(theme, typeOfUniversity, exam1, exam2, exam3) {
    HighEducation.call(this, "High", theme,exam1, exam2, exam3);
    this.typeOfUniversity = typeOfUniversity;
};

University.prototype = Object.create(University.prototype);
University.prototype.constructor = University;

University.prototype.about = function() {
    console.log('Hi! I\'m selected ' + this.typeOfEducation + ' in '+ this.typeOfUniversity+ ' by ' + this.theme + ' and need to be examed by the following subjects: ' + this.exams.exam1 + ', ' + this.exams.exam2 + ', ' + this.exams.exam3 + '.');
};

let selectedEducation = new EducationPrototype('High','Biology');
selectedEducation.selectingEducation();


let degreeOfEducation = new HighEducation('Math','Math','Physic','English');
degreeOfEducation.about();

let typeOfUniversity = new University('Language','High','English','Russian','Italian');
typeOfUniversity.about();


