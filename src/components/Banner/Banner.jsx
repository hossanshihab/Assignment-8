import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-purple-700 relative mb-56 text-white text-center py-14  rounded-b-3xl space-y-2 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">
        Upgrade Your Tech Accessorize with <br />
        Gadget Heaven Accessories
      </h2>
      <p className="text-gray-300">
        Explore the latest gadgets that will take your experience to the next level. 
        From smart devices to <br /> the coolest accessories, we have it all!
      </p>
      <div className=''>
      <button className="space-y-6 cursor-pointer bg-white text-purple-700 px-4 py-2  rounded-full font-semibold">
        Shop Now
      </button>
      </div>

      <div className="flex justify-center absolute top-40 left-96">
        <img
          src={bannerImage}
          alt="VR Gadget"
          className="rounded-lg mt-20 border-2 p-2 border-white shadow-lg h-[280px] w-[650px] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
