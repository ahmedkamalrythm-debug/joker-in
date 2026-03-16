import React from 'react';

const ContentCalendar = () => {
  const calendar = [
    {
      day: 1,
      theme: 'Healthy Eating',
      topic: 'Importance of Fiber',
      hook: 'Did you know? Fiber can prevent constipation!',
      format: 'Infographic',
      postingTime: '10:00 AM',
      viralScore: 8,
      tips: 'Include fruits and vegetables in every meal.',
      contentStructure: 'Header, Main Body, CTA',
      implementationSteps: '1. Research statistics; 2. Design infographic; 3. Schedule post.',
      cta: 'Share your favorite fiber-rich foods!',
      keywords: ['fiber', 'healthy eating', 'nutrition'],
    },
    // Add more days...
    {
      day: 30,
      theme: 'Food Safety',
      topic: 'Avoiding Cross-Contamination',
      hook: 'Keep your kitchen safe!',
      format: 'Video',
      postingTime: '4:00 PM',
      viralScore: 9,
      tips: 'Always use separate cutting boards for meat and vegetables.',
      contentStructure: 'Intro, Tips, Outro',
      implementationSteps: '1. Plan video content; 2. Record video; 3. Edit and post.',
      cta: 'Follow for more food safety tips!',
      keywords: ['food safety', 'cross-contamination', 'kitchen tips'],
    },
  ];

  return (
    <div>
      <h1>30-Day Content Calendar for Gastroenterologist</h1>
      <ul>
        {calendar.map(item => (
          <li key={item.day}>
            <h2>Day {item.day}</h2>
            <p><strong>Theme:</strong> {item.theme}</p>
            <p><strong>Topic:</strong> {item.topic}</p>
            <p><strong>Hook:</strong> {item.hook}</p>
            <p><strong>Format:</strong> {item.format}</p>
            <p><strong>Posting Time:</strong> {item.postingTime}</p>
            <p><strong>Viral Score:</strong> {item.viralScore}</p>
            <p><strong>Tips:</strong> {item.tips}</p>
            <p><strong>Content Structure:</strong> {item.contentStructure}</p>
            <p><strong>Implementation Steps:</strong> {item.implementationSteps}</p>
            <p><strong>CTA:</strong> {item.cta}</p>
            <p><strong>Keywords:</strong> {item.keywords.join(', ')}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentCalendar;
