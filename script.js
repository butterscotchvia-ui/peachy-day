function setMood(mood){

  document.getElementById("result").innerText =
  "Today's mood: " + mood;

  localStorage.setItem("mood", mood);
}

window.onload = function(){

  const mood = localStorage.getItem("mood");

  if(mood){

    document.getElementById("result").innerText =
    "Today's mood: " + mood;

  }

}
