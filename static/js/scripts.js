// DATOS CURIOSOS ROTATIVOS
const facts = [
    'La gramática de las lenguas de señas utiliza el <strong>espacio tridimensional</strong> para definir pronombres y tiempos verbales.',
    'En la cultura sorda, los nombres propios se sustituyen por una <strong>"seña personal"</strong> basada en un rasgo físico o de carácter.',
    'El orden lógico de una oración en señas suele ser <strong>Tema-Comentario</strong>, a diferencia del Sujeto-Verbo-Objeto del español oral.',
    'Transmitir un mensaje mediante lengua de señas es <strong>exactamente igual de rápido</strong> que hacerlo mediante la voz.',
    'La Lengua de Señas Guatemalteca (LSGT) posee <strong>variantes regionales</strong>; una seña puede cambiar entre la capital y los departamentos.',
    'Las personas sordociegas se comunican utilizando <strong>lengua de señas táctil</strong>, sintiendo los movimientos en las manos de su interlocutor.',
    'Levantar la voz no ayuda a una persona sorda; la clave de la comunicación es mantener el <strong>contacto visual</strong>.',
    'Existen más de <strong>300 lenguas de señas</strong> distintas en el mundo, cada una con su propia gramática y vocabulario.',
    'Las lenguas de señas son procesadas por el <strong>mismo hemisferio del cerebro</strong> que las lenguas habladas.',
    'No solo importan las manos: la <strong>expresión facial y el cuerpo</strong> también forman parte de la gramática.',
    'La <strong>ASL (americana) y la LSE (española)</strong> son completamente diferentes, igual que el inglés y el español.',
    'Los bebés oyentes criados con lengua de señas pueden <strong>comunicarse antes de poder hablar</strong>.',
    'En Guatemala se usa la <strong>Lengua de Señas Guatemalteca (LSGT)</strong>, reconocida oficialmente desde 2006.',
    'La primera escuela para sordos fue fundada en <strong>París en 1760</strong> por el Abbé de l\'Épée.',
    'Las lenguas de señas <strong>no son universales</strong>: cada país o región desarrolla la propia de forma natural.',
]

const INTERVAL_SECONDS = 10
const FADE_MS = 400

let currentIndex = 0
let secondsLeft = INTERVAL_SECONDS

const factText    = document.getElementById('factText')
const factCard    = document.getElementById('factCard')
const factDots    = document.getElementById('factDots')
const countdownEl = document.getElementById('countdown')

// Construye los puntos indicadores una sola vez
facts.forEach((_, i) => {
    const dot = document.createElement('button')
    dot.className = 'fact-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', `Dato ${i + 1}`)
    dot.addEventListener('click', () => {
        goToFact(i)
        secondsLeft = INTERVAL_SECONDS  // reinicia el contador al hacer click
    })
    factDots.appendChild(dot)
})

// Actualiza qué punto está resaltado
const updateDots = () => {
    factDots.querySelectorAll('.fact-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex)
    })
}

// Cambia al dato del índice indicado con fade
const goToFact = (index) => {
    currentIndex = index

    // 1. Fade out
    factCard.style.opacity = '0'

    // 2. Cuando termina el fade out, cambia el texto y hace fade in
    setTimeout(() => {
        factText.innerHTML = facts[currentIndex]
        updateDots()
        factCard.style.opacity = '1'
    }, FADE_MS)
}

// Muestra el primer dato inmediatamente (sin animación)
factText.innerHTML = facts[0]
factCard.style.opacity = '1'

// Tick cada segundo
setInterval(() => {
    secondsLeft--
    countdownEl.textContent = secondsLeft

    if (secondsLeft <= 0) {
        secondsLeft = INTERVAL_SECONDS
        goToFact((currentIndex + 1) % facts.length)
    }
}, 1000)