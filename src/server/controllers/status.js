let endpoints = {}; 

endpoints.home = {
    method: 'GET',
    url: '/home',
    call: function (req, res) {
        res.respond(200, "Status: OK");
    }
};

module.exports = endpoints;