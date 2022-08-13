import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-display"
export default class extends Controller {
  static targets = ['bform', 'rform'];

  displayBookmark() {
    const bookmarkFormClassList = this.bformTarget.classList;
    if (bookmarkFormClassList.contains('invisible')) {
      bookmarkFormClassList.remove('invisible');
      this.rformTarget.classList.add('invisible');
    }
  }

  displayReview() {
    const reviewFormClassList = this.rformTarget.classList;
    if (reviewFormClassList.contains('invisible')) {
      reviewFormClassList.remove('invisible');
      this.bformTarget.classList.add('invisible');
    }
  }
}
