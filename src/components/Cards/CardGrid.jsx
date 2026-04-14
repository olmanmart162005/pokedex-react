import './cardsCss.css';

const CardGrid = (
    {gridItems = null}
)=>{
    return (
        <section className="p-4 w-full flex flex-wrap gap-4 justify-center sm:flex-col sm:items-center md:flex-row md:justify-center">
            {gridItems?.map(o=>o)}
        </section>
    );
}

export default CardGrid;