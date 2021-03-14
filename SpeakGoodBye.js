(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.bye = function (names) {
    console.log(speakWord + " " + names);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
