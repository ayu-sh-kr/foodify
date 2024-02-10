import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import Swiper from "swiper";

@Component({
    selector: 'app-carousel',
    standalone: true,
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements AfterViewInit {


    images = ['/assets/images/food-slider/landing2.png',
        '/assets/images/food-slider/landing.jpg', "/assets/images/food-slider/slider1.png"];

    swiper!: Swiper

    ngAfterViewInit(): void {
        this.swiper = new Swiper('.swiper-carousel', {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            }
        })
    }
}
