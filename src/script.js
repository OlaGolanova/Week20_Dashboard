'use strict'
  // // core version + navigation, pagination modules:
  // import Swiper, { Navigation, Pagination } from 'swiper';
  // // import Swiper and modules styles
  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';

const moment = require('moment');

moment.locale('ru', {
  months : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря'.split('_'),
  weekdays : 'Понедельник_Вторник_Среда_Четверг_Пятница_Суббота_Воскресенье'.split('_'),
 
});

const date = document.querySelector('.date');
const hours = document.querySelector('.hours');

let newDate = new Date();
  date.textContent = moment(newDate).format('dddd D MMMM YYYY');
  hours.textContent = moment(newDate).format('HH:mm:ss');

const intervalId = setInterval(function() {
  let now = new Date();
  date.textContent = moment(now).format('dddd D MMMM YYYY');
  hours.textContent = moment(now).format('HH:mm:ss'); 
}, 1000)

const ctx = document.getElementById('myChart');

const labels = ["Армавир", "Анапа", "Геленджик", "Ейск", "Краснодар", "Кропоткин", "Новороссийск", "Славянск-на-Кубани", "Сочи", "Туапсе"];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Население в городах Краснодарского края 2022г',
        data: [190709, 75865, 76830, 83665, 1000007, 78631, 334506, 66285, 507365, 62269],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    }
  });



  const ctx7 = document.getElementById('myChart7');

  new Chart(ctx7, {
    type: 'scatter',
    data: {
      labels: ['2003', '2005', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017','2018', '2019', '2020', '2021', '2022' ],
      datasets: [{
        type: 'line',
        label: 'Количество жителей г.Краснодара',
        data: [646200, 715400, 713133, 744995, 763899, 784048, 805680, 829677, 853848, 881476, 899541, 918145, 932629, 948827, 974319],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }, {
        type: 'scatter',
        label: 'Количество легковых автомобилей',
        data: [{
          x: 2022,
          y: 1890000
        },
        {
          x: 2016,
          y: 440000
        }
      ],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }

    }
  } 
  });
  
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: [
        'Женщины 423 451',
        'Мужчины 350 519'
      ],
      datasets: [{
        label: 'Численность населения Краснодара по полу',
        data: [423451, 350519],
        backgroundColor: [
          'rgb(232, 138, 138)',
          'rgb(35, 209, 212)'
        ],
        hoverOffset: 0,
        borderAlign: 'inner'
      }]
    }
  });



    const ctx6 = document.getElementById('myChart6');

  new Chart(ctx6, {
    type: 'radar',
    data: {
      labels: [
        'ВСЕГО',
        'В пределах РФ',
        'Внутрирегиональная',
        'Межрегиональная',
        'Международная',
        'Со странами СНГ',
        'С другими странами',
        'Внешняя для края'
      ],
      datasets: [{
        label: '2022г Миграция ',
        data: [9631, 8614, 0, 8614, 1017, 1005, 12, 9631],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: '2021г Миграция',
        data: [41186, 23464, 0, 23464, 17622, 16378, 1244, 41086],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    }
  });

  


