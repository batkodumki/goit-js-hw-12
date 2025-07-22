import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "./refs";

const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: "alt",
    captionDelay: 250
})

export const createGallery = (images) => {
    const markupGallery = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
         <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-img"
                src="${webformatURL}"
                alt="${tags}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${likes}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${views}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${comments}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${downloads}</p>
            </li>
        </ul>
    </li>
        `
    }).join("");
    
    refs.gallery.insertAdjacentHTML("beforeend", markupGallery);

    lightbox.refresh();
};

export const clearGallery = () => {
    refs.gallery.innerHTML = "";
}

export const showLoader = () => { 
    refs.loader.classList.remove("hidden");
};

export const hideLoader = () => {
    refs.loader.classList.add("hidden");
};

export const showLoadMoreButton = () => {
    refs.loadBtn.classList.remove("hidden");
};

export const hideLoadMoreButton = () => {
    refs.loadBtn.classList.add("hidden");
};