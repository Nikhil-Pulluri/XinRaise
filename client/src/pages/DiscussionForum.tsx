import ForumCard from '@/components/ForumCard'

const DiscussionForum = () => {
  const forumCardDataArray = [
    {
      date: 'Apr 12, 2024',
      category: 'Technology',
      title: 'The rise of AI in modern applications',
      description: 'Discover how AI is transforming various industries, from healthcare to finance, and what the future may hold.',
      readMoreLink: '#',
      author: '0x1234567890abcdef1234567890abcdef12345678'
    },
    {
      date: 'May 8, 2024',
      category: 'Health & Wellness',
      title: 'Mindfulness and Meditation for Stress Relief',
      description: 'Learn about the benefits of mindfulness and meditation practices in managing stress and promoting mental well-being.',
      readMoreLink: '#',
      author: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd'
    },
    {
      date: 'Jun 15, 2024',
      category: 'Education',
      title: 'Innovative Teaching Methods for the Future',
      description: 'Explore new and innovative teaching methods that are shaping the future of education and enhancing student learning.',
      readMoreLink: '#',
      author: '0x7890123456789012345678901234567890123456' // MetaMask wallet address
    },
    {
      date: 'Jul 20, 2024',
      category: 'Business',
      title: 'Sustainable Business Practices for Growth',
      description: 'Understand how sustainable business practices can drive growth and create long-term value for organizations.',
      readMoreLink: '#',
      author: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd' // MetaMask wallet address
    },
    {
      date: 'Aug 5, 2024',
      category: 'Environment',
      title: 'The Importance of Biodiversity Conservation',
      description: 'Learn about the significance of biodiversity conservation and the impact of human activity on ecosystems.',
      readMoreLink: '#',
      author: '0x5678901234567890123456789012345678901234'
    }
  ];
  return (
    <div className='flex items-center justify-center gap-5 flex-col'>
      <ForumCard data={forumCardDataArray[0]} />
      <ForumCard data={forumCardDataArray[1]} />
      <ForumCard data={forumCardDataArray[2]} />
      <ForumCard data={forumCardDataArray[3]} />
      <ForumCard data={forumCardDataArray[4]} />
    </div>
  )
}

export default DiscussionForum
