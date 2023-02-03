export const SloganWrapper = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-primarydark
        flex
        p-10
        flex-col
        lg:py-28
        lg:px-32
        justify-between
        items-center
        sm:flex-row
        "
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div
          className="
          flex
          flex-col
          m-0
          text-center
          space-y-4
          mb-4
          sm:space-y-8
          sm:mb-8
          sm:mb-0
          sm:w-1/2
          sm:text-start
          xl:w-3/5
          2xl:w-1/2
        "
        >
          <div
            className="
              text-white
              font-medium
              text-4xl
              lg:text-6xl
              xl:text-7xl"
          >
            "A bad day on a mountain bike always beats a good day in the
            office."
          </div>
          <div
            className="font-normal
          text-base
          text-secondarydark"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            blanditiis possimus, laboriosam laudantium tenetur.
          </div>
        </div>
        <div
          className="w-64
          lg:w-80
          2xl:w-96
          flex
          flex-col
          items-center"
        >
          <img
            src={require("../../assets/logo1.png")}
            alt=""
            className="w-full absolute w-80 lg:w-96"
          />
          <img
            src={require("../../assets/logo2.png")}
            alt=""
            className="w-48 lg:w-64 rounded-md mt-32 lg:mt-40"
          />
        </div>
      </div>
    </div>
  );
};
