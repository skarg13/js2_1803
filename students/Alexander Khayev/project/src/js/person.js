/**
 * Класс "человек"
 */
class Person {
  constructor(obj = {}) {
    let {name, age, gender, hobbies: needs} = obj;
    if (name.length == 0 || age === undefined || gender === undefined) {
      throw new Error("Неправильный какой-то человек");
    }
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.needs = needs === undefined ? []: needs;
    this.canBeMother = "data-mother" in obj && obj["data-mother"] == true;
  }
}
