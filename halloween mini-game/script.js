// questionOne function - if the 'guess' text value entered equals 'living', the skeleton card will appear with text stating that the user found the correct answer.
function questionOne() 
{
    // define the html elements needed for new elements to be appended to
    const guess = document.getElementById('q1');
    const submit = document.getElementById('submit');
    const section1 = document.getElementById('section1');

    // eventlistener (event: click) function called when button 'submit' clicked
    submit.addEventListener('click', function() {
        
        if (guess.value === "living") 
        {
            // create an h4 and image element and specify their content (for skeleton card)
            console.log("question 1: correct answer!");
            const addH4 = document.createElement('h4');
            const addImg = document.createElement('img');
            addH4.innerHTML = "Correct! You found the skeleton card!";
            addImg.src = "img/skeleton.png";

            // append to the appropriate section
            section1.appendChild(addH4);
            section1.appendChild(addImg);

        } 
    });
}
questionOne();


// checkDropdown function - if the dropdown value entered equals 'ghost', the ghosts card will appear with text stating that the user found the correct answer.
function checkDropdown()
{
    // define the html elements needed for new elements to be appended to
    const dropdown = document.getElementById('dropdown');
    const section2 = document.getElementById('section2');

    // eventlistener (event: input) function called when the dropdown's input is equal to 'ghost'
    dropdown.addEventListener('input', function() {
        
        const dropdownAnswer = dropdown.value;
        
        if (dropdownAnswer === 'ghost') {
            // create an h4 and image element and specify their content (for skeleton card)
            const newH4 = document.createElement('h4');
            const newImg = document.createElement('img');
            newH4.innerHTML = "Correct! You found the Ghost card!";
            newImg.src = "img/ghosts.png";

            // append to the appropriate section
            section2.appendChild(newH4);
            section2.appendChild(newImg);
        }
    });
}
checkDropdown();

// confirm that the user has selected a certain card

// skeleton card 
const checkbox1 = document.getElementById('checkMe1');
const usercard1 = document.getElementById('usercard1');
let currentcard1;

checkbox1.addEventListener('change', function() {

    if (checkbox1.checked) {
        currentcard1 = document.createElement('p');
        currentcard1.innerHTML = 'You selected the Skeleton card!';
        usercard1.appendChild(currentcard1);
    } else {
        if (currentcard1) {
            usercard1.removeChild(currentcard1);
        }
    }
});


// black cat card 
const checkbox2 = document.getElementById('checkMe2');
const usercard2 = document.getElementById('usercard2');
let currentcard2;

checkbox2.addEventListener('change', function() {

    if (checkbox2.checked) {
        currentcard2 = document.createElement('p');
        currentcard2.innerHTML = 'You selected the Black Cat card!';
        usercard2.appendChild(currentcard2);
    } else {
        if (currentcard2) {
            usercard2.removeChild(currentcard2);
        }
    }
});

// ghosts card 
const checkbox3 = document.getElementById('checkMe3');
const usercard3 = document.getElementById('usercard3');
let currentcard3;

checkbox3.addEventListener('change', function() {

    if (checkbox3.checked) {
        currentcard3 = document.createElement('p');
        currentcard3.innerHTML = 'You selected the Ghosts card!';
        usercard3.appendChild(currentcard3);
    } else {
        if (currentcard3) {
            usercard3.removeChild(currentcard3);
        }
    }
});

// bats card 
const checkbox4 = document.getElementById('checkMe4');
const usercard4 = document.getElementById('usercard4');
let currentcard4;

checkbox4.addEventListener('change', function() {

    if (checkbox4.checked) {
        currentcard4 = document.createElement('p');
        currentcard4.innerHTML = 'You selected the Bats card!';
        usercard4.appendChild(currentcard4);
    } else {
        if (currentcard4) {
            usercard4.removeChild(currentcard4);
        }
    }
});
