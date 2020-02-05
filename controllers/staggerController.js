const validator = require('express-validator');
var DateTimeUtils  = require('../ext/datetimeutils');
var StaggerUtils = require('../ext/staggerutils');

exports.index = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
    res.render('index', { title: 'Ergo Tools' });

};

// Display Genre create form on GET.

exports.stagger_create_get = function(req, res, next) {     
    res.render('stagger_form', { title: 'Calculate Stagger'});
};

exports.stagger_create_post = [
    //validator.body('wktInterval', 'Workout interval required').isLength({ min: 2 }),
    
    validator.body('wktInterval', 'Workout interval should be mm:ss').matches('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$'),
    validator.body('recovery', 'Recovery should be mm:ss').matches('^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$'),

    (req, res, next) => {
        retval = StaggerUtils.calcRestStagger(req.body.numRowers, req.body.numErgos, req.body.wktInterval, req.body.recovery);
        console.debug("retval.programmedRest" + retval.programmedRest);
        console.debug("retval.stagger" + retval.stagger);

        const errors = validator.validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render the form again wsth sanitized values/error messages.
            res.render('stagger_form', { title: 'Calculate Stagger', errors: errors.array()});
            return;
          }
        else {
            res.render('stagger_form', { title: 'Calculate Stagger', calcRest: retval.programmedRest, calcStagger: retval.stagger });
        }
    }
]


