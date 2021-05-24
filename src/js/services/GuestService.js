import Service from './Service'

class GuestService extends Service {
    guestAdd(firstName, familyName, willJoin, accomodation, accomodationNote, favouriteSong) {
        return new Promise((resolve, reject) => {
            let data = {
                first_name: firstName,
                family_name: familyName,
                will_join: willJoin,
                accomodation: accomodation
            }
            
            if (accomodationNote) {
                data.accomodation_note = accomodationNote;
            }
            
            if (favouriteSong) {
                data.favourite_song = favouriteSong;
            }
            
            this.doRequestJSON(
                this.getUrl("/guest-add.php"),
                data
            ).then(data => {
                if (data.result === Service.RC_OK) {
                    resolve(data);
                } else {
                    reject(data);
                }
            }).catch(e => {
                reject(e);
            });
        });
    }
    
    getMockResponse(url, data, method) {
        switch (url) {
            default:
                return { result : Service.RC_OK };
        }
    }
};

export default new GuestService();