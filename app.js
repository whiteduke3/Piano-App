//Main javascript code


window.addEventListener("load", () => {
    var pads = document.querySelectorAll(".piano div");
    var tiles = document.querySelectorAll(".tile");
    var note_names = document.querySelector(".note-names");

    pads.forEach((tile, index) => {
        tile.addEventListener("click", function() {
            note_names.innerHTML = "";
            tiles[index].currentTime = 0;
            tiles[index].play();
            var note = pads[index].id;
            var h1 = document.createElement("h1");
            h1.classList.add("note-name");
            h1.textContent = note;
            note_names.appendChild(h1);
        });
    });
});


