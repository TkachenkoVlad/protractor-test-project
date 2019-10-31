'use strict';
let AngularHomePage = function () {
  browser.get('http://www.angularjs.org');
};

AngularHomePage.prototype = Object.create({}, {
  todoText: { get: function () { return element(by.model('todoList.todoText')); }},
  addButton: { get: function () { return element(by.css('[value="add"]')); }},
  yourName: { get: function () { return element(by.model('yourName')); }},
  greeting: { get: function () { return element(by.binding('yourName')).getText(); }},
  todoList: { get: function () { return element.all(by.repeater('todo in todoList.todos')); }},
  typeName: { value: function (keys) { return this.yourName.sendKeys(keys); }},
  todoListCheckbox:{value: function (id) { return this.todoList.get(id).element(by.css('input')).click() }},
  completedAmount:{get: function () { return element.all(by.css('.done-true'))}},
  todoAt: { value: function (id) { return this.todoList.get(id).getText(); }},
  addTodo: { value: function (todo) {
      this.todoText.sendKeys(todo);
      this.addButton.click();
    }}
});
module.exports = AngularHomePage;
