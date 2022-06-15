import './list.css';
const data = [ "992 bytes", "2 KB", "5 MB", "13 KB", "922 bytes", "3 GB", "108 KB" ]


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

export {List};


