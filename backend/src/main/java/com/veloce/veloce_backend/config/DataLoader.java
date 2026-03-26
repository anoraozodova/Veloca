package com.veloce.veloce_backend.config;

import com.veloce.veloce_backend.entity.*;
import com.veloce.veloce_backend.repository.*;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader {

    private final ProductRepository productRepository;
    private final FounderRepository founderRepository;
    private final CompanyInfoRepository companyInfoRepository;
    private final AwardRepository awardRepository;
    private final StockistRepository stockistRepository;

    @PostConstruct
    public void load() {

        System.out.println("🔥 DataLoader started...");

        // prevent duplicate data
        if (productRepository.count() > 0) {
            System.out.println("⚠️ Data already exists, skipping...");
            return;
        }

        System.out.println("🚀 Inserting test data...");

        // PRODUCTS
        productRepository.save(Product.builder()
                .name("Lavande")
                .description("Floral aperitif with lavender and chamomile")
                .category("floral")
                .imageUrl("/cart_1.jpg")
                .build());

        productRepository.save(Product.builder()
                .name("Primavera")
                .description("Bright citrus aperitif")
                .category("citrus")
                .imageUrl("/cart_2.jpg")
                .build());

        productRepository.save(Product.builder()
                .name("Spezia")
                .description("Spiced aperitif with cinnamon")
                .category("spiced")
                .imageUrl("/cart_3.jpg")
                .build());

        // FOUNDER
        founderRepository.save(Founder.builder()
                .name("Mike Vera")
                .imageUrl("/bg_4.jpg")
                .build());

        // COMPANY INFO
        companyInfoRepository.save(CompanyInfo.builder()
                .description("Veloce represents a new era of spirit-free aperitifs.")
                .phone("(646) 555-4567")
                .email("hello@figma.com")
                .build());

        awardRepository.save(Award.builder()
                .year(2025)
                .title("Best Botanical Blend")
                .build());

        awardRepository.save(Award.builder()
                .year(2025)
                .title("Gold Medal – Bittersweet Category")
                .build());

        awardRepository.save(Award.builder()
                .year(2024)
                .title("Best Sustainable Packaging")
                .build());

        awardRepository.save(Award.builder()
                .year(2024)
                .title("Eco-Friendly Brand of the Year")
                .build());

        awardRepository.save(Award.builder()
                .year(2023)
                .title("Editor's Choice – Best Aperitif")
                .build());

        awardRepository.save(Award.builder()
                .year(2023)
                .title("Most Elegant Bottle Design")
                .build());

        awardRepository.save(Award.builder()
                .year(2022)
                .title("Best Low & No Alcohol Beverage")
                .build());
        // STOCKISTS
        stockistRepository.save(Stockist.builder()
                .region("USA")
                .companyName("The Artisan Grocer")
                .email("hello@figma.com")
                .phone("415-555-4567")
                .build());

        stockistRepository.save(Stockist.builder()
                .region("Europe")
                .companyName("La Maison du Goût")
                .email("hello@figma.com")
                .phone("+33 1 23 45 67 89")
                .build());
        stockistRepository.save(Stockist.builder()
                .region("Asia")
                .companyName("Kurasu & Co.")
                .email("hello@figma.com")
                .phone("+81 3 1234 5678")
                .build());

        System.out.println("✅ Data inserted successfully!");
    }
}