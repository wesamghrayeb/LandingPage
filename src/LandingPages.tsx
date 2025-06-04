import React from 'react';
import './LandingPages.css';

const LandingPages: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <div className="landing-hero-overlay">
          <h1 className="landing-title">דפי נחיתה שמביאים תוצאות</h1>
          <p className="landing-subtitle">
            ממוקדים, ממירים ומעוצבים כדי שהלקוח ילחץ על מה שחשוב
          </p>
        </div>
      </div>

      <div className="landing-content">
        <h2 className="section-heading">היתרונות של דף נחיתה מקצועי</h2>
        <p className="fade-in landing-about">
          <strong>WJS Digital Innovations</strong> בונה עבורך דפי נחיתה שמזיזים את המחוג: שיווק ממוקד, מהירות טעינה, ועיצוב שמתאים בול למסר.
        </p>
        <ul className="fade-in landing-list delay-1">
          <li>עיצוב ממוקד מטרה לפי קמפיין</li>
          <li>טעינה מהירה וקריאה לפעולה חזקה</li>
          <li>התאמה מלאה למובייל</li>
          <li>חיבור למערכות דיוור וטפסי לידים</li>
          <li>מעקב ותוצאות דרך אנליטיקס ופיקסלים</li>
        </ul>
        <p className="fade-in section-text delay-2">
          קמפיין טוב מתחיל בדף שמוכר. וזה בדיוק מה שאנחנו יודעים לעשות.
        </p>

        <div className="landing-button-wrapper fade-in delay-3">
          <button className="landing-button">התחל עכשיו</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
