import React from 'react';
import {
    Grid,
    Typography,
    Paper
} from '@material-ui/core';
import './delivery.css';


class Delivery extends React.Component {
    render() {
        return (
            <Grid
                container
                direction='column'
                className='delivery-container'
                component={Paper}
            >
                <Typography
                    className='typography-margin-20'
                    variant="h5"
                >
                    Доставка
                </Typography>
                <Typography variant="h6">
                    Игру можно заказать с доставкой по Ярославлю. При заказе от 400 рублей доставка  выполняется бесплатно.
                </Typography>
                <Typography
                    className='typography-margin-20'
                    variant="h5"
                >
                    Оплата
                </Typography>
                <Typography variant="h6">
                    Наличными или картой курьеру при заказе с доставкой;
                </Typography>
                <Typography variant="h6">
                    Наличными или картой в магазине при самовывозе;
                </Typography>
                <Typography variant="h6">
                    Всё делается быстро. Вы заказываете — игра приезжает на следующий день или, реже, через день (кроме воскресенья).
                </Typography>
                <Typography className='typography-margin-20' variant="h5">
                    Режим работы
                </Typography>
                <Typography variant="h6">
                    Режим торговой точки: ежедневно с 10:00 до 22:00 (время московское)
                </Typography>
                <Typography variant="h6">
                    Режим работы интернет магазина: в будние дни с 10:00 до 20:00 (время московское)
                </Typography>
                <Typography
                    className='typography-margin-20'
                    variant="h5"
                >
                    Контактные данные
                </Typography>
                <Typography variant="h6">
                    Адрес торговой точки: ул. Свободы, 91. ТЦ Wenge, второй этаж.
                </Typography>
                <Typography variant="h6">
                    Вопросы можно задать по адресу disk-world@gmail.com
                </Typography>
                <Typography variant="h6">
                    или по телефону 8 800 555 3565.
                </Typography>
                <Typography
                    className='typography-margin-20'
                    variant="h5"
                >
                    Реквизиты:
                </Typography>
                <Typography variant="h6">
                Общество с ограниченной ответственностью «Disk World»
                </Typography>
                <Typography variant="h6">
                ОГРН 1177746834535, г.Ярославль, ул. Тургенева, дом 20, эт 2 Комн.205
                </Typography>
            </Grid>
        );
    }
}

export default Delivery;