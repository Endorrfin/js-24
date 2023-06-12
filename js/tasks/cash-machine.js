
/*
* REQUIREMENTS
* 1. Always deliver the lowest number of possible notes;
* 2. It's possible to get the amount requested with available notes;
* 3. The client balance is infinite;
* 4. Amount of notes is infinite;
* 5. Available notes 100, 50, 20, 10
* * */

// -------------- Solution 1.1  --------------
function iWantToGetCash(amountRequired) {
    const availableNotes = [100, 50, 20, 10];
    const result = [];

    if (amountRequired > 0) {
        for(let i = 0; i < availableNotes.length; i++) {
            let note = availableNotes[i];

            while(amountRequired - note >= 0) {
                // debugger;
                amountRequired -= note;
                result.push(note);
            }
        }
    } else {
        console.log('Please enter new amount!')
    }

    return result;
}

// console.log(iWantToGetCash(70));
// console.log(iWantToGetCash(100));
// console.log(iWantToGetCash(160));
// console.log(iWantToGetCash(360));




