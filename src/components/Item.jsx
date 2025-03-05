const Item = ({ item, onDelete }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span>{item.name} - {item.status}</span>
            <div>
                <button onClick={() => onDelete(item.id)} style={{ marginRight: "10px" }}>Delete</button>
                
            </div>
        </div>
    );
    
};

export default Item;