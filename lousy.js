//setting up credentials

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});



var tweetList = [];


getTweets('The_Peter_Luft');


//below we've got a toolbox of basic API functions


//function returns tweets of target's screen name
function getTweets(targetName){
	client.get('statuses/user_timeline', {screen_name: targetName}, function(error, response){
		if(!error){
			console.log("success");
			//no error, then we've got an array from responses
			for(var i = 0; i < response.length; i++){
				console.log(response[i].text + "\n");
				tweetList[i] = response[i].text;
			}
		}
		else{
			console.log(error);
		}
	});
	
}	





//get statuses of me, print out their ids
function getTweetIds(targetName){
	client.get('statuses/user_timeline', {screen_name: targetName}, function(error, response){
		if(!error){
			console.log("success");
			//no error, then we've got an array from responses
			for(var i = 0; i < response.length; i++){
				console.log(response[i].text);
			}
		}
		else{
			console.log(error);
		}
	});
}



//posts statusText string to twitter status
function myStatusUpdate(statusText){
	client.post('statuses/update', {status: statusText}, function(error, tweets){
		if(!error){
			console.log("success");
			//tweets is the returned info of the status update. I can grab data from it
			console.log(tweets);
		}
		else{
			console.log(error);
		}
	});

}





//destroys specific tweet
function deleteTweet(targetID){
	client.post('statuses/destroy/' + targetID, {}, function(error, tweets, response){
		if(!error){
			console.log("success");
			//tweetID = tweets.id;
			console.log(tweetID);
			console.log(response);
		}
		else{
			console.log(error);
		}
	});
}




function favRTs(){
	client.get('statuses/retweets_of_me', {}, function(e, r){
		for(var i = 0; i < r.length; i++){
			client.post('favorities/create/' + r[i].id_str,{},function(){});
		}
		console.log("Ran the favouriter");
	});
}



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
