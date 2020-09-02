// DOM elements de mon HTML
let connectButton = document.getElementById('connect');
let disconnectButton = document.getElementById('disconnect');
let message = document.getElementById('message');

// Blutooth thingy
let device;


connectButton.addEventListener('click', function(){
  connect();
});

disconnectButton.addEventListener('click', function(){
  disconnect();
});

function connect(){
  console.log("Connecting...");
  navigator.bluetooth.requestDevice(options).then(function(device) {
    console.log('Name: ' + device.name);
    // Do something with the device.
  })
  .catch(function(error) {
    console.log("Something went wrong. " + error);
  });
}

function disconnect(){
  console.log("Disconnecting...");
}
