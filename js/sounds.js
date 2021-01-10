var meme_sounds = [
"bodda_cheti_gese.mp3", 
"e_b.mp3",
"e_bodda_ai_ai.mp3",
"e_bodda_double.mp3",
"e_bodda.mp3",
"eeh.mp3",
"e_khon.mp3",
"electric_durum.mp3",
"electric_mistri_hosuinna.mp3",
"hello.mp3",
"hoir_hoir_hoir.mp3",
"kaua_mara_gele.mp3",
"tui_khon.mp3",
"tui_mahbub_na.mp3"
]



document.body.addEventListener("copy", function () {
    var index = Math.floor(Math.random() * meme_sounds.length);
    var audio = new Audio('../sounds/' + meme_sounds[index]);
    console.log('../sounds/' + meme_sounds[index]);
    audio.play();
})

function hudai(){
    var index = Math.floor(Math.random() * meme_sounds.length);
    var audio = new Audio('sounds/' + meme_sounds[index]);
    console.log('sounds/' + meme_sounds[index]);
    audio.play();
}

//console.log("HI");