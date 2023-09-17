
const cardArray =[
    {
      name: 'fries',
      img: '/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: '/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: '/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: '/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: '/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: '/images/hotdog.png'
    },
    {
      name: 'fries',
      img: '/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: '/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: '/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: '/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: '/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: '/images/hotdog.png'
    }
  ]

  let cardChoosen = [];
  let cardChoosenID = [];
  let cardsWon = [];
   cardArray.sort( () => 0.5 - Math.random())
  

 let gridDisplay = document.querySelector('#grid')
 
 function createBoard(){
  for(i=0;i<cardArray.length;i++){
    let card = document.createElement('img')
    card.setAttribute('src','/images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card)
   //console.log(card,i)

      }
    }

createBoard();


function checkMatch(){
      let cards =document.querySelectorAll('img')

       if(cardChoosenID[0] === cardChoosenID[1]){
        alert('you choosen same card')
        cards[cardChoosenID[0]].setAttribute('src','/images/blank.png')

        }else  if ( cardChoosen[0] == cardChoosen[1] ) {
        cards[cardChoosenID[0]].setAttribute('src','/images/white.png')
        cards[cardChoosenID[1]].setAttribute('src','/images/white.png')
        cards[cardChoosenID[0]].removeEventListener('click',flipCard) 
        cards[cardChoosenID[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChoosen) 
        document.getElementById('result').innerText= cardsWon.length

         }else{
          cards[cardChoosenID[0]].setAttribute('src','/images/blank.png')
          cards[cardChoosenID[1]].setAttribute('src','/images/blank.png')
          //alert("try again😪")

         }
       cardChoosen=[]   
       cardChoosenID=[]       
       if(cardsWon.length==cardArray.length/2){
        document.getElementById('result').innerText= "Hurrayy!! , You WON"
       }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenID.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardChoosen.length == 2){
      setTimeout(checkMatch, 500)
      } 
      // console.log(cardChoosenID)
      // console.log(cardArray[cardId].name)
}




