const Card = (
    {
        cardHeader = null,
        cardBody = null,
        cardFooter = null,
    }
)=>{
    return (
        <div className="w-72 shrink-0 flex flex-col rounded-3 text-gray-800 shadow-sm">
            {cardHeader}
            {cardBody}
            {cardFooter}
        </div>
    )
}

export default Card;