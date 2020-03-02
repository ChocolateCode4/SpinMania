let xHTTP = new XMLHttpRequest();
let resp;
let respT;
let configName;

window.onload = () => {
  xHTTP.onreadystatechange = function() {
   if(this.readyState == 4 && this.status == 200) {
    resp = this.response;
    respT = JSON.parse(this.responseText);
    configMain = respT.main;
    //importScripts();
    loadGame();
   } else {
     document.innerHTML = "<h1>ERROR: NOT COMPATIBLE </h1>";
   }
  };
};

xHTTP.open("GET", "data/config.json", true);
xHTTP.send();

/*function importScripts() {
 const library = respT.libraries;
 const libcount = library.length;
 let libsContainer= document.getElementById('libsContainer');
let game = document.createElement("script");
 game.src = configMain.script;
 game.async = true;
 document.body.appendChild(game);
  for(x=0;x<libcount;x++) {
   let libraryToAdd = document.createElement("script");
   libraryToAdd.async = true;
   libraryToAdd.src = library[x];
   libsContainer.appendChild(libraryToAdd)
  }
}*/
function loadGame() {
 let game = document.createElement("script");
  game.async = true;
  game.src = configMain.script;
  document.body.appendChild(game);
}