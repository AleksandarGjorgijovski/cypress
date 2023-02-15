//npm install --save-dev cypress-file-upload
import "cypress-file-upload"
describe('File Upload', () => {
    it('Single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("Profile picture.jpg");
        cy.get("#file-submit").click();
        cy.get(10000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    });
    it('File Upload - reaname', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:"Profile picture.jpg", fileName:"myfile.jpg"});
        cy.get("#file-submit").click();
        cy.get(10000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
        cy.get("#uploaded-files").should("have.text",'\n    myfile.jpg\n  ')
    });
    it('File Upload - drag and drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("Profile picture.jpg",{subjectType:"drag-n-drop"})   
        cy.get("#file-submit").click();
        cy.get(10000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    });
    it('Upload multiple fiels', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["Profile picture.jpg","example.json"]);
        cy.wait(5000);
        cy.get('#fileList > :nth-child(1)').should('have.text', 'Profile picture.jpg');
        cy.get('#fileList > :nth-child(2)').should('have.text', 'example.json');
    });
    it.only('Shadow Dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("Profile picture.jpg");
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("Profile picture.jpg")
    });
});