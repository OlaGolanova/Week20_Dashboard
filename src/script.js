'use strict'

//Данные для графиков  хранятся в json формате
let dataJson = `[
  {
    "label_migration": [
        "ВСЕГО",
        "В пределах РФ",
        "Внутрирегиональная",
        "Межрегиональная",
        "Международная",
        "Со странами СНГ",
        "С другими странами",
        "Внешняя для края"
        ],
      "label_migration_2021":["2021г Миграция"],
      "label_migration_2022": ["2022г Миграция"],
      "label_gender": ["Женщины","Мужчины"],
      "label_cities": ["Армавир", "Анапа", "Геленджик", "Ейск", "Краснодар", "Кропоткин", "Новороссийск", "Славянск-на-Кубани", "Сочи", "Туапсе"],
      "label_years":  [2003, 2005, 2009, 2010, 2012, 2013, 2014, 2015, 2016, 2017,2018, 2019, 2020, 2021, 2022 ],
      "label_years_avto":  [2016, 2022]
  },
  {
      "data_migration_2022": [9631, 8614, 0, 8614, 1017, 1005, 12, 9631],
      "data_migration_2021": [41186, 23464, 0, 23464, 17622, 16378, 1244, 41086],
      "data_gender": [423451, 350519],
      "data_cities": [190709, 75865, 76830, 83665, 1000007, 78631, 334506, 66285, 507365, 62269],
      "data_years":  [646200, 715400, 713133, 744995, 763899, 784048, 805680, 829677, 853848, 881476, 899541, 918145, 932629, 948827, 974319],
      "data_years_avto":  [440000,1890000]

  }
]`;


let data = JSON.parse(dataJson);

//Библиотека Chart.js
//График Население в городах Краснодарского края
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data[0].label_cities,
      datasets: [{
        label: 'Население в городах Краснодарского края 2022г',
        data: data[1].data_cities,
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

//График Количество жителей г.Краснодара
  const ctx7 = document.getElementById('myChart7');
  new Chart(ctx7, {
    type: 'scatter',
    data: {
      labels: data[0].label_years,
      datasets: [{
        type: 'line',
        label: 'Количество жителей г.Краснодара',
        data: data[1].data_years,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }, {
        type: 'scatter',
        label: 'Количество легковых автомобилей',
        data: [{
          x: data[0].label_years_avto[1],
          y: data[1].data_years_avto[1]
        },
        {
          x: data[0].label_years_avto[0],
          y: data[1].data_years_avto[0]
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

  //График Численность населения Краснодара по полу
  const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: data[0].label_gender,
      datasets: [{
        label: 'Численность населения Краснодара по полу',
        data: data[1].data_gender,
        backgroundColor: [
          'rgb(232, 138, 138)',
          'rgb(35, 209, 212)'
        ],
        hoverOffset: 0,
        borderAlign: 'inner'
      }]
    }
  });


  //График Миграционного прироста Краснодарского края 2021/2022 гг
  const ctx6 = document.getElementById('myChart6');
  new Chart(ctx6, {
    type: 'radar',
    data: {
      labels: data[0].label_migration,
      datasets: [{
        label: data[0].label_migration_2022,
        data: data[1].data_migration_2022,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: data[0].label_migration_2021,
        data: data[1].data_migration_2021,
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

  
//Подключаю библиотеку moment.js
const moment = require('moment');

//Задаю локализацию moment.js
moment.locale('ru', {
  months : 'Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Авгуса_Сентября_Октября_Ноября_Декабря'.split('_'),
  weekdays : 'Понедельник_Вторник_Среда_Четверг_Пятница_Суббота_Воскресенье'.split('_'),
 
});

//Часы выводят время каждую секунду
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


//Библиотеку Swiper.js Подключила через CDN, и сладер добавился через ссылку




//Анимация при загрузке странцы GSAP
window.addEventListener('DOMContentLoaded', () => {
  animation();

});
function animation(){
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {

      const tlTitle = gsap.timeline({});

      
      tlTitle.to('.title', {
        scale: 1,
        duration: 1, 
      })
      tlTitle.to('.wrap-date', {
        scale: 1,
        duration: 1, 
      }, '<',)

  });

  
  mm.add("(max-width: 1024px)", () => {

      const tlTitle = gsap.timeline({});

      tlTitle.to('.title', {
        scale: 1,
        duration: 1, 
      })
      tlTitle.to('.wrap-date', {
        scale: 1,
        duration: 1, 
      }, '<',)
    

  });


}