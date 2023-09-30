export default function Bg() {
  return (
    <>
      <div className="bg-mainblue w-[32rem] h-[32rem] rounded-full absolute right-20 bottom-20 opacity-60"></div>
      <div className="bg-mainblue w-6 h-6 rounded-full absolute right-92 bottom-96 opacity-60"></div>
      <div className="bg-mainblue w-6 h-6 rounded-full absolute right-20 bottom-[30rem] opacity-60"></div>
      <div className="bg-mainblue w-6 h-6 rounded-full absolute left-20 bottom-[40rem] opacity-60"></div>
      <div className="bg-mainblue w-6 h-6 rounded-full absolute left-[50%] top-[45%] opacity-60"></div>
      <div className="bg-mainblue w-6 h-6 rounded-full absolute right-20 bottom-20 opacity-60"></div>
      <div className="bg-gradient-to-t h-10 w-10 from-white to-transparent absolute top-40 left-96 grid place-content-center border-2 border-white rotate-45">
        8
      </div>
      <div className="bg-gradient-to-t h-10 w-10 from-white to-transparent absolute bottom-40 right-96 grid place-content-center border-2 border-white rotate-45">
        8
      </div>
      <div className="bg-gradient-to-t h-10 w-10 from-white to-transparent absolute top-40 left-96 grid place-content-center border-2 border-white rotate-45">
        8
      </div>
      <img
        className="absolute top-[34%] left-[23%] w-8 h-8 rotate-12"
        src="/images/plus.png"
        alt=""
      />
    </>
  );
}
