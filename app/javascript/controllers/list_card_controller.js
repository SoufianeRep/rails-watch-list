import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="list-card"
export default class extends Controller {
  static targets = ['thumbnail', 'info', 'movies', 'reviews']

  mouseOver (e) {
    this.thumbnailTarget.classList.toggle('thumbnail-transform');
    this.thumbnailTarget.classList.toggle('movie-thumbnail');
    // this.descriptionTarget.classList.add('description-transform');
    // this.descriptionTarget.classList.remove('movie-description');
    this.infoTarget.classList.toggle('movie-info');
    this.infoTarget.classList.toggle('info-transform');
  }

  mouseOut (e) {
    this.infoTarget.classList.toggle('movie-info');
    this.infoTarget.classList.toggle('info-transform');
    this.thumbnailTarget.classList.toggle('thumbnail-transform');
    this.thumbnailTarget.classList.toggle('movie-thumbnail');
  }

  displayMovies() {
    const moviesClassList = this.moviesTarget.classList
    if (moviesClassList.contains('invisible')) {
      moviesClassList.remove('invisible')
      this.reviewsTarget.classList.add('invisible')
    }
  }

  displayReviews() {
    const reviewsClassList = this.reviewsTarget.classList
    if (reviewsClassList.contains('invisible')) {
      reviewsClassList.remove('invisible')
      this.moviesTarget.classList.add('invisible')
    }
  }
}
