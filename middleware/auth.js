const jwt = require("jsonwebtoken");

exports.authenticate = function (req, res, next) {
    const authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];


    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(user);
        next();
    })
}