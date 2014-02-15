var Twit = require('twit');
var fs = require('fs');

var T = new Twit({
    consumer_key:         'J0v7W8Pff6WBPtCPUiEmkg'
  , consumer_secret:      'kNFYHSev8rHUXnoMJ0xcXipWRcV1tD8CnvDjUrO3zNc'
  , access_token:         '40796404-Kn0N9frVGWbDiMPQm4o2qrAzlETOIs3xgoQ4wbv9d'
  , access_token_secret:  'JVwrwbQCluOMTP76KsDIkJfDz3WeXgTzb9fWF3428Fp8F'
});

var tweets = ['432980379067498500', '434054587063238656', '428602381920514048', '433267305544302593', '434032343847026688', '430951335878344704', '432924919807344641', '434029028656177152', '434009098967711744']
tweets.forEach(function(tweet){
	T.get('statuses/retweets/:id', { id: tweet }, function (err, reply) {
		//console.log(reply);

		fs.writeFile(tweet+".json", JSON.stringify(reply), function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("The file was saved!");
		    }
		});

	})
});

