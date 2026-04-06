export interface Stockist {
  region: string
  companyName: string
  email: string
  phone?: string
}

export interface StockistsResponse {
  backgroundImage: string
  stockists: Stockist[]
}

export const getStockists = async (): Promise<StockistsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        backgroundImage: "/images/bg_6.jpg",
        stockists: [
          {
            region: "USA",
            companyName: "THE ARTISANAL GROCER",
            email: "HELLO@FIGMA.COM",
            phone: "415-123-4567",
          },
          {
            region: "EUROPE",
            companyName: "LE MARCHÉ BIO",
            email: "HELLO@FIGMA.COM",
          },
          {
            region: "ASIA",
            companyName: "KURASHI & CO.",
            email: "HELLO@FIGMA.COM",
          },
        ]
      })
    }, 500)
  })
}