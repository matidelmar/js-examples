
(function(window, document, undefined) {

    'use strict';

    //constructor
    function Ninja(features, gender, name, type){
        Human.call(this, features, gender, name);//"extends"
        this.type = type;

    }

    window.Ninja = Ninja;

})(window, document);
