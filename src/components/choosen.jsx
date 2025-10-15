import Wrapper from "./wrapper";

const links = [
  {
    href: "https://www.bitcoin.com/",
    imgSrc: "https://cryptomus.com/img/press/bitcoin.png",
    imgAlt: "bitcoin.png",
  },
  {
    href: "https://www.bloomberg.com/press-releases/2023-02-15/cryptomus-the-all-in-one-solution-for-accepting-cryptocurrency-payments",
    imgSrc: "https://cryptomus.com/img/press/bloomberg.png",
    imgAlt: "bloomberg.png",
  },
  {
    href: "https://finance.yahoo.com/news/cryptomus-one-solution-accepting-cryptocurrency-190000004.html",
    imgSrc: "https://cryptomus.com/img/press/yahoo.png",
    imgAlt: "yahoo.png",
  },
  {
    href: "https://www.benzinga.com/amp/content/30930648",
    imgSrc: "https://cryptomus.com/img/press/benzinga.png",
    imgAlt: "benzinga.png",
  },
  {
    href: "https://t.me/toncoin/668",
    imgSrc: "https://cryptomus.com/img/press/ton.png",
    imgAlt: "ton.png",
  },
  {
    href: "https://cointelegraph.com/news/crypto-exchange-launches-to-address-security-and-liquidity-needs-in-trading",
    imgSrc: "https://cryptomus.com/img/press/cointelegraph.png",
    imgAlt: "cointelegraph.png",
  },
  {
    href: "https://www.morningstar.com/",
    imgSrc: "https://cryptomus.com/img/press/morningstar.png",
    imgAlt: "morningstar.png",
  },
  {
    href: "https://beincrypto.com/cryptomus-officially-records-over-100000-transactions/",
    imgSrc: "https://cryptomus.com/img/press/beincrypto.png",
    imgAlt: "beincrypto.png",
  },
  {
    href: "https://www.marketwatch.com/",
    imgSrc: "https://cryptomus.com/img/press/marketwatch.png",
    imgAlt: "marketwatch.png",
  },
  {
    href: "https://www.chaingpt.org/",
    imgSrc: "https://cryptomus.com/img/press/chaingpt.png",
    imgAlt: "chaingpt.png",
  },
  {
    href: "https://www.adspower.com/ru/?source=Cryptomus",
    imgSrc: "https://cryptomus.com/img/press/adspower.png",
    imgAlt: "adspower.png",
  },
  {
    href: "https://sendpulse.com/?utm_source=cryptomus.com&utm_medium=referral&utm_campaign=cryptomus-integration%2C%7C",
    imgSrc: "https://cryptomus.com/img/press/sendpulse.png",
    imgAlt: "sendpulse.png",
  },
  {
    href: "https://mercuryo.io/",
    imgSrc: "https://cryptomus.com/img/press/mercuryo.png",
    imgAlt: "mercuryo.png",
  },
  {
    href: "https://www.dextools.io/app/polygon/pair-explorer/0xe8a715d97388fab85ab0cff707a63dd79096c9e9?t=1711008168862",
    imgSrc: "https://cryptomus.com/img/press/dextools.png",
    imgAlt: "dextools.png",
  },
  {
    href: "",
    imgSrc: "https://cryptomus.com/img/press/telega.png",
    imgAlt: "telega.png",
  },
];

export default function Choosen() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center gap-4">
        <div className="text-[var(--text)] text-xl">
          Already chosen by the leaders
        </div>
        <div className="overflow-hidden w-full scroll__container">
          <div className="flex animate-scroll scroll__container__element">
            {[...links, ...links].map((link, index) => (
              <div
                key={index}
                className="h-[80px] min-w-[200px] flex-shrink-0 px-4"
              >
                <img
                  src={link.imgSrc}
                  alt={link.imgAlt}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
