//<![CDATA[
    {"@context":"https://schema.org","@type":"LocalBusiness","name":"PULIDO DE PISOS", "url":"","email":"duartevictor1979@gmail.com","faxNumber":"","telefono":"04120260906","address":{"@type":"PostalAddress","addressCountry":"Ccs","addressLocality":"Distrito Capital, Ccs","addressRegion":"Csc","postalCode":"1020","streetAddress":"SAUL COLOMBRES, 83"},"logo":"","image":"","openingHours":"[\"Mon 08:00-18:00\",\"Tue 08:00-19:00\",\"Wed 08:00-19:00\",\"Thu 08:00-19:00\",\"Fri 08:00-19:00\",\"Sat 09:00-16:00\",]","paymentAccepted":"Cash, Deposit","priceRange":""}
    //]]>

    //<![CDATA[

    function MSGNewGallery_page28_newgallery2(zoom,scale) {
       var _SlideshowTransitions = [{$Duration:400,$Delay:100,$Rows:7,$Clip:4,$Formation:$JssorSlideshowFormations$.$FormationStraight}];
       var options = {
                $DragOrientation: 1,
                $FillMode: 2,
                $AutoPlay: true,
                $SlideDuration: 800,
                $PlayOrientation: 1,
                $SlideSpacing: 1,
                $Idle: 4000,
                $LazyLoading: 3,
                $Align: 0, $Cols:3,$SlideWidth: 314, $SlideSpacing: 8,
                $ArrowNavigatorOptions: { $Class: $JssorArrowNavigator$,  $ChanceToShow: 2,  $AutoCenter: 2,  $Steps: 1, $Scale: false},
                $BulletNavigatorOptions: { $Class: $JssorBulletNavigator$,
                    $ChanceToShow: 2,
                    $AutoCenter: 1,
                    $Steps: 1,
                    $Lanes: 1,
                    $SpacingX: 10,
                    $SpacingY: 10,
                    $Orientation: 1,
                    $Scale: true
        },
                
                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },
                
                
        };
        $('#page28_newgallery2_container').css('visibility','visible');
        $('#page28_newgallery2 .loading_div').hide();
        var jssor_page28_newgallery2 = new $JssorSlider$('page28_newgallery2_container', options);

        var resizeId;
        function ScaleSlider() {
           clearTimeout(resizeId);
           resizeId = setTimeout(ScaleSliderOnResizeDone, 500);
        }

        function ScaleSliderOnResizeDone(){
                    var id = jssor_page28_newgallery2.$Elmt.getAttribute('id');

                     $('#'+id).keypress(function(e) {
                                var key = e.which;
                            if (key == 13)
                              {
                                   document.activeElement.click();
                              }
                            });


                    if($('#'+id).length == 0 ){
                          return;
                    }
                    var parentWidth = $('#' + id).parent().width();
                    if (parentWidth){
                        jssor_page28_newgallery2.$SetScaleWidth(parentWidth);

                        if(false){
                            UnscaleCaption();
                        }
                    }
                    else{
                        window.setTimeout(ScaleSlider, 30);}
                    if (typeof (fixContentBottom) == 'function') {
                        fixContentBottom();
                    }
                    if (typeof (initStickyPanels) == 'function') {
                          setTimeout(function () {
                       initStickyPanels(true);
                          }, 0);
                    }
        }

        if(scale){
            ScaleSliderOnResizeDone();
            $(window).bind('load', ScaleSlider);
            $(window).bind('resize', ScaleSlider);
            $(window).bind('orientationchange', ScaleSlider);
            if($('#page28_newgallery2_container .jssort01 .c').width()> 160){
                $('#page28_newgallery2_container .jssort01 .c').css('background-size','70%');
            }
        }


        /* Rotem - prevent images caption to scale down - scale the caption with the inverse value */
        function UnscaleCaption(){
                var $caption = $('#page28_newgallery2').find('div[class*=_content_container][u=caption]');
                if($caption){
                    var $captionParent = $caption.parents('div[style*=transform]');
                    if($captionParent){
                        if($captionParent.css('transform')){
                            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
                            var matches = $captionParent.css('transform').match(matrixRegex);
                            if(matches && matches.length > 1){
                                var scaleCaption = 'scale(' + 1/matches[1] + ')';
                                $caption.css({'transform': scaleCaption});
                            }
                        }
                    }
                }
        }
        /* Rotem - prevent images caption to scale down - scale the caption with the inverse value */


        if(zoom){

            $('[id*=zoomContainer_]').hide();
            jssor_page28_newgallery2.$On( $JssorSlider$.$EVT_PARK, function(slideIndex){

                var allImages = $(jssor_page28_newgallery2.$Elmt).find('img[u=image]');
                var currentImage = allImages.eq(slideIndex);
                var currentDiv = currentImage.parent('div');
                var zoomContainer = '#zoomContainer_'+currentImage.attr('id');
                currentImage.addClass('activeImage');

                $('[id*=zoomContainer_]').hide();
                $(jssor_page28_newgallery2.$Elmt).find('img[u=image]').removeClass('activeImage');
                currentImage.addClass('activeImage');
                currentImage.mouseenter ( function() {
                    if(!$(zoomContainer).is(':visible') && $(this).hasClass('activeImage')) {
                        $(zoomContainer).show();
                    }
                });
                $(zoomContainer).mouseleave( function() {
                    $(this).hide();
                });
            });


            jssor_page28_newgallery2.$On( $JssorSlider$.$EVT_SWIPE_START, function(){
                    $('[id*=zoomContainer_]').hide();
                    $(jssor_page28_newgallery2.$Elmt).find('img[u=image]').removeClass('activeImage');
                    $('[id*=zoomContainer_]').stop();
            });

        }

      };
//]]>
