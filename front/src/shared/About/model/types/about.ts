export interface Award {
    year: string;
    title: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    social: string;
}

export interface AboutData {
    heroText: string;
    recognition: Award[];
    founderName: string;
    founderImage: string;
    productionImage: string;
    contact: ContactInfo;
    establishedYear: string;
}
