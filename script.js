/* ==========================================================================
   YMC — Youth Movement for Change
   Vanilla JS — translations, interactivity, accessibility
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Translations dictionary
     ------------------------------------------------------------------------ */
  const translations = {
    en: {
      skipLink: "Skip to main content",
      brandTagline: "Youth Movement for Change",
      navHome: "Home", navAbout: "About", navVisionMission: "Vision & Mission",
      navProjects: "Projects", navImpact: "Impact", navFaq: "FAQ", navContact: "Contact",
      navDonate: "Get Involved",

      heroEyebrow: "Youth Movement for Change · Sudan",
      heroHeadline: "Small Projects. Real Change. Renewed Minds.",
      heroSub: "YMC unites young Sudanese to fund grassroots community projects that support mental health across Sudan — one small act at a time.",
      heroCta1: "Support Our Work", heroCta2: "Learn More",

      aboutEyebrow: "Who We Are", aboutTitle: "About YMC",
      aboutBody: "Youth Movement for Change (YMC) is a youth-led movement born from a simple belief: young people, working together at the community level, can fund and sustain real mental health support for Sudan. We organize small, local fundraising projects — bake sales, art initiatives, community runs — and channel every contribution toward mental health awareness, care, and support networks across the country.",
      aboutBody2: "We are volunteers, students, artists, and organizers. We don't wait for large institutions to act — we start where we are, with what we have, and grow the impact together.",

      visionTitle: "Our Vision",
      visionBody: "A Sudan where every young person has access to compassionate mental health support, and where hope for the future is within everyone's reach.",
      missionTitle: "Our Mission",
      missionBody: "To mobilize young people around small, sustainable community projects that fund mental health initiatives, awareness campaigns, and peer support networks across Sudan.",

      whyEyebrow: "The Need", whyTitle: "Why Mental Health Matters in Sudan",
      whyBody: "Years of instability, displacement, and economic hardship have placed an enormous strain on the mental wellbeing of Sudanese communities — especially young people. Yet mental health care remains scarce, and the stigma around asking for help keeps many from seeking support at all.",
      whyBody2: "YMC exists to close that gap from the ground up: funding accessible support, encouraging open conversations, and reminding every young person that they are not alone.",
      whyPoint1: "Limited access to affordable mental health services outside major cities",
      whyPoint2: "Deep-rooted stigma that discourages young people from seeking help",
      whyPoint3: "The compounded emotional toll of displacement and economic hardship",
      whyPoint4: "A shortage of sustainable, community-rooted funding for support programs",

      projectsEyebrow: "What We Run", projectsTitle: "Our Projects",
      projectsSub: "Small, local, and repeatable — our projects are designed so any community can run them.",
      project1Title: "Community Bake Sales",
      project1Body: "Neighborhood bake sales that turn shared food into direct funding for local mental health sessions.",
      project2Title: "Art for Awareness",
      project2Body: "Youth-led art exhibitions that raise funds while opening honest conversations about mental health.",
      project3Title: "Youth Support Circles",
      project3Body: "Peer-led group sessions, funded entirely by community contributions, offering a safe space to talk.",
      project4Title: "Fundraising Walks & Runs",
      project4Body: "Community walks that bring people together in movement, awareness, and shared purpose.",

      donationsEyebrow: "Where It Goes", donationsTitle: "How Donations Help",
      donationsSub: "Every contribution — however small — is placed directly into community mental health support.",
      donation1: "Funds one peer support session for a young person in need",
      donation2: "Provides workshop materials for a community awareness event",
      donation3: "Supports a full day of a mobile mental health outreach visit",
      donation4: "Helps sustain a monthly youth support circle for a full season",

      impactEyebrow: "Our Impact", impactTitle: "After 4 years",
      stat1: "Youth Volunteers", stat2: "Community Projects", stat3: "Lives Reached", stat4: "Cities Across Sudan",

      valuesEyebrow: "What Guides Us", valuesTitle: "Core Values",
      value1Title: "Compassion", value1Body: "We lead with empathy for every person we serve.",
      value2Title: "Integrity", value2Body: "Every donation is tracked and used exactly as promised.",
      value3Title: "Community", value3Body: "Change grows fastest when a whole community carries it.",
      value4Title: "Hope", value4Body: "We hold onto hope, and help others hold onto it too.",
      value5Title: "Resilience", value5Body: "We keep building, project by project, no matter the setbacks.",

      faqEyebrow: "Questions", faqTitle: "Frequently Asked Questions",
      faq1Q: "Where exactly does my donation go?",
      faq1A: "100% of public donations are directed to active community projects and mental health programs. We publish a simple breakdown for every project we run.",
      faq2Q: "Can I volunteer without donating money?",
      faq2A: "Absolutely. Time, skills, and local organizing are just as valuable as funding. Reach out through our contact form to get started.",
      faq3Q: "Is YMC only active in Khartoum?",
      faq3A: "No. While we started in Khartoum, our community projects now run across several cities, led by local youth volunteers.",
      faq4Q: "How do I start a project in my own community?",
      faq4A: "Message us through the contact form below with your city and idea — our team will guide you through our simple project toolkit.",

      contactEyebrow: "Reach Us", contactTitle: "Get In Touch",
      contactSub: "Have a question, an idea, or want to bring YMC to your community? We'd love to hear from you.",
      contactEmailLabel: "Email", contactPhoneLabel: "Phone",
      contactLocationLabel: "Location", contactLocationValue: "Online",
      contactInstaLabel: "Instagram",

      formNameLabel: "Full Name", formNameError: "Please enter your name.",
      formEmailLabel: "Email Address", formEmailError: "Please enter a valid email.",
      formMessageLabel: "Message", formMessageError: "Please enter a message.",
      formSubmit: "Send Message",
      formSuccess: "Thank you — your message has been received. We'll be in touch soon.",

      footerDesc: "A youth movement raising funds through small community projects to support mental health initiatives in Sudan.",
      footerLinksTitle: "Quick Links", footerContactTitle: "Contact",
      footerNewsletterTitle: "Stay Updated", footerNewsletterSub: "Get occasional updates on our projects and impact.",
      footerNewsletterLabel: "Email address", footerNewsletterPlaceholder: "Your email",
      footerLangSwitch: "العربية"
    },

    ar: {
      skipLink: "تخطَّ إلى المحتوى الرئيسي",
      brandTagline: "حركة الشباب من أجل التغيير",
      navHome: "الرئيسية", navAbout: "من نحن", navVisionMission: "الرؤية والرسالة",
      navProjects: "مشاريعنا", navImpact: "أثرنا", navFaq: "الأسئلة الشائعة", navContact: "تواصل معنا",
      navDonate: "شارك معنا",

      heroEyebrow: "حركة الشباب من أجل التغيير · السودان",
      heroHeadline: "مشاريع صغيرة. تغيير حقيقي. عقول متجددة.",
      heroSub: "تجمع حركة الشباب من أجل التغيير شباب السودان لتمويل مشاريع مجتمعية صغيرة تدعم الصحة النفسية في جميع أنحاء السودان — عملاً صغيراً في كل مرة.",
      heroCta1: "ادعم عملنا", heroCta2: "اعرف المزيد",

      aboutEyebrow: "من نحن", aboutTitle: "عن الحركة",
      aboutBody: "حركة الشباب من أجل التغيير هي حركة يقودها الشباب، وُلدت من إيمان بسيط: أن الشباب، عندما يعملون معاً على مستوى المجتمع، يستطيعون تمويل دعم حقيقي للصحة النفسية في السودان والحفاظ عليه. ننظّم مشاريع تمويل صغيرة ومحلية — بيع المخبوزات، مبادرات فنية، فعاليات جري مجتمعية — ونوجّه كل مساهمة نحو التوعية بالصحة النفسية والرعاية وشبكات الدعم في مختلف أنحاء البلاد.",
      aboutBody2: "نحن متطوعون وطلاب وفنانون ومنظّمون. لا ننتظر المؤسسات الكبرى لتتحرك — نبدأ من حيث نحن، بما نملك، وننمّي الأثر معاً.",

      visionTitle: "رؤيتنا",
      visionBody: "سودان يتمتع فيه كل شاب وشابة بإمكانية الوصول إلى دعم نفسي إنساني، وحيث يكون الأمل في المستقبل في متناول الجميع.",
      missionTitle: "رسالتنا",
      missionBody: "تعبئة الشباب حول مشاريع مجتمعية صغيرة ومستدامة تموّل مبادرات الصحة النفسية وحملات التوعية وشبكات الدعم بين الأقران في جميع أنحاء السودان.",

      whyEyebrow: "الحاجة", whyTitle: "لماذا تهم الصحة النفسية في السودان",
      whyBody: "وضعت سنوات من عدم الاستقرار والنزوح والصعوبات الاقتصادية عبئاً هائلاً على الصحة النفسية للمجتمعات السودانية — وخاصة الشباب. ومع ذلك تبقى الرعاية النفسية نادرة، وتمنع الوصمة الاجتماعية المرتبطة بطلب المساعدة كثيرين من السعي للحصول على الدعم أصلاً.",
      whyBody2: "توجد حركة الشباب من أجل التغيير لسد هذه الفجوة من القاعدة: بتمويل دعم يسهل الوصول إليه، وتشجيع حوارات صريحة، وتذكير كل شاب بأنه ليس وحيداً.",
      whyPoint1: "محدودية الوصول إلى خدمات صحة نفسية ميسورة التكلفة خارج المدن الكبرى",
      whyPoint2: "وصمة اجتماعية عميقة الجذور تُثني الشباب عن طلب المساعدة",
      whyPoint3: "العبء النفسي المتراكم الناتج عن النزوح والصعوبات الاقتصادية",
      whyPoint4: "نقص التمويل المستدام والنابع من المجتمع لبرامج الدعم",

      projectsEyebrow: "ماذا ننفّذ", projectsTitle: "مشاريعنا",
      projectsSub: "مشاريع صغيرة ومحلية وقابلة للتكرار — صُممت لتتمكن أي مجتمعية من تنفيذها.",
      project1Title: "أسواق خيرية للمخبوزات",
      project1Body: "أسواق خيرية في الأحياء تحوّل الطعام المشترك إلى تمويل مباشر لجلسات دعم نفسي محلية.",
      project2Title: "فن من أجل التوعية",
      project2Body: "معارض فنية يقودها الشباب لجمع التبرعات مع فتح حوارات صادقة حول الصحة النفسية.",
      project3Title: "حلقات الدعم الشبابي",
      project3Body: "جلسات جماعية يقودها الأقران، مموّلة بالكامل من مساهمات المجتمع، توفر مساحة آمنة للحديث.",
      project4Title: "مسيرات وجريات لجمع التبرعات",
      project4Body: "مسيرات مجتمعية تجمع الناس في حركة وتوعية وهدف مشترك.",

      donationsEyebrow: "أين تذهب التبرعات", donationsTitle: "كيف تساعد التبرعات",
      donationsSub: "كل مساهمة — مهما كانت صغيرة — تذهب مباشرة إلى دعم الصحة النفسية المجتمعية.",
      donation1: "تموّل جلسة دعم واحدة بين الأقران لشاب بحاجة إليها",
      donation2: "توفر مواد ورشة عمل لفعالية توعية مجتمعية",
      donation3: "تدعم يوماً كاملاً من زيارة توعية نفسية متنقلة",
      donation4: "تساعد على استمرار حلقة دعم شبابي شهرية لموسم كامل",

      impactEyebrow: "أثرنا", impactTitle: "After 4 years ",
      stat1: "متطوع شاب", stat2: "مشروع مجتمعي", stat3: "شخص استفاد من برامجنا", stat4: "مدن في أنحاء السودان",

      valuesEyebrow: "ما يوجّهنا", valuesTitle: "قيمنا الأساسية",
      value1Title: "التعاطف", value1Body: "نتقدّم بالتعاطف مع كل شخص نخدمه.",
      value2Title: "النزاهة", value2Body: "كل تبرع يُتابَع ويُستخدم تماماً كما وُعد.",
      value3Title: "المجتمع", value3Body: "ينمو التغيير أسرع حين يحمله مجتمع بأكمله.",
      value4Title: "الأمل", value4Body: "نتمسك بالأمل، ونساعد الآخرين على التمسك به أيضاً.",
      value5Title: "الصمود", value5Body: "نواصل البناء، مشروعاً تلو الآخر، مهما واجهنا من عقبات.",

      faqEyebrow: "أسئلة", faqTitle: "الأسئلة الشائعة",
      faq1Q: "أين يذهب تبرعي بالضبط؟",
      faq1A: "100٪ من التبرعات العامة تُوجَّه إلى المشاريع المجتمعية وبرامج الصحة النفسية النشطة. وننشر تفصيلاً بسيطاً لكل مشروع ننفذه.",
      faq2Q: "هل يمكنني التطوع دون التبرع بالمال؟",
      faq2A: "بالتأكيد. الوقت والمهارات والتنظيم المحلي لا تقل قيمة عن التمويل. تواصل معنا عبر نموذج الاتصال للبدء.",
      faq3Q: "هل تنشط الحركة في الخرطوم فقط؟",
      faq3A: "لا. رغم أننا بدأنا في الخرطوم، تعمل مشاريعنا المجتمعية الآن في عدة مدن، بقيادة متطوعين شباب محليين.",
      faq4Q: "كيف أبدأ مشروعاً في مجتمعي؟",
      faq4A: "راسلنا عبر نموذج الاتصال أدناه مع ذكر مدينتك وفكرتك — سيرشدك فريقنا خلال دليل المشاريع البسيط لدينا.",

      contactEyebrow: "تواصل معنا", contactTitle: "ابقَ على تواصل",
      contactSub: "لديك سؤال أو فكرة، أو تريد إحضار الحركة إلى مجتمعك؟ يسعدنا أن نسمع منك.",
      contactEmailLabel: "البريد الإلكتروني", contactPhoneLabel: "الهاتف",
      contactLocationLabel: "الموقع", contactLocationValue: "الخرطوم، السودان",
      contactInstaLabel: "إنستغرام",

      formNameLabel: "الاسم الكامل", formNameError: "الرجاء إدخال اسمك.",
      formEmailLabel: "البريد الإلكتروني", formEmailError: "الرجاء إدخال بريد إلكتروني صحيح.",
      formMessageLabel: "الرسالة", formMessageError: "الرجاء إدخال رسالة.",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكراً لك — تم استلام رسالتك. سنتواصل معك قريباً.",

      footerDesc: "حركة شبابية تجمع التبرعات عبر مشاريع مجتمعية صغيرة لدعم مبادرات الصحة النفسية في السودان.",
      footerLinksTitle: "روابط سريعة", footerContactTitle: "تواصل معنا",
      footerNewsletterTitle: "ابقَ على اطلاع", footerNewsletterSub: "احصل على تحديثات دورية حول مشاريعنا وأثرنا.",
      footerNewsletterLabel: "البريد الإلكتروني", footerNewsletterPlaceholder: "بريدك الإلكتروني",
      footerLangSwitch: "English"
    }
  };

  const STORAGE_LANG = 'ymc-lang';
  const STORAGE_THEME = 'ymc-theme';

  /* ------------------------------------------------------------------------
     2. Language switching
     ------------------------------------------------------------------------ */
  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    const otherLangLabel = lang === 'ar' ? 'English' : 'العربية';
    const langToggleLabel = document.getElementById('langToggleLabel');
    if (langToggleLabel) langToggleLabel.textContent = otherLangLabel;

    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) { /* storage unavailable */ }
  }

  function toggleLanguage() {
    const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    applyLanguage(current === 'en' ? 'ar' : 'en');
  }

  /* ------------------------------------------------------------------------
     3. Theme (dark / light) switching
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sun = document.getElementById('themeIconSun');
    const moon = document.getElementById('themeIconMoon');
    if (sun && moon) {
      sun.hidden = theme === 'dark';
      moon.hidden = theme !== 'dark';
    }
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) { /* storage unavailable */ }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'light' ? 'dark' : 'light');
  }

  /* ------------------------------------------------------------------------
     4. Sticky header shadow on scroll
     ------------------------------------------------------------------------ */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     5. Mobile navigation
     ------------------------------------------------------------------------ */
  function initMobileNav() {
    const btn = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('mainNav');
    if (!btn || !nav) return;

    const closeNav = () => {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ------------------------------------------------------------------------
     6. Scroll reveal animations (IntersectionObserver)
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || items.length === 0) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     7. Animated counters
     ------------------------------------------------------------------------ */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      stats.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    stats.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     8. FAQ accordion
     ------------------------------------------------------------------------ */
  function initAccordion() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(trigger => {
      const panel = trigger.nextElementSibling;
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all other panels for a clean single-open accordion
        triggers.forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            t.nextElementSibling.style.maxHeight = null;
          }
        });

        trigger.setAttribute('aria-expanded', String(!isOpen));
        panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. Contact form validation (front-end only placeholder)
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nameInput = form.querySelector('#cf-name');
      const emailInput = form.querySelector('#cf-email');
      const messageInput = form.querySelector('#cf-message');

      const checks = [
        [nameInput, nameInput.value.trim().length > 0],
        [emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())],
        [messageInput, messageInput.value.trim().length > 0]
      ];

      checks.forEach(([input, isValid]) => {
        const row = input.closest('.form-row');
        row.classList.toggle('invalid', !isValid);
        if (!isValid) valid = false;
      });

      if (!valid) return;

      // Placeholder: connect to a backend / form service (e.g. Formspree) here.
      if (successMsg) successMsg.classList.add('show');
      form.reset();
      setTimeout(() => successMsg && successMsg.classList.remove('show'), 6000);
    });

    // Clear invalid state as the user types
    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => field.closest('.form-row').classList.remove('invalid'));
    });
  }

  function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Placeholder: connect to a newsletter provider (Mailchimp, etc.) here.
      form.reset();
    });
  }

  /* ------------------------------------------------------------------------
     10. Back to top button
     ------------------------------------------------------------------------ */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     11. Init
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    let savedLang = 'en';
    let savedTheme = 'light';
    try { savedLang = localStorage.getItem(STORAGE_LANG) || 'en'; } catch (e) { /* noop */ }
    try { savedTheme = localStorage.getItem(STORAGE_THEME) || 'light'; } catch (e) { /* noop */ }

    applyLanguage(savedLang);
    applyTheme(savedTheme);

    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    document.getElementById('langToggleFooter').addEventListener('click', toggleLanguage);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
    initCounters();
    initAccordion();
    initContactForm();
    initNewsletterForm();
    initBackToTop();
  });
})();
 /* ============================================================
   WELCOME / SECURITY MODAL
   ============================================================ */
function initWelcomeModal() {
  const STORAGE_KEY = 'pathways_welcome_accepted';
  const overlay = document.getElementById('welcomeModalOverlay');
  const acceptBtn = document.getElementById('welcomeModalAccept');
  const mainContent = document.getElementById('main-content');
  const header = document.querySelector('.site-header');
  const footer = document.querySelector('.site-footer');
  if (!overlay || !acceptBtn) return;

  const alreadyAccepted = localStorage.getItem(STORAGE_KEY) === 'true';
  if (alreadyAccepted) {
    overlay.remove();
    return;
  }

  // Show modal, lock the rest of the page
  overlay.hidden = false;
  document.body.classList.add('welcome-modal-open');
  mainContent?.setAttribute('aria-hidden', 'true');
  header?.setAttribute('aria-hidden', 'true');
  footer?.setAttribute('aria-hidden', 'true');

  requestAnimationFrame(() => overlay.classList.add('is-visible'));

  // Focus the button for accessibility
  acceptBtn.focus();

  // Simple focus trap: keep focus inside the modal
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      acceptBtn.focus();
    }
    // Intentionally do NOT close on Escape — user must accept
  });

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    overlay.classList.remove('is-visible');
    document.body.classList.remove('welcome-modal-open');
    mainContent?.removeAttribute('aria-hidden');
    header?.removeAttribute('aria-hidden');
    footer?.removeAttribute('aria-hidden');

    overlay.addEventListener('transitionend', () => {
      overlay.hidden = true;
      overlay.remove();
    }, { once: true });
  });
}
   console.log(`⚠ Security Warning ⚠

    Don't copy any code you don't understand.
    
    Malicious code might:
    • Steal accounts and data
    • Hijack sessions
    • Send requests without your knowledge
    • Plant harmful files or scripts
    
    Read the code before running it.
    Think before you paste.
    `)
    console.log(`
    © 13/06/2026 KIN_PROJECTS. All rights reserved.`)
