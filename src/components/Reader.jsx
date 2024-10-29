import reader from "../assets/reader.png";

const Reader = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <img className="w-full mx-auto " src={reader} alt="" />
      <div className="flex items-center justify-center">
        <div className="reader-scanner "></div>
      </div>

      <div className="absolute top-1/2 text-center h-full w-full text-white space-y-3 py-5 z-50">
        <p>Research and reading</p>{" "}
        <h1 className="text-4xl font-semibold">Never lose information</h1>
        <p>
          Collect your web snippets, Kindle highlights and important links – all
          in one place. Then quickly find them again from any device.
        </p>
      </div>
    </div>
  );
};

export default Reader;
