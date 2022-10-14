export default (id: number) => {
    const tr = document.getElementById(`${id}`);
    const NewObjData : any = new Object();
    console.log(tr?.childNodes[3].lastChild?.textContent);
    
    NewObjData.id = id;
    NewObjData.name = tr?.childNodes[0]
}