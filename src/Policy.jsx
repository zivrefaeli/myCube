import React from 'react'
import './styles/policy.css'

export default function Policy() {
  return (
    <div className='content'>
      <h1 className='title'>myCube Privacy Policy</h1>
      <div className='policy'>
        <h3>App Purpose</h3>
        <div>
          <p>
            The purpose of myCube is to teach the method of solving the a Rubik's Cube.
            <br />
            In the app, there are three main ways the user will learn the solution:
          </p>
          <ul>
            <li>A full explanation of the cube solution</li>
            <li>Cube Scanner and an algorithm of solving the cube</li>
            <li>Tournament between users in order to improve their solutions skills</li>
          </ul>
        </div>

        <h3>App Usage</h3>
        <div>
          <span>After installation, the users could login as Guest or Sign Up with:</span>
          <p className='app-inputs'>
            <span>Username</span>
            <span>Password</span>
            <span>Email</span>
            <span>Profile Image</span>
          </p>
          <p>
            Registering to the app enables to signed up users to play in the Cube Tournament and be exposed to the Cube
            Scanner and its solution, <u>while unregistered Guests won't get permission</u>.
          </p>
        </div>

        <h3>Data Usage</h3>
        <div>
          <p>
            myCube uses Google and Android APIs and based on them.
            <br />
            In order to enjoy an optimal user experience in the application, you have to register with the identifying
            information, as mentioned in <i>App Usage</i>. <u>Non of these details should be real</u>, because there is no data verification.
            <br />
            All these details with the achievements data are stored in secured Database provided by Google.
          </p>
          <b>The users data are not used at all beyond operating myCube.</b> <span>In addition, the users require to give permission for using different features:</span>
          <ul>
            <li>Camera permission - for scanning the cube</li>
            <li>Phone and Contacts permission - for inviting new users</li>
          </ul>
          <b>There is no data collection at all on the users of the application myCube.</b>
        </div>
      </div>

      <div className='policy hebrew'>
        <h3>מטרת היישום</h3>
        <div>
          <p>
            מטרת היישום myCube היא ללמד את השיטה כציד לפתור קובייה הונגרית.
            <br />
            ביישום ישנם שלושה חלקים דרכם המשתמש לומד את את הפתרון:
          </p>
          <ul>
            <li>הסבר פתרון מלא של הקובייה</li>
            <li>סורק הקובייה ואלגוריתם לפתרון הקובייה</li>
            <li>תחרות בין משתמשים כדי להשתפר בפתרון הקובייה</li>
          </ul>
        </div>

        <h3>שימוש היישום</h3>
        <div>
          <span>לאחר ההתקנה, יהיה ניתן להתחבר כאורח/ת או להירשם באמצעות:</span>
          <p className='app-inputs'>
            <span>שם משתמש</span>
            <span>סיסמה</span>
            <span>אימייל</span>
            <span>תמונת פרופיל</span>
          </p>
          <p>
            הירשמות ליישום מאפשרת למשתמשים רשומים לשחק בטורניר הקובייה ולהיחשף לסורק הקובייה ופתרונה, <u>בעוד שאורחים לא רשומים, לא יקבלו גישה</u>.
          </p>
        </div>

        <h3>שימוש בנתונים</h3>
        <div>
          <p>
            היישום myCube משתמש בAPIs של Google וAndroid ומתבסס עליהם.
            <br />
            כדי להנות מחווית שימוש מיטבית ביישום יש להרשם למערכת באמצעות פרטים מזהים, כפי שהוזכר <i>בשימוש היישום</i>. <u>אף אחד מנתוני ההרשמות לא חייב להיות אמיתי</u>, משום שלא מתבצע אימות של הנתונים.
            <br />
            כל הפרטים ההלו נשמרים יחד עם נתוני ההישגים של המשתמש במסד נתונים מאובטח על ידי Google.
          </p>
          <b>לא נעשה שימוש כלל בנתוני המשתמשים מעבר לתפעול היישום myCube.</b> <span>בנוסף, בתוך היישום נדרשים המשתמשים לתת הרשאה לטובת הפעלת תכונות של היישום:</span>
          <ul>
            <li>הרשאה למצלמה - לטובת סריקת הקובייה</li>
            <li>הרשאה לשיחות ואנשי קשר - לטובת הזמנת משתמשים חדשים</li>
          </ul>
          <b>ביישום myCube לא מתבצע כלל איסוף של נתונים על המשתמשים.</b>
        </div>
      </div>
    </div>
  )
}