
const toggleButton = document.getElementById("toggle");
const navigation = document.getElementById("navigation");


toggleButton.addEventListener('click', () =>{

    if(navigation.classList.value === "navigation"){
        navigation.classList.add('hiddable');
        toggleButton.classList.remove('fa-bars');
        toggleButton.classList.add('fa-close');
    }

    else{
        navigation.classList.remove('hiddable');
        toggleButton.classList.remove('fa-close');
        toggleButton.classList.add('fa-bars');
    }
});