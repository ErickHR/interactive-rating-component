
const cardButtonCircle = document.querySelector( '.card__buttons--circles' )
const cardButtonSubmit = document.querySelector( '.card__button--submit' )
const templateThankYou = document.querySelector( '#card__thank-you' )
const card = document.querySelector( '.card' )
let cardButtonCircleActive = null

cardButtonCircle.addEventListener( 'click', ( e ) => {

    if( cardButtonCircleActive ) {
        cardButtonCircleActive.nextElementSibling?.classList.remove( 'active--sibling' )
        cardButtonCircleActive.previousElementSibling?.classList.remove( 'active--sibling' )
        cardButtonCircleActive.classList.remove( 'active' )
        cardButtonCircleActive = null
    }

    cardButtonCircleActive = e.target
    cardButtonCircleActive.classList.add( 'active' )
    cardButtonCircleActive.previousElementSibling?.classList.add( 'active--sibling' )

} )

cardButtonSubmit.addEventListener( 'click', () => {
    if( !cardButtonCircleActive ) return
    let clone = templateThankYou.content.cloneNode( true )
    card.replaceChildren( clone )
    let button = document.querySelector( '.card__button--thank-you' )
    let cardButtonCirclePrevius = cardButtonCircleActive.previousElementSibling
    button.textContent = `You selected 
        ${cardButtonCirclePrevius? 
            `${cardButtonCirclePrevius.dataset.value} out of` : ''

        } 
        ${cardButtonCircleActive.dataset.value}`
} )
