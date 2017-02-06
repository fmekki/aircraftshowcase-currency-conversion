(function() {
    		var container = document.querySelector('div.container'),
        triggerBttn = document.getElementById('trigger-overlay'),
        triggerBttn2 = document.getElementById('trigger-overlay2'),
        triggerBttn3 = document.getElementById('trigger-overlay3'),
        triggerBttn4 = document.getElementById('trigger-overlay4'),
        triggerBttn5 = document.getElementById('trigger-overlay5'),
        triggerBttn6 = document.getElementById('trigger-overlay6'),
        overlay = document.querySelector('div.overlay-1'),
        overlay2 = document.querySelector('div.overlay-2'),
        overlay3 = document.querySelector('div.overlay-3'),
        overlay4 = document.querySelector('div.overlay-4'),
        overlay5 = document.querySelector('div.overlay-5'),
        overlay6 = document.querySelector('div.overlay-6'),
        closeBttn = overlay.querySelector('button.overlay-close');
    		closeBttn2 = overlay2.querySelector('button.overlay-close-2');
    		closeBttn3 = overlay3.querySelector('button.overlay-close-3');
    		closeBttn4 = overlay4.querySelector('button.overlay-close-4');
    		closeBttn5 = overlay5.querySelector('button.overlay-close-5');
    		closeBttn6 = overlay6.querySelector('button.overlay-close-6');
    		transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = {
            transitions: Modernizr.csstransitions
        };

    function toggleOverlay() {
        // if (classie.has(overlay, 'open')) {
        //     classie.remove(overlay, 'open');
        //     classie.remove(container, 'overlay-open');
        //     classie.add(overlay, 'close');
        //     var onEndTransitionFn = function(ev) {
        //         if (support.transitions) {
        //             if (ev.propertyName !== 'visibility') return;
        //             this.removeEventListener(transEndEventName, onEndTransitionFn);
        //         }
        //         classie.remove(overlay, 'close');
        //     };
        //     if (support.transitions) {
        //         overlay.addEventListener(transEndEventName, onEndTransitionFn);
        //     } else {
        //         onEndTransitionFn();
        //     }
        // } else if (!classie.has(overlay, 'close')) {
        //     classie.add(overlay, 'open');
        //     classie.add(container, 'overlay-open');
        // }
    }
    function toggleOverlay2() {
        // if (classie.has(overlay2, 'open')) {
        //     classie.remove(overlay2, 'open');
        //     classie.remove(container, 'overlay-open');
        //     classie.add(overlay2, 'close');
        //     var onEndTransitionFn = function(ev) {
        //         if (support.transitions) {
        //             if (ev.propertyName !== 'visibility') return;
        //             this.removeEventListener(transEndEventName, onEndTransitionFn);
        //         }
        //         classie.remove(overlay2, 'close');
        //     };
        //     if (support.transitions) {
        //         overlay2.addEventListener(transEndEventName, onEndTransitionFn);
        //     } else {
        //         onEndTransitionFn();
        //     }
        // } else if (!classie.has(overlay2, 'close')) {
        //     classie.add(overlay2, 'open');
        //     classie.add(container, 'overlay-open');
        // }
    }
    function toggleOverlay3() {
        // if (classie.has(overlay3, 'open')) {
        //     classie.remove(overlay3, 'open');
        //     classie.remove(container, 'overlay-open');
        //     classie.add(overlay3, 'close');
        //     var onEndTransitionFn = function(ev) {
        //         if (support.transitions) {
        //             if (ev.propertyName !== 'visibility') return;
        //             this.removeEventListener(transEndEventName, onEndTransitionFn);
        //         }
        //         classie.remove(overlay3, 'close');
        //     };
        //     if (support.transitions) {
        //         overlay3.addEventListener(transEndEventName, onEndTransitionFn);
        //     } else {
        //         onEndTransitionFn();
        //     }
        // } else if (!classie.has(overlay3, 'close')) {
        //     classie.add(overlay3, 'open');
        //     classie.add(container, 'overlay-open');
        // }
    }
    function toggleOverlay4() {
        if (classie.has(overlay4, 'open')) {
            classie.remove(overlay4, 'open');
            classie.remove(container, 'overlay-open');
            classie.add(overlay4, 'close');
            var onEndTransitionFn = function(ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn);
                }
                classie.remove(overlay4, 'close');
            };
            if (support.transitions) {
                overlay4.addEventListener(transEndEventName, onEndTransitionFn);
            } else {
                onEndTransitionFn();
            }
        } else if (!classie.has(overlay4, 'close')) {
            classie.add(overlay4, 'open');
            classie.add(container, 'overlay-open');
        }
    }
    function toggleOverlay5() {
        // if (classie.has(overlay5, 'open')) {
        //     classie.remove(overlay5, 'open');
        //     classie.remove(container, 'overlay-open');
        //     classie.add(overlay5, 'close');
        //     var onEndTransitionFn = function(ev) {
        //         if (support.transitions) {
        //             if (ev.propertyName !== 'visibility') return;
        //             this.removeEventListener(transEndEventName, onEndTransitionFn);
        //         }
        //         classie.remove(overlay5, 'close');
        //     };
        //     if (support.transitions) {
        //         overlay5.addEventListener(transEndEventName, onEndTransitionFn);
        //     } else {
        //         onEndTransitionFn();
        //     }
        // } else if (!classie.has(overlay5, 'close')) {
        //     classie.add(overlay5, 'open');
        //     classie.add(container, 'overlay-open');
        // }
    }
    function toggleOverlay6() {
        // if (classie.has(overlay6, 'open')) {
        //     classie.remove(overlay6, 'open');
        //     classie.remove(container, 'overlay-open');
        //     classie.add(overlay6, 'close');
        //     var onEndTransitionFn = function(ev) {
        //         if (support.transitions) {
        //             if (ev.propertyName !== 'visibility') return;
        //             this.removeEventListener(transEndEventName, onEndTransitionFn);
        //         }
        //         classie.remove(overlay6, 'close');
        //     };
        //     if (support.transitions) {
        //         overlay6.addEventListener(transEndEventName, onEndTransitionFn);
        //     } else {
        //         onEndTransitionFn();
        //     }
        // } else if (!classie.has(overlay6, 'close')) {
        //     classie.add(overlay6, 'open');
        //     classie.add(container, 'overlay-open');
        // }
    }


    triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener( 'click', toggleOverlay );
    triggerBttn2.addEventListener('click', toggleOverlay2);
    closeBttn2.addEventListener('click', toggleOverlay2);
    triggerBttn3.addEventListener('click', toggleOverlay3);
    closeBttn3.addEventListener('click', toggleOverlay3);
    triggerBttn4.addEventListener('click', toggleOverlay4);
    closeBttn4.addEventListener('click', toggleOverlay4);
    triggerBttn5.addEventListener('click', toggleOverlay5);
    closeBttn5.addEventListener('click', toggleOverlay5);
    triggerBttn6.addEventListener('click', toggleOverlay6);
    closeBttn6.addEventListener('click', toggleOverlay6);
})();
