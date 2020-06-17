const app = angular.module("MovieApp", [])

app.controller('MyController',['$http', function($http){
  this.h1 = 'Movie Cataloger'
  this.createForm = {}
  this.movies = []
  this.movie = []


this.createMovie = () => {
  $http(
    {
      method: 'POST',
      url: '/movies',
      data: this.createForm
    }).then((response) => {
      this.getMovies()
    this.createForm = {}
    this.movies.push(response.data)
    console.log(response.data);
  }, error => {
    console.log(error);
  }
)
}

this.getMovies = () => {
  $http(
    {
      method: 'GET',
      url: '/movies'
    }).then(response => {
      this.movies = response.data
      console.log(response.data);
    }, error => {
      console.log(error);
    })
}

this.deleteMovie = (id) => {
  $http({
    method: 'DELETE',
    url: '/movies/' + id
  }).then(response => {
    const removeByIndex = this.movies.findIndex(movie => movie._id === id)
    this.movies.splice(removeByIndex, 1)
  }, error => {
    console.log(error);
  })
}

this.editMovie = () => {
  $http({
    method: 'PUT',
    url: '/movies/' + movies._id,
    data: {
      rating: this.updatedRating
    }
  }).then()
}


this.getMovies();

}]);
