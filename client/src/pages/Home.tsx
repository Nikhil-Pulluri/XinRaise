import ForumCard from '@/components/ForumCard'
import FundingCard from '@/components/fundingCard'

const Home = () => {
  const forumCardData = {
    date: 'Mar 10, 2019',
    category: 'Design',
    title: 'Accessibility tools for designers and developers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
    readMoreLink: '#',
    author: {
      name: 'Khatab Wedaa',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80'
    }
  };
  return (
    <div className='flex items-center justify-center gap-5 flex-col'>
      <ForumCard data={forumCardData} />
      <ForumCard data={forumCardData} />
      <FundingCard />
      <ForumCard data={forumCardData} />
      <ForumCard data={forumCardData} />
      <FundingCard />
      <ForumCard data={forumCardData} />
      <ForumCard data={forumCardData} />

    </div>
  )
}

export default Home
