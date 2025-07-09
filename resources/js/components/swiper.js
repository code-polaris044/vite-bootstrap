/**
 * Swiper
 * https://swiperjs.com/
 */
import Swiper from "swiper";
import { EffectFade, Thumbs } from "swiper/modules";

window.addEventListener(
    "DOMContentLoaded",
    () => {
        // Swiper取得
        const productImage = document.querySelector(".product-image");
        if (productImage) {
            // サムネイル
            const thumbnailOptions = {
                slidesPerView: 13,
                spaceBetween: 8,
            };
            const thumbnailSwiper = new Swiper(
                ".swiper-thumbnail",
                thumbnailOptions,
            );

            // メイン
            const mainOptions = {
                modules: [EffectFade, Thumbs],
                effect: "fade",
                thumbs: {
                    swiper: thumbnailSwiper,
                },
            };
            const mainSwiper = new Swiper(".swiper-image", mainOptions);
        }
    },
    false,
);
