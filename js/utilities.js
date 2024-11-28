// toggle function

function toggleSection(sectionId, buttonId){
    document.getElementById('donate-cards-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');

    // active state
    document.getElementById('donation-btn').classList.remove('bg-lime-300');
    document.getElementById('history-btn').classList.remove('bg-lime-300');
    document.getElementById(buttonId).classList.add('bg-lime-300');

}



function getInputValueFromId(id){
    const input = document.getElementById(id).value;
    const inputValue = parseFloat(input);
    return inputValue;
}

function getTextValueFromId(id){
    const text = document.getElementById(id).innerText;
    const textValue = parseFloat(text);
    return textValue;
}

function clearInput(id){
    document.getElementById(id).value = "";
}


// validate input data

function validateInput(inputValue, accountBalance){
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Invalid amount. Try later!!!');
        clearInput('flood-donate-input');
        return false;
    } else if(inputValue > accountBalance){
        alert('Insufficient Balance!!!')
        clearInput('flood-donate-input');
        return false;
    } else {
        return true;
    }
}


// transaction record taking function

function putRecordInHistory(sectionTitleId, donateAmount, date){
    const sectionTitle = document.getElementById(sectionTitleId).innerText;

    const newLog = document.createElement('div');
    newLog.innerHTML = `
        <div class="border-2 border-gray-200 rounded-2xl p-5 space-y-2 m-5">
            <p class="font-bold"> ${donateAmount} Taka is Donated for ${sectionTitle}. </p>
            <div> Date: ${date} </div>
        </div>
    `;
    document.getElementById('history-section').appendChild(newLog);
}


