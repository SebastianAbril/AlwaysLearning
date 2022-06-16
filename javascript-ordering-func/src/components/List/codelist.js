
const List = () => {
    const [order, setOrder] = useState('ASC');
    const newData = data.map(label => {
        return {
            label, 
            value: toBytes(label)  
        }
    }).sort((a, b) => {

        if(order === 'ASC') {
            return a.value - b.value;
        }

        return  b.value - a.value;
       
    })

    return (
        <div className="List"></div>
    )
}

const toBytes = (label) => {
    const data = label.split(' ');
    const value = data[0];
    const unit = data[1];
    switch(unit) {
        case 'KB':
            return value * 1000;
    }

    return 0;
}