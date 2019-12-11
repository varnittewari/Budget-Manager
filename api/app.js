var express = require('express')
	, app = express()
	, db = require('./config/database')
	, pass = require('./config/pass')
	, passport = require('passport');

var routes = {};
routes.accounts = require('./route/accounts.js');
routes.records = require('./route/records.js');
routes.categories = require('./route/categories.js');
routes.users = require('./route/users.js');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'af5d8ltLowdfDic24aQsPrfl1ds78dkjf5szSDdzge5' }));
app.use(passport.initialize());
app.use(passport.session());

app.all('*', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
  });

console.log('Budget Manager Node.js server starts..');
app.listen(3000);