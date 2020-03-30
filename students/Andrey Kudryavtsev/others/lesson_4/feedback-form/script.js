let form = document.querySelector ('#form')
let btn = document.querySelector ('#submit')
let feedback = {}

btn.addEventListener ('click', submit)

function submit(){
    feedback = new FeedBack ('name', 'phone', 'email');
    if (feedback.validateForm()) {
        document.querySelector('.ok-submit').innerHTML = 'Данные отправлены';
    }
}

class FeedBack {
    constructor(name, phone, email){
        this.name = this.getInput(name)
        this.phone = this.getInput(phone)
        this.email = this.getInput(email).toLowerCase()
    }

    pattern = {
        name: '([A-z])|([А-яёЁ])|( )',
        phone: '\\+\\d{1,2}\\(\\d{3}\\)\\d{3}\\-\\d{4}', //+7(000)000-0000 \+\d{1,2}\(\d{3}\)\d{3}\-\d{4}   \+7\(\d{3}\)\d{3}\-\d{4}
        email: '([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z]{2,6})'
    }

    getInput(id){
        let obj = document.querySelector(`input[id=${id}]`)
        return obj.value
    }

    validate(key){
        let regexp = new RegExp(this.pattern[key])
        let str =  this[key]
        if (regexp.test(str)){
            document.getElementById(key).className = 'good'
            return true
        } else {
            document.getElementById(key).className = 'error'
            return false
        }
    }

    validateForm(){
        return this.validate('name') && this.validate('email') && this.validate('phone')
    }

}