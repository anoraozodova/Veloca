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

export const getHomeData = async (): Promise<HomeResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        heroText: "The only SPIRIT-FREE aperitif that tastes as good as it makes you feel.",
        description: "Véloce is the ZERO-PROOF aperitif for modern living, crafted with super herbs and nutraceuticals to elevate your well-being, without compromising the sophisticated ritual of the aperitif.",
        featuredProduct: {
          id: 1,
          name: "PRIMAVERA",
          description: "A BOLD, SPICED APERITIF FEATURING CARDAMOM, GINGER, AND CINNAMON.",
          category: "aperitif",
          imageUrl: "/images/bg_2.jpg",
        },
        products: [
          {
            id: 2,
            name: "LAVANDE",
            description: "A DELICATE AND FLORAL APERITIF WITH NOTES OF LAVENDER AND CHAMOMILE.",
            category: "aperitif",
            imageUrl: "/images/card_1.jpg",
          },
          {
            id: 3,
            name: "PRIMAVERA",
            description: "A REFRESHING AND VIBRANT APERITIF WITH BRIGHT CITRUS NOTES.",
            category: "aperitif",
            imageUrl: "/images/card_2.jpg",
          },
          {
            id: 4,
            name: "SPEZIA",
            description: "A BOLD, SPICED APERITIF FEATURING CARDAMOM, GINGER, AND CINNAMON.",
            category: "aperitif",
            imageUrl: "/images/card_3.jpg",
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
    promoButtonText: 'FIND NEAR YOU',
    promoButtonLink: '/stocklists',
    promoImageUrl: data.featuredProduct.imageUrl,
    description: data.description,
    aboutButtonText: 'ABOUT VELOCE',
    aboutButtonLink: '/about',
  }
}