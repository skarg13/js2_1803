'use strict'

let form = document.querySelector ('#burgerForm')
let btn = document.querySelector ('#okBtn')
//let burgers = []
let newBurger = {}

btn.addEventListener ('click', addBurger)

function addBurger(){
    newBurger = new Burger ('Size','Filling','Option')
    //burgers.push(newBurger)
    newBurger.renderPrice()
    newBurger.renderCalories()
}

class Burger {
    constructor (size, filling, option){
        this.Size = this._check (size)
        this.Filling = this._check (filling)
        this.Option = this._getArray(option)
    }

    _check (attrName) {
        let obj = document.querySelector (`input[name=${attrName}]:checked`)
        return obj.value
    }

    _getArray (attrName) {
        let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)]
        let arr = []
        objArr.forEach (el => {
            arr.push (el.value)
        })
        return arr
    }

    calcPrice (){
        let price = 0
            if (this.Size == 'big'){
                price = 100
            }
            if (this.Size == 'small'){
                price = 50
            }
            if (this.Filling == 'chees'){
                price += 10
            }
            if (this.Filling == 'salad'){
                price += 20
            }
            if (this.Filling == 'potato'){
                price += 15
            }
            this.Option.forEach (el => {
                if (el == 'spice'){
                    price += 15
                }
                if (el == 'mayo') {
                    price += 20
                }
            })
        return price
    }
    
    calcCalories(){
        let calories = 0
        if (this.Size == 'big'){
            calories = 40
        }
        if (this.Size == 'small'){
            calories = 20
        }
        if (this.Filling == 'chees'){
            calories += 20
        }
        if (this.Filling == 'salad'){
            calories += 5
        }
        if (this.Filling == 'potato'){
            calories += 10
        }
        this.Option.forEach (el => {
            if (el == 'spice'){
                calories += 0
            }
            if (el == 'mayo') {
                calories += 5
            }
        })
        return calories
    }

    renderPrice(){
        document.querySelector('.price').innerHTML = this.calcPrice()
    }

    renderCalories(){
        document.querySelector('.calories').innerHTML = this.calcCalories()
    }
}