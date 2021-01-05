/////// Frontend Image Change ///////
var image_tracker = 'React';

function change(){
    var image = document.getElementById('frontend');
    if (image_tracker === 'React') {
        image.src='images/css3-logo.svg';
        image_tracker='CSS';
    } else if (image_tracker === 'CSS') {
        image.src='images/javascript-logo.svg';
        image_tracker='JS';
    } else {
        image.src='images/react-logo.svg';
        image_tracker='React';
    }
}

// change() will run every 2 seconds
var timer = setInterval('change();',2000); 

/////// Backend Image Change ///////

var image_tracker2 = 'Node';
 
function change2(){
    var image = document.getElementById('backend');
    if (image_tracker2 === 'Node') {
        image.src='images/dot-net-core-logo.svg';
        image_tracker2='Mongo';
    } else {
        image.src='images/nodejs-icon.svg';
        image_tracker2='Node';
    }
}

// change() will run every 3 seconds
var timer = setInterval('change2();',4000);
