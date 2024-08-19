import React from 'react';
import './TechnologyCards.css';

const cardData = [
  {
    id: 1,
    category: 'Tech',
    title: 'The Future of Quantum Computing',
    text: 'Exploring how quantum computing is set to revolutionize the tech industry.',
    image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg',
    created_at: '2024-10-03T10:20:13Z',
  },
  {
    id: 2,
    category: 'Entertainment',
    title: 'Top 10 Movies to Watch This Summer',
    text: 'A list of must-watch movies for the summer season.',
    image: 'https://images.pexels.com/photos/4668665/pexels-photo-4668665.jpeg',
    created_at: '2024-10-06T14:45:28Z',
  },
  {
    id: 3,
    category: 'Business',
    title: 'How Startups are Disrupting Traditional Markets',
    text: 'An analysis of how startups are changing the business landscape.',
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
    created_at: '2024-10-10T11:38:22Z',
  },
  {
    id: 4,
    category: 'Sports',
    title: 'The Rise of Esports',
    text: 'Understanding the growing popularity of esports around the world.',
    image: 'https://images.pexels.com/photos/3568504/pexels-photo-3568504.jpeg',
    created_at: '2024-10-13T13:47:16Z',
  },
  {
    id: 5,
    category: 'Politics',
    title: 'The Impact of Social Media on Political Campaigns',
    text: 'How social media is changing the dynamics of political engagement.',
    image: 'https://images.pexels.com/photos/4669265/pexels-photo-4669265.jpeg',
    created_at: '2024-10-16T12:17:49Z',
  },
  {
    id: 6,
    category: 'Latest',
    title: 'Breaking News: Major Tech Merger Announced',
    text: 'A significant merger in the tech industry has been confirmed today.',
    image: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg',
    created_at: '2024-10-19T15:34:38Z',
  },
  {
    id: 7,
    category: 'Showbiz',
    title: 'Exclusive: Inside the Life of a Hollywood Star',
    text: 'A sneak peek into the daily routine of a famous Hollywood actor.',
    image: 'https://images.pexels.com/photos/6023804/pexels-photo-6023804.jpeg',
    created_at: '2024-10-22T09:11:57Z',
  },
  {
    id: 8,
    category: 'Global',
    title: 'Climate Change: A Global Emergency',
    text: 'The latest developments in the global fight against climate change.',
    image: 'https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg',
    created_at: '2024-10-25T14:29:11Z',
  },
  {
    id: 9,
    category: 'Tech',
    title: 'AI in Healthcare: Opportunities and Challenges',
    text: 'Exploring the impact of artificial intelligence on healthcare.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    created_at: '2024-10-28T10:39:08Z',
  },
  {
    id: 10,
    category: 'Entertainment',
    title: 'The Most Anticipated Concerts of 2024',
    text: 'A roundup of upcoming concerts you don’t want to miss.',
    image: 'https://images.pexels.com/photos/2439895/pexels-photo-2439895.jpeg',
    created_at: '2024-11-01T13:45:30Z',
  },
  {
    id: 11,
    category: 'Business',
    title: 'Investing in Green Energy: A Lucrative Opportunity',
    text: 'Why green energy is becoming an attractive option for investors.',
    image: 'https://images.pexels.com/photos/2844962/pexels-photo-2844962.jpeg',
    created_at: '2024-11-04T12:21:17Z',
  },
  {
    id: 12,
    category: 'Sports',
    title: 'The Benefits of Outdoor Activities for Mental Health',
    text: 'How outdoor sports can contribute to mental well-being.',
    image: 'https://images.pexels.com/photos/275960/pexels-photo-275960.jpeg',
    created_at: '2024-11-06T14:59:45Z',
  },
  {
    id: 13,
    category: 'Politics',
    title: 'The Role of Youth in Shaping Future Policies',
    text: 'How the younger generation is influencing political discourse.',
    image: 'https://images.pexels.com/photos/6053545/pexels-photo-6053545.jpeg',
    created_at: '2024-11-08T15:28:53Z',
  },
  {
    id: 14,
    category: 'Latest',
    title: 'Top Tech Trends to Watch in 2025',
    text: 'A preview of the most promising technology trends for the coming year.',
    image: 'https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg',
    created_at: '2024-11-10T10:42:18Z',
  },
  {
    id: 15,
    category: 'Showbiz',
    title: 'Behind the Scenes: Making of a Blockbuster Film',
    text: 'A behind-the-scenes look at the making of a major film.',
    image: 'https://images.pexels.com/photos/3944463/pexels-photo-3944463.jpeg',
    created_at: '2024-11-12T09:38:27Z',
  },
  {
    id: 16,
    category: 'Global',
    title: 'The Importance of International Cooperation in Space Exploration',
    text: 'Why countries are coming together to explore space.',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
    created_at: '2024-11-15T13:11:46Z',
  },
  {
    id: 17,
    category: 'Tech',
    title: 'Cybersecurity Threats to Watch Out for in 2024',
    text: 'The latest threats and how to protect yourself online.',
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
    created_at: '2024-11-18T10:51:22Z',
  },
  {
    id: 18,
    category: 'Entertainment',
    title: 'The Evolution of Streaming Services',
    text: 'How streaming platforms have changed the way we consume media.',
    image: 'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg',
    created_at: '2024-11-20T11:17:22Z',
  },
  {
    id: 19,
    category: 'Business',
    title: 'The Gig Economy: Pros and Cons',
    text: 'An analysis of the benefits and challenges of the gig economy.',
    image: 'https://images.pexels.com/photos/3782226/pexels-photo-3782226.jpeg',
    created_at: '2024-11-22T12:13:30Z',
  },
  {
    id: 20,
    category: 'Sports',
    title: 'Top Fitness Trends of 2024',
    text: 'The latest trends in fitness and how to incorporate them into your routine.',
    image: 'https://images.pexels.com/photos/4753892/pexels-photo-4753892.jpeg',
    created_at: '2024-11-24T15:19:08Z',
  },
];

const TechnologyCards = ({ onAction, category ,onDataChange}) => {
 
  const sendDataToParent = (data) => {
    onDataChange(data);
  
};
  const techCards = cardData.filter(card => card.category === category);


  const displayedCards = techCards.slice(0, 3);


  return (
    <div className='TechnologyCards-area'>
      {displayedCards.map(card => (
        <div
          key={card.id}
          className={`TechnologyCard ${card.className}`}
          onClick={() => sendDataToParent(card)}
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className='black-screen'>
            <p>{card.category}</p>
            <h3>{card.text}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCards;
