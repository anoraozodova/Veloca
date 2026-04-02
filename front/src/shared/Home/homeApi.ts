export interface Product {
  id: number
  name: string
  description: string
  category: string
  imageUrl: string
}

export interface HomeResponse {
  heroText: string
  description: string
  featuredProduct: Product
  products: Product[]
}

export type HomeHeroPayload = {
  promoTitle: string
  promoButtonText: string
  promoButtonLink: string
  promoImageUrl: string
  description: string
  aboutButtonText: string
  aboutButtonLink: string
}

// 🔹 МОК ДАННЫЕ ВМЕСТО API
export const getHomeData = async (): Promise<HomeResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        heroText: "The only SPIRIT-FREE aperitif that tastes as good as it makes you feel.",
        description: "Mock description",
        featuredProduct: {
          id: 1,
          name: "Primavera",
          description: "A delicate and floral aperitif with notes of lavender and chamomile.",
          category: "Drinks",
          imageUrl: "/bg_1.jpg",
        },
        products: [
          {
            id: 1,
            name: "Veloce Classic",
            description: "A delicate and floral aperitif with notes of lavender and chamomile.",
            category: "Drinks",
            imageUrl: "/product1.jpg",
          },
          {
            id: 2,
            name: "Lavande",
            description: "A vibrant and zesty aperitif with notes of blood orange and grapefruit.",
            category: "Drinks",
            imageUrl: "/product2.jpg",
          },
          {
            id: 3,
            name: "Spezia",
            description: "A sophisticated and aromatic aperitif with notes of cardamom and clove.",
            category: "Drinks",
            imageUrl: "/product3.jpg",
          },
        ],
      })
    }, 500)
  })
}

// 🔹 Маппинг под Hero
export const getHomeHero = async (): Promise<HomeHeroPayload> => {
  const data = await getHomeData()

  return {
    promoTitle: data.heroText,
    promoButtonText: 'SHOP NOW',
    promoButtonLink: '/stocklists',
    promoImageUrl: data.featuredProduct.imageUrl,
    description: data.featuredProduct.description,
    aboutButtonText: 'ABOUT US',
    aboutButtonLink: '/about',
  }
}