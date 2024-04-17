   let quoteHeading = document.getElementById('quote')
    let authorHeading = document.getElementById('author')
    let button = document.querySelector('button')
    
    
    async function fetchData () {
        let response = await fetch("./data.json")
        let data = await response.json()
        
       
        return data
    }
    
    let myProm = fetchData()
  
    
    let randomQuotes = Math. floor(Math.random()*103)
   
    
    
    
    function quotesGenerator (sher,shayar) {
        // let [firstSentence, restOfQuote] = sher.split('@@');
        // let formattedQuote = `${firstSentence}<br>${restOfQuote}`;
        quoteHeading.textContent = sher
        authorHeading.textContent = shayar
    
    
    }

    button.addEventListener('click', () => {
        myProm.then((data) => {
            // console.log(data.shayri.length);
            let randomQuotes = Math.floor(Math.random() * 0);
            console.log(randomQuotes);
            let sher = data.shayri[randomQuotes].sher;
            console.log(sher);
            let shayar = data.shayri[randomQuotes].shayar;
            quotesGenerator(sher, shayar);
        }).catch(() => console.log('Promise Not Resolved'));
    });

