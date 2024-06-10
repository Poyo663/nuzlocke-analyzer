function App() {
  return (
    <div className="canvas flex justify-around items-center bg-[url('/public/background.jpg')] bg-cover">
      <div className="inline-block w-[60%]"></div>
      <div className="w-[30%] h-[100%] flex-row content-around justify-center bg-yellow-400">
        <p className="mt-[40%]">this is fucking dumb man</p>
        <div className="w-[70%] px-7 py-5 rounded-[3rem] bg-red-500 transition-all duration-150 hover:translate-y-[-0.25rem]">
          <a href="idk" className="text-sky-100">
            Catch &apos;em all!
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
