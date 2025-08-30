// 1) m/s a km/h
function msToKm() {
    let v = parseFloat(document.getElementById("ms").value);
    if (isNaN(v)) return;
    let res = v * 3.6;
    document.getElementById("res1").innerText = `${v} m/s = ${res.toFixed(2)} km/h`;
}

// 2) v = d / t
function dTov() {
    let d = parseFloat(document.getElementById("dist").value);
    let t = parseFloat(document.getElementById("tiempo").value);
    if (isNaN(d) || isNaN(t) || t <= 0) return;
    let v = d / t;
    document.getElementById("res2").innerText = `v = ${d} / ${t} = ${v.toFixed(2)} m/s`;
}

// 3) velocidad media (media armónica)
function mediaArmonica() {
    let v1 = parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);
    if (isNaN(v1) || isNaN(v2) || v1 <= 0 || v2 <= 0) return;
    let vmed = 2 / (1/v1 + 1/v2);
    document.getElementById("res3").innerText = `v_med = ${vmed.toFixed(2)} m/s`;
}


// 4) angular → lineal
function angularLineal() {
    let w = parseFloat(document.getElementById("omega").value);
    let r = parseFloat(document.getElementById("radio").value);
    if (isNaN(w) || isNaN(r) || r <= 0) return;
    let v = w * r;
    document.getElementById("res5").innerText = `v = ${w} * ${r} = ${v.toFixed(2)} m/s`;
}


function racionalizar() {
  let expr = document.getElementById("expresion").value.trim();

  // Detectar formato "a/√b"
  let regex = /^(\d+)\/√(\d+)$/;
  let match = expr.match(regex);

  if (!match) {
    document.getElementById("proceso").innerHTML = 
      "⚠ Formato no reconocido. Usá algo como 4/√3.";
    return;
  }

  let a = parseInt(match[1]); // numerador
  let b = parseInt(match[2]); // número dentro de la raíz

  // Paso racionalización
  let racionalizado_num = a + "√" + b;
  let racionalizado_den = b;

  // Valor decimal
  let valor_decimal = (a * Math.sqrt(b)) / b;

  // Mostrar con LaTeX (MathJax)
  let salida = `
    \\[
    \\text{Expresión original: } \\quad \\frac{${a}}{\\sqrt{${b}}}
    \\]
    \\[
    \\text{Multiplicamos por } \\frac{\\sqrt{${b}}}{\\sqrt{${b}}}
    \\]
    \\[
    = \\frac{${a}\\sqrt{${b}}}{${b}}
    \\]
    \\[
    \\text{Valor aproximado: } ${valor_decimal.toFixed(4)}
    \\]
  `;

  document.getElementById("proceso").innerHTML = salida;
  MathJax.typeset(); // actualizar render de fórmulas
}