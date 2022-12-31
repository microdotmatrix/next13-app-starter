export default function ContactPage() {
  return (
    <>
      <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-5xl font-bold mb-8">Contact Page</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
              Get in touch with me
            </h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an&nbsp;
              <a className="underline" href="mailto:someone@gmail.com">
                email
              </a>
              instead.
            </div>
          </div>
          <div className="mt-12 text-center">
            <img src="https://dummyimage.com/500x300" alt="Contact" />
          </div>
        </div>
        <form> 
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              type="text"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Phone Number
            </span>
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              type="phone"
              placeholder="Enter your Phone Number including country code"
              required
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  )
}