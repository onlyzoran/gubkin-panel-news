import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import Text from './Text';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const addZeroNumber = (number) => {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

const News = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    let day = selectedDate.getDate();
    let month = selectedDate.getMonth();
    let fullYear = selectedDate.getFullYear();

    let alias = `news-${fullYear}-${addZeroNumber(month)}-${addZeroNumber(day)}`;

    let mainImg = `newsimg_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
    let mainImgPath = `upload/news/newsimg/newsimg_${fullYear}/newsimg_${fullYear}_${addZeroNumber(month)}/newsimg_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
    let mainImgYear = `newsimg_${fullYear}`;
    let mainImgMonth = `newsimg_${fullYear}_${addZeroNumber(month)}`;

    let sliderPath = `upload/news/slider_images/news_slider_images_${fullYear}/news_slider_images_${fullYear}_${addZeroNumber(month)}/news_slider_images_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
    let sliderYear = `news_slider_images_${fullYear}`;
    let sliderMonth = `news_slider_images_${fullYear}_${addZeroNumber(month)}`;
    let sliderDay = `news_slider_images_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;

    const handleDateChange = (date) => {
        setSelectedDate(date);

        day = date.getDate();
        month = date.getMonth();
        fullYear = date.getFullYear();

        alias = `news-${fullYear}-${addZeroNumber(month)}-${addZeroNumber(day)}`;

        mainImg = `newsimg_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
        mainImgPath = `upload/news/newsimg/newsimg_${fullYear}/newsimg_${fullYear}_${addZeroNumber(month)}/newsimg_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
        mainImgYear = `newsimg_${fullYear}`;
        mainImgMonth = `newsimg_${fullYear}_${addZeroNumber(month)}`;

        sliderPath = `upload/news/slider_images/news_slider_images_${fullYear}/news_slider_images_${fullYear}_${addZeroNumber(month)}/news_slider_images_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
        sliderYear = `news_slider_images_${fullYear}`;
        sliderMonth = `news_slider_images_${fullYear}_${addZeroNumber(month)}`;
        sliderDay = `news_slider_images_${fullYear}_${addZeroNumber(month)}_${addZeroNumber(day)}`;
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid container item>
                    <Typography variant="h3">Gubkin Panel News</Typography>
                </Grid>
                <Grid container item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Дата новости"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Text text={alias} label="Псевдоним"/>
                <Grid container item>
                    <Typography variant="h4">Главное изображение</Typography>
                </Grid>
                <Text text={mainImg} label="Главное изображение (имя файла)"/>
                <Text text={mainImgPath}
                      label="Главное изображение (полный путь)"/>
                <Text text={mainImgYear} label="Главное изображение (каталог год)"/>
                <Text text={mainImgMonth} label="Главное изображение (каталог месяц)"/>
                <Grid container item>
                    <Typography variant="h4">Слайдер</Typography>
                </Grid>
                <Text text={sliderPath} label="Слайдер (полный путь)"/>
                <Text text={sliderYear} label="Слайдер (каталог год)"/>
                <Text text={sliderMonth} label="Слайдер (каталог месяц)"/>
                <Text text={sliderDay} label="Слайдер (каталог день)"/>
            </Grid>
        </Container>
    );
}

export default News;