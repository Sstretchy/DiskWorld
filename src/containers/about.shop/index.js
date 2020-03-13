import React from 'react';
import {
    Box,
} from '@material-ui/core';
import './about.shop.css';
import { inject, observer } from 'mobx-react';
import hand from '../../hand.png';

@inject('store')
@observer
class AboutShop extends React.Component {
    render() {
        return (
            <>
                <Box className='about-container'>
                    <img
                        className='footer-img'
                        src={hand}
                        alt="Logo"
                        style={{ height: '100%', position: 'relative', alignSelf: 'center'}}
                    />
                    <Box className='chalk-font-45'>О компании</Box>
                    <Box className='chalk-font-35'>Disk World — это место, где всегда можно найти отличный подарок.</Box>
                    <Box className='chalk-font-35'>Disk World регулярно проводит собственные игротеки (встречи, где можно бесплатно поиграть в любые игры или научиться правилам), участвует в крупных мероприятиях (Нашествие, Селигер, «Дикая мята», день города и другие).</Box>
                    <Box className='chalk-font-45'>Основные преимущества:</Box>
                    <Box className='chalk-font-35'>Только 100% удачные покупки: если игра не понравится, её можно вернуть;</Box>
                    <Box className='chalk-font-35'>В магазине открывают коробки и показывают всё то, что есть внутри;</Box>
                    <Box className='chalk-font-35'>Всегда хорошие цены;</Box>
                    <Box className='chalk-font-35'>Оперативная доставка.</Box>
                </Box>
            </>
        );
    }
}

export default AboutShop;