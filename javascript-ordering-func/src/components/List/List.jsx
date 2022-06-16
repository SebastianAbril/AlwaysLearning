import './list.css';
const data = [ "992 bytes", "2 KB", "5 MB", "13 KB", "922 bytes", "3 GB", "108 KB" ]


const List = () => {
  const newData = data.map((label) =>{
    return(
       {
      label,
      value: toBytes(label),
      })})
  return newData
}

const toBytes = (label) =>{
const info = label.split(' ');
const value = info[0];
const unit = info[1];

switch(unit){
  case 'GB':
        return value*Math.pow(10,9);
       
    case 'MB':
        return value*Math.pow(10,6);
     
    case 'KB':
      return value*Math.pow(10,3);
      
    case 'bytes':
      return value;
      
    default:
      return 0;
      
}
}

List(data);


