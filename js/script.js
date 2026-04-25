// Cursor Customizado (Opcional, mas muito premium)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Estilize o .custom-cursor no CSS:
// .custom-cursor { width: 20px; height: 20px; border: 1px solid #c5a059; border-radius: 50%; position: fixed; pointer-events: none; z-index: 10000; transition: transform 0.1s; }
