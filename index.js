// const apiKey = "422965-project-P86D3GKY"

const geniusToken = "NVCHblKgNHjrJQyuwmeXqHQuHelp9mXThm7spH2UhLF6Jt4vCFbs1lo74anCFOM3"
const inputEl = document.querySelector("#blank");
const button = document.querySelector("#search");


const dropdown = document.querySelector('select');
const dropdownContainer = document.querySelector("#info-container");

const getArtistResults = async () => {
    try {
        const artistName = inputEl.value;
        const tastediveURL = `https://cors-lite.herokuapp.com/https://tastedive.com/api/similar?info=1&q=${artistName}&k=422965-project-P86D3GKY`
        const response = await axios.get(tastediveURL);
        const artists = response.data.Similar.Results
        inputEl.value = "";

        const artistListEl = document.querySelector(".artist-list")

        artists.forEach((input) => {
        const option = document.createElement('option');
        option.innerText = input.Name;
        dropdown.appendChild(option);

        });

    } catch (error) {
        console.log(error);
    }
}

const resultsAndInfo = async (event) => {
    try {
        const newArtist = event.target.value;

        const url = `https://cors-lite.herokuapp.com/https://tastedive.com/api/similar?info=1&q=${newArtist}&k=422965-project-P86D3GKY`;
        const response = await axios.get(url);
        const dropdownArtists = response.data.Similar.Info;
        dropdownContainer.innerHTML = "";

        dropdownArtists.forEach((artist) => {

            const infoContainer = document.createElement("div");
            dropdownContainer.append(infoContainer);

            const artistName = document.createElement("h3");
            artistName.innerText = artist.Name;
            infoContainer.appendChild(artistName);
            const artistPicture = document.createElement("div");
            artistPicture.src = artistPicture;
            infoContainer.appendChild(artistPicture);
            const artistWTeaser = document.createElement("p");
            artistWTeaser.innerText = artist.wTeaser;
            infoContainer.appendChild(artistWTeaser);
            const artistYUrl = document.createElement("iframe");
            artistYUrl.src = artist.yUrl;
            infoContainer.appendChild(artistYUrl);

        });

    } catch (error) {
        console.error(error);
    }
}

$(function() {

    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target)
          && container.has(e.target).length === 0)
      {
          container.fadeOut();
      }
    });
    
  });

button.addEventListener("click", getArtistResults);
dropdown.addEventListener("change", resultsAndInfo);

// const child = document.querySelector(".child");
// child.placeholder="artist name";