import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { refs } from "./js/refs";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions";


let query = "";
let page = 1;

refs.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearGallery();

    query = refs.input.value.trim();
    page = 1;

    if (!query) { 
        return iziToast.error({
            message: "Please enter a search query!",
            position: "topRight"
        })
    };

    showLoader();

     try {const { hits, totalHits } = await getImagesByQuery(query, page); 
            
            
            if (hits.length === 0) {
                return iziToast.error({
                message: `Sorry, there are no images matching your search ${query}. Please try again!`,
            position: "topRight",
            })
            } 

            createGallery(hits);

            const totalPages = Math.ceil(totalHits / 15);
            
            if (page >= totalPages) {
                iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
            } else {
                showLoadMoreButton();
         }
     } catch(error) {
            iziToast.error({
                title: error.message,
            });
        }
        finally {
        hideLoader()
    };
    
    refs.form.reset();
});

refs.loadBtn.addEventListener("click", async () => {
    page += 1;
    showLoader();

    
    try {
       const { hits, totalHits } = await getImagesByQuery(query, page);

            createGallery(hits);

            setTimeout(() => {
  const firstCard = document.querySelector(".gallery-item");
  const cardHeight = firstCard?.getBoundingClientRect().height || 0;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}, 300);

            const totalPages = Math.ceil(totalHits / 15);
            
            if (page > totalPages) {
                hideLoadMoreButton();
                iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
       }
   } catch(error) {
            iziToast.error({
                title: error.message,
            });
   } finally {
            hideLoader();
        };
    
});
