const texts = {
  de: { 
      nav: {
        myway: 'Mein Weg',
        skills: 'IT-Kenntnisse',
        portfolio: 'Meine Projekte',
        about: 'Über mich',
        interests: 'Interessen',
        contact: 'Kontakt'
      },
       
      mywayTitle: 'Mein Weg',
      aboutText: `Hallo, ich bin Kevin 25 Jahre alt, ehemaliger Maurer und Ultramarathonläufer.
                  Anhaltende Spätfolgen eines Fahrradunfalls beendeten meine Arbeit auf dem Bau und führten mich zur Webentwicklung.
                  Seit März 2025 lerne ich das 10-Finger-System und arbeite täglich an meiner Umschulung zum Mediamatiker.
                  HTML, CSS und JavaScript bringe ich mir über Codecademy und eigene Projekte bei sowie diese Website, die ich mit KI-Unterstützung gebaut habe.`,      
       skillsTitle: 'IT-Kenntnisse',
       skillsList: [ 'E-Mail & Internet', 'Dateiverwaltung', 'Content Creation, (Instagram, Canva, iMovie)', 'E-Commerce', 'HTML', 'CSS', 'JavaScript', 'AI' ],
       portfolioTitle: 'Meine Projekte',
       portfolioDescription1: 'Dieses Webseiten-Mockup entstand im Rahmen eines Schnuppertages. Es stellt eine Coaching-Webseite dar, auf der verschiedene Angebote zu den Themen Trailrunning und Mindset präsentiert werden.',
       portfolioDescription2: 'Das Logo wurde während eines Schnuppertages erstellt und repräsentiert meine persönliche Marke.',
       portfolioDescription3: 'Die finale version meines Logos wurde mit hilfe von KI erstellt',
       interestsTitle: 'Interessen',
       interestsList: [ 'Trail Running', 'calisthenics', 'Künstliche Intelligenz & Machine Learning', ' Digitales Marketing', 'Persönliches Wachstum & Mindset'],
       aboutTitle: 'Über mich',
       aboutmeLTrailrunner:`Trailrunner <br> Das Trailrunning ist meine Leidenschaft.<br>
                  Ich geniesse die Natur und die Herausforderung, die Berge zu bezwingen. Es ist für mich eine perfekte Kombination aus Ausdauertraining und mentaler Stärke.
                  Besondere Freude habe ich an Ultramarathons, die mich an meine Grenzen bringen und darüber hinausgehen lassen. Sowie im Mai diesen Jahres als ich einen 100km 4700hm Ultramarathon in unter 17 stunden gelaufen bin.`,
       aboutmeMindset:`Persönliches Wachstum & Mindset<br>
                 Ich glaube fest daran, dass persönliches Wachstum der Schlüssel zu einem erfüllten Leben ist.
                 Durch kontinuierliche Weiterbildung und Selbstreflexion strebe ich danach, meine Fähigkeiten zu erweitern und meine Ziele zu erreichen. Deshalb habe ich für meine Freunde eine Präsentation über mentale Stärke gebaut, mit echten Tools. Nicht nur Motivationssprüchen.`,
       aboutmeMarketer:`Digitales Marketing<br> In einer Intensiven Phase ohne Job habe ich mich selbst ins digitale Marketing eingearbeitet, von Social Media zu Webseiten optimierung und SEO/SEA.
                 Nach der Local Outreach Phase habe ich ein Konzept für einen Anwalt entwickelt um seine digitale Sichtbarkeit zu verbessern.`,
       marketinglinkText:' Marketing Projekt Öffnen',
       contactTitle: 'Kontakt',
       contactText: 'Über Ihre Kontaktaufnahme würde ich mich sehr freuen',
       phoneTitle: 'Telefon: +423 781 23 04',
       emailTitle: 'E-Mail: meierkevin887@gmail.com'
},

 en: {

nav: {
        myway: 'My way',  
        skills: 'IT-Knowledge',
        portfolio: 'My Projects',
        about: 'About Me',
        interests: 'Interests',
        contact: 'Contact'
      },

       mywayTitle: 'My way',
       mywayText: `Hi, I'm Kevin, 25 years old, a former bricklayer and ultramarathon runner.
Ongoing late effects from a bicycle accident ended my career in construction and led me to web development.
Since March 2025, I have been learning the 10-finger typing system and im working daily on my retraining as a Mediamatiker.
I am teaching myself HTML, CSS, and JavaScript through Codecademy and personal projects, including this website, which I built with AI assistance`,
       skillsTitle: 'IT-Knowledge',
       skillsList: [ 'E-Mail & Internet', 'File Managment', 'Content Creation, (Instagram, Canva, iMovie)', 'E-Commerce', 'HTML', 'CSS', 'JavaScript', 'AI' ],
       portfolioTitle: 'My Projects',
       portfolioDescription1:'This website mockup was created as part of a taster day. It represents a coaching website that presents various offers on the topics of trail running and mindset.',
       portfolioDescription2:'The logo was created during a trial day and represents my personal brand.',
       portfolioDescription3:' The final version of my logo was created with the help of AI.',
       interestsTitle: 'Interests',
       interestsList: [ 'Trail Running', 'Calisthenics', 'Artificial Intelligence & Machine Learning', ' Digital Marketing', 'Personal Growth & Mindset'],
       aboutTitle: 'About Me',
       aboutmeTrailrunner:`Trailrunner <br>Trailrunning is my Passion.<br>
                  I enjoy nature and the challenge of conquering mountains. For me, it's a perfect combination of endurance training and mental strength.
                  I particularly enjoy ultramarathons, which push me to my limits and beyond. Like this past May, when I ran a 100km ultramarathon with 4700m of elevation gain in under 17 hours.`,
       aboutmeMindset:`Personal Growth & Mindset <br>
                 I firmly believe that personal growth is the key to a fulfilling life. Through continuous learning and self-reflection, I strive to expand my skills and achieve my goals. That's why I even created a presentation for my friends about mental strength, featuring real tools, not just motivational quotes.`,
       aboutmeMarketer:`Digital Marketing<br> During an intense period without a job, I immersed myself in digital marketing, covering everything from social media to website optimization and SEO/SEA.
                 Following the local outreach phase, I developed a digital visibility concept for a lawyer, aiming to enhance their online presence.`,
       marketinglinkText:' Open Marketing Project',
       contactTitle: 'Contact',
       contactText: 'I look forward to hearing from you',
       phoneTitle: 'Phone: +423 781 23 04',
       emailTitle: 'E-Mail: meierkevin887@gmail.com'
   }
};

function switchLanguage(lang) { 
 const elements = {
   mywayTitle: document.getElementById('myway-title'),
   mywayText: document.getElementById('myway-text'),
   skillsTitle: document.getElementById('skills-title'),
   skillsList: document.getElementById('skills-list'),
   portfolioTitle: document.getElementById('portfolio-title'),
   portfolioDescription1: document.getElementById('portfolio-description1'),
   portfolioDescription2: document.getElementById('portfolio-description2'),
   portfolioDescription3: document.getElementById('portfolio-description3'),   
   interestsTitle: document.getElementById('interests-title'),
   interestsList: document.getElementById('interests-list'),
   aboutTitle: document.getElementById('about-title'),
   aboutmeTrailrunner: document.getElementById('about-me-trailrunner'),
   aboutmeMindset: document.getElementById('about-me-mindset'),
   aboutmeMarketer: document.getElementById('about-me-marketer'),
   marketinglinkText: document.getElementById('marketinglink-Text'),
   contactTitle: document.getElementById('contact-title'),
   contactText: document.getElementById('contact-text'),
   phoneTitle: document.getElementById('phone-title'),
   emailTitle: document.getElementById('email-title')
 };

const navElements = {
    myway: document.getElementById('nav-my-way'),
    skills: document.getElementById('nav-skills'),
    portfolio: document.getElementById('nav-portfolio'),  
    about: document.getElementById('nav-about'),
    interests: document.getElementById('nav-interests'),
    contact: document.getElementById('nav-contact')
}




if (texts[lang]) {
    navElements.myway.textContent = texts[lang].nav.myway || 'Language not supported';
    navElements.skills.textContent = texts[lang].nav.skills || 'Language not supported';
    navElements.portfolio.textContent = texts[lang].nav.portfolio || 'Language not supported';
    navElements.about.textContent = texts[lang].nav.about || 'Language not supported';
    navElements.interests.textContent = texts[lang].nav.interests || 'Language not supported';
    navElements.contact.textContent = texts[lang].nav.contact || 'Language not supported';
    elements.mywayTitle.textContent = texts[lang].mywayTitle || 'Language not supported';
    elements.mywayText.innerHTML = texts[lang].mywayText || 'Language not supported';
    elements.aboutTitle.textContent = texts[lang].aboutTitle || 'Language not supported';
   elements.skillsTitle.textContent = texts[lang].skillsTitle || 'Language not supported';
   elements.skillsList.innerHTML = texts[lang].skillsList.map(skill => `<li>${skill}</li>`).join('') || '<li>Language not supported</li>';
   elements.portfolioTitle.textContent = texts[lang].portfolioTitle || 'Language not supported';
   elements.portfolioDescription1.textContent = texts[lang].portfolioDescription1 || 'Language not supported';
   elements.portfolioDescription2.textContent = texts[lang].portfolioDescription2 || 'Language not supported';
   elements.portfolioDescription3.textContent = texts[lang].portfolioDescription3 || 'Language not supported';
   elements.interestsTitle.textContent = texts[lang].interestsTitle || 'Language not supported';
   elements.interestsList.innerHTML = texts[lang].interestsList.map(interest => `<li>${interest}</li>`).join('');
   elements.aboutmeTrailrunner.innerHTML = texts[lang].aboutmeTrailrunner || 'Language not supported';
   elements.aboutmeMindset.innerHTML = texts[lang].aboutmeMindset || 'Language not supported';
   elements.aboutmeMarketer.innerHTML = texts[lang].aboutmeMarketer || 'Language not supported';
   elements.marketinglinkText.textContent = texts[lang].marketinglinkText || 'Language not supported';
   elements.contactTitle.textContent = texts[lang].contactTitle || 'Language not supported';
   elements.contactText.textContent = texts[lang].contactText || 'Language not supported';
   elements.phoneTitle.textContent = texts[lang].phoneTitle || 'Language not supported';
   elements.emailTitle.textContent = texts[lang].emailTitle || 'Language not supported'
 }
}
  function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.8;
}

// Beim Laden der Seite: alle sichtbaren Sections direkt sichtbar machen
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
});

// Beim Scrollen nachladen
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});

