/**
 * считываем все поля из формы и заносим их в объект. Дальше на основе этого объекта
 * уже каждый конструтор сам будет выдергивать что нужно. Атрибуты data- заносятся как
 * свойства с соотв. именами
 * @param formSelector
 * @returns { {} }
 */
function getPropsInForm(formSelectorStr) {

  const pushDataProps = (obj, item) => {
    for (let i = 0; i < item.attributes.length; ++i) {
      let name = item.attributes.item(i).name;
      if (name.includes("data-")) {
        obj[name.toLowerCase()] = item.getAttribute(name);
      }
    }
  }
  // а через FormData это можно сделать как-то олучше?
  let obj = {};
  let formSelector = document.querySelector(formSelectorStr);
  let data = formSelector.querySelectorAll("[name]");
  for (let item of data) {
    let lowerName = item.name.toLowerCase();
    if (item.tagName === "TEXTAREA") {
      obj[lowerName] = item.textContent;
      pushDataProps(obj, item);
      continue;
    }
    switch (item.type) {
      case 'text':
      case 'option':
        obj[lowerName] = item.value;
        pushDataProps(obj, item);
        break;
      case 'radio':
        // если ни один из радиобоксов не установлен, то по умолчанию принимается за решение первый попавшийся элемент
        if (item.checked || !(lowerName in obj)) {
          obj[lowerName] = item.value;
          pushDataProps(obj, item);
        }
        break;
      case 'checkbox':
        if (item.checked) {
          if (!(lowerName in obj)) {
            obj[lowerName] = [];
          }
          obj[lowerName].push(item.value);
          pushDataProps(obj, item);
        }
        break;
    }


  }
  return obj;
}
