import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import noticiactd from '../Utilidades/Imagem//noticias/1.jpg'
import noticiactd1 from '../Utilidades/Imagem//noticias/2.jpg'
import noticiactd2 from '../Utilidades/Imagem//noticias/3.jpg'
import '../Noticias/noticia.css'
import { Swiper, SwiperSlide } from 'swiper/react'

const data = [
    {
        id: '1',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `21/08/2021`,
        image: noticiactd
    },
    {
        id: '2',
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        date: `12/05/2021`,
        image: noticiactd1
    },
    {
        id: '3',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `08/11/2022`,
        image: noticiactd2
    },
    {
        id: '4',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `21/08/2021`,
        image: noticiactd
    },
    {
        id: '5',
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        date: `12/05/2021`,
        image: noticiactd1
    },
    {
        id: '6',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `08/11/2022`,
        image: noticiactd2
    },
]

function Carrossel() {
    return (
        <div className='carrossel'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {data.map((d) => (
                    <SwiperSlide key={d.id}>
                        <img src={d.image} alt='Slider' className='slide-item' />
                        <div className='slider-text'>
                            <h2>{d.title}</h2>
                            <p>{d.info}</p>
                            <p>{d.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};


export default Carrossel;
