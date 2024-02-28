
const myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        
        const success = true;
        if (success) {
            resolve('Data successfully fetched');
        } else {
            
            reject('Error fetching data');
        }
    }, 1000); 
});


myPromise
    .then(data => {
      
        console.log('Promise resolved:', data);
    })
    .catch(error => {
       
        console.log('Promise rejected:', error);
    });
