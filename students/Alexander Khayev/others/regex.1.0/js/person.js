/**
 * Класс "человек"
 */
class Person {
  constructor(obj = {}) {
    let {name, phone, email} = obj;
    this.Name = name.value.trim();
    this.Phone = phone.value.trim();
    this.Email = email.value.trim();
  }

  set Name(value) {
    if (value.replace(/[\wА-Яа-я]+/ig, "").length){
      throw {name: "name", msg: 'Имя должно содержать только буквы'}}
    // не делаем проверку на пустое поле
    this.name = value;
  }

  set Phone(value) {
    if (value.match(/^\+\d\(\d{3}\)\d{3}\-\d{4}$/ig))
      throw {name: "phone", msg: 'Необходимый формат: +7(777)777-7777'}
  // не делаем проверку на пустое поле
    this.phone = value;
  }

  set Email(value) {
    if (value.match(/^[\w\.\-]+@[\w\.\-]+\.\w+$/ig))
      throw {name: "name", msg: 'Неверный формат e-mail'}
  // не делаем проверку на пустое поле
    this.email = value;
  }
}
