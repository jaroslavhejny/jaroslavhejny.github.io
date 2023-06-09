const pasteButton = document.getElementById('pasteBtn');
const generateButton = document.getElementById('button');
const urlInput = document.getElementById('denik');

const containsDenik = (value) => {
    return value.indexOf('.denik.') > -1;
}
pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        const isDenik = containsDenik(text);
        if (isDenik){
            urlInput.value = text;
        }
        else {
            alert('Není url z deníku!');
        }

    } catch (error) {
        console.log('Failed to read clipboard');
    }
});
generateButton.addEventListener('click', ()=>{
    const url = document.getElementById('denik').value;
    const newUrl = new URL(url);
    const finalUrl = `${newUrl.origin}${newUrl.pathname}?demoseznam`
    window.open(finalUrl, "_blank");
})

urlInput.addEventListener('input', (value)=>{
    console.log(value);
})
