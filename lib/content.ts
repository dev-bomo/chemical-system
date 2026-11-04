/* Auto-derived from chemicalsystem.ro scrape — do not invent pack sizes/prices/ISO/SKUs */
export type PdfLink = { href: string; label: string };
export type Category = {
  slug: string;
  base: string;
  name: string;
  description: string;
  order: number;
};
export type Product = {
  slug: string;
  id: number;
  name: string;
  pathSegment: string;
  categoryBase: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  pdfs: PdfLink[];
  summary: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
};

export const categories: Category[] = [
  {
    "slug": "diluanti-uz-general-21",
    "base": "diluanti-uz-general",
    "name": "Diluanti uz general",
    "description": "Diluanti pentru uz general: nitro, auto și universal — pentru vopsele, lacuri, grunduri și chituri pe baze uzuale.",
    "order": 1
  },
  {
    "slug": "diluanti-specifici-22",
    "base": "diluanti-specifici",
    "name": "Diluanti specifici",
    "description": "Diluanti speciali pentru aplicații dedicate: epoxidic, poliesteric (P.E.) și tip A2 pentru peroxizi.",
    "order": 2
  },
  {
    "slug": "antigel-23",
    "base": "antigel",
    "name": "Antigel",
    "description": "Antigel concentrat, diluat și non-toxic pentru instalații de încălzire-răcire, auto și utilitate publică.",
    "order": 3
  },
  {
    "slug": "materii-prime-chimice-20",
    "base": "materii-prime-chimice",
    "name": "Materii prime chimice",
    "description": "Solvenți și materii prime: toluen, xilen, white spirit, acetat de butil, acetonă, butanol, dioxid de titan.",
    "order": 4
  },
  {
    "slug": "produse-noi-18",
    "base": "produse-noi",
    "name": "Produse noi",
    "description": "Produse noi din portofoliu: diluant pentru lac de unghii, kit reparații și soluție spălare parbriz.",
    "order": 5
  }
];

export const products: Product[] = [
  {
    "slug": "diluant-nitro",
    "id": 58,
    "name": "Diluant 209 Nitro",
    "pathSegment": "diluanti-uz-general-58",
    "categoryBase": "diluanti-uz-general",
    "categorySlug": "diluanti-uz-general-21",
    "categoryName": "Diluanti uz general",
    "image": "https://www.chemicalsystem.ro/files/produse/th_58_0_diluant-nitro.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/D209%20%28002-2%20%283%29%281%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Amestec omogen de hidrocarburi aromatice si nearomatice, esteri,cetone.",
    "body": "DILUANT NITRO 209\n\nAmestec omogen de hidrocarburi aromatice si nearomatice, esteri,cetone.\n\nDiluarea lacurilor, grundurilor, vopselelor si chiturilor pe baza de rasini nitrocelulozice.\n\nFISA TEHNICA\n\nDILUANT NITRO 209\n\nGENERALITATI:\n\nDiluantul nitro 209 este un amestec de izomeri ai xilenului, toluen, acetat de butil, acetonă şi butanol.\n\nSe utilizează pentru produselor de acoperire pe bază de nitroceluloză, a nitrochiturilor etc.\n\nCARACTERISTICI TEHNICE:\n\n1. Aspect: Lichid transparent, incolor sau uşor gălbui, cu miros caracteritic\n\n2. Densitate: g/cm³ 0.87+0.02\n\n3. Interval de distilare: ºC 56-140\n\n4. Aciditate minerală: Lipsă\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se livrează în butoaie de tablă sau flacoane PET.\n\nAmbalajele se marchează prin etichetare (etichetă tip CEE ).\n\nDepozitarea se face în încăperi acoperite, departe de surse de foc şi de razele directe ale soarelui, la temperatura de max. 35ºC.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 24 luni de la data fabricaţiei, cu respectarea condiţiilor de depozitare menţionate.",
    "metaTitle": "Diluant 209 Nitro | Chemical System",
    "metaDescription": "Amestec omogen de hidrocarburi aromatice si nearomatice, esteri,cetone."
  },
  {
    "slug": "diluant-auto",
    "id": 61,
    "name": "Diluant auto 506",
    "pathSegment": "diluanti-uz-general-61",
    "categoryBase": "diluanti-uz-general",
    "categorySlug": "diluanti-uz-general-21",
    "categoryName": "Diluanti uz general",
    "image": "https://www.chemicalsystem.ro/files/produse/th_61_0_diluant-auto.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/Fisa%20securitate%20D%20506%20X%282%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Utilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice slabe, a vopselelor auto, a vopselelor acrilice.",
    "body": "Utilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice slabe, a vopselelor auto, a vopselelor acrilice.\n\nFISA TEHNICA\n\nDILUANT AUTO 506\n\nGENERALITATI:\n\nDiluantul auto 506 este un amestec de izomeri ai xilenului, toluen, white-spirit, acetat de butil şi butanol..\n\nSe utilizează pentru diluarea produselor de acoperire pe bază de răşini alchidice, a vopselelor auto etc.\n\nCARACTERISTICI TEHNICE:\n\n1. Aspect: Lichid transparent, incolor sau uşor gălbui, cu miros caracteritic\n\n2. Densitate: g/cm³ 0.85+0.02\n\n3. Interval de distilare: ºC 110-240\n\n4. Aciditate minerală: Lipsă\n\n5. Conţinut de toluen: % < 50\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se livrează în butoaie de tablă sau flacoane PET.\n\nAmbalajele se marchează prin etichetare (etichetă tip CEE ).\n\nDepozitarea se face în încăperi acoperite, departe de surse de foc şi de razele directe ale soarelui, la temperatura de max. 35ºC.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 24 luni de la data fabricaţiei, cu respectarea condiţiilor de depozitare menţionate.",
    "metaTitle": "Diluant auto 506 | Chemical System",
    "metaDescription": "Utilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice slabe, a vopselelor auto, a vopselelor acrilice."
  },
  {
    "slug": "diluant-universal",
    "id": 60,
    "name": "Diluant universal 510",
    "pathSegment": "diluanti-uz-general-60",
    "categoryBase": "diluanti-uz-general",
    "categorySlug": "diluanti-uz-general-21",
    "categoryName": "Diluanti uz general",
    "image": "https://www.chemicalsystem.ro/files/produse/th_60_0_diluant-universal.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/Fisa%20securitate%20D%20510%282%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Utilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice, a vopselelor de ulei, antifonului auto.",
    "body": "Diluantul este fabricat de firma noastra.\n\nUtilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice, a vopselelor de ulei, antifonului auto.\n\nFISA TEHNICA\n\nDILUANT UNIVERSAL 510\n\nGENERALITATI:\n\nDiluantul universal 510 este un amestec toluen, white-spirit şi butanol. Se utilizează pentru diluarea vopselelor de ulei, a vopselelor alchidice grase şi a vopselelor alchidice slabe, a grundurilor, a antifonului auto etc.\n\nCARACTERISTICI TEHNICE:\n\n1. Aspect Lichid transparent, incolor sau uşor gălbui, cu miros caracteristic\n\n2. Densitate g/cm³ 0.85+0.02\n\n3. Interval de distilare ºC 110-240\n\n4. Aciditate minerală Lipsă\n\n5. Conţinut de toluen %\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se livrează în butoaie de tablă sau flacoane PET.\n\nAmbalajele se marchează prin etichetare (etichetă tip CEE ).\n\nDepozitarea se face în încăperi acoperite, departe de surse de foc şi de razele directe ale soarelui, la temperatura de max. 35ºC.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 12 luni de la data fabricaţiei, cu respectarea condiţiilor de depozitare menţionate.",
    "metaTitle": "Diluant universal 510 | Chemical System",
    "metaDescription": "Utilizat pentru corectarea vâscozitații produselor de acoperire pe baza de rasini alchidice, a vopselelor de ulei, antifonului auto."
  },
  {
    "slug": "diluant-epoxidic",
    "id": 64,
    "name": "Diluant epoxidic",
    "pathSegment": "diluanti-specifici-64",
    "categoryBase": "diluanti-specifici",
    "categorySlug": "diluanti-specifici-22",
    "categoryName": "Diluanti specifici",
    "image": "https://www.chemicalsystem.ro/files/produse/th_64_0_diluant-epoxidic.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/Fisa%20securitate%20epoxi%281%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Utilizat in special la diluarea vopselelor pe baza de rasinii epoxidice folosite la acoperirea halelor industriale sau a spatiilor de depozitare.",
    "body": "Utilizat in special la diluarea vopselelor pe baza de rasinii epoxidice folosite la acoperirea halelor industriale sau a spatiilor de depozitare.",
    "metaTitle": "Diluant epoxidic | Chemical System",
    "metaDescription": "Utilizat in special la diluarea vopselelor pe baza de rasinii epoxidice folosite la acoperirea halelor industriale sau a spatiilor de depozitare."
  },
  {
    "slug": "diluant-p-e",
    "id": 63,
    "name": "Diluant p.e.",
    "pathSegment": "diluanti-specifici-63",
    "categoryBase": "diluanti-specifici",
    "categorySlug": "diluanti-specifici-22",
    "categoryName": "Diluanti specifici",
    "image": "https://www.chemicalsystem.ro/files/produse/th_63_0_diluant-p-e.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/Fisa%20de%20securitate%20Dil%20p_e_%20%281%29%281%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Diluant poliesteric numai pentru uz industrial sau profesional, utilizat in special in productia de obiecte din poliester armat cu fibra de sticla.",
    "body": "Diluant poliesteric numai pentru uz industrial sau profesional, utilizat in special in productia de obiecte din poliester armat cu fibra de sticla.\n\nFISA TEHNICA\n\nDILUANT P.E.\n\nGENERALITATI:\n\nDiluantul p.e. este un amestec de acetona si esteri ( acetat de etil si butil ).\n\nSe utilizeaza in principal, ca agent de spalare pentru rasini poliesterice, nimai pentru uz industrial si profesional.\n\nCARACTERISTICI TEHNICE:\n\n1. Aspect: Lichid transparent, incolor sau uşor gălbui, cu miros caracteritic\n\n2. Densitate: g/cm³ 0.80+0.02\n\n3. Interval de distilare: ºC 56-130\n\n4. Aciditate minerală: Lipsă\n\n5. Solubilitate in apa: Nelimitat\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se livrează în butoaie de tablă sau flacoane PET.\n\nAmbalajele se marchează prin etichetare (etichetă tip CEE ).\n\nDepozitarea se face în încăperi acoperite, departe de surse de foc şi de razele directe ale soarelui, la temperatura de max. 35ºC.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 24 luni de la data fabricaţiei, cu respectarea condiţiilor de depozitare menţionate.",
    "metaTitle": "Diluant p.e. | Chemical System",
    "metaDescription": "Diluant poliesteric numai pentru uz industrial sau profesional, utilizat in special in productia de obiecte din poliester armat cu fibra de sticla."
  },
  {
    "slug": "diluant-tip-a",
    "id": 65,
    "name": "Diluant tip A2",
    "pathSegment": "diluanti-specifici-65",
    "categoryBase": "diluanti-specifici",
    "categorySlug": "diluanti-specifici-22",
    "categoryName": "Diluanti specifici",
    "image": "https://www.chemicalsystem.ro/files/produse/th_65_0_diluant-tip-a.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/D%20A2%282%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Inlocuieste cu succes acetatul de etil sau alti solventi utilizati la diluarea peroxizilor utilizati ca promotori de reactie.",
    "body": "Inlocuieste cu succes acetatul de etil sau alti solventi utilizati la diluarea peroxizilor utilizati ca promotori de reactie.",
    "metaTitle": "Diluant tip A2 | Chemical System",
    "metaDescription": "Inlocuieste cu succes acetatul de etil sau alti solventi utilizati la diluarea peroxizilor utilizati ca promotori de reactie."
  },
  {
    "slug": "antigel-concentrat",
    "id": 69,
    "name": "Antigel concentrat",
    "pathSegment": "antigel-69",
    "categoryBase": "antigel",
    "categorySlug": "antigel-23",
    "categoryName": "Antigel",
    "image": "https://www.chemicalsystem.ro/files/produse/th_69_0_antigel-concentrat.jpeg",
    "pdfs": [
      {
        "href": "https://www.chemicalsystem.ro/files/userfiles/files/Fisa%20de%20securitate%20antigel%281%29.pdf",
        "label": "Fișă de securitate (PDF)"
      }
    ],
    "summary": "Lichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă.",
    "body": "FISA TEHNICA\n\nLICHID ANTIGEL\n\nGENERALITATI\n\nLichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă.\n\nSe utilizează în instalaţiile de încălzire-răcire ale diverselor utilaje sau în domeniul auto ca lichid de răcire sau in instalaţiile de incălzire-răcire.\n\nFolosind diagrama anexată se stabileşte raportul de amestec apă : antigel ,folosind apă distilată sau demineralizată, în funcţie de temperatura de congelare ce se urmăreşte a fi obţinută.\n\nCARACTERISTICI TEHNICE\n\nNr. crt.\n\nCaracteristica tehnică\n\nU.M.\n\nValoare\n\n1.\n\nAspect\n\nLichid limpede, incolor sau colorat\n\n2.\n\nDensitate la 15°C\n\ng/cm³\n\n1.12 - 1.13\n\n3.\n\nPunct de congelare, max.\n\n°C\n\n-12\n\n4.\n\nPunct de fierbere, min.\n\n°C\n\n150\n\n5.\n\nReziduu la calcinare, max\n\n%\n\n3\n\n6.\n\npH\n\n5.8 – 7.0\n\n7.\n\nAcţiune asupra emailurilor\n\nNu se admite pătarea suprafeţelor\n\n8.\n\nPierderi prin coroziune, max\n\nmg/cm³\n\n0.6\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se ambalează în ambaleje din tablă sau mase plastice, de la 1 la 200 l în funcţie de cererea pieţei.\n\nAmbalajele se marchează prin etichetatre ( etichetă tip CEE ).\n\nDepozitarea se va face în depozite obişnuite pentru produse chimice.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 24 luni de la data fabricaţiei, în condiţiile păstrări produsului în ambalajul original, bine închis, cu respectarea condiţiilor de depozitare .",
    "metaTitle": "Antigel concentrat | Chemical System",
    "metaDescription": "Lichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă."
  },
  {
    "slug": "antigel-diluat",
    "id": 79,
    "name": "Antigel diluat",
    "pathSegment": "antigel-79",
    "categoryBase": "antigel",
    "categorySlug": "antigel-23",
    "categoryName": "Antigel",
    "image": "https://www.chemicalsystem.ro/files/produse/th_79_0_antigel-diluat.jpeg",
    "pdfs": [],
    "summary": "Lichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă în raport volumetric 1:1.",
    "body": "FISA TEHNICA\n\nLICHID ANTIGEL DILUAT 1:1\n\nGENERALITATI\n\nLichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă în raport volumetric 1:1.\n\nSe utilizează în instalaţiile de încălzire-răcire ale diverselor utilaje sau în domeniul auto ca lichid de răcire, ca atare, având un punct de congelare de aprox. -39° C.\n\nCARACTERISTICI TEHNICE\n\nNr. crt.\n\nCaracteristica tehnică\n\nU.M.\n\nValoare\n\n1.\n\nAspect\n\nLichid limpede, incolor sau colorat\n\n2.\n\nDensitate la 15°C\n\ng/cm³\n\n1.06 - 1.08\n\n3.\n\nPunct de congelare, max.\n\n°C\n\n-39\n\n4.\n\nPunct de fierbere, min.\n\n°C\n\n102\n\n5.\n\nReziduu la calcinare, max\n\n%\n\n3\n\n6.\n\npH\n\n6.5 – 7.5\n\n7.\n\nAcţiune asupra emailurilor\n\nNu se admite pătarea suprafeţelor\n\n8.\n\nPierderi prin coroziune, max\n\nmg/cm³\n\n0.6\n\nAMBALARE, MARCARE, DEPOZITARE:\n\nProdusul se ambalează în ambaleje din tablă sau mase plastice, de la 1 la 200 l în funcţie de cererea pieţei.\n\nAmbalajele se marchează prin etichetatre ( etichetă tip CEE ).\n\nDepozitarea se va face în depozite obişnuite pentru produse chimice.\n\nTERMEN DE GARANTIE\n\nTermenul de garanţie este de 24 luni de la data fabricaţiei, în condiţiile păstrări produsului în ambalajul original, bine închis, cu respectarea condiţiilor de depozitare . Se admite separarea parţială a colorantului, care la uşoară agitare revine în soluţie fără a afecta calităţile produsului.",
    "metaTitle": "Antigel diluat | Chemical System",
    "metaDescription": "Lichidul antigel - este un amestec de monoetilenglicol, inhibitori de coroziune, stabilizatori, regulatori de pH şi apă în raport volumetric 1:1."
  },
  {
    "slug": "antigel-non-toxic",
    "id": 70,
    "name": "Antigel non-toxic",
    "pathSegment": "antigel-70",
    "categoryBase": "antigel",
    "categorySlug": "antigel-23",
    "categoryName": "Antigel",
    "image": "https://www.chemicalsystem.ro/files/produse/th_70_0_antigel-non-toxic.jpeg",
    "pdfs": [],
    "summary": "Antigel non-toxic: pe baza de propilenglicol, obligatoriu in instalatiile de utilitate publica.",
    "body": "Antigel non-toxic: pe baza de propilenglicol, obligatoriu in instalatiile de utilitate publica.",
    "metaTitle": "Antigel non-toxic | Chemical System",
    "metaDescription": "Antigel non-toxic: pe baza de propilenglicol, obligatoriu in instalatiile de utilitate publica."
  },
  {
    "slug": "acetat-de-butil",
    "id": 74,
    "name": "Acetat de butil",
    "pathSegment": "materii-prime-chimice-74",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_74_0_acetat-de-butil.jpeg",
    "pdfs": [],
    "summary": "Ester al acidului acetic (CH3-COOC4-H9), lichid incolor sau slab gălbui, inflamabil; solvent pentru esterii celulozei și fabricarea nitrolacurilor.",
    "body": "Acetatul de butil\n\nEste un ester al acidului acetic cu formula structurală CH3-COOC4-H9. Se obține prin esterificarea acidului acetic cu alcool butilic. Ca aspect, este un lichid incolor sau slab gălbui, inflamabil, cu miros plăcut, puțin solubil în apă, dar solubil în solvenți organici. Este folosit ca solvent, dar în special pentru esterii celulozei și la fabricarea nitrolacurilor.",
    "metaTitle": "Acetat de butil | Chemical System",
    "metaDescription": "Ester al acidului acetic (CH3-COOC4-H9), lichid incolor sau slab gălbui, inflamabil; solvent pentru esterii celulozei și fabricarea nitrolacurilor."
  },
  {
    "slug": "acetona",
    "id": 75,
    "name": "Acetona",
    "pathSegment": "materii-prime-chimice-75",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_75_0_acetona.jpeg",
    "pdfs": [],
    "summary": "Lichid incolor cu miros caracteristic, utilizat ca solvent organic și ca reactant în procese de termoliză și reacții de sinteză în chimia organică.",
    "body": "Acetona (cunoscută și sub denumirea de propanonă)\n\nEste un lichid incolor cu miros caracteristic, fiind utilizat ca solvent organic și ca reactant în o serie de procese de termoliză și reacții de sinteză în chimia organică. Ea face parte din grupa cetonelor, caracteristic pentru structura acetonei este gruparea carbonilică de care se leagă două grupări\n\nmetil.",
    "metaTitle": "Acetona | Chemical System",
    "metaDescription": "Lichid incolor cu miros caracteristic, utilizat ca solvent organic și ca reactant în procese de termoliză și reacții de sinteză în chimia organică."
  },
  {
    "slug": "butanol",
    "id": 76,
    "name": "Butanol",
    "pathSegment": "materii-prime-chimice-76",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_76_0_butanol.jpeg",
    "pdfs": [],
    "summary": "Alcool primar cu formula C4H9OH (alcool n-butilic), unul dintre izomerii butanolului, folosit în aplicații industriale.",
    "body": "Butanolul (cunoscut și ca alcool n-butilic sau normal butanol)\n\nEste un alcool primar care conține 4 atomi de carbon în moleculă, având formula chimică C4H9OH. Este unul dintre izomerii butanolului, iar printre aceștia se numără izobutanolul, 2-butanolul și terț-butanolul.\n\n1-butanolul apare în natură ca produs al fermentației zaharurilor și a altor glucide, și este prezent în multe mâncăruri și băuturi.",
    "metaTitle": "Butanol | Chemical System",
    "metaDescription": "Alcool primar cu formula C4H9OH (alcool n-butilic), unul dintre izomerii butanolului, folosit în aplicații industriale."
  },
  {
    "slug": "dioxid-de-titan",
    "id": 77,
    "name": "Dioxid de titan",
    "pathSegment": "materii-prime-chimice-77",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_77_0_dioxid-de-titan.jpeg",
    "pdfs": [],
    "summary": "Pigment mineral (TiO2, „alb de titan”) cu indice refractiv ridicat; inert, stabil termic, folosit pentru albire și acoperire.",
    "body": "Dioxidul de titan (TiO2) numit și ”alb de titan”\n\nEste un pigment mineral cu un indice refractiv ridicat, reflectă și difuzează lumina.\n\nEste inert, stabil termic, insolubil în apă sau uleiuri dar este dispersabil îndeosebi în medii uleioase sau pudroase/uscate.\n\nEste opacifer, reduce transparența compozițiilor cosmetice, albește și deschide culoarea preparatelor pe bază de pigmenți.\n\nEste un filtru mineral ce acţionează ca barieră fizică de protecţie UV. În compoziții de machiaj creşte opacitatea altor pigmenţi şi îmbunătăţeşte aderenţa acestora pe piele.\n\nDioxidul de titan este aprobat de peste 90 de ani ca ingredient în produse alimentare, farmaceutice și cosmetice. Dioxidul de titan ce nu se prezintă sub formă de nanoparticule, aplicat pe piele nu o penetrează, nu se absoarbe și nu este toxic. Se va evita însă inhalarea!",
    "metaTitle": "Dioxid de titan | Chemical System",
    "metaDescription": "Pigment mineral (TiO2, „alb de titan”) cu indice refractiv ridicat; inert, stabil termic, folosit pentru albire și acoperire."
  },
  {
    "slug": "toluen",
    "id": 71,
    "name": "Toluen",
    "pathSegment": "materii-prime-chimice-71",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_71_0_toluen.jpeg",
    "pdfs": [],
    "summary": "Toluenul este un solvent folosit pentru lipiciuri, răşină naturală şi sintetică, lubrifianţi şi alte produse naturale. Este folosit cu preponderenţă în vopsele, inclusiv în lacurile nitrocelulozice, adezivi şi cerneluri de imprimare.",
    "body": "Toluenul este un solvent folosit pentru lipiciuri, răşină naturală şi sintetică, lubrifianţi şi alte produse naturale. Este folosit cu preponderenţă în vopsele, inclusiv în lacurile nitrocelulozice, adezivi şi cerneluri de imprimare.\n\nEste de asemenea folosit în industria chimică şi farmaceutică, în special pentru extractia şi eliminarea produselor petroliere.",
    "metaTitle": "Toluen | Chemical System",
    "metaDescription": "Toluenul este un solvent folosit pentru lipiciuri, răşină naturală şi sintetică, lubrifianţi şi alte produse naturale. Este folosit cu preponderenţă în vop"
  },
  {
    "slug": "white-spirit",
    "id": 73,
    "name": "White Spirit",
    "pathSegment": "materii-prime-chimice-73",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_73_0_white-spirit.jpeg",
    "pdfs": [],
    "summary": "Amestec de hidrocarburi pentru diluarea emailurilor și lacurilor, precum și pentru curățarea uneltelor de vopsit.",
    "body": "Pentru diluarea emailurilor, lacurilor\n\nla fel pentru curăţarea uneltelor de vopsit\n\nProdusul prezintă amestecul de hidrocarburi, este gata de pus în operă. Util pentru diluarea emailurilor, lacurilor şi materialului plastic lichid pentru obţinerea consistenţei necesare.",
    "metaTitle": "White Spirit | Chemical System",
    "metaDescription": "Amestec de hidrocarburi pentru diluarea emailurilor și lacurilor, precum și pentru curățarea uneltelor de vopsit."
  },
  {
    "slug": "xilen",
    "id": 72,
    "name": "Xilen",
    "pathSegment": "materii-prime-chimice-72",
    "categoryBase": "materii-prime-chimice",
    "categorySlug": "materii-prime-chimice-20",
    "categoryName": "Materii prime chimice",
    "image": "https://www.chemicalsystem.ro/files/produse/th_72_0_xilen.jpeg",
    "pdfs": [],
    "summary": "Lichid incolor, inflamabil (dimetilbenzen), cu izomeri orto, meta și para; folosit drept solvent industrial.",
    "body": "Xilenul sau, după nomenclatura IUPAC, dimetilbenzenul, se prezintă ca un lichid incolor, inflamabil, care are trei izomeri mai importanți după poziția orto, meta sau para a grupării -CH3. Izomerii xilenului au proprietăți fizice diferite, fiind folosiți drept solvenți, la sinteza materialelor plastice, a coloranților și a substanțelor adezive.",
    "metaTitle": "Xilen | Chemical System",
    "metaDescription": "Lichid incolor, inflamabil (dimetilbenzen), cu izomeri orto, meta și para; folosit drept solvent industrial."
  },
  {
    "slug": "diluant-pentru-lac-de-unghii",
    "id": 66,
    "name": "Diluant pentru lac de unghii",
    "pathSegment": "produse-noi-66",
    "categoryBase": "produse-noi",
    "categorySlug": "produse-noi-18",
    "categoryName": "Produse noi",
    "image": "https://www.chemicalsystem.ro/files/produse/th_66_0_diluant-pentru-lac-de-unghii.jpeg",
    "pdfs": [],
    "summary": "Amestec de acetonă cu esteri și alcooli, cu rezultate foarte bune la curățarea oricărui tip de lac de unghii.",
    "body": "Diluant pentru lac de unghii.\n\nFiind un amestec de acetona cu esteri si alcooli are rezultate foarte bune la curatarea oricarui tip de lac de unghii.",
    "metaTitle": "Diluant pentru lac de unghii | Chemical System",
    "metaDescription": "Amestec de acetonă cu esteri și alcooli, cu rezultate foarte bune la curățarea oricărui tip de lac de unghii."
  },
  {
    "slug": "kit-reparatii",
    "id": 67,
    "name": "Kit reparatii",
    "pathSegment": "produse-noi-67",
    "categoryBase": "produse-noi",
    "categorySlug": "produse-noi-18",
    "categoryName": "Produse noi",
    "image": "https://www.chemicalsystem.ro/files/produse/th_67_0_kit-reparatii.jpeg",
    "pdfs": [],
    "summary": "Contine rasina poliesterica, fibra de sticla , solvent pentru repararea obiectelor din fibra de sticla",
    "body": "Contine rasina poliesterica, fibra de sticla , solvent pentru repararea obiectelor din fibra de sticla\n\n(bare automobile, bărci etc.), precum si a unor obiecte din mase plastice.",
    "metaTitle": "Kit reparatii | Chemical System",
    "metaDescription": "Contine rasina poliesterica, fibra de sticla , solvent pentru repararea obiectelor din fibra de sticla"
  },
  {
    "slug": "solutie-spalare-parbriz",
    "id": 68,
    "name": "Solutie spalare parbriz",
    "pathSegment": "produse-noi-68",
    "categoryBase": "produse-noi",
    "categorySlug": "produse-noi-18",
    "categoryName": "Produse noi",
    "image": "https://www.chemicalsystem.ro/files/produse/th_68_0_solutie-spalare-parbriz.jpeg",
    "pdfs": [],
    "summary": "Nu contine metanol care este considerat foarte toxic, putand avea efecte imediate si ireversibile asupra corpului uman.",
    "body": "Pentru curatarea parbrizelor auto, pentru iarna.\n\nCaracteristica:\n\nNu contine metanol care este considerat foarte toxic, putand avea efecte imediate si ireversibile asupra corpului uman.\n\nSolutia noastra contine etanol (alcool etilic).",
    "metaTitle": "Solutie spalare parbriz | Chemical System",
    "metaDescription": "Nu contine metanol care este considerat foarte toxic, putand avea efecte imediate si ireversibile asupra corpului uman."
  }
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug || c.base === slug);
}

export function getProductsByCategory(categorySlugOrBase: string) {
  const cat = getCategory(categorySlugOrBase);
  if (!cat) return [];
  return products.filter((p) => p.categoryBase === cat.base);
}

export function getProduct(slug: string, pathSegment?: string) {
  return products.find(
    (p) => p.slug === slug && (!pathSegment || p.pathSegment === pathSegment),
  );
}

export function productHref(product: Product) {
  return `/ro/prod/${product.slug}/${product.pathSegment}/`;
}

export function categoryHref(category: Category) {
  return `/ro/prod/${category.slug}/`;
}
