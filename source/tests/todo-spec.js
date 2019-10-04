describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://demo.litecart.net/admin/login.php?redirect_url=%2Fadmin%2F');

        element(by.model('todoList.todoText')).sendKeys('write first protractor tests');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor tests');

        // You wrote your first tests, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});