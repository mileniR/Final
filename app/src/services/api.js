class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/data.json';
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                callback(error, null);
            });
    }
}

export default Servicios;
