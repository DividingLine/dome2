import $ from 'jquery';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'Swiper/dist/css/swiper.css';
import Swiper from 'Swiper/dist/js/swiper.js';
require('font-awesome-webpack');





var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});