window.addEventListener('load', function(){
    // After loading the HTML all logic will be executed
    document.querySelector('h5.status').innerHTML = 'Loaded';
    let titles = [
        'title1',
        'title2',
        'title3'
    ];
    window.localStorage.setItem('titles', JSON.stringify(titles))
    
    this.setTimeout(() => {
        let titleArray = JSON.parse(window.localStorage.getItem('titles'))
        titleArray.forEach((title) => {
            let item = document.createElement('h6');
            item.innerHTML = title;
            document.querySelector('body').appendChild(item)
        })
    }, 5000)
});