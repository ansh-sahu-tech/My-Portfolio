const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function generateResume() {
  const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  
  // Standard US Letter size: 612 x 792 pt
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: {
      top: 32,
      bottom: 32,
      left: 38,
      right: 38
    },
    info: {
      Title: 'Ansh Sahu - Software Engineer & Frontend Developer Resume',
      Author: 'Ansh Sahu',
      Subject: 'Software Engineer & Frontend Developer Resume (ATS Friendly)',
      Keywords: 'Ansh Sahu, Software Engineer, Frontend Developer, React, Next.js, TypeScript, Python, Machine Learning, Computer Vision, Sanskriti University',
      Creator: 'Ansh Sahu Portfolio',
      Producer: 'PDFKit'
    }
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const primaryColor = '#0f172a'; // slate-900 (deep black-slate)
  const secondaryColor = '#1d4ed8'; // blue-700 (ATS-friendly accessible blue)
  const textColor = '#334155'; // slate-700 (clean dark gray)
  const mutedColor = '#64748b'; // slate-500
  const ruleColor = '#cbd5e1'; // slate-300

  const contentWidth = 612 - 76; // 536 pt
  const leftX = 38;

  // Helper for clean section headers
  function renderSectionHeader(title) {
    doc.moveDown(0.4);
    const y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(10)
      .fillColor(primaryColor)
      .text(title.toUpperCase(), leftX, y, { characterSpacing: 1.2 });
    
    const lineY = doc.y + 2;
    doc
      .strokeColor(ruleColor)
      .lineWidth(0.8)
      .moveTo(leftX, lineY)
      .lineTo(leftX + contentWidth, lineY)
      .stroke();
    
    doc.y = lineY + 5;
  }

  // 1. HEADER - NAME & ROLE
  doc
    .font('Helvetica-Bold')
    .fontSize(21)
    .fillColor(primaryColor)
    .text('ANSH SAHU', leftX, 32, { align: 'center', characterSpacing: 1.5 });

  doc
    .font('Helvetica-Bold')
    .fontSize(9.5)
    .fillColor(secondaryColor)
    .text('SOFTWARE ENGINEER | FRONTEND & AI/ML DEVELOPER', { align: 'center', characterSpacing: 0.8 });

  doc.moveDown(0.2);

  // Contact Info Line 1: Location | Phone | Email
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor(mutedColor)
    .text('Mathura, Uttar Pradesh, India   •   +91 7754091703   •   anshcseaiml0169@gmail.com', {
      align: 'center'
    });

  doc.moveDown(0.15);

  // Contact Info Line 2: Clickable GitHub & LinkedIn links (centered without wrapping overlap)
  const linkLineY = doc.y;
  const linkText1 = 'GitHub: github.com/Anshsahu275-max';
  const sep = '   •   ';
  const linkText2 = 'LinkedIn: linkedin.com/in/ansh-sahu-8362183a8';

  doc.font('Helvetica').fontSize(8.5);
  const w1 = doc.widthOfString(linkText1);
  const wSep = doc.widthOfString(sep);
  const w2 = doc.widthOfString(linkText2);
  const totalW = w1 + wSep + w2;
  const startX = leftX + (contentWidth - totalW) / 2;

  doc
    .fillColor(secondaryColor)
    .text(linkText1, startX, linkLineY, {
      link: 'https://github.com/Anshsahu275-max',
      underline: true,
      lineBreak: false
    });

  doc
    .fillColor(mutedColor)
    .text(sep, startX + w1, linkLineY, {
      underline: false,
      lineBreak: false
    });

  doc
    .fillColor(secondaryColor)
    .text(linkText2, startX + w1 + wSep, linkLineY, {
      link: 'https://www.linkedin.com/in/ansh-sahu-8362183a8',
      underline: true,
      lineBreak: false
    });

  doc.y = linkLineY + 11;

  // 2. PROFESSIONAL SUMMARY
  renderSectionHeader('Professional Summary');
  doc
    .font('Helvetica')
    .fontSize(8.7)
    .fillColor(textColor)
    .text(
      'Results-driven Software Engineer and B.Tech Computer Science student specializing in AI & ML at Sanskriti University (2023–2027). Demonstrates strong expertise in engineering fast, accessible, and responsive web applications using React, Next.js, TypeScript, and modern CSS frameworks, supported by rigorous foundations in data structures, algorithms (DSA), RESTful API integration, and applied machine learning (OpenCV, Scikit-Learn). Experienced in translating requirements into modular, scalable, user-centric software with clean code architecture.',
      leftX,
      doc.y,
      { width: contentWidth, lineGap: 1.6, align: 'justify' }
    );

  // 3. EDUCATION
  renderSectionHeader('Education');
  
  const eduY = doc.y;
  doc
    .font('Helvetica-Bold')
    .fontSize(9.3)
    .fillColor(primaryColor)
    .text('Sanskriti University', leftX, eduY);
  
  doc
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor(mutedColor)
    .text('Mathura, Uttar Pradesh, India', leftX, eduY, { align: 'right' });

  const degreeY = doc.y + 1;
  doc
    .font('Helvetica-Bold')
    .fontSize(8.7)
    .fillColor(textColor)
    .text('Bachelor of Technology (B.Tech) - Computer Science & Engineering (AI & ML)', leftX, degreeY);

  doc
    .font('Helvetica-Bold')
    .fontSize(8.7)
    .fillColor(secondaryColor)
    .text('2023 – 2027 (Expected)', leftX, degreeY, { align: 'right' });

  doc.moveDown(0.2);
  doc
    .font('Helvetica')
    .fontSize(8.4)
    .fillColor(textColor)
    .text(
      '• Relevant Coursework: Data Structures & Algorithms (DSA), Object-Oriented Programming, Database Management Systems (DBMS), Web Technologies, Operating Systems, Machine Learning, Computer Vision, Deep Learning, Probability & Statistics.',
      leftX + 8,
      doc.y,
      { width: contentWidth - 8, lineGap: 1.2 }
    );

  // 4. TECHNICAL SKILLS
  renderSectionHeader('Technical Skills');

  function renderSkillRow(category, items) {
    const y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(8.6)
      .fillColor(primaryColor)
      .text(category + ': ', leftX + 8, y, { continued: true });
    doc
      .font('Helvetica')
      .fontSize(8.6)
      .fillColor(textColor)
      .text(items, { lineGap: 1.4 });
  }

  renderSkillRow('Languages', 'Python, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL');
  renderSkillRow('Frontend & Web', 'React.js, Next.js, Tailwind CSS, Responsive Web Design, Component Architecture, DOM APIs, State Management, Web Accessibility (WCAG)');
  renderSkillRow('AI / ML & Data', 'Computer Vision (OpenCV, Facial Landmark Tracking, EAR/MAR), Machine Learning, Scikit-Learn, Pandas, NumPy, Exploratory Data Analysis (EDA), Matplotlib');
  renderSkillRow('Developer Tools', 'Git, GitHub, RESTful APIs, Vite, Vercel, npm, VS Code, CI/CD Workflows, Linux/Bash');

  // 5. TECHNICAL PROJECTS
  renderSectionHeader('Technical Projects');

  function renderProject(title, techStack, points, linkObj) {
    const y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.1)
      .fillColor(primaryColor)
      .text(title, leftX, y, { continued: true });

    doc
      .font('Helvetica-Oblique')
      .fontSize(8.4)
      .fillColor(mutedColor)
      .text(`  |  ${techStack}`, { continued: false });

    if (linkObj) {
      doc
        .font('Helvetica')
        .fontSize(8)
        .fillColor(secondaryColor)
        .text(linkObj.label, leftX, y + 0.5, { align: 'right', link: linkObj.url, underline: true });
    }

    doc.moveDown(0.18);
    points.forEach((pt) => {
      doc
        .font('Helvetica')
        .fontSize(8.3)
        .fillColor(textColor)
        .text(`•  ${pt}`, leftX + 8, doc.y, { width: contentWidth - 8, lineGap: 1.1 });
    });
    doc.moveDown(0.3);
  }

  renderProject(
    'AI Driver Awareness System',
    'Python, OpenCV, Computer Vision, NumPy, Scikit-Learn',
    [
      'Engineered an edge-ready computer vision driver safety pipeline detecting fatigue, drowsiness, and distraction in real time.',
      'Implemented 68-point facial landmark tracking to calculate Eye Aspect Ratio (EAR) and head-pose orientation for millisecond alert triggers.',
      'Optimized frame preprocessing and mathematical thresholding to ensure 30+ FPS execution on standard webcams with low latency.'
    ],
    { label: 'GitHub Repository', url: 'https://github.com/Anshsahu275-max' }
  );

  renderProject(
    'Sacha Sauda - Grocery E-Commerce Platform',
    'React, JavaScript, Tailwind CSS, REST APIs, Responsive Design',
    [
      'Developed a modern, mobile-first e-commerce web platform for groceries and daily essentials with instant page loads and zero layout shifts.',
      'Implemented dynamic client-side filtering, debounced search, and state-driven cart mechanics with real-time price updates.',
      'Integrated RESTful service communication for product catalog availability, achieving high test coverage and WCAG accessibility.'
    ],
    { label: 'Live Demo | GitHub', url: 'https://sacha-sauda.vercel.app' }
  );

  renderProject(
    'Student Performance Prediction System',
    'Python, Scikit-Learn, Pandas, NumPy, Matplotlib',
    [
      'Constructed an end-to-end predictive machine learning pipeline evaluating academic habits and attendance to identify early intervention needs.',
      'Conducted exploratory data analysis (EDA), data cleaning, feature normalization, and categorical encoding across multi-variate academic data.',
      'Benchmarked supervised regression and classification models using cross-validation and generated interpretable correlation plots.'
    ],
    { label: 'GitHub Repository', url: 'https://github.com/Anshsahu275-max' }
  );

  renderProject(
    'Swagatam Vijay Bakers - Production Web App',
    'React, TypeScript, Tailwind CSS, Responsive Design, Vercel',
    [
      'Constructed an artisanal bakery web storefront featuring catalog navigation, dynamic cake category showcases, and order inquiry flows.',
      'Architected reusable, accessible UI component hierarchy optimized for smartphones, touchscreens, and cross-browser reliability.',
      'Deployed production application to Vercel with automated CI/CD branch builds and optimized asset delivery.'
    ],
    { label: 'Live Demo | GitHub', url: 'https://swagatam-vijay-bakers.vercel.app' }
  );

  // 6. CERTIFICATIONS & SPECIALIZATIONS
  renderSectionHeader('Certifications & Specializations');
  
  function renderCert(name, issuer, date, credId) {
    const y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(8.4)
      .fillColor(primaryColor)
      .text(`•  ${name}`, leftX + 8, y, { continued: true });
    
    doc
      .font('Helvetica')
      .fontSize(8.1)
      .fillColor(mutedColor)
      .text(` — ${issuer} (${date}) [ID: ${credId}]`);
  }

  renderCert('Python Certification', 'HackerRank', 'April 2024', 'HR-PYTHON-2024');
  renderCert('C Programming Certification', 'HackerRank', 'April 2024', 'HR-C-2024');
  renderCert('Data Structures & Algorithms', 'Infosys', 'October 2024', 'INFOSYS-DSA-2024');
  renderCert('Introduction to Artificial Intelligence', 'Infosys', 'September 2024', 'INFOSYS-AI-2024');
  renderCert('IP Utsav', 'AICTE', 'April 2025', 'AICTE-IPUTSAV-2025');
  renderCert('Spark Program', 'Sanskriti University', 'March 2025', 'SU-SPARK-2025');

  // Finalize PDF
  doc.end();

  writeStream.on('finish', () => {
    const stats = fs.statSync(outputPath);
    console.log(`Resume generated successfully at ${outputPath} (${stats.size} bytes)`);
  });
}

generateResume();
