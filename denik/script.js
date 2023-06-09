const pasteButton = document.getElementById('pasteBtn');
const generateButton = document.getElementById('button');
const urlInput = document.getElementById('denik');

const containsDenik = (value) => {
    return value.indexOf('.denik.') > -1;
}
const DANGER = 'btn-danger';
const SUCCESS = 'btn-success';
const DISABLED = 'disabled'

const toggleBtn = (value) => {
    if (value) {
        generateButton.classList.remove(DANGER);
        generateButton.classList.add(SUCCESS);
        generateButton.attributes.removeNamedItem(DISABLED);
    } else {
        generateButton.classList.remove(SUCCESS);
        generateButton.classList.add(DANGER);
        generateButton.setAttribute(DISABLED, DISABLED)
    }
}
pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        const isDenik = containsDenik(text);
        if (isDenik) {
            urlInput.value = text;
            toggleBtn(true);
        } else {
            alert('Není url z deníku!');
        }

    } catch (error) {
        console.log('Failed to read clipboard');
    }
});
generateButton.addEventListener('click', () => {
    const url = document.getElementById('denik').value;
    const newUrl = new URL(url);
    const finalUrl = `${newUrl.origin}${newUrl.pathname}?demoseznam`
    window.open(finalUrl, "_blank");
})

urlInput.addEventListener('input', () => {
    toggleBtn(containsDenik(urlInput.value));
})
