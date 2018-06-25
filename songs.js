$(document).ready(function () {

  // Use jQuery to get a reference to `load-songs`
  const loadSongs = $("#load-songs")
  // Use jQuery to get a reference to `song-list`
  const $songsList = $("#song-list")


  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */
  loadSongs.on("click", () => {
    $.ajax("songs.json")
      .then(response => {
        response.songs.forEach (function(song) {
          let title = song.title
          let artist = song.artist
          let album = song.album

          const $eachSong = $("<section>").addClass("song")
            $("<h1>").addClass("song__title").text(title).appendTo($eachSong)
              $("<section>").addClass("song__description").text( `Performed by ${artist} on the album ${album}`).appendTo($eachSong)
                $eachSong.appendTo($songsList)

        })
      })
    })
  })
