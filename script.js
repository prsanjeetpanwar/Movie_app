const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const main=document.querySelector("main")

 async   function getMovies(){
   const resp= await fetch(APIURL);
   const respData=await resp.json()
   
   console.log(respData)
  
     respData.results.forEach(movie => {
         const {poster_path,title,vote_average}=movie;
         
         const movieElm = document.createElement('iv');
         movieElm.classList.add('movie')


         movieElm.innerHTML=`
         <main>
   

         <div class="movie">
         <img src="${IMGPATH+ poster_path}" alt="">
         <div class="movie-info"><h3>${title}</h3>
         <span class="${getClassByRate(vote_average)}">${vote_average}</span></div>
     </div>
     </main>
     `


         main.appendChild(movieElm)
     });
     return respData
    }

    function getClassByRate(vote){


        if(vote>=8){
            return 'green';

        }
        else if(vote>=5){
            return 'orange';
        }
        else{
            return 'red'
        }
    }
 getMovies()
 form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});