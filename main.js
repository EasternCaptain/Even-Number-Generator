const form = document.createElement('form'); 
form.method = 'POST'; 
form.action = ''; 
// form.style.display = 'flex'; 
// form.style.flexDirection = 'column'; 
// form.style.justifyContent = 'center'; 
// form.style

let label = document.createElement('label'); 
label.htmlFor = 'num'; 
label.innerHTML = 'Enter any number here';  
label.style.fontWeight = 'bolder'; 
label.style.fontSize = '2rem'; 
label.style.display = 'block'; 
label.style.marginBottom = '5%'; 
label.style.textAlign = 'left'; 

let input = document.createElement('input'); 
input.type = 'number'; 
input.max = '1000'; 
input.id = 'num'; 
input.name = 'num'; 
input.style.textAlign = 'center'; 


const div = document.getElementById('main'); 
div.appendChild(form); 
form.appendChild(label); 
form.appendChild(input); 
// div.style.display = 'flex';
// div.style.justifyContent = 'center'; // Horizontal centering
// div.style.alignItems = 'center';     // Vertical centering
// div.style.height = '100vh';

const button = document.createElement('button')
button.innerHTML = 'SUBMIT' 
button.style.display = 'block'; 
button.style.margin  = '3%' 
form.appendChild(button);   

const ul = document.createElement('ul');
ul.style.listStyleType = 'none'; 

div.appendChild(ul); 
const inputValue =  document.getElementById('num'); 


function evenNumber() {
    
    const theValue = parseInt(inputValue.value); 
    ul.innerHTML = '<h4>Even numbers are</h4>'; 
    for (let i = 0; i < theValue; i += 2) {
        const li = document.createElement('li') 
        li.innerHTML = i; 
        // li.style.listStyleType = 'none'; 
        ul.appendChild(li); 
    }
} 

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    evenNumber(); 
})