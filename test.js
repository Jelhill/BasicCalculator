function screen(val) {
    document.getElementById('box').value = val
}

//DISPLAY THE VALUE CLICKED ON THE SCREEN
function shownum(val) {
    document.getElementById('box').value += val
}

document.addEventListener('click', function(e){
    if (e.target.classList.contains('calculate')) {
        try {
            screen(eval(document.getElementById('box').value))            
        } catch (error) {
            return ('Error')
        }
    }

    if (e.target.classList.contains('delBtn')) {
        let valueNeeded = document.getElementById('box').value
        let finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1)
        document.getElementById('box').value=finalValueNeeded
    }

    if (e.target.classList.contains('clearScreen')) {
        document.getElementById('box').value = ""
        return "0"
    }
})










// //display values on the screen

// function screen(val) {
//     document.getElementById('box').value=val;
// }

// function shownum(val) {
//     document.getElementById('box').value+=val;
// }

// //calculate whatever in on the screen.
// function calculate(){
//     try{
//         screen(eval(document.getElementById('box').value));
        
//     }
//     catch(e){
//         screen('Error');
//     }
// }

// function clearScreen() {
//     document.getElementById('box').value = " ";
//     return '0';
// }

// function delBack(){
//     var valueNeeded = document.getElementById('box').value;
//     var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1);
//     document.getElementById('box').value=finalValueNeeded;
// }

// let 

