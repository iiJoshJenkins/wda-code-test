// The array we have to test against
const testArr = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

// A function for filtering out anything that can't be a number from the arrays
const filterArrForNumbers = arr => arr.filter(value => !isNaN(value));

// A function that takes each element in the array and adds it to a total
// Then divides it by the length of the array to find the average.
const arrAvg = arr => arr.reduce((a,b) => a + parseInt(b), 0) / arr.length;

const displaySection = document.getElementById('arrayAverage');

// Writing the markup for the basic display with a submit button.
const markup = `
  <div id="displayArray">${testArr}</div>
  <button id="calculateAverage">Calculate Average</button>
`;
// Writing the markup for the answer area of the display.
const answerMarkup = `<div id="answer">${arrAvg(filterArrForNumbers(testArr)).toFixed(7)}</div>`
// Adding the content inside the display section before the first child.
displaySection.insertAdjacentHTML('afterbegin', markup);

const calculateButton = document.getElementById('calculateAverage');
// Adding the answer when the button is pressed inside the display section but after the the last child.
calculateButton.addEventListener("click", () => displaySection.insertAdjacentHTML('beforeend',answerMarkup));
