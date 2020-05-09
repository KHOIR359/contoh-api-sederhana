// url sumber api
let mainUrl = 'https://api.covid19api.com/country/indonesia';

const main = () => {
    fetch(mainUrl)
        .then((r) => r.json())
        .then((json) => {
            fungsiUtama(json);
        })
}

function fungsiUtama(json) {

    // deklarasi variable
    let indonesia = json;

    // menangkap elemen <div id="data"></div>
    let dataList = document.querySelector('#data');

    //  melooping setiap data dalam json indonesia
    for (const data of indonesia) {
        // membuat elemen ordered list <ol>
        let list = ``;
        list += `<ol>`;

        // melooping objek data menjadi list <li>key: value</i>
        for (const d in data) {
            list += `<li>${d} : ${data[d]}</li>`
        }

        // membuat tag penutup </ol>
        list += `</ol>`;

        // mengisi <li> ke dalam <ol>
        dataList.innerHTML += list;
    }
}


main()
