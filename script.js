const ramadanNo = document.getElementById('ramadan');
const currentDay = document.getElementById('date');
const currentDate = document.getElementById('date');
const sehriTime = document.getElementById('sehri');
const iftarTime = document.getElementById('iftar');

const date = new Date();
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

currentDay.innerText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

const ramadan = [{
    no: 1,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
},
{
    no: 2,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
},
{
    no: 3,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
},
{
    no: 4,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
},
{
    no: 5,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
},
{
    no: 6,
    day: day[date.getDay()],
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    sehri: `4:51 AM`,
    iftar: `6:10 PM`,
}
];

function updateTime() {
    i = (date.getDate())?date.getDate()-11:date.getDate()+21;
    ramadanNo.innerText = ramadan[i].no; 
    currentDay.innerText =  ramadan[i].day;
    currentDate.innerText = ramadan[i].date;
    sehriTime.innerText =  ramadan[i].sehri;
    iftarTime.innerText =  ramadan[i].iftar;
}


updateTime();
