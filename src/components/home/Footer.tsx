export function Footer() {
  return (
    <>
      <div className="max-[375px]:flex-col bg-indigo-700 flex gap-30 py-10 items-start w-full h-[280px] justify-between mt-20  ">
        <div className="ml-20">
          <span className="text-[#FAFAFA] text-4 flex gap-2 items-start ">
            <img className="h-5" src={"Logo.png"} />
          </span>

          <span className="text-[#FAFAFA] text-nowrap">
            © 2024 Movie Z. All Rights Reserved.
          </span>
        </div>

        <div className="max-[375px]:flex-col flex flex-row gap-[96px] justify-end ">
          <div>
            <span className="text-[#FAFAFA] flex mb-[12px] ">
              Contact Information
            </span>

            <div className="flex   items-center gap-3 mb-6">
              <img className="w-4 h-4 " src={"mailIcon.svg"} />
              <div className="flex flex-col">
                <p className="text-[#FAFAFA]">Email:</p>
                <p className="text-[#FAFAFA]">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex   items-center gap-3 w">
              <img className="w-4 h-4 " src={"phoneIcon.png"} />
              <div className="flex flex-col">
                <p className="text-[#FAFAFA]">Phone:</p>
                <p className="text-[#FAFAFA]">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="text-[#FAFAFA] mr-20">
            Follow us
            <div className="flex gap-3 ">
              <a className="text-[#FAFAFA]" href="https://www.facebook.com/">
                Facebook
              </a>
              <a className="text-[#FAFAFA] " href="https://www.instagram.com/">
                Instagram
              </a>
              <a className="text-[#FAFAFA] " href="https://x.com/?&">
                Twitter
              </a>
              <a className="text-[#FAFAFA] " href="https://www.youtube.com/">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
