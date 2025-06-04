import React from 'react';
import './AnimationDemo.css';

const AnimationDemo: React.FC = () => {
  const services = [
    { label: 'מערכות CRM חכמות', className: 'box crm', color: 'bg-blue' },
    { label: 'חנויות אינטרנטיות', className: 'box ecommerce', color: 'bg-green' },
    { label: 'פיתוח אפליקציות', className: 'box apps', color: 'bg-purple' },
    { label: 'אוטומציות לעסקים', className: 'box automation', color: 'bg-orange' },
  ];

  return (
    <div className="container">
      <h2>אנחנו מזיזים את הטכנולוגיה קדימה</h2>
      <p>הפתרונות שלנו נעים עם מטרה — לכל קופסה כאן יש תפקיד, ממש כמו הקוד שאנחנו כותבים.</p>
      <div className="animation-list">
        {services.map(({ label, className, color }, index) => (
          <div key={index} className="animation-row">
            <div className="label">{label}</div>
            <div className={`${className} ${color}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationDemo;