/* Author:

*/


var MC = {
    init: function(){
        this._globals();
        this.page.init();
    },
    _globals: function(){
        body = $('body'),
        MAIN = $("div[role='main']"),
       // L = body.find('#overview'),
        //MENU = $('#overview'),
        MENU = $('#overview .menu');
        //NAV = MENU.find('.menu')
        //FORM = L.find('.form');
    },
    page: {
        init: function(){
            this.slide();
            this.sticky();
            this.sizes();
        },
        slide: function(){
            log("test");
            MENU.find('a').click(function(){ //$('#overview .menu a')

                var t = $(this), rel = $(this).attr('rel');
                log("scroll menu. rel: " + rel);
                if (typeof rel != 'undefined'){
                    var os = $('#sticky-anchor').css('height').replace('px', '');
                    log("offset: " + os);

                    $.scrollTo('#'+rel, 1500, { axis: 'y', easing: 'easeOutBack', offset: -os });
                    return false;
                }
            });

            $('p > a').click(function(){ //$('#overview .menu a')
                var t = $(this), rel = $(this).attr('rel'), ahref = $(this).attr('href');
                //log("scroll content. rel: " + rel);
                if (typeof rel != 'undefined'){
                    if(ahref == '#'){
                        log("ziel: " + rel);
                         var os = $('#sticky-anchor').css('height').replace('px', '');
                         log("offset: " + os);
                         $.scrollTo('#'+rel, 1500, { axis: 'y', easing: 'easeOutBack', offset: -os });
                         return false;
                    }
                }
            });
        },
        sticky: function(){
            $(window).scroll(function(){
                var window_top = $(window).scrollTop();
                var div_top = $('#sticky-anchor').offset().top;
                $('#overview').toggleClass('sticky', window_top > div_top);
            });
        },
        sizes: function(){
            var newHeight = $(window).height()-$("header").height()-$('#sticky-anchor').height()-99;
            var newHeightSub = $(window).height()-$('#sticky-anchor').height();
            if(newHeightSub < 900){
                newHeightSub = 900;
            }
            //newHeightSub = 1000;
            var newHeightSubA = $('.sub_content_b:not(:first)').height() * 1.1;
            var newHeightSubB = $('.sub_content').height() * 1.1;
            $('#video-container').css({'height':(newHeight)+'px'});
            $('.sub_content_b:not(:first)').css({'height':(newHeightSubA)+'px'});
            $('.sub_content_b:not(:first)').css({'min-height':newHeightSub+'px'});
            $('.sub_content').css({'height':(newHeightSubB)+'px'});
            $('.sub_content').css({'min-height':newHeightSub+'px'});
            //TODO $(window).resize(function(){
        }
    }
}


$(function(){ MC.init(); })
