import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import imgparceiros from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import imgparceiros1 from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import imgparceiros2 from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import imgparceiros3 from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import imgparceiros4 from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import imgparceiros5 from '../Utilidades/Imagem//parceiros/quebrandobarreiras.png'
import '../Parceiros/parceiros.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components';

const data = [
    {
        id: '1',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `21/08/2021`,
        image: imgparceiros
    },
    {
        id: '2',
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        date: `12/05/2021`,
        image: imgparceiros1
    },
    {
        id: '3',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `08/11/2022`,
        image: imgparceiros2
    },
    {
        id: '4',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `21/08/2021`,
        image: imgparceiros3   
    },
    {
        id: '5',
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        date: `12/05/2021`,
        image: imgparceiros4
    },
    {
        id: '6',
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        date: `08/11/2022`,
        image: imgparceiros5
    },
]

const CarrosselContainer = styled.div`
    margin: 0 5% 0 5%;
`

function CarrosselParceiro() {
    return (
        <CarrosselContainer>
            <div className='carrossel-parceiros'>
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
        </CarrosselContainer>
    )
};


export default CarrosselParceiro;
