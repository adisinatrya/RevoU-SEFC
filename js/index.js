function calculateArea() {
    // Get input values
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    
    // Convert input values to numbers
    base = Number(base);
    height = Number(height);
    
    // Calculate area
    var area = 0.5 * base * height;
    
    // Display result
    var resultElement = document.getElementById('hasilLuasSegitiga');
    resultElement.textContent = 'Luas: ' + area;
    
    // Prevent form submission
    return false;
}

function hitungKelilingSegitiga() {
    var sisi1 = parseInt(document.getElementById("sisi1").value);
    var sisi2 = parseInt(document.getElementById("sisi2").value);
    var sisi3 = parseInt(document.getElementById("sisi3").value);
    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasilKelilingSegitiga").innerHTML = "Keliling Segitiga: " + keliling;
}

function hitungLuasJajargenjang() {
    var alas = parseInt(document.getElementById("alas").value);
    var tinggi = parseInt(document.getElementById("tinggi").value);
    var luas = alas * tinggi;
    document.getElementById("hasilLuasJajargenjang").innerHTML = "Luas Jajargenjang: " + luas;
}

function hitungKelilingJajargenjang() {
    var sisi1 = parseInt(document.getElementById("sisi1").value);
    var sisi2 = parseInt(document.getElementById("sisi2").value);
    var keliling = 2 * (sisi1 + sisi2);
    document.getElementById("hasilKelilingJajargenjang").innerHTML = "Keliling Jajargenjang: " + keliling;
}



