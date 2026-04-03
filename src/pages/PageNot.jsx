
import React from 'react'
import { Link } from 'react-router-dom'

const PageNot = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">

      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        404
      </h1>

      {/* Title */}
      <h2 className="text-3xl font-bold mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-full font-semibold hover:bg-cyan-300 transition"
      >
        Go Back Home
      </Link>

      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-20 right-10"></div>

    </section>
  )
}

export default PageNot