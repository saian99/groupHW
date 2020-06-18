const app = angular.module("MovieApp", [])

app.controller('MyController',['$http', function($http){
  this.h1 = 'Movie Cataloger'
  this.info = false
  this.edit = false
  this.createForm = {}
  this.movies = []
  this.movie = {}
  const controller = this;

  this.toggleInfo = (movie) => {
    this.info = ! this.info
    this.edit = false
    this.movie = movie
  }

this.toggleEdit = (movie) => {
  this.edit = !this.edit
  this.info = false

}

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

this.editMovie = (movie) => {
  $http({
    method: 'PUT',
    url: '/movies/' + movie._id,
    data: {
      title: this.updatedTitle,
      img:this.updatedImg,
      genre:this.updatedGenre,
      rating: this.updatedRating,
      year:this.updatedYear
    }
  }).then(
    function(response){
      
      controller.getMovies()
      console.log(movie);
    }
  )
}


this.getMovies();

}]);
