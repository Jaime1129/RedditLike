//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 8080);

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/RedditLike'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));

// Declarations
var count = 0;
var topicList = [];
class Topic {
    // constructor
    constructor(title) {
        this.title = title;
        this.id = count++;
        this.votes = 0;
    }
    // upvote or downvote
    vote(num) {
        this.votes += num;
    }
}

app.get('/', function(req,res) {
    console.log('homepage'); 
    res.sendFile(path.join(__dirname+'/dist/RedditLike/index.html'));

});

// New topic request handler
app.post('/newtopic', function(req, res){
    console.log('newtopic request received :');
    console.log(req);
    if (req.body.title) {
        topicList.push(new Topic(req.body.title));
        res.json({ status : true });
    } else {
        res.json({ status : false });
    }
});

// Topic List request handler
app.get('/topics', function(req, res){
    console.log('topics request received');
    console.log(JSON.stringify(topicList));
    let result = [];
    if (topicList && topicList.length > 0) {
        result = topicList.sort((a, b) => b.votes-a.votes);
        if (result.length > 20) {  
          result = result.slice(0, 20);
        }
    }
    console.log(result);
    res.send(JSON.stringify({
        length : result.length,
        order : 'desc',
        items : result
    }));
});
   
// Vote request handler
app.get('/votes', function(req, res){
    console.log('vote request received :');
    console.log(req.query);

    let tid = req.query.id;

    if (!topicList || topicList.length == 0) {
        res.json({status : false});
    }

    for (var temp of topicList) {
        if (temp.id == tid) {
            temp.vote(parseInt(req.query.type));
            break;
        }
    }
    res.json({id : tid, status : true});

})

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

