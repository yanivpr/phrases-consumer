/**
 * Created by yanivpreiss on 7/30/14.
 */

var Phrases = Phrases || {};

Phrases.Actions = (function($) {

    var self = {};

    self._onRandom = function onRandom () {
        $('#random').click(function(){
            $.ajax({
                url: 'random',
                dataType: 'json',
                    success: function(data){
                        $('#random-result').text(data.phrase);
                    },
                    error: function(data){
                        console.log(data)
                        alert("error " + data.statusText);
                    }
                }
            )
        });
    };

    self._setup = function setup (){
      self._onRandom();
    };

    $().ready(function(){
       self._setup();
    });

    return self;
} (jQuery));