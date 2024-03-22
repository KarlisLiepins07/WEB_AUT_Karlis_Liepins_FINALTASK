import PracticeFormPage from '../support/page-objects/PracticeFormPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
    describe('Practice Form Test Suite', () => {
  beforeEach(() => {
  });



  it('should fill out the practice form and submit it', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    PracticeFormPage.inputFirstName('John');
    PracticeFormPage.inputLastName('Doe');
    PracticeFormPage.selectGender('Male');
    PracticeFormPage.inputEmail('john.doe@example.com');
    PracticeFormPage.inputMobileNumber('1234567890');
    PracticeFormPage.setDateOfBirth(2003, 'March', 15);
    PracticeFormPage.selectSubjects(['Maths', 'English']);
    PracticeFormPage.selectHobbies(['Music', 'Sports']);
    PracticeFormPage.uploadFile('files/profile-picture.jpg');
    PracticeFormPage.enterCurrentAddress('Highway street 45')
    PracticeFormPage.selectState('NCR');
    PracticeFormPage.selectCity('Delhi');
    PracticeFormPage.clickSubmitButton();

    PracticeFormPage.validateFormSubmission('John', 'Doe', 'john.doe@example.com', '1234567890', 1990, 'March', 15, ['Maths', 'English'], ['Music', 'Sports'], 'profile-picture.jpg', 'NCR', 'Delhi');
});
});

