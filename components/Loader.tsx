import Image from "next/image";

function Loader() {
  return (
    <Image
      src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=helloworld"
      alt="qr-code"
      width={400}
      height={400}
      className="blur"
    />
  );
}

export default Loader;
