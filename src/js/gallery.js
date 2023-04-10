import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const galleryDiv = document.querySelector('.gallery');
import { page } from './axios';

// Function to display images on the page
function displayImages(images) {
  const galleryItems = images.map(
    ({
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy">
        <div class="details">
          <span class="likes">${likes.toLocaleString()}</span>
          <span class="views">${views.toLocaleString()}</span>
          <span class="comments">${comments.toLocaleString()}</span>
          <span class="downloads">${downloads.toLocaleString()}</span>
        </div>
      </a>
    </li>
  `
  );
  galleryDiv.insertAdjacentHTML('beforeend', galleryItems.join(''));

  // Activate the simplelightbox plugin
  let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  }).refresh();

  if (page > 1) smoothPageScrolling(images);
}

//Smooth page scrolling after the request
function smoothPageScrolling(images) {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  const scrollAmount = cardHeight * images.length;
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

export { displayImages, galleryDiv };
