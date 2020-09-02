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
  navigator.bluetooth.requestDevice({
    filter: [{
      name: "HC-05",
    }],
  }).then(function(device){
    console.log("Name : " + device.name);
  }).catch(function(error){
    console.log(error);
  });
}

function disconnect(){
  console.log("Disconnecting...");
}
