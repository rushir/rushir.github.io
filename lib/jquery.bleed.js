$(document).ready(function() {



    var device = navigator.userAgent.toLowerCase();

    var iPhone = device.match(/(iphone|android)/);
    var iPad = device.match(/(ipad)/);
    var iOS = device.match(/(iphone|ipad|ipod|android)/);

    // Disable site section and features if viewed on iPhone
    if(iOS) {
        $("#page-awards").remove();
        $("#desingleader").remove();
        $("#scrolldown").remove();
        $("#activetext").remove();
        $("#handwriting-scroll").remove();
        $("#page-start p").css("display", "block");
        $(".clientstitle-ios").css("display", "block");
        $(".peopletitle-ios").css("display", "block");
        $("#page-manifesto1").remove();
        $("#page-manifesto2").remove();
        $("#page-manifesto3").remove();
        $("#page-manifesto4").remove();
        $("#page-manifesto5").remove();
        $("#page-manifesto6").remove();
        $("#page-manifesto7").remove();
        $("#page-manifesto8").remove();
        $("#page-manifesto9").remove();
        $("#page-manifesto10").remove();
        $("li[menuname='page-awards']").remove();
        $("li[menuname='page-manifesto1']").remove();
        //$("#page-work .pagepadding").css("padding", "0");
    }
    if(iPhone){
        $("#contact").remove();
        $("#contact-iphone").css("display", "block");
    }

    if(iOS){
        $("ul#people li").css({'background': 'transparent', 'color': '#000'});
    }
    else{
        $("#activetext").css({ 'left':'55px' });

        $('ul#people li').bind({
          mouseenter: function() {
            var windowWidth = $(window).width();
            if(windowWidth > 999){
                $(".people-sep", this).css("opacity", "1");
                $(".people-mail", this).css("opacity", "1");
                $(".people-phone", this).css("opacity", "1");
            }
          },
          mouseleave: function() {
            var windowWidth = $(window).width();
            if(windowWidth > 1000){
                $(".people-sep", this).css("opacity", "0");
                $(".people-mail", this).css("opacity", "0");
                $(".people-phone", this).css("opacity", "0");
            }
          }
        });
    }

    $.bleedGlobals = {
        menuMode : "no"
    };

    $.bleedGlobals.insideProject = "no";

    var getFirstActiveText = $("#page-start .activetext-content").html();
    $("#activetext").html(getFirstActiveText);

    $("body, html").scrollTop(1);
    $("body").animate({opacity: 1}, 550, function(){});
    $("#handwriting-menu").delay(300).animate({opacity: 1}, 550, function(){});
    $("#handwriting-scroll").delay(600).animate({opacity: 1}, 550, function(){});

    var siteWidth = $(window).width();

    function fitPages(){
        var browserWidth = $(window).width();
        var browserHeight = $(window).height();

        /* document.title = browserWidth+' x '+browserHeight; */

        $(".eachpage").css({ 'min-height': browserHeight+'px', 'width': browserWidth+'px' });
    }
    fitPages();

    function activateMenu(){
        $("body, html").css("overflow", "hidden");
        $("#menucontainer").css({ 'display': 'block', 'opacity': '1' });
        $.bleedGlobals.menuMode = "yes";
    }

    function disableMenu(){
        $("body, html").css("overflow", "scroll");
        $("#menucontainer").css({ 'display': 'none', 'opacity': '0' });
        $.bleedGlobals.menuMode = "no";
    }

   function switchToBlack(){
        //$("body").css({ 'background' : '#000', 'color': '#fff' });
        //$('body').css("background-image", "url(img/bg-black-noise.jpg)");

        $("#socialmedia a").removeClass("socialmedia-blacklink").addClass("socialmedia-whitelink");
        $("#smt").attr("src", "img/sm-twitter-white.png");$("#smb").attr("src", "img/sm-blog-white.png");

        $("#designleader").css("background-image", "url(img/designleader-white.png)");

        $("#contact").css({ 'color' : '#fff' });
        $("#contact").css({ 'color' : '#fff' });
        $("#contact a").css({ 'color' : '#fff' });
        $("#contact-iphone").css({ 'color' : '#fff' });
        $("#contact-iphone").css({ 'color' : '#fff' });
        $("#contact-iphone a").css({ 'color' : '#fff' });

        $("#scrolldown").css("background-image", "url('img/arrow-down-white.png')");
    }

    function switchToWhite(){
        //$("body").css({ 'background' : '#fff', 'color': '#000' });
        //$('body').css("background-image", "url(img/bg-white-noise.jpg)");

        $("#bleed-logo img").attr("src", "img/bleed-logo-black.png");
        $("#socialmedia a").removeClass("socialmedia-whitelink").addClass("socialmedia-blacklink");
        $("#smt").attr("src", "img/sm-twitter-black.png");$("#smb").attr("src", "img/sm-blog-black.png");

        $("#designleader").css("background-image", "url(img/designleader.png)");

        $("#contact").css({ 'color' : '#000' });
        $("#contact").css({ 'color' : '#000' });
        $("#contact a").css({ 'color' : '#000' });
        $("#contact-iphone").css({ 'color' : '#000' });
        $("#contact-iphone").css({ 'color' : '#000' });
        $("#contact-iphone a").css({ 'color' : '#000' });

        $("#scrolldown").css("background-image", "url('img/arrow-down-black.png')");
    }
    
    function ProjectScroll(){
        var scrollAmount = $("#openproject").scrollTop();
        if(scrollAmount > 20){
            // $("#projecttitle").fadeOut(450);
            $("#projecttitle").removeClass();
            $("#projecttitle").addClass("projecttitle-hide");

            $("#openproject-images img:first-child").removeClass();
            $("#openproject-images img:first-child").addClass("openproject-images-100");
        }
        else{
            // $("#projecttitle").fadeIn(450);
            $("#projecttitle").removeClass();
            $("#projecttitle").addClass("projecttitle-show");

            $("#openproject-images img:first-child").removeClass();
            $("#openproject-images img:first-child").addClass("openproject-images-70");
        }
    }

    var section_position = new Array();

    function section_register() {
    2
        $(".eachpage").each(function(index) {
            this_offset = $(this).offset();
            section_position[index] = this_offset.top - ($(window).height()*0.25);
        });

    }

    function automaticOpen(){
        if(window.location.hash){
            if(window.location.hash == "#all"){

            }
            else if(!window.location.hash){

            }
            else{
                $("#openproject").remove();
                $("body, html").css("overflow", "scroll");
                $.bleedGlobals.insideProject = "no";
                var clicked = window.location.hash;
                var clicked = clicked.substr(1);
                var clicked = $(".workcontainer[rel='"+clicked+"']");
                getProject(clicked);
            }
        }
    }
    automaticOpen();

    $(window).on('hashchange',function() {
        if(!window.location.hash){
            $("#openproject").remove();
            $("body, html").css("overflow", "scroll");
            $.bleedGlobals.insideProject = "no";
            return false;
        }
        else{
            $("#openproject").remove();
            $("body, html").css("overflow", "scroll");
            $.bleedGlobals.insideProject = "no";
            var clicked = window.location.hash;
            var clicked = clicked.substr(1);
            var clicked = $(".workcontainer[rel='"+clicked+"']");
            getProject(clicked);
        }
    });

    function getProject(clicked){

        var projectURL = $(clicked).attr("rel");
        var getProjectTitle = $(clicked).find(".workname b").html();
        var getTags = $(clicked).find(".worktags").html();
        var getProjectContent = $(clicked).find(".workcontent").html();
        var getImageCount = parseInt($(clicked).find(".workimages xmp").length) + 1;

        $.bleedGlobals.insideProject = "yes";
        window.location.hash = projectURL;

        $("#loading").css("display", "block");
        $("body").append("<div id='openproject'><div id='projecttitle'></div><div id='fullprojectinfo'><div id='fullprojectinfo-title'></div><br /><div id='fullprojectinfo-tags'></div><div id='fullprojectinfo-content'></div><div id='fullprojectinfo-arrow'><img src='img/work-box-arrow.png' border='' alt='' /></div></div><div id='moreinfo'><img src='img/work-info.png' border='' alt=''></div><div id='backtothumbs'></div><div id='openproject-images'></div></div>");

        $("#fullprojectinfo-title").html(getProjectTitle);
        $("#fullprojectinfo-tags").html(getTags);
        $("#fullprojectinfo-content").html(getProjectContent);

        $("#projecttitle").html(getProjectTitle);

        $("#openproject-images img").addClass("openproject-images-100");

        for ( var i = 1; i < getImageCount; i++ ) {
            var currentImage = $(clicked).find(".workimages xmp:nth-child("+i+")").html();
            $("#openproject-images").append(currentImage);
        }

        $("#openproject").css("display", "block");
        $("body, html").css("overflow", "hidden");

        $("#openproject-images img").load(function() {
            $("#loading").delay(400).css("display", "none");
            $("#openproject-images img:first-child").removeClass().addClass("openproject-images-70");
        });

        $('#backtothumbs').bind('click', function() {
            $("#openproject").remove();
            $("body, html").css("overflow", "scroll");
            $.bleedGlobals.insideProject = "no";
            return false;
        });
        $('#openproject-images img').bind('click', function() {
            $("#openproject").remove();
            $("body, html").css("overflow", "scroll");
            $.bleedGlobals.insideProject = "no";
            return false;
        });
        $('#moreinfo').bind('click', function() {
            $("#fullprojectinfo").slideToggle(100);
            return false;
        });

        $("#openproject").bind('scroll', ProjectScroll);

        return false;
    }

    $(window).resize(function(){
        fitPages();
    });

    $(window).scroll(function() {

        int = $(window).scrollTop();
        section_register();

        $(".eachpage").each(function(index) {
            if (int >= section_position[index]) {
                var getSectionID = $(this).attr("id");

                var addActiveTextClass = $(this).attr("id");
                var addActiveTextClass = "activetext-"+addActiveTextClass;

                var getPageColor = $(this).find(".page-color").html();

                if(getPageColor == "black"){
                        switchToBlack();
                }
                else if(getPageColor == "white"){
                    switchToWhite();
                }

                $("#activetext").removeClass();
                $("#activetext").addClass(addActiveTextClass);

                var getActiveText = $(this).find(".activetext-content").html();
                $("#activetext").html(getActiveText);

                if(getSectionID == "page-start"){
                    $("#handwriting-scroll").show();
                    $("#handwriting-menu").show();
                    $("#scrolldown").attr("rel", "#page-about");
                    $("#scrollup").attr("rel", "#page-none");
                    $("#designleader").show();
                    $("#scrolldown").removeClass("arrowflip");
                }

                if(getSectionID == "page-about"){
                    $("#contact").show();
                    $("#designleader").show();
                    $("#handwriting-scroll").hide();
                    $("#handwriting-menu").hide();
                    $("#scrolldown").attr("rel", "#page-work");
                    $("#scrollup").attr("rel", "#page-start");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-work"){
                    $("#contact").hide();
                    $("#designleader").hide();
                    $("#scrolldown").attr("rel", "#page-clients");
                    $("#scrollup").attr("rel", "#page-about");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-clients"){
                    $("#scrolldown").attr("rel", "#page-awards");
                    $("#scrollup").attr("rel", "#page-work");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-awards"){
                    $("#scrolldown").attr("rel", "#page-people");
                    $("#scrollup").attr("rel", "#page-clients");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-people"){
                    $("#scrolldown").attr("rel", "#page-manifesto1");
                    $("#scrollup").attr("rel", "#page-awards");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto1"){
                    $("#scrolldown").attr("rel", "#page-manifesto2");
                    $("#scrollup").attr("rel", "#page-people");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto2"){
                    $("#scrolldown").attr("rel", "#page-manifesto3");
                    $("#scrollup").attr("rel", "#page-manifesto1");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto3"){
                    $("#scrolldown").attr("rel", "#page-manifesto4");
                    $("#scrollup").attr("rel", "#page-manifesto2");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto4"){
                    $("#scrolldown").attr("rel", "#page-manifesto5");
                    $("#scrollup").attr("rel", "#page-manifesto3");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto5"){
                    $("#scrolldown").attr("rel", "#page-manifesto6");
                    $("#scrollup").attr("rel", "#page-manifesto4");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto6"){
                    $("#scrolldown").attr("rel", "#page-manifesto7");
                    $("#scrollup").attr("rel", "#page-manifesto5");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto7"){
                    $("#scrolldown").attr("rel", "#page-manifesto8");
                    $("#scrollup").attr("rel", "#page-manifesto6");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto8"){
                    $("#scrolldown").attr("rel", "#page-manifesto9");
                    $("#scrollup").attr("rel", "#page-manifesto7");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto9"){
                    $("#scrolldown").attr("rel", "#page-manifesto10");
                    $("#scrollup").attr("rel", "#page-manifesto8");
                    $("#scrolldown").removeClass("arrowflip");
                }
                if(getSectionID == "page-manifesto10"){
                    $("#scrollup").attr("rel", "#page-manifesto9");
                    $("#scrolldown").addClass("arrowflip");
                    $("#scrolldown").attr("rel", "#page-start");
                }
            }
        });
    });

    $("#bleed-logo").click(function () {
        if($.bleedGlobals.menuMode == "no"){
            activateMenu();
        }
        else if($.bleedGlobals.menuMode == "yes"){
            disableMenu();
        }
    });

    $(".workcontainer").click(function () {
            getProject(this);
            return false;
    });

/*
    $("ul#people li").hover(
        function () {
            $(".people-sep", this).css("opacity", "1");
            $(".people-mail", this).css("opacity", "1");
            $(".people-phone", this).css("opacity", "1");
        },
        function () {
            $(".people-sep", this).css("opacity", "0");
            $(".people-mail", this).css("opacity", "0");
            $(".people-phone", this).css("opacity", "0");
        }
    );
*/

    $("ul#menu li").hover(
        function () {
            $(".menuhover", this).css("opacity", "0.07");
        },
        function () {
            $(".menuhover", this).css("opacity", "0");
        }
    );

    $("#smbc").click(function(){
        switchToWhite();
        var siteWidth = $(window).width();
        $("#sitescroll").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#socialmedia").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#scrolldown").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#handwriting-menu").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#handwriting-scroll").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#activetext").animate({'margin-left': -siteWidth+'px'}, 250, function(){});
        $("#contact").animate({'left': -siteWidth+'px'}, 250, function(){});
        $("#bleed-logo").animate({'left': -siteWidth+'px'}, 250, function(){ window.location = "http://blog.bleed.com"; });
        return false;
    });

    $("ul#menu li").click(function() {
        var device = navigator.userAgent.toLowerCase();

        var iPhone = device.match(/(iphone)/);
        var iPad = device.match(/(ipad)/);
        var iOS = device.match(/(iphone|ipad|ipod)/);

        var findClick = $(this).attr("menuname");
        var findClick = "#"+findClick;

        if(findClick == "#page-blog"){ window.location = "http://blog.bleed.com"; }

        var scrollTo = $(findClick).position().top;
        if(findClick == "#page-work"){
            if(iPhone){

            }
            else{
                scrollTo = scrollTo-100;
            }
        }
        else if(findClick == "#page-clients"){
            if(iPhone){
                scrollTo = scrollTo-100;
            }
            else {
                scrollTo = scrollTo+250;
            }
        }
        else if(findClick == "#page-awards"){
            if(iPhone){

            }
            else{
                scrollTo = scrollTo+210;
            }
        }
        else if(findClick == "#page-people"){
            if(iPhone){

            } else{
                scrollTo = scrollTo-65;
            }
        }

        disableMenu();
        // $("body, html").animate({scrollTop: scrollTo+"px"}, 350, 'easeInOutExpo', function(){});
        $("body, html").animate({scrollTop: scrollTo+"px"}, 150, function(){});

        if($.bleedGlobals.insideProject = "yes"){
            $("#openproject").remove();
            $("body, html").css("overflow", "scroll");
            $.bleedGlobals.insideProject = "no";
            return false;
        }
    });

    $("#scrolldown").click(function () {
            var getDestination = $("#scrolldown").attr("rel");
            var getDestinationName = getDestination;
            var getDestination = $(getDestination).position().top;
            var screenHeight = $(window).height();
            var screenWidth = $(window).width();

            if(getDestinationName == "#page-about"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-40; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+110; }
            }
            if(getDestinationName == "#page-work"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-0; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-110; }
            }
            if(getDestinationName == "#page-clients"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-220; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-awards"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination+150; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-people"){
                if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-100; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-100; }
            }
            $("body, html").animate({scrollTop: getDestination+"px"}, 150, function(){});
    });

    $(document).keydown(function(e){
        if (e.keyCode == 40) {
            var getDestination = $("#scrolldown").attr("rel");
            var getDestinationName = getDestination;
            var getDestination = $(getDestination).position().top;
            var screenHeight = $(window).height();
            var screenWidth = $(window).width();

            if(getDestinationName == "#page-about"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-40; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+110; }
            }
            if(getDestinationName == "#page-work"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-0; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-110; }
            }
            if(getDestinationName == "#page-clients"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-220; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-awards"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination+150; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-people"){
                if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-100; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-100; }
            }
            $("body, html").animate({scrollTop: getDestination+"px"}, 150, function(){});
           return false;
        }
        else if (e.keyCode == 38) {
            var getDestination = $("#scrollup").attr("rel");
            var getDestinationName = getDestination;
            var getDestination = $(getDestination).position().top;
            var screenHeight = $(window).height();
            var screenWidth = $(window).width();

            if(getDestinationName == "#page-about"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-50; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+110; }
            }
            if(getDestinationName == "#page-work"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-0; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-110; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-110; }
            }
            if(getDestinationName == "#page-clients"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination-220; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-awards"){
                if(screenHeight > 600 && screenWidth < 1020){ getDestination = getDestination+140; }
                else if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination+250; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination+250; }
            }
            if(getDestinationName == "#page-people"){
                if(screenHeight > 600 && screenHeight < 1100){ getDestination = getDestination-100; }
                else if(screenHeight > 1100 && screenHeight < 2000){ getDestination = getDestination-100; }
            }
            $("body, html").animate({scrollTop: getDestination+"px"}, 150, function(){});
            return false;
        }
    });

});
