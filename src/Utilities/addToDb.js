const getStoreApp = () =>{
    const appStoredStr = localStorage.getItem('downloads');
    if(appStoredStr){
        const storedAppData = JSON.parse(appStoredStr);
        return storedAppData;
    }
    else{
        return [];
    }
}

const addToDb = (id)=>{
    const storedAppData = getStoreApp();
    if (storedAppData.includes(id)){
        alert("this , app is already installed")
    }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("downloads",data)
    }

}

const removeItem = (id)=>{
    const apps = JSON.parse(localStorage.getItem('downloads')) || [];
const updatedApps = apps.filter(app => app !== id);
localStorage.setItem('downloads', JSON.stringify(updatedApps));

}

export {addToDb,getStoreApp,removeItem}