import reactImg from "../assets/gift_bg.jpg";

const MessagePage = () => {
  return (
    <>
      <div className="w-full h-[100vh] tablet:h-[130vh] relative">
        <img
          src={reactImg}
          className="w-full h-full object-cover absolute top-0"
        />
        <div className="w-full h-full bg-[rgba(14,39,46,0.95)] flex justify-center items-center absolute">
          <div className="h-full w-[65%] p-5 flex flex-col items-center phone:text-[13px] miniLapTop:w-[90%] bg-white">
            <p className="font-bold text-[30px] phone:text-[20px] text-purple-500">
              Welcome to GiftACB
            </p>
            <p className="text-[50px] phone:text-[30px] font-bold">₦200.00</p>
            <div>
              <p>Hi there!!!</p>
              <p>
                Welcome to <span className="font-bold">GiftACB</span>! We're
                thrilled to have you on board and grateful for choosing us as
                your platform of choice.
              </p>
              <br />
              <p>
                As a token of our appreciation, we're excited to reward you with
                ₦200.00 just for signing up! This is our way of saying thank you
                for being a part of our community.
              </p>
              <br />
              <p>
                To claim your reward and get started, all you need to do is
                verify your account. Simply check your registered email for a
                verification message from us, and follow the instructions
                provided. Once verified, your ₦200.00 reward will be credited to
                your account.
              </p>
              <div className="text-center">
                <a
                  className="px-5 py-2 border w-[100px]"
                  href="https://mail.google.com"
                >
                  Verify
                </a>
              </div>
              <br />
              <p>
                We're here to help you every step of the way. If you have any
                questions or need assistance, please don't hesitate to reach out
                to our support team.
              </p>
              <br />
              <p>
                Thank you for joining us on this journey! We can't wait to see
                all the amazing things you'll accomplish on GiftACB.
              </p>
              <br />
              <p>Warm regards,</p>
              <br />
              <p className="font-bold">Franklin O.A.C</p>
              <p className="font-bold">Software Engineer</p>
              <p className="font-bold">#5 Challenge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
