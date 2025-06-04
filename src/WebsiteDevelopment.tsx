import React from 'react';
import './WebsiteDevelopment.css';

const WebsiteDevelopment: React.FC = () => {
  return (
    <div className="website-container">
      <div className="website-hero">
        <div className="website-hero-overlay">
          <h1 className="website-title">אנחנו בונים אתרים שמייצרים תוצאות</h1>
          <p className="website-subtitle">עיצוב מרשים, מהירות טעינה, נגישות ומבנה חכם שממיר גולשים ללקוחות</p>
        </div>
      </div>

      <div className="website-content">
        <h2 className="section-heading">למה לבחור בנו?</h2>
        <p className="fade-in website-about">
          ב־<strong>WJS Digital Innovations</strong> אנו מתמחים בבניית אתרים חכמים לעסקים — ממיתוג UX/UI ועד חיבור למערכות CRM, אוטומציות ו-Google Analytics.
        </p>
        <ul className="fade-in website-list delay-1">
          <li>אתרי תדמית עם עיצוב מותאם אישית</li>
          <li>בלוגים, פורטפוליו, ודפי נחיתה</li>
          <li>התאמה לנייד ונגישות מלאה</li>
          <li>קוד איכותי עם SEO מובנה</li>
          <li>אפשרות לחיבור לאזור אישי ומערכות ניהול תוכן</li>
        </ul>
        <p className="fade-in section-text delay-2">
          אתר לא צריך רק להיראות טוב — הוא צריך לעבוד בשבילך.
        </p>

        <div className="website-button-wrapper fade-in delay-3">
          <button className="website-button">בוא נבנה אתר מנצח</button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
