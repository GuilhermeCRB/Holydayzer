import express from 'express';
import cors from 'cors';

console.log("Sua aplicação está no ar.")

const app = express();
app.use(cors());

const holidays = [
    { date: "01/01/2022", name: "Confraternização mundial" },
    { date: "03/01/2022", name: "Carnaval" },
    { date: "17/04/2022", name: "Páscoa" },
    { date: "21/04/2022", name: "Tiradentes" },
    { date: "01/05/2022", name: "Dia do trabalho" },
    { date: "16/06/2022", name: "Corpus Christi" },
    { date: "07/09/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "02/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
];

const today = new Date();
console.log(today.toLocaleDateString());

app.get("/holidays", (req, res) => {
    res.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
    let isHoliday = false;
    holidays.forEach(holiday => {
        if (holiday.date === today.toLocaleDateString()) {
            isHoliday = true;
        }
    });

    if (isHoliday) {
        res.send('Sim, hoje é nome-do-feriado');
    } else {
        res.send('Não, hoje não é feriado');
    }
});

app.listen(4000);