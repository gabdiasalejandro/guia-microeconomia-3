const QUESTIONS = [
  { type: "Externalidades", q: "Una empresa química vierte residuos en un río y afecta a los pescadores locales. ¿Cómo se clasifica?",
    o: ["Externalidad positiva de consumo", "Externalidad negativa de producción", "Política pública de equidad distributiva"], a: 1,
    j: "La actividad productiva (la fábrica) impone un costo involuntario a un tercero (los pescadores): externalidad negativa de origen productivo." },
  { type: "Bienestar", q: "Alcanzar un punto de Pareto óptimo implica que…",
    o: ["Todos los ciudadanos tienen exactamente el mismo ingreso", "Se puede mejorar a un sector vulnerable sin afectar a nadie", "La mejora de un individuo implica necesariamente la pérdida de otro"], a: 2,
    j: "En el óptimo de Pareto no hay 'almuerzos gratis': toda ganancia individual exige un sacrificio equivalente en otra parte del sistema." },
  { type: "Instrumentos", q: "El gobierno aplica un impuesto a las emisiones de carbono de una siderúrgica para desincentivar su impacto. Está usando…",
    o: ["Un permiso de emisión negociable", "Un impuesto pigouviano", "Un criterio Maximin"], a: 1,
    j: "El impuesto pigouviano corrige la señal de precios para que el productor internalice el costo social de su contaminación." },
  { type: "Bienestar", q: "El 85% de los ciudadanos dice sentirse feliz tras la creación de nuevos parques. ¿Qué dimensión del bienestar es?",
    o: ["Bienestar objetivo", "Bienestar subjetivo", "Norma democrática"], a: 1,
    j: "Se basa en la percepción declarada ('lo que dicen tener'), no en indicadores materiales como salud o nutrición." },
  { type: "Creatividad", q: "En una lluvia de ideas sobre movilidad, alguien propone la teletransportación. ¿Qué procede?",
    o: ["Rechazarla de inmediato por no tener base científica", "Fomentar la idea disruptiva y construir sobre ella", "Centrarse solo en la eficiencia de Pareto"], a: 1,
    j: "En la fase de fluidez, las ideas disruptivas son catalizadores de soluciones factibles; se evita la autocensura." },
  { type: "Fundamentos", q: "¿Cuál es la condición fundamental que obliga a los agentes económicos a tomar decisiones?",
    o: ["La eficiencia", "La escasez", "La norma democrática"], a: 1,
    j: "La escasez surge cuando los recursos no alcanzan para todo a la vez, forzando a priorizar ante necesidades ilimitadas." },
  { type: "Política pública", q: "¿Qué se refiere al manejo específico de los asuntos públicos?",
    o: ["La política", "Las políticas públicas", "El criterio Maximin"], a: 1,
    j: "La política es el poder en general; las políticas públicas son el manejo específico de lo público y determinan la política." },
  { type: "Instrumentos", q: "¿Qué instrumento pone un límite numérico estricto a la contaminación mediante permisos transables?",
    o: ["El impuesto pigouviano", "Los permisos de emisión negociables", "Las curvas de indiferencia social"], a: 1,
    j: "Los permisos de emisión negociables fijan un tope numérico y se compran/venden en un mercado secundario." },
  { type: "Caso Argentina", q: "En el caso argentino 2003–2013, ¿cuál fue el principal obstáculo de la economía social?",
    o: ["La falta de financiamiento internacional", "La visión instrumental del Estado sobre las organizaciones sociales", "El exceso de impuestos pigouvianos"], a: 1,
    j: "Al verlas solo como herramientas de asistencia, el Estado no incidía en las condiciones socioeconómicas de fondo, limitando la transformación real." },
  { type: "Bienestar", q: "¿Qué criterio de justicia social prioriza mejorar a las familias de menores ingresos?",
    o: ["La norma democrática", "El criterio Maximin", "La curva de posibilidades de utilidad"], a: 1,
    j: "El criterio Maximin enfoca la justicia social en elevar el bienestar de quienes tienen menores ingresos." },
  { type: "Fundamentos", q: "¿Cómo se define la eficiencia en economía?",
    o: ["La capacidad de extraer el máximo beneficio de los recursos escasos", "La igualdad total de ingresos entre individuos", "El poder del Estado para fijar precios"], a: 0,
    j: "La eficiencia es la capacidad técnica de la sociedad para obtener el máximo beneficio posible de sus recursos escasos." },
  { type: "Externalidades", q: "La siembra de árboles y la restauración de ecosistemas por un proceso productivo es un ejemplo de…",
    o: ["Externalidad positiva de producción", "Externalidad negativa de consumo", "Impuesto pigouviano"], a: 0,
    j: "El proceso productivo genera un beneficio social colateral: externalidad positiva de producción." },
  { type: "Externalidades", q: "La educación universitaria, que genera ciudadanos más informados que benefician a la sociedad, es…",
    o: ["Externalidad negativa de producción", "Externalidad positiva de consumo", "Norma democrática"], a: 1,
    j: "El consumo individual (estudiar) eleva el bienestar general: externalidad positiva de consumo." },
  { type: "Externalidades", q: "Un concierto al aire libre que genera contaminación auditiva excesiva es un ejemplo de…",
    o: ["Externalidad positiva de producción", "Externalidad negativa de consumo", "Permiso de emisión negociable"], a: 1,
    j: "El consumo (el concierto) genera un perjuicio externo a terceros: externalidad negativa de consumo." },
  { type: "El Estado", q: "Desde la postura neoclásica, ¿por qué motivo se justifica fundamentalmente la intervención del Estado?",
    o: ["Por motivos de eficiencia ante la incorrecta distribución de recursos", "Por aumentar el poder político del gobierno", "Por eliminar toda forma de mercado"], a: 0,
    j: "La intervención neoclásica se justifica por eficiencia: corregir el fallo de mercado cuando el precio no refleja el costo o beneficio social real." },
  { type: "Bienestar", q: "El PIB per cápita está directamente correlacionado con…",
    o: ["La contaminación auditiva", "El aumento en la esperanza de vida", "La autocensura creativa"], a: 1,
    j: "El PIB per cápita es un indicador de bienestar que se correlaciona directamente con el aumento de la esperanza de vida." },
  { type: "Bienestar", q: "La nutrición adecuada, la vivienda digna y la salud sustentan ¿qué tipo de bienestar?",
    o: ["Bienestar subjetivo", "Bienestar objetivo", "Bienestar declarado"], a: 1,
    j: "El bienestar objetivo se sustenta en factores reales para un proyecto de vida factible: nutrición, vivienda y salud." },
  { type: "Comunicación", q: "¿Cuál es el paso técnico final del storytelling antes de publicar?",
    o: ["Leer el guion en voz alta y pedir retroalimentación al público meta", "Calcular el PIB per cápita del proyecto", "Aplicar un impuesto pigouviano al guion"], a: 0,
    j: "El cierre requiere leer el guion en voz alta y solicitar retroalimentación del público meta para asegurar credibilidad." },
  { type: "Comunicación", q: "En el storytelling económico, ¿qué función cumple el personaje?",
    o: ["Es el vehículo del mensaje", "Es el límite numérico de contaminación", "Es el criterio de justicia social"], a: 0,
    j: "El personaje actúa como vehículo del mensaje, por ejemplo un comerciante endeudado que genera empatía." },
  { type: "Creatividad", q: "Según el proceso creativo, ¿cuándo nacen las mejores soluciones?",
    o: ["Al rechazar las ideas disruptivas", "Al seleccionar y amalgamar las ideas más potentes", "Al autocensurar los pensamientos al inicio"], a: 1,
    j: "La combinación es el momento en que nacen las mejores soluciones: seleccionar y amalgamar las ideas más potentes." }
];

let idx = 0, xp = 0, correct = 0, selected = null, locked = false;
const area = document.getElementById('quizArea');
const drawer = document.getElementById('drawer');

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => switchView(t.dataset.view)));

function switchView(v) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === v));
  document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === v));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goExam() {
  switchView('exam');
  if (idx === 0 && xp === 0) renderQ();
}

function renderQ() {
  if (idx >= QUESTIONS.length) return renderResult();
  const Q = QUESTIONS[idx];
  selected = null;
  locked = false;
  const pct = Math.round((idx / QUESTIONS.length) * 100);
  const L = ['A', 'B', 'C', 'D'];
  area.innerHTML = `
    <div class="qbar"><div class="track"><div class="fill" style="width:${pct}%"></div></div></div>
    <div class="qcount">Pregunta ${idx + 1} de ${QUESTIONS.length}</div>
    <div class="qtype">${Q.type}</div>
    <div class="qtext">${Q.q}</div>
    <div class="opts" id="opts">
      ${Q.o.map((opt, i) => `<button class="opt" data-i="${i}"><span class="ltr">${L[i]}</span><span>${opt}</span></button>`).join('')}
    </div>
    <button class="btn" id="checkBtn" disabled>Comprobar</button>`;
  area.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => pick(b)));
  document.getElementById('checkBtn').addEventListener('click', check);
}

function pick(btn) {
  if (locked) return;
  area.querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
  btn.classList.add('sel');
  selected = parseInt(btn.dataset.i);
  document.getElementById('checkBtn').disabled = false;
}

function check() {
  if (selected === null || locked) return;
  locked = true;
  const Q = QUESTIONS[idx];
  const opts = area.querySelectorAll('.opt');
  opts.forEach(o => o.classList.add('locked'));
  const right = selected === Q.a;
  opts[Q.a].classList.add('good');
  if (!right) opts[selected].classList.add('bad');
  document.getElementById('checkBtn').style.display = 'none';
  if (right) { correct++; xp += 10; }
  showDrawer(right, Q.j);
}

function showDrawer(ok, just) {
  drawer.className = 'drawer show ' + (ok ? 'ok' : 'no');
  document.getElementById('dTitle').textContent = ok ? 'Correcto' : 'Respuesta incorrecta';
  document.getElementById('dJust').innerHTML = '<b>Justificación del catedrático:</b> ' + just;
}

document.getElementById('dCont').addEventListener('click', () => {
  drawer.className = 'drawer';
  idx++;
  setTimeout(renderQ, 180);
});

function renderResult() {
  drawer.className = 'drawer';
  const total = QUESTIONS.length;
  const acc = Math.round((correct / total) * 100);
  let title = 'Lección completada', msg = 'Dominas la microeconomía del bienestar.';
  if (acc < 50) { title = 'Buen comienzo'; msg = 'Repasa las unidades y vuelve a intentarlo.'; }
  else if (acc < 80) { title = 'Vas muy bien'; msg = 'Un repaso más y lo clavas.'; }
  area.innerHTML = `
    <div class="result">
      <h2>${title}</h2>
      <p>${msg}</p>
      <div class="scoreboard">
        <div class="sb"><div class="v">${xp}</div><div class="l">XP</div></div>
        <div class="sb"><div class="v">${acc}%</div><div class="l">Aciertos</div></div>
        <div class="sb"><div class="v">${correct}/${total}</div><div class="l">Correctas</div></div>
      </div>
      <button class="btn" id="again">Reintentar</button>
      <button class="btn ghost" id="back">Volver a la guía</button>
    </div>`;
  document.getElementById('again').addEventListener('click', () => reset(true));
  document.getElementById('back').addEventListener('click', () => { reset(false); switchView('guide'); });
}

function reset(render) {
  idx = 0; xp = 0; correct = 0; selected = null; locked = false;
  if (render) renderQ();
}

renderQ();
