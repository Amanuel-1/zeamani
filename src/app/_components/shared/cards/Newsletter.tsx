const Newsletter = () => {
  return (
    <div className="mt-8 grid w-full grid-cols-8 md:p-14 bg-black/5">
      <iframe
        src="https://embeds.beehiiv.com/29187b69-c90a-4d17-9a69-35ef0403e14f"
        data-test-id="beehiiv-embed"
        className="flex items-center col-span-3 m-0 h-[200px] w-full border-[2px] border-[#0c0c0c] bg-transparent"
      ></iframe>
      <div className="col-span-5 ml-4 w-full px-4 py-2">
        <h2 className="mb-2 text-2xl font-bold">
          Join My Exclusive Newsletter!
        </h2>
        <p className="text-base">
          Unlock a world of knowledge with our weekly newsletter! Stay ahead in
          the tech game with exclusive insights, cutting-edge paper summaries,
          the latest tech trends, engaging blogs, exciting events, and hands-on
          tutorials delivered straight to your inbox.
        </p>
        <p className="font-semibold text-base">
          Do not miss out—subscribe now and elevate your digital journey with us!
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

{
  /* <iframe src="https://embeds.beehiiv.com/29187b69-c90a-4d17-9a69-35ef0403e14f" data-test-id="beehiiv-embed" width="100%" height="320"  className="rounded-[4px] border-[2px] border-[#5b81cc] m-0 bg-yellow-500"></iframe> */
}
