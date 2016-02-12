var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '5GCw6A1m07ruKuRXoSPRYLpOX',
  consumer_secret: 'a8HJ6zmaRieoTyjRxXzZMgLy5sfdRkOz1dLsh8gDu1rySlqMo6',
  access_token_key: '1107294740-ETzpIJvTatk5N6NqfiPNzHFmVGej0DsmKjwiS4K',
  access_token_secret: 'yntEq90qFYdqHNQ2wC5LMDTl1TbpRNPK4oRylXh0C3k9W'
});



//below are other API calls, will use later...



/*
//get statuses of me, print out their ids
client.get('statuses/user_timeline', {screen_name: 'The_Peter_Luft'}, function(error, response){
	if(!error){
		console.log("success");
		//no error, then we've got an array from responses
		for(var i = 0; i < response.length; i++){
			console.log(response[i].id_str);
		}
	}
	else{
		console.log(error);
	}
});

*/



/*

//destroys specific tweet

var targetID = 
client.post('statuses/destroy/' + targetID;, {}, function(error, tweets, response){
	if(!error){
		console.log("success");
		//tweetID = tweets.id;
		//console.log(tweetID);
		console.log(response);
	}
	else{
		console.log(error);
	}
});*/
	
	
	 
 /*

client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
*/



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
