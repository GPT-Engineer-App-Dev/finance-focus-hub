import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockArticles } from "@/data/mockArticles";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <TopStories />
          <LatestNews />
        </div>
        <div>
          <MarketData />
          <TrendingTopics />
          <NewsletterSignup />
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const featuredArticle = mockArticles[0];
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-[400px] object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
        <h1 className="text-3xl font-bold mb-2">{featuredArticle.title}</h1>
        <p className="text-lg">{featuredArticle.summary}</p>
      </div>
    </div>
  );
};

const TopStories = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {mockArticles.slice(1, 5).map((article) => (
        <Card key={article.id}>
          <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-muted-foreground">{article.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const MarketData = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Market Data</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span>S&P 500</span>
          <span className="font-semibold text-green-600">+1.2%</span>
        </li>
        <li className="flex justify-between items-center">
          <span>NASDAQ</span>
          <span className="font-semibold text-red-600">-0.5%</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Dow Jones</span>
          <span className="font-semibold text-green-600">+0.8%</span>
        </li>
      </ul>
    </CardContent>
  </Card>
);

const LatestNews = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Latest News</h2>
    <ul className="space-y-4">
      {mockArticles.map((article) => (
        <li key={article.id} className="border-b pb-2">
          <h3 className="font-semibold">{article.title}</h3>
          <p className="text-sm text-muted-foreground">{article.date}</p>
        </li>
      ))}
    </ul>
  </section>
);

const TrendingTopics = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Trending Topics</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {['Economy', 'Technology', 'Markets', 'Politics', 'Global Trade'].map((topic) => (
          <li key={topic} className="text-sm hover:text-primary cursor-pointer">{topic}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const NewsletterSignup = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>Newsletter Signup</CardTitle>
    </CardHeader>
    <CardContent>
      <Input type="email" placeholder="Your email address" className="mb-2" />
      <Button className="w-full">Subscribe</Button>
    </CardContent>
  </Card>
);

const Advertisement = () => (
  <Card>
    <CardContent className="p-4">
      <div className="bg-muted h-40 flex items-center justify-center text-muted-foreground">
        Advertisement
      </div>
    </CardContent>
  </Card>
);

export default Index;