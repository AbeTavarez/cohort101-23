class Learner {
    // static props
    static company = 'PerScholas';
    static cohorts = ['Software Engineering', 'AWS', 'IT', 'Cyber'];
    #id = 12345; // private prop

    constructor(name, location, age, cohort) {
        // instance props
        this.name = name;
        this.location = location;
        this.age = age;
        this.cohort = cohort;
    }
    // instance methods
    getLearnerInfo() {
        console.log(`Lerner info: ${this.name}`);
    }
    // static methods
    static addCohort(newCohort) {
        this.cohorts.push(newCohort);
    }
    // getter method
    getId() {
        return this.#id;
    }

    // setter method
    setId(newId) {
        this.#id = newId;
        return this.#id;
    }
}


console.log(Learner.company);
console.log(Learner.cohorts);

Learner.addCohort('UX-UI');

console.log(Learner.cohorts);

const jack = new Learner('Jack', 'NYC', 22, '101');

console.log(jack);

const id = jack.getId();
console.log(id);

jack.setId(9999);
console.log(jack);
