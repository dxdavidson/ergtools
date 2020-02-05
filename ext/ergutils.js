class ErgStagger{
    #r1intervals;
    #r1returninterval;
    #r2numstaggers;
    
    constructor(numRowers, numErgos, workoutTime, recoveryTime){
/*
        console.debug("numErgos: " + numErgos);
        switch(numErgos) {
            case "2":
                this.#r1intervals = 3;
                this.#r1returninterval = 2;
                this.#r2numstaggers = 0;
                break;
            default:
                this.#r1intervals =  99;
        }
*/
    }
    
    static getParams(numRowers, numErgos, workoutTime, recoveryTime) {
        let paramsMap = new Map();
        paramsMap.set("r1intervals","5");
        paramsMap.set("r1returninterval","4");
        paramsMap.set("r2numstaggers","1");

        return paramsMap
    }

    get dd1() {
        return this.#r1intervals;
    }
    get rest() {
        return this.calcRest();
    }

    get stagger() {
        return this.calcStagger();
    }

    calcRest() {
        return 12;
    }
    calcStagger() {
        return 
    }
}
module.exports = ErgStagger;

