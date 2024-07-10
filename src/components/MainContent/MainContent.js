import React from "react";
import "./MainContent.css";
import CardList from "../CryptoCards/CardList";
const MainContent = () => {
  return (
    <div>
      <div className="main-content">
        <div className="hero-section">
          <img
            src="https://www.intract.io/assets/intract-academy-background-5547a705.png"
            alt="background-image"
          />
          <div className="hero-text">
            <div className="hero-heading">
              <img
                src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
                className="hero-logo"
                alt="academy-animated-logo"
              />
            </div>
            <p>
              <span className="col-text">Intract users</span> have together made
              more than <span className="col-text">$100 million</span> in web3.
              Join them and{" "}
              <span className="col-text">learn how to earn crypto!</span>
            </p>
            <button className="get-started">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-165px" }}>
        <div className="outer-container__">
          <div className="inner-container1__">
            <div className="inner-container2__">
              <div className="dot__ dashed">
                <svg
                  width="121"
                  height="19"
                  viewBox="0 0 121 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211"
                    stroke="#A286F2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-dasharray="8 8"
                  ></path>
                </svg>
              </div>
              <div className="_narrative_container_1uq5j_1 _narrative_open_1uq5j_9">
                <div className="_narrative_header_1uq5j_13">
                  {/* <div className="_collapse_action_1uq5j_31">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-caret-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
                    </svg>
                  </div> */}

                  <div className="_narrative_header_image_1uq5j_43">
                    <img
                      src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
                      alt=""
                    />
                    <div className="_quest_count_1uq5j_205">6 Quests</div>
                  </div>
                  <div className="_narrative_header_info_1uq5j_58">
                    <div className="_narrative_header_title_1uq5j_62">
                      Basics of Crypto
                    </div>
                    <div className="_narrative_header_sub_1uq5j_69">
                      The safest and easiest place to start your crypto journey!
                    </div>

                    <hr className="_custom_hr_1c8vj_1" />
                    <div className="_narrative_header_rewards_1uq5j_81">
                      <div className="_reward_count_1uq5j_169">
                        <img
                          src="https://www.intract.io/assets/xp-icon-aacd204a.svg"
                          alt=""
                          width="18"
                          height="16"
                        />
                        1490 XPs
                      </div>
                    </div>
                  </div>
                </div>

                <CardList />
              </div>
            </div>

            <div className="cat-container_">
              <div className="topPortion">
                <span className="paragraph-text">Road to your Learner NFT</span>
                <img
                  src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
                  alt="Learner NFT"
                  className="cat-image-logo"
                />
              </div>
              <div className="bottomPortion">
                <div className="text-container">
                  <div className="nft-container">
                      <p className="nft-description">
                        Intract Certified: Learner NFT
                      </p>
                  </div>
                  <p className="nft-subdescription">
                    Your crypto black-belt certificate
                  </p>
                  <button className="claim-button" disabled>
                    Claim
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
