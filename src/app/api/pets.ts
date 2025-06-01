// app/api/pets.ts

import { Pet } from "@/app/types/pet";
import dog1 from "../../../public/assets/pets/dog/dog-01.jpg";
import dog2 from "../../../public/assets/pets/dog/dog-02.jpg";
import dog3 from "../../../public/assets/pets/dog/dog-03.jpg";
import dog4 from "../../../public/assets/pets/dog/dog-04.jpg";
import dog5 from "../../../public/assets/pets/dog/dog-05.jpg";
import dog6 from "../../../public/assets/pets/dog/dog-06.jpg";
import dog7 from "../../../public/assets/pets/dog/dog-07.jpg";
import dog8 from "../../../public/assets/pets/dog/dog-08.jpg";
import dog9 from "../../../public/assets/pets/dog/dog-09.jpg";
import dog10 from "../../../public/assets/pets/dog/dog-10.jpg";
import dog11 from "../../../public/assets/pets/dog/dog-11.jpg";
import dog12 from "../../../public/assets/pets/dog/dog-12.jpg";
import dog13 from "../../../public/assets/pets/dog/dog-13.jpg";
import dog14 from "../../../public/assets/pets/dog/dog-14.jpg";
import dog15 from "../../../public/assets/pets/dog/dog-15.jpg";
import dog16 from "../../../public/assets/pets/dog/dog-16.jpg";
import dog17 from "../../../public/assets/pets/dog/dog-17.jpg";
import dog18 from "../../../public/assets/pets/dog/dog-18.jpg";
import dog19 from "../../../public/assets/pets/dog/dog-19.jpg";
import dog20 from "../../../public/assets/pets/dog/dog-20.jpg";

import cat1 from "../../../public/assets/pets/cat/cat-01.jpg";
import cat2 from "../../../public/assets/pets/cat/cat-02.jpg";
import cat3 from "../../../public/assets/pets/cat/cat-03.jpg";
import cat4 from "../../../public/assets/pets/cat/cat-04.jpg";
import cat5 from "../../../public/assets/pets/cat/cat-05.jpg";
import cat6 from "../../../public/assets/pets/cat/cat-06.jpg";
import cat7 from "../../../public/assets/pets/cat/cat-07.jpg";
import cat8 from "../../../public/assets/pets/cat/cat-08.jpg";
import cat9 from "../../../public/assets/pets/cat/cat-09.jpg";
import cat10 from "../../../public/assets/pets/cat/cat-10.jpg";
import cat11 from "../../../public/assets/pets/cat/cat-11.jpg";
import cat12 from "../../../public/assets/pets/cat/cat-12.jpg";
import cat13 from "../../../public/assets/pets/cat/cat-13.jpg";
import cat14 from "../../../public/assets/pets/cat/cat-14.jpg";
import cat15 from "../../../public/assets/pets/cat/cat-15.jpg";
import cat16 from "../../../public/assets/pets/cat/cat-16.jpg";
import cat17 from "../../../public/assets/pets/cat/cat-17.jpg";
import cat18 from "../../../public/assets/pets/cat/cat-18.jpg";
import cat19 from "../../../public/assets/pets/cat/cat-19.jpg";
import cat20 from "../../../public/assets/pets/cat/cat-20.jpg";

export const pets: Pet[] = [
    { id: 1, name: "Luck", weight: "5kg", image: dog1.src, category: "Cachorro", description: "Um cão brincalhão e amigável." },
    { id: 2, name: "Bob", weight: "5kg", image: dog2.src, category: "Cachorro", description: "Adora correr pelo parque." },
    { id: 3, name: "Mia", weight: "5kg", image: cat1.src, category: "Gato", description: "Gosta de dormir no sofá." },
    { id: 4, name: "Thor", weight: "5kg", image: cat2.src, category: "Gato", description: "Muito curioso e aventureiro." },
    { id: 5, name: "Bella", weight: "5kg", image: cat3.src, category: "Gato", description: "Gosta de carinho e de brincar com bolinhas." },
    { id: 6, name: "Max", weight: "5kg", image: dog3.src, category: "Cachorro", description: "Fiel e protetor, ama passeios." },
    { id: 7, name: "Luna", weight: "5kg", image: dog4.src, category: "Cachorro", description: "Dócil e carinhosa, sempre animada." },
    { id: 8, name: "Simba", weight: "5kg", image: cat4.src, category: "Gato", description: "Majestoso e adora explorar." },
    { id: 9, name: "Mel", weight: "5kg", image: dog5.src, category: "Cachorro", description: "Muito inteligente e fácil de treinar." },
    { id: 10, name: "Bob", weight: "5kg", image: dog6.src, category: "Cachorro", description: "Sempre animado para brincar." },
    { id: 11, name: "Zeus", weight: "5kg", image: cat5.src, category: "Gato", description: "Independente, mas adora um carinho." },
    { id: 12, name: "Lola", weight: "5kg", image: cat6.src, category: "Gato", description: "Misteriosa e elegante." },
    { id: 13, name: "Nina", weight: "5kg", image: dog7.src, category: "Cachorro", description: "Muito sociável e amorosa." },
    { id: 14, name: "Charlie", weight: "5kg", image: dog8.src, category: "Cachorro", description: "Adora brinquedos e correr." },
    { id: 15, name: "Apollo", weight: "5kg", image: dog9.src, category: "Cachorro", description: "Leal e sempre alerta." },
    { id: 16, name: "Amora", weight: "5kg", image: cat7.src, category: "Gato", description: "Curiosa e brincalhona." },
    { id: 17, name: "Fred", weight: "5kg", image: cat8.src, category: "Gato", description: "Sempre quer estar no colo." },
    { id: 18, name: "Maia", weight: "5kg", image: cat9.src, category: "Gato", description: "Dorme o dia todo, mas adora brincar à noite." },
    { id: 19, name: "Toby", weight: "5kg", image: dog10.src, category: "Cachorro", description: "Amigável com crianças e idosos." },
    { id: 20, name: "Rex", weight: "5kg", image: dog11.src, category: "Cachorro", description: "Grande e forte, mas muito dócil." },
    { id: 21, name: "Julie", weight: "5kg", image: cat10.src, category: "Gato", description: "Ama escalar móveis." },
    { id: 22, name: "Zoe", weight: "5kg", image: cat11.src, category: "Gato", description: "Muito sociável com outros gatos." },
    { id: 23, name: "Maggie", weight: "5kg", image: cat12.src, category: "Gato", description: "Dócil e adora brincar com penas." },
    { id: 24, name: "Spike", weight: "5kg", image: dog12.src, category: "Cachorro", description: "Cheio de energia e muito brincalhão." },
    { id: 25, name: "Oliver", weight: "5kg", image: dog13.src, category: "Cachorro", description: "Carinhoso e sempre atento." },
    { id: 26, name: "Princesa", weight: "5kg", image: dog14.src, category: "Cachorro", description: "Gosta de se exibir e receber elogios." },
    { id: 27, name: "Lili", weight: "5kg", image: cat13.src, category: "Gato", description: "Pequena, mas cheia de personalidade." },
    { id: 28, name: "Safira", weight: "5kg", image: cat14.src, category: "Gato", description: "Olhos brilhantes e muito esperta." },
    { id: 29, name: "Marley", weight: "5kg", image: dog15.src, category: "Cachorro", description: "Muito brincalhão, adora correr e buscar bolinhas." },
    { id: 30, name: "Pandora", weight: "5kg", image: dog16.src, category: "Cachorro", description: "Dócil e tranquila, perfeita para companhia." },
    { id: 31, name: "Bento", weight: "5kg", image: dog17.src, category: "Cachorro", description: "Ama passear ao ar livre e brincar com crianças." },
    { id: 32, name: "Chico", weight: "5kg", image: cat15.src, category: "Gato", description: "Muito esperto e ágil, adora escalar móveis." },
    { id: 33, name: "Dora", weight: "5kg", image: cat16.src, category: "Gato", description: "Adora brincadeiras interativas e arranhadores." },
    { id: 34, name: "Pérola", weight: "5kg", image: cat17.src, category: "Gato", description: "Gosta de se esconder e observar tudo ao redor." },
    { id: 35, name: "Bolt", weight: "5kg", image: dog18.src, category: "Cachorro", description: "Um cão rápido e cheio de energia, adora correr e brincar ao ar livre." },
    { id: 36, name: "Duke", weight: "5kg", image: dog19.src, category: "Cachorro", description: "Leal e brincalhão, Duke adora estar ao lado da família e proteger seus donos." },
    { id: 37, name: "Flor", weight: "5kg", image: dog20.src, category: "Cachorro", description: "Uma cachorrinha dócil e amigável, sempre trazendo alegria por onde passa." },
    { id: 38, name: "Mila", weight: "5kg", image: cat18.src, category: "Gato", description: "Uma gatinha curiosa e esperta, adora explorar novos lugares e brincar com brinquedos interativos." },
    { id: 39, name: "Suki", weight: "5kg", image: cat19.src, category: "Gato", description: "Suki é uma gata carinhosa que ama um bom colo e receber carinho o dia todo." },
    { id: 40, name: "Jack", weight: "5kg", image: cat20.src, category: "Gato", description: "Um gato brincalhão e ágil, sempre pronto para correr atrás de bolinhas e se esconder em caixas." },
];
