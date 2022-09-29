import bgImage from "./assets/imgContent.jpg";
import aksen1 from "./assets/aksen1.svg";
import aksen2 from "./assets/aksen2.svg";
import gradasi from "./assets/gradasi.svg";
import researchIcon from "./assets/researchIcon.png";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="absolute -mx-11 top-0 left-0 z-20 flex w-full items-center">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="/"
                className="block ml-5 py-6 text-lg font-bold text-white transition ease-in-out duration-300 hover:-translate-x-3"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 45H78.75M37.5 71.25L11.25 45L37.5 71.25ZM11.25 45L37.5 18.75L11.25 45Z"
                    stroke="#F1F1F1"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute lg:static lg:block lg:max-w-full">
              <button className="transition ease-in-out duration-300 hover:scale-150">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.667 66.6666H83.3337M16.667 33.3333H83.3337H16.667Z"
                    stroke="#F1F1F1"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="w-screen pb-[147px] lg:pt-60 lg:pl-36 inset-0"
        style={{
          backgroundColor: "#1e1e1e",
        }}
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="z-10 -ml-20 absolute mt-[200px]">
              <svg
                width="15"
                height="229"
                viewBox="0 0 15 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.43466 5.71875C9.83807 5.6733 10.1506 5.4858 10.3722 5.15625C10.5966 4.8267 10.7088 4.41193 10.7088 3.91193C10.7088 3.55398 10.652 3.24432 10.5384 2.98295C10.4276 2.72159 10.2741 2.51847 10.0781 2.37358C9.88494 2.23153 9.66477 2.16051 9.41761 2.16051C9.21023 2.16051 9.03125 2.20881 8.88068 2.3054C8.73011 2.40483 8.60369 2.53409 8.50142 2.69318C8.40199 2.85511 8.31818 3.02841 8.25 3.21307C8.18466 3.39773 8.13068 3.57528 8.08807 3.74574L7.86648 4.59801C7.7983 4.87642 7.70597 5.16193 7.58949 5.45455C7.47301 5.74716 7.3196 6.01847 7.12926 6.26847C6.93892 6.51847 6.70312 6.72017 6.42187 6.87358C6.14062 7.02983 5.80398 7.10795 5.41193 7.10795C4.91761 7.10795 4.47869 6.98011 4.09517 6.72443C3.71165 6.47159 3.40909 6.10369 3.1875 5.62074C2.96591 5.14062 2.85511 4.55966 2.85511 3.87784C2.85511 3.22443 2.95881 2.65909 3.16619 2.18182C3.37358 1.70454 3.66761 1.33097 4.0483 1.06108C4.43182 0.791193 4.88636 0.642045 5.41193 0.613636L5.41193 1.93466C5.09659 1.96023 4.83381 2.0625 4.62358 2.24148C4.41619 2.4233 4.26136 2.65483 4.15909 2.93608C4.05966 3.22017 4.00994 3.53125 4.00994 3.86932C4.00994 4.24148 4.06818 4.57244 4.18466 4.86222C4.30398 5.15483 4.46875 5.38494 4.67898 5.55256C4.89205 5.72017 5.14062 5.80398 5.42472 5.80398C5.68324 5.80398 5.89489 5.73011 6.05966 5.58239C6.22443 5.4375 6.3608 5.24006 6.46875 4.99006C6.5767 4.7429 6.67187 4.46307 6.75426 4.15057L7.03551 3.11932C7.22585 2.42045 7.50568 1.86648 7.875 1.45739C8.24432 1.05114 8.73295 0.848011 9.34091 0.848011C9.84375 0.848011 10.2827 0.984375 10.6577 1.2571C11.0327 1.52983 11.3239 1.89915 11.5312 2.36506C11.7415 2.83097 11.8466 3.35653 11.8466 3.94176C11.8466 4.53267 11.7429 5.05398 11.5355 5.50568C11.3281 5.96023 11.0426 6.31818 10.679 6.57955C10.3182 6.84091 9.90341 6.97727 9.43466 6.98864L9.43466 5.71875ZM8.8892 22.29L8.8892 20.9605C9.17329 20.9094 9.42329 20.8142 9.6392 20.675C9.85511 20.5358 10.0384 20.3653 10.1889 20.1636C10.3395 19.9619 10.4531 19.7361 10.5298 19.4861C10.6065 19.2389 10.6449 18.9761 10.6449 18.6977C10.6449 18.1949 10.5185 17.7446 10.2656 17.3469C10.0128 16.952 9.64204 16.6395 9.15341 16.4094C8.66477 16.1821 8.06818 16.0685 7.36364 16.0685C6.65341 16.0685 6.05398 16.1821 5.56534 16.4094C5.0767 16.6395 4.70739 16.9534 4.45739 17.3511C4.20739 17.7488 4.08239 18.1963 4.08239 18.6935C4.08239 18.969 4.11932 19.2304 4.19318 19.4775C4.26989 19.7275 4.3821 19.9534 4.52983 20.1551C4.67756 20.3568 4.85795 20.5273 5.07102 20.6665C5.28693 20.8085 5.53409 20.9065 5.8125 20.9605L5.80824 22.29C5.37926 22.219 4.98437 22.0812 4.62358 21.8767C4.26562 21.675 3.95596 21.415 3.6946 21.0969C3.43608 20.7815 3.23579 20.4207 3.09375 20.0145C2.9517 19.6082 2.88068 19.165 2.88068 18.6849C2.88068 17.9292 3.05966 17.256 3.41761 16.665C3.77841 16.0741 4.29403 15.6082 4.96449 15.2673C5.63494 14.9292 6.43466 14.7602 7.36364 14.7602C8.29545 14.7602 9.09517 14.9307 9.76278 15.2716C10.4332 15.6125 10.9474 16.0784 11.3054 16.6693C11.6662 17.2602 11.8466 17.9321 11.8466 18.6849C11.8466 19.148 11.7798 19.5798 11.6463 19.9804C11.5156 20.3838 11.3224 20.746 11.0668 21.067C10.8139 21.3881 10.5043 21.6537 10.1378 21.8639C9.77415 22.0741 9.35795 22.2162 8.8892 22.29ZM3 30.2257L11.7273 30.2257L11.7273 33.3365C11.7273 34.0126 11.6108 34.5737 11.3778 35.0197C11.1449 35.4686 10.8224 35.8038 10.4105 36.0254C10.0014 36.247 9.52841 36.3578 8.99148 36.3578C8.45739 36.3578 7.98721 36.2456 7.58096 36.0211C7.17756 35.7995 6.86363 35.4643 6.6392 35.0155C6.41477 34.5694 6.30256 34.0084 6.30256 33.3322L6.30256 30.9757L7.43608 30.9757L7.43608 33.2129C7.43608 33.639 7.49716 33.9856 7.61932 34.2527C7.74148 34.5226 7.91903 34.72 8.15199 34.845C8.38494 34.97 8.66477 35.0325 8.99148 35.0325C9.32102 35.0325 9.60653 34.9686 9.84801 34.8407C10.0895 34.7157 10.2741 34.5183 10.402 34.2484C10.5327 33.9814 10.598 33.6305 10.598 33.1959L10.598 31.5424L3 31.5424L3 30.2257ZM6.9375 34.5339L3 36.6902L3 35.1902L6.9375 33.0765L6.9375 34.5339ZM7.36363 51.901C6.43182 51.901 5.63068 51.7306 4.96023 51.3897C4.29261 51.0488 3.77841 50.5814 3.41761 49.9877C3.05966 49.3968 2.88068 48.7249 2.88068 47.972C2.88068 47.2164 3.05966 46.5416 3.41761 45.9479C3.77841 45.357 4.29403 44.8911 4.96449 44.5502C5.63494 44.2093 6.43466 44.0388 7.36363 44.0388C8.29545 44.0388 9.09517 44.2093 9.76278 44.5502C10.4332 44.8911 10.9474 45.357 11.3054 45.9479C11.6662 46.5416 11.8466 47.2164 11.8466 47.972C11.8466 48.7249 11.6662 49.3968 11.3054 49.9877C10.9474 50.5814 10.4332 51.0488 9.76278 51.3897C9.09517 51.7306 8.29545 51.901 7.36363 51.901ZM7.36363 50.597C8.07386 50.597 8.67187 50.482 9.15767 50.2519C9.6463 50.0246 10.0156 49.7121 10.2656 49.3144C10.5185 48.9195 10.6449 48.472 10.6449 47.972C10.6449 47.4692 10.5185 47.0203 10.2656 46.6255C10.0156 46.2306 9.6463 45.9181 9.15767 45.688C8.67187 45.4607 8.07386 45.347 7.36363 45.347C6.65341 45.347 6.05398 45.4607 5.56534 45.688C5.07954 45.9181 4.71023 46.2306 4.45738 46.6255C4.20738 47.0203 4.08238 47.4692 4.08238 47.972C4.08238 48.472 4.20738 48.9195 4.45738 49.3144C4.71023 49.7121 5.07954 50.0246 5.56534 50.2519C6.05398 50.482 6.65341 50.597 7.36363 50.597ZM3 59.9027L11.7273 59.9027L11.7273 61.2195L4.13352 61.2195L4.13352 65.174L3 65.174L3 59.9027ZM3 73.0362L11.7273 73.0362L11.7273 74.3529L4.13352 74.3529L4.13352 78.3075L3 78.3075L3 73.0362ZM3 88.9949L3 86.1696L11.7273 86.1696L11.7273 89.0844C11.7273 89.9395 11.5526 90.6739 11.2031 91.2875C10.8565 91.9011 10.358 92.3713 9.70738 92.698C9.05966 93.0275 8.28267 93.1923 7.37642 93.1923C6.46733 93.1923 5.68608 93.0261 5.03267 92.6937C4.37926 92.3642 3.87642 91.8869 3.52414 91.2619C3.17471 90.6369 3 89.8812 3 88.9949ZM4.15056 87.4864L4.15056 88.9224C4.15056 89.5872 4.27556 90.1398 4.52556 90.5801C4.77841 91.0204 5.14346 91.35 5.62073 91.5687C6.10085 91.7875 6.68608 91.8969 7.37642 91.8969C8.06108 91.8969 8.64204 91.7875 9.11931 91.5687C9.59659 91.3528 9.9588 91.0304 10.206 90.6014C10.4531 90.1724 10.5767 89.6398 10.5767 89.0034L10.5767 87.4864L4.15056 87.4864ZM7.36363 108.771C6.43181 108.771 5.63068 108.6 4.96022 108.259C4.29261 107.918 3.7784 107.451 3.41761 106.857C3.05965 106.266 2.88068 105.595 2.88068 104.842C2.88068 104.086 3.05965 103.411 3.41761 102.818C3.7784 102.227 4.29403 101.761 4.96448 101.42C5.63494 101.079 6.43465 100.908 7.36363 100.908C8.29545 100.908 9.09517 101.079 9.76278 101.42C10.4332 101.761 10.9474 102.227 11.3054 102.818C11.6662 103.411 11.8466 104.086 11.8466 104.842C11.8466 105.595 11.6662 106.266 11.3054 106.857C10.9474 107.451 10.4332 107.918 9.76278 108.259C9.09517 108.6 8.29545 108.771 7.36363 108.771ZM7.36363 107.467C8.07386 107.467 8.67187 107.352 9.15767 107.122C9.6463 106.894 10.0156 106.582 10.2656 106.184C10.5185 105.789 10.6449 105.342 10.6449 104.842C10.6449 104.339 10.5185 103.89 10.2656 103.495C10.0156 103.1 9.6463 102.788 9.15767 102.558C8.67187 102.33 8.07386 102.217 7.36363 102.217C6.6534 102.217 6.05397 102.33 5.56534 102.558C5.07954 102.788 4.71022 103.1 4.45738 103.495C4.20738 103.89 4.08238 104.339 4.08238 104.842C4.08238 105.342 4.20738 105.789 4.45738 106.184C4.71022 106.582 5.07954 106.894 5.56534 107.122C6.05397 107.352 6.6534 107.467 7.36363 107.467ZM2.99999 118.376L11.7273 115.955L11.7273 117.34L4.96874 119.041L4.96874 119.121L11.7273 120.89L11.7273 122.262L4.96448 124.031L4.96448 124.112L11.7273 125.808L11.7273 127.197L2.99999 124.772L2.99999 123.447L9.53693 121.61L9.53693 121.542L2.99999 119.705L2.99999 118.376ZM11.7273 141.801L2.99999 141.801L2.99999 140.591L9.40056 136.155L9.40056 136.074L2.99999 136.074L2.99999 134.757L11.7273 134.757L11.7273 135.976L5.31818 140.416L5.31818 140.497L11.7273 140.497L11.7273 141.801Z"
                  fill="#F1F1F1"
                />
                <line
                  x1="7"
                  y1="171"
                  x2="7"
                  y2="228"
                  stroke="#F1F1F1"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="absolute ml-[15rem] w-full items-center z-10 top-0">
              <img src={gradasi} alt="Gambar" />
              <div className="absolute top-0 ml-[31rem] mt-[8rem] w-full items-center z-20">
                <img
                  src={researchIcon}
                  alt="GambarResearch"
                  style={{ width: "406px" }}
                />
              </div>
            </div>
            <div className="w-full z-10 self-center px-4 lg:w-1/2">
              <h1
                className="font-base text-8xl tracking-wide mb-4"
                style={{ color: "#f1f1f1" }}
              >
                Research & <span className="block">Development</span>
              </h1>
              <span className="hover:scale-150 hover:duration-300">
                <svg
                  width="119"
                  height="24"
                  viewBox="0 0 119 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2"
                    y1="2"
                    x2="77"
                    y2="2"
                    stroke="#EF4444"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="42"
                    y1="22"
                    x2="117"
                    y2="22"
                    stroke="#EF4444"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <h3
                className="mt-3 font-base text-3xl tracking-wide"
                style={{ color: "#f1f1f1" }}
              >
                High quality products
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bidang Rnd Section */}
      <section id="bidang" className="pt-10 pb-1 w-screen inset-0">
        <div className="container">
          <div className="z-10 -mt-10 -mx-11 absolute h-screen">
            <img src={aksen2} alt="GambarAksen2" />
          </div>
          <div className="z-20 relative">
            <div className="w-full px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h4
                  className="mb-64 text-6xl font-base tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Bidang Bidang RnD
                </h4>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 lg:w-1/2">
                <img
                  src={bgImage}
                  className="bg-cover ml-5 bg-center rounded-lg shadow-xl transition ease-in-out hover:shadow-blue-500 hover:-translate-y-3 duration-300"
                  alt="ImageContent"
                />
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <h1
                  className="font-base text-6xl tracking-wide mb-8 ml-16"
                  style={{ color: "#000000" }}
                >
                  Software <span className="block">Development</span>
                </h1>
                <h3
                  className="mt-3 font-base max-w-xl ml-16 text-justify text-lg tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya
                  yah Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah
                  isinya yah Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu
                  ajah isinya yah Lorem ipsum dulu ajah isinya yah Lorem ipsum
                  dulu ajah isinya yah Lorem ipsum dulu ajah isinya yah Lorem
                  ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya yah
                  Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya
                  yah
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="z-10 mt-0.5 -mx-11 absolute h-screen">
              <img src={aksen1} alt="GambarAksen1" />
            </div>
            <div className="w-full px-4">
              <div className="mx-auto mt-48 mb-16 max-w-xl text-center">
                <h4
                  className="mb-28 text-5xl font-base tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Product / Portfolio
                </h4>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-5">
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Robotic
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Robotic
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Robotic
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Robotic
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 mt-[12rem] -mx-11 absolute h-screen">
            <img src={aksen2} alt="GambarAksen2" />
          </div>
          <div className="z-20 relative">
            <div className="flex flex-wrap mt-72 mb-[30rem]">
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1
                  className="font-base text-6xl tracking-wide mb-3 ml-16"
                  style={{ color: "#000000" }}
                >
                  Multimedia
                </h1>
                <h3
                  className="mt-3 font-base max-w-xl ml-16 text-justify text-lg tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya
                  yah Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah
                  isinya yah Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu
                  ajah isinya yah Lorem ipsum dulu ajah isinya yah Lorem ipsum
                  dulu ajah isinya yah Lorem ipsum dulu ajah isinya yah Lorem
                  ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya yah
                  Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah isinya
                  yah Lorem ipsum dulu ajah isinya yah Lorem ipsum dulu ajah
                  isinya yah Lorem ipsum dulu ajah isinya yah
                </h3>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <img
                  src={bgImage}
                  className="bg-cover ml-5 bg-center rounded-lg shadow-xl transition ease-in-out hover:shadow-blue-500 hover:-translate-y-3 duration-300"
                  alt="ImageContent"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="z-10 -mt-1 -mx-11 absolute h-screen">
              <img src={aksen1} alt="gambar" />
            </div>
            <div className="w-full px-4">
              <div className="mx-auto mb-16 max-w-xl text-center">
                <h4
                  className="mb-28 text-5xl font-base tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Product / Portfolio
                </h4>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-5">
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Metaverse
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          3D Animation
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          Website
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-20 wrapper antialiased">
                  <div className="transition ease-in-out duration-300 hover:-translate-y-3">
                    <div
                      className="block border border-gray-200"
                      style={{ background: "#ADADAD" }}
                    >
                      <img
                        src={bgImage}
                        alt="Gambar Product"
                        style={{ width: "300px" }}
                      />
                    </div>
                    <div className="relative px-4 -mt-16">
                      <div className="px-16 py-14 mb-5 bg-opacity-20 backdrop-blur-2xl bg-warnas rounded-lg shadow-md">
                        <h3 className="-px-10 text-xl text-center font-semibold mt-3">
                          UI Design
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ruangan RnD Section */}
      <section id="ruangan" className="pt-1 pb-[458px] w-screen inset-0">
        <div className="container">
          <div>
            <div className="z-10 -mx-11 absolute h-screen">
              <img src={aksen1} alt="GambarAksen1" />
              <img src={aksen2} alt="GambarAksen2" />
              <img src={aksen1} alt="GambarAksen1" />
              <img src={aksen2} alt="GambarAksen2" />
            </div>
            <div className="w-full px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h4
                  className="mb-56 z-20 mt-[11rem] ml-10 text-5xl font-base tracking-wide"
                  style={{ color: "#000000" }}
                >
                  Ruangan Ruangan RnD
                </h4>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full z-20 self-center -mt-24 lg:w-1/2 ml-5 border border-gray-200 bg-white shadow-xl rounded-lg transition ease-in-out duration-300 hover:-translate-y-3 hover:shadow-blue-500">
                  <img
                    src={bgImage}
                    className="bg-cover bg-center w-full shadow-xl"
                    alt="ImageContent"
                  />
                  <h1
                    className="font-base text-4xl ml-3 tracking-wide mt-5 mb-3"
                    style={{ color: "#000000" }}
                  >
                    Ruang Aplikasi
                  </h1>
                  <h3
                    className="mt-5 font-base max-w-sm ml-3 mb-3 text-justify text-lg tracking-wide"
                    style={{ color: "#000000" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-full self-end z-20 mt-40 lg:w-1/2 border border-gray-200 bg-white shadow-xl rounded-lg transition ease-in-out duration-300 hover:-translate-y-3 hover:shadow-blue-500">
                  <img
                    src={bgImage}
                    className="bg-cover bg-center shadow-xl"
                    alt="ImageContent"
                  />
                  <h1
                    className="font-base text-4xl text-right tracking-wide mt-5 mb-3 mr-3"
                    style={{ color: "#000000" }}
                  >
                    TIKomPedia
                  </h1>
                  <div className="flex justify-end place-items-end">
                    <h3
                      className="font-base max-w-sm text-lg text-justify tracking-wide mt-5 mb-3 mr-3"
                      style={{ color: "#000000" }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full self-center z-20 mt-40 lg:w-1/2 ml-5 border border-gray-200 bg-white shadow-xl rounded-lg transition ease-in-out duration-300 hover:-translate-y-3 hover:shadow-blue-500">
                  <img
                    src={bgImage}
                    className="bg-cover bg-center w-full shadow-xl"
                    alt="ImageContent"
                  />
                  <h1
                    className="font-base text-4xl ml-3 tracking-wide mt-5 mb-3"
                    style={{ color: "#000000" }}
                  >
                    Data Center
                  </h1>
                  <h3
                    className="mt-5 font-base max-w-sm ml-3 mb-3 text-justify text-lg tracking-wide"
                    style={{ color: "#000000" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </h3>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-full self-end z-20 mt-40 lg:w-1/2 border border-gray-200 bg-white shadow-xl rounded-lg transiton ease-in-out duration-300 hover:-translate-y-3 hover:shadow-blue-500">
                  <img
                    src={bgImage}
                    className="bg-cover bg-center shadow-xl"
                    alt="ImageContent"
                  />
                  <h1
                    className="font-base text-4xl text-right tracking-wide mt-5 mb-3 mr-3"
                    style={{ color: "#000000" }}
                  >
                    Lab IOS
                  </h1>
                  <div className="flex justify-end place-items-end">
                    <h3
                      className="font-base max-w-sm text-lg text-justify tracking-wide mt-5 mb-3 mr-3"
                      style={{ color: "#000000" }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
