let swamp = 0;
let plains = 0;
let mountain = 0;
let forest = 0;
let island = 0;

// Function to increment the counter
function increment(id) {
    switch (id) {
        case 'scounting':
            swamp++;
            document.getElementById(id).innerText = swamp;
            break;
        case 'pcounting':
            plains++;
            document.getElementById(id).innerText = plains;
            break;
        case 'mcounting':
            mountain++;
            document.getElementById(id).innerText = mountain;
            break;
        case 'fcounting':
            forest++;
            document.getElementById(id).innerText = forest;
            break;
        case 'icounting':
            island++;
            document.getElementById(id).innerText = island;
            break;
        default:
            break;
    }
}

// Function to decrement the counter
function decrement(id) {
    switch (id) {
        case 'scounting':
            swamp--;
            document.getElementById(id).innerText = swamp;
            break;
        case 'pcounting':
            plains--;
            document.getElementById(id).innerText = plains;
            break;
        case 'mcounting':
            mountain--;
            document.getElementById(id).innerText = mountain;
            break;
        case 'fcounting':
            forest--;
            document.getElementById(id).innerText = forest;
            break;
        case 'icounting':
            island--;
            document.getElementById(id).innerText = island;
            break;
        default:
            break;
    }
}