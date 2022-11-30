function Video({ linkVideo }) {
  return (
    <div className="w-full max-w-[990px] m-auto py-3 mt-6 bg-black">
      <video src={linkVideo} controls width="100%" />
    </div>
  );
}

export default Video;
