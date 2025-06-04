import React from 'react';
import './ECommerceInfo.css';

const LuxuryEcommerce: React.FC = () => {
  return (
    <div className="luxury-container">
      <div className="luxury-hero">
        <div className="luxury-hero-overlay">
          <h1 className="luxury-title"> החנות שלך המומחיות שלנו </h1>
          <p className="luxury-subtitle">פיתוח חנויות דיגטליות בהתאמה אישית ובהתאם לדרישות של העסק שלך </p>
        </div>
      </div>

      <div className="luxury-content">
        <h2 className="section-heading">למה לבחור בנו </h2>
        <p className="fade-in luxury-about">
          ב־<strong>WJS Digital Innovations</strong> אנחנו מתמחים בבניית חנויות אינטרנטיות מעוצבות מותאמות לנייד , מהירות , מאובטחות ומחוברות למערכות סליקה וניהול מלאי.
        </p>
        <ul className="fade-in luxury-list delay-1">
          <li>עיצוב ייחודי המותאם למותג שלך</li>
          <li>מערכת ניהול מוצרים קלה לשימוש</li>
          <li>התממשקות לסליקת אשראי</li>
          <li>תמיכה מלאה בקידום אורגני (SEO)</li>
          <li>אפשרות לקופונים, מבצעים וניוזלטרים</li>
          <li>ליווי אישי והדרכה מלאה.</li>
        </ul>
        <p className="fade-in section-text delay-2">
          חנות אונליין מקצועית שממנפת את העסק שלך לרמה עולמית .
        </p>

        <div className="luxury-button-wrapper fade-in delay-3">
<button
  className="luxury-button"
  onClick={() => {
    window.open(
      'https://wa.me/972508561773?text=שלום , אני מעוניין לקבל פרטים נוספים על בניית חנות דיגיטלית אצלכם.',
      '_blank'
    );
  }}
>
  צור קשר לפרטים נוספים
</button>

      </div>
      </div>
    </div>
  );
};

export default LuxuryEcommerce;
