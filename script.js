var current = 0;arr = [];level = 1;

document.getElementById('redsound').addEventListener("ended", function() {
  $("#red").removeClass("bigbutton");
});
document.getElementById('greensound').addEventListener("ended", function() {
  $("#green").removeClass("bigbutton");
});
document.getElementById('bluesound').addEventListener("ended", function() {
  $("#blue").removeClass("bigbutton");
});
document.getElementById('yellowsound').addEventListener("ended", function() {
  $("#yellow").removeClass("bigbutton");
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function setEvents() {
  $("#red").on("click", function() {
    playSound(redsound);
    gamePlay(1);
  });
  $("#green").on("click", function() {
    playSound(greensound);
    gamePlay(2);
  });
  $("#blue").on("click", function() {
    playSound(bluesound);
    gamePlay(3);
  });
  $("#yellow").on("click", function() {
    playSound(yellowsound);
    gamePlay(4);
  });
}

function clearEvents() {
  $("#red").off();
  $("#blue").off();
  $("#green").off();
  $("#yellow").off();
}

function playSequence(arr, level) {
  clearEvents();
  var i = 0;

  $("#score").text("level " + level);

  let loop = setInterval(function() {
    if (i >= level - 1) {
      clearInterval(loop);
    }

    if (arr[i] === 1) {
      playSound(redsound);
      $("#red").addClass("bigbutton");
    }
    if (arr[i] === 2) {
      playSound(greensound);
      $("#green").addClass("bigbutton");
    }
    if (arr[i] === 3) {
      playSound(bluesound);
      $("#blue").addClass("bigbutton");
    }
    if (arr[i] === 4) {
      playSound(yellowsound);
      $("#yellow").addClass("bigbutton");
    }

    i += 1;
  }, 700);

  setEvents();
}

//start new game
$("#start").on("click", function() {
  current = 0;
  arr = [];
  level = 1; //reset variables for new game

  for (var a = 0; a <= 200; a++) {
    //generate new random sequence
    var rand = Math.round(Math.random() * 3) + 1;
    arr.push(rand);
  }

  playSequence(arr, level);
});

function gamePlay(key) {
  if (arr[current] == key) {
    console.log("true");
    current += 1;
  } else {
    clearEvents();
    $("#score").text("YOU LOSE!!!!!!!!!!!!!!!");
  }
  if (current == level) {
    current = 0;
    level += 1;
    playSequence(arr, level);
  }
}
