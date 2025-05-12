export const Reviews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate a delay of 4 seconds
    return (
        <div className="flex flex-col gap-4">
            
            <p>This is the reviews page awaited 4 seconds !!.</p>
        </div>
    );
}