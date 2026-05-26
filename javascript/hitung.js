document.body.appendChild(createInput('x'))
document.body.appendChild(createInput('y'))
document.body.appendChild(buatKotak('hasil', 'green', '32px'))

document.body.appendChild(buatTombol('tambah','+'))
document.body.appendChild(buatTombol('kurang','-'))
document.body.appendChild(buatTombol('kali','x'))
document.body.appendChild(buatTombol('bagi','/'))
document.body.appendChild(buatTombol('mod','%'))
document.body.appendChild(buatTombol('hapushistory','Hapus History'))
document.body.appendChild(buatTombol('hapusinput','Hapus Input'))

document.body.appendChild(buatTombol('history','blue', '32px'))

function createInput(id){
    let input = document.createElement('input');
    input.setAttribute('id', id);  
    return input 
}

function buatTombol(id, text, warna){
    let tbl = document.createElement('button');
    tbl.setAttribute('id', id);
    tbl.setAttribute('style','margin: 0 5px; border-radius; 5px; border : none; padding: 10px; background-color; #45919d; color; white; font-weight; bold;')
    tbl.innerHTML = text;
    return tbl
}

function buatKotak(id, warna, tinggi){
    let kotak = document.createElement('div');
    kotak.setAttribute('id', id);
    kotak.setAttribute('style','overflow:auto; box-sizing; border-box 5px; border : none; padding: 10px; background-color; #45919d; color; white; font-weight; bold;')
    kotak.innerHTML = text;
    return kotak
}
