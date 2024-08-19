import { React, useState } from 'react';
import './Featuredposts.css';

const Featured_cardData = ({ onDataChange }) => {

  const handleClick = (data) => {
    onDataChange(data);
  };
  const cardData = [
    { id: 1, category: 'Tech', title: 'The Future of Quantum Computing', text: 'Exploring how quantum computing is set to revolutionize the tech industry.', image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg', created_at: '2024-10-03T10:20:13Z' },
    { id: 2, category: 'Entertainment', title: 'Top 10 Movies to Watch This Summer', text: 'A list of must-watch movies for the summer season.', image: 'https://images.pexels.com/photos/4668665/pexels-photo-4668665.jpeg', created_at: '2024-10-06T14:45:28Z' },
    { id: 3, category: 'Business', title: 'How Startups are Disrupting Traditional Markets', text: 'An analysis of how startups are changing the business landscape.', image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg', created_at: '2024-10-10T11:38:22Z' },
    { id: 4, category: 'Sports', title: 'The Rise of Esports', text: 'Understanding the growing popularity of esports around the world.', image: 'https://images.pexels.com/photos/3568504/pexels-photo-3568504.jpeg', created_at: '2024-10-13T13:47:16Z' },
    { id: 5, category: 'Politics', title: 'The Impact of Social Media on Political Campaigns', text: 'How social media is changing the dynamics of political engagement.', image: 'https://images.pexels.com/photos/4669265/pexels-photo-4669265.jpeg', created_at: '2024-10-16T12:17:49Z' },
    { id: 6, category: 'Latest', title: 'Breaking News: Major Tech Merger Announced', text: 'A significant merger in the tech industry has been confirmed today.', image: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg', created_at: '2024-10-19T15:34:38Z' },
    { id: 7, category: 'Showbiz', title: 'Exclusive: Inside the Life of a Hollywood Star', text: 'A sneak peek into the daily routine of a famous Hollywood actor.', image: 'https://images.pexels.com/photos/6023804/pexels-photo-6023804.jpeg', created_at: '2024-10-22T09:11:57Z' },
    { id: 8, category: 'Global', title: 'Climate Change: A Global Emergency', text: 'The latest developments in the global fight against climate change.', image: 'https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg', created_at: '2024-10-25T14:29:11Z' },
    { id: 9, category: 'Tech', title: 'AI in Healthcare: Opportunities and Challenges', text: 'Exploring the impact of artificial intelligence on healthcare.', image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg', created_at: '2024-10-28T10:39:08Z' },
    { id: 10, category: 'Entertainment', title: 'The Most Anticipated Concerts of 2024', text: 'A roundup of upcoming concerts you don’t want to miss.', image: 'https://images.pexels.com/photos/2439895/pexels-photo-2439895.jpeg', created_at: '2024-11-01T13:45:30Z' },
    { id: 11, category: 'Business', title: 'Investing in Green Energy: A Lucrative Opportunity', text: 'Why green energy is becoming an attractive option for investors.', image: 'https://images.pexels.com/photos/2844962/pexels-photo-2844962.jpeg', created_at: '2024-11-04T12:21:17Z' },
    { id: 12, category: 'Sports', title: 'The Benefits of Outdoor Activities for Mental Health', text: 'How outdoor sports can contribute to mental well-being.', image: 'https://images.pexels.com/photos/275960/pexels-photo-275960.jpeg', created_at: '2024-11-06T14:59:45Z' },
    { id: 13, category: 'Politics', title: 'The Role of Youth in Shaping Future Policies', text: 'How the younger generation is influencing political discourse.', image: 'https://images.pexels.com/photos/6053545/pexels-photo-6053545.jpeg', created_at: '2024-11-08T15:28:53Z' },
    { id: 14, category: 'Latest', title: 'Top Tech Trends to Watch in 2025', text: 'A preview of the most promising technology trends for the coming year.', image: 'https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg', created_at: '2024-11-10T10:42:18Z' },
    { id: 15, category: 'Showbiz', title: 'Behind the Scenes: Making of a Blockbuster Film', text: 'A behind-the-scenes look at the making of a major film.', image: 'https://images.pexels.com/photos/3944463/pexels-photo-3944463.jpeg', created_at: '2024-11-12T09:38:27Z' },
    { id: 16, category: 'Global', title: 'The Importance of International Cooperation in Space Exploration', text: 'Why countries are coming together to explore space.', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg', created_at: '2024-11-15T13:11:46Z' },
    { id: 17, category: 'Tech', title: 'Cybersecurity Threats to Watch Out for in 2024', text: 'The latest threats and how to protect yourself online.', image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg', created_at: '2024-11-18T10:51:22Z' },
    { id: 18, category: 'Entertainment', title: 'The Evolution of Streaming Services', text: 'How streaming platforms have changed the way we consume media.', image: 'https://images.pexels.com/photos/57043/pexels-photo-57043.jpeg', created_at: '2024-11-20T11:17:22Z' },
    { id: 19, category: 'Business', title: 'The Gig Economy: Pros and Cons', text: 'An analysis of the benefits and challenges of the gig economy.', image: 'https://images.pexels.com/photos/3782226/pexels-photo-3782226.jpeg', created_at: '2024-11-22T12:13:30Z' },
    { id: 20, category: 'Sports', title: 'Top Fitness Trends of 2024', text: 'The latest trends in fitness and how to incorporate them into your routine.', image: 'https://images.pexels.com/photos/4753892/pexels-photo-4753892.jpeg', created_at: '2024-11-24T15:19:08Z' },
    { id: 21, category: 'Latest', title: 'New Innovations in Renewable Energy', text: 'The latest advancements in renewable energy technologies and their potential impact.', image: 'https://images.pexels.com/photos/3481190/pexels-photo-3481190.jpeg', created_at: '2024-11-27T10:30:20Z' },
    { id: 22, category: 'Latest', title: 'Major Breakthrough in Cancer Research', text: 'A significant breakthrough in cancer research that could change treatment approaches.', image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg', created_at: '2024-11-29T12:45:55Z' },
    { id: 23, category: 'Latest', title: 'Advancements in Autonomous Vehicles', text: 'The latest developments in autonomous vehicle technology and their implications.', image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg', created_at: '2024-12-01T09:23:40Z' },
    { id: 24, category: 'Latest', title: 'Global Economic Trends for 2025', text: 'A look at the economic trends expected to shape the global market in 2025.', image: 'https://images.pexels.com/photos/545224/pexels-photo-545224.jpeg', created_at: '2024-12-03T14:16:07Z' },
    { id: 25, category: 'Latest', title: 'The Rise of Virtual Reality in Education', text: 'How virtual reality is transforming the educational landscape.', image: 'https://images.pexels.com/photos/2544898/pexels-photo-2544898.jpeg', created_at: '2024-12-06T10:25:53Z' },
    { id: 26, category: 'Latest', title: 'Emerging Trends in Artificial Intelligence', text: 'An overview of the latest trends in AI and their potential applications.', image: 'https://images.pexels.com/photos/2826587/pexels-photo-2826587.jpeg', created_at: '2024-12-08T11:45:40Z' },
    { id: 27, category: 'Latest', title: 'Developments in Green Technology', text: 'Recent advances in green technology and their impact on sustainability.', image: 'https://images.pexels.com/photos/4709276/pexels-photo-4709276.jpeg', created_at: '2024-12-11T12:17:55Z' },
    { id: 28, category: 'Latest', title: 'The Future of Cryptocurrency', text: 'Exploring the potential future developments in cryptocurrency markets.', image: 'https://images.pexels.com/photos/2529142/pexels-photo-2529142.jpeg', created_at: '2024-12-13T13:37:24Z' },
    { id: 29, category: 'Latest', title: 'Innovations in Healthcare Technology', text: 'How new technologies are improving healthcare delivery.', image: 'https://images.pexels.com/photos/6394159/pexels-photo-6394159.jpeg', created_at: '2024-12-16T14:22:48Z' },
    { id: 30, category: 'Latest', title: 'Advancements in Space Exploration', text: 'Recent breakthroughs in space exploration and their significance.', image: 'https://images.pexels.com/photos/5452958/pexels-photo-5452958.jpeg', created_at: '2024-12-18T09:55:33Z' },
    { id: 31, category: 'Latest', title: 'New Developments in Machine Learning', text: 'The latest advancements in machine learning and their applications.', image: 'https://images.pexels.com/photos/3739401/pexels-photo-3739401.jpeg', created_at: '2024-12-21T11:10:56Z' },
    { id: 32, category: 'Latest', title: 'Breakthroughs in Renewable Energy Storage', text: 'Recent innovations in energy storage technologies for renewable energy.', image: 'https://images.pexels.com/photos/1796744/pexels-photo-1796744.jpeg', created_at: '2024-12-23T12:20:34Z' },
    { id: 33, category: 'Latest', title: 'Emerging Trends in Biotechnology', text: 'A look at the latest trends and innovations in biotechnology.', image: 'https://images.pexels.com/photos/1143644/pexels-photo-1143644.jpeg', created_at: '2024-12-26T14:18:12Z' },
    { id: 34, category: 'Latest', title: 'Advances in Smart Home Technology', text: 'How smart home technology is evolving and its potential impact.', image: 'https://images.pexels.com/photos/4643295/pexels-photo-4643295.jpeg', created_at: '2024-12-29T10:42:19Z' },
    { id: 35, category: 'Latest', title: 'The Impact of 5G Technology', text: 'Examining the effects of 5G technology on various industries.', image: 'https://images.pexels.com/photos/5905771/pexels-photo-5905771.jpeg', created_at: '2024-12-31T13:28:47Z' },
    { id: 36, category: 'Latest', title: 'The Evolution of Wearable Technology', text: 'Exploring the advancements in wearable tech and its future possibilities.', image: 'https://images.pexels.com/photos/2902604/pexels-photo-2902604.jpeg', created_at: '2025-01-02T09:37:58Z' },
    { id: 37, category: 'Latest', title: 'Trends in Online Education', text: 'How online education is changing and what to expect in the future.', image: 'https://images.pexels.com/photos/3769753/pexels-photo-3769753.jpeg', created_at: '2025-01-05T11:45:32Z' },
    { id: 38, category: 'Latest', title: 'The Future of Blockchain Technology', text: 'Potential applications and developments in blockchain technology.', image: 'https://images.pexels.com/photos/3933711/pexels-photo-3933711.jpeg', created_at: '2025-01-08T14:22:47Z' },
    { id: 39, category: 'Latest', title: 'Advancements in Augmented Reality', text: 'Recent progress in augmented reality and its potential uses.', image: 'https://images.pexels.com/photos/5503083/pexels-photo-5503083.jpeg', created_at: '2025-01-10T10:29:01Z' },
    { id: 40, category: 'Latest', title: 'The Role of Artificial Intelligence in Cybersecurity', text: 'How AI is being used to enhance cybersecurity measures.', image: 'https://images.pexels.com/photos/5503314/pexels-photo-5503314.jpeg', created_at: '2025-01-12T12:10:29Z' },
    { id: 41, category: 'Latest', title: 'The Impact of Digital Twins in Industry', text: 'How digital twin technology is transforming industrial processes.', image: 'https://images.pexels.com/photos/6260698/pexels-photo-6260698.jpeg', created_at: '2025-01-15T11:22:14Z' },
    { id: 42, category: 'Latest', title: 'Developments in Genetic Engineering', text: 'Recent advancements in genetic engineering and their potential impact.', image: 'https://images.pexels.com/photos/4747997/pexels-photo-4747997.jpeg', created_at: '2025-01-18T13:30:58Z' },
    { id: 43, category: 'Latest', title: 'The Future of Smart Cities', text: 'How smart city technologies are shaping urban development.', image: 'https://images.pexels.com/photos/7081773/pexels-photo-7081773.jpeg', created_at: '2025-01-20T14:05:42Z' },
    { id: 44, category: 'Latest', title: 'Trends in Mobile App Development', text: 'The latest trends and technologies in mobile app development.', image: 'https://images.pexels.com/photos/1560268/pexels-photo-1560268.jpeg', created_at: '2025-01-23T09:58:21Z' },
    { id: 45, category: 'Latest', title: 'The Impact of Internet of Things (IoT)', text: 'How IoT is changing various aspects of daily life and industry.', image: 'https://images.pexels.com/photos/4348424/pexels-photo-4348424.jpeg', created_at: '2025-01-25T12:12:45Z' },
    { id: 46, category: 'Latest', title: 'Advancements in Robotics Technology', text: 'The latest developments in robotics and their potential applications.', image: 'https://images.pexels.com/photos/5305704/pexels-photo-5305704.jpeg', created_at: '2025-01-28T10:22:57Z' },
    { id: 47, category: 'Latest', title: 'The Evolution of Cloud Computing', text: 'Recent advancements in cloud computing and their impact on businesses.', image: 'https://images.pexels.com/photos/1170531/pexels-photo-1170531.jpeg', created_at: '2025-01-30T13:45:33Z' },
    { id: 48, category: 'Latest', title: 'Trends in Digital Marketing', text: 'Emerging trends and strategies in digital marketing for 2025.', image: 'https://images.pexels.com/photos/3581284/pexels-photo-3581284.jpeg', created_at: '2025-02-01T11:19:26Z' },
    { id: 49, category: 'Latest', title: 'The Future of Wearable Health Devices', text: 'How wearable health devices are evolving and their impact on personal health.', image: 'https://images.pexels.com/photos/4372921/pexels-photo-4372921.jpeg', created_at: '2025-02-04T14:30:18Z' },
    { id: 50, category: 'Latest', title: 'Advancements in 3D Printing Technology', text: 'The latest developments in 3D printing and its applications across industries.', image: 'https://images.pexels.com/photos/2554377/pexels-photo-2554377.jpeg', created_at: '2025-02-07T12:50:12Z' },
    { id: 51, category: 'Latest', title: 'The Role of Quantum Computing', text: 'How quantum computing is set to transform various fields.', image: 'https://images.pexels.com/photos/4327822/pexels-photo-4327822.jpeg', created_at: '2025-02-10T09:10:23Z' },
    { id: 52, category: 'Latest', title: 'The Impact of 5G on Remote Work', text: 'How 5G technology is reshaping remote work and virtual collaboration.', image: 'https://images.pexels.com/photos/4327822/pexels-photo-4327822.jpeg', created_at: '2025-02-13T14:25:46Z' },
    { id: 53, category: 'Latest', title: 'Trends in Smart Agriculture', text: 'How technology is advancing smart agriculture and its benefits.', image: 'https://images.pexels.com/photos/4174300/pexels-photo-4174300.jpeg', created_at: '2025-02-16T11:35:12Z' },
    { id: 54, category: 'Latest', title: 'The Evolution of E-Commerce', text: 'How e-commerce is evolving and what the future holds for online retail.', image: 'https://images.pexels.com/photos/1657591/pexels-photo-1657591.jpeg', created_at: '2025-02-19T09:50:27Z' },
    { id: 55, category: 'Latest', title: 'Advancements in Augmented Reality', text: 'Exploring the latest advancements in augmented reality technology.', image: 'https://images.pexels.com/photos/5612088/pexels-photo-5612088.jpeg', created_at: '2025-02-21T14:15:38Z' },
    { id: 56, category: 'Latest', title: 'The Impact of Artificial Intelligence on Customer Service', text: 'How AI is transforming customer service and support.', image: 'https://images.pexels.com/photos/4451503/pexels-photo-4451503.jpeg', created_at: '2025-02-23T13:22:40Z' },
    { id: 57, category: 'Latest', title: 'The Future of Autonomous Vehicles', text: 'How autonomous vehicles are evolving and their potential impact on transportation.', image: 'https://images.pexels.com/photos/1370533/pexels-photo-1370533.jpeg', created_at: '2025-02-26T11:50:03Z' },
    { id: 58, category: 'Latest', title: 'Trends in Smart Home Devices', text: 'The latest trends in smart home devices and their impact on daily living.', image: 'https://images.pexels.com/photos/2400778/pexels-photo-2400778.jpeg', created_at: '2025-03-01T09:30:12Z' },
    { id: 59, category: 'Latest', title: 'The Role of Blockchain in Supply Chain Management', text: 'How blockchain technology is enhancing supply chain transparency and efficiency.', image: 'https://images.pexels.com/photos/3055552/pexels-photo-3055552.jpeg', created_at: '2025-03-04T12:15:25Z' },
    { id: 60, category: 'Latest', title: 'Advancements in Data Privacy Technology', text: 'The latest developments in data privacy and protection technologies.', image: 'https://images.pexels.com/photos/3175235/pexels-photo-3175235.jpeg', created_at: '2025-03-08T14:35:40Z' },
    { id: 61, category: 'Latest', title: 'The Future of Personalized Medicine', text: 'How personalized medicine is evolving and its potential benefits.', image: 'https://images.pexels.com/photos/1919897/pexels-photo-1919897.jpeg', created_at: '2025-03-12T10:22:05Z' },
    { id: 62, category: 'Latest', title: 'Trends in Wearable Technology for Fitness', text: 'How wearable tech is advancing in the fitness industry.', image: 'https://images.pexels.com/photos/4175287/pexels-photo-4175287.jpeg', created_at: '2025-03-15T13:30:21Z' },
    { id: 63, category: 'Latest', title: 'The Evolution of Financial Technology', text: 'How fintech is evolving and its impact on the financial industry.', image: 'https://images.pexels.com/photos/2493171/pexels-photo-2493171.jpeg', created_at: '2025-03-19T12:05:18Z' },
    { id: 64, category: 'Latest', title: 'The Impact of Artificial Intelligence in Healthcare', text: 'How AI is transforming healthcare practices and patient care.', image: 'https://images.pexels.com/photos/3735401/pexels-photo-3735401.jpeg', created_at: '2025-03-23T14:10:42Z' },
    { id: 65, category: 'Latest', title: 'Advancements in Natural Language Processing', text: 'The latest developments in natural language processing and their applications.', image: 'https://images.pexels.com/photos/4386483/pexels-photo-4386483.jpeg', created_at: '2025-03-26T10:35:50Z' },
    { id: 66, category: 'Latest', title: 'Trends in Cloud-Based Software Development', text: 'Emerging trends in cloud-based software development and their impact.', image: 'https://images.pexels.com/photos/1585699/pexels-photo-1585699.jpeg', created_at: '2025-03-29T13:45:55Z' },
    { id: 67, category: 'Latest', title: 'The Role of Artificial Intelligence in Financial Services', text: 'How AI is shaping the future of financial services.', image: 'https://images.pexels.com/photos/7434862/pexels-photo-7434862.jpeg', created_at: '2025-04-02T11:22:45Z' },
    { id: 68, category: 'Latest', title: 'Advancements in Smart Wearables', text: 'How smart wearables are evolving and their future potential.', image: 'https://images.pexels.com/photos/3294455/pexels-photo-3294455.jpeg', created_at: '2025-04-06T14:50:12Z' },
    { id: 69, category: 'Latest', title: 'The Future of Digital Currency', text: 'Exploring the potential developments in digital currencies.', image: 'https://images.pexels.com/photos/5021431/pexels-photo-5021431.jpeg', created_at: '2025-04-09T10:15:37Z' },
    { id: 70, category: 'Latest', title: 'Trends in Sustainable Technology', text: 'How sustainable technology is advancing and its impact on the environment.', image: 'https://images.pexels.com/photos/3824360/pexels-photo-3824360.jpeg', created_at: '2025-04-13T13:20:45Z' },
    { id: 71, category: 'Latest', title: 'The Impact of 5G on Smart Cities', text: 'How 5G technology is enhancing smart city developments.', image: 'https://images.pexels.com/photos/6394159/pexels-photo-6394159.jpeg', created_at: '2025-04-17T12:25:34Z' }
  ]



  return (
    <div className='featured'>
      <div className='row'>
        <div className='left'>
          <div className='post'
            style={{
              backgroundImage: `url(${cardData[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => handleClick(cardData[0])}
          >
            <div className='black-screen'>
              <p>{cardData[0].category}</p>
              <h3>{cardData[0].title}</h3>
            </div>
          </div>
        </div>
        <div className='right'>
          {[1, 3].map((i) => (
            <div className={i === 1 ? 'first' : 'second'} key={i}>
              <div
                className='upper-post'
                style={{ backgroundImage: `url(${cardData[i].image})` }}
                onClick={() => handleClick(cardData[i])}
              >
                <div className='black-screen'>
                  <p>{cardData[i].category}</p>
                  <h3>{cardData[i].title}</h3>
                </div>
              </div>
              <div
                className='lower-post' onClick={() => handleClick(cardData[i+1])}
                style={{ backgroundImage: `url(${cardData[i+1].image})` }}
              >
                <div className='black-screen'>
                  <p>{cardData[i+1].category}</p>
                  <h3>{cardData[i+1].title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured_cardData;
