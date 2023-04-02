const products = [
    {
        name: "Wingspan",
        playerCount: "1-5",
        gameLength: "40-70 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2019/02/3d-wingspan-1024x1002.png"
    },
    {
        name: "Viticulture",
        playerCount: "1-6",
        gameLength: "45-90 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2021/02/3D-box-2021-1000x1024.png"
    },
    {
        name: "Between Two Castles Of Mad King Ludwig",
        playerCount: "2-7",
        gameLength: "45-60 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2019/02/3d-castles-1024x1002.png"
    },
    {
        name: "Euphoria: Build a Better Dystopia",
        playerCount: "2-6",
        gameLength: "60 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2019/01/3d-euphoria-901x1024.png"
    },
    {
        name: "Red Rising",
        playerCount: "1-6",
        gameLength: "45-60 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2021/02/3D-Box-collector-860x1024.png"
    },
    {
        name: "Libertalia: Winds of Galecrest",
        playerCount: "1-6",
        gameLength: "45-60 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2021/12/3d-libertalia-863x1024.png"
    },
    {
        name: "Charterstone",
        playerCount: "1-6",
        gameLength: "60 mins",
        boxArt: "https://stonemaiergames.com/wp-content/uploads/2018/12/3d-charterstone-2-855x1024.png"
    }
]

const printToDom = (divId, TextToPrint) => 
{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = TextToPrint;
}

const buildProjectCards = (array) => 
{
    let domString = '';

    for(i = 0; i < array.length; i++){
        domString += '<div class="card-body">'
            domString += `<img src="${array[i].boxArt}" class="box-art"></img>`
            domString += `<h3>${array[i].name}</h3>`
            domString += `<p>Number of Players: ${array[i].playerCount}</p>`
            domString += `<p>Game Length: ${array[i].gameLength}</p>`
        domString += '</div>'
    }
    printToDom('printProductCardsHere', domString);
}

buildProjectCards(products);