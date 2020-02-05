module.exports = {
    addtimes: function(t1, t2) {
        //Assumes t1 and t2 are strings of format mm:ss

        min1 = parseInt(t1.split(":")[0]);
        sec1 = parseInt(t1.split(":")[1]);
        
        min2 = parseInt(t2.split(":")[0]);
        sec2 = parseInt(t2.split(":")[1]);
        
        summins = min1+min2;
        sumsecs = sec1 + sec2;

        if (sumsecs == 60) {
            summins++;
            sumsecs = 0;
        } else if (sec1+sec2 > 60) {
            summins++;
            sumsecs = sumsecs - 60;
        }

        //Pad the numbers with 0
        summins = ('0'+summins).substr(-2);
        sumsecs = ('0'+sumsecs).substr(-2);

        return ( summins +":"+sumsecs);
    },
    subtracttimes: function(t1, t2) {
        //Assumes t1 and t2 are strings of format mm:ss

        min1 = parseInt(t1.split(":")[0]);
        sec1 = parseInt(t1.split(":")[1]);
        seconds1 = (min1*60)+sec1;

        min2 = parseInt(t2.split(":")[0]);
        sec2 = parseInt(t2.split(":")[1]);
        seconds2 = (min2*60)+sec2;

        if (seconds1>seconds2) {
            tmpseconds = seconds1 - seconds2;

            resmins = parseInt(tmpseconds / 60);
            ressecs = tmpseconds - (resmins*60);
        } else {
            resmins = 0;
            ressecs = 0;
        }

        //Pad the numbers with 0
        resmins = ('0'+resmins).substr(-2);
        ressecs = ('0'+ressecs).substr(-2);

        return ( resmins +":"+ressecs);
    },
    multiplytimes: function(t1, factor) {
        //Assumes t1 and t2 are strings of format mm:ss

        min1 = parseInt(t1.split(":")[0]);
        sec1 = parseInt(t1.split(":")[1]);
        seconds1 = (min1*60)+sec1;

        tmpseconds = parseInt(factor * seconds1);
        resmins = parseInt(tmpseconds / 60);
        ressecs = tmpseconds - (resmins*60);

        //Pad the numbers with 0
        resmins = ('0'+resmins).substr(-2);
        ressecs = ('0'+ressecs).substr(-2);

        return ( resmins +":"+ressecs);
    }
}