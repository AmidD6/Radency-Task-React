import ShowMonth from "./ShowMonth";


export default function(date: string){
    // console.log(date);
    
    let year = date.replace(/-\d{2}-\d{2}/, '');
    let a = date.replace(/\d{4}-/, '');
    let mouth = Number(a.replace(/-\d{2}/, ''));
    let day = Number(date.replace(/\d{4}-\d{2}-/, ''));
    // console.log(ShowMonth(mouth) + ' ' + day + ', ' + year);
    
    return ShowMonth(mouth) + ' ' + day + ', ' + year;
}
