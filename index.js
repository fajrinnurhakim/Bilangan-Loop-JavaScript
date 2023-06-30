// Source Code no 1 (100 nilai random 1-50 )
var array = [];
for (var i = 0; i < 100; i++) {
    var nilai = Math.floor(Math.random() * 50) + 1;
    array.push(nilai);
}
// Output no 1
console.log("1. Array 1-50 sebanyak 100", array);
console.log("-----------------------------------------");
// Source Code no 2 (pecahan index ganjil dan genap)
var arrayGanjil = [];
var arrayGenap = [];

for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        arrayGenap.push(array[i]);
    }
    if (i % 2 === 1) {
        arrayGanjil.push(array[i]);
    }
}
// Output no 2
console.log("2. Pecah menjadi 2 array berdasarkan index (ganjil dan genap)");
console.log("Index Ganjil", arrayGanjil);
console.log("Index Genap", arrayGenap);
console.log("-----------------------------------------");
// Source Code no 3 min, max, total, rata-rata
// Ganjil
var maxGanjil = -Infinity;
var minGanjil = Infinity;
var sumGanjil = 0;
var meanGanjil = 0;
for (var i = 0; i < arrayGanjil.length; i++) {
    if (arrayGanjil[i] > maxGanjil) {
        maxGanjil = arrayGanjil[i];
    } else if (arrayGanjil[i] < minGanjil) {
        minGanjil = arrayGanjil[i];
    } else if ((arrayGanjil[i] += sumGanjil)) {
        sumGanjil = arrayGanjil[i];
    }
}
meanGanjil = sumGanjil / arrayGanjil.length;
console.log("3. Mencari Min, Max, Total, Rata-Rata dari kedua array");
console.log("maxGanjil = ", maxGanjil);
console.log("minGanjil = ", minGanjil);
console.log("total = ", sumGanjil);
console.log("Rata-Rata = ", meanGanjil);
// Genap
var maxGenap = -Infinity;
var minGenap = Infinity;
var sumGenap = 0;
var meanGenap = 0;
for (var i = 0; i < arrayGenap.length; i++) {
    if (arrayGenap[i] > maxGenap) {
        maxGenap = arrayGenap[i];
    } else if (arrayGenap[i] < minGenap) {
        minGenap = arrayGenap[i];
    } else if ((arrayGenap[i] += sumGenap)) {
        sumGenap = arrayGenap[i];
    }
}
meanGenap = sumGenap / arrayGenap.length;
console.log("maxGenap = ", maxGenap);
console.log("minGenap = ", minGenap);
console.log("Total = ", sumGenap);
console.log("Rata-Rata = ", meanGenap);
console.log("-----------------------------------------");
// Source Code no 3 Bandingkan kedua buah array
// Fungsi Perbandingan
function compare(nilai) {
    if (nilai == 1) {
        if (maxGanjil > maxGenap) {
            console.log("- Max Lebih Besar array Ganjil");
        } else if (maxGanjil < maxGenap) {
            console.log("- Max Lebih Besar array Genap");
        } else {
            console.log("- Max di kedua array sama besar");
        }
    } else if (nilai == 2) {
        if (minGanjil > minGenap) {
            console.log("- Min Lebih Besar array Ganjil");
        } else if (minGanjil < minGenap) {
            console.log("- Min Lebih Besar array Genap");
        } else {
            console.log("- Min di kedua array sama besar");
        }
    } else if (nilai == 3) {
        if (sumGanjil > sumGenap) {
            console.log("- Total Lebih Besar array Ganjil");
        } else if (sumGanjil < sumGenap) {
            console.log("- Total Lebih Besar array Genap");
        } else {
            console.log("- Total di kedua array sama besar");
        }
    } else if (nilai == 4) {
        if (meanGanjil > meanGenap) {
            console.log("- Rata-Rata Lebih Besar array Ganjil");
        } else if (meanGanjil < meanGenap) {
            console.log("- Rata-Rata Lebih Besar array Genap");
        } else {
            console.log("- Rata-Rata di kedua array sama besar");
        }
    } else {
        console.log("- Tidak ada perbandingan");
    }
}
console.log("4. Bandingkan kedua buah array");
compare(1);
compare(2);
compare(3);
compare(4);
console.log("-----------------------------------------");
