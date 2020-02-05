var DateTimeUtils  = require('../ext/datetimeutils');

module.exports = {
    calcRestStagger: function(numrowers, numergos, interval, recovery) {
        var staggerdata = [
            {machine_rowers: "2_3", r1intervals: "3", r1returninterval: "2", r2numstaggers: "0"},
            {machine_rowers: "3_4", r1intervals: "4", r1returninterval: "3", r2numstaggers: "1"},
            {machine_rowers: "3_5", r1intervals: "5", r1returninterval: "3", r2numstaggers: "1"},
            {machine_rowers: "4_5", r1intervals: "5", r1returninterval: "4", r2numstaggers: "1"},
            {machine_rowers: "4_6", r1intervals: "3", r1returninterval: "2", r2numstaggers: "2"},
            {machine_rowers: "5_6", r1intervals: "6", r1returninterval: "5", r2numstaggers: "2"}
        ]
        
        staggerdata.forEach(function(element){
            //console.debug(element.machine_rowers);
            if (element.machine_rowers == numergos + "_" + numrowers) {
                theseParams = element;
            }
        })

        //Calculate the Programmed Rest
        tmp1 = DateTimeUtils.addtimes(interval,recovery);
        tmp1 = DateTimeUtils.multiplytimes(tmp1,(theseParams.r1returninterval / theseParams.r1intervals));
        tmp1 = DateTimeUtils.subtracttimes(tmp1,interval);

        //Calculate the stagger
        tmp2 = DateTimeUtils.subtracttimes(recovery,tmp1);
        tmp2 = DateTimeUtils.multiplytimes(tmp2,(1/theseParams.r2numstaggers));

        var restStagger = {programmedRest: tmp1, stagger: tmp2}

        return restStagger;
        
    }
}
