describe('Pomodoro timer tests', () => {
  beforeEach(() => {
    cy.visit('https://improvementcenter.netlify.app/pomodoro');
  });
  it('Timer not started', () => {
    cy.get('.CircularProgressbar-text').contains('25:00');
  });
});
