import React from 'react';
import PropTypes from 'prop-types';

const cardData = [
    // Existing entries
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
    { id: 25, category: 'Latest', title: 'The Rise of Virtual Reality in Education', text: 'How virtual reality is transforming the educational experience.', image: 'https://images.pexels.com/photos/3825538/pexels-photo-3825538.jpeg', created_at: '2024-12-06T11:50:21Z' },
    { id: 26, category: 'Latest', title: 'Breakthroughs in Renewable Energy Storage', text: 'Innovations in energy storage technologies and their potential impacts.', image: 'https://images.pexels.com/photos/2964281/pexels-photo-2964281.jpeg', created_at: '2024-12-09T13:30:45Z' },
    { id: 27, category: 'Latest', title: 'Future of Work: Remote and Hybrid Models', text: 'Exploring the future of remote and hybrid work environments.', image: 'https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg', created_at: '2024-12-12T12:15:10Z' },
    { id: 28, category: 'Tech', title: '5G Networks: What You Need to Know', text: 'Understanding the impact of 5G networks on various industries.', image: 'https://images.pexels.com/photos/3286502/pexels-photo-3286502.jpeg', created_at: '2024-12-15T10:22:31Z' },
    { id: 29, category: 'Entertainment', title: 'Virtual Concerts: The New Normal?', text: 'How virtual concerts are changing the music industry.', image: 'https://images.pexels.com/photos/2266123/pexels-photo-2266123.jpeg', created_at: '2024-12-18T14:55:42Z' },
    { id: 30, category: 'Business', title: 'The Future of Cryptocurrency', text: 'What’s next for cryptocurrencies and blockchain technology.', image: 'https://images.pexels.com/photos/676454/pexels-photo-676454.jpeg', created_at: '2024-12-21T09:47:20Z' },
    { id: 31, category: 'Sports', title: 'Mental Toughness in Competitive Sports', text: 'Techniques and strategies for developing mental toughness.', image: 'https://images.pexels.com/photos/3807606/pexels-photo-3807606.jpeg', created_at: '2024-12-23T15:30:13Z' },
    { id: 32, category: 'Politics', title: 'Election Forecast: What to Expect', text: 'Predictions and analyses for the upcoming elections.', image: 'https://images.pexels.com/photos/623574/pexels-photo-623574.jpeg', created_at: '2024-12-26T13:15:47Z' },
    { id: 33, category: 'Showbiz', title: 'Celebrity Endorsements and Their Impact', text: 'How celebrity endorsements influence consumer behavior.', image: 'https://images.pexels.com/photos/4213579/pexels-photo-4213579.jpeg', created_at: '2024-12-28T10:05:38Z' },
    { id: 34, category: 'Global', title: 'Global Health Initiatives Making a Difference', text: 'Highlighting significant global health initiatives and their impacts.', image: 'https://images.pexels.com/photos/3779777/pexels-photo-3779777.jpeg', created_at: '2024-12-30T14:32:11Z' },
    { id: 35, category: 'Tech', title: 'The Rise of Edge Computing', text: 'How edge computing is transforming data processing and storage.', image: 'https://images.pexels.com/photos/3730766/pexels-photo-3730766.jpeg', created_at: '2024-12-31T11:50:24Z' },
    { id: 36, category: 'Entertainment', title: 'Streaming Wars: A Comparative Analysis', text: 'Comparing major streaming services and their offerings.', image: 'https://images.pexels.com/photos/4413290/pexels-photo-4413290.jpeg', created_at: '2025-01-02T13:22:33Z' },
    { id: 37, category: 'Business', title: 'Navigating the Post-Pandemic Economy', text: 'How businesses are adapting to the post-pandemic economic landscape.', image: 'https://images.pexels.com/photos/4117483/pexels-photo-4117483.jpeg', created_at: '2025-01-04T10:17:20Z' },
    { id: 38, category: 'Sports', title: 'The Impact of Technology on Sports Training', text: 'How technology is changing the way athletes train and compete.', image: 'https://images.pexels.com/photos/3833471/pexels-photo-3833471.jpeg', created_at: '2025-01-06T14:08:56Z' },
    { id: 39, category: 'Politics', title: 'The Evolution of Voting Systems', text: 'Exploring changes and advancements in voting systems.', image: 'https://images.pexels.com/photos/3575080/pexels-photo-3575080.jpeg', created_at: '2025-01-09T12:33:40Z' },
    { id: 40, category: 'Showbiz', title: 'The Influence of Social Media on Celebrity Culture', text: 'How social media is shaping celebrity culture and public perception.', image: 'https://images.pexels.com/photos/5560280/pexels-photo-5560280.jpeg', created_at: '2025-01-11T15:45:33Z' },
    { id: 41, category: 'Global', title: 'The Future of International Trade Agreements', text: 'What to expect from upcoming international trade agreements.', image: 'https://images.pexels.com/photos/3058665/pexels-photo-3058665.jpeg', created_at: '2025-01-14T13:22:14Z' },
    { id: 42, category: 'Tech', title: 'Blockchain Beyond Cryptocurrency', text: 'Exploring blockchain applications outside of cryptocurrency.', image: 'https://images.pexels.com/photos/3692491/pexels-photo-3692491.jpeg', created_at: '2025-01-17T10:32:11Z' },
    { id: 43, category: 'Entertainment', title: 'The Best TV Shows to Binge-Watch in 2025', text: 'A guide to the top TV shows for your next binge-watching session.', image: 'https://images.pexels.com/photos/3292366/pexels-photo-3292366.jpeg', created_at: '2025-01-20T12:15:32Z' },
    { id: 44, category: 'Business', title: 'The Rise of Digital Nomads', text: 'Understanding the growing trend of digital nomadism and its impact on work-life balance.', image: 'https://images.pexels.com/photos/3930531/pexels-photo-3930531.jpeg', created_at: '2025-01-23T14:10:25Z' },
    { id: 45, category: 'Sports', title: 'The Psychology of Winning: What It Takes', text: 'A look into the mental aspects of achieving victory in competitive sports.', image: 'https://images.pexels.com/photos/3204794/pexels-photo-3204794.jpeg', created_at: '2025-01-26T11:50:33Z' },
    { id: 46, category: 'Politics', title: 'How Legislation is Influenced by Lobbyists', text: 'An examination of the role of lobbyists in shaping legislation.', image: 'https://images.pexels.com/photos/4505729/pexels-photo-4505729.jpeg', created_at: '2025-01-29T09:22:47Z' },
    { id: 47, category: 'Showbiz', title: 'The Evolution of Film Technology', text: 'How advancements in film technology have changed the movie industry.', image: 'https://images.pexels.com/photos/2727940/pexels-photo-2727940.jpeg', created_at: '2025-02-01T14:36:20Z' },
    { id: 48, category: 'Global', title: 'Global Efforts to Combat Plastic Pollution', text: 'Initiatives and strategies being employed to tackle plastic pollution worldwide.', image: 'https://images.pexels.com/photos/265879/pexels-photo-265879.jpeg', created_at: '2025-02-04T12:17:56Z' },
    { id: 49, category: 'Tech', title: 'The Impact of 3D Printing on Manufacturing', text: 'How 3D printing is revolutionizing the manufacturing industry.', image: 'https://images.pexels.com/photos/2562607/pexels-photo-2562607.jpeg', created_at: '2025-02-07T10:50:31Z' },
    { id: 50, category: 'Entertainment', title: 'The Most Iconic Movie Scenes of All Time', text: 'A look back at some of the most memorable scenes in film history.', image: 'https://images.pexels.com/photos/2110433/pexels-photo-2110433.jpeg', created_at: '2025-02-10T13:22:11Z' },
]


const UpperPostTemplate = ({ category, repetitions, offset ,onDataChange }) => {
    
    const sendDataToParent = (data) => {
        onDataChange(data);
      
    };
    const filteredPosts = cardData.filter(post => post.category === category);

    const postsToShow = filteredPosts.slice(offset, offset + repetitions);

    return (
        <div className='template'>
            <div className='Upper-posts'>
                {postsToShow.map(post => (
                    <div className='Upper-post' key={post.id}  onClick={() => sendDataToParent(post)}>
                        <img
                            src={post.image}
                            alt={post.title}
                            
                        />
                        <h3>{post.title}</h3>
                        <p>{new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

UpperPostTemplate.propTypes = {
    category: PropTypes.string.isRequired,
    repetitions: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    onAction: PropTypes.func,
    onDataChange: PropTypes.func.isRequired,

};

export default UpperPostTemplate;
