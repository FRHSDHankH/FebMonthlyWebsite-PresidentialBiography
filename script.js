let quote = document.getElementById('quote');
let quotes = [
  '"Wisdom often consists of knowing what to do next." - Hoover',
  '"Freedom is the open window through which pours the sunlight of the human spirit and human dignity." - Hoover',
  '"Words without actions are the assassins of idealism." - Hoover',
  '"Peace is not made at the council table or by treaties, but in the hearts of men." - Hoover',
  '"All men are equal before fish." - Hoover',
  '"Older men declare war. But it is the youth that must fight and die." - Hoover',
  '"When there is a lack of honor in government, the morals of the whole people are poisoned." - Hoover',
  '"About the time we can make the ends meet, somebody moves the ends." - Hoover',
  '"The worst evil of disregard for some law is that it destroys respect for all law." - Hoover',
  '"Blessed are the young for they shall inherit the national debt." - Hoover'
]
let randomNum = Math.floor(Math.random() * quotes.length)

quote.innerText = quotes[randomNum]