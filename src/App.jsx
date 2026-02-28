import { useEffect, useState } from "react";
import rocketImage from "./assets/rocket.jpeg";
import robotImage from "./assets/robot.jpeg";
import datacenterImage from "./assets/datakeskus.jpg";
import perpetualImage from "./assets/perpetual.png";
import reportPdf from "./assets/report.pdf";

const TIME_ZONE = "Europe/Helsinki";
const TARGET_WEEKDAY = 1; // Monday
const TARGET_HOUR = 15;

const formatUnits = (value) => String(value).padStart(2, "0");

const getHelsinkiNow = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: TIME_ZONE }));

const getNextMondayTarget = (now) => {
  const target = new Date(now);
  target.setHours(TARGET_HOUR, 0, 0, 0);
  const addDays = (TARGET_WEEKDAY - target.getDay() + 7) % 7;
  target.setDate(target.getDate() + addDays);
  if (addDays === 0 && now >= target) target.setDate(target.getDate() + 7);
  return target;
};

const getCountdown = () => {
  const now = getHelsinkiNow();
  const target = getNextMondayTarget(now);
  const total = Math.max(0, target - now);
  const seconds = Math.floor(total / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { total, days, hours, minutes, secs };
};

export default function App() {
  const [countdown, setCountdown] = useState(() => getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">
            <span className="logo-mark">AI</span>
            <span className="logo-text">Aito Infinity</span>
          </div>
          <div className="nav-links">
            <a href="#applications">Applications</a>
            <a href="#breakthrough">Breakthrough</a>
            <a href="#timeline">Timeline</a>
            <button className="ghost">Request Brief</button>
          </div>
        </nav>

        <div className="hero-split">
          <div className="hero-copy">
            <p className="eyebrow">Classified Research Initiative · Zero-Decay Energy Loop</p>
            <h1>The perpetual motion machine engineered for a post-scarcity era.</h1>
            <p className="subhead">
              Aito Infinity is a revolutionary company developing a contained kinetic lattice
              that sustains motion without external fuel, unlocking propulsion for deep
              space, resilient robotics, and carbon-free AI data center power.
              Rigorous testing is underway with independent third-party validation teams.
            </p>
            <div className="hero-actions">
              <div className="hero-actions-left">
                <div className="hero-stats">
                  <div>
                    <span className="stat-number">99.997%</span>
                    <span className="stat-label">Loop Stability</span>
                  </div>
                  <div>
                    <span className="stat-number">0.0%</span>
                    <span className="stat-label">Thermal Drift</span>
                  </div>
                </div>
                <div className="cta-row">
                  <a className="primary" href={reportPdf} download>
                    Download Report
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-media-frame">
              <img src={perpetualImage} alt="Aito Infinity perpetual motion core" />
            </div>
            <div className="hero-panel countdown-panel">
              <div className="panel-glow" />
              <div className="countdown">
                <p className="countdown-label">Next report will be released in</p>
                <div className="countdown-grid">
                  <div>
                    <span>{formatUnits(countdown.days)}</span>
                    <small>Days</small>
                  </div>
                  <div>
                    <span>{formatUnits(countdown.hours)}</span>
                    <small>Hours</small>
                  </div>
                  <div>
                    <span>{formatUnits(countdown.minutes)}</span>
                    <small>Minutes</small>
                  </div>
                  <div>
                    <span>{formatUnits(countdown.secs)}</span>
                    <small>Seconds</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="applications" className="section">
          <div className="section-header">
            <h2>Applications</h2>
            <p>
              Perpetual motion power unlocks a new category of mission profiles where
              energy is no longer the limiting factor.
            </p>
          </div>
          <div className="grid three">
            <article className="card image-card">
              <div className="image-wrap">
                <img src={robotImage} alt="Autonomous robotics platform" loading="lazy" />
              </div>
              <h3>Robotic Autonomy</h3>
              <p>
                Persistent industrial robotics that operate without recharge cycles,
                enabling remote construction in extreme environments.
              </p>
            </article>
            <article className="card image-card">
              <div className="image-wrap">
                <img src={rocketImage} alt="Deep space propulsion craft" loading="lazy" />
              </div>
              <h3>Deep Space Propulsion</h3>
              <p>
                Continuous thrust windows, autonomous asteroid positioning, and orbital
                reshaping systems for long-range exploration.
              </p>
            </article>
            <article className="card image-card">
              <div className="image-wrap">
                <img src={datacenterImage} alt="AI data center power corridor" loading="lazy" />
              </div>
              <h3>AI Data Centers</h3>
              <p>
                Zero-carbon power for high-density AI compute clusters with active
                thermal balance and grid independence.
              </p>
            </article>
          </div>
        </section>

        <section id="breakthrough" className="section">
          <div className="grid two">
            <div className="card">
              <h3>Core Architecture</h3>
              <p>
                Adaptive metamaterials align with a harmonic control stack, keeping
                torque balanced across 12 counter-rotating nodes and preventing drag
                collapse.
              </p>
              <div className="tag-row">
                <span>Metamaterials</span>
                <span>Field Control</span>
                <span>Failsafe</span>
              </div>
            </div>
            <div className="card">
              <h3>Power Export</h3>
              <p>
                Inductive couplers convert rotational momentum into electrical flow,
                delivering steady megawatt-class output with zero carbon footprint.
              </p>
              <div className="tag-row">
                <span>99.99% Efficiency</span>
                <span>Closed Loop</span>
                <span>Silent</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="grid two">
            <div className="card highlight">
              <h3>Operational Metrics</h3>
              <div className="metric-list">
                <div>
                  <span>Output</span>
                  <strong>1.8 MW continuous</strong>
                </div>
                <div>
                  <span>Uptime</span>
                  <strong>99.999% projected</strong>
                </div>
                <div>
                  <span>Footprint</span>
                  <strong>12m x 8m module</strong>
                </div>
                <div>
                  <span>Cooling</span>
                  <strong>Closed-loop cryogenic</strong>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Ethical Safeguards</h3>
              <p>
                Aito Infinity operates under a transparent governance model with global
                energy stewardship audits, export controls, and open scientific review
                of safety protocols.
              </p>
            </div>
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="section-header">
            <h2>Program Timeline</h2>
            <p>
              A phased release plan to validate stability, scale manufacturing, and
              integrate with early strategic partners.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>Phase 01</span>
              <h4>Containment Validation</h4>
              <p>High-frequency resonance trials, safety verification, and field tuning.</p>
            </div>
            <div className="timeline-item">
              <span>Phase 02</span>
              <h4>Subsystem Coupling</h4>
              <p>Integrate power export coils with AI-managed stabilization loops.</p>
            </div>
            <div className="timeline-item">
              <span>Phase 03</span>
              <h4>Partner Deployments</h4>
              <p>Pilot systems for space agencies, robotics labs, and AI data centers.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Aito Infinity</strong>
          <p>Revolutionary energy systems company.</p>
        </div>
        <div className="footer-links">
          <a href="#">Security</a>
          <a href="#">Press</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </div>
  );
}
