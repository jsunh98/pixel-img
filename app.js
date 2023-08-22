let w = 30;
let h = 30;

function pixel(){
    for( var i = 0; i<h; i++){
        for( var j = 0; j<w; j++){
            let span = document.createElement('span');
            document.getElementById('pixel').appendChild(span);
        }
    }
}
pixel();