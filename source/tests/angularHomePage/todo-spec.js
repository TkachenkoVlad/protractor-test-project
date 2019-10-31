'use strict';
const AngularHomePage = require('../../pages/agular-home-page');

describe('Angular js homepage todo list', function () {
  let page = new AngularHomePage();


  it('should greet the named user', function () {
    page.typeName('Vlad');
    expect(page.greeting).toEqual('Hello Vlad!');
  });

  it('should list todos', function () {
    expect(page.todoList.count()).toEqual(2);
    expect(page.todoAt(1)).toEqual('build an AngularJS app');
  });

  it('should add a todo', function () {
    page.addTodo('write a protractor test');
    expect(page.todoList.count()).toEqual(3);
    expect(page.todoAt(2)).toEqual('write a protractor test');
  });

  it('click todo list element', function () {
    page.todoListCheckbox(1);
    expect(page.completedAmount.count()).toEqual(2);
  })
});
