                            $(document).ready(function () {

                                // typed js
                                $(".typed").typed({
                                    strings: ["MD FERDOUS ISLAM.", "FONT END DEVLOPER.", "FREELANCER.", ],
                                    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
                                    stringsElement: null,
                                    // typing speed
                                    typeSpeed: 50,
                                    // time before typing starts
                                    startDelay: 500,
                                    // backspacing speed
                                    backSpeed: 50,
                                    // time before backspacing
                                    backDelay: 500,
                                    // loop
                                    loop: true,
                                    // false = infinite
                                    loopCount: 100,
                                    // show cursor
                                    showCursor: false,
                                    // character for cursor
                                    cursorChar: "|",
                                    // attribute to type (null == text)
                                    attr: null,
                                    // either html or text
                                    contentType: 'html',
                                    // call when done callback function
                                    callback: function () {},
                                    // starting callback function before each string
                                    preStringTyped: function () {},
                                    //callback for every typed string
                                    onStringTyped: function () {},
                                    // callback for reset
                                    resetCallback: function () {}
                                });

                                //practical js-----------------------------------------------------------------------------------------


                                particlesJS("particles-js", {
                                    "particles": {
                                        "number": {
                                            "value": 400
                                        },
                                        "color": {
                                            "value": "#fff"
                                        },
                                        "shape": {
                                            "type": "circle"
                                        },
                                        "opacity": {
                                            "value": 0.5,
                                            "random": true,
                                            "anim": {
                                                "enable": true,
                                                "speed": 3
                                            }
                                        },
                                        "size": {
                                            "value": 5
                                        },
                                        "move": {
                                            "enable": true,
                                            "speed": 2,
                                            "direction": "right"
                                        }
                                    },

                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            },
                                            "onclick": {
                                                "enable": true,
                                                "mode": "push"
                                            }
                                        },
                                        "modes": {
                                            "repulse": {
                                                "distance": 90,
                                                "duration": 0.4
                                            }
                                        }
                                    }
                                });


                                //manu sckity--------------------------------------------------------start


                                $(window).scroll(function () {
                                    var scrollBar = $(this).scrollTop();
                                    var sckity = $('.sckity_top');

                                    if (scrollBar >= 150) {
                                        sckity.addClass('manu_bg');
                                    } else {
                                        sckity.removeClass('manu_bg');
                                    }

                                });

                                $('body').scrollspy({
                                    target: ".navbar",
                                    offset: 50,
                                });



                                $('body').scrollspy({
                                    target: ".navbar",
                                    offset: 50
                                });

                                var html_body = $('html, body');

                                $('nav a').on('click', function () {
                                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                                        var target = $(this.hash);
                                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                        if (target.length) {
                                            html_body.animate({
                                                scrollTop: target.offset().top + 100
                                            }, 1500);
                                            return false;
                                        }
                                    }
                                });

                                //manu sckity--------------------------------------------------------end

                                //education slider-----------------------------------------------------------
                                $('.education_slider').slick({
                                    infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    arrows: true,
                                    autoplay: false,
                                    dots: true,
                                    autoplaySpeed: 1000,
                                    prevArrow: '.team_arrow_left',
                                    nextArrow: '.team_arrow_right',
                                    responsive: [
                                        {
                                            breakpoint: 992,
                                            settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 1,
                                            }
                                },
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                            }
                                },


                                        {
                                            breakpoint: 576,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1
                                            }
                                }


                              ]

                                });

                                //order slider----------------------------------------------
                                $('.full-wraper').slick({
                                    infinite: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                    autoplay: false,
                                    autoplaySpeed: 1000,
                                    speed: 1000,
                                    cssEase: 'linear',
                                    prevArrow: '.order_arrow_left',
                                    nextArrow: '.order_arrow_right',
                                });
                                //vanobox order part---------------------------------
                                $('.venobox').venobox({
                                    border: '10px',
                                });
                                

                                //preloader------
                                $(window).on('load', function () {
                                    $('#preloader').delay(2000).fadeOut(500);
                                });



                                //wow js------------------------------------------
                                
                                new WOW().init();



                                //end--------------------------------------------------------------------------------------------------

                            });
