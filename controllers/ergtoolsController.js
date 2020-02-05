exports.index = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
    res.render('index', { title: 'Ergo Tools' });

};