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
        heroText: "data",
        description: "data",
        featuredProduct: {
          id: 0,
          name: "data",
          description: "data",
          category: "data",
          imageUrl: "/bg_1.jpg",
        },
        products: [
          {
            id: 0,
            name: "data",
            description: "data",
            category: "data",
            imageUrl: "/product1.jpg",
          },
          {
            id: 0,
            name: "data",
            description: "data",
            category: "data",
            imageUrl: "/product2.jpg",
          },
          {
            id: 0,
            name: "data",
            description: "data",
            category: "data",
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
    promoButtonText: 'ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ',
    promoButtonLink: '/stocklists',
    promoImageUrl: data.featuredProduct.imageUrl,
    description: data.featuredProduct.description,
    aboutButtonText: 'ТУТ ДОЛЖЕН БЫТЬ ТЕКСТ',
    aboutButtonLink: '/about',
  }
}