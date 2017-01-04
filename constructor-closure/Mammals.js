
(function(window, document, undefined) {

    'use strict';

    var CONSTANTS = {
        hair: true,
        neocortex: true,
        mammaryGlands: true,
        jawJoint: true
    }

    //"constructor"
    function Mammals(features){
        //publico
        this.features = features;

        this.eat = function(food){
            var digetsResult = digets(this, food);
            return this.name + ' is eating and producing '+ digetsResult;
        }
    }

    function digets(t, food){
        console.log(t);
        return 'energy';
    }

    window.Mammals = Mammals;

})(window, document);
