import CamisetaPreta from '/images/camiseta-1.png'
import CamisetaPretaCostas from '/images/camiseta-1-costas.png'
import CamisetaRoxa from '/images/camiseta-2.png'
import CamisetaRoxaCostas from '/images/camiseta-2-costas.png'

export interface Product {
    id: number
    name: string
    image: string
    price: number
    color: string
    size: string
}

export const products: Product[] = [
 {
   id: 1,
   name: "Camiseta Dev em Dobro preta",
   image: CamisetaPreta,
   price: 89,
   color: "preta",
   size: "M",
 },
 {
   id: 2,
   name: "Camiseta Dev em Dobro preta - Costas",
   image: CamisetaPretaCostas,
   price: 89,
   color: "preta",
   size: "G",
 },
 {
   id: 3,
   name: "Camiseta Dev em Dobro roxa",
   image: CamisetaRoxa,
   price: 89,
   color: "roxa",
   size: "P",
 },
 {
   id: 4,
   name: "Camiseta Dev em Dobro roxa - Costas",
   image: CamisetaRoxaCostas,
   price: 89,
   color: "roxa",
   size: "M",
 },
]