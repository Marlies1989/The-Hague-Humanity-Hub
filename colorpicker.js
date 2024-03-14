let backgrounds = document.querySelectorAll('.random-color');
let labelBackgrounds = document.querySelectorAll('.theme-label');
let memberBackgrounds = document.querySelectorAll('.member-info');

backgrounds.forEach((background) => {
    let color = ["overlay-blue", "overlay-purple", "overlay-yellow", "overlay-green"];
    let newColor = color[Math.floor(Math.random() * color.length)];
    background.classList.add(newColor);
})

labelBackgrounds.forEach((labelBackground) => {
    let color = ["blue", "purple", "yellow", "green"];
    let newColor = color[Math.floor(Math.random() * color.length)];
    labelBackground.classList.add(newColor);
})

memberBackgrounds.forEach((memberBackground) => {
    let color = ["blue", "purple", "yellow", "green"];
    let newColor = color[Math.floor(Math.random() * color.length)];
    memberBackground.classList.add(newColor);
    
    let textColor = newColor === 'blue' ? '#e4dc4b' : '#17345e';
    
    let memberTexts = memberBackground.querySelectorAll('.member-text');
    memberTexts.forEach((memberText, index) => {
        memberText.style.color = textColor;

        if (index === memberTexts.length - 1) {
            let textDecoration = newColor === 'blue' ? 'underline 0.15rem #e4dc4b' : 'underline 0.15rem #17345e';
            memberText.style.textDecoration = textDecoration;
        }
    });
});


