(function(){
    var imgLen = document.getElementById('slide');
    var images = imgLen.getElementsByTagName('img');
    var counter = 0;

    if(counter <= images.length){
        setInterval(function(){
            images[0].src = images[counter].src;
            console.log(images[counter].src);
            counter++;

            if(counter === images.length){
                counter = 1;
            }
        },3000);
    }
})();
