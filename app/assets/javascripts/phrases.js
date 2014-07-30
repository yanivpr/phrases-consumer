/**
 * Created by yanivpreiss on 7/30/14.
 */

var Phrases = Phrases || {};

Phrases.Actions = (function($) {

    var self = {};

    self._getRandom = function getRandom() {
        $.ajax({
                url: 'random',
                dataType: 'json',
                success: function (data) {
                    $('#random-result').text(data.phrase);
                },
                error: function (data) {
                    console.log(data)
                    alert("error " + data.statusText);
                }
            }
        )
    };

    self._append = function getRandom(text) {
        $.ajax({
                url: 'append',
                data: {phrase: text},
                dataType: 'json',
                method: 'POST',
                success: function (data) {
                    alert(text + ' added!');
                },
                error: function (data) {
                    console.log(data)
                    alert("error " + data.statusText);
                }
            }
        )
    }

    self._onRandom = function onRandom () {
        $('#random').click(function(){
            self._getRandom();
        });
    };

    self._onAppend = function onAppend () {
        $('#append').click(function(){
            self._append($('#append-input').val());
        });
    };

    self._setup = function setup (){
      self._onRandom();
      self._onAppend();
    };

    $().ready(function(){
       self._setup();
    });

    return self;
} (jQuery));