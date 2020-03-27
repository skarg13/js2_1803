import cart from './cart'
import catalog from './catalog'


export default function app() {
 console.log('Jobs done!')
 catalog.construct (cart) //тут происходит создание объекта и вся прочая магия
 cart.constructor ()
}