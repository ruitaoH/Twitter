/**
 * Created by haoruitao on 16-4-28.
 */
window.onload = function(){
    var verified_icon = document.getElementsByClassName("left_info")[0].getElementsByClassName("verified_icon")[0];
    verified_icon.addEventListener("mouseover",function(){
        var check_wrapper = document.getElementsByClassName("left_info")[0].getElementsByClassName("check_wrapper")[0];
        addClass(check_wrapper,"check_wrapper_show");
    });

    verified_icon.addEventListener("mouseout",function(){
        var check_wrapper = document.getElementsByClassName("left_info")[0].getElementsByClassName("check_wrapper")[0];
        removeClass(check_wrapper,"check_wrapper_show");
    });

    var verified_icon2 = document.getElementsByClassName("self_info")[0].getElementsByClassName("verified_icon")[0];
    verified_icon2.addEventListener("mouseover",function(){
        var check_wrapper = document.getElementsByClassName("self_info")[0].getElementsByClassName("check_wrapper")[0];
        addClass(check_wrapper,"check_wrapper_show");
    });

    verified_icon2.addEventListener("mouseout",function(){
        var check_wrapper = document.getElementsByClassName("self_info")[0].getElementsByClassName("check_wrapper")[0];
        removeClass(check_wrapper,"check_wrapper_show");
    });

    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("wheel",scroll);

    window.onscroll = function(){
        var window_object = new windowObject();

        var height = window_object.getHeight();
        var scroll = window_object.getScroll();

        var twitter_last = document.getElementsByClassName("twitter_last")[0];

        var flag =true;
        if(twitter_last.offsetTop <= (height + scroll) && flag){
            flag = false;
            var time = setTimeout(function(){
                for (var i = 0; i < 5; i++) {
                    createTwitter();
                }
                flag = true;
                clearTimeout(time);
            },3000);
        }
    };

    window.onresize = function(){
        var AppContainer  = document.getElementsByClassName("AppContainer")[0];
        var container_left = document.getElementsByClassName("container_left")[0];
        var container_center = document.getElementsByClassName("container_center")[0];
        var container_right = document.getElementsByClassName("container_right")[0];

        var wrapper = document.getElementsByClassName("wrapper")[0];
        var image = wrapper.getElementsByClassName("image")[0];
        var main = wrapper.getElementsByClassName("main")[0];

        var width = document.documentElement.clientWidth || document.body.clientWidth;
        if(width < 1190){
            container_right.style.display = "none";
            AppContainer.style.width = 893 + "px";
            wrapper.style.width = 893 + "px";
            container_left.style.width = "33.33%";
            image.style.width = "33.33%";
            container_center.style.width = "66.66%";
            main.style.width = "66.66%";
        }
        if(width >= 1190){
            AppContainer.style.width = 1190 + "px";
            wrapper.style.width = 1200 + "px";
            container_right.style.display = "block";
            container_left.style.width = "25%";
            image.style.width = "25%";
            container_center.style.width = "50%";
            main.style.width = "75%";
        }
    };

    var lower_triangle = document.getElementsByClassName("lower_triangle")[0];
    var login_dialog = document.getElementsByClassName("login_dialog")[0];
    var flag = true;
    lower_triangle.onclick = function(){
        if(flag){
            login_dialog.style.display = "block";
            flag = false;
        }else{
            login_dialog.style.display = "none";
            flag = true;
        }
    };

    //(function(){
    //    var twitters = document.getElementsByClassName("twitter");
    //
    //    for(var i = 0;i < twitters.length;i++){
    //        (function(){
    //            var index = i;
    //            twitters[index].addEventListener("click",function(){
    //                addDialog();
    //                body.removeEventListener("wheel",scroll);
    //            });
    //        })();
    //    }
    //})();
};

//function addDialog(){
//    var body = document.getElementsByTagName("body")[0];
//    var shadow = document.getElementById("shadow");
//    var dialog = document.getElementById("dialog");
//
//    var top = document.documentElement.clientHeight || document.body.clientHeight;
//    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
//    var left = document.documentElement.clientWidth || document.body.clientWidth;
//    var height = dialog.offsetHeight;
//    var width = dialog.offsetWidth;
//
//    body.style.overflow = "hidden";
//    shadow.style.display = "block";
//    dialog.style.display = "block";
//
//    dialog.style.top = scroll + (top - height) / 2 + "px";
//    dialog.style.left = (left - width) /2 + "px";
//}

var scroll = function(event){
    console.log(event.wheelDelta);
    //var height = document.documentElement.clientHeight || document.body.clientHeight
    var height1 = document.documentElement.scrollTop || document.body.scrollTop;
    //var height2 = document.documentElement.scrollHeight || document.body.scrollHeight;

    var header = document.getElementsByTagName("header")[0];
    var nav = document.getElementsByTagName("nav")[0];
    var img_wrapper = document.getElementsByClassName("img_wrapper")[0];
    var img = img_wrapper.getElementsByTagName("img")[0];
    var AppContainer = document.getElementsByClassName("AppContainer")[0];
    var info = document.getElementsByClassName("info")[0];
    var container_wrapper = document.getElementsByClassName("container_wrapper")[0];

    console.log("&"+container_wrapper.getBoundingClientRect().top);
    console.log("^^"+info.getBoundingClientRect().top);

    var image = document.getElementsByClassName("image")[0].getElementsByClassName("big_header")[0];
    var self_info = document.getElementsByClassName("image")[0].getElementsByClassName("self_info")[0];

    if(info.getBoundingClientRect().top <= 134 && event.wheelDelta < 0){
        nav.style.position = "static";
        img.style.transform = "translateY(-312px)";
        img_wrapper.style.paddingTop = 0 + "px";
        img_wrapper.style.height = 34 + "px";
        header.style.position = "fixed";
        header.style.top = 0;
        header.style.zIndex = 100;
        AppContainer.style.marginTop = 406 + "px";

        addClass(image,"image_hide");

        //addClass(self_info,"self_info_show");
        self_info.style.opacity = 1;
        self_info.style.transform = "translateY(0)";

        var time = setTimeout(function(){
            image.style.opacity = 0;
            clearTimeout(time);
        },0.3);
    }
    //
    if(container_wrapper.getBoundingClientRect().top >= 88 && event.wheelDelta > 0){
        nav.style.position = "fixed";
        img.style.transform = "translateY(0)";
        img_wrapper.style.paddingTop = 46 + "px";
        img_wrapper.style.height = 400 + "px";
        header.style.position = "static";
        header.style.top = 0;
        AppContainer.style.marginTop = 0;

        image.style.opacity = 1;
        removeClass(image,"image_hide");

        //removeClass(self_info,"self_info_show");
        self_info.style.opacity = 0;
        self_info.style.transform = "translateY(100%)";
    }
}


function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function createTwitter(){
    var center_content = document.getElementsByClassName("center_content")[0];

    var twitter = document.createElement("div");
    twitter.className = "twitter";

    twitter.innerHTML = '<img src="images/logo_small.jpg" />' +
        '<div class="twitter_content">' +
        '<div class="twitter_header">' +
        '<span class="self_name">John Resig</span><span> @ jeresig </span><span class="icon dot_icon"></span><span> 4月29日</span>' +
    '</div>' +
    '<p>' +
    'this past Sunday and got to see all the new Spring flowers! Invigorating' +
    '</p>' +
    '<img src="images/content2.jpg" />' +
        '</div>' +
        '<div class="twitter_footer">' +
        '<ul>' +
        '<li>' +
        '<span class="message"><span class="info">回复</span>' +
        '<div><span class="down_triangle"></span></div></span>' +
        '<span class="icon reply_icon"></span>' +
        '</li>' +
        '<li>' +
        '<span class="message"><span class="info">转推</span>' +
        '<div><span class="down_triangle"></span></div></span>' +
        '<span class="icon retweet_icon"></span>' +
        '<span class="count">25</span>' +
        '</li>' +
        '<li>' +
        '<span class="message"><span class="info">喜欢</span>' +
        '<div><span class="down_triangle"></span></div></span>' +
        '<span class="like_icon"></span>' +
        '<span class="count">60</span>' +
        '</li>' +
        '<li>' +
        '<span class="message"><span class="info">更多</span>' +
        '<div><span class="down_triangle"></span></div></span>' +
        '<span class="icon dots_icon"></span></li>' +
        '</ul>' +
        '</div>';

    var twitter_last = document.getElementsByClassName("twitter_last")[0];
    center_content.removeChild(twitter_last);
    center_content.appendChild(twitter);
    center_content.appendChild(twitter_last);
}

var windowObject = function(){
};
windowObject.prototype = {
    getHeight : function(){
        return document.documentElement.clientHeight || document.body.clientHeight;
    },
    getWidth : function(){
        return document.documentElement.clientWidth || document.body.clientWidth;
    },
    getScroll : function(){
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
};