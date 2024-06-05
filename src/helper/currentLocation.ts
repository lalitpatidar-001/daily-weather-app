
const getCurrentLocation = ()=> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coordinates = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    const data = {
                        coordinates}
                    console.log(data);
                    resolve(data);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    reject(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
};

export default getCurrentLocation;
