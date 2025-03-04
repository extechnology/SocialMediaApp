import PostCard from "@/components/Post/PostCard"


export default function Feed() {


  const dummyPosts = [
    {
      author: {
        username: "john_doe",
        displayName: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      content: "This is John's first post!",
      image: "https://img.freepik.com/premium-photo/cool-cat-wearing-pink-sunglasses-with-neon-light-background_514761-16858.jpg",
      createdAt: new Date().toISOString(),
      comments: 3,
      likes: 10,
    },
    {
      author: {
        username: "jane_smith",
        displayName: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      content: "Loving this new platform! 🚀",
      image: "https://img.freepik.com/premium-photo/cat-wearing-red-hood-goggles_604472-38514.jpg",
      createdAt: new Date().toISOString(),
      comments: 8,
      likes: 24,
    },
    {
      author: {
        username: "alex_lee",
        displayName: "Alex Lee",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      content: "Anyone up for a coding challenge? 👨‍💻",
      image: "https://img.freepik.com/premium-photo/cat-wearing-red-hood-goggles_604472-38514.jpg",
      createdAt: new Date().toISOString(),
      comments: 5,
      likes: 18,
    },
  ];


  return (

    <>

      <main className="w-full h-full">

        {dummyPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}

      </main>


    </>


  )




}
