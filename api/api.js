const k='595450d64577426470b9c5496dcc0451';
const options = {
    method: 'GET', 
    headers: {'Content-Type': 'application/json',
        'Authorization': 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTU0NTBkNjQ1Nzc0MjY0NzBiOWM1NDk2ZGNjMDQ1MSIsInN1YiI6IjY0NjhkMTVlMmJjZjY3MDEzODk0YWQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxfCYgWdp4-ZD6Iqxy6LwDCj6CrOWMjwsjhNYtVuLvQ',
    }
};



export function searchMovie(keyword){
    const url='https://api.themoviedb.org/3/search/movie?api_key='+k+'&query='+keyword+'&include_adult=false&language=en-US&page=1';
    return fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
}

export function movieImage(name){
    return 'https://image.tmdb.org/t/p/w500'+name;
}

export function movieById(id){
    const url='https://api.themoviedb.org/3/movie/'+id+'?api_key='+k;
    return fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
}