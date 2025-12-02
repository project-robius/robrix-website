class MatrixParticles {
  constructor() {
    this.canvas = document.getElementById('particles-canvas');
    if (!this.canvas) {
      console.error('Particles canvas not found!');
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Particles context not found!');
      return;
    }

    // Performance optimizations
    this.mouse = { x: -1000, y: -1000 };
    this.particles = [];
    this.animationId = null;
    this.isDarkMode = document.documentElement.classList.contains('dark');
    this.lastFrameTime = 0;
    this.frameInterval = 1000 / 60; // Cap at 60fps
    this.connectionDistance = 150;
    this.mouseDistance = 100;
    this.particleCount = this.isMobile() ? 40 : 80; // Reduce on mobile

    console.log('Particles initialized successfully');
    this.init();
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  init() {
    this.setupCanvas();
    this.createParticles();
    this.setupEventListeners();
    this.animate();

    // Check for dark mode
    this.updateTheme();
    new MutationObserver(() => this.updateTheme()).observe(
      document.documentElement,
      { attributes: true, attributeFilter: ['class'] }
    );
  }

  updateTheme() {
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }

  setupCanvas() {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle(i));
    }
  }

  createParticle(id) {
    return {
      id,
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      connections: [],
      opacity: Math.random() * 0.5 + 0.5,
      hue: Math.random() * 60 + 340 // Orange to purple range
    };
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
    window.addEventListener('resize', () => this.setupCanvas());
  }

  updateParticles() {
    for (const particle of this.particles) {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off walls
      if (particle.x < particle.radius || particle.x > this.canvas.width - particle.radius) {
        particle.vx *= -1;
      }
      if (particle.y < particle.radius || particle.y > this.canvas.height - particle.radius) {
        particle.vy *= -1;
      }

      // Keep particles in bounds
      particle.x = Math.max(particle.radius, Math.min(this.canvas.width - particle.radius, particle.x));
      particle.y = Math.max(particle.radius, Math.min(this.canvas.height - particle.radius, particle.y));

      // Mouse interaction
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.mouseDistance) {
        const force = (1 - distance / this.mouseDistance) * 0.03;
        particle.vx -= (dx / distance) * force;
        particle.vy -= (dy / distance) * force;
      }
    }
  }

  drawParticles() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update particle positions
    this.updateParticles();

    // Find connections
    this.findConnections();

    // Draw connections
    this.drawConnections();

    // Draw particles
    this.drawParticleNodes();
  }

  findConnections() {
    // Clear existing connections
    for (const particle of this.particles) {
      particle.connections = [];
    }

    // Find new connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          p1.connections.push(j);
          p2.connections.push(i);
        }
      }
    }
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      for (const connectionId of particle.connections) {
        if (connectionId > i) { // Draw each connection only once
          const connected = this.particles[connectionId];
          const dx = particle.x - connected.x;
          const dy = particle.y - connected.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = (1 - distance / this.connectionDistance) * 0.15;

          // Create gradient for connection
          const gradient = this.ctx.createLinearGradient(
            particle.x, particle.y, connected.x, connected.y
          );

          if (this.isDarkMode) {
            gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${connected.hue}, 70%, 50%, ${opacity})`);
          } else {
            gradient.addColorStop(0, `hsla(${particle.hue}, 60%, 40%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${connected.hue}, 60%, 40%, ${opacity})`);
          }

          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(connected.x, connected.y);
          this.ctx.stroke();
        }
      }
    }
  }

  drawParticleNodes() {
    for (const particle of this.particles) {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Make particles glow when near mouse
      let particleRadius = particle.radius;
      let particleOpacity = particle.opacity;

      if (distance < this.mouseDistance) {
        const glowFactor = 1 - distance / this.mouseDistance;
        particleRadius = particle.radius * (1 + glowFactor * 0.5);
        particleOpacity = particle.opacity * (1 + glowFactor * 0.5);
      }

      // Create radial gradient for particle
      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particleRadius * 3
      );

      if (this.isDarkMode) {
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${particleOpacity})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue}, 70%, 50%, ${particleOpacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 40%, 0)`);
      } else {
        gradient.addColorStop(0, `hsla(${particle.hue}, 60%, 50%, ${particleOpacity})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue}, 60%, 40%, ${particleOpacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 30%, 0)`);
      }

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particleRadius * 3, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw particle core
      this.ctx.fillStyle = this.isDarkMode
        ? `hsla(${particle.hue}, 70%, 80%, ${particleOpacity})`
        : `hsla(${particle.hue}, 60%, 70%, ${particleOpacity})`;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  animate(currentTime) {
    // Frame rate limiting for performance
    if (currentTime - this.lastFrameTime < this.frameInterval) {
      this.animationId = requestAnimationFrame((time) => this.animate(time));
      return;
    }

    this.lastFrameTime = currentTime;
    this.drawParticles();
    this.animationId = requestAnimationFrame((time) => this.animate(time));
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', () => this.setupCanvas());
  }
}

// Initialize particles when DOM is ready
function initializeParticles() {
  console.log('Attempting to initialize particles...');
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    console.log('Canvas found, initializing particles...');
    new MatrixParticles();
  } else {
    console.error('Canvas not found, retrying in 100ms...');
    setTimeout(initializeParticles, 100);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeParticles);
} else {
  initializeParticles();
}