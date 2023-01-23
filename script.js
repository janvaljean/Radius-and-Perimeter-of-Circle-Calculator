document.querySelector("#btn").onclick = () => {
    const r = document.querySelector("#inputPassword6").value;
    const radius = (Math.PI*r*r).toFixed(2);
    const cevre=(2*Math.PI*r).toFixed(2);
    
    document.querySelector(".radius").innerHTML = radius;
    document.querySelector(".perimeter").innerHTML = cevre;
    
}



