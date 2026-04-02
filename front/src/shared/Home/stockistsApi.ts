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
          region: "USA",
          companyName: "Veloce NY",
          email: "ny@veloce.com",
          phone: "+1 123 456 7890",
        },
        {
          region: "UK",
          companyName: "Veloce London",
          email: "london@veloce.com",
          phone: "+44 123 456 789",
        },
        {
          region: "France",
          companyName: "Veloce Paris",
          email: "paris@veloce.com",
          phone: "+33 123 456 789",
        },
      ])
    }, 500)
  })
}