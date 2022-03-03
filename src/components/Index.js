import styles from '../styles/module/Index.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import useMobile from '../hooks/use-mobile'
import useModal from '../hooks/use-modal'
import * as ROUTES from '../constants/routes'

const Index = () => {
  const { toggleModal, closeModal, open, setOpen } = useModal()
  const { mobile } = useMobile(setOpen)
  return (
    <>
      <div className={`${styles.main_container}`}  >
        <div className={`${styles.main_wrapper} `}>
          {/* Header */}
          <header className={`${styles.header}`} id="home" >
            {
              mobile ? (
                <div className={`${styles.container} `}>
                  <div className={`${styles.wraper} `}>
                    {/* Links */}
                    <div className={`${styles.links} `}>
                      <div className={`${styles.header_logo} `}>
                        <a href={ROUTES.SKULLZ} >
                          <img src="/image/logo.png" alt="logo" />
                        </a>
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
                        <a href="https://twitter.com/cryptoalphasku1" target="_blank" rel="noreferrer" >
                          <img src="/image/twitter.png" alt="twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : open ? (
                // END
                <div className={`${styles.mobile_container} `}>
                  <div className={`${styles.mobile_wraper} `}>
                    {/* Links */}
                    <div className={`${styles.mobile_links} `}>
                      <div className={`${styles.mobile_logo} `}>
                        <img src="/image/logo.png" alt="logo" />
                      </div>
                      {/* TWITTER */}
                      <div className={`${styles.mobile_menu} `} >
                        <MenuIcon sx={{ color: "white" }}
                          onClick={() => { closeModal() }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
                : (
                  <div className={`${styles.mobile_container} `}>
                    <div className={`${styles.mobile_wraper} `}>
                      {/* Links */}
                      <div className={`${styles.mobile_links} `}>
                        <div className={`${styles.mobile_logo} `}>
                          <img src="/image/logo.png" alt="logo" />
                        </div>
                        {/* TWITTER */}
                        <div className={`${styles.mobile_menu} `} >
                          <MenuIcon sx={{ color: "white" }}
                            onClick={() => { toggleModal() }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            }
          </header>
          {/* Background Image */}
          {
            open && (
              <div className={`${styles.modal_container} `}>
                <div className={`${styles.modal_wrapper} `}>
                  <div className={`${styles.mobile_ancla} `}>
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
                </div>
              </div>
            )
          }
          <div className={`${styles.header_image_container} `}>
            <div className={`${styles.header_back_img} `} >
              <img src="/image/background.png" alt="" />
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
          <div className={`${styles.second_section} `} >
            <div className={`${styles.second_section_wrapper} `} >
              <div className={`${styles.second_text} `} id="buy">
                <h2>BUY AN SKULLZ</h2>

              </div>
              <span className={`${styles.second_sale}`}  >
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
          {/* third_gifs */}
          <div className={`${styles.divider}`} ></div>
          <div className={`${styles.third_section} `} >
            <div className={`${styles.third_section_wrapper} `}>
              <div className={`${styles.third_text} `}>
                <h2>THE SPECS</h2>
                <p>
                  Each Alpha Skull is unique and programmatically generated from over 130 possible traits, including hats, hairs, clothing, and more. All skullz are dope, but some are rarer than others.
                </p>
                <p>
                  The skullz are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Purchasing an skull costs 0.09 ETH.
                </p>
              </div>
              <div className={`${styles.third_gifs} `}>
                <img src="/image/mystery.gif" alt="gif" />
              </div>
            </div>
          </div >
          <div className={`${styles.divider}`} ></div>
          {/* fourth_section */}
          <div className={`${styles.fourth_section}`} id="team">
            <div className={`${styles.fourth_section_wrapper} `}>
              <div className={`${styles.fourth_section_text} `}>
                <h3>THE TEAM</h3>
                <p>Alpha Skullz was created by two friends who set out to make some dope Skullz, test our skills, and try to build something.</p>
                <span><p className={`${styles.fourth_section_textt}`} >Vladimir Romanenko</p> Software Enginner</span>
                <span><p className={`${styles.fourth_section_textt}`} >Alexandre Bladlenyshka</p> Crypto Entrepreneur</span>
                <span><p className={`${styles.fourth_section_textt}`} >Liam Alvarez</p> Chief Executive Officer</span>
                <span><p className={`${styles.fourth_section_textt}`} >Johnnie Bravo</p> Chief Technology Officer</span>
              </div>
              <div className={`${styles.first_section_image} `}>
                <div className={`${styles.nfts_group} `}>
                  <img src="/nfts/1757.png" alt="Skullz9" />
                  <img src="/nfts/1760.png" alt="Skullz92" />
                  <img src="/nfts/1780.png" alt="Skullz95" />
                  <img src="/nfts/1786.png" alt="Skullz2168" />
                </div>
              </div>
            </div>
          </div>
          {/* Smart Contract */}
          <div className={`${styles.contract} `}>
            <div className={`${styles.contract_wrapper} `}>
              <h2>VERIFIED SMART CONTRACT ADDRESS:</h2>
              <a href="https://polygonscan.com/address/0x33ce2e587faea05174b7a823f8869cc08c334571" target="_blank" rel="noreferrer">
                0x33cE2E587FaEA05174B7A823F8869cc08c334571
              </a>
            </div>
          </div>
          <div className={`${styles.divider}`} ></div>
          {/* footer */}
          <footer>
            <div className={`${styles.footer_container} `}>
              <div className={`${styles.footer_wrapper} `}>
                <div className={`${styles.footer_text}`}  >
                  <p>Coming Soon!</p>
                </div>
                <div className={`${styles.footer_logo} `}>
                  <a href="#home">
                    <img src="/image/logo.png" alt="logo" />
                  </a>
                </div>
                <div className={`${styles.footer_copyright}`} >
                  <div className={`${styles.footer_social} `}>
                    {/* TWITTER */}
                    <div className={`${styles.footer_image} `}>
                      <a href="https://twitter.com/cryptoalphasku1" target="_blank" rel="noreferrer" >
                        <img src="/image/twitter.png" alt="twitter" />
                      </a>
                    </div>
                    <div className={`${styles.footer_copyright} `}>
                      <p>© 2021 CryptoAlpha Skullz</p>
                      <a href={ROUTES.TERMS} >CASK Terms & Conditions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div >
        <div className={`${styles.footer_divider}`} ></div>
      </div>
    </>
  )
}

export default Index