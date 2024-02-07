import React from "react";
import img from "../../../../assets/footer-img/facebooke.svg";
import img1 from "../../../../assets/footer-img/youtube.svg";
import img2 from "../../../../assets/footer-img/tik-tok.svg";
import img3 from "../../../../assets/footer-img/telegram.svg";
import img4 from "../../../../assets/footer-img/instagram.svg";
import img5 from "../../../../assets/footer-img/Payment.png";
import img6 from "../../../../assets/footer-img/humo.png";
import img7 from "../../../../assets/footer-img/payme.svg";

export const FooterBottom = () => {
  return (
    <div className="bg-black py-6">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="">
          <h3 className=" font-light text-sm text-white mb-3">
            Ижтимоий тармоқлар
          </h3>
          <div className=" flex gap-2">
            <img src={img} alt="icon" />
            <img src={img1} alt="icon" />
            <img src={img2} alt="icon" />
            <img src={img3} alt="icon" />
            <img src={img4} alt="icon" />
          </div>
        </div>
        <div>
          <p className=" font-light text-sm text-white mb-3">Боғланиш</p>
          <div className="flex gap-4">
            <a
              className=" font-light text-base text-white"
              href="tel:+998 90 253 77 53"
            >
              +998 90 253 77 53
            </a>
            <a
              className=" font-light text-base text-white"
              href="mailto:support@liber.uz"
            >
              support@liber.uz
            </a>
          </div>
        </div>
        <div className="mr-36">
          <p className=" font-light text-sm text-white mb-3">
            Биз қабул қиламиз
          </p>
          <div className="flex gap-2">
            <img src={img5} alt="icon" />
            <img src={img6} alt="icon" />
            <img src={img7} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
