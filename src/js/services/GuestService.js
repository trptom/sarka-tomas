import Service from './Service'

class GuestService extends Service {
    guestAdd(firstName, familyName, willJoin, accomodation, note, favouriteSong) {
        return new Promise((resolve, reject) => {
            let data = {
                first_name: firstName,
                family_name: familyName,
                will_join: willJoin,
                accomodation: accomodation
            }
            
            if (note) {
                data.note = note;
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
    
    guestsAdd(guests, willJoin, accomodation, note) {
        let guestsData = [];
        
        for (let a=0; a<guests.length; a++) {
            let obj = {
                first_name: guests[a].firstName,
                family_name: guests[a].familyName
            };
            
            if (guests[a].song) {
                obj.favourite_song = guests[a].song;
            }
            
            guestsData.push(obj);
        }
        
        return new Promise((resolve, reject) => {
            let data = {
                guests: guestsData,
                will_join: willJoin,
                accomodation: accomodation
            }
            
            if (note) {
                data.note = note;
            }
            
            this.doRequestJSON(
                this.getUrl("/guests-add.php"),
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