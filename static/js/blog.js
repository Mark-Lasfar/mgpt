const translations = {
  en: {
    title: "{{ post.title }} - MGZon AI",
    postTitle: "{{ post.title }}",
    footerCrafted: "Developed by Mark Al-Asfar | Powered by MGZon AI",
    contact1Title: "Email Us",
    contact1Details: "Reach out to our support team for any inquiries or assistance.",
    contact2Title: "Phone Support",
    contact2Details: "Contact our support team via phone for immediate assistance.",
    contact3Title: "Community",
    contact3Btn: "Join us",
    contact3Details: "Join our vibrant community to share ideas and collaborate.",
    contact4Title: "API Docs",
    contact4Btn: "Explore Docs",
    contact4Details: "Explore our API documentation for seamless integration.",
    contact5Title: "FAQ",
    contact5Btn: "Read FAQ",
    contact5Details: "Find answers to common questions in our FAQ section.",
    contact6Title: "Documentation",
    contact6Btn: "Full Docs",
    contact6Details: "Access comprehensive documentation for MGZon Chatbot.",
    collapseBtn: "Collapse",
    copyright: "© 2026 MGZon AI. Eternal in the codeverse.",
    searchPlaceholder: "Search here... (e.g., AI trends 2026)",
    voiceTitle: "Press to speak",
    themeTitle: "Toggle Theme",
    chatPlaceholder: "Type your message...",
    sendBtn: "Send",
    voiceStatus: "Listening...",
    navLogo: "MGZon AI",
    navHome: "Home",
    navDocs: "API Documentation",
    navAbout: "About",
    navDownload: "Download",
    navLogin: "Login",
    navRegister: "Register",
    navBlog: "Blog",
    navCommunity: "Community",
    navMark: "Mark Al-Asfar",
    you: "You",
    error: "Hmm, I couldn't process that. Try asking about AI, team, or search something!",
    searchPrefix: "Here's what I found on the web:",
    searchError: "Sorry, search failed right now – try rephrasing or check your connection!",
    voicePrompt: "Voice enabled! Speak now."
  },
  ar: {
    title: "{{ post.title }} - MGZon AI",
    postTitle: "{{ post.title }}",
    footerCrafted: "تطوير مارك الأسفر | مدعوم بـ MGZon AI",
    contact1Title: "راسلنا",
    contact1Details: "تواصل مع فريق الدعم لأي استفسارات أو مساعدة.",
    contact2Title: "دعم الهاتف",
    contact2Details: "اتصل بفريق الدعم عبر الهاتف للحصول على مساعدة فورية.",
    contact3Title: "المجتمع",
    contact3Btn: "انضم إلينا",
    contact3Details: "انضم إلى مجتمعنا النابض بالحياة لمشاركة الأفكار والتعاون.",
    contact4Title: "وثائق API",
    contact4Btn: "استكشف الوثائق",
    contact4Details: "استكشف وثائق API الخاصة بنا للتكامل السلس.",
    contact5Title: "الأسئلة الشائعة",
    contact5Btn: "اقرأ الأسئلة الشائعة",
    contact5Details: "اعثر على إجابات للأسئلة الشائعة في قسم الأسئلة الشائعة.",
    contact6Title: "الوثائق",
    contact6Btn: "الوثائق الكاملة",
    contact6Details: "الوصول إلى وثائق شاملة لـ MGZon Chatbot.",
    collapseBtn: "طي",
    copyright: "© 2026 MGZon AI. أبدي في عالم الكود.",
    searchPlaceholder: "ابحث هنا... (مثال: اتجاهات AI 2026)",
    voiceTitle: "اضغط للكلام",
    themeTitle: "تبديل الثيم",
    chatPlaceholder: "اكتب رسالتك...",
    sendBtn: "إرسال",
    voiceStatus: "يستمع...",
    navLogo: "MGZon AI",
    navHome: "الرئيسية",
    navDocs: "وثائق API",
    navAbout: "عننا",
    navDownload: "تحميل",
    navLogin: "تسجيل الدخول",
    navRegister: "التسجيل",
    navBlog: "المدونة",
    navCommunity: "المجتمع",
    navMark: "مارك الأسفر",
    you: "أنت",
    error: "همم، مش قدرت أفهم ده. جرب تسأل عن AI أو الفريق أو ابحث في حاجة!",
    searchPrefix: "ده اللي لقيته على الويب:",
    searchError: "آسف، البحث فشل دلوقتي – جرب تعيد الصياغة أو تأكد من الإنترنت!",
    voicePrompt: "الصوت مفعل! اتكلم دلوقتي."
  }
};

// Language and Theme Management
let currentLang = navigator.language.split('-')[0] || 'en';
if (!translations[currentLang]) currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-title-translate]').forEach(el => {
    const key = el.dataset.titleTranslate;
    if (translations[lang][key]) {
      el.title = translations[lang][key];
    }
  });
  const titleKey = document.title.dataset.translate || 'title';
  if (translations[lang][titleKey]) {
    document.title = translations[lang][titleKey];
  }
  document.querySelector('meta[property="og:title"]').setAttribute('content', translations[lang].title || document.title);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');
  if (recognition) recognition.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  const icon = document.querySelector('#theme-toggle i');
  icon.classList.toggle('bx-sun');
  icon.classList.toggle('bx-moon');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".markdown-content", {
  scrollTrigger: { trigger: ".markdown-content", start: "top 80%" },
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from(".neon-gradient", {
  scrollTrigger: { trigger: "section" },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

// Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 800 } },
    color: { value: ['#00f0ff', '#ff007a', '#6b21a8'] },
    shape: { type: 'star' },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
  },
  interactivity: { events: { onhover: { enable: true, mode: 'bubble' } } }
});

// 3D Ambient
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
for (let i = 0; i < 15; i++) {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set((Math.random() - 0.6) * 100, (Math.random() - 0.6) * 100, (Math.random() - 0.6) * 100);
  scene.add(cube);
}
camera.position.z = 50;
function animate3D() {
  requestAnimationFrame(animate3D);
  scene.children.forEach(child => {
    child.rotation.x += 0.005;
    child.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
}
animate3D();

// Chat and Search
let conversationHistory = [];

// TTS function
function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    console.log('TTS not supported');
  }
}

// Search function
async function searxSearch(query) {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('how are you') || lowerQuery.includes('ازيك') || lowerQuery.includes('مرحبا')) {
    query = `funny or friendly response to "${query}"`;
  }

  try {
    const backendUrl = 'https://mgzon-mgzon-app.hf.space/search';
    const response = await fetch(`${backendUrl}?q=${encodeURIComponent(query)}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.success && data.results && data.results.length > 0) {
      const resultsText = data.results.map((result, i) => 
        `Result ${i + 1}:\nTitle: ${result.title}\nLink: ${result.link}\nContent: ${result.content.substring(0, 200)}...`
      ).join('\n\n');
      return { success: true, text: translations[currentLang].searchPrefix + '\n\n' + resultsText };
    }
    return { success: false, text: translations[currentLang].searchError };
  } catch (err) {
    console.log(`Search failed: ${err.message}`);
    return { success: false, text: translations[currentLang].searchError };
  }
}

// Bot response function
async function getBotResponse(userText) {
  const searchResult = await searxSearch(userText);
  const reply = searchResult.success ? searchResult.text : searchResult.text;
  speakText(reply);
  return reply;
}

// Chat display
function updateChatDisplay(userText, botText) {
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-message user';
  userDiv.innerHTML = `<strong>${translations[currentLang].you}:</strong> ${userText}`;
  
  const botDiv = document.createElement('div');
  botDiv.className = 'chat-message';
  const formattedText = botText.split('\n\n').map(line => `<p>${line.replace(/\n/g, '<br>')}</p>`).join('');
  botDiv.innerHTML = `<strong>MGZon AI:</strong><div>${formattedText}</div>`;
  
  const popupContent = document.getElementById('popup-content');
  popupContent.appendChild(userDiv);
  popupContent.appendChild(botDiv);
  const popup = document.getElementById('gemini-popup');
  popup.style.display = 'block';
  popupContent.scrollTop = popupContent.scrollHeight;
  gsap.from(popup, { scale: 0.8, opacity: 0, duration: 0.5 });
}

// Search Input
document.getElementById('search-input').addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value;
    if (query) {
      conversationHistory.push({ role: 'user', text: query });
      const reply = await getBotResponse(query);
      conversationHistory.push({ role: 'assistant', text: reply });
      updateChatDisplay(query, reply);
      e.target.value = '';
    }
  }
});

// Chat Send
document.getElementById('send-chat').addEventListener('click', async () => {
  const query = document.getElementById('chat-input').value;
  if (query) {
    conversationHistory.push({ role: 'user', text: query });
    const reply = await getBotResponse(query);
    conversationHistory.push({ role: 'assistant', text: reply });
    updateChatDisplay(query, reply);
    document.getElementById('chat-input').value = '';
  }
});

document.getElementById('chat-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('send-chat').click();
});

function closePopup() {
  document.getElementById('gemini-popup').style.display = 'none';
}

function togglePanel(id) {
  const panel = document.getElementById(id + '-panel');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.add('active');
    sidebar.classList.remove('collapsed');
  }
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('collapsed');
  });
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      sidebar.classList.add('collapsed');
    }
  });
});

// Voice Recognition
const voiceBtn = document.getElementById('voice-toggle');
const statusDiv = document.getElementById('voice-status');
let recognition;
let isListening = false;
let lastTranscript = '';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isListening = true;
    voiceBtn.classList.add('listening');
    statusDiv.style.display = 'block';
    statusDiv.textContent = translations[currentLang].voiceStatus || 'Listening...';
  };

  recognition.onresult = async (event) => {
    const transcript = event.results[0][0].transcript;
    if (transcript === lastTranscript) return;
    lastTranscript = transcript;
    statusDiv.textContent = `Heard: ${transcript}`;
    conversationHistory.push({ role: 'user', text: transcript });
    const reply = await getBotResponse(transcript);
    conversationHistory.push({ role: 'assistant', text: reply });
    updateChatDisplay(transcript, reply);
  };

  recognition.onerror = (event) => {
    statusDiv.textContent = `Error: ${event.error}. Try again!`;
    isListening = false;
    voiceBtn.classList.remove('listening');
    setTimeout(() => statusDiv.style.display = 'none', 3000);
  };

  recognition.onend = () => {
    isListening = false;
    voiceBtn.classList.remove('listening');
    setTimeout(() => statusDiv.style.display = 'none', 2000);
  };

  voiceBtn.addEventListener('click', () => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();
    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        statusDiv.textContent = 'Microphone access denied. Please allow access!';
        statusDiv.style.display = 'block';
        setTimeout(() => statusDiv.style.display = 'none', 3000);
      }
    }
  });

  voiceBtn.title = translations[currentLang].voiceTitle || 'Press to speak';
} else {
  voiceBtn.disabled = true;
  voiceBtn.title = 'Voice not supported. Use Chrome or Edge!';
  statusDiv.style.display = 'block';
  statusDiv.textContent = 'Voice not supported – Use Chrome or Edge!';
}

// Initialize
switchLanguage(currentLang);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});