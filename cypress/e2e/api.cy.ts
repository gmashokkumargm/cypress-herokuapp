describe('Api testing for Advertisement', () => {

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

    it('Add an advertisement and verify', () => {
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
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq(adName);
            expect(res.body.price).to.eq(priceValue);
            expect(res.body.rooms).to.eq(roomNo);
            expect(res.body.street).to.eq(streetName);
        });
    });

    it('Edit the advertisement and verify', () => {
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
            cy.request({
                method: 'PUT', 
                url: `/api/advertisements/${id}`,
                body: {
                    name: adName+125,
                    price: priceValue,
                    rooms: roomNo,
                    status: true,
                    street: streetName
                }
            }).then ((editRes) => {
                expect(editRes.status).to.eq(200);
                expect(editRes.body).to.eq(1);
            });
        });
    });
});