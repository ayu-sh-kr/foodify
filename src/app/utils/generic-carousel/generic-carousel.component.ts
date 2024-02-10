import {AfterViewInit, Component, Input} from '@angular/core';
import Swiper from "swiper";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-generic-carousel',
  standalone: true,
    imports: [
        NgClass
    ],
  templateUrl: './generic-carousel.component.html',
  styleUrl: './generic-carousel.component.css'
})
export class GenericCarouselComponent implements AfterViewInit{

    swiper!:Swiper;


    @Input()
    data:any[] = [];

    @Input()
    titleColor:string = 'text-slate-100';

    @Input()
    clickRoute!:string;

    @Input()
    position: string = 'top-0 right-0';


    ngAfterViewInit(): void {
        this.swiper = new Swiper('.swiper-restaurants', {
            slidesPerView: 2,
            loop: false,
            breakpoints: {
                0:{
                    slidesPerView: 1,
                },

                480: {
                    slidesPerView: 2,
                },

                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
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
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        })
    }
}
