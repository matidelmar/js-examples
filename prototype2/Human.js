
(function(window, document, undefined) {

    'use strict';

    //privado
    var CONSTANTS = {
        legs: 2,
        arms: 2
    }

    //"constructor"
    function Human(features, gender, name){

        Mammals.call(this, features);//"extends"
        //publico
        this.gender = gender;
        this.name = name;

        this.talk = function(){
            return this.name + ' is talking'
        }
    }

    //privado

    window.Human = Human;

})(window, document);
