import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
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

    @Input()
    selector!:string;

    @ViewChild('swiper') swiperRef!:ElementRef;
    @ViewChild('nextEl') nextEl!:ElementRef;
    @ViewChild('prevEl') prevEl!:ElementRef;


    ngAfterViewInit() {
        this.swiperRef.nativeElement.classList.add(this.selector);
        this.nextEl.nativeElement.classList.add(this.selector + '-next');
        this.prevEl.nativeElement.classList.add(this.selector + '-prev');
        this.swiper = new Swiper('.' + this.selector, {
            loop: true,
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
                nextEl: '.' + this.selector + '-next',
                prevEl: '.' + this.selector + '-prev',
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                reverseDirection: true
            }
        });
    }
    constructor() {
    }
}
