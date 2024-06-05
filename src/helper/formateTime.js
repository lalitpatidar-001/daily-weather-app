import moment from "moment";

export default function formateTime(timestamp){
        if(!timestamp) return ;
        return  moment.unix(timestamp).format(' h:mm a');

} 