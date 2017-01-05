<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script>
$.getJSON('https://api.twitch.tv/kraken/streams/Jonathan_x64', function(channel) {

    if (channel["gobgg"] == null) { 
        window.alert("nie wow");

    } else {
        window.alert("wow");
    
    }
});
</script>