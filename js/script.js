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

        if(validateInput(floodDonateInputValue, mainAccountBalanceValue, 'flood-donate-input') === false) {
            return;
        } else {
            document.getElementById('main-account-balance').innerText = mainAccountBalanceValue - floodDonateInputValue;
    
            const floodDonatedAmountValue = getTextValueFromId('flood-donated-amount');
    
            document.getElementById('flood-donated-amount').innerText = floodDonatedAmountValue + floodDonateInputValue;

            // clear the input
            clearInput('flood-donate-input');
            
            // Show successfull confirmation
            // alert("Donation successfull! Thank you!");

            // modal for successful donation
            my_modal_5.showModal();

            // transaction history
            const date = new Date();

            putRecordInHistory('flood-donate-title', floodDonateInputValue, date);
        }

        

    })


// Relief Donate 

document.getElementById('relief-donate-btn').
    addEventListener('click', function(){
        
        const reliefDonateInputValue = getInputValueFromId('relief-donate-input');

        const mainAccountBalanceValue = getTextValueFromId('main-account-balance');

        if(validateInput(reliefDonateInputValue, mainAccountBalanceValue, 'relief-donate-input') === false) {
            return;
        } else {
            document.getElementById('main-account-balance').innerText = mainAccountBalanceValue - reliefDonateInputValue;
    
            const reliefDonatedAmountValue = getTextValueFromId('relief-donated-amount');
    
            document.getElementById('relief-donated-amount').innerText = reliefDonatedAmountValue + reliefDonateInputValue;

            // clear the input
            clearInput('relief-donate-input');
            
            // Show successfull confirmation
            // alert("Donation successfull! Thank you!");

            // modal for successful donation
            my_modal_5.showModal();

            // transaction history
            const date = new Date();

            putRecordInHistory('relief-donate-title', reliefDonateInputValue, date);
        }

        

    })


// Aid for Injured 

document.getElementById('quota-donate-btn').
    addEventListener('click', function(){
        
        const quotaDonateInputValue = getInputValueFromId('quota-donate-input');

        const mainAccountBalanceValue = getTextValueFromId('main-account-balance');

        if(validateInput(quotaDonateInputValue, mainAccountBalanceValue, 'quota-donate-input') === false) {
            return;
        } else {
            document.getElementById('main-account-balance').innerText = mainAccountBalanceValue - quotaDonateInputValue;
    
            const quotaDonatedAmountValue = getTextValueFromId('quota-donated-amount');
    
            document.getElementById('quota-donated-amount').innerText = quotaDonatedAmountValue + quotaDonateInputValue;

            // clear the input
            clearInput('quota-donate-input');
            
            // Show successfull confirmation
            // alert("Donation successfull! Thank you!");

            // modal for successful donation
            my_modal_5.showModal();

            // transaction history
            const date = new Date();

            putRecordInHistory('quota-donate-title', quotaDonateInputValue, date);
        }
    })