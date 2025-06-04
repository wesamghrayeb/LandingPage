import React from 'react';
import './ECommerceInfo.css';

const LuxuryEcommerce: React.FC = () => {
  return (
    <div className="luxury-container">
      <div className="luxury-hero">
        <div className="luxury-hero-overlay">
          <h1 className="luxury-title">בונים לך את החנות שתמכור</h1>
          <p className="luxury-subtitle">שירותי בניית חנויות אינטרנטיות בהתאמה אישית</p>
        </div>
      </div>

      <div className="luxury-content">
        <h2 className="section-heading">מה אנחנו מציעים?</h2>
        <p className="fade-in luxury-about">
          ב־<strong>WJS Digital Innovations</strong> אנחנו מתמחים בבניית חנויות אינטרנטיות מעוצבות, מותאמות לנייד, מהירות, מאובטחות ומחוברות למערכות סליקה וניהול מלאי.
        </p>
        <ul className="fade-in luxury-list delay-1">
          <li>עיצוב ייחודי המותאם למותג שלך</li>
          <li>מערכת ניהול מוצרים קלה לשימוש</li>
          <li>התממשקות לסליקת אשראי</li>
          <li>תמיכה מלאה בקידום אורגני (SEO)</li>
          <li>אפשרות לקופונים, מבצעים וניוזלטרים</li>
          <li>ליווי אישי והדרכה מלאה</li>
        </ul>
        <p className="fade-in section-text delay-2">
          עם חנות דיגיטלית שלנו – אתה לא רק באוויר, אתה בליגה של הגדולים.
        </p>

        <div className="luxury-button-wrapper fade-in delay-3">
          <button className="luxury-button">צור קשר לפרטים נוספים</button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryEcommerce;
