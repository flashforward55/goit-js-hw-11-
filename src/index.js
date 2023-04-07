import Notiflix from 'notiflix';
import axios from 'axios';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const API_KEY = '35140926-fd12774c1839d7d0854ca625c';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const searchForm = document.querySelector('#search-form');
const galleryDiv = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let searchQuery = '';

// Function to display images on the page
function displayImages(images) {
  images.forEach(image => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.loading = 'lazy';

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    const likesSpan = document.createElement('span');
    likesSpan.classList.add('likes');
    likesSpan.textContent = image.likes.toString();

    const viewsSpan = document.createElement('span');
    viewsSpan.classList.add('views');
    viewsSpan.textContent = image.views.toString();

    const commentsSpan = document.createElement('span');
    commentsSpan.classList.add('comments');
    commentsSpan.textContent = image.comments.toString();

    const downloadsSpan = document.createElement('span');
    downloadsSpan.classList.add('downloads');
    downloadsSpan.textContent = image.downloads.toString();

    detailsDiv.appendChild(likesSpan);
    detailsDiv.appendChild(viewsSpan);
    detailsDiv.appendChild(commentsSpan);
    detailsDiv.appendChild(downloadsSpan);
  });
}

// Function to handle HTTP requests
async function handleRequest() {}

// Event listener for the search form
searchForm.addEventListener();

// Event listener for the load more button
loadMoreBtn.addEventListener();
