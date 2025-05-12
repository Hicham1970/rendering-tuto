
export const dynamicParams = false; // cette fonction permet de dire à Next.js de ne pas générer de pages dynamiques, mais uniquement des pages statiques, elle est appelée par Next.js lors de la génération des pages statiques build time
export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        ];
};
// cette fonction retourne un Array d'objets contenant les params de chaque page statique à générer, elle est appelée par Next.js lors de la génération des pages statiques build time 
// pour chaque id de produit, Next.js va générer une page statique, ce id qui represente the key doits correspondre à la route dynamique [id] dans le nom du fichier page.tsx
// il faut que le nom de la fonction soit generateStaticParams, sinon Next.js ne la reconnaitra pas et ne generera pas les pages statiques
// cette fonction est appelée par Next.js lors de la génération des pages statiques, elle est utilisée pour générer les params de chaque page statique à générer      


export default async function ProductsDetailsPage({
    params,
}: {
    params: Promise<{
        id: string;
    }>;
    
}) {
    const { id } = await params;

    return (
        <h1>Product {id} details rendered at {new Date().toLocaleTimeString()}</h1>
    );
}