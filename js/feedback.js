const inputIndex = document.getElementById('input');
const submitButton = document.getElementById('submit');

submitButton.disabled = true;

inputIndex.addEventListener('input',()=>{
    if(inputIndex.value.match("")){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }
});