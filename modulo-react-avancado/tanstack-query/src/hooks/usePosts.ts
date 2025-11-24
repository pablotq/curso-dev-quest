import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/types";

const fetchPosts = async (limit: number): Promise<Post[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=${limit}`);

    if(!response.ok) throw new Error("Erro o buscar os posts");

    return response.json();

};


export function usePosts(limit: number) {
    return useQuery<Post[]>({
        queryKey: ["posts", limit],
        queryFn: () => fetchPosts(limit),
        refetchOnWindowFocus: false, //usa-se essa opção quando os dados não mudam com muita frequência para evitarre-requisições desnecessárias
        refetchOnReconnect: false, // não refaz a requisição ao reconectar a internet
        staleTime: 1000 * 60 * 5, //vai considerar que em até 5 minutos os dados estão frescos, se fizer refetch dentro do período usa o cache, se for acima do período faz uma nova requisição

    });
}