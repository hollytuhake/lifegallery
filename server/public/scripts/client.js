console.log('js sourced');
var myApp = angular.module('myApp', []);
myApp.controller('GalleryController', function () {

    var gallery = this;
    var pictures = [
        { id: 1, image: 'assets/meandal.jpg', activity: 'in the studio with a personal hero, Alan Sparhawk of Low', show: false, coolCount:0, clickCount:0, viewCount:0, message:''},
        { id: 2, image: 'assets/gaymarriagezooanimal.jpg', activity: 'Love Wins, celebrating gay marriage rights, 7000 people attended', show: false, coolCount: 0, clickCount: 0, viewCount: 0, message: ''},
        { id: 3, image: 'assets/meandscott.jpg', activity: 'learned a lot from Scott Seekins about being an artist in my mid-twenties', show: false, coolCount: 0, clickCount: 0, viewCount: 0, message: ''},
        { id: 4, image: 'assets/nickandeddie.jpg', activity: 'the back bar at nick and eddie was my muse, the most receptive audiences ever, could be as weird as I wanted', show: false, coolCount: 0, clickCount: 0, viewCount: 0, message: ''},
        { id: 5, image: 'assets/producing.jpg', activity: 'first time producing someone else\'s record, learned alot', show: false, coolCount: 0, clickCount: 0, viewCount: 0, message: ''},
        { id: 6, image: 'assets/wiseblood.jpg', activity: 'other than starting prime, playing sabbath lily from "wise blood" at a walker art center production at the soap factory was the most I pushed my limits.', show: false, coolCount: 0, clickCount: 0, viewCount: 0, message: ''},
]

    gallery.pictures = pictures;

    gallery.coolCounter = function(picture){
        gallery.message = '';
        picture.coolCount = picture.coolCount+=1;
        picture.message = picture.message + ' !';
    }

    gallery.imageClick = function(picture){
        picture.show = !picture.show;
        picture.clickCount = picture.clickCount +=1;
        var even;
        function isEven(value) {
            if (value % 2 == 0)
                even = true;
            else
                even = false;
        };
        isEven(picture.clickCount);
        console.log('clickCount' + picture.clickCount);
        if (even === true) {
            picture.viewCount = picture.viewCount;
        }
        else{
            picture.viewCount = picture.viewCount += 1;
        }
    }


});