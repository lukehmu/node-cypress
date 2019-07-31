describe('todos Download PDF', () => {
  it('returns PDF file', () => {
    cy.visit('https://timetochange.brandstencil.com/resources/live-create/009-in-your-corner-poster-a3')
      .its('status')
      .should('have', 200)
  })
})
