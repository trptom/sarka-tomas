class Service {
    getServerURL() {
        return process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : "";
    }
    
    getUrl(relativePath) {
        return this.getServerURL() + (relativePath.indexOf("/") === 0 ? "" : "/") + relativePath;
    }
    
    doRequestJSON(url, data= {}, method = "POST") {
        return new Promise((resolve, reject) => {
            if (this.getServerURL() !== "") {
                fetch(url, {
                    method: method, // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, cors, *same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrer: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                }).then(res => res.json()).then((data) => {
                    resolve(data);
                }).catch((e) => {
                    console.log(e);
                    reject(e);
                });
            } else {
                setTimeout(() => {
                    try {
                        resolve(this.getMockResponse(url, data, method));
                    } catch (e) {
                        console.log(e);
                        reject(e);
                    }
                }, process.env.REACT_APP_SERVER_DELAY);
            }
        });
    }
    
    getMockResponse(url, data, method) {
        return {};
    }
};

Service.RC_OK = 0;
Service.RC_GENERAL_ERROR = 1;

export default Service;