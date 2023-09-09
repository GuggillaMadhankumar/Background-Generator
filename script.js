const colorBox = document.getElementById("colorBox");
const generateBtn = document.getElementById("generateBtn");
const customColorInput = document.getElementById("customColor");
const copyBtn = document.getElementById("copyBtn");

// Function to generate a random color
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the color box
function updateColorBox(color) {
    colorBox.style.backgroundColor = color;
}

// Event listener for the "Generate Color" button
generateBtn.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    updateColorBox(randomColor);
    customColorInput.value = randomColor;
});

// Event listener for the "Copy Color Code" button
copyBtn.addEventListener("click", () => {
    customColorInput.select();
    document.execCommand("copy");
    alert("Color code copied to clipboard: " + customColorInput.value);
});
