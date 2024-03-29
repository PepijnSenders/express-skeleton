module.exports = (function() {

    return function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Token, X-Forwarded-For');

        if (req.method === 'OPTIONS') {
            res.status(200).send({});
        } else {
            next();
        }
    };

}());
