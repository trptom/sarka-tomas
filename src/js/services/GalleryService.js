import Service from './Service'

class GalleryService extends Service {
    getFolders() {
        return new Promise((resolve, reject) => {
            this.doRequestJSON(
                this.getUrl("/gallery-folders.php")
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
    
    getImages(folderName) {
        return new Promise((resolve, reject) => {
            this.doRequestJSON(
                this.getUrl("/gallery-images.php"),
                {
                    folder: folderName
                }
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