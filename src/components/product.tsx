export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
    return (
        <div className="flex flex-col gap-4">
            
            <p>This is the product page awaited 2 seconds !!.</p>
        </div>
    );
}