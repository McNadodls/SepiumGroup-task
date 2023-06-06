const swiperHard = new Swiper('.swiper', {            
            loop: true, //вечныая прокрутка
            slidesPerView: 'auto', // сжатие слайда по шир
            simulatetouch: false, // отключение перемещения с помощью "слайда"
            spaceBetween: 15, // gap
            loopPreventsSliding: true, // кастомное свойство которое исправляет баг
            navigation: { // кнопки навигации
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev',
            },
});
