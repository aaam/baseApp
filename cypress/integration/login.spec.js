describe('Navigate to login page', function() {
  it('Visits the loginpage', function() {
    cy.visit('http://localhost:19006');
    cy.contains('Sign in').click();
    cy.contains('E-mail adress');
  });
});
describe('Login to application - wrong password', function() {
  it('logs in into the application', function() {
    cy.get('input[name="username"]')
      .type('gijs@vd-hoven.net')
      .should('have.value', 'gijs@vd-hoven.net');
    cy.get('input[name="password"]').type('xxx!');
    cy.contains('Submit').click();
    cy.contains('Your password is incorrect');
  });
});

describe('Login to application - wrong user', function() {
  it('logs in into the application', function() {
    cy.get('input[name="username').clear();
    cy.get('input[name="password').clear();
    cy.get('input[name="username"]')
      .type('henk@vd-hoven.net')
      .should('have.value', 'henk@vd-hoven.net');
    cy.get('input[name="password"]').type('xxx!');
    cy.contains('Submit').click();
    cy.contains('This username does not excist');
  });
});
describe('Login to application', function() {
  it('logs in into the application', function() {
    cy.get('input[name="username').clear();
    cy.get('input[name="password').clear();
    cy.get('input[name="username"]')
      .type('gijs@vd-hoven.net')
      .should('have.value', 'gijs@vd-hoven.net');
    cy.get('input[name="password"]').type('xxxxx!');
    cy.contains('Submit').click();
    cy.contains('You are succesfully signed in');
  });
});

describe('Log out', function() {
  it('Log out', function() {
    cy.wait(1000);
    cy.contains('Sign out').click();
    cy.contains('You have signed out!');
  });
});
