(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.hi = function (names) {
    console.log(speakWord + " " + names);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
