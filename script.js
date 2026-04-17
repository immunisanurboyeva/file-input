const fileEl = document.querySelector('.file')
const img = document.querySelector('.img')
const icon = document.querySelector('.icon')
const imgWrap = document.querySelector('.img-wrap')

imgWrap.addEventListener('click', (e)=>{

    const files = Array.from(fileEl.files);

    files.forEach((file)=>{
        img.src = URL.createObjectURL(file);
        icon.style.display = 'none'
    });
});
