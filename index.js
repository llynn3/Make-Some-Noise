// const apiKey = "422965-project-P86D3GKY"
// const tastediveURL = `https://tastedive.com/api/similar?q=${artistParam}&k=${apiKey}`

const inputEl = document.querySelector("#blank");
const containerEl = document.createElement('div');
const button = document.querySelector("#search");


const getArtistInfo = async () => {
    try {
        const artistName = inputEl.value;
        const tastediveURL = `http://cors-lite.herokuapp.com/https://tastedive.com/api/similar?q=${artistName}&k=422965-project-P86D3GKY`
        const response = await axios.get(tastediveURL);
        const artists = response.data.Similar.Results;

        artists.forEach((input) => {
            const info = document.createElement("p");
            info.innerText = input.Name;

            containerEl.append(info);

            console.log(input.Name);

    })

    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", getArtistInfo);
