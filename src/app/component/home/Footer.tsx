export function Footer() {
  return (
    <>
      <div className=" bg-indigo-700 flex gap-30 py-10 items-start w-full h-[280px] justify-between mt-20  ">
        <div className="ml-20">
          <span className="text-[#FAFAFA] text-4 flex gap-2 items-start ">
            <img src={"icon2.png"}></img>Movie Z
          </span>

          <span className="text-[#FAFAFA]">
            © 2024 Movie Z. All Rights Reserved.
          </span>
        </div>

        <div className="flex flex-row gap-[96px] justify-end mr-20">
          <div>
            <span className="text-[#FAFAFA]">Contact Information</span>
            <div className="flex justify-center  items-center gap-3">
              <img className="w-4 h-4 " src={"icon3.png"} />
              <div className="flex flex-col">
                <span className="text-[#FAFAFA]">Email:</span>
                <span className="text-[#FAFAFA]">support@movieZ.com</span>
              </div>
            </div>
            <div className="flex justify-center  items-center gap-3">
              <img className="w-4 h-4 " src={"icon4.svg"} />
              <div className="flex flex-col">
                <span className="text-[#FAFAFA]">Phone:</span>
                <span className="text-[#FAFAFA]">+976 (11) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            Follow us
            <div className="flex gap-3 ">
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://x.com/?&"> Twitter</a>
              <a href="https://www.youtube.com/">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
