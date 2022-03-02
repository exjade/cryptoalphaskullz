import React from 'react'
import styles from '../styles/module/Index.module.css'

const Index = () => {
  return (
    <>
      <div className={`${styles.main_container}`}  >
        <div className={`${styles.main_wrapper} `}>
          {/* Header */}
          <header className={`${styles.header}`}  >
            <div className={`${styles.container} `}>
              <div className={`${styles.wraper} `}>
                {/* Links */}
                <div className={`${styles.links} `}>
                  <div className={`${styles.header_logo} `}>
                    <img src="/image/logo.png" alt="logo" />
                  </div>
                  <div className={`${styles.header_ancla} `}>
                    <a href="#buy">
                      <p>BUY AN ALPHASKULLZ</p>
                    </a>
                    <a href="#welcome">
                      <p>WELCOME</p>
                    </a>
                    <a href="#team">
                      <p>TEAM</p>
                    </a>
                  </div>
                  {/* TWITTER */}
                  <div className={`${styles.header_image} `}>
                    <a href="https://twitter.com/StarcatchersNFT" target="_blank" >
                      <img src="/image/twitter.png" alt="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Background Image */}
          <div className={`${styles.header_image_container} `}>
            <div className={`${styles.header_back_img} `}>
              <img src="/image/image.jpg" alt="" />
            </div>
          </div>
          {/* sections */}
          <div className={`${styles.first_section} `} id="welcome">
            <div className={`${styles.first_section_wrapper} `}>
              <div className={`${styles.section_text} `}>
                <h1>WELCOME TO THE CRYPTO ALPHA SKULLZ CLUB</h1>
                <p>
                  CryptoAlpha Skullz is a collection of 3,000 Skullz NFTs—unique digital collectibles living on the Ethereum blockchain. Your Skullz doubles as your CryptoAlpha investment, and grants access to members-only benefits, Future areas and perks can be unlocked by the community through roadmap activation.
                </p>
              </div>
              <div className={`${styles.first_section_image} `}>
                <div className={`${styles.nfts_group} `}>
                  <img src="/nfts/9.png" alt="Skullz9" />
                  <img src="/nfts/92.png" alt="Skullz92" />
                  <img src="/nfts/95.png" alt="Skullz95" />
                  <img src="/nfts/2168.png" alt="Skullz2168" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.second_section} `} id="buy">
            <div className={`${styles.second_section_wrapper} `}>
              <div className={`${styles.second_text} `}>
                <h2>BUY AN SKULLZ</h2>

              </div>
              <span  className={`${styles.second_sale}`}  >
                <p>The Initial sale is now available!. To get your Crypto Alpha Skullz, check out the collection on OpenSea.</p>
              </span>
              <div className={`${styles.second_button} `}>
                <button
                  type="button"
                  className={`${styles.button} `}
                  onClick={() => window.open('https://opensea.io/collection/cryptoalphaskullz', '_blank')}
                >
                  BUY AN SKULLZ ON OPENSEA
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.third_section} `} id="team">

          </div>

        </div >
      </div>
      {/* footer */}
    </>
  )
}

export default Index