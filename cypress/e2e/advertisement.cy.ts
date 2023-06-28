import { Dashboard } from "../pages/dashboard.page";
import { Forms } from "../pages/forms.page";

describe('Advertisement tests through UI', () => {

    const dashboard = new Dashboard();
    const forms = new Forms();

    let adName: string;
    let streetName: string;
    let roomNo: string;
    let priceValue: string;
    beforeEach(() => {
        cy.task('randomGenerate').then( ({name, street, room, price }: any) => {
            adName = name;
            streetName = street;
            roomNo = room;
            priceValue = price;
        })
    });

    it('Add new advertisement and verify', () => {
        cy.visit('/advertisements');
        cy.get(dashboard.addIcon).click();
        cy.get(forms.advertisementNameTxt).type(adName);
        cy.get(forms.streetTxt).type(streetName);
        cy.get(forms.roomsTxt).type(roomNo);
        cy.get(forms.priceTxt).type(priceValue);
        cy.get(forms.statusChk).click();
        cy.intercept('POST', '/api/advertisements', (req) => {
            req.continue((res) => {
                expect(res.body).to.include(req.body);
            })
        })
        cy.contains(forms.saveBtn).click();
        cy.get(dashboard.toastMessage).should('contain.text', 'Saved successfully')
    })

    it('Edit existing advertisement and verify', () => {
        cy.request({
            method:'POST',
            url: '/api/advertisements',
            body: {
                name: adName,
                price: priceValue,
                rooms: roomNo,
                status: true,
                street: streetName
            }
        }).then((res) => {
            let id = res.body._id;
            cy.visit(`advertisement/${id}/edit`);
        });
        cy.get(forms.advertisementNameTxt).type('123');
        cy.intercept('PUT', `/api/advertisements/*`, (req) => {
            req.continue((res) => {
                expect(res.statusCode).to.eq(200);
            })
        })
        cy.contains(forms.saveBtn).click();
        cy.get(dashboard.toastMessage).should('contain.text', 'Saved successfully')
    });
});