$(function () {
    //--------init carousel-----------
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        center: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: false,
        autoplayTimeout: 5000,

        responsive: {
            0: {
                items: 1
            },

            769: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    var $owl = $(".owl-carousel");
    var $text = $("#gallery header p");
    var $descri = $owl.find(".center img").attr("alt");
    $text.text($descri);
    $owl.find(".center img").addClass("color");
    $owl.on("translated.owl.carousel", function (e) {
        $descri = $owl.find(".center img").attr("alt");
        $text.text($descri);
        $owl.find(".color").removeClass("color");
        $owl.find(".center img").addClass("color");
        TweenMax.from($text, 0.5, {
            opacity: 0,
            scale: 0.5
        });
        showImg();
    });





    //-------------match height----------
    /*$(".client").matchHeight({
    byRow: false,
    property: 'height',
    target: null,
    remove: false
});*/



    //---------------map it --------------------
    var gMapKey = "AIzaSyCi6oIdNhs2_XmSFoTUjqvGt4Rv70vsAG0";
    $('#map').mapit({
        latitude: 41.613162,
        longitude: -4.686522,
        marker: {
            latitude: 41.613162,
            longitude: -4.686522,
            icon: '../images/marker.png',
            title: 'SOFROZA GYM',
            open: false,
            center: true
        },
        address: 'Avd. Real nº25,47193 La Cisterniga, Valladolid',
        styles: 'GRAYSCALE',
        locations: [],
        origins: []
    });


    //----------------foto overlay------------------

    function showImg() {
        $owl.find(".center img").click(function () {


            $("#foto-overlay").fadeIn();
            var srcImg = $(this).attr("src");
            $("#foto-overlay img").attr("src", srcImg);
            imgResize();
        });

    }

    function imgResize() {
        var wWidth = $(window).width();
        var wHeight = $(window).height();
        var imgWidth = $("#foto-overlay img").width();
        var imgHeight = $("#foto-overlay img").height();
        var ratio = imgWidth / imgHeight;
        var wRatio = imgWidth / wWidth;
        var hRation = imgHeight / wHeight;

        if (wRatio >= hRation) {
            imgWidth = wWidth - 50;
        } else {
            imgHeight = wHeight - 50;
            imgWidth = imgHeight * ratio;
        }


        $("#foto-overlay img").css("width", imgWidth + "px");
        $("#foto-overlay img").css("max-width", "100%");
    }

    showImg();



    $(".aspa,#foto-overlay img").click(function () {
        $("#foto-overlay").fadeOut();
    });

    //-------------tarifa -----------------
    /*$(".tarifa").mouseover(function () {
        var $this = $(this);
        TweenMax.to($this, 0.5, {
            scale: "1.2"
        });
    });

    $(".tarifa").mouseout(function () {
        TweenMax.to(".tarifa", 0.5, {
            scale: "1"
        });
    });*/

    //----------parallax----------
    $(window).scroll(function () {
        parallax("#home");
      //  parallax("#team");
       parallax("#intro");
        parallax("#tarifa");
        /*console.log("scrolltop: "+$(window).scrollTop());
         console.log("offset top: "+$("#team").offset().top);*/
    });

    function parallax(ele) {
        var wScroll = $(window).scrollTop() - $(ele).offset().top;
        $(ele).css("background-position", "center " + (wScroll * 0.6) + "px");
    }

    //------------scroll magic---------------



    $("#intro .text").lettering("words");
    $(".client .text").lettering("words");

    var introTl = new TimelineLite();


    introTl.from("#intro .about", 0.5, {
            opacity: 0,
            width: "0px"
        })
        .from("#intro h1", 0.5, {
            opacity: 0,
            scale: 2,
            x: 200
        })
        .staggerFrom("#intro .icon img", 0.3, {
            x: -200,
            opacity: 0
        }, 0.2)
        .staggerFrom("#intro p span", 0.5, {
            cycle: {
                x: function () {
                    return Math.random() * 600 - 300
                },
                y: function () {
                    return Math.random() * 600 - 300
                }
            },
            opacity: 0,
        }, 0.01);













    var teamTl = new TimelineLite();
    teamTl.from("#team h1", 0.5, {
        opacity: 0,
        y: 100
    });



    var tarifaTl = new TimelineLite();
    tarifaTl.from("#tarifa header", 0.5, {
            opacity: 0,
            y: 100
        })
        .staggerFrom(".tarifa", 0.5, {
            cycle: {
                x: function () {
                    return Math.random() * 600 - 300
                },
                y: function () {
                    return Math.random() * 600 - 300
                }
            },
            opacity: 0
        }, 0.1)
        .staggerFrom(".num", 0.5, {
            cycle: {
                x: function () {
                    return Math.random() * 600 - 300
                },
                y: function () {
                    return Math.random() * 600 - 300
                }
            },
            opacity: 0
        }, 0.1)
        .staggerFrom(".tarifa .text", 0.5, {
            cycle: {
                x: function () {
                    return Math.random() * 600 - 300
                },
                y: function () {
                    return Math.random() * 600 - 300
                }
            },
            opacity: 0
        }, 0.1);

    var galleryTl = new TimelineLite();

    galleryTl.from("#gallery header", 1, {
        opacity: 0,
        y: 100
    });

    var contactTl = new TimelineLite();
    contactTl.from("#contact h1", 1, {
            opacity: 0,
            y: 100
        })
        .from("address", 1, {
            opacity: 0,
            x: -200
        })
        .from("#map", 1, {
            opacity: 0,
            scale: 0
        });



    function scroll1024() {
        var controller = new ScrollMagic.Controller();
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#intro",
                triggerHook: 0.5
            }).setTween(introTl)
            /*.addIndicators({
                name: "intro",
                colorTrigger: "black",
                colorStart: "white",
                colorEnd: "#fff"
            })*/
            .addTo(controller);

        var scene6 = new ScrollMagic.Scene({
                triggerElement: "#tarifa",
                triggerHook: 0.5,
                duration: "50%"
            })
            .setTween(tarifaTl)
            /*.addIndicators()*/
            .addTo(controller);

        var scene7 = new ScrollMagic.Scene({
                triggerElement: "#gallery",
                triggerHook: 1
            })
            .setTween(galleryTl)
            /*.addIndicators({
                name:"gallery"
            })*/
            .addTo(controller);

        var scene8 = new ScrollMagic.Scene({
                triggerElement: "#client",
                triggerHook: 0.5,
                duration: "50%"
            })
            .setTween(TweenMax.from("#client h1", 1, {
                opacity: 0,
                y: 100
            }))
            /*.addIndicators()*/
            .addTo(controller);

        $(".client").each(function () {
            var tl = new TimelineLite();

            tl.from($(this).find("figure"), 1, {
                    opacity: 0,
                    scale: 0
                })
                .from($(this).find("h4"), 1, {
                    opacity: 0,
                    x: 200
                })
                .staggerFrom($(this).find("p span"), 1, {
                    cycle: {
                        x: function () {
                            return Math.random() * 600 - 300
                        },
                        y: function () {
                            return Math.random() * 600 - 300
                        }
                    },
                    opacity: 0,
                }, 0.1);

            var scene8 = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.5,
                    duration: "20%"
                }).setTween(tl)
                /*.addIndicators()*/
                .addTo(controller);
        });


        var scene9 = new ScrollMagic.Scene({
                triggerElement: "#contact",
                triggerHook: 0.5,
                duration: "50%"
            })
            .setTween(contactTl)
            /*.addIndicators()*/
            .addTo(controller);

    } //------scroll1024

    function scrollMovil() {



        var controller = new ScrollMagic.Controller();
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#intro",
                triggerHook: 1
            }).setTween(introTl)
            /* .addIndicators({
                 name: "intro",
                 colorTrigger: "black",
                 colorStart: "white",
                 colorEnd: "#fff"
             })*/
            .addTo(controller);



        var scene6 = new ScrollMagic.Scene({
                triggerElement: "#tarifa",
                triggerHook: 0.5
            })
            .setTween(tarifaTl)
            /*.addIndicators()*/
            .addTo(controller);

        var scene7 = new ScrollMagic.Scene({
                triggerElement: "#gallery",
                triggerHook: 1
            })
            .setTween(galleryTl)
            /*.addIndicators()*/
            .addTo(controller);

        var scene8 = new ScrollMagic.Scene({
                triggerElement: "#client",
                triggerHook: 0.5,
                duration: "50%"
            })
            .setTween(TweenMax.from("#client h1", 1, {
                opacity: 0,
                y: 100
            }))
            /*.addIndicators()*/
            .addTo(controller);

        $(".client").each(function () {
            var tl = new TimelineLite();

            tl.from($(this).find("figure"), 1, {
                    opacity: 0,
                    scale: 0
                })
                .from($(this).find("h4"), 1, {
                    opacity: 0,
                    x: 200
                })
                .staggerFrom($(this).find("p span"), 1, {
                    cycle: {
                        x: function () {
                            return Math.random() * 600 - 300
                        },
                        y: function () {
                            return Math.random() * 600 - 300
                        }
                    },
                    opacity: 0,
                }, 0.1);

            var scene8 = new ScrollMagic.Scene({
                    triggerElement: this,
                    triggerHook: 0.5,
                    duration: "20%"
                }).setTween(tl)
                /*.addIndicators()*/
                .addTo(controller);
        });


        var scene9 = new ScrollMagic.Scene({
                triggerElement: "#contact",
                triggerHook: 0.5,
                duration: "50%"
            })
            .setTween(contactTl)
            /*.addIndicators()*/
            .addTo(controller);

    } //------scrollmovil

    if ($(window).width() >= 1024) {
        scroll1024();
    } else {
        scrollMovil();
    }

    var wWidth = $(window).width();
    var screen = "";
    if (wWidth < 1024) {
        screen = "small";
    } else if (wWidth > 1024) {
        screen = "big";
    }

    $(window).resize(function () {
        imgResize();
        var currentWidth = $(window).width();

        if (currentWidth < 1024 && screen === "big") {
            location.reload();
            screen = "small";
            console.log("small");
        } else if (currentWidth >= 1024 && screen === "small") {
            location.reload();
            screen = "big";
            console.log("big");
        }
    });



    var headerTl = new TimelineLite();
    var somos = $("#home .somos");
    var sforza = $("#home .sforza");
    var gym = $("#home .gym");
    var header = $("#home .header");
    headerTl.fromTo(header, 2, {
            opacity: 0,
            y: -500
        }, {
            opacity: 1,
            y: 0
        })
        .fromTo(somos, 1.5, {
            opacity: 0,
            y: 200,
            scale: 5
        }, {
            opacity: 1,
            y: 0,
            scale: 1
        })
        .fromTo(gym, 1, {
            opacity: 0,
            y: -200
        }, {
            opacity: 1,
            y: 0
        }, "-=0.5")
        .fromTo(sforza, 1, {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0
        }, "-=0.5");


setInterval(function(){
    /*var randomX=Math.random()*100;
    var randomY=Math.random()*100;*/
    //var po=randomX+"% "+ randomY+"%";

/*console.log(po);*/

},2000);



    TweenMax.to("#home", 1, {
        backgroundPosition: "10% 0%"

    });

});
