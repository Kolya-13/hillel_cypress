describe('Login Page Buttons Tests', () => {
    beforeEach(() => {
        cy.visit('https://lms.ithillel.ua/auth');
    });

    it('should find all buttons and validate their attributes', () => {
        // Перевірка кнопки "Увійти"
        cy.contains('Увійти').should('be.visible');

        // Перевірка кнопки "Вхід через Google"
        cy.get('button.page-login__sso-link--google').should('be.visible'); 
        
        // Перевірка кнопки "Вхід через Apple"
        cy.get('button.page-login__sso-link--apple').should('be.visible');

        // Перевірка кнопки "Реєстрація"
        cy.contains('Реєстрація').should('be.visible').and('have.attr', 'href');

        // Перевірка посилання "Забули пароль?"
        cy.contains('Забули пароль?').should('be.visible').and('have.attr', 'href');

        // Перевірка посилання "Служба підтримки"
        cy.contains('Служба підтримки').should('be.visible').and('have.attr', 'href');
    });
});