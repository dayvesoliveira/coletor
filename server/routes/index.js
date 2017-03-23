var /*api  = require('../api'), // regra do servidor */
    path = require('path');

module.exports  = function(app) {
    
    app.route('/coletor');
	
    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('../app/index.html'));
    });
};