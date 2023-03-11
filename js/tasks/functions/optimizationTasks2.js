
/*
* прямое сравнение с true / false
* явный возврат true / false
* лишние операторы и временные переменные
* Использование неподходящих структур данных
* Множество разветвлений
* Множественные проверки или (||)
* Проверка равенства ссылочных типов
* Проверка на пустоту
* Использование сокращенных конструкций
* Использование присвоения
* */

// ------- Case 1 - direct comparison with true / false -------
function getStatus (isLoggedIn) {
    if (isLoggedIn) {
        return 'Ok';
    } else {
        return 'FAILED';
    }
}

// const isOffline = !online;


// ------- Case 2 - explicit return true / false -------
function isEven (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function isEvenOptimize (n) {
    return n % 2 === 0;
}

// const allowRegister = age > 18 ? true : false;
// const allowRegisterOptimize = age > 18;


// ------- Case 3 - extra operators and temporary variables -------
function getUserName() {
    // Option I
    let name = 'Guest';
    if(defaultName) {
        name = defaultName
    }

    return name;

    // Option II
    return defaultName || 'Guest'

    // Option III
    return defaultName ?? 'Guest'

}


// ------- Case 4 - Use of inappropriate data structures -------
function getStatusColor(status) {
    let color;

    if(status === 'success') {
        color = 'green';
    } else if(status === 'warning') {
        color = 'yellow';
    } else if (status === 'info') {
        color = 'blue';
    } else if (status === 'error') {
        color = 'red'
    }
    return color
}


function getStatusColorOptimize(status) {
    const status2Mapping = {
        success: 'green',
        warning: 'yellow',
        info:  'blue',
        error:  'red',
    }
    return status2Mapping[status] ?? 'black';
}

// ------- Case 5 - Lots of branches -------
function changeState(currentState) {
    if (currentState === LightState.GREEN) {
        console.log('Green --> for 1 minute');
        change(LightState.YELLOW);
    } else if (currentState === LightState.YELLOW) {
        console.log('Yellow --> for 10 seconds')
        change(LightState.RED);
    } else if (currentState === LightState.RED) {
        console.log('Red --> for 1 minute');
        change(LightState.GREEN);
    } else {
        throw Error('Invalid State');
    }
}

function changeStateOptimize(currentState) {
    switch(currentState) {
        case LightState.GREEN: {
            console.log('Green --> for 1 minute');
            change(LightState.YELLOW);
            return;
        }
        case LightState.YELLOW: {
            console.log('Yellow --> for 10 seconds')
            change(LightState.RED);
            return;
        }
        case LightState.RED: {
            console.log('Red --> for 1 minute');
            change(LightState.GREEN);
            return;
        }
        default:
            throw Error('Invalid State');
    }
}


// ------- Case 6 - Multiple checks or (||) -------
function getNextSte(a) {
    if (a === 'STEP1' || a === 'STEP2' || a === 'STEP3' || a === 'STEP4') {
        return true;
    }
    return false;
}

function getNextStepOptimize(a) {
    return ['STEP1', 'STEP2', 'STEP3', 'STEP4', 'STEP5'].includes(a);


    // option old
    return ['STEP1', 'STEP2', 'STEP3', 'STEP4', 'STEP5'].indexOf(a) > -1;
}


// ------- Case 7 - Check for emptiness -------
function  checkEmptiness () {
    if (test !== null || test !== undefined || test !== '') {
        // logic
    }
}

function  checkEmptinessOptimise () {
    if (test) {
        // logic
    }
}


// ------- Case 8 - Unnecessary reduction -------
function unnecessaryReduction () {
    if(step === START)
        start()
}

function unnecessaryReductionCorrect () {
    if(step === START) {
        start()
    }

}





