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

function march() {
  document.getElementById('titleChange').innerText = 'Inauguration as 31st President'
  document.getElementById('imgChange').src = 'imgs/HooverInaug.jpg'
  document.getElementById('descriptionChange').innerText = 'Herbert Hoover was inaugurated as the 31st President of the United States, promising continued prosperity, but just months later, the stock market crashed, leading to the Great Depression.'
}

function october() {
  document.getElementById('titleChange').innerText = 'Stock Market Crash ("Black Tuesday")'
  document.getElementById('imgChange').src = 'imgs/HooverStock.jpg'
  document.getElementById('descriptionChange').innerText = 'The stock market collapsed, marking the beginning of the Great Depression. Despite Hoover\'s efforts to stabilize the economy, the crisis deepened, and his response was widely criticized.'
}

function june() {
  document.getElementById('titleChange').innerText = 'Signing of the Smoot-Hawley Tariff Act'
  document.getElementById('imgChange').src = 'imgs/HooverTariff.jpg'
  document.getElementById('descriptionChange').innerText = 'Hoover signed the Smoot-Hawley Tariff, which raised import duties in an attempt to protect American businesses but worsened the global economic downturn by reducing international trade.'
}

function july() {
  document.getElementById('titleChange').innerText = 'Bonus Army Confrontation'
  document.getElementById('imgChange').src = 'imgs/HooverBonus.jpg'
  document.getElementById('descriptionChange').innerText = 'Thousands of World War I veterans, known as the Bonus Army, marched on Washington, D.C., demanding early payment of their promised bonuses. Hoover ordered their removal, leading to a violent clash that further damaged his reputation.'
}