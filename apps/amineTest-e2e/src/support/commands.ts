// @ts-check

Cypress.Commands.add('registerUserApi', (userId: string) => {
  cy.request('POST', 'http://localhost:3000/api/users', {
    user: { email: `${userId}@example.com`, password: userId, username: userId },
  });
});

Cypress.Commands.add('getByE2eId', (selector: string, ...args) => {
  return cy.get(`[data-e2e-id=${selector}]`, ...args);
});

Cypress.Commands.add('getFirstByE2eId', (selector: string, ...args) => {
  return cy.get(`[data-e2e-id=${selector}]`, ...args).first();
});

Cypress.Commands.add('loginApi', (userId: string) => {
  cy.registerUserApi(userId);
  cy.request('POST', 'http://localhost:3000/api/users/login', {
    user: { email: `${userId}@example.com`, password: userId },
  }).then((response: any) => {
    window.localStorage.setItem('jwtToken', response.body.user.token);
  });
});
