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
        'service_ny46n8e',
        'template_2wb07w2',
        form.current,
        'VssIwsLXI8pDmqUPN'
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
            <span className="icon"><i className="fab fa-facebook-f icon"></i></span>
            <span className="title">Facebook</span>
          </li>
          <li style={{ "--i": "#1da1f2", "--j": "#0d8ddb" } as React.CSSProperties}>
            <span className="icon"><i className="fab fa-twitter icon"></i></span>
            <span className="title">Twitter</span>
          </li>
          <li style={{ "--i": "#dd4b39", "--j": "#c23321" } as React.CSSProperties}>
            <span className="icon"><i className="fab fa-google icon"></i></span>
            <span className="title">Google</span>
          </li>
          <li style={{ "--i": "#e4405f", "--j": "#ff6ec4" } as React.CSSProperties}>
            <span className="icon"><i className="fab fa-instagram icon"></i></span>
            <span className="title">Instagram</span>
          </li>
          <li style={{ "--i": "#0077b5", "--j": "#00a0dc" } as React.CSSProperties}>
            <span className="icon"><i className="fab fa-linkedin-in icon"></i></span>
            <span className="title">LinkedIn</span>
          </li>
        </ul>
      </div>
<AnimationDemo/>
      <section className="destinations-section">
        <h2>המוצרים שלנו</h2>
        <p>דפי נחיתה, אתרי אינטרנט, חנויות e commerce , פיתוח מערכות crm מותאמות לעסקים</p>

        <div className="cards-row">
          <div className="destination-card border-anim">
            <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="Maldives Resort" />
            <h3>דפי נחיתה</h3>
            <p>מסר חד ועיצוב ממוקד, הנעה לפעולה וסגירת עסקה </p>
        <Link to="/ecommerce">
          <button className="ecommerce-button">לפרטים</button>
            </Link>          </div>

          <div className="destination-card border-anim">
            <img src="https://dmacmedia.com/ie/site/uploads/sys_articles/2748/3d-render-social-media-icon-collection.webp" alt="Snorkeling Maldives" />
            <h3>אתרי אינטרנט </h3>
            <p>נוכחות מרשימה, מותאם אישית, מוכן לקידום.</p>
        <Link to="/WebsiteDevelopment">
          <button className="ecommerce-button">לפרטים</button>
            </Link>          </div>

          <div className="destination-card border-anim">
            <img src="https://projexcrm.co.uk/wp-content/uploads/2023/02/CRM-11.webp" alt="Maldives Sunset" />
            <h3>חנויות דיגיטלית</h3>
            <p>מכירה ישירה, סל קניות, תשלום מהיר</p>
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
        <form className="form-box">
          <input type="text" placeholder="שם פרטי" />
          <input type="email" placeholder="אימייל" />
          <input type="tel" placeholder="טלפון" />
          <button type="submit">הרשמה לחופשה הבאה שלי!</button>
        </form>
        <div className="social-icons dark-bg">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f icon"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter icon"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
          </ul>
        </div>
        <div className="footer-note">
          This Landing Page Was Developed By Wjs Digital Innovations Ltd 
        </div>
      </footer>
    </div>
  );
};

export default MaldivesLanding;
