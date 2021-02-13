let btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    btn.classList.add('active');
    btn.innerText = '';
    active = true;
    setTimeout(()=>{
        btn.classList.add('success');
        btn.innerHTML = '<i class="fas fa-check">';
    },3000);

    setTimeout(()=>{
        btn.classList.remove('active');
        btn.classList.remove('success');
        btn.innerText = 'SUBMIT';
    },4500);
});