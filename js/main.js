/* ============================================
   11SI — Main JavaScript
   Globe Animation, Text Cycling, Scroll Effects
   ============================================ */

(function () {
  'use strict';

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (navMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ---- Hero Text Cycling ----
  var heroLines = [
    { line1: 'Assess with', line2: 'Clarity.' },
    { line1: 'Implement with', line2: 'Confidence.' },
    { line1: 'Manage', line2: 'Seamlessly.' },
    { line1: 'Defend', line2: 'Proactively.' }
  ];
  var heroIndex = 0;
  var heroLine1 = document.getElementById('heroLine1');
  var heroLine2 = document.getElementById('heroLine2');

  function cycleHeroText() {
    var current = heroLines[heroIndex];
    heroLine1.style.opacity = '0';
    heroLine2.style.opacity = '0';
    heroLine1.style.transform = 'translateY(16px)';
    heroLine2.style.transform = 'translateY(16px)';

    setTimeout(function () {
      heroLine1.textContent = current.line1;
      heroLine2.textContent = current.line2;
      heroLine1.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      heroLine2.style.transition = 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s';
      heroLine1.style.opacity = '1';
      heroLine2.style.opacity = '1';
      heroLine1.style.transform = 'translateY(0)';
      heroLine2.style.transform = 'translateY(0)';
    }, 400);

    heroIndex = (heroIndex + 1) % heroLines.length;
  }

  if (heroLine1 && heroLine2) {
    cycleHeroText();
    setInterval(cycleHeroText, 3500);
  }

  // ---- Scroll Reveal (Intersection Observer) ----
  var revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ---- Counter Animation ----
  var statValues = document.querySelectorAll('.stat-value[data-target]');
  if ('IntersectionObserver' in window && statValues.length) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // ---- SOC Threat Feed Animation ----
  var threatFeed = document.getElementById('threatFeed');
  if (threatFeed) {
    var threats = [
      { text: 'Brute Force · 14.2k attempts blocked', level: 'threat-high' },
      { text: 'C2 Callback Blocked · APAC', level: 'threat-critical' },
      { text: 'DLP Trigger · 3 files quarantined', level: 'threat-medium' },
      { text: 'Suspicious Login · EU-West', level: 'threat-high' },
      { text: 'Phishing Email Blocked · NA-East', level: 'threat-critical' },
      { text: 'Scan Complete · 0 vulnerabilities', level: 'threat-low' },
      { text: 'Patched · CVE-2025-1847', level: 'threat-low' },
      { text: 'Lateral Movement Detected · Contained', level: 'threat-critical' },
      { text: 'Ransomware Payload Blocked', level: 'threat-critical' },
      { text: 'New Device Enrolled · Verified', level: 'threat-low' },
      { text: 'DNS Tunnel Attempt Blocked', level: 'threat-high' },
      { text: 'Privilege Escalation · Blocked', level: 'threat-critical' },
      { text: 'Endpoint Isolation · Completed', level: 'threat-medium' },
      { text: 'Firewall Rule Updated · Auto', level: 'threat-low' },
      { text: 'MFA Challenge · 3 failures · APAC', level: 'threat-high' },
      { text: 'Cloud Config Drift Detected', level: 'threat-medium' }
    ];

    var threatIndex = 6;

    setInterval(function () {
      var newThreat = threats[threatIndex % threats.length];
      var div = document.createElement('div');
      div.className = 'threat-item ' + newThreat.level;
      div.textContent = newThreat.text;
      div.style.opacity = '0';
      div.style.transform = 'translateX(-8px)';

      threatFeed.insertBefore(div, threatFeed.firstChild);

      requestAnimationFrame(function () {
        div.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        div.style.opacity = '1';
        div.style.transform = 'translateX(0)';
      });

      if (threatFeed.children.length > 8) {
        var last = threatFeed.lastElementChild;
        last.style.opacity = '0';
        setTimeout(function () { if (last.parentNode) last.parentNode.removeChild(last); }, 300);
      }

      threatIndex++;
    }, 3000);
  }

  // ---- Partner Category Pills ----
  var catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      catPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Globe Animation (Canvas) ----
  var canvas = document.getElementById('globeCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var width, height, centerX, centerY, radius;
    var points = [];
    var numPoints = 200;
    var rotation = 0;
    var animFrameId;

    function resizeCanvas() {
      var dpr = window.devicePixelRatio || 1;
      var rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(width, height) * 0.32;
    }

    function generatePoints() {
      points = [];
      for (var i = 0; i < numPoints; i++) {
        var phi = Math.acos(2 * Math.random() - 1);
        var theta = 2 * Math.PI * Math.random();
        points.push({
          phi: phi,
          theta: theta,
          size: 1 + Math.random() * 1.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02
        });
      }
    }

    function projectPoint(phi, theta, rot) {
      var x = Math.sin(phi) * Math.cos(theta + rot);
      var y = Math.cos(phi);
      var z = Math.sin(phi) * Math.sin(theta + rot);
      return { x: centerX + x * radius, y: centerY + y * radius, z: z, depth: (z + 1) / 2 };
    }

    function drawGlobe() {
      ctx.clearRect(0, 0, width, height);

      // Globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(57, 180, 229, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Latitude lines
      for (var lat = 1; lat < 6; lat++) {
        var latAngle = (lat / 6) * Math.PI;
        var latRadius = Math.sin(latAngle) * radius;
        var latY = centerY + Math.cos(latAngle) * radius;
        ctx.beginPath();
        ctx.ellipse(centerX, latY, latRadius, latRadius * 0.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(57, 180, 229, 0.05)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Longitude lines
      for (var lon = 0; lon < 6; lon++) {
        var lonAngle = (lon / 6) * Math.PI + rotation;
        ctx.beginPath();
        for (var t = 0; t <= Math.PI * 2; t += 0.05) {
          var lx = Math.sin(t) * Math.cos(lonAngle) * radius;
          var ly = Math.cos(t) * radius;
          var lz = Math.sin(t) * Math.sin(lonAngle);
          if (lz < -0.1) continue;
          var px = centerX + lx;
          var py = centerY + ly;
          if (t === 0 || lz < 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.strokeStyle = 'rgba(57, 180, 229, 0.05)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Points
      var projected = [];
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var proj = projectPoint(p.phi, p.theta, rotation);
        p.pulse += p.pulseSpeed;
        proj.size = p.size;
        proj.pulse = p.pulse;
        projected.push(proj);
      }

      // Sort by depth for correct rendering
      projected.sort(function (a, b) { return a.z - b.z; });

      // Draw connections between nearby front-facing points
      ctx.strokeStyle = 'rgba(57, 180, 229, 0.06)';
      ctx.lineWidth = 0.5;
      for (var i = 0; i < projected.length; i++) {
        if (projected[i].z < 0) continue;
        for (var j = i + 1; j < projected.length; j++) {
          if (projected[j].z < 0) continue;
          var dx = projected[i].x - projected[j].x;
          var dy = projected[i].y - projected[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius * 0.25) {
            var alpha = (1 - dist / (radius * 0.25)) * 0.12 * projected[i].depth * projected[j].depth;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = 'rgba(57, 180, 229, ' + alpha + ')';
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (var i = 0; i < projected.length; i++) {
        var pt = projected[i];
        if (pt.z < -0.2) continue;
        var alpha = Math.max(0.08, pt.depth * 0.7);
        var pulseAlpha = 0.3 + 0.3 * Math.sin(pt.pulse);
        var dotSize = pt.size * (0.5 + pt.depth * 0.8);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(57, 180, 229, ' + (alpha * pulseAlpha) + ')';
        ctx.fill();

        if (pt.depth > 0.7 && pt.size > 2) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, dotSize + 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(57, 180, 229, ' + (alpha * 0.1) + ')';
          ctx.fill();
        }
      }

      rotation += 0.003;
      animFrameId = requestAnimationFrame(drawGlobe);
    }

    // Pause when not visible
    var globeObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        if (!animFrameId) drawGlobe();
      } else {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }
      }
    }, { threshold: 0.1 });

    resizeCanvas();
    generatePoints();
    globeObserver.observe(canvas);

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resizeCanvas();
      }, 200);
    });
  }

})();
