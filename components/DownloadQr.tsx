enum FileFormat {
  PNG = "png",
  JPG = "jpg",
  SVG = "svg",
}

const DownloadQr = () => {
  return (
    <div className="flex w-full justify-between items-center gap-4">
      <button className="flex-1 font-lg bg-blue-500 rounded-lg px-6 py-3 text-white disabled:bg-btn-muted disabled:text-neutral-500 max-w-xs" disabled>Download</button>
      <div className="flex flex-row gap-2 items-center">
        <span>File format:</span>
        <select name="" id="" className="appearance-none rounded-lg bg-white border border-border px-4 py-2 outline-none ">
          {Object.values(FileFormat).map((format) => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DownloadQr;
