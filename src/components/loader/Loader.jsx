const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div
        className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Loader;
