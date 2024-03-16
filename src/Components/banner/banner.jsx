
const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/QHs89j9/banner-Chef.png)'}}>
  <div className="hero-overlay rounded-3xl bg-opacity-20 text-center"></div>
  <div className="hero-content text-center text-neutral-content p-20">
    <div className="lg:w-2/3">
      <h1 className="mb-5 text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className="flex flex-row gap-4 justify-center">
      <button className="btn rounded-full bg-[#0BE58A] text-black px-6">Explore Now</button>
      <button className="btn rounded-full text-white btn-outline px-6 outline-white">Get Started</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;