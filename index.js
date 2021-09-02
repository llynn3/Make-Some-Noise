// const apiKey = "422965-project-P86D3GKY"

const inputEl = document.querySelector("#blank");
const button = document.querySelector("#search");



const getArtistResults = async () => {
    try {
        const artistName = inputEl.value;
        const tastediveURL = `http://cors-lite.herokuapp.com/https://tastedive.com/api/similar?info=1&q=${artistName}&k=422965-project-P86D3GKY`
        const response = await axios.get(tastediveURL);
        const artists = response.data.Similar.Results

        const artistListEl = document.querySelector(".artist-list")
        const dropdown = document.querySelector("#dropdown");



        artists.forEach((input) => {

            const artistsContainer = document.createElement("div");
            artistListEl.append(artistsContainer);

            const artistName = document.createElement("h3");
            // console.log(artistName);
            artistName.innerText = input.Name;
            artistsContainer.appendChild(artistName);
            const artistWTeaser = document.createElement("p");
            artistWTeaser.innerText = input.wTeaser;
            artistsContainer.appendChild(artistWTeaser);
            const artistYUrl = document.createElement("p");
            artistYUrl.innerHTML = input.yUrl;
            artistsContainer.appendChild(artistYUrl);

            const artistsEl = document.createElement("option");
            artistsEl.innerText = artistName
            dropdown.append(artistName);
            console.log(artistName);


    })

    } catch (error) {
        console.log(error);
    }
}



button.addEventListener("click", getArtistResults);
dropdown.addEventListener("change", getArtistResults);