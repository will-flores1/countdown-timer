const div = document.querySelector('#output');

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    para.textContent = i;
    div.appendChild(para);
    console.log(para);
    
    if (i === 0) {
        console.log('blastoff!');
        para.textContent = 'blastoff!';
    }
}