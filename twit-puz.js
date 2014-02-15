$(document).ready(function(){	
	var tweetPuzzle = {
		getData : function(tweet){
			var that = this;
			$.ajax({
					url: tweet+'.json',
					type: 'get',
					success: function (data) {
						that.renderData(data, tweet);
					}
				});
		},
		renderData : function(data, tweet){
			var that = this;
			var userArray = [];
			for(var i=0; i<10; i++){ 
				userArray.push({
					user : data[i].user, 
					sol1 : data[i].user.followers_count*data[i].retweet_count,
					text : data[1].text
				});
			}; 
			var solArr = [];
			var userBasedOnSolReverse = _.sortBy(_.uniq(_.pluck(userArray, 'sol1'))).reverse();
			for(var j=0; j<userBasedOnSolReverse.length;j++){
				solArr.push(that.getImageBySol(userArray, userBasedOnSolReverse[j]));
			}
			
			that.renderImagesBySol(solArr, tweet);
		},
		renderImagesBySol : function(arr, tweet){
			var imgData = '<ul id="'+tweet+'" class="ranks">';
			_.each(arr, function(item, index){
				imgData+='<li><img src="'+item+'"></li>';
			});
			imgData+='</ul>'
			$('.container').append(imgData);
		},
		getImageBySol : function(userArray, sol){
			var image = "";
			for(var i = 0; i<userArray.length; i++){
				if(userArray[i].sol1 == sol){
					image = userArray[i].user.profile_image_url_https;
				}
			}
			return image;
		},
		tweets : [
			'432980379067498500',
			'434054587063238656',
			'428602381920514048',
			'433267305544302593',
			'434032343847026688', 
			'430951335878344704', 
			'432924919807344641', 
			'434029028656177152', 
			'434009098967711744'
		],
		init: function(){
			var that = this;
			_.each(that.tweets, function(tweet){
				that.getData(tweet)
			})
		}
	}
	tweetPuzzle.init();
});
