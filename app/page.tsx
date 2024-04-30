import CodeQr from "@/components/CodeQr";
import Download from "@/components/Download";
import InputEncodeText from "@/components/InputEncodeText";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-lg px-4 md:px-16 py-6 md:py-12">
        <div className="max-w-xs md:max-w-lg space-y-8 mb-4">
          <h2 className="text-5xl sm:text-6xl md:text-8xl text-primary font-bold max-w-xs md:max-w-lg font-kanit">
            Convert your Link to QR code
          </h2>
          <InputEncodeText />
          <p className="text-body max-w-md">
            Your QR code will be generated automatically, your generated QR code
            will open this URL.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-secondary justify-center items-center gap-10 rounded-lg p-6 lg:px-16 lg:py-12">
        <CodeQr />
        <Download />
      </div>
    </section>
  );
}
