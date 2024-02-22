import { Typography } from "components/Typography/Typography"
import React from "react"

const SupportedWallets = () => {
  return (
    <div>
      <Typography tag="h2" intent={"paragraphTitle"}>
        Use Money in your wallet
      </Typography>
      <Typography tag="p" intent={"subtitle"}>
        Cryptocurrency is a digital form of currency that utilizes cryptography to secure transactions, control the
        creation of new units, and verify the transfer of assets.
      </Typography>
      <div className="flex flex-row flex-wrap items-center justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <img key={item} src="/images/home/bitcoin_wallet.png" alt="coinbase" className={"h-[53px] min-w-[192px]"} />
        ))}
      </div>
    </div>
  )
}

export default SupportedWallets
