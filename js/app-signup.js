var lastPositionScrollTop = 0;

/***
 * Appear and disappear the header depends the
 * position of the Scroll
 */
$(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position < lastPositionScrollTop){
        $('.navbar ').fadeIn("slow");
    } else {
        $('.navbar ').fadeOut("slow");
    }
    lastPositionScrollTop = position;
});

(function(){
    var app = angular.module('signUpExample',[]);

    app.controller('signUpController', function(){
        this.user = {};
        this.submitted = false;
        this.addUser = function(){
            users.push(this.user);
            this.user = {};
        };
    });

    app.controller('userController', function(){
        this.users = users;
    });

    var users = [];


})();