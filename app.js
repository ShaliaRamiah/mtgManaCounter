"use strict"

const mana = {
    swamp: 0,
    plains: 0,
    mountain: 0,
    forest: 0,
    island: 0
};

function resetThings() {
    for (let key of Object.keys(mana)) {
        mana[key] = 0;
        setValue(key, mana[key]);
    }
    setValue("total", 0);
}

function change(color, direction) {
    direction ? mana[color]++ : mana[color]--;
    setValue(color, mana[color]);
    calcTotal();
}

function calcTotal() {
    let total = 0;
    for (let key of Object.keys(mana)) {
        total += mana[key];
    }
    setValue("total", total);
}

function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerHTML = value;

    // potentially move to another function
    if (elementId !== 'total') {
        setState(elementId, (mana[elementId] <= 0));
    }
}

function setState(elementId, direction, suffix = 'desc') {
    const id = `${elementId}-${suffix}`;
    const element = document.getElementById(id);
    element.disabled = !!direction;
}

function initialiseState() {
    for (let key of Object.keys(mana)) {
        if (mana[key] <= 0) {
            setState(key, true);
        }
    }
}
initialiseState();