// creating a service for requesting video ads:
deeditApp.factory('videoAdSer', function(){

    // an object that will have all the videoads URL:
    // var videoUrl = {
    //     1:"app/videos/adopt.mp4",
    //     2:"app/videos/dance.mp4",
    //     3:"app/videos/dodge.mp4",
    //     4:"app/videos/ikea.mp4",
    //     5:"app/videos/isle.mp4",
    //     6:"app/videos/parrot.mp4",
    //     7:"app/videos/potato.mp4",
    //     8:"app/videos/subaru.mp4"
    // };

    // an array of all the videoads URL:
    var videosArray = ["adopt","spice","ikea","isle","parrot","potato","subaru"];


    
    // creating a function for calling a video:
    var requestVideo = function(){
        
        var videoNum=randomNum();
        var videoToPlay=extractVideo(videoNum);
        videoToPlay = "app/videos/"+videoToPlay+'.mp4';
        return videoToPlay;
        
    }

    //making a random number:
    var randomNum = function(){
        var randomNumber;
        randomNumber = Math.floor(Math.random() * videosArray.length);
        return randomNumber;
    }

    //uploading the video by videoNum:
    var extractVideo = function(videoNum){
        return videosArray[videoNum];
    }



    //access:
    return {
        requestVideo:requestVideo,
        videosArray:videosArray
    }
});