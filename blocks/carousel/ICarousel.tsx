export default interface ICarousel {
    slides: ICarouselSlide[];
}

interface ICarouselSlide {
    image: string;
    title: string;
    richtext: string;
    link: string;
}