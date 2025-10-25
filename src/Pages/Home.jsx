
function Home() {

  return (
    <>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-200 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-600">QuizMaster</h1>
        <nav>
          <a href="#features" className="mx-3 hover:text-blue-600">Features</a>
          <a href="#about" className="mx-3 hover:text-blue-600">About</a>
          <a href="/quiz" className="mx-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Start Quiz</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4 text-blue-700">Test Your Knowledge!</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Welcome to <span className="font-semibold text-blue-600">QuizMaster</span> — the fun and interactive way to learn while playing!
          Challenge yourself and improve your skills with our timed quizzes.
        </p>
        <a href="/quiz" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
          Start Now
        </a>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-10">Why You'll Love It</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Timed Quizzes</h4>
            <p>Keep your mind sharp with exciting timed challenges that test your focus and speed.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Track Progress</h4>
            <p>See your scores and improvements after each quiz to monitor your learning journey.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">Fun Learning</h4>
            <p>Engage with topics in a fun, interactive format that makes studying feel like a game!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-blue-600 text-white">
        <p>© {new Date().getFullYear()} QuizMaster — All Rights Reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home
