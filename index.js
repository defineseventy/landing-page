<script>
  var terra = document.getElementById("terraglotte"),
    music = document.getElementById("yorunikakeru&katamoi"),
    terra_audio = document.querySelectorAll('audio');
  console.log(terra_audio);
  terra.addEventListener('mouseenter', function(){
    [].forEach.call(terra_audio, function(audio)){
                    music.play();
  });
}, false);
  terra.addEventListener('mouseout', function(){
    music.pause();
    music.currentTime() = 0;
  }, false);
function myFunction() {
  document.getElementById("2ndanniversary").style.display = "block";
};
</script>
