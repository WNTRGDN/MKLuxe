export default interface ICarousel {
    slides: ICarouselSlide[];
}

interface ICarouselSlide {
    key: string;
    image: string;
    label: string;
    content: string;
    button: string;
    link: string;
}