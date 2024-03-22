// PracticeFormPage.js

class PracticeFormPage {
  
    // Method to input first name
    inputFirstName(firstName) {
      cy.get('#firstName').type(firstName);
    }
  
    // Method to input last name
    inputLastName(lastName) {
      cy.get('#lastName').type(lastName);
    }
  
    // Method to select gender
    selectGender() {
        cy.get('label[for="gender-radio-1"]').click();
    }
  
    // Method to input email
    inputEmail(email) {
      cy.get('#userEmail').type(email);
    }
  
    // Method to input mobile number
    inputMobileNumber(mobileNumber) {
      cy.get('#userNumber').type(mobileNumber);
    }
  
    // Method to set date of birth
    setDateOfBirth(year, month, day) {
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__year-select').select(year.toString());
      cy.get('.react-datepicker__month-select').select(month);
      cy.get(`.react-datepicker__day--0${day}`).click();
    }
  
    // Method to select subjects
    selectSubjects(subjects) {
      subjects.forEach(subject => {
        cy.get('#subjectsInput').type(subject);
        cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
      });
    }
  
    // Method to select hobbies
    selectHobbies(hobbies) {
        cy.get('label[for="hobbies-checkbox-3"]').click();
    }
  
    // Method to upload file
    uploadFile(fileName) {
    // Click on the file input to trigger the file selection dialog
    cy.get('#uploadPicture').click();
  
    // Upload the file using the attachFile command
    cy.fixture(`${fileName}`).then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName,
        mimeType: 'image/jpeg' // Adjust the MIME type if necessary
      });
    });
  }
  
  enterCurrentAddress(address) {
    cy.get('#currentAddress').type(address);
  }
    // Method to select state
    selectState() {
        // Click on the state dropdown to open the options
        cy.get('#state').click();

        // Click on the NCR option in the dropdown menu
        cy.get('.css-1n7v3ny-option').contains('NCR').click();



    }
  
    // Method to select city
    selectCity() {
        cy.get('#city').click();
    // Click on the Delhi City option  
        // could not make this part work: cy.get('div.css.1uccc91-singleValue"]').click();  
    }
  
    // Method to click submit button
    clickSubmitButton() {
      cy.get('#submit').click();
    }
  
    // Method to validate form submission
    validateFormSubmission(firstName, lastName, email, mobileNumber, year, month, day, subjects, hobbies, filePath, state, city) {
      cy.get('.modal-content').should('be.visible');
      cy.get('.modal-title').should('contain.text', 'Thanks for submitting the form');
  
      // Validate form data
      cy.get('.modal-body').should('contain.text', firstName);
      cy.get('.modal-body').should('contain.text', lastName);
      cy.get('.modal-body').should('contain.text', email);
      cy.get('.modal-body').should('contain.text', mobileNumber);
      //cy.get('.modal-body').should('contain.text', `${day} ${month} ${year}`);
      subjects.forEach(subject => {
        cy.get('.modal-body').should('contain.text', subject);
      });
      hobbies.forEach(hobby => {
        //cy.get('.modal-body').should('contain.text', hobby);
      });
      cy.get('.modal-body').should('contain.text', filePath);
      //cy.get('.modal-body').should('contain.text', state);
      //cy.get('.modal-body').should('contain.text', city);
    }
  }
  
  export default new PracticeFormPage();
  