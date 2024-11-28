// toggle section


document.getElementById('donation-btn').
    addEventListener('click', function(){
        toggleSection('donate-cards-section', 'donation-btn');
    })


document.getElementById('history-btn').
    addEventListener('click', function(){
        toggleSection('history-section', 'history-btn');
    })



// Flood Donate 

document.getElementById('flood-donate-btn').
    addEventListener('click', function(){
        
        const floodDonateInputValue = getInputValueFromId('flood-donate-input');

        const mainAccountBalanceValue = getTextValueFromId('main-account-balance');

        if(validateInput(floodDonateInputValue, mainAccountBalanceValue) === false) {
            return;
        } else {
            document.getElementById('main-account-balance').innerText = mainAccountBalanceValue - floodDonateInputValue;
    
            const floodDonatedAmountValue = getTextValueFromId('flood-donated-amount');
    
            document.getElementById('flood-donated-amount').innerText = floodDonatedAmountValue + floodDonateInputValue;
        }

        // clear the input

        clearInput('flood-donate-input');

        // transaction history

        const date = new Date();

        putRecordInHistory('flood-donate-title', floodDonateInputValue, date);

    })


