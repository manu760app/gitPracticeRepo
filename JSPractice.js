//https://www.boredapi.com/api/

let movies = {list: ['Antman', 'Superman', 'Batman']};

function getMovies(movies){
  setTimeout(() => {
    console.log(movies.list);
  },3000);
}
function f(){
  console.log('Waiting...');
  console.log('Waiting...');

}
getMovies(movies);
f();
