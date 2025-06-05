import React, { useRef } from 'react';
import './Home.css';
import './SocialLinks.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';
import heroImage from './aiheader.jpg'; // התאמה לשם הקובץ והתיקייה
import AnimationDemo from './AnimationDemo';
import { Link } from 'react-router-dom';
const MaldivesLanding: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_r17aqda',
        'template_claq6dt',
        form.current,
        'blTIPz66tRfQ9qRwz'
      )
      .then(
        () => {
          alert('הטופס נשלח בהצלחה!');
          form.current?.reset();
        },
        (error) => {
          console.error('שגיאה בשליחת הטופס:', error.text);
        }
      );
  };

  return (
    <div className="landing-container">
      <div className="hero-section">
        <img
          src={heroImage}
          alt="Maldives Beach"
          className="hero-bg"
        />

        <div className="hero-content">
          <h1>ברוכים הבאים לו.ג.צ חדשנות דיגיטלית בע״מ</h1>
          <p>עולם הטכנולוגיה החדשני ביותר</p>
          <form className="form-box" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="שם פרטי"
              pattern="^[A-Za-zא-ת\s]{4,}$"
              title="הכנס שם תקין בעברית או באנגלית (לפחות 4 אותיות)"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="אימייל"
              title="הכנס כתובת אימייל תקינה"
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="טלפון"
              pattern="^[0-9]{7,15}$"
              title="הכנס מספר טלפון חוקי (ללא מקפים או תווים מיוחדים)"
              required
            />

            <button type="submit">בוא נבנה</button>
          </form>
        </div>
      </div>

<div className="icon-menu">
  <ul>
    <li style={{ "--i": "#3b5998", "--j": "#8b9dc3" } as React.CSSProperties}>
      <a href="https://www.facebook.com/people/Wjs-Digital-Innovations-Ltd/61575950244976/" target="_blank" rel="noopener noreferrer">
        <span className="icon"><i className="fab fa-facebook-f icon"></i></span>
        <span className="title">Facebook</span>
      </a>
    </li>

    <li style={{ "--i": "#dd4b39", "--j": "#c23321" } as React.CSSProperties}>
      <a href="https://g.co/kgs/AYR3y5J" target="_blank" rel="noopener noreferrer">
        <span className="icon"><i className="fab fa-google icon"></i></span>
        <span className="title">Google</span>
      </a>
    </li>

    <li style={{ "--i": "#e4405f", "--j": "#ff6ec4" } as React.CSSProperties}>
      <a href="https://www.instagram.com/p/DI0-7T1tVJ7/" target="_blank" rel="noopener noreferrer">
        <span className="icon"><i className="fab fa-instagram icon"></i></span>
        <span className="title">Instagram</span>
      </a>
    </li>

    <li style={{ "--i": "#0077b5", "--j": "#00a0dc" } as React.CSSProperties}>
      <a href="https://il.linkedin.com/company/wjs-digital-innovations" target="_blank" rel="noopener noreferrer">
        <span className="icon"><i className="fab fa-linkedin-in icon"></i></span>
        <span className="title">LinkedIn</span>
      </a>
    </li>
  </ul>
</div>
<AnimationDemo/>
<section className="destinations-section">
  <h2>המוצרים שלנו</h2>
  <p>דפי נחיתה, אתרי אינטרנט, חנויות E-commerce, פיתוח מערכות CRM מותאמות לעסקים</p>

  <div className="cards-row">
    {/* דף נחיתה */}
    <div className="destination-card border-anim">
      <img
        src="https://designplusmore.co.il/wp-content/uploads/liordekimhi1-1024x683.jpg"
        alt="עיצוב דף נחיתה"
      />
      <h3>דפי נחיתה</h3>
      <p>מסר חד ועיצוב ממוקד, הנעה לפעולה וסגירת עסקה.</p>
      <Link to="/LandingPages">
        <button className="ecommerce-button">לפרטים</button>
      </Link>
    </div>

    {/* אתרי אינטרנט */}
    <div className="destination-card border-anim">
      <img
        src="https://webma.co.il/wp-content/uploads/2023/01/%D7%91%D7%A0%D7%99%D7%99%D7%AA-%D7%90%D7%AA%D7%A8%D7%99%D7%9D-1.jpg"
        alt="פיתוח אתרי אינטרנט"
      />
      <h3>אתרי אינטרנט</h3>
      <p>נוכחות מרשימה, מותאם אישית, מוכן לקידום.</p>
      <Link to="/WebsiteDevelopment">
        <button className="ecommerce-button">לפרטים</button>
      </Link>
    </div>

    {/* חנות דיגיטלית */}
    <div className="destination-card border-anim">
      <img
        src="https://www.ekd.co.il/wp-content/uploads/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%A9%D7%9C-%D7%91%D7%A0%D7%99%D7%99%D7%AA-%D7%97%D7%A0%D7%95%D7%AA-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99%D7%AA.jpg"
        alt="בניית חנות דיגיטלית"
      />
      <h3>חנות דיגיטלית</h3>
      <p>מכירה ישירה, סל קניות, תשלום מהיר.</p>
      <Link to="/ecommerce">
        <button className="ecommerce-button">לפרטים</button>
      </Link>
    </div>
  </div>
</section>


      <section className="testimonials-section">
        <h2>אנחנו לא רק מפרסמים. אנחנו מדייקים כל חלק במכונה.</h2>
        <p>שמים את התקציב איפה שהוא באמת עובד – עם חיבורים חכמים ותוצאה ברורה.</p>
        <p>הקמפיינים שלנו מתוזמנים, ממוקדים, ומבוססי נתונים – בדיוק איפה  שהקהל שלך נמצא.</p>
      </section>


      <section className="faq-section">
        <h2>שאלות נפוצות</h2>
        <div className="faq-box">
          <h4 className="faq-hover">מה אתם מפתחים בפועל?</h4>
          <p>אנחנו בונים אתרים, אפליקציות, מערכות ניהול, חנויות אונליין ואוטומציות מותאמות אישית לעסקים.</p>
          <h4 className="faq-hover">כמה זמן לוקח לפתח פרויקט?</h4>
          <p>תלוי בגודל ובמורכבות – אתר תדמיתי יכול לקחת שבועיים, מערכת מורכבת כמה חודשים.</p>
          <h4 className="faq-hover">האם אפשר לחבר את המערכת שלכם למערכות אחרות?</h4>
          <p>בוודאי. אנחנו מתמחים באינטגרציות עם מערכות CRM, הנהלת חשבונות, סליקה, ועוד.</p>
        </div>
      </section>

      <footer className="footer-section">

<div className="social-icons dark-bg">
  <ul>
    <li>
      <a href="https://www.facebook.com/people/Wjs-Digital-Innovations-Ltd/61575950244976/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f icon"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/p/DI0-7T1tVJ7/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram icon"></i>
      </a>
    </li>
    <li>
      <a href="https://g.co/kgs/AYR3y5J" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-google-plus-g icon"></i>
      </a>
    </li>
  </ul>
</div>
      </footer>
    </div>
  );
};

export default MaldivesLanding;
