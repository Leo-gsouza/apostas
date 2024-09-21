function ver(tim, res){
   
    if (tim.id == 'ing1'){
        res.innerHTML = `
        <p>Posição: 1º Lugar</p>
        <p>Gols Feitos: 11</p>
        Gols Sofridos: 3
        Artilheiro: Haaland com 9 gols
        Escanteios média: `
    }else{
        res.innerHTML = `<p>nada</p>`
    }
}