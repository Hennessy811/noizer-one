import React from 'react';

const Landing = () => {
  return (
    <div>
      <section className="relative bg-yellow-300 py-13">
        <div className="custom-shape-divider-top-1629800889">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center px-2 m-auto max-w-prose min-h-100 md:px-0">
          <h1 className="text-5xl font-bold text-gray-700 md:text-6xl">
            Noizer One
          </h1>
          <p className="mt-4 text-lg font-medium text-center text-gray-700">
            <p>Create your own soundscapes</p>
            <p>Listen to ambient sounds</p>
            <p>Dive into your own flow</p>. . .
          </p>

          <div className="flex flex-col mt-12 md:flex-row">
            <button className="px-6 py-2 text-lg font-light tracking-wider text-yellow-600 uppercase transition duration-300 bg-white border border-yellow-500 shadow-xl md:px-8 focus:shadow hover:shadow-md rounded-xl hover:bg-yellow-500 hover:text-white">
              Sign Up and Get started!
            </button>
            <button className="px-8 py-2 my-4 text-lg font-light tracking-wider text-indigo-600 uppercase transition duration-300 bg-white border border-indigo-500 shadow-xl md:my-0 md:ml-4 focus:shadow hover:shadow-md rounded-xl hover:bg-indigo-500 hover:text-white">
              Try sample
            </button>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1629802186">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="relative px-6 bg-red-300 md:px-0">
        <div className="flex flex-col items-center justify-center pb-12 m-auto max-w-prose min-h-80">
          <div className="flex flex-col items-center justify-between text-gray-800 md:flex-row">
            <div className="md:pr-12 text-9xl">🙆</div>
            <div>
              <h2 className="text-3xl font-bold">
                Built to hide you from distractions
              </h2>
              <p className="mt-4 text-lg">
                Just pick sounds you like, or just get random ones with shuffle
                - and start doing things.
              </p>
              <p className="mt-2 text-lg">Or just sit back and relax.</p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between mt-24 text-gray-800 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold">
                For those who tired of random YouTube videos and tools with dumb
                limitations
              </h2>
              <h3 className="text-xl font-light text-gray-600">
                (like daily limit for listening)
              </h3>
              <p className="mt-4 text-lg">
                All core functionality - free forever. Really, without bullshit
                - listen as much as you want. There may be some paid features
                upcoming, but we wont force you to buy.
              </p>
            </div>
            <div className="md:pl-12 text-9xl">🧠</div>
          </div>
          <div className="flex flex-col mt-12 md:flex-row">
            <button className="px-8 py-2 text-lg font-light tracking-wider text-indigo-600 uppercase transition duration-300 bg-white border border-indigo-500 shadow-xl md:mr-4 focus:shadow hover:shadow-md rounded-xl hover:bg-indigo-500 hover:text-white">
              Try sample
            </button>
            <button className="px-8 py-2 my-4 text-lg font-light tracking-wider text-yellow-600 uppercase transition duration-300 bg-white border border-yellow-500 shadow-xl md:my-0 focus:shadow hover:shadow-md rounded-xl hover:bg-yellow-500 hover:text-white">
              Sign Up and Get started!
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-6 bg-purple-300 md:px-0">
        <div className="custom-shape-divider-top-1629804312">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center py-24 m-auto text-gray-800 max-w-prose min-h-80">
          <h3 className="text-xl font-bold">Not ready yet?</h3>
          <h2 className="mt-2 text-4xl font-bold text-center">
            Try <span className="text-5xl text-white">Zen mode</span>!
          </h2>
          <p className="mt-4 text-lg text-center">
            In collaboration with Mubert we created unique personal AI-powered
            flow which magically🧙 adjusts to you.
          </p>
          <p className="mt-12 text-8xl">🤯</p>
          <div className="mt-12">
            <button className="px-8 py-2 text-lg font-light tracking-wider text-yellow-600 uppercase transition duration-300 bg-white border border-yellow-500 shadow-xl focus:shadow hover:shadow-md rounded-xl hover:bg-yellow-500 hover:text-white">
              Just lemme try that!
            </button>
          </div>
        </div>

        {/* <div className="custom-shape-divider-bottom-1629804979">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>

      <section className="relative px-6 bg-yellow-300 md:px-0">
        <div className="flex flex-col items-center justify-center py-24 m-auto text-gray-800 max-w-prose min-h-80">
          <h2 className="mt-2 text-4xl font-bold">
            Get Noizer <span className="text-white">on your device</span>!
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Landing;
