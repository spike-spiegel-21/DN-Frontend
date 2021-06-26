const box = document.querySelectorAll('.block');
const rem = document.querySelector('.rem-seats')
const sel = document.querySelector('.sel-seats')
let remain = 36;
let selected = 0;
box.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('block-clicked')) {
            button.classList.remove('block-clicked')
            remain++;
            selected--;
            rem.innerHTML = remain;
            sel.innerHTML = selected;
        } else {
            button.classList.add('block-clicked')
            remain--;
            selected++;
            rem.innerHTML = remain;
            sel.innerHTML = selected;
        }
    })
})