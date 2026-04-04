export interface Stockist {
  region: string
  companyName: string
  email: string
  phone: string
}


export const getStockists = async (): Promise<Stockist[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          region: "data",
          companyName: "data",
          email: "data",
          phone: "0000",
        },
        {
          region: "data",
          companyName: "data",
          email: "data",
          phone: "0000",
        },
        {
          region: "data",
          companyName: "data",
          email: "data",
          phone: "0000",
        },
      ])
    }, 500)
  })
}