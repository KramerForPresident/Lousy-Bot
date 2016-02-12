var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '5GCw6A1m07ruKuRXoSPRYLpOX',
  consumer_secret: 'a8HJ6zmaRieoTyjRxXzZMgLy5sfdRkOz1dLsh8gDu1rySlqMo6',
  access_token_key: '1107294740-ETzpIJvTatk5N6NqfiPNzHFmVGej0DsmKjwiS4K',
  access_token_secret: 'yntEq90qFYdqHNQ2wC5LMDTl1TbpRNPK4oRylXh0C3k9W'
});
 
 /*
var params = {screen_name: 'madcolosimo'};

client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
*/

client.post('statuses/update', {status: "what's shakin"}, function(error, reply){
	if(!error){
		console.log("success");
		console.log(reply);
	}
	else{
		console.log(error);
	}
});
	






/*
function updateIt(){
	client.post('statuses/update', {status: "what's shakin??"}, function(err, reply){
				console.log("error: " + err);
				console.log("reply: " + reply);
			});
		}, "json");
}

function favRTs(){
	client.get('statuses/retweets_of_me', {}, function(e, r){
		for(var i = 0; i < r.length; i++){
			client.post('favorities/create/' + r[i].id_str,{},function(){});
		}
		console.log("Ran the favouriter");
	});
}
*/

/*

setInterval(function(){
	try{
		updateIt();
	}
	catch(e){
		console.log(e);
	}
}, 1200000);

setInterval(function(){
	try{
		favRTs();
	}
	catch(e){
		console.log(e);
	}
}, 60000*5);


*/
