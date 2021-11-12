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
            case "/gallery-images.php":
                return {
                    result : Service.RC_OK,
                    data: [
//                        {
//                            original: 'https://picsum.photos/id/1018/1000/600/',
//                            thumbnail: 'https://picsum.photos/id/1018/250/150/',
//                        },
//                        {
//                            original: 'https://picsum.photos/id/1015/1000/600/',
//                            thumbnail: 'https://picsum.photos/id/1015/250/150/',
//                        },
//                        {
//                            original: 'https://picsum.photos/id/1019/1000/600/',
//                            thumbnail: 'https://picsum.photos/id/1019/250/150/',
//                        }
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_01.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_01.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_02.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_02.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_03.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_03.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_04.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_04.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_05.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_05.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_06.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_06.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_07.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_07.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_08.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_08.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_09.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_09.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_10.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_10.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/bg_11.jpg",thumbnail:"http://www.sarka-tomas.cz/images/photos/bg_11.jpg"},
                        {original:"http://www.sarka-tomas.cz/images/photos/long.mp4",thumbnail:"http://www.sarka-tomas.cz/images/photos/thumbnails/long.png"}
                    ]
                };
            default:
                return { result : Service.RC_OK };
        }
    }
};

export default new GalleryService();