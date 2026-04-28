// ===========================
// DATOS CURIOSOS ROTATIVOS
// ===========================
const facts = [
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

// ===========================
// CAMBIO DE VISTA: welcome → chat
// ===========================
const welcomeView = document.getElementById('welcomeView')
const chatHistory = document.getElementById('chatHistory')
const userInput   = document.getElementById('userInput')
const sendBtn     = document.getElementById('sendBtn')

const startChat = (initialMessage = null) => {
    welcomeView.classList.add('hidden')
    chatHistory.classList.remove('hidden')

    if (initialMessage) {
        appendMessage('user', initialMessage)
        setTimeout(() => {
            appendMessage('bot', `¡Perfecto! Vamos a aprender sobre: <strong>${initialMessage}</strong> 🤙`)
        }, 600)
    }
}

const appendMessage = (sender, text) => {
    const msgDiv = document.createElement('div')
    msgDiv.classList.add('message', sender === 'user' ? 'user' : 'bot')
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`
    chatHistory.appendChild(msgDiv)
    chatHistory.scrollTop = chatHistory.scrollHeight
}

document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => startChat(btn.getAttribute('data-message')))
})

const handleSend = () => {
    const text = userInput.value.trim()
    if (!text) return
    if (!welcomeView.classList.contains('hidden')) {
        startChat(text)
    } else {
        appendMessage('user', text)
    }
    userInput.value = ''
}

sendBtn.addEventListener('click', handleSend)
userInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend() })