(function() {
  requestAnimationFrame(() => {
    const editorMarkers = ['.editor', '.cms-editor-active', '[data-editor]', '.site-editor', 'body.editing'];
    for (const sel of editorMarkers) {
      if (document.querySelector(sel)) return;
    }

    const style = document.createElement("style");
    style.innerHTML = `
      .contact-buttons {
        position: fixed;
        bottom: 20px;
        left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 99999;
        pointer-events: none;
      }
      @media (max-width: 768px) {
        .contact-buttons {
          flex-direction: row;
          left: 50%;
          transform: translateX(-50%);
          gap: 10px;
        }
      }
      .contact-buttons a {
        background-color: #000;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
        pointer-events: auto;
        margin-bottom: 10px;
      }
      .contact-buttons a:hover {
        transform: scale(1.1);
      }
      @keyframes iconSwing {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(6deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-6deg); }
        100% { transform: rotate(0deg); }
      }
      .icon-swing {
        animation: iconSwing 0.6s infinite linear;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "contact-buttons";
    container.setAttribute("data-contact-floating", "true");

    const buttons = [
      { href: "https://www.zerbib-avocat.fr/garde-a-vue", color: "#003366", html: "🚨" },
      { href: "https://www.zerbib-avocat.fr/un-proche-en-detention", color: "black", html: \`
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 64 64' fill='white' style='display:block; margin:auto;'>
          <rect x='8' y='4' width='6' height='56'/>
          <rect x='18' y='4' width='6' height='56'/>
          <rect x='28' y='4' width='6' height='56'/>
          <rect x='38' y='4' width='6' height='56'/>
          <rect x='48' y='4' width='6' height='56'/>
          <circle cx='14' cy='32' r='5'/>
          <circle cx='50' cy='32' r='5'/>
        </svg>\` },
      { href: "tel:+33617082109", color: "red", html: "<span class='icon-swing'>📞</span>" },
      { href: "https://api.whatsapp.com/send?phone=33617082109", color: "#25D366", html: "<span class='icon-swing'><img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' width='35' height='35' alt='WhatsApp'></span>", target: "_blank" },
      { href: "sms:+33617082109", color: "#87CEEB", html: "<span class='icon-swing'>💬</span>" }
    ];

    buttons.forEach(({ href, color, html, target }) => {
      const a = document.createElement("a");
      a.href = href;
      a.style.backgroundColor = color;
      if (target) a.target = target;
      a.innerHTML = html;
      container.appendChild(a);
    });

    document.body.appendChild(container);
  });
})();