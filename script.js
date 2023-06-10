let temperature = () => {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".degree").value;
    if (opt.value == "Celsius") {
        // console.log(a, "C to F", opt.value)
        let F = a * (9 / 5) + 32;
        display.innerHTML = F.toFixed(4) + " &#186;F";
    } else if(opt.value == "Fahrenheit"){
            // console.log(a, "F to C", opt.value);
            let C = (a - 32) * (5 / 9);
            display.innerHTML = C.toFixed(4) + " &#186;C";
    }
    else if(opt.value == "Kelvin") {
        let K = (a + 273.15);
        display.innerHTML = K.toFixed(4) + " &#186;K";
    }
}