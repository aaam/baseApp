describe('Navigate to sig up page', function() {
  it('Visits the open homepage', function() {
    cy.visit('http://localhost:19006');
    cy.contains('Sign up').click();
    cy.contains('E-mail adress');
  });
});
describe('Sign up to application', function() {
  it('Sign Up into the application', function() {
    cy.get('input[name="username"]')
      .type('testuser1@alowa.app')
      .should('have.value', 'testuser1@alowa.app');
    cy.get('input[name="password"]').type('HenkIsEenLolligeVent!');
    cy.contains('Submit').click();
  });
});

describe('Login to application', function() {
  it('logs in into the application', function() {
    cy.get('input[name="username').clear();
    cy.get('input[name="password').clear();
    cy.get('input[name="username"]')
      .type('testuser1@alowa.app')
      .should('have.value', 'testuser1@alowa.app');
    cy.get('input[name="password"]').type('testuser1');
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
describe('Delete user', function() {
  it('Deletes the user', function() {
    cy.wait(1000);
    cy.contains('Sign out').click();
    cy.contains('You have signed out!');
  });
});
