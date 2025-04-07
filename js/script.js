function init(){
//add your javascrip between these two lines of code
  // Get DOM elements
  const entryButton = document.getElementById('entrybutton');
  const entryInput = document.getElementById('entryinput');
  const textOutput = document.getElementById('textoutput');

  // Add event listener to the "Alert Me" button
  entryButton.addEventListener('click', function () {
    const inputText = entryInput.value;

    // Show alert with your name and input
    alert('Panagioti Blanas: ' + inputText); 

    // Set the h2 text to just the input text
    textOutput.textContent = inputText;
  });
}

window.addEventListener('load', init);
