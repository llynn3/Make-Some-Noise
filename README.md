
# Project Overview

## Project Name

Make Some Noise

## Project Description

This app allows users to play music based on their music search preference on an artist/genre

## API and Data Sample

The primary API will be TasteDive. This allows to access music artist info, songs, videos and recommendations of similar artists. Not sure if it will return any album pictures.

## API Data Sample 

API Sample: https://tastedive.com/api/similar?info=1&q=usher&k=422965-project-P86D3GKY

```
{
Similar: {
Info: [
{
Name: "Usher",
Type: "music",
wTeaser: "Usher Raymond IV (born October 14, 1978) is an American singer, songwriter, actor, businessman, and dancer. He was born in Dallas, Texas, but raised in Chattanooga, Tennessee, until moving to Atlanta, Georgia. At the age of 12, his mother put him in local singing competitions before catching the attention of a music A&R from LaFace Records. He released his self-titled debut album Usher (1994), and rose to fame in the late 1990s with the release of his second album My Way (1997). It spawned his first U.S. Billboard Hot 100 number-one single "Nice & Slow", and the top-two singles "You Make Me Wanna..." and "My Way". His third album, 8701 (2001), produced the number-one singles "U Remind Me" and "U Got It Bad", as well as the top-three single "U Don't Have to Call". It sold eight million copies worldwide and won his first two Grammy Awards as Best Male R&B Vocal Performance in 2002 and 2003.",
wUrl: "http://en.wikipedia.org/wiki/Usher_(entertainer)",
yUrl: "https://www.youtube-nocookie.com/embed/o3IWTfcks4k",
yID: "o3IWTfcks4k"
}
],
Results: [
{
Name: "Chris Brown",
Type: "music",
wTeaser: "Chris Brown (born 1953) is an American composer, pianist and electronic musician, who creates music for acoustic instruments with interactive electronics, for computer networks, and for improvising ensembles. He was active early in his career as an inventor and builder of electroacoustic instruments; he has also performed widely as an improviser and pianist with groups as "Room" and the "Glenn Spearman Double Trio." In 1986 he co-founded the pioneering computer network music ensemble "The Hub". He is also known for his recorded performances of music by Henry Cowell, Luc Ferrari, and John Zorn. He has received commissions from the Berkeley Symphony, the Rova Saxophone Quartet, the Abel-Steinberg-Winant Trio, the Gerbode Foundation, the Phonos Foundation and the Creative Work Fund. His recent music includes the poly-rhythm installation "Talking Drum", the "Inventions" series for computers and interactive performers, and the radio performance "Transmissions" series, with composer Guillermo Galindo.",
wUrl: "http://en.wikipedia.org/wiki/Chris_Brown_(composer)",
yUrl: "https://www.youtube-nocookie.com/embed/dPhwbZBvW2o",
yID: "dPhwbZBvW2o"
},
```

## Wireframes
![wireframes](https://user-images.githubusercontent.com/88290507/131418815-fba925ae-f83d-4171-be86-5b2fe5e7195f.jpg)


### MVP/PostMVP

#### MVP 

-	Axios call on TasteDive API
-	Use flexbox for responsive design
-	Have songs, artists and maybe some information of the artist when doing a search
-	Clear query box when creating a new search
-	Create HTML, CSS, and JS for interface for display when page loads and doing searches


#### PostMVP  

- Possibly add albums covers/pictures? 
- Another list for additional recommendations of artists?


## Priority Matrix
![priority matrix](https://user-images.githubusercontent.com/88290507/131415543-771510f0-4756-4f74-b08c-a572ae1ecff8.jpg)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs|  
| Calling/requests | H | 2hrs|  
| Debugging | H | 2hrs | 
| Display Content | M | 3hrs |
| Submit Button | M | 2hrs |
| Wireframes | H | 3hrs |
| Flexbox | M | 2hrs |
| Responsive CSS | H | 3hrs | 
| Text style/colors | L | 2hrs |
| Image and video formatting/import | H | 3hrs |
| Total | H | 25hrs| 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
