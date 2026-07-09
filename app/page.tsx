import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I’m an SEO Specialist who enjoys writing about online games, 
        sports, digital platforms, and the trends that keep players 
        and readers interested. Through my blog, I share content that blends SEO,
        gaming topics, sports insights, and easy-to-read guides for 
        people who enjoy exploring the online entertainment space :)`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
